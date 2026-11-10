import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { clamp } from "./util.js";
export function createInterior({ M: i, layers: e, glowTex: t }) {
  let n = [],
    s = (h, p = 0.7, x = 0, g = [0.5], m = {}) => {
      let M = new THREE.MeshStandardMaterial({
        color: h,
        roughness: p,
        metalness: x,
        ...m,
      });
      M.userData.th = g;
      return M;
    },
    r = (h, p = [0.95]) => {
      let x = new THREE.MeshStandardMaterial({
        color: 2236440,
        emissive: h,
        emissiveIntensity: 0,
        roughness: 0.5,
      });
      x.userData.th = p;
      n.push(x);
      return x;
    },
    a = {
      rug: s(5787722, 1),
      rug2: s(3884628, 1),
      cushion: s(13215610, 0.95),
      cushion2: s(9413544, 0.95),
      tvBlack: s(789775, 0.25, 0.3, [0.6]),
      book1: s(9190190, 0.8),
      book2: s(3100522, 0.8),
      book3: s(14208440, 0.8),
      plant: s(4156218, 0.9, 0, [0.3]),
      pot: s(14209734, 0.6),
      sheets: s(15328474, 0.95),
      duvet: s(7043718, 0.95),
      wood: s(10122320, 0.55),
      woodDark: s(4929062, 0.55),
      steel: s(11186358, 0.3, 0.9, [0.55]),
      quartz: s(15328991, 0.25, 0, [0.5]),
      cabinet: s(3812386, 0.5, 0, [0.5]),
      tile: s(13620952, 0.4, 0, [0.4]),
      bin: s(3829659, 0.6),
      bin2: s(12936750, 0.6),
      cardboard: s(11570526, 0.9),
      tv: r(10274047, [0.85]),
      lamp: r(16762746),
      pendant: r(16765594),
      screen: r(13625599, [0.8]),
      led: r(6750105, [0.7]),
      pot: s(14868180, 0.55),
    },
    o = (h, p, x, g, m, M, E, _, A, b = 0) => {
      let R = new THREE.Mesh(new RoundedBoxGeometry(h, p, x, 2, Math.min(g, h / 2 - 0.001, p / 2 - 0.001, x / 2 - 0.001)), m);
      R.position.set(M, E + p / 2, _);
      R.rotation.y = b;
      R.castShadow = true;
      R.receiveShadow = true;
      R.userData.noPick = true;
      A.add(R);
      return R;
    },
    c = (h, p, x, g, m, M, E, _ = 18) => {
      let A = new THREE.Mesh(new THREE.CylinderGeometry(h, h, p, _), x);
      A.position.set(g, m + p / 2, M);
      A.castShadow = true;
      A.receiveShadow = true;
      A.userData.noPick = true;
      E.add(A);
      return A;
    },
    l = (h, p, x, g, m, M, E = 1) => {
      let _ = new THREE.Mesh(new THREE.SphereGeometry(h, 14, 10), p);
      _.position.set(x, g, m);
      _.scale.y = E;
      _.castShadow = true;
      _.userData.noPick = true;
      M.add(_);
      return _;
    },
    u = (h, p, x, g, m, M = a.woodDark) => {
      let E = new THREE.Group();
      E.position.set(h, p, x);
      E.rotation.y = g;
      m.add(E);
      o(0.44, 0.05, 0.44, 0.02, M, 0, 0.44, 0, E);
      [
        [-0.19, -0.19],
        [0.19, -0.19],
        [-0.19, 0.19],
        [0.19, 0.19],
      ].forEach(([_, A]) => c(0.02, 0.44, a.steel, _, 0, A, E, 8));
      o(0.44, 0.45, 0.04, 0.02, M, 0, 0.5, -0.2, E);
      return E;
    },
    f = (h, p, x, g, m = 1.4) => {
      c(0.14, 0.03, a.steel, h, p, x, g, 14);
      c(0.015, m, a.steel, h, p, x, g, 8);
      let M = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.24, 0.3, 18, 1, true), a.lamp);
      M.material.side = THREE.DoubleSide;
      M.position.set(h, p + m + 0.05, x);
      M.userData.noAO = true;
      M.userData.noPick = true;
      g.add(M);
      return M;
    };
  (() => {
    let h = e.main,
      p = 0.3;
    o(3.4, 0.02, 2.5, 0.01, a.rug, -2.3, p, 0.7, h);
    let x = new THREE.Group();
    x.position.set(-0.9, p, 0.7);
    x.rotation.y = -Math.PI / 2;
    h.add(x);
    o(2.3, 0.4, 0.95, 0.1, a.fabric ?? i.fabric, 0, 0.1, 0, x);
    o(2.3, 0.45, 0.25, 0.1, i.fabric, 0, 0.45, -0.38, x);
    o(0.25, 0.3, 0.9, 0.08, i.fabric, -1.07, 0.3, 0, x);
    o(0.25, 0.3, 0.9, 0.08, i.fabric, 1.07, 0.3, 0, x);
    o(0.5, 0.4, 0.14, 0.06, a.cushion, -0.6, 0.55, -0.1, x);
    o(0.5, 0.4, 0.14, 0.06, a.cushion2, 0.6, 0.55, -0.1, x);
    [
      [-0.9, 0.18],
      [0.9, 0.18],
    ].forEach(([M]) => {
      [
        [-1.05, -0.4],
        [1.05, -0.4],
        [-1.05, 0.4],
        [1.05, 0.4],
      ].forEach(([E, _]) => c(0.03, 0.1, a.woodDark, E, 0, _, x, 8));
    });
    o(1, 0.05, 0.6, 0.03, a.wood, -2.75, p + 0.34, 0.7, h);
    [
      [-0.4, -0.22],
      [0.4, -0.22],
      [-0.4, 0.22],
      [0.4, 0.22],
    ].forEach(([M, E]) => c(0.025, 0.34, a.woodDark, -2.75 + M, p, 0.7 + E, h, 8));
    u(-2, p, 2.5, Math.PI, h, i.fabric2 ?? a.cushion2);
    o(0.4, 0.5, 2, 0.04, a.woodDark, -4.62, p, 0.7, h);
    o(0.05, 0.75, 1.5, 0.015, a.tvBlack, -4.74, p + 0.95, 0.7, h);
    let g = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.68), a.tv);
    g.rotation.y = Math.PI / 2;
    g.position.set(-4.7, p + 1.32, 0.7);
    g.userData.noPick = true;
    h.add(g);
    o(0.34, 2, 2.2, 0.02, a.woodDark, 0.9, p, -1.8, h);
    [0.5, 1, 1.5].forEach((M, E) => {
      o(0.2, 0.28, 1.9, 0.01, [a.book1, a.book2, a.book3][E], 1, p + M + 0.05, -1.8, h);
    });
    c(0.17, 0.4, a.pot, -4.2, p, 3.2, h, 14);
    l(0.38, a.plant, -4.2, p + 0.85, 3.2, h, 1.3);
    l(0.28, a.plant, -4.3, p + 1.15, 3.1, h, 1.2);
    f(-0.45, p, 3.1, h, 1.45);
    o(3, 0.72, 0.36, 0.02, a.cabinet, 2.9, p + 1.55, -3.7, h);
    o(0.9, 0.14, 0.6, 0.02, a.steel, 2.4, p + 1.3, -3.58, h);
    o(0.34, 0.9, 0.34, 0.02, a.steel, 2.4, p + 1.45, -3.7, h);
    o(2.2, 0.06, 1, 0.02, a.quartz, 3, p + 0.9, -0.6, h);
    o(2.1, 0.9, 0.9, 0.03, a.cabinet, 3, p, -0.6, h);
    [2.4, 3, 3.6].forEach((M) => {
      c(0.17, 0.05, a.woodDark, M, p + 0.62, 0.35, h, 16);
      c(0.025, 0.62, a.steel, M, p, 0.35, h, 8);
    });
    [2.3, 3, 3.7].forEach((M) => {
      c(0.006, 0.7, a.steel, M, p + 2.1, -0.6, h, 4);
      let E = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), a.pendant);
      E.position.set(M, p + 2.1, -0.6);
      E.userData.noAO = true;
      E.userData.noPick = true;
      h.add(E);
    });
    o(1.8, 0.05, 0.92, 0.02, a.wood, 3.2, p + 0.72, 2.4, h);
    [
      [-0.8, -0.4],
      [0.8, -0.4],
      [-0.8, 0.4],
      [0.8, 0.4],
    ].forEach(([M, E]) => c(0.035, 0.72, a.woodDark, 3.2 + M, p, 2.4 + E, h, 8));
    u(2.5, p, 1.55, 0, h);
    u(3.9, p, 1.55, 0, h);
    u(2.5, p, 3.25, Math.PI, h);
    u(3.9, p, 3.25, Math.PI, h);
    let m = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 20, 1, true), a.pendant);
    m.material.side = THREE.DoubleSide;
    m.position.set(3.2, p + 2.15, 2.4);
    m.userData.noAO = true;
    m.userData.noPick = true;
    h.add(m);
    c(0.006, 0.55, a.steel, 3.2, p + 2.2, 2.4, h, 4);
    o(1, 0.45, 0.38, 0.03, a.wood, 0.6, p, 3.55, h);
  })();
  (() => {
    let h = e.upper,
      p = 3.45;
    o(2, 0.42, 2.15, 0.06, a.sheets, 2.4, p, -2.55, h);
    o(1.96, 0.18, 1.55, 0.08, a.duvet, 2.4, p + 0.38, -2.2, h);
    o(2, 0.9, 0.1, 0.03, a.woodDark, 2.4, p, -3.72, h);
    o(0.6, 0.22, 0.38, 0.08, a.sheets, 1.85, p + 0.5, -3.3, h);
    o(0.6, 0.22, 0.38, 0.08, a.sheets, 2.95, p + 0.5, -3.3, h);
    [[1], [3.8]].forEach(([g]) => {
      o(0.5, 0.5, 0.4, 0.03, a.woodDark, g, p, -3.55, h);
      f(g, p + 0.5, -3.55, h, 0.34);
    });
    o(2, 0.02, 1.4, 0.01, a.rug2, 2.4, p, -1, h);
    o(0.6, 2.3, 2, 0.02, a.woodDark, 4.55, p, -1.2, h);
    o(1.5, 0.05, 0.7, 0.02, a.wood, 0.6, p + 0.72, 3.35, h);
    [
      [-0.7, -0.3],
      [0.7, -0.3],
      [-0.7, 0.3],
      [0.7, 0.3],
    ].forEach(([g, m]) => c(0.03, 0.72, a.steel, 0.6 + g, p, 3.35 + m, h, 8));
    o(0.7, 0.42, 0.04, 0.01, a.tvBlack, 0.6, p + 0.98, 3.52, h);
    let x = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.36), a.screen);
    x.position.set(0.6, p + 1.19, 3.495);
    x.rotation.y = Math.PI;
    x.userData.noPick = true;
    h.add(x);
    u(0.6, p, 2.7, Math.PI, h, a.cushion2);
    o(1.5, 0.4, 2, 0.06, a.sheets, -3.4, p, 2.2, h);
    o(1.46, 0.16, 1.4, 0.07, a.cushion2, -3.4, p + 0.36, 2.5, h);
    o(0.9, 0.9, 0.5, 0.03, a.woodDark, -4.55, p, 0.6, h);
    o(0.9, 0.02, 0.06, 0.01, a.tile, -3.2, p, -2.6, h);
    o(0.42, 0.34, 0.6, 0.12, i.ceramic, -4.4, p, -3.2, h);
    o(0.4, 0.4, 0.2, 0.06, i.ceramic, -4.4, p + 0.34, -3.5, h);
    o(0.7, 0.9, 0.03, 0.01, i.mirror, -2.4, p + 1.2, -3.84, h);
  })();
  (() => {
    let h = e.basement,
      p = -2.8;
    o(0.68, 0.92, 0.68, 0.04, i.white, 0.5, p, -3.5, h);
    o(0.68, 0.92, 0.68, 0.04, i.white, 1.25, p, -3.5, h);
    c(0.2, 0.03, a.tvBlack, 0.5, p + 0.93, -3.15, h, 18);
    c(0.2, 0.03, a.tvBlack, 1.25, p + 0.93, -3.15, h, 18);
    o(0.6, 0.06, 0.4, 0.01, a.tvBlack, 0.88, p + 0.92, -3.88, h);
    o(2, 0.06, 0.75, 0.01, a.wood, -4, p + 0.88, 2.6, h);
    o(1.9, 0.88, 0.7, 0.01, a.cabinet, -4, p, 2.6, h);
    o(0.3, 0.06, 0.12, 0.01, a.bin2, -4.4, p + 0.94, 2.55, h);
    o(0.2, 0.2, 0.2, 0.02, a.bin, -3.7, p + 0.94, 2.7, h);
    o(1.7, 2, 0.42, 0.01, a.steel, 4.25, p, 2.9, h, 0);
    [0.3, 0.9, 1.5].forEach((g, m) => {
      o(0.5, 0.3, 0.34, 0.03, [a.bin, a.bin2, a.cardboard][m], 3.8, p + g + 0.05, 2.9, h);
      o(0.6, 0.3, 0.34, 0.03, [a.cardboard, a.bin, a.bin2][m], 4.5, p + g + 0.05, 2.9, h);
    });
    c(0.32, 0.05, a.tvBlack, 0.66, p, 1.6, h, 20);
    c(0.1, 0.5, a.pvc ?? i.pvc, 0.66, p, 1.6, h, 12);
    let x = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), a.led);
    x.position.set(0.66, p + 0.58, 1.6);
    x.userData.noAO = true;
    x.userData.noPick = true;
    h.add(x);
    o(0.5, 0.4, 0.4, 0.02, a.cardboard, -1.4, p, 2.9, h, 0.3);
    o(0.45, 0.35, 0.4, 0.02, a.cardboard, -1.3, p + 0.4, 2.9, h, 0.1);
    o(1.6, 0.02, 1.2, 0.01, a.rug, 0.4, p, 0.8, h);
  })();
  function d(h, p) {
    let x = clamp(0.25 + 0.75 * h + p * 0.3, 0, 1.1);
    a.tv.emissiveIntensity = 1.3 * x;
    a.screen.emissiveIntensity = 1.1 * x;
    a.lamp.emissiveIntensity = 2.2 * x;
    a.pendant.emissiveIntensity = 2.6 * x;
    a.led.emissiveIntensity = 3;
  }
  return {
    update: d,
    glows: n,
  };
}
