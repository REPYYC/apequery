import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { clamp, lerp, smooth, rng, fbm, boxUV } from "./util.js";
import { glowTexture, dotTexture, poolTexture } from "./textures.js";
let KEY = 0;
const SIGHT = {
  value: new THREE.Vector4(0, 0, -1, 30),
};
function fadeNear(i, e, t, n = false) {
  let s = i.onBeforeCompile,
    r = ++KEY;
  i.onBeforeCompile = (a, o) => {
    if (s) {
      s(a, o);
    }
    a.uniforms.uSight = SIGHT;
    a.fragmentShader = a.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
uniform vec4 uSight;`,
      )
      .replace(
        "#include <clipping_planes_fragment>",
        `#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${
          n
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
  i.customProgramCacheKey = () => "fade" + r;
  return i;
}
function snowVertex(i, e) {
  let t = i.onBeforeCompile,
    n = ++KEY;
  i.onBeforeCompile = (s, r) => {
    if (t) {
      t(s, r);
    }
    s.uniforms.uSnow = e;
    s.vertexShader = s.vertexShader
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
  i.customProgramCacheKey = () => "snowv" + n;
  return i;
}
export function createWorld({ M: i, T: e, glowTex: t, markTex: n, tier: s, reduce: r }) {
  let a = new THREE.Group(),
    o = rng(21),
    c = dotTexture("rgba(255,255,255,0.7)"),
    l = poolTexture(),
    u = glowTexture("rgba(255,196,120,0.9)", "rgba(255,150,70,0)"),
    f = {
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
    d = e.grass,
    h = e.snow,
    p = new THREE.MeshStandardMaterial({
      map: h.map,
      normalMap: h.normalMap,
      roughnessMap: h.rmMap,
      metalnessMap: h.rmMap,
      roughness: 1,
      metalness: 1,
      transparent: true,
      normalScale: new THREE.Vector2(1.1, 1.1),
      envMapIntensity: 0.9,
    });
  p.onBeforeCompile = (F) => {
    F.uniforms.uSnow = f.uSnow;
    F.uniforms.uTint = f.uTint;
    F.uniforms.uGrass = {
      value: d.map,
    };
    F.vertexShader = F.vertexShader
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
    F.fragmentShader = F.fragmentShader
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
  let x = 200,
    g = 6,
    m = 450,
    M = Array.from(
      {
        length: x + 1,
      },
      (F, W1) => (m * Math.sinh(g * ((W1 / x) * 2 - 1))) / Math.sinh(g),
    ),
    E = (F, W1) => {
      let Z = Math.hypot(F, W1),
        me = smooth(40, 220, Z) * (fbm(F * 0.012 + 3, W1 * 0.012 + 8, 4, 4096, 4096, 3) - 0.35) * 22,
        fe =
          (fbm(F * 0.09, W1 * 0.09, 3, 4096, 4096, 9) - 0.5) *
          0.35 *
          smooth(8, 22, Z) *
          (1 - smooth(14, 17, W1) * (1 - smooth(27, 30, W1))) *
          (1 - smooth(-22.5, -20.5, W1) * (1 - smooth(-15.5, -13.5, W1))) *
          (1 - smooth(5, 6.2, F) * (1 - smooth(10.2, 11.5, F)) * smooth(0.5, 2, W1) * (1 - smooth(16.5, 18, W1)));
      return me + fe;
    },
    _ = new THREE.BufferGeometry();
  {
    let F = new Float32Array((x + 1) * (x + 1) * 3),
      W1 = new Float32Array((x + 1) * (x + 1) * 2),
      Z = [];
    for (let me = 0; me <= x; me++) {
      for (let fe = 0; fe <= x; fe++) {
        let ae = me * (x + 1) + fe,
          Te = M[fe],
          Re = M[me];
        F[ae * 3] = Te;
        F[ae * 3 + 1] = E(Te, Re);
        F[ae * 3 + 2] = Re;
        W1[ae * 2] = Te;
        W1[ae * 2 + 1] = Re;
      }
    }
    for (let me = 0; me < x; me++) {
      for (let fe = 0; fe < x; fe++) {
        let ae = (M[fe] + M[fe + 1]) / 2,
          Te = (M[me] + M[me + 1]) / 2;
        if (Math.abs(ae) < 5.1 && Math.abs(Te) < 4.1) {
          continue;
        }
        let Re = me * (x + 1) + fe,
          ze = Re + 1,
          qe = Re + x + 1,
          be = qe + 1;
        Z.push(Re, qe, ze, ze, qe, be);
      }
    }
    _.setAttribute("position", new THREE.BufferAttribute(F, 3));
    _.setAttribute("uv", new THREE.BufferAttribute(W1, 2));
    _.setIndex(Z);
    _.computeVertexNormals();
  }
  let A = [],
    b = new THREE.Mesh(_, p);
  b.receiveShadow = true;
  b.renderOrder = -1;
  a.add(b);
  let R = i.asphalt.clone();
  [R.map, R.normalMap, R.roughnessMap, R.metalnessMap].forEach((F) => {
    if (F) {
      F.repeat.set(220, 3);
    }
  });
  R.roughness = 0.72;
  R.metalness = 0;
  R.metalnessMap = null;
  R.envMapIntensity = 1.4;
  let v1 = new THREE.Mesh(new THREE.PlaneGeometry(660, 9), R);
  v1.rotation.x = -Math.PI / 2;
  v1.position.set(0, 0.012, 22.2);
  v1.receiveShadow = true;
  a.add(v1);
  let w = null;
  {
    let F = new THREE.PlaneGeometry(2.2, 0.14),
      W1 = new THREE.InstancedMesh(
        F,
        new THREE.MeshStandardMaterial({
          color: 14070346,
          roughness: 0.8,
        }),
        90,
      ),
      Z = new THREE.Matrix4(),
      me = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)),
      fe = new THREE.Vector3(),
      ae = new THREE.Vector3(1, 1, 1);
    for (let Te = 0; Te < 90; Te++) {
      fe.set(-180 + Te * 4, 0.02, 22.2);
      Z.compose(fe, me, ae);
      W1.setMatrixAt(Te, Z);
    }
    W1.receiveShadow = true;
    a.add(W1);
    w = W1;
  }
  A.push(R, i.pavement);
  let C = new THREE.Mesh(new THREE.BoxGeometry(660, 0.1, 1.8), i.pavement);
  C.position.set(0, 0.05, 15.6);
  C.receiveShadow = true;
  C.castShadow = true;
  a.add(C);
  let N = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.05, 9.4), i.pavement);
  N.position.set(0.7, 0.03, 10.9);
  N.receiveShadow = true;
  a.add(N);
  let S = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.06, 14.5), i.pavement);
  S.position.set(7.9, 0.03, 9.3);
  S.receiveShadow = true;
  a.add(S);
  let I = i.asphalt.clone();
  [I.map, I.normalMap, I.roughnessMap, I.metalnessMap].forEach((F) => {
    if (F) {
      F.repeat.set(220, 1.5);
    }
  });
  I.metalnessMap = null;
  I.metalness = 0;
  I.roughness = 0.9;
  I.color.setScalar(1.25);
  A.push(I);
  let L = new THREE.Mesh(new THREE.PlaneGeometry(660, 4.5), I);
  L.rotation.x = -Math.PI / 2;
  L.position.set(0, 0.012, -18.2);
  L.receiveShadow = true;
  a.add(L);
  let U = (() => {
      let F = new THREE.SphereGeometry(1, 10, 6),
        W1 = new THREE.InstancedMesh(
          F,
          new THREE.MeshStandardMaterial({
            color: 14673906,
            roughness: 0.95,
          }),
          70,
        ),
        Z = new THREE.Matrix4(),
        me = new THREE.Quaternion(),
        fe = new THREE.Vector3(),
        ae = new THREE.Vector3();
      for (let Te = 0; Te < 70; Te++) {
        let Re = Te % 2,
          ze = -140 + (Te >> 1) * 8 + o() * 3;
        fe.set(ze, 0.1, Re ? 26.9 : 17.6 + o() * 0.2);
        ae.set(2.8 + o() * 1.4, 0.55 + o() * 0.25, 0.9 + o() * 0.3);
        Z.compose(fe, me, ae);
        W1.setMatrixAt(Te, Z);
      }
      W1.castShadow = true;
      W1.receiveShadow = true;
      a.add(W1);
      return W1;
    })(),
    V = [],
    O = fadeNear(i.pole.clone(), 3.5, 9),
    G = fadeNear(
      new THREE.MeshStandardMaterial({
        color: 3817544,
        roughness: 0.42,
        metalness: 0.65,
      }),
      3.5,
      9,
    ),
    z = new THREE.MeshBasicMaterial({
      color: new THREE.Color(3.2, 2.2, 1.1),
      toneMapped: false,
    }),
    k = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 6.9, 0),
      new THREE.Vector3(0, 7.45, 0.25),
      new THREE.Vector3(0, 7.6, 0.9),
      new THREE.Vector3(0, 7.5, 1.6),
    ]),
    K = new THREE.TubeGeometry(k, 14, 0.05, 8),
    ie = new THREE.SphereGeometry(1, 24, 12);
  ie.scale(0.54, 0.085, 0.23);
  [
    [-13, 16.6],
    [11, 16.6],
    [34, 16.6],
    [-38, 16.6],
  ].forEach(([F, W1]) => {
    let Z = new THREE.Group();
    Z.position.set(F, 0, W1);
    let me = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 7.2, 10), O);
    me.position.y = 3.6;
    me.castShadow = true;
    Z.add(me);
    let fe = new THREE.Mesh(K, O);
    fe.castShadow = true;
    Z.add(fe);
    let ae = new THREE.Mesh(ie, G);
    ae.position.set(0, 7.5, 1.78);
    ae.rotation.x = 0.04;
    ae.castShadow = true;
    Z.add(ae);
    let Te = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.24), z);
    Te.rotation.x = Math.PI / 2;
    Te.position.set(0, 7.445, 1.78);
    Te.userData.noAO = true;
    Z.add(Te);
    let Re = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: t,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    Re.position.set(0, 7.3, 1.78);
    Re.scale.set(5, 5, 1);
    Re.userData.noAO = true;
    Z.add(Re);
    let ze = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: u,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    ze.rotation.x = -Math.PI / 2;
    ze.position.set(0, 0.04, 2);
    ze.scale.set(15, 10, 1);
    ze.userData.noAO = true;
    Z.add(ze);
    a.add(Z);
    V.push({
      halo: Re,
      pool: ze,
      lens: Te,
    });
  });
  let xe = new THREE.PointLight(16761466, 0, 32, 2);
  xe.position.set(11, 7, 18.2);
  a.add(xe);
  let Ue = new THREE.PointLight(16761466, 0, 32, 2);
  Ue.position.set(-13, 7, 18.2);
  a.add(Ue);
  let Ce = [];
  [
    [-2.5, 7.4, 5.5, 4.2],
    [0.8, 8.4, 5.5, 4.6],
    [3.15, 7.4, 5.5, 4.2],
  ].forEach(([F, W1, Z, me]) => {
    let fe = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: u,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    fe.rotation.x = -Math.PI / 2;
    fe.position.set(F, 0.05, W1);
    fe.scale.set(Z, me, 1);
    fe.userData.noAO = true;
    a.add(fe);
    Ce.push(fe);
  });
  let Ye = fadeNear(snowVertex(i.spruce.clone(), f.uSnow), 5, 12, true);
  function J(F) {
    let W1 = rng(F),
      Z = [],
      me = 11;
    for (let ne = 0; ne < me; ne++) {
      let tt = ne / (me - 1),
        Ke = lerp(1.7, 0.18, Math.pow(tt, 0.85)) * (0.94 + W1() * 0.12),
        ut = lerp(1.7, 0.9, tt),
        Et = 1 + ne * 0.62,
        Lt = new THREE.ConeGeometry(Ke, ut, 20, 4, true);
      Lt.translate(0, Et + ut / 2, 0);
      let It = Lt.attributes.position;
      for (let lt = 0; lt < It.count; lt++) {
        let bt = It.getX(lt),
          Mt = It.getY(lt),
          at = It.getZ(lt),
          qt = Math.atan2(at, bt),
          cn = Math.hypot(bt, at),
          di = 1 + Math.sin(qt * 7 + ne * 2.3) * 0.09 + Math.sin(qt * 13 + ne) * 0.04 + (W1() - 0.5) * 0.05,
          jn = (cn / Ke) * (cn / Ke) * 0.34 * (1 + 0.35 * Math.sin(qt * 5 + ne * 1.3));
        It.setXYZ(lt, bt * di, Mt - jn, at * di);
      }
      Lt.computeVertexNormals();
      Z.push(Lt);
    }
    let fe = new THREE.CylinderGeometry(0.1, 0.2, 1.6, 8);
    fe.translate(0, 0.8, 0);
    Z.push(fe);
    let ae = mergeGeometries(Z);
    ae.computeVertexNormals();
    let Te = ae.attributes.position,
      Re = ae.attributes.normal,
      ze = new Float32Array(Te.count * 3),
      qe = new Float32Array(Te.count),
      be = new THREE.Color();
    for (let ne = 0; ne < Te.count; ne++) {
      let tt = Re.getY(ne),
        Ke = fbm(Te.getX(ne) * 2.1, Te.getZ(ne) * 2.1 + Te.getY(ne) * 1.1, 3, 64, 64, 2);
      be.setRGB(0.05 + Ke * 0.05, 0.12 + Ke * 0.08, 0.09 + Ke * 0.05);
      if (Te.getY(ne) < 1.15) {
        be.setRGB(0.1, 0.07, 0.05);
      }
      ze[ne * 3] = be.r;
      ze[ne * 3 + 1] = be.g;
      ze[ne * 3 + 2] = be.b;
      qe[ne] = Te.getY(ne) < 1.15 ? 0 : clamp(smooth(0.05, 0.6, tt + (Ke - 0.5) * 0.7), 0, 1) * 0.78;
    }
    ae.setAttribute("color", new THREE.BufferAttribute(ze, 3));
    ae.setAttribute("aSnow", new THREE.BufferAttribute(qe, 1));
    return ae;
  }
  let se = [
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
    ye = [J(1), J(2)],
    Ve = ye[0];
  ye.forEach((F, W1) => {
    let Z = se.filter((ze, qe) => qe % 2 === W1),
      me = new THREE.InstancedMesh(F, Ye, Z.length),
      fe = new THREE.Matrix4(),
      ae = new THREE.Quaternion(),
      Te = new THREE.Vector3(),
      Re = new THREE.Vector3();
    Z.forEach(([ze, qe, be], ne) => {
      ae.setFromAxisAngle(new THREE.Vector3(0, 1, 0), o() * 6.28);
      Te.set(ze, 0, qe);
      Re.set(be, be * (0.9 + o() * 0.25), be);
      fe.compose(Te, ae, Re);
      me.setMatrixAt(ne, fe);
    });
    me.castShadow = true;
    me.receiveShadow = true;
    a.add(me);
  });
  let ce = [];
  {
    let F = snowVertex(i.shrub.clone(), f.uSnow),
      W1 = new THREE.IcosahedronGeometry(0.7, 3),
      Z = W1.attributes.position,
      me = new Float32Array(Z.count * 3),
      fe = new Float32Array(Z.count);
    for (let ae = 0; ae < Z.count; ae++) {
      let Te = Z.getX(ae),
        Re = Z.getY(ae),
        ze = Z.getZ(ae),
        qe = fbm(Te * 2 + 5, ze * 2 + Re * 2, 3, 64, 64, 4),
        be = 1 + (qe - 0.5) * 0.35;
      Z.setXYZ(ae, Te * be, Re * be * 0.72, ze * be);
      me[ae * 3] = 0.06;
      me[ae * 3 + 1] = 0.15 + qe * 0.05;
      me[ae * 3 + 2] = 0.1;
      fe[ae] = smooth(0.05, 0.7, Re / 0.7 + (qe - 0.5)) * 0.8;
    }
    W1.setAttribute("color", new THREE.BufferAttribute(me, 3));
    W1.setAttribute("aSnow", new THREE.BufferAttribute(fe, 1));
    W1.computeVertexNormals();
    [
      [-1.7, 4.9, 1.2],
      [-2.5, 4.7, 0.9],
      [2.9, 4.9, 1],
      [3.7, 4.6, 0.8],
      [-5.2, 4.6, 0.8],
    ].forEach(([ae, Te, Re]) => {
      let ze = new THREE.Mesh(W1, F);
      ze.position.set(ae, 0.35 * Re, Te);
      ze.scale.setScalar(Re);
      ze.castShadow = true;
      ze.receiveShadow = true;
      ze.userData.keep = true;
      a.add(ze);
      ce.push(ze);
    });
  }
  let Ie = fadeNear(
      snowVertex(
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 1,
        }),
        f.uSnow,
      ),
      5,
      12,
      true,
    ),
    je = (() => {
      let F = document.createElement("canvas");
      F.width = F.height = 128;
      let W1 = F.getContext("2d"),
        Z = rng(77);
      for (let fe = 0; fe < 30; fe++) {
        W1.save();
        W1.translate(12 + Z() * 104, 12 + Z() * 104);
        W1.rotate(Z() * Math.PI);
        let ae = 150 + Math.floor(Z() * 105),
          Te = 6 + Z() * 6,
          Re = 13 + Z() * 9;
        W1.fillStyle = `rgb(${ae},${ae},${ae})`;
        W1.beginPath();
        W1.ellipse(0, 0, Te, Re, 0, 0, Math.PI * 2);
        W1.fill();
        W1.strokeStyle = "rgba(70,70,70,0.65)";
        W1.lineWidth = 1;
        W1.beginPath();
        W1.moveTo(0, -Re);
        W1.lineTo(0, Re);
        W1.stroke();
        W1.restore();
      }
      let me = new THREE.CanvasTexture(F);
      me.colorSpace = THREE.SRGBColorSpace;
      me.anisotropy = 4;
      return me;
    })(),
    le = fadeNear(
      (() => {
        let F = new THREE.MeshStandardMaterial({
            map: je,
            alphaTest: 0.5,
            alphaToCoverage: s >= 1,
            vertexColors: true,
            roughness: 0.8,
            side: THREE.DoubleSide,
          }),
          W1 = ++KEY;
        F.onBeforeCompile = (Z) => {
          Z.uniforms.uGrow = f.uGrow;
          Z.uniforms.uLeafTint = f.uLeafTint;
          Z.vertexShader = Z.vertexShader
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
          Z.fragmentShader = Z.fragmentShader.replace(
            "#include <normal_fragment_begin>",
            THREE.ShaderChunk.normal_fragment_begin.replace("normal *= faceDirection;", ""),
          );
        };
        F.customProgramCacheKey = () => "leaf" + W1;
        return F;
      })(),
      5,
      12,
      true,
    );
  function _e(F) {
    let W1 = rng(F),
      Z = [],
      me = [],
      fe = new THREE.Vector3(0, 1, 0);
    function ae(ut, Et, Lt, It) {
      let lt = new THREE.CylinderGeometry(It * 0.68, It, Lt, 6, 1);
      lt.applyMatrix4(
        new THREE.Matrix4().compose(
          ut.clone().addScaledVector(Et, Lt / 2),
          new THREE.Quaternion().setFromUnitVectors(fe, Et),
          new THREE.Vector3(1, 1, 1),
        ),
      );
      Z.push(lt);
      return ut.clone().addScaledVector(Et, Lt);
    }
    let Te = new THREE.Vector3(0, 0, 1);
    function Re(ut, Et) {
      let It = [],
        lt = [],
        bt = [],
        Mt = [],
        at = [],
        qt = [],
        cn = 0.72 + W1() * 0.5,
        di = (W1() - 0.5) * 0.25;
      for (let Wa = 0; Wa < 18; Wa++) {
        let mc = W1() * 2 - 1,
          nu = W1() * Math.PI * 2,
          iu = Math.sqrt(1 - mc * mc),
          gc = new THREE.Vector3(iu * Math.cos(nu), mc * 0.85, iu * Math.sin(nu)).normalize(),
          Xa = ut.clone().addScaledVector(gc, Et * (0.3 + 0.7 * Math.cbrt(W1()))),
          su = 0.8 + W1() * 0.55,
          ru = gc
            .clone()
            .add(new THREE.Vector3(W1() - 0.5, W1() - 0.3, W1() - 0.5).multiplyScalar(0.9))
            .normalize(),
          Hf = new THREE.Quaternion().setFromUnitVectors(Te, ru).premultiply(new THREE.Quaternion().setFromAxisAngle(ru, W1() * 6.28)),
          xc = gc
            .clone()
            .add(new THREE.Vector3(0, 0.3, 0))
            .normalize(),
          Rs = It.length / 3;
        [
          [-0.5, -0.5],
          [0.5, -0.5],
          [0.5, 0.5],
          [-0.5, 0.5],
        ].forEach(([au, ou]) => {
          let _c = new THREE.Vector3(au * su, ou * su, 0).applyQuaternion(Hf).add(Xa);
          It.push(_c.x, _c.y, _c.z);
          lt.push(xc.x, xc.y, xc.z);
          bt.push(au + 0.5, ou + 0.5);
          Mt.push(Xa.x, Xa.y, Xa.z);
          let vc = cn * (0.85 + 0.3 * W1());
          at.push(vc * (1 + di), vc, vc * (1 - di * 0.6));
        });
        qt.push(Rs, Rs + 1, Rs + 2, Rs, Rs + 2, Rs + 3);
      }
      let jn = new THREE.BufferGeometry();
      jn.setAttribute("position", new THREE.Float32BufferAttribute(It, 3));
      jn.setAttribute("normal", new THREE.Float32BufferAttribute(lt, 3));
      jn.setAttribute("uv", new THREE.Float32BufferAttribute(bt, 2));
      jn.setAttribute("aCenter", new THREE.Float32BufferAttribute(Mt, 3));
      jn.setAttribute("color", new THREE.Float32BufferAttribute(at, 3));
      jn.setIndex(qt);
      me.push(jn);
    }
    function ze(ut, Et, Lt, It, lt) {
      let bt = ae(ut, Et, Lt, It);
      if (lt === 0) {
        Re(bt, 0.9 + W1() * 0.7);
        if (W1() < 0.7) {
          Re(bt.clone().add(new THREE.Vector3((W1() - 0.5) * 1.2, W1() * 0.6, (W1() - 0.5) * 1.2)), 0.7 + W1() * 0.5);
        }
        return;
      }
      let Mt = lt >= 3 ? 3 : 2 + (W1() < 0.4 ? 1 : 0);
      for (let at = 0; at < Mt; at++) {
        let qt = new THREE.Vector3().crossVectors(Et, new THREE.Vector3(W1() - 0.5, 0.25, W1() - 0.5)).normalize(),
          cn = Et.clone()
            .applyAxisAngle(qt, 0.45 + W1() * 0.7)
            .add(new THREE.Vector3(0, 0.18, 0))
            .normalize();
        ze(bt, cn, Lt * (0.68 + W1() * 0.14), It * 0.62, lt - 1);
      }
      if (lt <= 2) {
        Re(bt.clone().add(new THREE.Vector3((W1() - 0.5) * 0.8, 0.3, (W1() - 0.5) * 0.8)), 0.8 + W1() * 0.5);
      }
    }
    ze(new THREE.Vector3(0, 0, 0), fe, 2.6, 0.24, 4);
    let qe = mergeGeometries(Z),
      be = qe.attributes.position,
      ne = qe.attributes.normal,
      tt = new Float32Array(be.count * 3),
      Ke = new Float32Array(be.count);
    for (let ut = 0; ut < be.count; ut++) {
      let Et = fbm(be.getX(ut) * 3, be.getY(ut) * 3 + be.getZ(ut), 2, 64, 64, 6);
      tt[ut * 3] = 0.16 + Et * 0.08;
      tt[ut * 3 + 1] = 0.12 + Et * 0.06;
      tt[ut * 3 + 2] = 0.09 + Et * 0.05;
      Ke[ut] = clamp(ne.getY(ut) * 1.5, 0, 1) * 0.85;
    }
    qe.setAttribute("color", new THREE.BufferAttribute(tt, 3));
    qe.setAttribute("aSnow", new THREE.BufferAttribute(Ke, 1));
    return {
      wood: qe,
      leaf: mergeGeometries(me),
    };
  }
  let j = [],
    $ = [
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
  [_e(31), _e(47)].forEach((F, W1) => {
    let Z = $.filter((fe, ae) => ae % 2 === W1),
      me = (fe, ae, Te) => {
        let Re = new THREE.InstancedMesh(fe, ae, Z.length),
          ze = new THREE.Matrix4(),
          qe = new THREE.Quaternion(),
          be = new THREE.Vector3(),
          ne = new THREE.Vector3();
        Z.forEach(([tt, Ke, ut], Et) => {
          qe.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (tt * 7 + Ke * 3) % 6.28);
          be.set(tt, 0, Ke);
          ne.setScalar(ut * 0.95);
          ze.compose(be, qe, ne);
          Re.setMatrixAt(Et, ze);
        });
        Re.castShadow = Te;
        Re.receiveShadow = true;
        a.add(Re);
        return Re;
      };
    me(F.wood, Ie, true);
    j.push(me(F.leaf, le, true));
  });
  let de = i.neighborRoof.clone();
  de.onBeforeCompile = (F) => {
    F.uniforms.uRoofSnow = f.uRoofSnow;
    F.fragmentShader = F.fragmentShader
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
  de.customProgramCacheKey = () => "nroof";
  let Ae = new THREE.MeshBasicMaterial({
      color: new THREE.Color(1.5, 0.92, 0.42),
      transparent: true,
      opacity: 0,
    }),
    Ee = new THREE.MeshStandardMaterial({
      color: 659222,
      roughness: 0.08,
      metalness: 0.4,
      envMapIntensity: 1.6,
    }),
    Le = [],
    Je = [],
    B = [];
  function pt(F) {
    let { x: W1, z: Z, w: me, d: fe, h: ae, rh: Te, tone: Re, rot: ze = 0, garage: qe, chimney: be } = F,
      ne = new THREE.Group(),
      tt = i.neighbor.clone();
    tt.color.setHex(Re).multiplyScalar(1.9);
    let Ke = new THREE.BoxGeometry(me, ae, fe);
    boxUV(Ke, {
      oy: ae / 2,
    });
    let ut = new THREE.Mesh(Ke, tt);
    ut.position.y = ae / 2;
    ut.castShadow = true;
    ut.receiveShadow = true;
    ne.add(ut);
    let Et = new THREE.Shape();
    Et.moveTo(-me / 2 - 0.5, 0);
    Et.lineTo(me / 2 + 0.5, 0);
    Et.lineTo(0, Te);
    Et.lineTo(-me / 2 - 0.5, 0);
    let Lt = new THREE.Mesh(
      new THREE.ExtrudeGeometry(Et, {
        depth: fe + 1,
        bevelEnabled: false,
      }),
      de,
    );
    Lt.position.set(0, ae, -fe / 2 - 0.5);
    Lt.castShadow = true;
    Lt.receiveShadow = true;
    ne.add(Lt);
    if (be) {
      let Mt = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.4, 0.7), i.stone);
      Mt.position.set(me * 0.22, ae + Te * 0.55, -fe * 0.1);
      Mt.castShadow = true;
      ne.add(Mt);
    }
    let It = (Mt, at, qt, cn, di) => {
        let jn = new THREE.Matrix4().compose(
            new THREE.Vector3(Mt, at, qt),
            new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), cn),
            new THREE.Vector3(1, 1, 1),
          ),
          Wa = new THREE.Matrix4().compose(
            new THREE.Vector3(Mt, at, qt).add(new THREE.Vector3(Math.sin(cn), 0, Math.cos(cn)).multiplyScalar(-0.012)),
            new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), cn),
            new THREE.Vector3(1, 1, 1),
          );
        (di ? Le : Je).push({
          g: ne,
          m: jn,
        });
        B.push({
          g: ne,
          m: Wa,
        });
      },
      lt = Math.max(2, Math.round(me / 2.4));
    for (let Mt = 0; Mt < 2; Mt++) {
      for (let at = 0; at < lt; at++) {
        if (!(qe && Mt === 0 && at === 0)) {
          It(-me / 2 + (at + 0.5) * (me / lt), 1.5 + Mt * 2.6, fe / 2 + 0.02, 0, o() > 0.32);
        }
      }
    }
    for (let Mt = 0; Mt < 2; Mt++) {
      It(me / 2 + 0.02, 1.5 + Mt * 2.6, 0, Math.PI / 2, o() > 0.5);
      It(-me / 2 - 0.02, 1.5 + Mt * 2.6, 0, -Math.PI / 2, o() > 0.5);
    }
    let bt = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.1, 0.12), i.walnut);
    bt.position.set(me / 2 - 1.5, 1.05, fe / 2 + 0.05);
    ne.add(bt);
    if (qe) {
      let Mt = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.3, 0.14), i.cedar);
      Mt.position.set(-me / 2 + 1.7, 1.15, fe / 2 + 0.06);
      ne.add(Mt);
      for (let at = 1; at < 4; at++) {
        let qt = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.04, 0.16), i.trim);
        qt.position.set(-me / 2 + 1.7, at * 0.575, fe / 2 + 0.07);
        ne.add(qt);
      }
    }
    ne.position.set(W1, 0, Z);
    ne.rotation.y = ze;
    a.add(ne);
    Qe.push([W1, ae + Te, Z]);
    return ne;
  }
  let Qe = [];
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
  ].forEach(pt);
  a.updateMatrixWorld(true);
  let D1 = (F, W1, Z) => {
      let me = new THREE.InstancedMesh(W1, Z, F.length),
        fe = new THREE.Matrix4();
      F.forEach(({ g: ae, m: Te }, Re) => {
        fe.multiplyMatrices(ae.matrixWorld, Te);
        me.setMatrixAt(Re, fe);
      });
      me.userData.noAO = false;
      a.add(me);
      return me;
    },
    y = new THREE.PlaneGeometry(1, 1.15),
    Y = new THREE.PlaneGeometry(1.16, 1.31),
    Q = [];
  D1(Le, y, Ae);
  D1(Je, y, Ee);
  D1(B, Y, i.trim);
  let re = new THREE.Group();
  re.visible = false;
  a.add(re);
  let Pe = new THREE.CylinderGeometry(0.05, 0.05, 1, 8, 1, true),
    Se = [],
    ue = new THREE.Vector3(0, 12.6, 0);
  Qe.forEach(([F, W1, Z], me) => {
    let fe = new THREE.Vector3(F, W1 + 3.4, Z),
      ae = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: n,
          transparent: true,
          depthWrite: false,
          depthTest: false,
          opacity: 0,
        }),
      );
    ae.position.copy(fe);
    ae.renderOrder = 12;
    ae.userData.noAO = true;
    re.add(ae);
    let Te = new THREE.Mesh(
      Pe,
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(2.2, 1.3, 0.55),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    Te.scale.set(1, 3.2, 1);
    Te.position.set(F, W1 + 1.6, Z);
    Te.userData.noAO = true;
    Te.raycast = () => {};
    re.add(Te);
    let Re = fe.clone().lerp(ue, 0.5);
    Re.y += 5 + fe.distanceTo(ue) * 0.18;
    let ze = new THREE.CatmullRomCurve3([
        fe,
        fe
          .clone()
          .lerp(Re, 0.5)
          .setY(Re.y * 0.9),
        Re,
        Re.clone()
          .lerp(ue, 0.5)
          .setY(Re.y * 0.9),
        ue,
      ]),
      qe = 40,
      be = new THREE.Mesh(
        new THREE.TubeGeometry(ze, qe, 0.07, 5, false),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(2.4, 1.4, 0.6),
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          toneMapped: false,
        }),
      );
    be.userData.noAO = true;
    be.raycast = () => {};
    re.add(be);
    let ne = 9,
      tt = new THREE.BufferGeometry();
    tt.setAttribute("position", new THREE.BufferAttribute(new Float32Array(ne * 3), 3));
    let Ke = new THREE.Points(
      tt,
      new THREE.PointsMaterial({
        size: 0.9,
        map: c,
        color: new THREE.Color(2.4, 1.5, 0.7),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    Ke.frustumCulled = false;
    Ke.userData.noAO = true;
    Ke.raycast = () => {};
    re.add(Ke);
    Se.push({
      spr: ae,
      bm: Te,
      tube: be,
      segs: qe,
      curve: ze,
      pts: Ke,
      n: ne,
      d: fe.distanceTo(ue),
      delay: 0,
    });
  });
  Se.sort((F, W1) => F.d - W1.d);
  Se.forEach((F, W1) => {
    F.delay = W1 / Se.length;
  });
  let ve = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: n,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      opacity: 0,
    }),
  );
  ve.position.copy(ue).add(new THREE.Vector3(0, 1.2, 0));
  ve.scale.set(4.2, 4.2, 1);
  ve.renderOrder = 13;
  ve.userData.noAO = true;
  re.add(ve);
  let Oe = new THREE.Vector3();
  function et(F, W1) {
    re.visible = F > 0.003;
    if (re.visible) {
      ve.material.opacity = smooth(0, 0.15, F);
      ve.scale.setScalar(4.2 + Math.sin(W1 * 3) * 0.3);
      Se.forEach((Z) => {
        let me = smooth(Z.delay * 0.7, Z.delay * 0.7 + 0.3, F);
        Z.spr.material.opacity = me;
        Z.spr.scale.setScalar(2.4 * (0.6 + 0.4 * me));
        Z.bm.material.opacity = 0.5 * me;
        Z.bm.scale.y = 3.2 + 6 * me;
        Z.bm.position.y = Z.spr.position.y - Z.bm.scale.y / 2 - 1.6;
        let fe = Math.floor(smooth(0.1 + Z.delay * 0.6, 0.45 + Z.delay * 0.6, F) * Z.segs) * 5 * 6;
        Z.tube.geometry.setDrawRange(0, fe);
        Z.tube.material.opacity = 0.34 * me * (0.8 + 0.2 * Math.sin(W1 * 3 + Z.delay * 9));
        let ae = Z.pts.geometry.attributes.position.array,
          Te = smooth(0.1 + Z.delay * 0.6, 0.45 + Z.delay * 0.6, F);
        for (let Re = 0; Re < Z.n; Re++) {
          let ze = (Re / Z.n + W1 * 0.16 + Z.delay) % 1;
          if (ze > Te) {
            ae[Re * 3 + 1] = -999;
            continue;
          }
          Z.curve.getPointAt(ze, Oe);
          ae[Re * 3] = Oe.x;
          ae[Re * 3 + 1] = Oe.y;
          ae[Re * 3 + 2] = Oe.z;
        }
        Z.pts.geometry.attributes.position.needsUpdate = true;
        Z.pts.material.opacity = me;
      });
    }
  }
  let Ne = new THREE.MeshStandardMaterial({
      color: 4864555,
      roughness: 0.95,
    }),
    Fe = new THREE.MeshBasicMaterial({
      color: 723724,
    }),
    Ge = [];
  (() => {
    let F = new THREE.Group();
    F.position.set(-3.4, 0, -11.4);
    a.add(F);
    let W1 = 7.4,
      Z = 6.4,
      me = 3.1,
      fe = new THREE.BoxGeometry(W1, me, Z);
    boxUV(fe, {
      oy: me / 2,
    });
    let ae = new THREE.Mesh(fe, i.bb.clone());
    ae.material.color.setScalar(1);
    ae.position.y = me / 2;
    ae.castShadow = true;
    ae.receiveShadow = true;
    F.add(ae);
    let Te = new THREE.Shape();
    Te.moveTo(-W1 / 2 - 0.45, 0);
    Te.lineTo(W1 / 2 + 0.45, 0);
    Te.lineTo(0, 1.9);
    Te.lineTo(-W1 / 2 - 0.45, 0);
    let Re = new THREE.Mesh(
      new THREE.ExtrudeGeometry(Te, {
        depth: Z + 0.9,
        bevelEnabled: false,
      }),
      de,
    );
    Re.position.set(0, me, -Z / 2 - 0.45);
    Re.castShadow = true;
    Re.receiveShadow = true;
    F.add(Re);
    for (let qe = 0; qe < 2; qe++) {
      let be = -1.8 + qe * 3.6,
        ne = new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.4, 0.12), i.walnut);
      ne.position.set(be, 1.2, -Z / 2 - 0.05);
      ne.castShadow = true;
      F.add(ne);
      for (let ut = 1; ut < 4; ut++) {
        let Et = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.04, 0.14), i.trim);
        Et.position.set(be, ut * 0.6, -Z / 2 - 0.08);
        F.add(Et);
      }
      let tt = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.3, 0.14), i.mirror);
      tt.position.set(be, 2.05, -Z / 2 - 0.09);
      F.add(tt);
      let Ke = new THREE.Mesh(new THREE.BoxGeometry(3.3, 2.55, 0.1), i.trim);
      Ke.position.set(be, 1.27, -Z / 2 - 0);
      F.add(Ke);
    }
    [-3.3, 3.3].forEach((qe) => {
      let be = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.26, 12), i.sconce);
      be.position.set(qe, 2.55, -Z / 2 - 0.2);
      be.userData.noAO = true;
      F.add(be);
      let ne = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: t,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0,
        }),
      );
      ne.position.set(qe, 2.55, -Z / 2 - 0.5);
      ne.scale.set(2.2, 2.2, 1);
      ne.userData.noAO = true;
      F.add(ne);
      Ge.push(ne);
    });
    let ze = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: u,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    ze.rotation.x = -Math.PI / 2;
    ze.position.set(0, 0.05, -Z / 2 - 2.2);
    ze.scale.set(10, 5, 1);
    ze.userData.noAO = true;
    F.add(ze);
    Ge.pool = ze;
  })();
  let $e = [-75.2, -49.2, -23.2, 2.8, 28.8, 54.8, 80.8];
  $e.forEach((F) => {
    let W1 = new THREE.Group();
    W1.position.set(F, 0, -15.5);
    a.add(W1);
    let Z = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.19, 9.8, 10), Ne);
    Z.position.y = 4.9;
    Z.castShadow = true;
    W1.add(Z);
    let me = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 2.2), Ne);
    me.position.y = 9.2;
    W1.add(me);
    [-0.85, 0, 0.85].forEach((fe) => {
      let ae = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.2, 8), i.ceramic);
      ae.position.set(0, 9.36, fe);
      W1.add(ae);
    });
    if (Math.abs(F - 2.8) < 1) {
      let fe = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.95, 14), i.steel);
      fe.position.set(0.5, 8.35, 0.2);
      fe.castShadow = true;
      W1.add(fe);
      let ae = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.12, 14), i.steel);
      ae.position.set(0.5, 8.9, 0.2);
      W1.add(ae);
    }
  });
  let it = [];
  for (let F = 0; F < $e.length - 1; F++) {
    [-0.85, 0, 0.85].forEach((W1) => {
      let Z = new THREE.Vector3($e[F], 9.4, -15.5 + W1),
        me = new THREE.Vector3($e[F + 1], 9.4, -15.5 + W1),
        fe = Z.clone().lerp(me, 0.5);
      fe.y -= 0.9;
      it.push(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([
            Z,
            Z.clone()
              .lerp(fe, 0.5)
              .setY(9.4 - 0.45),
            fe,
            fe
              .clone()
              .lerp(me, 0.5)
              .setY(9.4 - 0.45),
            me,
          ]),
          24,
          0.022,
          4,
        ),
      );
    });
  }
  {
    let F = new THREE.Vector3(2.8, 9.4, -15.5),
      W1 = new THREE.Vector3(2.8, 5.4, -4.3),
      Z = F.clone().lerp(W1, 0.5);
    Z.y -= 0.7;
    it.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([F, Z, W1]), 20, 0.026, 4));
  }
  let q = new THREE.Mesh(mergeGeometries(it), Fe);
  q.castShadow = false;
  q.raycast = () => {};
  a.add(q);
  let De = new THREE.Group(),
    H = [],
    pe = {
      front: null,
      rear: null,
    },
    ge = new THREE.Group();
  (() => {
    let F = new THREE.MeshPhysicalMaterial({
        color: 1784408,
        metalness: 0.65,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.5,
      }),
      W1 = new THREE.MeshPhysicalMaterial({
        color: 395533,
        metalness: 0.2,
        roughness: 0.04,
        clearcoat: 1,
        envMapIntensity: 1.8,
      }),
      Z = new THREE.MeshStandardMaterial({
        color: 1052946,
        roughness: 0.85,
      }),
      me = new THREE.MeshStandardMaterial({
        color: 12107462,
        metalness: 0.9,
        roughness: 0.25,
      }),
      fe = new THREE.Shape();
    fe.moveTo(-2.3, 0.28);
    fe.lineTo(-2.38, 0.6);
    fe.quadraticCurveTo(-2.36, 0.92, -2.05, 0.98);
    fe.lineTo(1.35, 0.98);
    fe.quadraticCurveTo(2.05, 0.9, 2.3, 0.7);
    fe.lineTo(2.34, 0.44);
    fe.quadraticCurveTo(2.3, 0.28, 2.1, 0.28);
    fe.lineTo(-2.3, 0.28);
    let ae = new THREE.Mesh(
      new THREE.ExtrudeGeometry(fe, {
        depth: 1.7,
        bevelEnabled: true,
        bevelThickness: 0.09,
        bevelSize: 0.09,
        bevelSegments: 4,
        curveSegments: 14,
      }),
      F,
    );
    ae.geometry.translate(0, 0, -0.85);
    ae.castShadow = true;
    De.add(ae);
    let Te = new THREE.Shape();
    Te.moveTo(-1.95, 0.96);
    Te.quadraticCurveTo(-1.55, 1.42, -0.95, 1.46);
    Te.lineTo(0.5, 1.44);
    Te.quadraticCurveTo(0.95, 1.4, 1.38, 0.96);
    Te.lineTo(-1.95, 0.96);
    let Re = new THREE.Mesh(
      new THREE.ExtrudeGeometry(Te, {
        depth: 1.62,
        bevelEnabled: true,
        bevelThickness: 0.07,
        bevelSize: 0.05,
        bevelSegments: 3,
        curveSegments: 12,
      }),
      W1,
    );
    Re.geometry.translate(0, 0, -0.81);
    Re.castShadow = true;
    De.add(Re);
    let ze = new THREE.Mesh(new RoundedBoxGeometry(1.9, 0.07, 1.6, 2, 0.03), F);
    ze.position.set(-0.2, 1.47, 0);
    De.add(ze);
    [
      [-1.4, 0.8],
      [1.4, 0.8],
      [-1.4, -0.8],
      [1.4, -0.8],
    ].forEach(([lt, bt]) => {
      let Mt = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.26, 24), Z);
      Mt.rotation.x = Math.PI / 2;
      Mt.position.set(lt, 0.37, bt * 1 + Math.sign(bt) * 0.04);
      Mt.castShadow = true;
      De.add(Mt);
      let at = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.27, 20), me);
      at.rotation.x = Math.PI / 2;
      at.position.copy(Mt.position);
      De.add(at);
    });
    let qe = new THREE.MeshStandardMaterial({
        color: 1118481,
        emissive: 16777215,
        emissiveIntensity: 0.1,
      }),
      be = new THREE.MeshStandardMaterial({
        color: 2228224,
        emissive: 16722458,
        emissiveIntensity: 0.1,
      }),
      ne = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.5), qe);
    ne.position.set(2.33, 0.72, 0);
    ne.userData.noAO = true;
    De.add(ne);
    let tt = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.5), be);
    tt.position.set(-2.4, 0.78, 0);
    tt.userData.noAO = true;
    De.add(tt);
    pe.front = qe;
    pe.rear = be;
    let Ke = new THREE.Mesh(new RoundedBoxGeometry(1.8, 0.07, 1.5, 2, 0.03), i.snowRoof);
    Ke.userData.keep = true;
    Ke.position.set(-0.2, 1.54, 0);
    De.add(Ke);
    H.push(Ke);
    let ut = new THREE.Mesh(new RoundedBoxGeometry(1, 0.05, 1.45, 2, 0.02), i.snowRoof);
    ut.userData.keep = true;
    ut.position.set(1.6, 1, 0);
    ut.rotation.z = -0.1;
    De.add(ut);
    H.push(ut);
    De.position.set(7.9, 0, 6.3);
    De.rotation.y = -Math.PI / 2;
    a.add(De);
    let Et = [
        new THREE.Vector3(5.2, 1.2, 2.5),
        new THREE.Vector3(5.55, 0.5, 2.85),
        new THREE.Vector3(6.15, 0.12, 3.3),
        new THREE.Vector3(6.7, 0.4, 3.75),
        new THREE.Vector3(7, 0.82, 3.95),
      ],
      Lt = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Et), 24, 0.028, 6),
        new THREE.MeshStandardMaterial({
          color: 855310,
          roughness: 0.6,
        }),
      );
    Lt.castShadow = true;
    ge.add(Lt);
    let It = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 10, 8),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.4, 3, 1.2),
      }),
    );
    It.position.set(5.16, 1.5, 2.5);
    It.userData.noAO = true;
    ge.add(It);
    ge.userData.led = It;
    a.add(ge);
  })();
  let he = r ? 0 : s >= 1 ? 2200 : 900,
    He = new THREE.BufferGeometry(),
    ke = new Float32Array(he * 3),
    rt = new Float32Array(he * 2),
    nt = [90, 40, 90];
  for (let F = 0; F < he; F++) {
    ke[F * 3] = (o() - 0.5) * nt[0];
    ke[F * 3 + 1] = o() * nt[1];
    ke[F * 3 + 2] = (o() - 0.5) * nt[2];
    rt[F * 2] = 0.7 + o() * 1.1;
    rt[F * 2 + 1] = o() * 6.28;
  }
  He.setAttribute("position", new THREE.BufferAttribute(ke, 3));
  let Jt = new THREE.PointsMaterial({
      color: 16777215,
      size: 0.11,
      map: c,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
    tn = new THREE.Points(He, Jt);
  tn.frustumCulled = false;
  tn.userData.noAO = true;
  a.add(tn);
  let $n = s >= 1 && !r ? 140 : 0,
    ki = new THREE.BufferGeometry(),
    li = new Float32Array($n * 3);
  for (let F = 0; F < $n; F++) {
    li[F * 3] = (o() - 0.5) * 50;
    li[F * 3 + 1] = o() * 22;
    li[F * 3 + 2] = (o() - 0.5) * 50;
  }
  ki.setAttribute("position", new THREE.BufferAttribute(li, 3));
  let ci = new THREE.PointsMaterial({
      color: 14674175,
      size: 0.42,
      map: c,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
    Kn = new THREE.Points(ki, ci);
  Kn.frustumCulled = false;
  Kn.userData.noAO = true;
  a.add(Kn);
  let Dn = r ? 0 : s >= 1 ? 1600 : 700,
    $t = new THREE.BufferGeometry(),
    dn = new Float32Array(Dn * 6),
    hi = new Float32Array(Dn),
    Wi = [70, 30, 70];
  for (let F = 0; F < Dn; F++) {
    let W1 = (o() - 0.5) * Wi[0],
      Z = o() * Wi[1],
      me = (o() - 0.5) * Wi[2];
    dn.set([W1, Z, me, W1 - 0.04, Z + 0.7, me], F * 6);
    hi[F] = 14 + o() * 6;
  }
  $t.setAttribute("position", new THREE.BufferAttribute(dn, 3));
  let Sr = new THREE.LineBasicMaterial({
      color: 11455464,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
    Hn = new THREE.LineSegments($t, Sr);
  Hn.frustumCulled = false;
  Hn.userData.noAO = true;
  Hn.raycast = () => {};
  a.add(Hn);
  let Ii = r ? 0 : s >= 1 ? 420 : 160,
    ui = new THREE.BufferGeometry(),
    cs = new Float32Array(Ii * 3),
    Xi = new Float32Array(Ii * 2),
    ka = new Float32Array(Ii * 3),
    As = [80, 22, 80],
    pc = [
      [0.95, 0.55, 0.1],
      [0.85, 0.3, 0.08],
      [0.9, 0.75, 0.15],
      [0.6, 0.2, 0.05],
    ];
  for (let F = 0; F < Ii; F++) {
    cs[F * 3] = (o() - 0.5) * As[0];
    cs[F * 3 + 1] = o() * As[1];
    cs[F * 3 + 2] = (o() - 0.5) * As[2];
    Xi[F * 2] = 0.5 + o() * 0.8;
    Xi[F * 2 + 1] = o() * 6.28;
    let W1 = pc[F % 4];
    ka.set(W1, F * 3);
  }
  ui.setAttribute("position", new THREE.BufferAttribute(cs, 3));
  ui.setAttribute("color", new THREE.BufferAttribute(ka, 3));
  let Di = new THREE.Points(
    ui,
    new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      map: c,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    }),
  );
  Di.frustumCulled = false;
  Di.userData.noAO = true;
  a.add(Di);
  let Er = [];
  for (let F = 0; F < 22; F++) {
    let W1 = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: l,
        transparent: true,
        depthWrite: false,
        opacity: 0,
        color: 12568276,
      }),
    );
    W1.userData = {
      age: (F / 22) * 6,
      noAO: true,
    };
    W1.renderOrder = 5;
    a.add(W1);
    Er.push(W1);
  }
  let T = new THREE.Mesh(Ve, Ye);
  T.position.set(0.9, 0, -12.4);
  T.scale.setScalar(0.75);
  T.castShadow = true;
  T.visible = false;
  a.add(T);
  let X = new Set([b, v1, C, N, S, L, U, w, T]),
    oe = new THREE.Group();
  a.add(oe);
  a.children.slice().forEach((F) => {
    if (F !== oe && !X.has(F)) {
      oe.add(F);
    }
  });
  let ee = new THREE.Vector3();
  function te(F) {
    Jt.color.set(F ? 6963104 : 16777215);
  }
  function We(F, W1, Z, me, fe, ae, Te) {
    p.opacity = F.ground;
    p.depthWrite = F.ground > 0.95;
    b.visible = F.ground > 0.01;
    A.forEach((be) => {
      let ne = F.ground < 0.99;
      if (be.transparent !== ne) {
        be.transparent = ne;
        be.needsUpdate = true;
      }
      be.opacity = F.ground;
      be.depthWrite = !ne;
    });
    f.uSnow.value = F.snow;
    f.uRoofSnow.value = F.roofSnow;
    f.uGrow.value = F.grow;
    f.uLeafTint.value.copy(F.leafTint);
    et(F.beacons || 0, W1);
    T.visible = F.section > 0.3;
    U.visible = F.snow > 0.25;
    j.forEach((be) => {
      be.visible = F.grow > 0.02;
      be.castShadow = F.grow > 0.5;
    });
    H.forEach((be) => {
      be.visible = F.snow > 0.5;
    });
    ge.visible = F.explode < 0.05;
    De.visible = true;
    let Re = 1 - me;
    pe.front.emissiveIntensity = 0.1 + 2.2 * Re;
    pe.rear.emissiveIntensity = 0.1 + 3 * Re;
    ge.userData.led.scale.setScalar(0.8 + 0.25 * Math.sin(W1 * 3));
    let ze = smooth(0.35, 0.9, F.ground);
    ce.forEach((be) => {
      be.visible = F.ground > 0.5 || F.explode > 0.05;
    });
    V.forEach((be) => {
      be.halo.material.opacity = 0.75 * Re;
      be.pool.material.opacity = 0.55 * Re * ze;
    });
    xe.intensity = 55 * Re;
    Ue.intensity = 40 * Re;
    z.color.setRGB(3.2, 2.2, 1.1).multiplyScalar(0.06 + 0.94 * Re);
    Ge.forEach((be) => {
      be.material.opacity = 0.5 * Re;
    });
    Ge.pool.material.opacity = 0.4 * Re * ze;
    Ce.forEach((be, ne) => {
      be.material.opacity = 0.5 * Re * clamp(Ze(Te, ne), 0, 1) * (1 - F.ghost) * ze;
    });
    Ae.opacity = Re * 0.9;
    tn.position.set(fe.x, 0, fe.z);
    Kn.position.set(fe.x, 0, fe.z);
    Hn.position.set(fe.x, 0, fe.z);
    Di.position.set(fe.x, 0, fe.z);
    let qe = F.snowfall;
    tn.visible = Kn.visible = qe > 0.02 && he > 0;
    if (tn.visible) {
      let be = He.attributes.position.array;
      for (let tt = 0; tt < he; tt++) {
        be[tt * 3 + 1] -= rt[tt * 2] * Z * 1.5;
        be[tt * 3] += Math.sin(W1 * 0.7 + rt[tt * 2 + 1]) * Z * 0.3;
        be[tt * 3 + 2] += Math.cos(W1 * 0.5 + rt[tt * 2 + 1]) * Z * 0.2;
        if (be[tt * 3 + 1] < 0) {
          be[tt * 3 + 1] = nt[1];
        }
      }
      He.attributes.position.needsUpdate = true;
      let ne = ki.attributes.position.array;
      for (let tt = 0; tt < $n; tt++) {
        ne[tt * 3 + 1] -= 0.8 * Z;
        if (ne[tt * 3 + 1] < 0) {
          ne[tt * 3 + 1] = 22;
        }
      }
      ki.attributes.position.needsUpdate = true;
      Jt.opacity = 0.8 * qe * (1 - me * 0.45);
      ci.opacity = 0.2 * qe * (1 - me * 0.5);
    }
    Hn.visible = F.rain > 0.02 && Dn > 0;
    if (Hn.visible) {
      let be = $t.attributes.position.array;
      for (let ne = 0; ne < Dn; ne++) {
        let tt = hi[ne] * Z;
        be[ne * 6 + 1] -= tt;
        be[ne * 6 + 4] -= tt;
        if (be[ne * 6 + 4] < 0) {
          be[ne * 6 + 1] += Wi[1];
          be[ne * 6 + 4] += Wi[1];
        }
      }
      $t.attributes.position.needsUpdate = true;
      Sr.opacity = 0.32 * F.rain;
    }
    Di.visible = F.leaves > 0.02 && Ii > 0;
    if (Di.visible) {
      let be = ui.attributes.position.array;
      for (let ne = 0; ne < Ii; ne++) {
        be[ne * 3 + 1] -= Xi[ne * 2] * Z * 0.9;
        be[ne * 3] += (Math.sin(W1 * 0.9 + Xi[ne * 2 + 1]) * 0.7 + 0.35) * Z;
        be[ne * 3 + 2] += Math.cos(W1 * 0.6 + Xi[ne * 2 + 1]) * 0.4 * Z;
        if (be[ne * 3 + 1] < 0) {
          be[ne * 3 + 1] = As[1];
        }
      }
      ui.attributes.position.needsUpdate = true;
      Di.material.opacity = 0.9 * F.leaves;
    }
    Er.forEach((be) => {
      be.userData.age += Z * 0.55;
      if (be.userData.age > 6) {
        be.userData.age -= 6;
      }
      let ne = be.userData.age / 6;
      ee.copy(ae);
      ee.y += ne * 5.2;
      ee.x += ne * 2.2 + Math.sin(ne * 5 + be.id) * 0.18;
      ee.z += Math.cos(ne * 3 + be.id) * 0.15;
      be.position.copy(ee);
      be.scale.setScalar(0.5 + ne * 2.6);
      be.material.opacity = Math.sin(Math.PI * Math.min(1, ne * 1.3)) * 0.34 * F.smoke * (0.5 + 0.5 * Re);
    });
  }
  let Ze = (F, W1) => F - W1 * 0.3;
  return {
    world: a,
    ground: b,
    groundMat: p,
    U: f,
    update: We,
    lamps: V,
    setThermal: te,
    evGroup: De,
    props: oe,
    sight: SIGHT,
  };
}
