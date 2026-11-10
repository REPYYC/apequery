import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { clamp, lerp, smooth, rng, boxUV } from "./util.js";
import { snowEdgeAlpha, roomTexture } from "./textures.js";
import { makeGlass } from "./materials.js";
export const W = 10;
export const D = 8;
const FLOOR = 2.9;
export const LEVELS = [
  {
    key: "roof",
    dy: 9.2,
  },
  {
    key: "upper",
    dy: 6.6,
  },
  {
    key: "main",
    dy: 4.1,
  },
  {
    key: "basement",
    dy: 2,
  },
  {
    key: "below",
    dy: 0,
  },
];
const v = (i, e, t) => new THREE.Vector3(i, e, t);
export function createHouse({ M: i, T: e, markTex: t, glowTex: n }) {
  let s = new THREE.Group(),
    r = {};
  LEVELS.forEach((S) => {
    let I = new THREE.Group();
    I.userData.level = S.key;
    r[S.key] = I;
    s.add(I);
  });
  let a = {},
    o = [],
    c = new THREE.LineBasicMaterial({
      color: 11126756,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      toneMapped: false,
      fog: false,
    }),
    l = {
      icicles: null,
      snowL: null,
      snowR: null,
      chimneyTop: new THREE.Object3D(),
      fans: [],
    },
    u = boxUV;
  function f(S, I, L, U, V = 0, O = 0, G = 0, z, k = {}) {
    let K = new THREE.BoxGeometry(S, I, L);
    u(K, k.uv || {});
    let ie = new THREE.Mesh(K, U);
    ie.position.set(V, O, G);
    ie.castShadow = k.cast !== false;
    ie.receiveShadow = k.receive !== false;
    if (k.edges) {
      let xe = new THREE.LineSegments(new THREE.EdgesGeometry(K, 30), c);
      xe.raycast = () => {};
      ie.add(xe);
    }
    if (z) {
      z.add(ie);
    }
    return ie;
  }
  function d(S, I, L, U, V, O = 0, G = 0, z = 0, k, K = {}) {
    let ie = new RoundedBoxGeometry(S, I, L, K.seg || 2, U),
      xe = new THREE.Mesh(ie, V);
    xe.position.set(O, G, z);
    xe.castShadow = K.cast !== false;
    xe.receiveShadow = true;
    if (k) {
      k.add(xe);
    }
    return xe;
  }
  function h(S, I, L, U, V, O, G, z = 18) {
    let k = new THREE.Mesh(new THREE.CylinderGeometry(S, S, I, z), L);
    k.position.set(U, V, O);
    k.castShadow = true;
    k.receiveShadow = true;
    if (G) {
      G.add(k);
    }
    return k;
  }
  function p(S, I, L, U) {
    let V = (a[S] ||= {
        meshes: [],
        mats: [],
        marks: [],
      }),
      O = (G) => {
        let z = G.clone();
        z.userData.baseEmissive = z.emissive.clone();
        return z;
      };
    I.forEach((G) => {
      G.material = Array.isArray(G.material) ? G.material.map(O) : O(G.material);
      G.userData.sys = S;
      V.meshes.push(G);
      V.mats.push(...[].concat(G.material));
    });
    if (L) {
      let G = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: t,
          transparent: true,
          depthTest: false,
          depthWrite: false,
          opacity: 0,
        }),
      );
      G.position.copy(L);
      G.scale.set(0.95, 0.95, 1);
      G.renderOrder = 10;
      G.userData.sys = S;
      G.userData.noAO = true;
      r[U].add(G);
      V.marks.push(G);
    }
  }
  let x = 0,
    g = {},
    m = (S) => (g[S] ||= roomTexture(S));
  function M(S, I, L, U, V, O) {
    let G = I.x1 - I.x0,
      z = I.y1 - I.y0,
      k = (I.x0 + I.x1) / 2,
      K = (I.y0 + I.y1) / 2,
      ie = new THREE.Group();
    ie.position.set(k, K, 0);
    S.add(ie);
    let xe = makeGlass(m(U || "living")),
      Ue = new THREE.Mesh(new THREE.PlaneGeometry(G, z), xe);
    Ue.position.z = 0.03;
    Ue.receiveShadow = false;
    ie.add(Ue);
    let Ce = 0.075,
      Ye = 0.1;
    d(G, Ce, Ye, 0.012, i.trim, 0, z / 2 - Ce / 2, 0.07, ie, {
      seg: 1,
    });
    d(G, Ce, Ye, 0.012, i.trim, 0, -z / 2 + Ce / 2, 0.07, ie, {
      seg: 1,
    });
    d(Ce, z, Ye, 0.012, i.trim, -G / 2 + Ce / 2, 0, 0.07, ie, {
      seg: 1,
    });
    d(Ce, z, Ye, 0.012, i.trim, G / 2 - Ce / 2, 0, 0.07, ie, {
      seg: 1,
    });
    let J = G > 1.35 ? Math.round(G / 0.95) : 1;
    for (let ye = 1; ye < J; ye++) {
      d(0.035, z - 0.1, 0.07, 0.008, i.trim, -G / 2 + (G / J) * ye, 0, 0.065, ie, {
        seg: 1,
        cast: false,
      });
    }
    if (z > 1.2) {
      d(G - 0.1, 0.035, 0.07, 0.008, i.trim, 0, z * 0.12, 0.065, ie, {
        seg: 1,
        cast: false,
      });
    }
    d(G + 0.22, 0.055, 0.26, 0.012, i.cedar, 0, -z / 2 - 0.03, 0.14, ie, {
      seg: 1,
    });
    d(G + 0.18, 0.09, 0.12, 0.012, i.trim, 0, z / 2 + 0.07, 0.1, ie, {
      seg: 1,
    });
    let se = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: n,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    se.position.set(0, 0, 0.4);
    se.scale.set(G * 2.6, z * 2.6, 1);
    se.userData.noAO = true;
    ie.add(se);
    o.push({
      mat: xe,
      halo: se,
      order: V != null ? V + x * 0.001 : x,
      always: !!O,
      w: G,
      h: z,
    });
    x++;
    return ie;
  }
  function E(S, I, L) {
    let U = I.x1 - I.x0,
      V = I.y1 - I.y0,
      O = (I.x0 + I.x1) / 2,
      G = (I.y0 + I.y1) / 2,
      z = new THREE.Group();
    z.position.set(O, G, 0);
    S.add(z);
    f(U, V, 0.07, i.door, 0, 0, 0, z, {
      uv: {
        ox: O,
        oy: G,
      },
    });
    let k = new THREE.Mesh(new THREE.PlaneGeometry(0.22, V * 0.72), makeGlass(m("hall")));
    k.position.set(-U / 2 + 0.22, 0.05, 0.04);
    z.add(k);
    o.push({
      mat: k.material,
      halo: null,
      order: 0.5,
      always: false,
      w: 0.22,
      h: V * 0.72,
    });
    d(0.03, 0.8, 0.05, 0.012, i.trim, U / 2 - 0.14, -0.05, 0.08, z, {
      seg: 1,
    });
    d(U + 0.14, 0.09, 0.12, 0.012, i.trim, 0, V / 2 + 0.07, 0.07, z, {
      seg: 1,
    });
    d(0.07, V, 0.1, 0.01, i.trim, -U / 2 - 0.035, 0, 0.06, z, {
      seg: 1,
    });
    d(0.07, V, 0.1, 0.01, i.trim, U / 2 + 0.035, 0, 0.06, z, {
      seg: 1,
    });
  }
  function _(S, I, L, U, V, O, G, z, k = {}) {
    let K = new THREE.Group(),
      ie = new Set([-S / 2, S / 2]),
      xe = new Set([0, I]);
    U.forEach((J) => {
      ie.add(J.x0);
      ie.add(J.x1);
      xe.add(J.y0);
      xe.add(J.y1);
    });
    let Ue = [...ie].sort((J, se) => J - se),
      Ce = [...xe].sort((J, se) => J - se),
      Ye = [i.trim, i.trim, i.trim, i.trim, V, i.drywall];
    for (let J = 0; J < Ue.length - 1; J++) {
      for (let se = 0; se < Ce.length - 1; se++) {
        let ye = (Ue[J] + Ue[J + 1]) / 2,
          Ve = (Ce[se] + Ce[se + 1]) / 2;
        if (!U.some((ce) => ye > ce.x0 && ye < ce.x1 && Ve > ce.y0 && Ve < ce.y1)) {
          f(Ue[J + 1] - Ue[J], Ce[se + 1] - Ce[se], L, Ye, ye, Ve, 0, K, {
            edges: true,
            uv: {
              ox: ye,
              oy: Ve + (k.v0 || 0),
            },
          });
        }
      }
    }
    U.forEach((J) => {
      if (J.door) {
        E(K, J, L);
      } else {
        M(K, J, L, J.room, k.order, J.always);
      }
    });
    K.position.copy(G);
    K.rotation.y = z || 0;
    O.add(K);
    return K;
  }
  (() => {
    let S = r.below,
      I = [],
      L = i.form;
    I.push(
      f(W + 0.5, 3.4, 0.25, L, 0, -1.4, D / 2 + 0.12, S, {
        edges: true,
        uv: {
          ox: 0,
          oy: -1.4,
        },
      }),
    );
    I.push(
      f(W + 0.5, 3.4, 0.25, L, 0, -1.4, -D / 2 - 0.12, S, {
        edges: true,
        uv: {
          ox: 0,
          oy: -1.4,
        },
      }),
    );
    I.push(
      f(0.25, 3.4, D, L, W / 2 + 0.12, -1.4, 0, S, {
        edges: true,
        uv: {
          oy: -1.4,
        },
      }),
    );
    I.push(
      f(0.25, 3.4, D, L, -W / 2 - 0.12, -1.4, 0, S, {
        edges: true,
        uv: {
          oy: -1.4,
        },
      }),
    );
    f(W + 1.2, 0.3, 0.8, i.concrete, 0, -3.1, D / 2 + 0.1, S);
    f(W + 1.2, 0.3, 0.8, i.concrete, 0, -3.1, -D / 2 - 0.1, S);
    f(0.8, 0.3, D, i.concrete, W / 2 + 0.1, -3.1, 0, S);
    f(0.8, 0.3, D, i.concrete, -W / 2 - 0.1, -3.1, 0, S);
    let U = f(W, 0.16, D, i.slab, 0, -2.88, 0, S, {
      edges: true,
    });
    p("foundation", [...I, U], v(W / 2 + 0.6, -1.4, 1.6), "below");
    let V = h(0.14, 9, i.pipe, 0.6, -3.25, -D / 2 - 4.3, S);
    V.rotation.x = Math.PI / 2 - 0.05;
    let O = h(0.14, 0.6, i.pipe, 0.6, -3, -D / 2 + 0.2, S),
      G = h(0.12, 3.2, i.pvc, 0.6, -1.6, -D / 2 - 1.2, S);
    p("sewer", [V, O, G], v(0.6, -2.4, -D / 2 - 4.5), "below");
    let z = h(0.1, 0.5, i.pvc, -1.2, -2.7, -1.5, S);
    p("radon", [z], v(-1.2, -2.2, -1.5), "below");
    let k = h(0.06, W + 1, i.pvc, 0, -3.25, D / 2 + 0.7, S, 10);
    k.rotation.z = Math.PI / 2;
    k.castShadow = false;
  })();
  (() => {
    let S = r.basement,
      I = new THREE.PointLight(16766880, 0, 15, 2);
    I.position.set(0.2, -0.7, -0.4);
    S.add(I);
    S.userData.lights = [I];
    let L = f(0.85, 1.7, 0.85, i.white, -3.3, -2, -2.6, S),
      U = f(0.87, 0.12, 0.87, i.copper, -3.3, -1.5, -2.6, S),
      V = f(6.2, 0.36, 0.5, i.steel, -0.3, -0.12, -2.6, S),
      O = f(0.5, 1, 0.5, i.steel, -3.3, -0.7, -2.6, S),
      G = h(0.07, 1.2, i.pvc, -3, -0.6, -3.1, S);
    p("hvac", [L, U, V, O, G], v(-3.3, -0.9, -2), "basement");
    let z = h(0.3, 1.4, i.white, -2.1, -2.1, -3, S),
      k = h(0.04, 1.2, i.copper, -2, -0.9, -3, S);
    p("water-heaters", [z, k], v(-2.1, -1.1, -2.6), "basement");
    let K = f(0.62, 0.95, 0.14, i.steel, 2.8, -1.2, -3.8, S),
      ie = f(0.4, 0.7, 0.02, i.copper, 2.8, -1.2, -3.72, S),
      xe = h(0.05, 1.5, i.copper, 2.8, -0.1, -3.8, S);
    p("electrical", [K, ie, xe], v(2.8, -0.5, -3.3), "basement");
    let Ue = h(0.1, 3.1, i.pvc, -1.2, -1.2, -1.5, S);
    p("radon", [Ue], null, "basement");
    h(0.09, 3.1, i.pipe, -2.6, -1.3, -3.6, S);
    for (let Ce = -4; Ce <= 4; Ce++) {
      f(0.09, 0.3, D - 0.3, i.cedar, Ce * 1, 0 - 0.1, 0, S, {
        cast: false,
      });
    }
  })();
  let A = [
    {
      x0: -3.8,
      x1: -1.2,
      y0: 0.7,
      y1: 2.5,
      room: "living",
    },
    {
      x0: 0.2,
      x1: 1.3,
      y0: 0,
      y1: 2.2,
      door: true,
    },
    {
      x0: 2.1,
      x1: 4.2,
      y0: 0.7,
      y1: 2.5,
      room: "kitchen",
    },
  ];
  (() => {
    let S = r.main,
      I = 0.3;
    f(W, 0.3, D, i.floor, 0, 0.15, 0, S, {
      edges: true,
    });
    _(W, FLOOR, 0.22, A, i.lap, S, v(0, I, D / 2), 0, {
      order: 1,
      v0: I,
    });
    _(
      W,
      FLOOR,
      0.22,
      [
        {
          x0: -3,
          x1: 1.6,
          y0: 0.1,
          y1: 2.45,
          room: "kitchen",
        },
      ],
      i.lap,
      S,
      v(0, I, -D / 2),
      Math.PI,
      {
        order: 4,
        v0: I,
      },
    );
    _(
      D,
      FLOOR,
      0.22,
      [
        {
          x0: -2.2,
          x1: -0.2,
          y0: 0.8,
          y1: 2.3,
          room: "hall",
        },
      ],
      i.lap,
      S,
      v(W / 2, I, 0),
      Math.PI / 2,
      {
        order: 2,
        v0: I,
      },
    );
    _(
      D,
      FLOOR,
      0.22,
      [
        {
          x0: 0.3,
          x1: 2.3,
          y0: 0.8,
          y1: 2.3,
          room: "living",
        },
      ],
      i.lap,
      S,
      v(-W / 2, I, 0),
      -Math.PI / 2,
      {
        order: 3,
        v0: I,
      },
    );
    f(0.15, FLOOR, 5, i.drywall, 1.2, I + FLOOR / 2, -1.2, S);
    let L = f(3, 0.95, 0.65, i.counter, 2.9, I + 0.48, -3.4, S),
      U = d(0.85, 1.95, 0.7, 0.03, i.steel, 4.35, I + 0.98, -3.4, S),
      V = f(0.75, 0.05, 0.6, i.steel, 2.4, I + 0.97, -3.4, S);
    p("installation", [L, U, V], v(3, 2.3, -3.2), "main");
    let O = h(0.1, 3.2, i.pvc, -1.2, 1.9, -1.5, S);
    p("radon", [O], null, "main");
    h(0.09, 3.2, i.pipe, -2.6, 1.9, -3.6, S);
    d(0.3, 0.42, 0.18, 0.02, i.white, 2.8, 1.5, -D / 2 - 0.2, S);
    h(0.035, 3.6, i.steel, 2.8, 3.55, -D / 2 - 0.1, S, 10);
    let G = new THREE.PointLight(16758123, 0, 11, 2);
    G.position.set(-1.5, 2.4, 0.5);
    S.add(G);
    let z = new THREE.PointLight(16758123, 0, 9, 2);
    z.position.set(3, 2.4, -1.5);
    S.add(z);
    S.userData.lights = [G, z];
    let k = new THREE.Group();
    S.add(k);
    f(2.9, 0.32, 2.3, i.stone, 0.55, 0.16, 5.1, k, {
      uv: {
        ox: 0.55,
        oy: 0.16,
      },
    });
    f(2.9, 0.07, 2.3, i.cedar, 0.55, 0.35, 5.1, k, {
      uv: {},
    });
    f(1.7, 0.17, 0.4, i.concrete, 0.7, 0.085, 6.55, k);
    f(1.9, 0.17, 0.4, i.concrete, 0.7, 0.255 - 0.085, 6.2, k);
    [-0.75, 1.85].forEach((Ue) => {
      d(0.22, 2.55, 0.22, 0.015, i.cedar, Ue, 1.67, 6.12, k);
      f(0.34, 0.5, 0.34, i.stone, Ue, 0.6, 6.12, k, {
        uv: {
          ox: Ue,
          oy: 0.6,
        },
      });
    });
    d(3.5, 0.24, 0.22, 0.02, i.cedar, 0.55, 2.84, 6.12, k);
    let K = f(3.4, 0.14, 2.6, [i.trim, i.trim, i.roof, i.cedar, i.trim, i.trim], 0.55, 3, 5.25, k, {
      uv: {
        swap: true,
      },
    });
    K.rotation.x = 0.1;
    [-0.15, 1.65].forEach((Ue) => {
      let Ce = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.24, 12), i.sconce);
      Ce.position.set(Ue, 1.9, 4.2);
      Ce.userData.noAO = true;
      k.add(Ce);
      let Ye = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: n,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0,
        }),
      );
      Ye.position.set(Ue, 1.9, 4.5);
      Ye.scale.set(1.6, 1.6, 1);
      Ye.userData.noAO = true;
      k.add(Ye);
      l.porchHalos = (l.porchHalos || []).concat(Ye);
    });
    [-0.78, 1.88].forEach((Ue) => {
      f(0.06, 0.06, 2, i.trim, Ue, 1.2, 5.15, k);
      f(0.05, 0.05, 2, i.trim, Ue, 0.55, 5.15, k);
      for (let Ce = 0; Ce < 8; Ce++) {
        f(0.025, 0.62, 0.025, i.trim, Ue, 0.9, 4.25 + Ce * 0.27, k, {
          cast: false,
        });
      }
    });
    let ie = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.2),
      new THREE.MeshBasicMaterial({
        map: t,
        transparent: true,
        toneMapped: false,
      }),
    );
    ie.position.set(1.62, 1.35, 4.13);
    ie.userData.noAO = true;
    k.add(ie);
    let xe = new THREE.PointLight(16761469, 0, 7, 2);
    xe.position.set(0.75, 2.6, D / 2 + 1.1);
    S.add(xe);
    S.userData.porch = xe;
  })();
  (() => {
    let S = r.upper,
      I = 3.45;
    f(W, 0.25, D, i.floor, 0, 3.32, 0, S, {
      edges: true,
    });
    _(
      W,
      FLOOR,
      0.22,
      [
        {
          x0: -3.6,
          x1: -1.8,
          y0: 0.9,
          y1: 2.4,
          room: "bed",
        },
        {
          x0: -0.9,
          x1: 1.9,
          y0: 0.5,
          y1: 2.5,
          room: "living",
        },
        {
          x0: 2.6,
          x1: 4.1,
          y0: 0.9,
          y1: 2.4,
          room: "bed",
        },
      ],
      i.bb,
      S,
      v(0, I, D / 2),
      0,
      {
        order: 5,
        v0: I,
      },
    );
    _(
      W,
      FLOOR,
      0.22,
      [
        {
          x0: -3.4,
          x1: -1.8,
          y0: 0.9,
          y1: 2.3,
          room: "bath",
        },
        {
          x0: 1.6,
          x1: 3.2,
          y0: 0.9,
          y1: 2.3,
          room: "bed",
        },
      ],
      i.bb,
      S,
      v(0, I, -D / 2),
      Math.PI,
      {
        order: 8,
        v0: I,
      },
    );
    _(
      D,
      FLOOR,
      0.22,
      [
        {
          x0: 0.6,
          x1: 2.4,
          y0: 0.9,
          y1: 2.3,
          room: "bed",
        },
      ],
      i.bb,
      S,
      v(W / 2, I, 0),
      Math.PI / 2,
      {
        order: 6,
        v0: I,
      },
    );
    _(
      D,
      FLOOR,
      0.22,
      [
        {
          x0: -2.2,
          x1: -0.6,
          y0: 1.2,
          y1: 2.2,
          room: "bath",
        },
      ],
      i.bb,
      S,
      v(-W / 2, I, 0),
      -Math.PI / 2,
      {
        order: 7,
        v0: I,
      },
    );
    f(0.15, FLOOR, D - 0.4, i.drywall, -1.6, I + FLOOR / 2, 0, S);
    let L = d(1.7, 0.55, 0.8, 0.08, i.ceramic, -3.6, I + 0.28, -3.35, S),
      U = d(0.7, 0.85, 0.5, 0.04, i.ceramic, -2.4, I + 0.43, -3.5, S),
      V = h(0.09, 3, i.pipe, -2.6, I + 1.4, -3.6, S);
    p("plumbing", [L, U, V], v(-3.4, 4.6, -3), "upper");
    let O = h(0.1, 3, i.pvc, -1.2, I + 1.4, -1.5, S);
    p("radon", [O], null, "upper");
    let G = new THREE.PointLight(16758123, 0, 11, 2);
    G.position.set(0.5, 5.6, 0.5);
    S.add(G);
    S.userData.lights = [G];
  })();
  (() => {
    let S = r.roof,
      I = 6.35,
      L = 3.6,
      U = W / 2,
      V = 0.6,
      O = Math.atan2(L, U),
      G = Math.hypot(U + V, ((U + V) * L) / U),
      z = (j) => {
        let $ = new THREE.BoxGeometry(G, 0.2, D + 1);
        u($, {
          swap: true,
        });
        let de = new THREE.Mesh($, [i.trim, i.trim, i.roof, i.cedar, i.trim, i.trim]);
        de.castShadow = true;
        de.receiveShadow = true;
        de.rotation.z = j * O;
        let Ae = I + L - ((U + V) / 2) * (L / U) + 0.12;
        de.position.set(j > 0 ? -(U + V) / 2 + 0.02 : (U + V) / 2 - 0.02, Ae, 0);
        S.add(de);
        return de;
      },
      k = z(1),
      K = z(-1);
    [k, K].forEach((j) => {
      let $ = new THREE.LineSegments(new THREE.EdgesGeometry(j.geometry, 30), c);
      $.raycast = () => {};
      j.add($);
    });
    [k, K].forEach((j, $) => {
      [-1, 1].forEach((Ee) =>
        f(G, 0.3, 0.06, i.trim, 0, -0.05, Ee * (D / 2 + 0.5), j, {
          cast: false,
        }),
      );
      let de = $ === 0 ? -1 : 1;
      f(0.06, 0.34, D + 1.04, i.trim, de * (G / 2), -0.1, 0, j, {
        cast: false,
      });
      let Ae = f(0.12, 0.1, D + 0.9, i.trim, de * (G / 2 + 0.06), -0.28, 0, j, {
        cast: false,
      });
      Ae.rotation.z = -j.rotation.z;
    });
    f(0.3, 0.22, D + 1.05, i.trim, 0, I + L + 0.2, 0, S);
    p("roofing", [k, K], v(-2.8, 9.1, 2.2), "roof");
    let ie = new THREE.Shape();
    ie.moveTo(-U, 0);
    ie.lineTo(U, 0);
    ie.lineTo(0, L);
    ie.lineTo(-U, 0);
    let xe = new THREE.Path();
    xe.moveTo(-0.5, 1.15);
    xe.lineTo(0.5, 1.15);
    xe.lineTo(0.5, 2.15);
    xe.lineTo(-0.5, 2.15);
    xe.lineTo(-0.5, 1.15);
    ie.holes.push(xe);
    let Ue = new THREE.ExtrudeGeometry(ie, {
      depth: 0.22,
      bevelEnabled: false,
    });
    [D / 2 - 0.22, -D / 2].forEach((j, $) => {
      let de = new THREE.Mesh(Ue, [i.bb, i.trim]);
      de.position.set(0, I, j);
      de.castShadow = true;
      de.receiveShadow = true;
      S.add(de);
      let Ae = new THREE.Group();
      Ae.position.set(0, I + 1.65, j + 0.11);
      S.add(Ae);
      let Ee = M(
        Ae,
        {
          x0: -0.5,
          x1: 0.5,
          y0: -0.5,
          y1: 0.5,
          room: "hall",
        },
        0.22,
        "hall",
        -1,
        true,
      );
      if ($ === 1) {
        Ae.rotation.y = Math.PI;
        Ae.position.z = j + 0.11 - 0;
      }
      let Le = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: n,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0,
        }),
      );
      Le.position.set(0, I + 1.65, j + ($ === 0 ? 0.55 : -0.3));
      Le.scale.set(3.4, 3.4, 1);
      Le.userData.noAO = true;
      S.add(Le);
      o.push({
        mat: null,
        halo: Le,
        order: -1,
        always: true,
        w: 1,
        h: 1,
        haloOnly: true,
        level: 0.6,
      });
    });
    let Ce = new THREE.Group();
    Ce.rotation.z = -O;
    Ce.position.copy(K.position);
    let Ye = [];
    for (let j = 0; j < 2; j++) {
      for (let $ = 0; $ < 4; $++) {
        let de = f(1.3, 0.05, 0.95, i.solar, -0.9 + j * 1.45, 0.16, -1.6 + $ * 1.05, Ce, {
            cast: false,
          }),
          Ae = f(1.34, 0.04, 0.99, i.solarFrame, -0.9 + j * 1.45, 0.14, -1.6 + $ * 1.05, Ce, {
            cast: false,
          });
        Ye.push(de);
      }
    }
    S.add(Ce);
    p("solar", Ye, v(3.4, 9.3, 0.6), "roof");
    let J = (j) => {
      let $ = new THREE.PlaneGeometry(G - 0.25, D + 0.7, 30, 30),
        de = $.attributes.position,
        Ae = rng(5);
      for (let Je = 0; Je < de.count; Je++) {
        de.setZ(Je, 0.025 + Ae() * 0.05);
      }
      $.computeVertexNormals();
      let Ee = i.snowRoof.clone();
      Ee.alphaMap = snowEdgeAlpha(256, j);
      Ee.alphaTest = 0.25;
      Ee.userData = {
        ...i.snowRoof.userData,
      };
      let Le = new THREE.Mesh($, Ee);
      Le.rotation.x = -Math.PI / 2;
      Le.position.y = 0.105;
      Le.receiveShadow = true;
      Le.castShadow = true;
      return Le;
    };
    l.snowL = J();
    l.snowL.userData.keep = true;
    k.add(l.snowL);
    l.snowR = J((j, $) => (j > 0.24 && j < 0.7 && $ > 0.24 && $ < 0.76 ? 0 : 1));
    l.snowR.userData.keep = true;
    K.add(l.snowR);
    let se = f(0.5, 0.16, D + 0.8, i.snowRoof, 0, I + L + 0.38, 0, S, {
      cast: false,
    });
    se.material = i.snowRoof;
    se.userData.keep = true;
    (() => {
      let j = rng(9),
        $ = 70,
        de = new THREE.ConeGeometry(0.04, 1, 6);
      de.rotateX(Math.PI);
      de.translate(0, -0.5, 0);
      let Ae = new THREE.InstancedMesh(de, i.ice, $ * 2),
        Ee = new THREE.Matrix4(),
        Le = new THREE.Quaternion(),
        Je = new THREE.Vector3(),
        B = new THREE.Vector3(),
        pt = I + L - (U + V) * (L / U) + 0;
      for (let Qe = 0; Qe < 2; Qe++) {
        for (let D1 = 0; D1 < $; D1++) {
          let y = -D / 2 - 0.4 + (D1 / ($ - 1)) * (D + 0.8),
            Y = 0.12 + j() * j() * 0.7,
            Q = 0.7 + j() * 0.8;
          Je.set((Qe ? 1 : -1) * (U + V + 0.08), pt - 0.35, y + (j() - 0.5) * 0.06);
          B.set(Q, Y, Q);
          Ee.compose(Je, Le, B);
          Ae.setMatrixAt(Qe * $ + D1, Ee);
        }
      }
      Ae.userData.baseMatrices = Array.from(
        {
          length: $ * 2,
        },
        (Qe, D1) => {
          let y = new THREE.Matrix4();
          Ae.getMatrixAt(D1, y);
          return y;
        },
      );
      Ae.castShadow = false;
      Ae.userData.noAO = true;
      Ae.visible = false;
      S.add(Ae);
      l.icicles = Ae;
    })();
    let ye = new THREE.PlaneGeometry(W - 0.6, D - 0.6, 40, 32),
      Ve = ye.attributes.position,
      ce = rng(3);
    for (let j = 0; j < Ve.count; j++) {
      Ve.setZ(j, ce() * 0.12);
    }
    ye.computeVertexNormals();
    let Ie = new THREE.Mesh(ye, i.insul);
    Ie.rotation.x = -Math.PI / 2;
    Ie.position.y = I + 0.02;
    Ie.receiveShadow = true;
    S.add(Ie);
    f(W, 0.1, D, i.floor, 0, I - 0.05, 0, S);
    p("asbestos", [Ie], v(-0.4, 7.3, -0.8), "roof");
    let je = h(0.1, 4.6, i.pvc, -1.2, I + 2.2, -1.5, S);
    p("radon", [je], v(-1.2, 10.9, -1.5), "roof");
    let le = h(0.24, 0.42, i.steel, -1.2, 7.9, -1.5, S, 16);
    p("radon", [le], null, "roof");
    h(0.09, 4, i.pipe, -2.6, I + 2, -3.6, S);
    let _e = f(0.95, 4.1, 0.95, i.stone, -3.4, 8.4, -1.6, S, {
      uv: {
        ox: -3.4,
        oy: 8.4,
      },
    });
    f(1.15, 0.12, 1.15, i.concrete, -3.4, 10.5, -1.6, S);
    f(0.7, 0.3, 0.7, i.steel, -3.4, 10.7, -1.6, S);
    l.chimneyTop.position.set(-3.4, 10.9, -1.6);
    S.add(l.chimneyTop);
  })();
  let b = {
      meter: v(2.8, 1.45, -4.3),
      panel: v(2.8, -1.2, -3.8),
      shutoff: v(-0.5, -1.4, 3.75),
      heater: v(-2.1, -2, -3),
      sewer: v(0.6, -3.35, -7.5),
      furnace: v(-3.3, -2, -2.6),
      register: v(3.8, 3.52, 2.9),
      fan: v(-1.2, 7.9, -1.5),
      pit: v(-1.2, -3, -1.5),
      exhaust: v(-1.2, 11.6, -1.5),
      rim: v(4.9, 0.3, 4.05),
      sill: v(-2.5, 0.7, 4.05),
      attic: v(0, 6.4, 4.05),
      door: v(0.75, 1.2, 4.05),
      chimney: v(-3.4, 10.5, -1.6),
      eave: v(-5.6, 5.9, 3.5),
      potlights: v(-2.4, 3.1, 0.7),
      rangeHood: v(2.4, 2.4, -3.55),
      island: v(3, 1.3, -0.6),
      vanity: v(-2.4, 4.4, -3.55),
      tub: v(-3.6, 4.1, -3.35),
      bedWindow: v(2.4, 5.2, -3.9),
      sump: v(0.66, -2.2, 1.6),
    },
    R = new THREE.Matrix4(),
    v1 = new THREE.Vector3(),
    w = new THREE.Quaternion(),
    C = new THREE.Vector3();
  function N(S, I, L, U, V) {
    let O = U < 0.55 ? 1 : 0;
    N.on = lerp(N.on ?? 0, O, clamp(V * (O ? 0.55 : 1.2), 0, 1));
    let G = N.on * 9,
      z = (1 - S.ghost * 0.85) * (1 - 0.35 * (S.cut || 0)),
      k = 1 - 0.65 * (S.cut || 0),
      K = 1 + 1.6 * (S.cut || 0);
    o.forEach((ye) => {
      let Ve = (ye.always ? 1 : clamp(G - ye.order, 0, 1)) * z,
        ce = 1 - U * 0.8;
      if (ye.mat) {
        ye.mat.emissiveIntensity = (ye.always ? 2.6 : 2) * Ve * ce * k;
      }
      if (ye.halo) {
        ye.halo.material.opacity = (ye.haloOnly ? 0.28 : ye.always ? 0.5 : 0.3) * Ve * ce * k;
      }
    });
    ["main", "upper"].forEach((ye) =>
      (r[ye].userData.lights || []).forEach((Ve) => {
        Ve.intensity = 9 * clamp(G / 9, 0, 1) * (1 - U) * z * K;
      }),
    );
    let ie = Math.max(smooth(0.2, 0.7, S.explode || 0), clamp(((S.lift || 0) - 1.5) / 1.5, 0, 1));
    (r.basement.userData.lights || []).forEach((ye) => {
      ye.intensity = 30 * ie * z * K;
    });
    let xe = (1 - U) * z;
    r.main.userData.porch.intensity = 12 * xe;
    (l.porchHalos || []).forEach((ye) => {
      ye.material.opacity = 0.55 * xe * k;
    });
    i.sconce.emissiveIntensity = 0.4 + 3.2 * (1 - U);
    let Ue = clamp(S.melt, 0, 1),
      Ce = 0.18 + Ue * 0.8;
    l.snowL.material.alphaTest = Ce;
    l.snowR.material.alphaTest = clamp(Ce + 0.1, 0, 1);
    let Ye = r.roof.children.find((ye) => ye.material === i.snowRoof);
    if (Ye) {
      Ye.visible = Ue < 0.6;
    }
    let J = l.icicles,
      se = clamp(S.icicles, 0, 1);
    J.visible = se > 0.01;
    if (J.visible) {
      for (let ye = 0; ye < J.count; ye++) {
        R.copy(J.userData.baseMatrices[ye]);
        R.decompose(v1, w, C);
        C.y *= se;
        C.x *= 0.5 + 0.5 * se;
        C.z = C.x;
        R.compose(v1, w, C);
        J.setMatrixAt(ye, R);
      }
      J.instanceMatrix.needsUpdate = true;
    }
    return G;
  }
  return {
    house: s,
    layers: r,
    sys: a,
    windows: o,
    ANCHORS: b,
    edgeMat: c,
    extra: l,
    update: N,
    box: f,
    rbox: d,
    cyl: h,
    system: p,
    wall: _,
    windowUnit: M,
    setUV: u,
    v: v,
  };
}
