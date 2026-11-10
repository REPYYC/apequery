// Underground section through the lot: a strata-textured earth face that rides with the cut plane and, in the slot in front of it,
// the buried services: water and gas mains and service lines, sewer lateral and main, tree roots, weeping tile, sump and soil gas (radon).
import * as THREE from "three";
import { clamp, lerp, smooth, rng, fbm } from "./util.js";
import { qscale, glowTexture, dotTexture } from "./textures.js";
// thickness (along x) of the slot revealed between the cut plane and the earth face
const SLOT = 0.38;
// scene: where the section is added; M: shared materials; tier: quality tier; reduce: reduced motion (no soil gas particles)
export function createUnderground({ scene: scene, M: M, tier: tier, reduce: reduce }) {
  // root group of the section, hidden until update() opens it
  const sectionGroup = new THREE.Group();
  sectionGroup.visible = false;
  scene.add(sectionGroup);
  const rand = rng(55),
    dotTex = dotTexture("rgba(255,255,255,0.65)"),
    V = (x, y, z) => new THREE.Vector3(x, y, z),
    // x of the cut plane the layout is built around, and the x inside the slot at which the service pipes run
    defaultCutX = 0.45,
    pipeX = 0.66,
    // earth face texture: strata colours by depth (0 to 9), wobbled and grained with noise, with stones scattered over it
    strataTex = (() => {
      const width = Math.round(1024 * qscale()),
        height = Math.round(512 * qscale()),
        canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d"),
        imageData = ctx.createImageData(width, height),
        pixels = imageData.data,
        // colour stops as [depth, rgb]
        strata = [
          [0, [58, 41, 29]],
          [0.5, [92, 64, 40]],
          [0.62, [150, 106, 62]],
          [2.2, [138, 98, 58]],
          [2.4, [150, 142, 120]],
          [4.6, [124, 118, 104]],
          [4.8, [100, 112, 120]],
          [7, [90, 98, 108]],
          [9, [74, 78, 86]],
        ],
        // colour at a depth, interpolated between the two neighbouring stops
        strataColor = (depth) => {
          let i = 0;
          while (i < strata.length - 2 && strata[i + 1][0] <= depth) {
            i++;
          }
          const [depthAbove, colorAbove] = strata[i],
            [depthBelow, colorBelow] = strata[i + 1],
            blend = clamp((depth - depthAbove) / (depthBelow - depthAbove), 0, 1);
          return [lerp(colorAbove[0], colorBelow[0], blend), lerp(colorAbove[1], colorBelow[1], blend), lerp(colorAbove[2], colorBelow[2], blend)];
        };
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const depth = (y / height) * 9 + (fbm(x / 90, y / 40, 3, 11, 8, 5) - 0.5) * 0.7 + Math.sin(x * 0.02 + y * 0.01) * 0.12,
            rgb = strataColor(clamp(depth, 0, 9)),
            grain = (fbm(x / 6, y / 6, 2, 170, 85, 9) - 0.5) * 34,
            offset = (y * width + x) * 4;
          pixels[offset] = clamp(rgb[0] + grain, 0, 255);
          pixels[offset + 1] = clamp(rgb[1] + grain, 0, 255);
          pixels[offset + 2] = clamp(rgb[2] + grain * 0.9, 0, 255);
          pixels[offset + 3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      // stones scattered through the band between depth 2.5 and 4.6
      for (let i = 0; i < 420 * qscale(); i++) {
        const shade = 105 + rand() * 75;
        ctx.fillStyle = `rgba(${shade | 0},${(shade * 0.96) | 0},${(shade * 0.86) | 0},0.85)`;
        ctx.beginPath();
        ctx.ellipse(rand() * width, ((2.5 + rand() * 2.1) / 9) * height, 1.5 + rand() * 3.5, 1.2 + rand() * 2.4, rand() * 3, 0, 6.3);
        ctx.fill();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.RepeatWrapping;
      tex.anisotropy = 8;
      return tex;
    })(),
    faceMat = new THREE.MeshStandardMaterial({
      map: strataTex,
      roughness: 1,
      metalness: 0,
    });
  strataTex.repeat.set(6, 1);
  // face: the cut earth, a vertical plane 9 deep standing one SLOT behind the cut plane
  const face = new THREE.Mesh(new THREE.PlaneGeometry(240, 9), faceMat);
  face.rotation.y = -Math.PI / 2;
  face.position.set(defaultCutX + SLOT, -4.52, 0);
  face.userData.noAO = true;
  face.userData.noPick = true;
  face.receiveShadow = false;
  sectionGroup.add(face);
  // base: gradient plane that continues the face downward, fading to near black
  const baseTex = (() => {
      const canvas = document.createElement("canvas");
      canvas.width = 4;
      canvas.height = 256;
      const ctx = canvas.getContext("2d"),
        gradient = ctx.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0, "rgb(74,78,86)");
      gradient.addColorStop(0.35, "rgb(24,26,31)");
      gradient.addColorStop(1, "rgb(6,7,9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 4, 256);
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    })(),
    base = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 60),
      new THREE.MeshBasicMaterial({
        map: baseTex,
        fog: false,
        toneMapped: false,
      }),
    );
  base.rotation.y = -Math.PI / 2;
  base.position.set(defaultCutX + SLOT, -9.02 - 30, 0);
  base.userData.noAO = true;
  base.userData.noPick = true;
  base.raycast = () => {};
  sectionGroup.add(base);
  // depth ticks: one per unit of depth from 0 to 9, longer at every third
  const ticks = new THREE.Group();
  sectionGroup.add(ticks);
  for (let depth = 0; depth <= 9; depth++) {
    const tick = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.05, depth % 3 === 0 ? 1.4 : 0.8),
      new THREE.MeshBasicMaterial({
        color: 16039294,
        toneMapped: false,
      }),
    );
    tick.position.set(0, -depth, 31 - (depth % 3 === 0 ? 0.7 : 0.4));
    tick.userData.noAO = true;
    tick.raycast = () => {};
    ticks.add(tick);
  }
  // lip: bright strip along the top edge of the face, at ground level
  const lip = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.07, 240),
    new THREE.MeshBasicMaterial({
      color: 16039294,
      toneMapped: false,
    }),
  );
  lip.position.set(defaultCutX + SLOT - 0.02, 0.02, 0);
  lip.userData.noAO = true;
  lip.raycast = () => {};
  sectionGroup.add(lip);
  // materials of the buried parts: double-sided and faintly emissive in their own colour; the crack material is unlit
  const makeUgMat = (color, roughness = 0.45, metalness = 0.2) => {
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: roughness,
        metalness: metalness,
        emissive: color,
        emissiveIntensity: 0.12,
        side: THREE.DoubleSide,
      });
      mat.userData.th = [0.3];
      return mat;
    },
    ugMats = {
      water: makeUgMat(4165606, 0.4, 0.3),
      gas: makeUgMat(15775786, 0.45, 0.2),
      sewer: makeUgMat(12169888, 0.8, 0),
      tile: makeUgMat(15855334, 0.6, 0),
      roots: makeUgMat(8017458, 0.95, 0),
      sump: makeUgMat(8362672, 0.5, 0.3),
      crack: new THREE.MeshBasicMaterial({
        color: new THREE.Color(3, 0.5, 0.35),
        toneMapped: false,
      }),
    };
  ugMats.roots.emissiveIntensity = 0;
  // one group per focus: water, gas, sewer, found (foundation drainage and crack) and radon
  const groups = {
    water: new THREE.Group(),
    gas: new THREE.Group(),
    sewer: new THREE.Group(),
    found: new THREE.Group(),
    radon: new THREE.Group(),
  };
  Object.values(groups).forEach((group) => sectionGroup.add(group));
  // tube: smooth tube through a list of points, added to a group; returns its curve
  const tube = (points, radius, material, group, segments = 0) => {
      const curve = new THREE.CatmullRomCurve3(
          points.map((point) => V(...point)),
          false,
          "catmullrom",
          0.05,
        ),
        mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, segments || Math.max(8, points.length * 8), radius, 10, false), material);
      mesh.castShadow = false;
      mesh.userData.noPick = true;
      group.add(mesh);
      return curve;
    },
    // straightPipe: open-ended cylinder between two points, added to a group; returns the line between them
    straightPipe = (fromPoint, toPoint, radius, material, group) => {
      const start = V(...fromPoint),
        end = V(...toPoint),
        pipeLength = start.distanceTo(end),
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, pipeLength, 16, 1, true), material);
      mesh.position.copy(start).lerp(end, 0.5);
      mesh.quaternion.setFromUnitVectors(V(0, 1, 0), end.clone().sub(start).normalize());
      mesh.userData.noPick = true;
      group.add(mesh);
      return new THREE.LineCurve3(start, end);
    },
    flows = [];
  // addFlow: `count` particles that travel along a curve at `speed`
  function addFlow(curve, count, speed, color, group, size = 0.22) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    const points = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: size,
        map: dotTex,
        color: new THREE.Color(color).multiplyScalar(2.2),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    points.frustumCulled = false;
    points.userData.noAO = true;
    points.raycast = () => {};
    group.add(points);
    flows.push({
      curve: curve,
      n: count,
      speed: speed,
      len: curve.getLength(),
      pts: points,
      group: group,
    });
  }
  // street side: water main and gas main
  straightPipe([defaultCutX - 12, -2.4, 22.8], [defaultCutX + 60, -2.4, 22.8], 0.24, ugMats.water, groups.water);
  straightPipe([defaultCutX - 12, -1.3, 24.7], [defaultCutX + 60, -1.3, 24.7], 0.11, ugMats.gas, groups.gas);
  // water service line from the main to the house
  const waterService = tube(
    [
      [pipeX, -2.4, 22.8],
      [pipeX, -2.3, 18],
      [pipeX, -2.2, 6],
      [pipeX, -2.2, 3.75],
    ],
    0.075,
    ugMats.water,
    groups.water,
    30,
  );
  addFlow(waterService, 20, 2, 7320831, groups.water, 0.2);
  // gas service line from the main up to the meter at the front wall
  const gasService = tube(
    [
      [pipeX + 0.1, -1.3, 24.7],
      [pipeX + 0.1, -1.3, 8],
      [pipeX + 0.1, -0.3, 5.4],
      [pipeX + 0.1, 0.9, 4.25],
    ],
    0.055,
    ugMats.gas,
    groups.gas,
    30,
  );
  addFlow(gasService, 16, 2.6, 16765514, groups.gas, 0.18);
  const gasMeter = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.2), M.steel);
  gasMeter.position.set(pipeX + 0.1, 1.2, 4.25);
  gasMeter.userData.noPick = true;
  groups.gas.add(gasMeter);
  // back lane side: sewer main, the lateral running to it from the house and a riser from the lateral up to ground level
  straightPipe([defaultCutX - 12, -3.95, -18.2], [defaultCutX + 60, -3.95, -18.2], 0.4, ugMats.sewer, groups.sewer);
  const sewerLateral = tube(
    [
      [pipeX, -3.27, -3.8],
      [pipeX, -3.35, -9],
      [pipeX, -3.55, -13],
      [pipeX, -3.9, -17.9],
    ],
    0.19,
    ugMats.sewer,
    groups.sewer,
    30,
  );
  addFlow(sewerLateral, 18, 1.3, 13214314, groups.sewer, 0.2);
  const sewerRiser = tube(
      [
        [pipeX, -3.3, -5.2],
        [pipeX, -1, -5.2],
        [pipeX, 0.1, -5.2],
      ],
      0.14,
      ugMats.sewer,
      groups.sewer,
      10,
    ),
    rootIntrusion = V(pipeX, -3.52, -12.8);
  // tree roots reaching down into the lateral (three main roots, two thinner offshoots) and a ring marking where they enter
  [
    [
      [0.9, -0.2, -12.4],
      [0.8, -1.2, -12.2],
      [pipeX + 0.04, -2.4, -12.5],
      [pipeX + 0.02, -3.2, -12.8],
      [pipeX, -3.5, -12.9],
    ],
    [
      [0.9, -0.2, -12.4],
      [0.85, -0.9, -11.4],
      [pipeX + 0.1, -2, -11.5],
      [pipeX + 0.04, -3, -12.1],
      [pipeX, -3.45, -12.6],
    ],
    [
      [0.9, -0.2, -12.4],
      [0.85, -1, -13.5],
      [pipeX + 0.12, -2.2, -13.9],
      [pipeX + 0.04, -3.1, -13.4],
      [pipeX, -3.5, -13.1],
    ],
    [
      [pipeX + 0.1, -2.2, -13.8],
      [pipeX + 0.05, -2.9, -14.6],
    ],
    [
      [pipeX + 0.12, -2, -11.5],
      [pipeX + 0.06, -2.6, -10.5],
    ],
  ].forEach((rootPoints, i) => tube(rootPoints, i < 3 ? 0.1 : 0.05, ugMats.roots, groups.sewer, 24));
  const intrusionRing = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 8, 28), ugMats.crack);
  intrusionRing.position.copy(rootIntrusion);
  intrusionRing.rotation.y = Math.PI / 2;
  intrusionRing.userData.noAO = true;
  groups.sewer.add(intrusionRing);
  // weeping tile around the foundation, its drain to the sump pit and the sump discharge line
  [[-4.55], [4.55]].forEach(([z]) => straightPipe([defaultCutX - 6, -3.3, z], [defaultCutX + 6.2, -3.3, z], 0.11, ugMats.tile, groups.found));
  [[defaultCutX - 6], [defaultCutX + 6.2]].forEach(([x]) => straightPipe([x, -3.3, -4.55], [x, -3.3, 4.55], 0.11, ugMats.tile, groups.found));
  const tileToSump = tube(
      [
        [pipeX, -3.3, 4.55],
        [pipeX, -3.3, 3],
        [pipeX, -3.1, 1.9],
      ],
      0.09,
      ugMats.tile,
      groups.found,
      12,
    ),
    sumpPit = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.75, 22, 1, true), ugMats.sump);
  sumpPit.position.set(pipeX, -3.05, 1.6);
  sumpPit.userData.noPick = true;
  groups.found.add(sumpPit);
  const sumpDischarge = tube(
    [
      [pipeX, -2.55, 1.6],
      [pipeX, -1.2, 1.6],
      [pipeX, -1.2, 6.8],
      [pipeX, 0.1, 6.8],
    ],
    0.075,
    ugMats.sump,
    groups.found,
    24,
  );
  addFlow(tileToSump, 10, 0.8, 7320831, groups.found, 0.16);
  addFlow(sumpDischarge, 14, 1.8, 7320831, groups.found, 0.18);
  // crack down the foundation wall, with a glow sprite over it
  tube(
    [
      [0.62, -0.15, 4.27],
      [0.55, -0.55, 4.27],
      [0.74, -0.95, 4.27],
      [0.5, -1.4, 4.27],
      [0.7, -1.9, 4.27],
      [0.52, -2.5, 4.27],
    ],
    0.022,
    ugMats.crack,
    groups.found,
    30,
  );
  const crackGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: glowTexture("rgba(255,90,70,0.9)", "rgba(255,60,40,0)"),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.6,
    }),
  );
  crackGlow.position.set(0.62, -1.4, 4.5);
  crackGlow.scale.set(2.2, 3.4, 1);
  crackGlow.userData.noAO = true;
  groups.found.add(crackGlow);
  // soil gas (radon): particles rising through the slot (none when `reduce` is set, fewer on tier 0);
  // gasSpeedPhase holds a rise speed and a sway phase for each particle
  const gasCount = reduce ? 0 : tier >= 1 ? 520 : 200,
    gasGeo = new THREE.BufferGeometry(),
    gasPos = new Float32Array(gasCount * 3),
    gasSpeedPhase = new Float32Array(gasCount * 2),
    spawnGas = (i) => {
      gasPos[i * 3] = rand() * (SLOT - 0.06);
      gasPos[i * 3 + 1] = -8.6 + rand() * 1.4;
      gasPos[i * 3 + 2] = (rand() - 0.5) * 14 - 1.5;
      gasSpeedPhase[i * 2] = 0.6 + rand() * 0.9;
      gasSpeedPhase[i * 2 + 1] = rand() * 6.28;
    };
  for (let i = 0; i < gasCount; i++) {
    spawnGas(i);
    gasPos[i * 3 + 1] = -8.6 + rand() * 5.6;
  }
  gasGeo.setAttribute("position", new THREE.BufferAttribute(gasPos, 3));
  const gasPts = new THREE.Points(
    gasGeo,
    new THREE.PointsMaterial({
      size: 0.42,
      map: dotTex,
      color: new THREE.Color(14257407).multiplyScalar(2.6),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }),
  );
  gasPts.frustumCulled = false;
  gasPts.userData.noAO = true;
  gasPts.raycast = () => {};
  groups.radon.add(gasPts);
  // plan position the rising soil gas converges on
  const suctionPit = {
      x: -1.2,
      z: -1.5,
    },
    // anchor points for the labels
    ANCHORS = {
      ugWater: V(pipeX, -2.4, 21),
      ugGas: V(pipeX + 0.1, -1.3, 14),
      ugSewer: V(pipeX, -3.7, -16),
      ugRoots: rootIntrusion.clone(),
      ugSewerMain: V(pipeX, -3.95, -18.2),
      ugTile: V(pipeX, -3.3, 4.55),
      ugSump: V(pipeX, -3.1, 1.6),
      ugCrack: V(pipeX, -1.5, 4.3),
      ugRadon: V(-1.2, -6, -1.5),
      ugMeter: V(pipeX + 0.1, 1.2, 4.25),
      ugMain: V(pipeX, -2.4, 22.8),
      ugGasMain: V(pipeX, -1.3, 24.7),
    },
    tmpVec = V(0, 0, 0),
    // cx: world x of the cut plane as of the last update
    state = {
      cx: -1000,
    };
  // per frame (E = derived environment): moves the face with the cut plane, highlights the group in focus
  // and animates the particles; returns the world x of the cut plane
  function update(E, focus, t, dt) {
    // the cut plane slides in from x = -60 to E.cutX as the section opens, and is parked at -1000 while it is closed
    const easedSection = smooth(0, 1, E.section),
      cutX = E.section < 0.002 ? -1000 : lerp(-60, E.cutX, easedSection);
    state.cx = cutX;
    sectionGroup.visible = E.section > 0.002;
    if (!sectionGroup.visible) {
      return cutX;
    }
    // the face, base, lip and ticks ride one SLOT behind the cut plane
    face.position.x = cutX + SLOT;
    base.position.x = cutX + SLOT;
    lip.position.x = cutX + SLOT - 0.02;
    ticks.position.x = cutX + SLOT;
    ANCHORS.ugRadon.x = cutX + SLOT * 0.5;
    // focus: the focused group's materials glow brighter and the particles of the other groups fade
    // (eased alpha kept in userData.al); the "street" focus covers both water and gas
    Object.entries(groups).forEach(([key, group]) => {
      const focused = focus === key || (focus === "street" && (key === "water" || key === "gas")),
        targetAlpha = !focus || focused ? 1 : 0.2;
      group.userData.al = lerp(group.userData.al ?? targetAlpha, targetAlpha, Math.min(1, dt * 5));
      group.traverse((obj) => {
        if (obj.material && obj.material.isMeshStandardMaterial) {
          obj.material.emissiveIntensity = focused ? 0.6 : 0.12;
        }
      });
    });
    // pulse the crack colour
    ugMats.crack.color.setRGB(3, 0.5, 0.35).multiplyScalar(0.7 + 0.3 * Math.sin(t * 5));
    // move the flow particles along their curves
    flows.forEach((flow) => {
      const alpha = flow.group.userData.al ?? 1;
      flow.pts.visible = alpha > 0.02;
      if (!flow.pts.visible) {
        return;
      }
      const pos = flow.pts.geometry.attributes.position.array;
      for (let i = 0; i < flow.n; i++) {
        const along = (i / flow.n + (t * flow.speed) / flow.len) % 1;
        flow.curve.getPointAt(along, tmpVec);
        pos[i * 3] = tmpVec.x;
        pos[i * 3 + 1] = tmpVec.y;
        pos[i * 3 + 2] = tmpVec.z;
      }
      flow.pts.geometry.attributes.position.needsUpdate = true;
      flow.pts.material.opacity = alpha;
    });
    // soil gas: particles rise, are drawn towards the suction pit as they near the slab and respawn at depth once they reach it
    gasPts.visible = gasCount > 0 && (groups.radon.userData.al ?? 1) > 0.2;
    if (gasPts.visible) {
      gasPts.position.x = cutX;
      for (let i = 0; i < gasCount; i++) {
        const y = gasPos[i * 3 + 1],
          pull = smooth(-5.8, -3, y);
        gasPos[i * 3 + 1] += gasSpeedPhase[i * 2] * dt * 0.8;
        gasPos[i * 3 + 2] += ((suctionPit.z - gasPos[i * 3 + 2]) * pull * 0.5 + Math.sin(t * 0.8 + gasSpeedPhase[i * 2 + 1]) * 0.1) * dt;
        if (gasPos[i * 3 + 1] > -2.95) {
          spawnGas(i);
        }
      }
      gasGeo.attributes.position.needsUpdate = true;
      gasPts.material.opacity = groups.radon.userData.al ?? 1;
    }
    return cutX;
  }
  return {
    group: sectionGroup,
    update: update,
    ANCHORS: ANCHORS,
    groups: groups,
    state: state,
  };
}
