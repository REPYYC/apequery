// The world around the house: terrain that turns from snow to grass, the street (+z) and the back lane (-z),
// street lamps, spruces, deciduous trees and shrubs, the neighbouring houses with their network beacons, the
// garage, utility poles and wires, the parked EV with its charge cable, falling snow / rain / leaves and the
// chimney smoke. createWorld() builds all of it into one group and returns
// { world, ground, groundMat, U, update, lamps, setThermal, evGroup, props, sight }.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { clamp, lerp, smooth, rng, fbm, boxUV } from "./util.js";
import { glowTexture, dotTexture, poolTexture } from "./textures.js";

// counter that gives every patched material its own program cache key
let KEY = 0;

// line of sight from the camera to its focus point, in view space: xyz = unit direction, w = distance (main.js sets it every frame)
const SIGHT = {
  value: new THREE.Vector4(0, 0, -1, 30),
};

// Patches a material so it dissolves (dithered discard) when the camera comes close: untouched beyond `far`, gone at `near`.
// With clearSight, fragments around the line from the camera to the focus point, in front of the focus, are thinned out too.
function fadeNear(mat, near, far, clearSight = false) {
  const prevCompile = mat.onBeforeCompile,
    cacheId = ++KEY;
  mat.onBeforeCompile = (shader, renderer) => {
    if (prevCompile) {
      prevCompile(shader, renderer);
    }
    shader.uniforms.uSight = SIGHT;
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
uniform vec4 uSight;`,
      )
      .replace(
        "#include <clipping_planes_fragment>",
        `#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${near.toFixed(1)}, ${far.toFixed(1)}, length(fp));${
          clearSight
            ? `
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`
            : ""
        }
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`,
      );
  };
  mat.customProgramCacheKey = () => "fade" + cacheId;
  return mat;
}

// Patches a vertex-coloured material so each vertex is whitened by its aSnow attribute times the snow uniform.
function snowVertex(mat, snowUniform) {
  const prevCompile = mat.onBeforeCompile,
    cacheId = ++KEY;
  mat.onBeforeCompile = (shader, renderer) => {
    if (prevCompile) {
      prevCompile(shader, renderer);
    }
    shader.uniforms.uSnow = snowUniform;
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute float aSnow;
uniform float uSnow;`,
      )
      .replace(
        "#include <color_vertex>",
        `#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`,
      );
  };
  mat.customProgramCacheKey = () => "snowv" + cacheId;
  return mat;
}

// Builds the world. M = materials, T = PBR texture sets, glowTex / markTex = sprite textures, tier = quality tier,
// reduce = build no weather particles.
export function createWorld({ M: M, T: T, glowTex: glowTex, markTex: markTex, tier: tier, reduce: reduce }) {
  // root group, seeded random numbers, small shared textures
  const world = new THREE.Group(),
    R = rng(21),
    dotTex = dotTexture("rgba(255,255,255,0.7)"),
    smokeTex = poolTexture(),
    poolTex = glowTexture("rgba(255,196,120,0.9)", "rgba(255,150,70,0)"),
    // uniforms shared by the materials below; update() and main.js write them
    U = {
      uSnow: {
        value: 1,
      },
      uRoofSnow: {
        value: 1,
      },
      uTint: {
        value: new THREE.Color(1, 1, 1),
      },
      uGrow: {
        value: 0,
      },
      uLeafTint: {
        value: new THREE.Color(0.3, 0.5, 0.15),
      },
    },
    // ground material: the snow texture set; the shader patch below blends in tinted grass
    grassSet = T.grass,
    snowSet = T.snow,
    groundMat = new THREE.MeshStandardMaterial({
      map: snowSet.map,
      normalMap: snowSet.normalMap,
      roughnessMap: snowSet.rmMap,
      metalnessMap: snowSet.rmMap,
      roughness: 1,
      metalness: 1,
      transparent: true,
      normalScale: new THREE.Vector2(1.1, 1.1),
      envMapIntensity: 0.9,
    });
  // the snow cover breaks up into grass, by world-space noise, as uSnow goes from 1 to 0
  groundMat.onBeforeCompile = (shader) => {
    shader.uniforms.uSnow = U.uSnow;
    shader.uniforms.uTint = U.uTint;
    shader.uniforms.uGrass = {
      value: grassSet.map,
    };
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec2 vWxz;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`,
      )
      .replace(
        "#include <map_fragment>",
        `
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`,
      );
  };

  // terrain grid: GN cells per side over a half-extent of GH, spaced by sinh (factor GK) so the cells are small near the house
  const GN = 200,
    GK = 6,
    GH = 450,
    gridCoords = Array.from(
      {
        length: GN + 1,
      },
      (slot, i) => (GH * Math.sinh(GK * ((i / GN) * 2 - 1))) / Math.sinh(GK),
    ),
    // height at (x, z): hills far out, plus small bumps that start beyond the house and stay flat across
    // the street, the back lane and the driveway
    terrain = (x, z) => {
      const dist = Math.hypot(x, z),
        hills = smooth(40, 220, dist) * (fbm(x * 0.012 + 3, z * 0.012 + 8, 4, 4096, 4096, 3) - 0.35) * 22,
        bumps =
          (fbm(x * 0.09, z * 0.09, 3, 4096, 4096, 9) - 0.5) *
          0.35 *
          smooth(8, 22, dist) *
          (1 - smooth(14, 17, z) * (1 - smooth(27, 30, z))) *
          (1 - smooth(-22.5, -20.5, z) * (1 - smooth(-15.5, -13.5, z))) *
          (1 - smooth(5, 6.2, x) * (1 - smooth(10.2, 11.5, x)) * smooth(0.5, 2, z) * (1 - smooth(16.5, 18, z)));
      return hills + bumps;
    },
    groundGeo = new THREE.BufferGeometry();
  {
    // one vertex per grid point, uv = world x / z
    const positions = new Float32Array((GN + 1) * (GN + 1) * 3),
      uvs = new Float32Array((GN + 1) * (GN + 1) * 2),
      indices = [];
    for (let row = 0; row <= GN; row++) {
      for (let col = 0; col <= GN; col++) {
        const vert = row * (GN + 1) + col,
          x = gridCoords[col],
          z = gridCoords[row];
        positions[vert * 3] = x;
        positions[vert * 3 + 1] = terrain(x, z);
        positions[vert * 3 + 2] = z;
        uvs[vert * 2] = x;
        uvs[vert * 2 + 1] = z;
      }
    }
    // two triangles per cell; the cells under the house footprint are left out
    for (let row = 0; row < GN; row++) {
      for (let col = 0; col < GN; col++) {
        const centerX = (gridCoords[col] + gridCoords[col + 1]) / 2,
          centerZ = (gridCoords[row] + gridCoords[row + 1]) / 2;
        if (Math.abs(centerX) < 5.1 && Math.abs(centerZ) < 4.1) {
          continue;
        }
        const vert = row * (GN + 1) + col,
          vertX = vert + 1,
          vertZ = vert + GN + 1,
          vertXZ = vertZ + 1;
        indices.push(vert, vertZ, vertX, vertX, vertZ, vertXZ);
      }
    }
    groundGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    groundGeo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    groundGeo.setIndex(indices);
    groundGeo.computeVertexNormals();
  }
  // ground mesh; surfaceMats collects the paved-surface materials that update() fades together with it
  const surfaceMats = [],
    ground = new THREE.Mesh(groundGeo, groundMat);
  ground.receiveShadow = true;
  ground.renderOrder = -1;
  world.add(ground);

  // street in front of the house
  const roadMat = M.asphalt.clone();
  [roadMat.map, roadMat.normalMap, roadMat.roughnessMap, roadMat.metalnessMap].forEach((tex) => {
    if (tex) {
      tex.repeat.set(220, 3);
    }
  });
  roadMat.roughness = 0.72;
  roadMat.metalness = 0;
  roadMat.metalnessMap = null;
  roadMat.envMapIntensity = 1.4;
  const road = new THREE.Mesh(new THREE.PlaneGeometry(660, 9), roadMat);
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0.012, 22.2);
  road.receiveShadow = true;
  world.add(road);
  // centre-line dashes
  let dash = null;
  {
    const dashGeo = new THREE.PlaneGeometry(2.2, 0.14),
      dashMesh = new THREE.InstancedMesh(
        dashGeo,
        new THREE.MeshStandardMaterial({
          color: 14070346,
          roughness: 0.8,
        }),
        90,
      ),
      matrix = new THREE.Matrix4(),
      layFlat = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)),
      pos = new THREE.Vector3(),
      unitScale = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < 90; i++) {
      pos.set(-180 + i * 4, 0.02, 22.2);
      matrix.compose(pos, layFlat, unitScale);
      dashMesh.setMatrixAt(i, matrix);
    }
    dashMesh.receiveShadow = true;
    world.add(dashMesh);
    dash = dashMesh;
  }

  // sidewalk, front path and driveway pad
  surfaceMats.push(roadMat, M.pavement);
  const walk = new THREE.Mesh(new THREE.BoxGeometry(660, 0.1, 1.8), M.pavement);
  walk.position.set(0, 0.05, 15.6);
  walk.receiveShadow = true;
  walk.castShadow = true;
  world.add(walk);
  const path = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.05, 9.4), M.pavement);
  path.position.set(0.7, 0.03, 10.9);
  path.receiveShadow = true;
  world.add(path);
  const pad = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.06, 14.5), M.pavement);
  pad.position.set(7.9, 0.03, 9.3);
  pad.receiveShadow = true;
  world.add(pad);

  // back lane
  const laneMat = M.asphalt.clone();
  [laneMat.map, laneMat.normalMap, laneMat.roughnessMap, laneMat.metalnessMap].forEach((tex) => {
    if (tex) {
      tex.repeat.set(220, 1.5);
    }
  });
  laneMat.metalnessMap = null;
  laneMat.metalness = 0;
  laneMat.roughness = 0.9;
  laneMat.color.setScalar(1.25);
  surfaceMats.push(laneMat);
  const lane = new THREE.Mesh(new THREE.PlaneGeometry(660, 4.5), laneMat);
  lane.rotation.x = -Math.PI / 2;
  lane.position.set(0, 0.012, -18.2);
  lane.receiveShadow = true;
  world.add(lane);

  // snow berms along both edges of the street
  const berms = (() => {
      const bermGeo = new THREE.SphereGeometry(1, 10, 6),
        bermMesh = new THREE.InstancedMesh(
          bermGeo,
          new THREE.MeshStandardMaterial({
            color: 14673906,
            roughness: 0.95,
          }),
          70,
        ),
        matrix = new THREE.Matrix4(),
        noRotation = new THREE.Quaternion(),
        pos = new THREE.Vector3(),
        scale = new THREE.Vector3();
      for (let i = 0; i < 70; i++) {
        const farSide = i % 2,
          x = -140 + (i >> 1) * 8 + R() * 3;
        pos.set(x, 0.1, farSide ? 26.9 : 17.6 + R() * 0.2);
        scale.set(2.8 + R() * 1.4, 0.55 + R() * 0.25, 0.9 + R() * 0.3);
        matrix.compose(pos, noRotation, scale);
        bermMesh.setMatrixAt(i, matrix);
      }
      bermMesh.castShadow = true;
      bermMesh.receiveShadow = true;
      world.add(bermMesh);
      return bermMesh;
    })(),
    // street lamps: shared materials and geometry
    lamps = [],
    lampMat = fadeNear(M.pole.clone(), 3.5, 9),
    headMat = fadeNear(
      new THREE.MeshStandardMaterial({
        color: 3817544,
        roughness: 0.42,
        metalness: 0.65,
      }),
      3.5,
      9,
    ),
    lampGlow = new THREE.MeshBasicMaterial({
      color: new THREE.Color(3.2, 2.2, 1.1),
      toneMapped: false,
    }),
    armCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 6.9, 0),
      new THREE.Vector3(0, 7.45, 0.25),
      new THREE.Vector3(0, 7.6, 0.9),
      new THREE.Vector3(0, 7.5, 1.6),
    ]),
    armGeo = new THREE.TubeGeometry(armCurve, 14, 0.05, 8),
    headGeo = new THREE.SphereGeometry(1, 24, 12);
  headGeo.scale(0.54, 0.085, 0.23);
  // one lamp per position: pole, curved arm, head, glowing lens, halo sprite and a light pool on the ground
  [
    [-13, 16.6],
    [11, 16.6],
    [34, 16.6],
    [-38, 16.6],
  ].forEach(([x, z]) => {
    const lamp = new THREE.Group();
    lamp.position.set(x, 0, z);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 7.2, 10), lampMat);
    pole.position.y = 3.6;
    pole.castShadow = true;
    lamp.add(pole);
    const arm = new THREE.Mesh(armGeo, lampMat);
    arm.castShadow = true;
    lamp.add(arm);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 7.5, 1.78);
    head.rotation.x = 0.04;
    head.castShadow = true;
    lamp.add(head);
    const lens = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.24), lampGlow);
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, 7.445, 1.78);
    lens.userData.noAO = true;
    lamp.add(lens);
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    halo.position.set(0, 7.3, 1.78);
    halo.scale.set(5, 5, 1);
    halo.userData.noAO = true;
    lamp.add(halo);
    const pool = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: poolTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(0, 0.04, 2);
    pool.scale.set(15, 10, 1);
    pool.userData.noAO = true;
    lamp.add(pool);
    world.add(lamp);
    lamps.push({
      halo: halo,
      pool: pool,
      lens: lens,
    });
  });
  // point lights at the two lamps nearest the house
  const lampLight = new THREE.PointLight(16761466, 0, 32, 2);
  lampLight.position.set(11, 7, 18.2);
  world.add(lampLight);
  const lampLight2 = new THREE.PointLight(16761466, 0, 32, 2);
  lampLight2.position.set(-13, 7, 18.2);
  world.add(lampLight2);

  // light pools on the ground in front of the house (update() fades them in as rooms light up)
  const pools = [];
  [
    [-2.5, 7.4, 5.5, 4.2],
    [0.8, 8.4, 5.5, 4.6],
    [3.15, 7.4, 5.5, 4.2],
  ].forEach(([x, z, sizeX, sizeZ]) => {
    const pool = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: poolTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(x, 0.05, z);
    pool.scale.set(sizeX, sizeZ, 1);
    pool.userData.noAO = true;
    world.add(pool);
    pools.push(pool);
  });

  // spruces
  const spruceMat = fadeNear(snowVertex(M.spruce.clone(), U.uSnow), 5, 12, true);
  // one spruce: stacked cone skirts that ruffle and droop, on a short trunk
  function spruceGeo(seed) {
    const rand = rng(seed),
      parts = [],
      coneCount = 11;
    for (let i = 0; i < coneCount; i++) {
      const frac = i / (coneCount - 1),
        radius = lerp(1.7, 0.18, Math.pow(frac, 0.85)) * (0.94 + rand() * 0.12),
        coneHeight = lerp(1.7, 0.9, frac),
        baseY = 1 + i * 0.62,
        cone = new THREE.ConeGeometry(radius, coneHeight, 20, 4, true);
      cone.translate(0, baseY + coneHeight / 2, 0);
      const conePos = cone.attributes.position;
      for (let j = 0; j < conePos.count; j++) {
        const x = conePos.getX(j),
          y = conePos.getY(j),
          z = conePos.getZ(j),
          angle = Math.atan2(z, x),
          radial = Math.hypot(x, z),
          ruffle = 1 + Math.sin(angle * 7 + i * 2.3) * 0.09 + Math.sin(angle * 13 + i) * 0.04 + (rand() - 0.5) * 0.05,
          droop = (radial / radius) * (radial / radius) * 0.34 * (1 + 0.35 * Math.sin(angle * 5 + i * 1.3));
        conePos.setXYZ(j, x * ruffle, y - droop, z * ruffle);
      }
      cone.computeVertexNormals();
      parts.push(cone);
    }
    const trunk = new THREE.CylinderGeometry(0.1, 0.2, 1.6, 8);
    trunk.translate(0, 0.8, 0);
    parts.push(trunk);
    const geo = mergeGeometries(parts);
    geo.computeVertexNormals();
    // per vertex: needle green (bark brown below y = 1.15) and a snow weight that grows with the upward-facing normal
    const pos = geo.attributes.position,
      normals = geo.attributes.normal,
      colors = new Float32Array(pos.count * 3),
      snowWeights = new Float32Array(pos.count),
      color = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const normalY = normals.getY(i),
        noise = fbm(pos.getX(i) * 2.1, pos.getZ(i) * 2.1 + pos.getY(i) * 1.1, 3, 64, 64, 2);
      color.setRGB(0.05 + noise * 0.05, 0.12 + noise * 0.08, 0.09 + noise * 0.05);
      if (pos.getY(i) < 1.15) {
        color.setRGB(0.1, 0.07, 0.05);
      }
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      snowWeights[i] = pos.getY(i) < 1.15 ? 0 : clamp(smooth(0.05, 0.6, normalY + (noise - 0.5) * 0.7), 0, 1) * 0.78;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("aSnow", new THREE.BufferAttribute(snowWeights, 1));
    return geo;
  }
  // spruce positions [x, z, size]; the two geometry variants alternate
  const spruces = [
      [-9.5, 3, 1.1],
      [-11.8, -3.5, 1.4],
      [9.8, -5.5, 1.25],
      [-8.2, -8.5, 1.05],
      [15, -9, 1.35],
      [-14, 9.5, 1.2],
      [18, 9, 1.1],
      [-21, -6, 1.5],
      [24, -3, 1.25],
      [-27, 8, 1.2],
      [30, -12, 1.4],
      [-11.5, -13.5, 1.3],
      [6, -26, 1.1],
      [-18, -27, 1.45],
      [22, -27, 1.3],
      [-36, 3, 1.3],
      [40, 2, 1.2],
    ],
    spruceVariants = [spruceGeo(1), spruceGeo(2)],
    rootTreeGeo = spruceVariants[0];
  spruceVariants.forEach((geo, variant) => {
    const spots = spruces.filter((spot, index) => index % 2 === variant),
      mesh = new THREE.InstancedMesh(geo, spruceMat, spots.length),
      matrix = new THREE.Matrix4(),
      rotation = new THREE.Quaternion(),
      pos = new THREE.Vector3(),
      scale = new THREE.Vector3();
    spots.forEach(([x, z, size], i) => {
      rotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), R() * 6.28);
      pos.set(x, 0, z);
      scale.set(size, size * (0.9 + R() * 0.25), size);
      matrix.compose(pos, rotation, scale);
      mesh.setMatrixAt(i, matrix);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    world.add(mesh);
  });

  // shrubs along the front of the house
  const shrubs = [];
  {
    // a lumpy, flattened icosphere with vertex colours and snow weights
    const shrubMat = snowVertex(M.shrub.clone(), U.uSnow),
      shrubGeo = new THREE.IcosahedronGeometry(0.7, 3),
      pos = shrubGeo.attributes.position,
      colors = new Float32Array(pos.count * 3),
      snowWeights = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i),
        y = pos.getY(i),
        z = pos.getZ(i),
        noise = fbm(x * 2 + 5, z * 2 + y * 2, 3, 64, 64, 4),
        bulge = 1 + (noise - 0.5) * 0.35;
      pos.setXYZ(i, x * bulge, y * bulge * 0.72, z * bulge);
      colors[i * 3] = 0.06;
      colors[i * 3 + 1] = 0.15 + noise * 0.05;
      colors[i * 3 + 2] = 0.1;
      snowWeights[i] = smooth(0.05, 0.7, y / 0.7 + (noise - 0.5)) * 0.8;
    }
    shrubGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    shrubGeo.setAttribute("aSnow", new THREE.BufferAttribute(snowWeights, 1));
    shrubGeo.computeVertexNormals();
    [
      [-1.7, 4.9, 1.2],
      [-2.5, 4.7, 0.9],
      [2.9, 4.9, 1],
      [3.7, 4.6, 0.8],
      [-5.2, 4.6, 0.8],
    ].forEach(([x, z, size]) => {
      const shrub = new THREE.Mesh(shrubGeo, shrubMat);
      shrub.position.set(x, 0.35 * size, z);
      shrub.scale.setScalar(size);
      shrub.castShadow = true;
      shrub.receiveShadow = true;
      shrub.userData.keep = true;
      world.add(shrub);
      shrubs.push(shrub);
    });
  }

  // deciduous trees: bark material, leaf texture, leaf material
  const barkMat = fadeNear(
      snowVertex(
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 1,
        }),
        U.uSnow,
      ),
      5,
      12,
      true,
    ),
    // leaf texture: 30 grey ellipses, each with a midrib line, on a transparent canvas
    leafTex = (() => {
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 128;
      const ctx = canvas.getContext("2d"),
        rand = rng(77);
      for (let i = 0; i < 30; i++) {
        ctx.save();
        ctx.translate(12 + rand() * 104, 12 + rand() * 104);
        ctx.rotate(rand() * Math.PI);
        const shade = 150 + Math.floor(rand() * 105),
          halfWidth = 6 + rand() * 6,
          halfLength = 13 + rand() * 9;
        ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, halfWidth, halfLength, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(70,70,70,0.65)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, -halfLength);
        ctx.lineTo(0, halfLength);
        ctx.stroke();
        ctx.restore();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      return tex;
    })(),
    // leaves scale about their own centre with uGrow, are tinted by uLeafTint and keep one normal for both faces
    leafMat = fadeNear(
      (() => {
        const mat = new THREE.MeshStandardMaterial({
            map: leafTex,
            alphaTest: 0.5,
            alphaToCoverage: tier >= 1,
            vertexColors: true,
            roughness: 0.8,
            side: THREE.DoubleSide,
          }),
          cacheId = ++KEY;
        mat.onBeforeCompile = (shader) => {
          shader.uniforms.uGrow = U.uGrow;
          shader.uniforms.uLeafTint = U.uLeafTint;
          shader.vertexShader = shader.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`,
            )
            .replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`,
            )
            .replace(
              "#include <color_vertex>",
              `#include <color_vertex>
vColor.rgb *= uLeafTint;`,
            );
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <normal_fragment_begin>",
            THREE.ShaderChunk.normal_fragment_begin.replace("normal *= faceDirection;", ""),
          );
        };
        mat.customProgramCacheKey = () => "leaf" + cacheId;
        return mat;
      })(),
      5,
      12,
      true,
    );
  // one tree: { wood, leaf } geometries from recursive branching
  function treeGeo(seed) {
    const rand = rng(seed),
      woodParts = [],
      leafParts = [],
      yAxis = new THREE.Vector3(0, 1, 0);
    // adds a tapered limb from start along dir and returns its far end
    function addLimb(start, dir, length, radius) {
      const limbGeo = new THREE.CylinderGeometry(radius * 0.68, radius, length, 6, 1);
      limbGeo.applyMatrix4(
        new THREE.Matrix4().compose(
          start.clone().addScaledVector(dir, length / 2),
          new THREE.Quaternion().setFromUnitVectors(yAxis, dir),
          new THREE.Vector3(1, 1, 1),
        ),
      );
      woodParts.push(limbGeo);
      return start.clone().addScaledVector(dir, length);
    }
    const zAxis = new THREE.Vector3(0, 0, 1);
    // adds a cluster of 18 randomly turned leaf quads around center
    function addLeafCluster(center, spread) {
      const quadPositions = [],
        quadNormals = [],
        quadUvs = [],
        quadCenters = [],
        quadColors = [],
        quadIndices = [],
        clusterShade = 0.72 + rand() * 0.5,
        clusterWarmth = (rand() - 0.5) * 0.25;
      for (let i = 0; i < 18; i++) {
        const sphereY = rand() * 2 - 1,
          azimuth = rand() * Math.PI * 2,
          ringRadius = Math.sqrt(1 - sphereY * sphereY),
          outward = new THREE.Vector3(ringRadius * Math.cos(azimuth), sphereY * 0.85, ringRadius * Math.sin(azimuth)).normalize(),
          leafCenter = center.clone().addScaledVector(outward, spread * (0.3 + 0.7 * Math.cbrt(rand()))),
          leafSize = 0.8 + rand() * 0.55,
          facing = outward
            .clone()
            .add(new THREE.Vector3(rand() - 0.5, rand() - 0.3, rand() - 0.5).multiplyScalar(0.9))
            .normalize(),
          leafRot = new THREE.Quaternion()
            .setFromUnitVectors(zAxis, facing)
            .premultiply(new THREE.Quaternion().setFromAxisAngle(facing, rand() * 6.28)),
          shadeNormal = outward
            .clone()
            .add(new THREE.Vector3(0, 0.3, 0))
            .normalize(),
          baseIndex = quadPositions.length / 3;
        [
          [-0.5, -0.5],
          [0.5, -0.5],
          [0.5, 0.5],
          [-0.5, 0.5],
        ].forEach(([cornerX, cornerY]) => {
          const corner = new THREE.Vector3(cornerX * leafSize, cornerY * leafSize, 0).applyQuaternion(leafRot).add(leafCenter);
          quadPositions.push(corner.x, corner.y, corner.z);
          quadNormals.push(shadeNormal.x, shadeNormal.y, shadeNormal.z);
          quadUvs.push(cornerX + 0.5, cornerY + 0.5);
          quadCenters.push(leafCenter.x, leafCenter.y, leafCenter.z);
          const shade = clusterShade * (0.85 + 0.3 * rand());
          quadColors.push(shade * (1 + clusterWarmth), shade, shade * (1 - clusterWarmth * 0.6));
        });
        quadIndices.push(baseIndex, baseIndex + 1, baseIndex + 2, baseIndex, baseIndex + 2, baseIndex + 3);
      }
      const clusterGeo = new THREE.BufferGeometry();
      clusterGeo.setAttribute("position", new THREE.Float32BufferAttribute(quadPositions, 3));
      clusterGeo.setAttribute("normal", new THREE.Float32BufferAttribute(quadNormals, 3));
      clusterGeo.setAttribute("uv", new THREE.Float32BufferAttribute(quadUvs, 2));
      clusterGeo.setAttribute("aCenter", new THREE.Float32BufferAttribute(quadCenters, 3));
      clusterGeo.setAttribute("color", new THREE.Float32BufferAttribute(quadColors, 3));
      clusterGeo.setIndex(quadIndices);
      leafParts.push(clusterGeo);
    }
    // adds a limb, then forks into 2 or 3 thinner branches until depth reaches 0;
    // leaf clusters go on the tips and the outer forks
    function growBranch(start, dir, length, radius, depth) {
      const tip = addLimb(start, dir, length, radius);
      if (depth === 0) {
        addLeafCluster(tip, 0.9 + rand() * 0.7);
        if (rand() < 0.7) {
          addLeafCluster(tip.clone().add(new THREE.Vector3((rand() - 0.5) * 1.2, rand() * 0.6, (rand() - 0.5) * 1.2)), 0.7 + rand() * 0.5);
        }
        return;
      }
      const forkCount = depth >= 3 ? 3 : 2 + (rand() < 0.4 ? 1 : 0);
      for (let i = 0; i < forkCount; i++) {
        const bendAxis = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(rand() - 0.5, 0.25, rand() - 0.5)).normalize(),
          childDir = dir
            .clone()
            .applyAxisAngle(bendAxis, 0.45 + rand() * 0.7)
            .add(new THREE.Vector3(0, 0.18, 0))
            .normalize();
        growBranch(tip, childDir, length * (0.68 + rand() * 0.14), radius * 0.62, depth - 1);
      }
      if (depth <= 2) {
        addLeafCluster(tip.clone().add(new THREE.Vector3((rand() - 0.5) * 0.8, 0.3, (rand() - 0.5) * 0.8)), 0.8 + rand() * 0.5);
      }
    }
    growBranch(new THREE.Vector3(0, 0, 0), yAxis, 2.6, 0.24, 4);
    // bark colour and snow weight per vertex
    const woodGeo = mergeGeometries(woodParts),
      woodPos = woodGeo.attributes.position,
      woodNormals = woodGeo.attributes.normal,
      woodColors = new Float32Array(woodPos.count * 3),
      woodSnow = new Float32Array(woodPos.count);
    for (let i = 0; i < woodPos.count; i++) {
      const noise = fbm(woodPos.getX(i) * 3, woodPos.getY(i) * 3 + woodPos.getZ(i), 2, 64, 64, 6);
      woodColors[i * 3] = 0.16 + noise * 0.08;
      woodColors[i * 3 + 1] = 0.12 + noise * 0.06;
      woodColors[i * 3 + 2] = 0.09 + noise * 0.05;
      woodSnow[i] = clamp(woodNormals.getY(i) * 1.5, 0, 1) * 0.85;
    }
    woodGeo.setAttribute("color", new THREE.BufferAttribute(woodColors, 3));
    woodGeo.setAttribute("aSnow", new THREE.BufferAttribute(woodSnow, 1));
    return {
      wood: woodGeo,
      leaf: mergeGeometries(leafParts),
    };
  }
  // tree positions [x, z, size]; the two variants alternate
  const leafMeshes = [],
    TREES = [
      [-11.5, -1, 0.95],
      [12.2, -3.6, 1],
      [-9.5, -9.5, 1.1],
      [8.5, -9.8, 1.15],
      [-33, -9, 1.15],
      [35, -8, 1.05],
      [-26, 11, 1],
      [27, 9, 1],
      [-30, 18.8, 0.75],
      [44, 18.8, 0.75],
      [-9, -22, 1.2],
      [14, -23, 1.1],
    ];
  [treeGeo(31), treeGeo(47)].forEach((tree, variant) => {
    const spots = TREES.filter((spot, index) => index % 2 === variant),
      placeInstances = (geo, mat, castShadow) => {
        const mesh = new THREE.InstancedMesh(geo, mat, spots.length),
          matrix = new THREE.Matrix4(),
          rotation = new THREE.Quaternion(),
          pos = new THREE.Vector3(),
          scale = new THREE.Vector3();
        spots.forEach(([x, z, size], i) => {
          rotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (x * 7 + z * 3) % 6.28);
          pos.set(x, 0, z);
          scale.setScalar(size * 0.95);
          matrix.compose(pos, rotation, scale);
          mesh.setMatrixAt(i, matrix);
        });
        mesh.castShadow = castShadow;
        mesh.receiveShadow = true;
        world.add(mesh);
        return mesh;
      };
    placeInstances(tree.wood, barkMat, true);
    leafMeshes.push(placeInstances(tree.leaf, leafMat, true));
  });

  // neighbouring houses; their roofs whiten with uRoofSnow
  const roofMat = M.neighborRoof.clone();
  roofMat.onBeforeCompile = (shader) => {
    shader.uniforms.uRoofSnow = U.uRoofSnow;
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
uniform float uRoofSnow;`,
      )
      .replace(
        "#include <map_fragment>",
        `#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`,
      );
  };
  roofMat.customProgramCacheKey = () => "nroof";
  // window materials (glowing / dark) and the pane and frame placements collected while the houses are built
  const glowWin = new THREE.MeshBasicMaterial({
      color: new THREE.Color(1.5, 0.92, 0.42),
      transparent: true,
      opacity: 0,
    }),
    darkWin = new THREE.MeshStandardMaterial({
      color: 659222,
      roughness: 0.08,
      metalness: 0.4,
      envMapIntensity: 1.6,
    }),
    winLit = [],
    winDark = [],
    frames = [];
  // one house from { x, z, w, d, h, rh, tone, rot, garage, chimney }
  function neighbour(o) {
    const { x: x, z: z, w: width, d: depth, h: height, rh: roofHeight, tone: tone, rot: rotY = 0, garage: hasGarage, chimney: hasChimney } = o,
      group = new THREE.Group(),
      wallMat = M.neighbor.clone();
    wallMat.color.setHex(tone).multiplyScalar(1.9);
    const bodyGeo = new THREE.BoxGeometry(width, height, depth);
    boxUV(bodyGeo, {
      oy: height / 2,
    });
    const body = new THREE.Mesh(bodyGeo, wallMat);
    body.position.y = height / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);
    const gable = new THREE.Shape();
    gable.moveTo(-width / 2 - 0.5, 0);
    gable.lineTo(width / 2 + 0.5, 0);
    gable.lineTo(0, roofHeight);
    gable.lineTo(-width / 2 - 0.5, 0);
    const roof = new THREE.Mesh(
      new THREE.ExtrudeGeometry(gable, {
        depth: depth + 1,
        bevelEnabled: false,
      }),
      roofMat,
    );
    roof.position.set(0, height, -depth / 2 - 0.5);
    roof.castShadow = true;
    roof.receiveShadow = true;
    group.add(roof);
    if (hasChimney) {
      const chimneyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.4, 0.7), M.stone);
      chimneyMesh.position.set(width * 0.22, height + roofHeight * 0.55, -depth * 0.1);
      chimneyMesh.castShadow = true;
      group.add(chimneyMesh);
    }
    // records a window pane (lit or dark) and its frame in the house's local space
    const addWindow = (winX, winY, winZ, yaw, lit) => {
        const paneMatrix = new THREE.Matrix4().compose(
            new THREE.Vector3(winX, winY, winZ),
            new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
            new THREE.Vector3(1, 1, 1),
          ),
          frameMatrix = new THREE.Matrix4().compose(
            new THREE.Vector3(winX, winY, winZ).add(new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)).multiplyScalar(-0.012)),
            new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
            new THREE.Vector3(1, 1, 1),
          );
        (lit ? winLit : winDark).push({
          g: group,
          m: paneMatrix,
        });
        frames.push({
          g: group,
          m: frameMatrix,
        });
      },
      bays = Math.max(2, Math.round(width / 2.4));
    // front windows on two storeys (a garage door takes the first ground-floor bay), then one window per storey on each side
    for (let storey = 0; storey < 2; storey++) {
      for (let bay = 0; bay < bays; bay++) {
        if (!(hasGarage && storey === 0 && bay === 0)) {
          addWindow(-width / 2 + (bay + 0.5) * (width / bays), 1.5 + storey * 2.6, depth / 2 + 0.02, 0, R() > 0.32);
        }
      }
    }
    for (let storey = 0; storey < 2; storey++) {
      addWindow(width / 2 + 0.02, 1.5 + storey * 2.6, 0, Math.PI / 2, R() > 0.5);
      addWindow(-width / 2 - 0.02, 1.5 + storey * 2.6, 0, -Math.PI / 2, R() > 0.5);
    }
    // front door, garage door with seams
    const door = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.1, 0.12), M.walnut);
    door.position.set(width / 2 - 1.5, 1.05, depth / 2 + 0.05);
    group.add(door);
    if (hasGarage) {
      const garageDoor = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.3, 0.14), M.cedar);
      garageDoor.position.set(-width / 2 + 1.7, 1.15, depth / 2 + 0.06);
      group.add(garageDoor);
      for (let i = 1; i < 4; i++) {
        const seam = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.04, 0.16), M.trim);
        seam.position.set(-width / 2 + 1.7, i * 0.575, depth / 2 + 0.07);
        group.add(seam);
      }
    }
    group.position.set(x, 0, z);
    group.rotation.y = rotY;
    world.add(group);
    rooftops.push([x, height + roofHeight, z]);
    return group;
  }
  // ridge-top position of every neighbour; its beacon is placed above it
  const rooftops = [];
  // eight houses in a row with ours, five across the street turned to face it
  [
    {
      x: -17,
      z: -1,
      w: 7.4,
      d: 7,
      h: 5.4,
      rh: 2.6,
      tone: 7304314,
      garage: true,
      chimney: true,
    },
    {
      x: 17.5,
      z: 0.5,
      w: 6.8,
      d: 6.6,
      h: 4.8,
      rh: 2.4,
      tone: 8023912,
    },
    {
      x: -33,
      z: -2,
      w: 7.2,
      d: 7.5,
      h: 5.2,
      rh: 2.5,
      tone: 6251884,
      chimney: true,
    },
    {
      x: 34,
      z: 0,
      w: 7.6,
      d: 7,
      h: 5.6,
      rh: 2.8,
      tone: 6975608,
      garage: true,
    },
    {
      x: -49,
      z: 0,
      w: 7,
      d: 7,
      h: 5,
      rh: 2.4,
      tone: 7565679,
    },
    {
      x: 50,
      z: -1,
      w: 7,
      d: 7,
      h: 5.2,
      rh: 2.4,
      tone: 6712178,
      chimney: true,
    },
    {
      x: -66,
      z: 1,
      w: 7,
      d: 7,
      h: 5,
      rh: 2.4,
      tone: 7171954,
      garage: true,
    },
    {
      x: 67,
      z: 0,
      w: 7,
      d: 7,
      h: 5,
      rh: 2.4,
      tone: 7369592,
    },
    {
      x: -24,
      z: 40,
      w: 7,
      d: 7,
      h: 5.2,
      rh: 2.5,
      tone: 6975092,
      rot: Math.PI,
      garage: true,
    },
    {
      x: -8,
      z: 41,
      w: 7.4,
      d: 7,
      h: 5.4,
      rh: 2.6,
      tone: 7828073,
      rot: Math.PI,
      chimney: true,
    },
    {
      x: 10,
      z: 40,
      w: 7,
      d: 6.8,
      h: 5,
      rh: 2.4,
      tone: 6843764,
      rot: Math.PI,
    },
    {
      x: 28,
      z: 41,
      w: 7.2,
      d: 7,
      h: 5.4,
      rh: 2.6,
      tone: 7500921,
      rot: Math.PI,
      garage: true,
    },
    {
      x: 46,
      z: 40,
      w: 7,
      d: 7,
      h: 5.2,
      rh: 2.4,
      tone: 7106678,
      rot: Math.PI,
    },
  ].forEach(neighbour);
  // all panes and frames become three instanced meshes
  world.updateMatrixWorld(true);
  const instanceWindows = (list, geo, mat) => {
      const mesh = new THREE.InstancedMesh(geo, mat, list.length),
        matrix = new THREE.Matrix4();
      list.forEach(({ g: group, m: localMatrix }, i) => {
        matrix.multiplyMatrices(group.matrixWorld, localMatrix);
        mesh.setMatrixAt(i, matrix);
      });
      mesh.userData.noAO = false;
      world.add(mesh);
      return mesh;
    },
    paneGeo = new THREE.PlaneGeometry(1, 1.15),
    frameGeo = new THREE.PlaneGeometry(1.16, 1.31),
    unusedList = [];
  instanceWindows(winLit, paneGeo, glowWin);
  instanceWindows(winDark, paneGeo, darkWin);
  instanceWindows(frames, frameGeo, M.trim);

  // network beacons: above each neighbour a mark sprite with a light beam below it, and an arc with travelling dots
  // to the hub above the house
  const beaconGroup = new THREE.Group();
  beaconGroup.visible = false;
  world.add(beaconGroup);
  const beamGeo = new THREE.CylinderGeometry(0.05, 0.05, 1, 8, 1, true),
    beacons = [],
    hub = new THREE.Vector3(0, 12.6, 0);
  rooftops.forEach(([x, top, z], index) => {
    const markPos = new THREE.Vector3(x, top + 3.4, z),
      mark = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: markTex,
          transparent: true,
          depthWrite: false,
          depthTest: false,
          opacity: 0,
        }),
      );
    mark.position.copy(markPos);
    mark.renderOrder = 12;
    mark.userData.noAO = true;
    beaconGroup.add(mark);
    const beam = new THREE.Mesh(
      beamGeo,
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(2.2, 1.3, 0.55),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    beam.scale.set(1, 3.2, 1);
    beam.position.set(x, top + 1.6, z);
    beam.userData.noAO = true;
    beam.raycast = () => {};
    beaconGroup.add(beam);
    const apex = markPos.clone().lerp(hub, 0.5);
    apex.y += 5 + markPos.distanceTo(hub) * 0.18;
    const curve = new THREE.CatmullRomCurve3([
        markPos,
        markPos
          .clone()
          .lerp(apex, 0.5)
          .setY(apex.y * 0.9),
        apex,
        apex
          .clone()
          .lerp(hub, 0.5)
          .setY(apex.y * 0.9),
        hub,
      ]),
      segments = 40,
      tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, segments, 0.07, 5, false),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(2.4, 1.4, 0.6),
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          toneMapped: false,
        }),
      );
    tube.userData.noAO = true;
    tube.raycast = () => {};
    beaconGroup.add(tube);
    const dotCount = 9,
      dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(dotCount * 3), 3));
    const dots = new THREE.Points(
      dotGeo,
      new THREE.PointsMaterial({
        size: 0.9,
        map: dotTex,
        color: new THREE.Color(2.4, 1.5, 0.7),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    dots.frustumCulled = false;
    dots.userData.noAO = true;
    dots.raycast = () => {};
    beaconGroup.add(dots);
    beacons.push({
      spr: mark,
      bm: beam,
      tube: tube,
      segs: segments,
      curve: curve,
      pts: dots,
      n: dotCount,
      d: markPos.distanceTo(hub),
      delay: 0,
    });
  });
  // beacons nearer to the hub appear earlier
  beacons.sort((beaconA, beaconB) => beaconA.d - beaconB.d);
  beacons.forEach((beacon, i) => {
    beacon.delay = i / beacons.length;
  });
  // mark above the hub
  const hubMark = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: markTex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      opacity: 0,
    }),
  );
  hubMark.position.copy(hub).add(new THREE.Vector3(0, 1.2, 0));
  hubMark.scale.set(4.2, 4.2, 1);
  hubMark.renderOrder = 13;
  hubMark.userData.noAO = true;
  beaconGroup.add(hubMark);
  // scratch point on a beacon arc
  const curvePoint = new THREE.Vector3();
  // level 0..1 reveals the beacons one after another; t drives the pulsing and the travelling dots
  function updateBeacons(level, t) {
    beaconGroup.visible = level > 0.003;
    if (beaconGroup.visible) {
      hubMark.material.opacity = smooth(0, 0.15, level);
      hubMark.scale.setScalar(4.2 + Math.sin(t * 3) * 0.3);
      beacons.forEach((beacon) => {
        const reveal = smooth(beacon.delay * 0.7, beacon.delay * 0.7 + 0.3, level);
        beacon.spr.material.opacity = reveal;
        beacon.spr.scale.setScalar(2.4 * (0.6 + 0.4 * reveal));
        beacon.bm.material.opacity = 0.5 * reveal;
        beacon.bm.scale.y = 3.2 + 6 * reveal;
        beacon.bm.position.y = beacon.spr.position.y - beacon.bm.scale.y / 2 - 1.6;
        const drawCount = Math.floor(smooth(0.1 + beacon.delay * 0.6, 0.45 + beacon.delay * 0.6, level) * beacon.segs) * 5 * 6;
        beacon.tube.geometry.setDrawRange(0, drawCount);
        beacon.tube.material.opacity = 0.34 * reveal * (0.8 + 0.2 * Math.sin(t * 3 + beacon.delay * 9));
        const dotArray = beacon.pts.geometry.attributes.position.array,
          reach = smooth(0.1 + beacon.delay * 0.6, 0.45 + beacon.delay * 0.6, level);
        for (let i = 0; i < beacon.n; i++) {
          const along = (i / beacon.n + t * 0.16 + beacon.delay) % 1;
          if (along > reach) {
            dotArray[i * 3 + 1] = -999;
            continue;
          }
          beacon.curve.getPointAt(along, curvePoint);
          dotArray[i * 3] = curvePoint.x;
          dotArray[i * 3 + 1] = curvePoint.y;
          dotArray[i * 3 + 2] = curvePoint.z;
        }
        beacon.pts.geometry.attributes.position.needsUpdate = true;
        beacon.pts.material.opacity = reveal;
      });
    }
  }

  // back lane: materials for the utility poles and wires; lanterns = the garage's sconce halos (+ .pool, their light on the ground)
  const utilityPoleMat = new THREE.MeshStandardMaterial({
      color: 4864555,
      roughness: 0.95,
    }),
    wireMat = new THREE.MeshBasicMaterial({
      color: 723724,
    }),
    lanterns = [];

  // detached garage: body, gable roof, two doors, sconces
  (() => {
    const garage = new THREE.Group();
    garage.position.set(-3.4, 0, -11.4);
    world.add(garage);
    const width = 7.4,
      depth = 6.4,
      height = 3.1,
      bodyGeo = new THREE.BoxGeometry(width, height, depth);
    boxUV(bodyGeo, {
      oy: height / 2,
    });
    const body = new THREE.Mesh(bodyGeo, M.bb.clone());
    body.material.color.setScalar(1);
    body.position.y = height / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    garage.add(body);
    const gable = new THREE.Shape();
    gable.moveTo(-width / 2 - 0.45, 0);
    gable.lineTo(width / 2 + 0.45, 0);
    gable.lineTo(0, 1.9);
    gable.lineTo(-width / 2 - 0.45, 0);
    const roof = new THREE.Mesh(
      new THREE.ExtrudeGeometry(gable, {
        depth: depth + 0.9,
        bevelEnabled: false,
      }),
      roofMat,
    );
    roof.position.set(0, height, -depth / 2 - 0.45);
    roof.castShadow = true;
    roof.receiveShadow = true;
    garage.add(roof);
    // two doors: panel, seams, window strip and frame
    for (let i = 0; i < 2; i++) {
      const doorX = -1.8 + i * 3.6,
        door = new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.4, 0.12), M.walnut);
      door.position.set(doorX, 1.2, -depth / 2 - 0.05);
      door.castShadow = true;
      garage.add(door);
      for (let j = 1; j < 4; j++) {
        const seam = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.04, 0.14), M.trim);
        seam.position.set(doorX, j * 0.6, -depth / 2 - 0.08);
        garage.add(seam);
      }
      const doorWindow = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.3, 0.14), M.mirror);
      doorWindow.position.set(doorX, 2.05, -depth / 2 - 0.09);
      garage.add(doorWindow);
      const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(3.3, 2.55, 0.1), M.trim);
      doorFrame.position.set(doorX, 1.27, -depth / 2 - 0);
      garage.add(doorFrame);
    }
    // a sconce with a halo at each end of the door wall
    [-3.3, 3.3].forEach((sconceX) => {
      const sconce = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.26, 12), M.sconce);
      sconce.position.set(sconceX, 2.55, -depth / 2 - 0.2);
      sconce.userData.noAO = true;
      garage.add(sconce);
      const halo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0,
        }),
      );
      halo.position.set(sconceX, 2.55, -depth / 2 - 0.5);
      halo.scale.set(2.2, 2.2, 1);
      halo.userData.noAO = true;
      garage.add(halo);
      lanterns.push(halo);
    });
    const pool = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: poolTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(0, 0.05, -depth / 2 - 2.2);
    pool.scale.set(10, 5, 1);
    pool.userData.noAO = true;
    garage.add(pool);
    lanterns.pool = pool;
  })();

  // utility poles along the lane: mast, crossarm, three insulators
  const poleXs = [-75.2, -49.2, -23.2, 2.8, 28.8, 54.8, 80.8];
  poleXs.forEach((poleX) => {
    const pole = new THREE.Group();
    pole.position.set(poleX, 0, -15.5);
    world.add(pole);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.19, 9.8, 10), utilityPoleMat);
    mast.position.y = 4.9;
    mast.castShadow = true;
    pole.add(mast);
    const crossarm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 2.2), utilityPoleMat);
    crossarm.position.y = 9.2;
    pole.add(crossarm);
    [-0.85, 0, 0.85].forEach((offsetZ) => {
      const insulator = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.2, 8), M.ceramic);
      insulator.position.set(0, 9.36, offsetZ);
      pole.add(insulator);
    });
    // the pole behind the house also carries a transformer can
    if (Math.abs(poleX - 2.8) < 1) {
      const transformer = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.95, 14), M.steel);
      transformer.position.set(0.5, 8.35, 0.2);
      transformer.castShadow = true;
      pole.add(transformer);
      const transformerCap = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.12, 14), M.steel);
      transformerCap.position.set(0.5, 8.9, 0.2);
      pole.add(transformerCap);
    }
  });
  // three sagging wires between each pair of neighbouring poles
  const wireGeos = [];
  for (let i = 0; i < poleXs.length - 1; i++) {
    [-0.85, 0, 0.85].forEach((offsetZ) => {
      const start = new THREE.Vector3(poleXs[i], 9.4, -15.5 + offsetZ),
        end = new THREE.Vector3(poleXs[i + 1], 9.4, -15.5 + offsetZ),
        mid = start.clone().lerp(end, 0.5);
      mid.y -= 0.9;
      wireGeos.push(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([
            start,
            start
              .clone()
              .lerp(mid, 0.5)
              .setY(9.4 - 0.45),
            mid,
            mid
              .clone()
              .lerp(end, 0.5)
              .setY(9.4 - 0.45),
            end,
          ]),
          24,
          0.022,
          4,
        ),
      );
    });
  }
  {
    // service drop from the transformer pole to the back of the house
    const dropStart = new THREE.Vector3(2.8, 9.4, -15.5),
      dropEnd = new THREE.Vector3(2.8, 5.4, -4.3),
      dropMid = dropStart.clone().lerp(dropEnd, 0.5);
    dropMid.y -= 0.7;
    wireGeos.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([dropStart, dropMid, dropEnd]), 20, 0.026, 4));
  }
  const wires = new THREE.Mesh(mergeGeometries(wireGeos), wireMat);
  wires.castShadow = false;
  wires.raycast = () => {};
  world.add(wires);

  // parked EV and its charge cable
  const evGroup = new THREE.Group(),
    evSnow = [],
    evLights = {
      front: null,
      rear: null,
    },
    evCable = new THREE.Group();
  // car: body, glass cabin, roof panel, wheels, light bars
  (() => {
    const paintMat = new THREE.MeshPhysicalMaterial({
        color: 1784408,
        metalness: 0.65,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.5,
      }),
      glassMat = new THREE.MeshPhysicalMaterial({
        color: 395533,
        metalness: 0.2,
        roughness: 0.04,
        clearcoat: 1,
        envMapIntensity: 1.8,
      }),
      tireMat = new THREE.MeshStandardMaterial({
        color: 1052946,
        roughness: 0.85,
      }),
      rimMat = new THREE.MeshStandardMaterial({
        color: 12107462,
        metalness: 0.9,
        roughness: 0.25,
      }),
      bodyShape = new THREE.Shape();
    bodyShape.moveTo(-2.3, 0.28);
    bodyShape.lineTo(-2.38, 0.6);
    bodyShape.quadraticCurveTo(-2.36, 0.92, -2.05, 0.98);
    bodyShape.lineTo(1.35, 0.98);
    bodyShape.quadraticCurveTo(2.05, 0.9, 2.3, 0.7);
    bodyShape.lineTo(2.34, 0.44);
    bodyShape.quadraticCurveTo(2.3, 0.28, 2.1, 0.28);
    bodyShape.lineTo(-2.3, 0.28);
    const body = new THREE.Mesh(
      new THREE.ExtrudeGeometry(bodyShape, {
        depth: 1.7,
        bevelEnabled: true,
        bevelThickness: 0.09,
        bevelSize: 0.09,
        bevelSegments: 4,
        curveSegments: 14,
      }),
      paintMat,
    );
    body.geometry.translate(0, 0, -0.85);
    body.castShadow = true;
    evGroup.add(body);
    const cabinShape = new THREE.Shape();
    cabinShape.moveTo(-1.95, 0.96);
    cabinShape.quadraticCurveTo(-1.55, 1.42, -0.95, 1.46);
    cabinShape.lineTo(0.5, 1.44);
    cabinShape.quadraticCurveTo(0.95, 1.4, 1.38, 0.96);
    cabinShape.lineTo(-1.95, 0.96);
    const cabin = new THREE.Mesh(
      new THREE.ExtrudeGeometry(cabinShape, {
        depth: 1.62,
        bevelEnabled: true,
        bevelThickness: 0.07,
        bevelSize: 0.05,
        bevelSegments: 3,
        curveSegments: 12,
      }),
      glassMat,
    );
    cabin.geometry.translate(0, 0, -0.81);
    cabin.castShadow = true;
    evGroup.add(cabin);
    const roofPanel = new THREE.Mesh(new RoundedBoxGeometry(1.9, 0.07, 1.6, 2, 0.03), paintMat);
    roofPanel.position.set(-0.2, 1.47, 0);
    evGroup.add(roofPanel);
    [
      [-1.4, 0.8],
      [1.4, 0.8],
      [-1.4, -0.8],
      [1.4, -0.8],
    ].forEach(([wheelX, wheelZ]) => {
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.26, 24), tireMat);
      tire.rotation.x = Math.PI / 2;
      tire.position.set(wheelX, 0.37, wheelZ * 1 + Math.sign(wheelZ) * 0.04);
      tire.castShadow = true;
      evGroup.add(tire);
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.27, 20), rimMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.copy(tire.position);
      evGroup.add(rim);
    });
    const headlightMat = new THREE.MeshStandardMaterial({
        color: 1118481,
        emissive: 16777215,
        emissiveIntensity: 0.1,
      }),
      taillightMat = new THREE.MeshStandardMaterial({
        color: 2228224,
        emissive: 16722458,
        emissiveIntensity: 0.1,
      }),
      headlight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.5), headlightMat);
    headlight.position.set(2.33, 0.72, 0);
    headlight.userData.noAO = true;
    evGroup.add(headlight);
    const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.5), taillightMat);
    taillight.position.set(-2.4, 0.78, 0);
    taillight.userData.noAO = true;
    evGroup.add(taillight);
    evLights.front = headlightMat;
    evLights.rear = taillightMat;
    // snow on the roof and the hood (update() shows it while E.snow > 0.5)
    const roofSnow = new THREE.Mesh(new RoundedBoxGeometry(1.8, 0.07, 1.5, 2, 0.03), M.snowRoof);
    roofSnow.userData.keep = true;
    roofSnow.position.set(-0.2, 1.54, 0);
    evGroup.add(roofSnow);
    evSnow.push(roofSnow);
    const hoodSnow = new THREE.Mesh(new RoundedBoxGeometry(1, 0.05, 1.45, 2, 0.02), M.snowRoof);
    hoodSnow.userData.keep = true;
    hoodSnow.position.set(1.6, 1, 0);
    hoodSnow.rotation.z = -0.1;
    evGroup.add(hoodSnow);
    evSnow.push(hoodSnow);
    evGroup.position.set(7.9, 0, 6.3);
    evGroup.rotation.y = -Math.PI / 2;
    world.add(evGroup);
    // charge cable from the house wall to the car, with a pulsing LED at the wall end
    const cablePoints = [
        new THREE.Vector3(5.2, 1.2, 2.5),
        new THREE.Vector3(5.55, 0.5, 2.85),
        new THREE.Vector3(6.15, 0.12, 3.3),
        new THREE.Vector3(6.7, 0.4, 3.75),
        new THREE.Vector3(7, 0.82, 3.95),
      ],
      cable = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cablePoints), 24, 0.028, 6),
        new THREE.MeshStandardMaterial({
          color: 855310,
          roughness: 0.6,
        }),
      );
    cable.castShadow = true;
    evCable.add(cable);
    const led = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 10, 8),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.4, 3, 1.2),
      }),
    );
    led.position.set(5.16, 1.5, 2.5);
    led.userData.noAO = true;
    evCable.add(led);
    evCable.userData.led = led;
    world.add(evCable);
  })();

  // falling snow: points in a box that update() keeps centred on the camera focus;
  // flakeMotion = fall speed and sway phase per flake
  const FLAKES = reduce ? 0 : tier >= 1 ? 2200 : 900,
    flakeGeo = new THREE.BufferGeometry(),
    flakePos = new Float32Array(FLAKES * 3),
    flakeMotion = new Float32Array(FLAKES * 2),
    flakeBox = [90, 40, 90];
  for (let i = 0; i < FLAKES; i++) {
    flakePos[i * 3] = (R() - 0.5) * flakeBox[0];
    flakePos[i * 3 + 1] = R() * flakeBox[1];
    flakePos[i * 3 + 2] = (R() - 0.5) * flakeBox[2];
    flakeMotion[i * 2] = 0.7 + R() * 1.1;
    flakeMotion[i * 2 + 1] = R() * 6.28;
  }
  flakeGeo.setAttribute("position", new THREE.BufferAttribute(flakePos, 3));
  const flakeMat = new THREE.PointsMaterial({
      color: 16777215,
      size: 0.11,
      map: dotTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
    flakes = new THREE.Points(flakeGeo, flakeMat);
  flakes.frustumCulled = false;
  flakes.userData.noAO = true;
  world.add(flakes);
  // a few larger, fainter flakes
  const BOKEH = tier >= 1 && !reduce ? 140 : 0,
    bokehGeo = new THREE.BufferGeometry(),
    bokehPos = new Float32Array(BOKEH * 3);
  for (let i = 0; i < BOKEH; i++) {
    bokehPos[i * 3] = (R() - 0.5) * 50;
    bokehPos[i * 3 + 1] = R() * 22;
    bokehPos[i * 3 + 2] = (R() - 0.5) * 50;
  }
  bokehGeo.setAttribute("position", new THREE.BufferAttribute(bokehPos, 3));
  const bokehMat = new THREE.PointsMaterial({
      color: 14674175,
      size: 0.42,
      map: dotTex,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
    bokeh = new THREE.Points(bokehGeo, bokehMat);
  bokeh.frustumCulled = false;
  bokeh.userData.noAO = true;
  world.add(bokeh);

  // rain: short slanted line segments with individual fall speeds
  const DROPS = reduce ? 0 : tier >= 1 ? 1600 : 700,
    rainGeo = new THREE.BufferGeometry(),
    rainPos = new Float32Array(DROPS * 6),
    rainSpeed = new Float32Array(DROPS),
    rainBox = [70, 30, 70];
  for (let i = 0; i < DROPS; i++) {
    const x = (R() - 0.5) * rainBox[0],
      y = R() * rainBox[1],
      z = (R() - 0.5) * rainBox[2];
    rainPos.set([x, y, z, x - 0.04, y + 0.7, z], i * 6);
    rainSpeed[i] = 14 + R() * 6;
  }
  rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPos, 3));
  const rainMat = new THREE.LineBasicMaterial({
      color: 11455464,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
    rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  rain.userData.noAO = true;
  rain.raycast = () => {};
  world.add(rain);

  // falling leaves in four colours; leafPtsMotion = fall speed and sway phase per leaf
  const LEAVES = reduce ? 0 : tier >= 1 ? 420 : 160,
    leafPtsGeo = new THREE.BufferGeometry(),
    leafPtsPos = new Float32Array(LEAVES * 3),
    leafPtsMotion = new Float32Array(LEAVES * 2),
    leafPtsColors = new Float32Array(LEAVES * 3),
    leafPtsBox = [80, 22, 80],
    leafPtsPalette = [
      [0.95, 0.55, 0.1],
      [0.85, 0.3, 0.08],
      [0.9, 0.75, 0.15],
      [0.6, 0.2, 0.05],
    ];
  for (let i = 0; i < LEAVES; i++) {
    leafPtsPos[i * 3] = (R() - 0.5) * leafPtsBox[0];
    leafPtsPos[i * 3 + 1] = R() * leafPtsBox[1];
    leafPtsPos[i * 3 + 2] = (R() - 0.5) * leafPtsBox[2];
    leafPtsMotion[i * 2] = 0.5 + R() * 0.8;
    leafPtsMotion[i * 2 + 1] = R() * 6.28;
    const rgb = leafPtsPalette[i % 4];
    leafPtsColors.set(rgb, i * 3);
  }
  leafPtsGeo.setAttribute("position", new THREE.BufferAttribute(leafPtsPos, 3));
  leafPtsGeo.setAttribute("color", new THREE.BufferAttribute(leafPtsColors, 3));
  const leafPts = new THREE.Points(
    leafPtsGeo,
    new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      map: dotTex,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    }),
  );
  leafPts.frustumCulled = false;
  leafPts.userData.noAO = true;
  world.add(leafPts);

  // chimney smoke puffs, ages staggered over the 6-unit cycle
  const smoke = [];
  for (let i = 0; i < 22; i++) {
    const puff = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: smokeTex,
        transparent: true,
        depthWrite: false,
        opacity: 0,
        color: 12568276,
      }),
    );
    puff.userData = {
      age: (i / 22) * 6,
      noAO: true,
    };
    puff.renderOrder = 5;
    world.add(puff);
    smoke.push(puff);
  }

  // extra spruce at the back of the lot, visible only while the section cut is open
  const rootTree = new THREE.Mesh(rootTreeGeo, spruceMat);
  rootTree.position.set(0.9, 0, -12.4);
  rootTree.scale.setScalar(0.75);
  rootTree.castShadow = true;
  rootTree.visible = false;
  world.add(rootTree);

  // everything except the ground surfaces, berms, dashes and that spruce moves into the props group (main.js passes it to mergeStatic)
  const nonProps = new Set([ground, road, walk, path, pad, lane, berms, dash, rootTree]),
    props = new THREE.Group();
  world.add(props);
  world.children.slice().forEach((child) => {
    if (child !== props && !nonProps.has(child)) {
      props.add(child);
    }
  });

  // scratch vector for update()
  const tmpV = new THREE.Vector3();
  // thermal view on / off: recolours the snowflakes
  function setThermal(active) {
    flakeMat.color.set(active ? 6963104 : 16777215);
  }

  // per-frame update: E = derived environment, t = time, dt = frame delta, daylight = 0..1, focus = camera target,
  // chimney = world position of the chimney top, litK = 0..1, growing with the number of lit rooms
  function update(E, t, dt, daylight, focus, chimney, litK) {
    // the ground and the paved surfaces fade out with E.ground
    groundMat.opacity = E.ground;
    groundMat.depthWrite = E.ground > 0.95;
    ground.visible = E.ground > 0.01;
    surfaceMats.forEach((mat) => {
      const fading = E.ground < 0.99;
      if (mat.transparent !== fading) {
        mat.transparent = fading;
        mat.needsUpdate = true;
      }
      mat.opacity = E.ground;
      mat.depthWrite = !fading;
    });
    // season state for the shaders
    U.uSnow.value = E.snow;
    U.uRoofSnow.value = E.roofSnow;
    U.uGrow.value = E.grow;
    U.uLeafTint.value.copy(E.leafTint);
    updateBeacons(E.beacons || 0, t);
    // seasonal and view-dependent visibility
    rootTree.visible = E.section > 0.3;
    berms.visible = E.snow > 0.25;
    leafMeshes.forEach((leafMesh) => {
      leafMesh.visible = E.grow > 0.02;
      leafMesh.castShadow = E.grow > 0.5;
    });
    evSnow.forEach((snowCap) => {
      snowCap.visible = E.snow > 0.5;
    });
    evCable.visible = E.explode < 0.05;
    evGroup.visible = true;
    // lights come up as daylight fades: EV lights, street lamps, garage lanterns, window pools, neighbour windows
    const night = 1 - daylight;
    evLights.front.emissiveIntensity = 0.1 + 2.2 * night;
    evLights.rear.emissiveIntensity = 0.1 + 3 * night;
    evCable.userData.led.scale.setScalar(0.8 + 0.25 * Math.sin(t * 3));
    const groundFade = smooth(0.35, 0.9, E.ground);
    shrubs.forEach((shrub) => {
      shrub.visible = E.ground > 0.5 || E.explode > 0.05;
    });
    lamps.forEach((lamp) => {
      lamp.halo.material.opacity = 0.75 * night;
      lamp.pool.material.opacity = 0.55 * night * groundFade;
    });
    lampLight.intensity = 55 * night;
    lampLight2.intensity = 40 * night;
    lampGlow.color.setRGB(3.2, 2.2, 1.1).multiplyScalar(0.06 + 0.94 * night);
    lanterns.forEach((lantern) => {
      lantern.material.opacity = 0.5 * night;
    });
    lanterns.pool.material.opacity = 0.4 * night * groundFade;
    pools.forEach((pool, i) => {
      pool.material.opacity = 0.5 * night * clamp(litCount(litK, i), 0, 1) * (1 - E.ghost) * groundFade;
    });
    glowWin.opacity = night * 0.9;
    // the weather particles stay centred on the camera focus
    flakes.position.set(focus.x, 0, focus.z);
    bokeh.position.set(focus.x, 0, focus.z);
    rain.position.set(focus.x, 0, focus.z);
    leafPts.position.set(focus.x, 0, focus.z);
    // snow: flakes sway as they fall and wrap back to the top of the box
    const snowfall = E.snowfall;
    flakes.visible = bokeh.visible = snowfall > 0.02 && FLAKES > 0;
    if (flakes.visible) {
      const flakeArray = flakeGeo.attributes.position.array;
      for (let i = 0; i < FLAKES; i++) {
        flakeArray[i * 3 + 1] -= flakeMotion[i * 2] * dt * 1.5;
        flakeArray[i * 3] += Math.sin(t * 0.7 + flakeMotion[i * 2 + 1]) * dt * 0.3;
        flakeArray[i * 3 + 2] += Math.cos(t * 0.5 + flakeMotion[i * 2 + 1]) * dt * 0.2;
        if (flakeArray[i * 3 + 1] < 0) {
          flakeArray[i * 3 + 1] = flakeBox[1];
        }
      }
      flakeGeo.attributes.position.needsUpdate = true;
      const bokehArray = bokehGeo.attributes.position.array;
      for (let i = 0; i < BOKEH; i++) {
        bokehArray[i * 3 + 1] -= 0.8 * dt;
        if (bokehArray[i * 3 + 1] < 0) {
          bokehArray[i * 3 + 1] = 22;
        }
      }
      bokehGeo.attributes.position.needsUpdate = true;
      flakeMat.opacity = 0.8 * snowfall * (1 - daylight * 0.45);
      bokehMat.opacity = 0.2 * snowfall * (1 - daylight * 0.5);
    }
    // rain
    rain.visible = E.rain > 0.02 && DROPS > 0;
    if (rain.visible) {
      const rainArray = rainGeo.attributes.position.array;
      for (let i = 0; i < DROPS; i++) {
        const fall = rainSpeed[i] * dt;
        rainArray[i * 6 + 1] -= fall;
        rainArray[i * 6 + 4] -= fall;
        if (rainArray[i * 6 + 4] < 0) {
          rainArray[i * 6 + 1] += rainBox[1];
          rainArray[i * 6 + 4] += rainBox[1];
        }
      }
      rainGeo.attributes.position.needsUpdate = true;
      rainMat.opacity = 0.32 * E.rain;
    }
    // falling leaves
    leafPts.visible = E.leaves > 0.02 && LEAVES > 0;
    if (leafPts.visible) {
      const leafArray = leafPtsGeo.attributes.position.array;
      for (let i = 0; i < LEAVES; i++) {
        leafArray[i * 3 + 1] -= leafPtsMotion[i * 2] * dt * 0.9;
        leafArray[i * 3] += (Math.sin(t * 0.9 + leafPtsMotion[i * 2 + 1]) * 0.7 + 0.35) * dt;
        leafArray[i * 3 + 2] += Math.cos(t * 0.6 + leafPtsMotion[i * 2 + 1]) * 0.4 * dt;
        if (leafArray[i * 3 + 1] < 0) {
          leafArray[i * 3 + 1] = leafPtsBox[1];
        }
      }
      leafPtsGeo.attributes.position.needsUpdate = true;
      leafPts.material.opacity = 0.9 * E.leaves;
    }
    // smoke: each puff rises from the chimney top, drifts, grows and fades, then starts over
    smoke.forEach((puff) => {
      puff.userData.age += dt * 0.55;
      if (puff.userData.age > 6) {
        puff.userData.age -= 6;
      }
      const life = puff.userData.age / 6;
      tmpV.copy(chimney);
      tmpV.y += life * 5.2;
      tmpV.x += life * 2.2 + Math.sin(life * 5 + puff.id) * 0.18;
      tmpV.z += Math.cos(life * 3 + puff.id) * 0.15;
      puff.position.copy(tmpV);
      puff.scale.setScalar(0.5 + life * 2.6);
      puff.material.opacity = Math.sin(Math.PI * Math.min(1, life * 1.3)) * 0.34 * E.smoke * (0.5 + 0.5 * night);
    });
  }

  // staggers the window light pools: each further pool needs 0.3 more of litK before it starts to show
  const litCount = (lit, index) => lit - index * 0.3;
  return {
    world: world,
    ground: ground,
    groundMat: groundMat,
    U: U,
    update: update,
    lamps: lamps,
    setThermal: setThermal,
    evGroup: evGroup,
    props: props,
    sight: SIGHT,
  };
}
