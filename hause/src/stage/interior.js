// Interior of the house: furniture and fittings built from rounded boxes, cylinders and spheres and added to the
// main, upper and basement layers. The returned update(night, cut) drives the emissive lamps and screens.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { clamp } from "./util.js";
export function createInterior({ M: materials, layers: layers, glowTex: glowTex }) {
  // materials used only by the interior, and the helpers that make them
  const glowMats = [],
    // plain material with thermal values
    flatMat = (color, roughness = 0.7, metalness = 0, thermal = [0.5], extraParams = {}) => {
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: roughness,
        metalness: metalness,
        ...extraParams,
      });
      mat.userData.th = thermal;
      return mat;
    },
    // emissive material that starts switched off; each one is also kept in glowMats
    glowMat = (emissiveColor, thermal = [0.95]) => {
      const mat = new THREE.MeshStandardMaterial({
        color: 2236440,
        emissive: emissiveColor,
        emissiveIntensity: 0,
        roughness: 0.5,
      });
      mat.userData.th = thermal;
      glowMats.push(mat);
      return mat;
    },
    interiorMats = {
      rug: flatMat(5787722, 1),
      rug2: flatMat(3884628, 1),
      cushion: flatMat(13215610, 0.95),
      cushion2: flatMat(9413544, 0.95),
      tvBlack: flatMat(789775, 0.25, 0.3, [0.6]),
      book1: flatMat(9190190, 0.8),
      book2: flatMat(3100522, 0.8),
      book3: flatMat(14208440, 0.8),
      plant: flatMat(4156218, 0.9, 0, [0.3]),
      pot: flatMat(14209734, 0.6),
      sheets: flatMat(15328474, 0.95),
      duvet: flatMat(7043718, 0.95),
      wood: flatMat(10122320, 0.55),
      woodDark: flatMat(4929062, 0.55),
      steel: flatMat(11186358, 0.3, 0.9, [0.55]),
      quartz: flatMat(15328991, 0.25, 0, [0.5]),
      cabinet: flatMat(3812386, 0.5, 0, [0.5]),
      tile: flatMat(13620952, 0.4, 0, [0.4]),
      bin: flatMat(3829659, 0.6),
      bin2: flatMat(12936750, 0.6),
      cardboard: flatMat(11570526, 0.9),
      tv: glowMat(10274047, [0.85]),
      lamp: glowMat(16762746),
      pendant: glowMat(16765594),
      screen: glowMat(13625599, [0.8]),
      led: glowMat(6750105, [0.7]),
      pot: flatMat(14868180, 0.55),
    },
    // shape helpers; each adds a mesh to parent
    // rounded box standing on the point (x, y, z), turned by rotY
    addBox = (width, height, depth, cornerRadius, mat, x, y, z, parent, rotY = 0) => {
      const mesh = new THREE.Mesh(
        new RoundedBoxGeometry(width, height, depth, 2, Math.min(cornerRadius, width / 2 - 0.001, height / 2 - 0.001, depth / 2 - 0.001)),
        mat,
      );
      mesh.position.set(x, y + height / 2, z);
      mesh.rotation.y = rotY;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.noPick = true;
      parent.add(mesh);
      return mesh;
    },
    // upright cylinder standing on the point (x, y, z)
    addCylinder = (radius, height, mat, x, y, z, parent, segments = 18) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segments), mat);
      mesh.position.set(x, y + height / 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.noPick = true;
      parent.add(mesh);
      return mesh;
    },
    // sphere centred on (x, y, z), stretched vertically by scaleY
    addSphere = (radius, mat, x, y, z, parent, scaleY = 1) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 14, 10), mat);
      mesh.position.set(x, y, z);
      mesh.scale.y = scaleY;
      mesh.castShadow = true;
      mesh.userData.noPick = true;
      parent.add(mesh);
      return mesh;
    },
    // chair: seat, four steel legs and a back rest
    addChair = (x, y, z, rotY, parent, mat = interiorMats.woodDark) => {
      const chair = new THREE.Group();
      chair.position.set(x, y, z);
      chair.rotation.y = rotY;
      parent.add(chair);
      addBox(0.44, 0.05, 0.44, 0.02, mat, 0, 0.44, 0, chair);
      [
        [-0.19, -0.19],
        [0.19, -0.19],
        [-0.19, 0.19],
        [0.19, 0.19],
      ].forEach(([legX, legZ]) => addCylinder(0.02, 0.44, interiorMats.steel, legX, 0, legZ, chair, 8));
      addBox(0.44, 0.45, 0.04, 0.02, mat, 0, 0.5, -0.2, chair);
      return chair;
    },
    // lamp: steel base and pole with an open, glowing shade on top
    addLamp = (x, y, z, parent, poleHeight = 1.4) => {
      addCylinder(0.14, 0.03, interiorMats.steel, x, y, z, parent, 14);
      addCylinder(0.015, poleHeight, interiorMats.steel, x, y, z, parent, 8);
      const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.24, 0.3, 18, 1, true), interiorMats.lamp);
      shade.material.side = THREE.DoubleSide;
      shade.position.set(x, y + poleHeight + 0.05, z);
      shade.userData.noAO = true;
      shade.userData.noPick = true;
      parent.add(shade);
      return shade;
    };
  // main floor
  (() => {
    const layer = layers.main,
      floorY = 0.3;
    // living room: rug and sofa (seat, back, arms, two cushions, feet)
    addBox(3.4, 0.02, 2.5, 0.01, interiorMats.rug, -2.3, floorY, 0.7, layer);
    const sofa = new THREE.Group();
    sofa.position.set(-0.9, floorY, 0.7);
    sofa.rotation.y = -Math.PI / 2;
    layer.add(sofa);
    addBox(2.3, 0.4, 0.95, 0.1, interiorMats.fabric ?? materials.fabric, 0, 0.1, 0, sofa);
    addBox(2.3, 0.45, 0.25, 0.1, materials.fabric, 0, 0.45, -0.38, sofa);
    addBox(0.25, 0.3, 0.9, 0.08, materials.fabric, -1.07, 0.3, 0, sofa);
    addBox(0.25, 0.3, 0.9, 0.08, materials.fabric, 1.07, 0.3, 0, sofa);
    addBox(0.5, 0.4, 0.14, 0.06, interiorMats.cushion, -0.6, 0.55, -0.1, sofa);
    addBox(0.5, 0.4, 0.14, 0.06, interiorMats.cushion2, 0.6, 0.55, -0.1, sofa);
    // sofa feet (the outer loop adds the same four feet twice)
    [
      [-0.9, 0.18],
      [0.9, 0.18],
    ].forEach(([unusedX]) => {
      [
        [-1.05, -0.4],
        [1.05, -0.4],
        [-1.05, 0.4],
        [1.05, 0.4],
      ].forEach(([footX, footZ]) => addCylinder(0.03, 0.1, interiorMats.woodDark, footX, 0, footZ, sofa, 8));
    });
    // coffee table and a chair
    addBox(1, 0.05, 0.6, 0.03, interiorMats.wood, -2.75, floorY + 0.34, 0.7, layer);
    [
      [-0.4, -0.22],
      [0.4, -0.22],
      [-0.4, 0.22],
      [0.4, 0.22],
    ].forEach(([legX, legZ]) => addCylinder(0.025, 0.34, interiorMats.woodDark, -2.75 + legX, floorY, 0.7 + legZ, layer, 8));
    addChair(-2, floorY, 2.5, Math.PI, layer, materials.fabric2 ?? interiorMats.cushion2);
    // TV: low cabinet, set and glowing screen
    addBox(0.4, 0.5, 2, 0.04, interiorMats.woodDark, -4.62, floorY, 0.7, layer);
    addBox(0.05, 0.75, 1.5, 0.015, interiorMats.tvBlack, -4.74, floorY + 0.95, 0.7, layer);
    const tvScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.68), interiorMats.tv);
    tvScreen.rotation.y = Math.PI / 2;
    tvScreen.position.set(-4.7, floorY + 1.32, 0.7);
    tvScreen.userData.noPick = true;
    layer.add(tvScreen);
    // shelves with three rows of books
    addBox(0.34, 2, 2.2, 0.02, interiorMats.woodDark, 0.9, floorY, -1.8, layer);
    [0.5, 1, 1.5].forEach((shelfY, i) => {
      addBox(0.2, 0.28, 1.9, 0.01, [interiorMats.book1, interiorMats.book2, interiorMats.book3][i], 1, floorY + shelfY + 0.05, -1.8, layer);
    });
    // potted plant and floor lamp
    addCylinder(0.17, 0.4, interiorMats.pot, -4.2, floorY, 3.2, layer, 14);
    addSphere(0.38, interiorMats.plant, -4.2, floorY + 0.85, 3.2, layer, 1.3);
    addSphere(0.28, interiorMats.plant, -4.3, floorY + 1.15, 3.1, layer, 1.2);
    addLamp(-0.45, floorY, 3.1, layer, 1.45);
    // kitchen: wall cabinets, steel hood, island with three stools and three pendants
    addBox(3, 0.72, 0.36, 0.02, interiorMats.cabinet, 2.9, floorY + 1.55, -3.7, layer);
    addBox(0.9, 0.14, 0.6, 0.02, interiorMats.steel, 2.4, floorY + 1.3, -3.58, layer);
    addBox(0.34, 0.9, 0.34, 0.02, interiorMats.steel, 2.4, floorY + 1.45, -3.7, layer);
    addBox(2.2, 0.06, 1, 0.02, interiorMats.quartz, 3, floorY + 0.9, -0.6, layer);
    addBox(2.1, 0.9, 0.9, 0.03, interiorMats.cabinet, 3, floorY, -0.6, layer);
    [2.4, 3, 3.6].forEach((stoolX) => {
      addCylinder(0.17, 0.05, interiorMats.woodDark, stoolX, floorY + 0.62, 0.35, layer, 16);
      addCylinder(0.025, 0.62, interiorMats.steel, stoolX, floorY, 0.35, layer, 8);
    });
    [2.3, 3, 3.7].forEach((pendantX) => {
      addCylinder(0.006, 0.7, interiorMats.steel, pendantX, floorY + 2.1, -0.6, layer, 4);
      const pendantShade = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), interiorMats.pendant);
      pendantShade.position.set(pendantX, floorY + 2.1, -0.6);
      pendantShade.userData.noAO = true;
      pendantShade.userData.noPick = true;
      layer.add(pendantShade);
    });
    // dining set: table, four chairs and a pendant
    addBox(1.8, 0.05, 0.92, 0.02, interiorMats.wood, 3.2, floorY + 0.72, 2.4, layer);
    [
      [-0.8, -0.4],
      [0.8, -0.4],
      [-0.8, 0.4],
      [0.8, 0.4],
    ].forEach(([legX, legZ]) => addCylinder(0.035, 0.72, interiorMats.woodDark, 3.2 + legX, floorY, 2.4 + legZ, layer, 8));
    addChair(2.5, floorY, 1.55, 0, layer);
    addChair(3.9, floorY, 1.55, 0, layer);
    addChair(2.5, floorY, 3.25, Math.PI, layer);
    addChair(3.9, floorY, 3.25, Math.PI, layer);
    const diningPendant = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 20, 1, true), interiorMats.pendant);
    diningPendant.material.side = THREE.DoubleSide;
    diningPendant.position.set(3.2, floorY + 2.15, 2.4);
    diningPendant.userData.noAO = true;
    diningPendant.userData.noPick = true;
    layer.add(diningPendant);
    addCylinder(0.006, 0.55, interiorMats.steel, 3.2, floorY + 2.2, 2.4, layer, 4);
    // low wooden bench
    addBox(1, 0.45, 0.38, 0.03, interiorMats.wood, 0.6, floorY, 3.55, layer);
  })();
  // upper floor
  (() => {
    const layer = layers.upper,
      floorY = 3.45;
    // bedroom: bed with duvet, headboard and pillows, two nightstands with lamps, rug and wardrobe
    addBox(2, 0.42, 2.15, 0.06, interiorMats.sheets, 2.4, floorY, -2.55, layer);
    addBox(1.96, 0.18, 1.55, 0.08, interiorMats.duvet, 2.4, floorY + 0.38, -2.2, layer);
    addBox(2, 0.9, 0.1, 0.03, interiorMats.woodDark, 2.4, floorY, -3.72, layer);
    addBox(0.6, 0.22, 0.38, 0.08, interiorMats.sheets, 1.85, floorY + 0.5, -3.3, layer);
    addBox(0.6, 0.22, 0.38, 0.08, interiorMats.sheets, 2.95, floorY + 0.5, -3.3, layer);
    [[1], [3.8]].forEach(([nightstandX]) => {
      addBox(0.5, 0.5, 0.4, 0.03, interiorMats.woodDark, nightstandX, floorY, -3.55, layer);
      addLamp(nightstandX, floorY + 0.5, -3.55, layer, 0.34);
    });
    addBox(2, 0.02, 1.4, 0.01, interiorMats.rug2, 2.4, floorY, -1, layer);
    addBox(0.6, 2.3, 2, 0.02, interiorMats.woodDark, 4.55, floorY, -1.2, layer);
    // desk with a monitor and a chair
    addBox(1.5, 0.05, 0.7, 0.02, interiorMats.wood, 0.6, floorY + 0.72, 3.35, layer);
    [
      [-0.7, -0.3],
      [0.7, -0.3],
      [-0.7, 0.3],
      [0.7, 0.3],
    ].forEach(([legX, legZ]) => addCylinder(0.03, 0.72, interiorMats.steel, 0.6 + legX, floorY, 3.35 + legZ, layer, 8));
    addBox(0.7, 0.42, 0.04, 0.01, interiorMats.tvBlack, 0.6, floorY + 0.98, 3.52, layer);
    const monitorScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.36), interiorMats.screen);
    monitorScreen.position.set(0.6, floorY + 1.19, 3.495);
    monitorScreen.rotation.y = Math.PI;
    monitorScreen.userData.noPick = true;
    layer.add(monitorScreen);
    addChair(0.6, floorY, 2.7, Math.PI, layer, interiorMats.cushion2);
    // second bed and a low cabinet
    addBox(1.5, 0.4, 2, 0.06, interiorMats.sheets, -3.4, floorY, 2.2, layer);
    addBox(1.46, 0.16, 1.4, 0.07, interiorMats.cushion2, -3.4, floorY + 0.36, 2.5, layer);
    addBox(0.9, 0.9, 0.5, 0.03, interiorMats.woodDark, -4.55, floorY, 0.6, layer);
    // bathroom: tile strip, toilet and mirror
    addBox(0.9, 0.02, 0.06, 0.01, interiorMats.tile, -3.2, floorY, -2.6, layer);
    addBox(0.42, 0.34, 0.6, 0.12, materials.ceramic, -4.4, floorY, -3.2, layer);
    addBox(0.4, 0.4, 0.2, 0.06, materials.ceramic, -4.4, floorY + 0.34, -3.5, layer);
    addBox(0.7, 0.9, 0.03, 0.01, materials.mirror, -2.4, floorY + 1.2, -3.84, layer);
  })();
  // basement
  (() => {
    const layer = layers.basement,
      floorY = -2.8;
    // laundry: two white machines, each with a dark disc on top, and a dark slab behind them
    addBox(0.68, 0.92, 0.68, 0.04, materials.white, 0.5, floorY, -3.5, layer);
    addBox(0.68, 0.92, 0.68, 0.04, materials.white, 1.25, floorY, -3.5, layer);
    addCylinder(0.2, 0.03, interiorMats.tvBlack, 0.5, floorY + 0.93, -3.15, layer, 18);
    addCylinder(0.2, 0.03, interiorMats.tvBlack, 1.25, floorY + 0.93, -3.15, layer, 18);
    addBox(0.6, 0.06, 0.4, 0.01, interiorMats.tvBlack, 0.88, floorY + 0.92, -3.88, layer);
    // workbench with two items on it
    addBox(2, 0.06, 0.75, 0.01, interiorMats.wood, -4, floorY + 0.88, 2.6, layer);
    addBox(1.9, 0.88, 0.7, 0.01, interiorMats.cabinet, -4, floorY, 2.6, layer);
    addBox(0.3, 0.06, 0.12, 0.01, interiorMats.bin2, -4.4, floorY + 0.94, 2.55, layer);
    addBox(0.2, 0.2, 0.2, 0.02, interiorMats.bin, -3.7, floorY + 0.94, 2.7, layer);
    // steel shelving with bins and boxes on three levels
    addBox(1.7, 2, 0.42, 0.01, interiorMats.steel, 4.25, floorY, 2.9, layer, 0);
    [0.3, 0.9, 1.5].forEach((shelfY, i) => {
      addBox(0.5, 0.3, 0.34, 0.03, [interiorMats.bin, interiorMats.bin2, interiorMats.cardboard][i], 3.8, floorY + shelfY + 0.05, 2.9, layer);
      addBox(0.6, 0.3, 0.34, 0.03, [interiorMats.cardboard, interiorMats.bin, interiorMats.bin2][i], 4.5, floorY + shelfY + 0.05, 2.9, layer);
    });
    // sump: lid, pipe and indicator light
    addCylinder(0.32, 0.05, interiorMats.tvBlack, 0.66, floorY, 1.6, layer, 20);
    addCylinder(0.1, 0.5, interiorMats.pvc ?? materials.pvc, 0.66, floorY, 1.6, layer, 12);
    const sumpLed = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), interiorMats.led);
    sumpLed.position.set(0.66, floorY + 0.58, 1.6);
    sumpLed.userData.noAO = true;
    sumpLed.userData.noPick = true;
    layer.add(sumpLed);
    // two stacked cardboard boxes and a rug
    addBox(0.5, 0.4, 0.4, 0.02, interiorMats.cardboard, -1.4, floorY, 2.9, layer, 0.3);
    addBox(0.45, 0.35, 0.4, 0.02, interiorMats.cardboard, -1.3, floorY + 0.4, 2.9, layer, 0.1);
    addBox(1.6, 0.02, 1.2, 0.01, interiorMats.rug, 0.4, floorY, 0.8, layer);
  })();
  // lamps and screens brighten with night and a little more with cut; the LED is always on
  function updateLights(night, cut) {
    const level = clamp(0.25 + 0.75 * night + cut * 0.3, 0, 1.1);
    interiorMats.tv.emissiveIntensity = 1.3 * level;
    interiorMats.screen.emissiveIntensity = 1.1 * level;
    interiorMats.lamp.emissiveIntensity = 2.2 * level;
    interiorMats.pendant.emissiveIntensity = 2.6 * level;
    interiorMats.led.emissiveIntensity = 3;
  }
  return {
    update: updateLights,
    glows: glowMats,
  };
}
