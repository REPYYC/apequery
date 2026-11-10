// Materials for the 3D stage: createMaterials() builds the PBR texture sets (T) and the shared dictionary of
// materials (M); makeGlass() makes the material of one window pane.
// Materials carry flags in userData: shell (fades out in the x-ray "ghost" view), wall (fades out as the stage's cut
// value rises), pane (glass) and th, the [base, gradient, band] values the thermal camera shader gets for that material.
import * as THREE from "three";
import { lapSiding, boardBatten, standingSeam, wood, formedConcrete, stone, snow, asphalt, grass } from "./textures.js";
export function createMaterials() {
  // PBR texture sets
  const textureSets = {
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
    // material from a texture set
    pbrMat = (textureSet, extraParams = {}) =>
      new THREE.MeshStandardMaterial({
        map: textureSet.map,
        normalMap: textureSet.normalMap,
        roughnessMap: textureSet.rmMap,
        metalnessMap: textureSet.rmMap,
        roughness: 1,
        metalness: 1,
        ...extraParams,
      }),
    // untextured material in one colour
    flatMat = (color, roughness = 0.8, metalness = 0, extraParams = {}) =>
      new THREE.MeshStandardMaterial({
        color: color,
        roughness: roughness,
        metalness: metalness,
        ...extraParams,
      }),
    // mark a material as part of the house shell and set its thermal values
    tagShell = (mat, thermal) => {
      mat.userData.shell = true;
      mat.userData.th = thermal;
      return mat;
    },
    // set a material's thermal values only
    tagThermal = (mat, thermal) => {
      mat.userData.th = thermal;
      return mat;
    },
    // the materials dictionary
    materials = {
      // materials tagged as house shell
      lap: tagShell(
        pbrMat(textureSets.lap, {
          normalScale: new THREE.Vector2(1, 1),
        }),
        [0.3, 0.05, 0.3],
      ),
      bb: tagShell(
        pbrMat(textureSets.bb, {
          normalScale: new THREE.Vector2(1, 1),
        }),
        [0.3, 0.05, 0.3],
      ),
      roof: tagShell(
        pbrMat(textureSets.seam, {
          normalScale: new THREE.Vector2(1.2, 1.2),
          envMapIntensity: 1.3,
        }),
        [0.4, 0.12],
      ),
      cedar: tagShell(pbrMat(textureSets.cedar), [0.42, 0, 0.25]),
      walnut: tagShell(pbrMat(textureSets.walnut), [0.52]),
      oak: tagShell(pbrMat(textureSets.oak), [0.55]),
      form: tagShell(pbrMat(textureSets.form), [0.33]),
      stone: tagShell(pbrMat(textureSets.stone), [0.33]),
      drywall: tagShell(flatMat(14209475, 0.95), [0.6]),
      trim: tagShell(
        flatMat(855568, 0.42, 0.55, {
          envMapIntensity: 1.2,
        }),
        [0.32, 0, 0.2],
      ),
      reveal: tagShell(flatMat(14275785, 0.85), [0.45]),
      slab: tagShell(flatMat(7828331, 1), [0.35]),
      concrete: tagShell(flatMat(7301987, 1), [0.33]),
      floor: tagShell(flatMat(10518364, 0.7), [0.55]),
      door: tagShell(pbrMat(textureSets.walnut), [0.52]),
      insul: tagShell(flatMat(13087881, 1), [0.5]),
      counter: tagShell(flatMat(2959910, 0.5, 0.05), [0.55]),
      snowRoof: tagShell(
        flatMat(15265527, 0.85, 0, {
          alphaToCoverage: true,
        }),
        [0.03],
      ),
      // everything else, with thermal values only
      ice: tagThermal(
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
      white: tagThermal(flatMat(14605267, 0.5, 0.05), [0.6]),
      steel: tagThermal(flatMat(10133670, 0.35, 0.85), [0.55]),
      pvc: tagThermal(flatMat(15131612, 0.4), [0.24]),
      pipe: tagThermal(flatMat(6255750, 0.5, 0.4), [0.45]),
      copper: tagThermal(
        flatMat(14256718, 0.28, 0.9, {
          envMapIntensity: 1.4,
        }),
        [0.68],
      ),
      solar: tagThermal(
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
      solarFrame: tagThermal(flatMat(11186616, 0.4, 0.9), [0.3]),
      neighbor: tagThermal(
        pbrMat(textureSets.lap, {
          color: 9080210,
        }),
        [0.26, 0.04, 0.24],
      ),
      neighborRoof: tagThermal(
        pbrMat(textureSets.seam, {
          color: 6711920,
        }),
        [0.4, 0.12],
      ),
      asphalt: tagThermal(pbrMat(textureSets.asphalt), [0.3]),
      pavement: tagThermal(flatMat(9144706, 0.95), [0.3]),
      sconce: tagThermal(
        new THREE.MeshStandardMaterial({
          color: 1709070,
          emissive: 16756833,
          emissiveIntensity: 3,
          roughness: 0.4,
        }),
        [0.9],
      ),
      lampHead: tagThermal(
        new THREE.MeshStandardMaterial({
          color: 2236962,
          emissive: 16761466,
          emissiveIntensity: 4,
          roughness: 0.4,
        }),
        [0.95],
      ),
      pole: tagThermal(flatMat(1776928, 0.5, 0.7), [0.3]),
      spruce: tagThermal(
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 0.92,
          metalness: 0,
        }),
        [0.13],
      ),
      trunk: tagThermal(flatMat(2760471, 1), [0.18]),
      shrub: tagThermal(
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 1,
        }),
        [0.14],
      ),
      fabric: tagThermal(flatMat(6970708, 0.95), [0.5]),
      fabric2: tagThermal(flatMat(4016726, 0.95), [0.5]),
      leather: tagThermal(flatMat(8014634, 0.55), [0.5]),
      ceramic: tagThermal(flatMat(15921129, 0.18, 0), [0.45]),
      mirror: tagThermal(flatMat(12570840, 0.05, 0.9), [0.4]),
      black: tagThermal(flatMat(1381653, 0.5, 0.3), [0.4]),
      warmLight: tagThermal(
        new THREE.MeshStandardMaterial({
          color: 2236440,
          emissive: 16767392,
          emissiveIntensity: 5,
          roughness: 0.6,
        }),
        [1],
      ),
    };
  // these also count as walls
  ["lap", "bb", "roof", "drywall", "form", "stone", "trim", "cedar", "door", "walnut", "reveal", "snowRoof"].forEach((name) => {
    materials[name].userData.wall = true;
  });
  // default thermal values for any material left without them
  Object.values(materials).forEach((mat) => {
    if (mat.userData.th === undefined) {
      mat.userData.th = [0.3];
    }
  });
  return {
    M: materials,
    T: textureSets,
  };
}
// window glass: dark and glossy, with the given room texture as its emissive map (switched off until its
// emissiveIntensity is raised); tagged as pane, shell and wall
export function makeGlass(roomTex) {
  const glass = new THREE.MeshStandardMaterial({
    color: 395533,
    roughness: 0.05,
    metalness: 0.25,
    emissive: 16777215,
    emissiveMap: roomTex,
    emissiveIntensity: 0,
    envMapIntensity: 1.6,
  });
  glass.userData.shell = true;
  glass.userData.pane = true;
  glass.userData.wall = true;
  glass.userData.th = [0.86];
  return glass;
}
