import * as THREE from "three";
export function createSewerSet({ kit }) {
  const group = new THREE.Group();
  kit.box(0.2, 0.2, 0.2, kit.mats.clay, 0.6, -3.2, -8, group);
  const P = { fx: 0.6, time: 19.4, cut: 0, ghost: 0, section: 1, cutX: 0.42, ugFocus: "sewer" };
  return { name: "sewer", group, anchors: { hub: new THREE.Vector3(0.6, -3.2, -8) },
    shots: [ { ...P, radius: 16, theta: -1.75, phi: 1.3, ty: -2, fz: -9 }, { ...P, radius: 3, theta: -1.4, phi: 1.45, ty: -3.1, fz: -6 } ],
    light: () => ({ pos: [-1, -1, -6], at: [0.6, -3.2, -7], power: 1 }), update() {} };
}
