import * as THREE from "three";
import { clamp, lerp } from "./util.js";
import { dotTexture } from "./textures.js";
const COLORS = {
  wire: 16761963,
  cold: 5220095,
  hot: 16739151,
  drain: 10135476,
  supply: 9433288,
  ret: 9083903,
  radon: 14257407,
};
const FLOW = 2.4;
export function createSystems({ house: i, reduce: e }) {
  let t = (S, I, L) => new THREE.Vector3(S, I, L),
    n = dotTexture("rgba(255,255,255,0.6)"),
    s = {
      netE: [],
      netW: [],
      netA: [],
      netR: [],
    },
    r = {
      netE: [],
      netW: [],
      netA: [],
      netR: [],
    },
    a = {};
  Object.keys(s).forEach((S) => {
    a[S] = new THREE.Group();
    a[S].visible = false;
    a[S].userData.noAO = true;
    i.add(a[S]);
  });
  let o = (S) => {
    let I = new THREE.CurvePath();
    for (let L = 1; L < S.length; L++) {
      I.add(new THREE.LineCurve3(S[L - 1], S[L]));
    }
    return I;
  };
  function c(S, I, L, U, V) {
    let O = o(I.map((Ce) => t(Ce[0], Ce[1], Ce[2]))),
      G = O.getLength(),
      z = Math.max(6, Math.round(G * 7)),
      k = 6,
      K = new THREE.MeshBasicMaterial({
        color: L,
        toneMapped: false,
        fog: false,
        transparent: true,
      });
    K.color.multiplyScalar(1.5);
    let ie = new THREE.Mesh(new THREE.TubeGeometry(O, z, U, k, false), K),
      xe = new THREE.MeshBasicMaterial({
        color: L,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
        fog: false,
      });
    xe.color.multiplyScalar(FLOW);
    let Ue = new THREE.Mesh(new THREE.TubeGeometry(O, z, U * 3.4, k, false), xe);
    ie.renderOrder = 7;
    Ue.renderOrder = 8;
    ie.userData.noAO = Ue.userData.noAO = true;
    ie.raycast = Ue.raycast = () => {};
    a[S].add(ie, Ue);
    s[S].push({
      tube: ie,
      glow: Ue,
      segs: z,
      radial: k,
      gmat: xe,
    });
    if (V) {
      r[S].push({
        curve: O,
        len: G,
        n: Math.max(3, Math.round(G * V.density)),
        speed: V.speed,
        color: V.color || L,
      });
    }
  }
  let l = [];
  for (let S = 0; S <= 10; S++) {
    let I = S / 10;
    l.push([2.8, lerp(9.1, 7.7, I) - 1 * Math.sin(Math.PI * I), lerp(-15.5, -4.45, I)]);
  }
  c("netE", [...l, [2.8, 1.45, -4.3], [2.8, -0.35, -4.3], [2.8, -0.35, -3.86], [2.8, -0.72, -3.86]], COLORS.wire, 0.045, {
    density: 2.2,
    speed: 6,
  });
  let u = [2.8, -0.72, -3.78],
    f = [2.8, -0.2, -3.78];
  c("netE", [u, f, [2.2, -0.2, -3.78], [2.2, 1.35, -3.9], [4.6, 1.35, -3.9]], COLORS.wire, 0.032, {
    density: 2.5,
    speed: 5,
  });
  c(
    "netE",
    [
      u,
      f,
      [4.94, -0.2, -3.78],
      [4.94, -0.2, 3.7],
      [4.94, 0.6, 3.92],
      [1.45, 0.6, 3.92],
      [1.45, 2.45, 3.92],
      [0.05, 2.45, 3.92],
      [0.05, 0.6, 3.92],
      [-4.94, 0.6, 3.92],
      [-4.94, 0.6, -3.2],
    ],
    COLORS.wire,
    0.032,
    {
      density: 2.5,
      speed: 5,
    },
  );
  c("netE", [u, f, [4.94, -0.2, -3.78], [4.94, 3.85, -3.78], [4.94, 3.85, 3.92], [-4.94, 3.85, 3.92], [-4.94, 3.85, -2.4]], COLORS.wire, 0.032, {
    density: 2.5,
    speed: 5,
  });
  c("netE", [u, f, [1.28, -0.2, -3.78], [1.28, -0.2, -1], [1.28, 3.05, -1], [-1.5, 3.05, -1], [-1.5, 3.05, 0.5]], COLORS.wire, 0.03, {
    density: 2.5,
    speed: 5,
  });
  c(
    "netE",
    [
      [1.28, 3.05, -1],
      [3, 3.05, -1],
      [3, 3.05, -1.6],
    ],
    COLORS.wire,
    0.03,
    {
      density: 2.5,
      speed: 5,
    },
  );
  c("netE", [u, f, [4.94, -0.2, -3.78], [4.94, -0.2, 2.5], [4.94, 1.3, 2.5], [5.1, 1.3, 2.5]], COLORS.wire, 0.034, {
    density: 2.5,
    speed: 5,
  });
  c(
    "netW",
    [
      [-0.5, -2.2, 16],
      [-0.5, -2.2, 3.75],
      [-0.5, -0.32, 3.75],
      [-0.5, -0.32, -3],
      [-1.95, -0.32, -3],
      [-1.95, -1.35, -3],
    ],
    COLORS.cold,
    0.072,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-0.5, -0.32, -3.2],
      [2.4, -0.32, -3.2],
      [2.4, -0.32, -3.7],
      [2.4, 1.05, -3.7],
    ],
    COLORS.cold,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-0.5, -0.32, -3.45],
      [-2.3, -0.32, -3.45],
      [-2.3, 3.95, -3.45],
      [-2.3, 3.95, -3.62],
    ],
    COLORS.cold,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-2.3, 3.6, -3.45],
      [-3.4, 3.6, -3.45],
    ],
    COLORS.cold,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-2.2, -1.35, -3],
      [-2.2, -0.46, -3],
      [-2.2, -0.46, -3.32],
      [2.55, -0.46, -3.32],
      [2.55, -0.46, -3.72],
      [2.55, 1.05, -3.72],
    ],
    COLORS.hot,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-2.2, -0.46, -3.32],
      [-2.47, -0.46, -3.32],
      [-2.47, 3.95, -3.32],
      [-2.47, 3.95, -3.6],
    ],
    COLORS.hot,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-2.47, 3.6, -3.32],
      [-3.5, 3.6, -3.32],
    ],
    COLORS.hot,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  c(
    "netW",
    [
      [-3.6, 3.48, -3.62],
      [-2.6, 3.48, -3.62],
      [-2.6, -2.95, -3.62],
      [0.6, -2.95, -3.62],
      [0.6, -3.2, -4.3],
      [0.6, -3.45, -9.5],
    ],
    COLORS.drain,
    0.087,
    {
      density: 1.6,
      speed: 2.8,
    },
  );
  c(
    "netW",
    [
      [2.6, 0.95, -3.86],
      [2.6, -2.9, -3.86],
      [0.75, -2.9, -3.86],
    ],
    COLORS.drain,
    0.072,
    {
      density: 1.6,
      speed: 2.8,
    },
  );
  c(
    "netW",
    [
      [-2.6, 3.48, -3.62],
      [-2.6, 10.2, -3.62],
    ],
    COLORS.drain,
    0.065,
    null,
  );
  let d = [-3.3, -1.15, -2.6],
    h = [-3.3, -0.12, -2.6];
  c("netA", [d, h, [2.6, -0.12, -2.6], [4.4, -0.12, -2.6], [4.4, -0.12, -1.2], [4.4, 0.34, -1.2]], COLORS.supply, 0.091, {
    density: 1.6,
    speed: 3.2,
  });
  c("netA", [h, [-2, -0.12, -2.6], [-2, -0.12, 3.4], [-2, 0.34, 3.4]], COLORS.supply, 0.078, {
    density: 1.6,
    speed: 3.2,
  });
  c(
    "netA",
    [
      [3.1, -0.12, -2.6],
      [3.1, -0.12, 3.45],
      [3.1, 0.34, 3.45],
    ],
    COLORS.supply,
    0.078,
    {
      density: 1.6,
      speed: 3.2,
    },
  );
  c(
    "netA",
    [
      [1.28, -0.12, -2.6],
      [1.28, 3.35, -2.6],
      [3.8, 3.35, -2.6],
      [3.8, 3.35, 2.9],
      [3.8, 3.52, 2.9],
    ],
    COLORS.supply,
    0.078,
    {
      density: 1.6,
      speed: 3.2,
    },
  );
  c(
    "netA",
    [
      [1.28, 3.35, -2.6],
      [-3.8, 3.35, -2.6],
      [-3.8, 3.35, 2],
      [-3.8, 3.52, 2],
    ],
    COLORS.supply,
    0.078,
    {
      density: 1.6,
      speed: 3.2,
    },
  );
  c(
    "netA",
    [
      [-1.75, 5.6, 1],
      [-1.75, -0.32, 1],
      [-3.3, -0.32, 1],
      [-3.3, -0.32, -2.15],
      [-3.3, -1.05, -2.15],
    ],
    COLORS.ret,
    0.091,
    {
      density: 1.6,
      speed: 2.4,
    },
  );
  c(
    "netR",
    [
      [-1.2, -2.92, -1.5],
      [-1.2, 11.6, -1.5],
    ],
    COLORS.radon,
    0.075,
    {
      density: 2.2,
      speed: 2.6,
    },
  );
  let p = {},
    x = new THREE.Color(),
    g = new THREE.Color(16777215);
  Object.keys(r).forEach((S) => {
    let I = r[S];
    if (!I.length) {
      return;
    }
    let L = I.reduce((k, K) => k + K.n, 0),
      U = new THREE.BufferGeometry();
    U.setAttribute("position", new THREE.BufferAttribute(new Float32Array(L * 3), 3));
    let V = new Float32Array(L * 3),
      O = 0;
    I.forEach((k) => {
      x.set(k.color).lerp(g, 0.45).multiplyScalar(FLOW);
      for (let K = 0; K < k.n; K++, O++) {
        V[O * 3] = x.r;
        V[O * 3 + 1] = x.g;
        V[O * 3 + 2] = x.b;
      }
    });
    U.setAttribute("color", new THREE.BufferAttribute(V, 3));
    let G = new THREE.PointsMaterial({
        size: S === "netE" ? 0.2 : 0.26,
        map: n,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        fog: false,
      }),
      z = new THREE.Points(U, G);
    z.frustumCulled = false;
    z.renderOrder = 9;
    z.raycast = () => {};
    a[S].add(z);
    p[S] = z;
  });
  let m = e ? 0 : 260,
    M = new THREE.BufferGeometry(),
    E = new Float32Array(m * 3),
    _ = new Float32Array(m),
    A = t(-1.2, -2.95, -1.5),
    b = (S) => {
      E[S * 3] = (Math.random() - 0.5) * 9.4;
      E[S * 3 + 1] = -3.05 - Math.random() * 1.6;
      E[S * 3 + 2] = (Math.random() - 0.5) * 7.4;
      _[S] = 0.4 + Math.random() * 0.8;
    };
  for (let S = 0; S < m; S++) {
    b(S);
  }
  M.setAttribute("position", new THREE.BufferAttribute(E, 3));
  let R = new THREE.PointsMaterial({
      color: new THREE.Color(COLORS.radon).multiplyScalar(FLOW),
      size: 0.2,
      map: dotTexture("rgba(217,140,255,0.6)"),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
      fog: false,
    }),
    v1 = new THREE.Points(M, R);
  v1.frustumCulled = false;
  v1.raycast = () => {};
  a.netR.add(v1);
  let w = new THREE.Vector3(),
    C = {
      netE: 1,
      netW: 1,
      netA: 1,
      netR: 1,
    };
  function N(S, I, L, U) {
    let V = S.explode < 0.06;
    Object.keys(s).forEach((O) => {
      let G = S[O],
        z = a[O];
      z.visible = V && G > 0.003;
      if (!z.visible) {
        return;
      }
      let k = !I || I === O ? 1 : 0.2,
        K = (C[O] = lerp(C[O], k, Math.min(1, U * 4)));
      s[O].forEach((xe) => {
        let Ue = Math.floor(clamp(G, 0, 1) * xe.segs) * xe.radial * 6;
        xe.tube.geometry.setDrawRange(0, Ue);
        xe.glow.geometry.setDrawRange(0, Ue);
        xe.tube.material.opacity = K;
        xe.gmat.opacity = (0.22 + 0.1 * Math.sin(L * 3 + xe.segs)) * K;
      });
      let ie = p[O];
      if (ie) {
        let xe = ie.geometry.attributes.position.array,
          Ue = 0;
        r[O].forEach((Ce) => {
          for (let Ye = 0; Ye < Ce.n; Ye++, Ue++) {
            let J = (Ye / Ce.n + (L * Ce.speed) / Ce.len) % 1;
            if (J > G) {
              xe[Ue * 3 + 1] = -999;
              continue;
            }
            Ce.curve.getPointAt(J, w);
            xe[Ue * 3] = w.x;
            xe[Ue * 3 + 1] = w.y;
            xe[Ue * 3 + 2] = w.z;
          }
        });
        ie.geometry.attributes.position.needsUpdate = true;
        ie.material.opacity = clamp(G * 3, 0, 1) * K;
      }
    });
    if (m && a.netR.visible) {
      R.opacity = clamp(S.netR * 2, 0, 0.9) * C.netR;
      for (let O = 0; O < m; O++) {
        w.set(A.x - E[O * 3], A.y - E[O * 3 + 1], A.z - E[O * 3 + 2]);
        let G = w.length();
        if (G < 0.25) {
          b(O);
          continue;
        }
        w.multiplyScalar((U * _[O] * 1.1) / G);
        E[O * 3] += w.x + Math.sin(L + O) * U * 0.15;
        E[O * 3 + 1] += w.y;
        E[O * 3 + 2] += w.z;
      }
      M.attributes.position.needsUpdate = true;
    }
  }
  return {
    groups: a,
    update: N,
  };
}
