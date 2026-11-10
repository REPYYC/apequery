import * as THREE from "three";
import { clamp, lerp, smooth, rng, fbm } from "./util.js";
import { qscale, glowTexture, dotTexture } from "./textures.js";
const SLOT = 0.38;
export function createUnderground({ scene: i, M: e, tier: t, reduce: n }) {
  let s = new THREE.Group();
  s.visible = false;
  i.add(s);
  let r = rng(55),
    a = dotTexture("rgba(255,255,255,0.65)"),
    o = (ce, Ie, je) => new THREE.Vector3(ce, Ie, je),
    c = 0.45,
    l = 0.66,
    u = (() => {
      let ce = Math.round(1024 * qscale()),
        Ie = Math.round(512 * qscale()),
        je = document.createElement("canvas");
      je.width = ce;
      je.height = Ie;
      let le = je.getContext("2d"),
        _e = le.createImageData(ce, Ie),
        j = _e.data,
        $ = [
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
        de = (Ee) => {
          let Le = 0;
          while (Le < $.length - 2 && $[Le + 1][0] <= Ee) {
            Le++;
          }
          let [Je, B] = $[Le],
            [pt, Qe] = $[Le + 1],
            D1 = clamp((Ee - Je) / (pt - Je), 0, 1);
          return [lerp(B[0], Qe[0], D1), lerp(B[1], Qe[1], D1), lerp(B[2], Qe[2], D1)];
        };
      for (let Ee = 0; Ee < Ie; Ee++) {
        for (let Le = 0; Le < ce; Le++) {
          let Je = (Ee / Ie) * 9 + (fbm(Le / 90, Ee / 40, 3, 11, 8, 5) - 0.5) * 0.7 + Math.sin(Le * 0.02 + Ee * 0.01) * 0.12,
            B = de(clamp(Je, 0, 9)),
            pt = (fbm(Le / 6, Ee / 6, 2, 170, 85, 9) - 0.5) * 34,
            Qe = (Ee * ce + Le) * 4;
          j[Qe] = clamp(B[0] + pt, 0, 255);
          j[Qe + 1] = clamp(B[1] + pt, 0, 255);
          j[Qe + 2] = clamp(B[2] + pt * 0.9, 0, 255);
          j[Qe + 3] = 255;
        }
      }
      le.putImageData(_e, 0, 0);
      for (let Ee = 0; Ee < 420 * qscale(); Ee++) {
        let Le = 105 + r() * 75;
        le.fillStyle = `rgba(${Le | 0},${(Le * 0.96) | 0},${(Le * 0.86) | 0},0.85)`;
        le.beginPath();
        le.ellipse(r() * ce, ((2.5 + r() * 2.1) / 9) * Ie, 1.5 + r() * 3.5, 1.2 + r() * 2.4, r() * 3, 0, 6.3);
        le.fill();
      }
      let Ae = new THREE.CanvasTexture(je);
      Ae.colorSpace = THREE.SRGBColorSpace;
      Ae.wrapS = THREE.RepeatWrapping;
      Ae.anisotropy = 8;
      return Ae;
    })(),
    f = new THREE.MeshStandardMaterial({
      map: u,
      roughness: 1,
      metalness: 0,
    });
  u.repeat.set(6, 1);
  let d = new THREE.Mesh(new THREE.PlaneGeometry(240, 9), f);
  d.rotation.y = -Math.PI / 2;
  d.position.set(c + SLOT, -4.52, 0);
  d.userData.noAO = true;
  d.userData.noPick = true;
  d.receiveShadow = false;
  s.add(d);
  let h = (() => {
      let ce = document.createElement("canvas");
      ce.width = 4;
      ce.height = 256;
      let Ie = ce.getContext("2d"),
        je = Ie.createLinearGradient(0, 0, 0, 256);
      je.addColorStop(0, "rgb(74,78,86)");
      je.addColorStop(0.35, "rgb(24,26,31)");
      je.addColorStop(1, "rgb(6,7,9)");
      Ie.fillStyle = je;
      Ie.fillRect(0, 0, 4, 256);
      let le = new THREE.CanvasTexture(ce);
      le.colorSpace = THREE.SRGBColorSpace;
      return le;
    })(),
    p = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 60),
      new THREE.MeshBasicMaterial({
        map: h,
        fog: false,
        toneMapped: false,
      }),
    );
  p.rotation.y = -Math.PI / 2;
  p.position.set(c + SLOT, -9.02 - 30, 0);
  p.userData.noAO = true;
  p.userData.noPick = true;
  p.raycast = () => {};
  s.add(p);
  let x = new THREE.Group();
  s.add(x);
  for (let ce = 0; ce <= 9; ce++) {
    let Ie = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.05, ce % 3 === 0 ? 1.4 : 0.8),
      new THREE.MeshBasicMaterial({
        color: 16039294,
        toneMapped: false,
      }),
    );
    Ie.position.set(0, -ce, 31 - (ce % 3 === 0 ? 0.7 : 0.4));
    Ie.userData.noAO = true;
    Ie.raycast = () => {};
    x.add(Ie);
  }
  let g = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.07, 240),
    new THREE.MeshBasicMaterial({
      color: 16039294,
      toneMapped: false,
    }),
  );
  g.position.set(c + SLOT - 0.02, 0.02, 0);
  g.userData.noAO = true;
  g.raycast = () => {};
  s.add(g);
  let m = (ce, Ie = 0.45, je = 0.2) => {
      let le = new THREE.MeshStandardMaterial({
        color: ce,
        roughness: Ie,
        metalness: je,
        emissive: ce,
        emissiveIntensity: 0.12,
        side: THREE.DoubleSide,
      });
      le.userData.th = [0.3];
      return le;
    },
    M = {
      water: m(4165606, 0.4, 0.3),
      gas: m(15775786, 0.45, 0.2),
      sewer: m(12169888, 0.8, 0),
      tile: m(15855334, 0.6, 0),
      roots: m(8017458, 0.95, 0),
      sump: m(8362672, 0.5, 0.3),
      crack: new THREE.MeshBasicMaterial({
        color: new THREE.Color(3, 0.5, 0.35),
        toneMapped: false,
      }),
    };
  M.roots.emissiveIntensity = 0;
  let E = {
    water: new THREE.Group(),
    gas: new THREE.Group(),
    sewer: new THREE.Group(),
    found: new THREE.Group(),
    radon: new THREE.Group(),
  };
  Object.values(E).forEach((ce) => s.add(ce));
  let _ = (ce, Ie, je, le, _e = 0) => {
      let j = new THREE.CatmullRomCurve3(
          ce.map((de) => o(...de)),
          false,
          "catmullrom",
          0.05,
        ),
        $ = new THREE.Mesh(new THREE.TubeGeometry(j, _e || Math.max(8, ce.length * 8), Ie, 10, false), je);
      $.castShadow = false;
      $.userData.noPick = true;
      le.add($);
      return j;
    },
    A = (ce, Ie, je, le, _e) => {
      let j = o(...ce),
        $ = o(...Ie),
        de = j.distanceTo($),
        Ae = new THREE.Mesh(new THREE.CylinderGeometry(je, je, de, 16, 1, true), le);
      Ae.position.copy(j).lerp($, 0.5);
      Ae.quaternion.setFromUnitVectors(o(0, 1, 0), $.clone().sub(j).normalize());
      Ae.userData.noPick = true;
      _e.add(Ae);
      return new THREE.LineCurve3(j, $);
    },
    b = [];
  function R(ce, Ie, je, le, _e, j = 0.22) {
    let $ = new THREE.BufferGeometry();
    $.setAttribute("position", new THREE.BufferAttribute(new Float32Array(Ie * 3), 3));
    let de = new THREE.Points(
      $,
      new THREE.PointsMaterial({
        size: j,
        map: a,
        color: new THREE.Color(le).multiplyScalar(2.2),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    de.frustumCulled = false;
    de.userData.noAO = true;
    de.raycast = () => {};
    _e.add(de);
    b.push({
      curve: ce,
      n: Ie,
      speed: je,
      len: ce.getLength(),
      pts: de,
      group: _e,
    });
  }
  A([c - 12, -2.4, 22.8], [c + 60, -2.4, 22.8], 0.24, M.water, E.water);
  A([c - 12, -1.3, 24.7], [c + 60, -1.3, 24.7], 0.11, M.gas, E.gas);
  let v1 = _(
    [
      [l, -2.4, 22.8],
      [l, -2.3, 18],
      [l, -2.2, 6],
      [l, -2.2, 3.75],
    ],
    0.075,
    M.water,
    E.water,
    30,
  );
  R(v1, 20, 2, 7320831, E.water, 0.2);
  let w = _(
    [
      [l + 0.1, -1.3, 24.7],
      [l + 0.1, -1.3, 8],
      [l + 0.1, -0.3, 5.4],
      [l + 0.1, 0.9, 4.25],
    ],
    0.055,
    M.gas,
    E.gas,
    30,
  );
  R(w, 16, 2.6, 16765514, E.gas, 0.18);
  let C = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.2), e.steel);
  C.position.set(l + 0.1, 1.2, 4.25);
  C.userData.noPick = true;
  E.gas.add(C);
  A([c - 12, -3.95, -18.2], [c + 60, -3.95, -18.2], 0.4, M.sewer, E.sewer);
  let N = _(
    [
      [l, -3.27, -3.8],
      [l, -3.35, -9],
      [l, -3.55, -13],
      [l, -3.9, -17.9],
    ],
    0.19,
    M.sewer,
    E.sewer,
    30,
  );
  R(N, 18, 1.3, 13214314, E.sewer, 0.2);
  let S = _(
      [
        [l, -3.3, -5.2],
        [l, -1, -5.2],
        [l, 0.1, -5.2],
      ],
      0.14,
      M.sewer,
      E.sewer,
      10,
    ),
    I = o(l, -3.52, -12.8);
  [
    [
      [0.9, -0.2, -12.4],
      [0.8, -1.2, -12.2],
      [l + 0.04, -2.4, -12.5],
      [l + 0.02, -3.2, -12.8],
      [l, -3.5, -12.9],
    ],
    [
      [0.9, -0.2, -12.4],
      [0.85, -0.9, -11.4],
      [l + 0.1, -2, -11.5],
      [l + 0.04, -3, -12.1],
      [l, -3.45, -12.6],
    ],
    [
      [0.9, -0.2, -12.4],
      [0.85, -1, -13.5],
      [l + 0.12, -2.2, -13.9],
      [l + 0.04, -3.1, -13.4],
      [l, -3.5, -13.1],
    ],
    [
      [l + 0.1, -2.2, -13.8],
      [l + 0.05, -2.9, -14.6],
    ],
    [
      [l + 0.12, -2, -11.5],
      [l + 0.06, -2.6, -10.5],
    ],
  ].forEach((ce, Ie) => _(ce, Ie < 3 ? 0.1 : 0.05, M.roots, E.sewer, 24));
  let L = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 8, 28), M.crack);
  L.position.copy(I);
  L.rotation.y = Math.PI / 2;
  L.userData.noAO = true;
  E.sewer.add(L);
  [[-4.55], [4.55]].forEach(([ce]) => A([c - 6, -3.3, ce], [c + 6.2, -3.3, ce], 0.11, M.tile, E.found));
  [[c - 6], [c + 6.2]].forEach(([ce]) => A([ce, -3.3, -4.55], [ce, -3.3, 4.55], 0.11, M.tile, E.found));
  let U = _(
      [
        [l, -3.3, 4.55],
        [l, -3.3, 3],
        [l, -3.1, 1.9],
      ],
      0.09,
      M.tile,
      E.found,
      12,
    ),
    V = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.75, 22, 1, true), M.sump);
  V.position.set(l, -3.05, 1.6);
  V.userData.noPick = true;
  E.found.add(V);
  let O = _(
    [
      [l, -2.55, 1.6],
      [l, -1.2, 1.6],
      [l, -1.2, 6.8],
      [l, 0.1, 6.8],
    ],
    0.075,
    M.sump,
    E.found,
    24,
  );
  R(U, 10, 0.8, 7320831, E.found, 0.16);
  R(O, 14, 1.8, 7320831, E.found, 0.18);
  _(
    [
      [0.62, -0.15, 4.27],
      [0.55, -0.55, 4.27],
      [0.74, -0.95, 4.27],
      [0.5, -1.4, 4.27],
      [0.7, -1.9, 4.27],
      [0.52, -2.5, 4.27],
    ],
    0.022,
    M.crack,
    E.found,
    30,
  );
  let z = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: glowTexture("rgba(255,90,70,0.9)", "rgba(255,60,40,0)"),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.6,
    }),
  );
  z.position.set(0.62, -1.4, 4.5);
  z.scale.set(2.2, 3.4, 1);
  z.userData.noAO = true;
  E.found.add(z);
  let k = n ? 0 : t >= 1 ? 520 : 200,
    K = new THREE.BufferGeometry(),
    ie = new Float32Array(k * 3),
    xe = new Float32Array(k * 2),
    Ue = (ce) => {
      ie[ce * 3] = r() * (SLOT - 0.06);
      ie[ce * 3 + 1] = -8.6 + r() * 1.4;
      ie[ce * 3 + 2] = (r() - 0.5) * 14 - 1.5;
      xe[ce * 2] = 0.6 + r() * 0.9;
      xe[ce * 2 + 1] = r() * 6.28;
    };
  for (let ce = 0; ce < k; ce++) {
    Ue(ce);
    ie[ce * 3 + 1] = -8.6 + r() * 5.6;
  }
  K.setAttribute("position", new THREE.BufferAttribute(ie, 3));
  let Ce = new THREE.Points(
    K,
    new THREE.PointsMaterial({
      size: 0.42,
      map: a,
      color: new THREE.Color(14257407).multiplyScalar(2.6),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }),
  );
  Ce.frustumCulled = false;
  Ce.userData.noAO = true;
  Ce.raycast = () => {};
  E.radon.add(Ce);
  let Ye = {
      x: -1.2,
      z: -1.5,
    },
    J = {
      ugWater: o(l, -2.4, 21),
      ugGas: o(l + 0.1, -1.3, 14),
      ugSewer: o(l, -3.7, -16),
      ugRoots: I.clone(),
      ugSewerMain: o(l, -3.95, -18.2),
      ugTile: o(l, -3.3, 4.55),
      ugSump: o(l, -3.1, 1.6),
      ugCrack: o(l, -1.5, 4.3),
      ugRadon: o(-1.2, -6, -1.5),
      ugMeter: o(l + 0.1, 1.2, 4.25),
      ugMain: o(l, -2.4, 22.8),
      ugGasMain: o(l, -1.3, 24.7),
    },
    se = o(0, 0, 0),
    ye = {
      cx: -1000,
    };
  function Ve(ce, Ie, je, le) {
    let _e = smooth(0, 1, ce.section),
      j = ce.section < 0.002 ? -1000 : lerp(-60, ce.cutX, _e);
    ye.cx = j;
    s.visible = ce.section > 0.002;
    if (!s.visible) {
      return j;
    }
    d.position.x = j + SLOT;
    p.position.x = j + SLOT;
    g.position.x = j + SLOT - 0.02;
    x.position.x = j + SLOT;
    J.ugRadon.x = j + SLOT * 0.5;
    Object.entries(E).forEach(([$, de]) => {
      let Ae = Ie === $ || (Ie === "street" && ($ === "water" || $ === "gas")),
        Ee = !Ie || Ae ? 1 : 0.2;
      de.userData.al = lerp(de.userData.al ?? Ee, Ee, Math.min(1, le * 5));
      de.traverse((Le) => {
        if (Le.material && Le.material.isMeshStandardMaterial) {
          Le.material.emissiveIntensity = Ae ? 0.6 : 0.12;
        }
      });
    });
    M.crack.color.setRGB(3, 0.5, 0.35).multiplyScalar(0.7 + 0.3 * Math.sin(je * 5));
    b.forEach(($) => {
      let de = $.group.userData.al ?? 1;
      $.pts.visible = de > 0.02;
      if (!$.pts.visible) {
        return;
      }
      let Ae = $.pts.geometry.attributes.position.array;
      for (let Ee = 0; Ee < $.n; Ee++) {
        let Le = (Ee / $.n + (je * $.speed) / $.len) % 1;
        $.curve.getPointAt(Le, se);
        Ae[Ee * 3] = se.x;
        Ae[Ee * 3 + 1] = se.y;
        Ae[Ee * 3 + 2] = se.z;
      }
      $.pts.geometry.attributes.position.needsUpdate = true;
      $.pts.material.opacity = de;
    });
    Ce.visible = k > 0 && (E.radon.userData.al ?? 1) > 0.2;
    if (Ce.visible) {
      Ce.position.x = j;
      for (let $ = 0; $ < k; $++) {
        let de = ie[$ * 3 + 1],
          Ae = smooth(-5.8, -3, de);
        ie[$ * 3 + 1] += xe[$ * 2] * le * 0.8;
        ie[$ * 3 + 2] += ((Ye.z - ie[$ * 3 + 2]) * Ae * 0.5 + Math.sin(je * 0.8 + xe[$ * 2 + 1]) * 0.1) * le;
        if (ie[$ * 3 + 1] > -2.95) {
          Ue($);
        }
      }
      K.attributes.position.needsUpdate = true;
      Ce.material.opacity = E.radon.userData.al ?? 1;
    }
    return j;
  }
  return {
    group: s,
    update: Ve,
    ANCHORS: J,
    groups: E,
    state: ye,
  };
}
