import * as THREE from "three";
import { lapSiding, boardBatten, standingSeam, wood, formedConcrete, stone, snow, asphalt, grass } from "./textures.js";
export function createMaterials() {
  let i = {
      lap: lapSiding([0.3, 0.33, 0.37]),
      bb: boardBatten([0.2, 0.22, 0.25]),
      seam: standingSeam([0.1, 0.105, 0.115]),
      cedar: wood(),
      walnut: wood([0.46, 0.29, 0.17], [0.25, 0.15, 0.09]),
      oak: wood([0.8, 0.64, 0.44], [0.56, 0.4, 0.25]),
      form: formedConcrete(),
      stone: stone(),
      snow: snow(),
      asphalt: asphalt(),
      grass: grass(),
    },
    e = (a, o = {}) =>
      new THREE.MeshStandardMaterial({
        map: a.map,
        normalMap: a.normalMap,
        roughnessMap: a.rmMap,
        metalnessMap: a.rmMap,
        roughness: 1,
        metalness: 1,
        ...o,
      }),
    t = (a, o = 0.8, c = 0, l = {}) =>
      new THREE.MeshStandardMaterial({
        color: a,
        roughness: o,
        metalness: c,
        ...l,
      }),
    n = (a, o) => {
      a.userData.shell = true;
      a.userData.th = o;
      return a;
    },
    s = (a, o) => {
      a.userData.th = o;
      return a;
    },
    r = {
      lap: n(
        e(i.lap, {
          normalScale: new THREE.Vector2(1, 1),
        }),
        [0.3, 0.05, 0.3],
      ),
      bb: n(
        e(i.bb, {
          normalScale: new THREE.Vector2(1, 1),
        }),
        [0.3, 0.05, 0.3],
      ),
      roof: n(
        e(i.seam, {
          normalScale: new THREE.Vector2(1.2, 1.2),
          envMapIntensity: 1.3,
        }),
        [0.4, 0.12],
      ),
      cedar: n(e(i.cedar), [0.42, 0, 0.25]),
      walnut: n(e(i.walnut), [0.52]),
      oak: n(e(i.oak), [0.55]),
      form: n(e(i.form), [0.33]),
      stone: n(e(i.stone), [0.33]),
      drywall: n(t(14209475, 0.95), [0.6]),
      trim: n(
        t(855568, 0.42, 0.55, {
          envMapIntensity: 1.2,
        }),
        [0.32, 0, 0.2],
      ),
      reveal: n(t(14275785, 0.85), [0.45]),
      slab: n(t(7828331, 1), [0.35]),
      concrete: n(t(7301987, 1), [0.33]),
      floor: n(t(10518364, 0.7), [0.55]),
      door: n(e(i.walnut), [0.52]),
      insul: n(t(13087881, 1), [0.5]),
      counter: n(t(2959910, 0.5, 0.05), [0.55]),
      snowRoof: n(
        t(15265527, 0.85, 0, {
          alphaToCoverage: true,
        }),
        [0.03],
      ),
      ice: s(
        new THREE.MeshPhysicalMaterial({
          color: 13625845,
          roughness: 0.08,
          metalness: 0,
          transparent: true,
          opacity: 0.85,
          clearcoat: 1,
          envMapIntensity: 1.6,
        }),
        [0.1],
      ),
      white: s(t(14605267, 0.5, 0.05), [0.6]),
      steel: s(t(10133670, 0.35, 0.85), [0.55]),
      pvc: s(t(15131612, 0.4), [0.24]),
      pipe: s(t(6255750, 0.5, 0.4), [0.45]),
      copper: s(
        t(14256718, 0.28, 0.9, {
          envMapIntensity: 1.4,
        }),
        [0.68],
      ),
      solar: s(
        new THREE.MeshPhysicalMaterial({
          color: 726832,
          roughness: 0.16,
          metalness: 0.7,
          clearcoat: 1,
          clearcoatRoughness: 0.06,
          envMapIntensity: 1.5,
        }),
        [0.17],
      ),
      solarFrame: s(t(11186616, 0.4, 0.9), [0.3]),
      neighbor: s(
        e(i.lap, {
          color: 9080210,
        }),
        [0.26, 0.04, 0.24],
      ),
      neighborRoof: s(
        e(i.seam, {
          color: 6711920,
        }),
        [0.4, 0.12],
      ),
      asphalt: s(e(i.asphalt), [0.3]),
      pavement: s(t(9144706, 0.95), [0.3]),
      sconce: s(
        new THREE.MeshStandardMaterial({
          color: 1709070,
          emissive: 16756833,
          emissiveIntensity: 3,
          roughness: 0.4,
        }),
        [0.9],
      ),
      lampHead: s(
        new THREE.MeshStandardMaterial({
          color: 2236962,
          emissive: 16761466,
          emissiveIntensity: 4,
          roughness: 0.4,
        }),
        [0.95],
      ),
      pole: s(t(1776928, 0.5, 0.7), [0.3]),
      spruce: s(
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 0.92,
          metalness: 0,
        }),
        [0.13],
      ),
      trunk: s(t(2760471, 1), [0.18]),
      shrub: s(
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 1,
        }),
        [0.14],
      ),
      fabric: s(t(6970708, 0.95), [0.5]),
      fabric2: s(t(4016726, 0.95), [0.5]),
      leather: s(t(8014634, 0.55), [0.5]),
      ceramic: s(t(15921129, 0.18, 0), [0.45]),
      mirror: s(t(12570840, 0.05, 0.9), [0.4]),
      black: s(t(1381653, 0.5, 0.3), [0.4]),
      warmLight: s(
        new THREE.MeshStandardMaterial({
          color: 2236440,
          emissive: 16767392,
          emissiveIntensity: 5,
          roughness: 0.6,
        }),
        [1],
      ),
    };
  ["lap", "bb", "roof", "drywall", "form", "stone", "trim", "cedar", "door", "walnut", "reveal", "snowRoof"].forEach((a) => {
    r[a].userData.wall = true;
  });
  Object.values(r).forEach((a) => {
    if (a.userData.th === undefined) {
      a.userData.th = [0.3];
    }
  });
  return {
    M: r,
    T: i,
  };
}
export function makeGlass(i) {
  let e = new THREE.MeshStandardMaterial({
    color: 395533,
    roughness: 0.05,
    metalness: 0.25,
    emissive: 16777215,
    emissiveMap: i,
    emissiveIntensity: 0,
    envMapIntensity: 1.6,
  });
  e.userData.shell = true;
  e.userData.pane = true;
  e.userData.wall = true;
  e.userData.th = [0.86];
  return e;
}
