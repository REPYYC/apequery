import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
export function mergeStatic(i) {
  i.updateWorldMatrix(true, true);
  let e = new THREE.Matrix4().copy(i.matrixWorld).invert(),
    t = new THREE.Matrix4(),
    n = new Map(),
    s = [],
    r = (l) => {
      for (let u = l; u && u !== i; u = u.parent) {
        if (u.userData.sys || u.userData.keep || u.userData.level) {
          return true;
        }
      }
      return false;
    },
    a = (l) =>
      Array.isArray(l.material)
        ? l.geometry.groups.map((u) => {
            let f = l.geometry.clone(),
              d = l.geometry.index;
            f.clearGroups();
            if (d) {
              f.setIndex(Array.from(d.array.slice(u.start, u.start + u.count)));
            } else {
              f.deleteAttribute("position");
            }
            return {
              m: l.material[u.materialIndex],
              g: f,
            };
          })
        : [
            {
              m: l.material,
              g: l.geometry.clone(),
            },
          ];
  i.traverse((l) => {
    if (
      !l.isMesh ||
      l.isInstancedMesh ||
      l === i ||
      !l.material ||
      !l.visible ||
      r(l) ||
      l.children.length ||
      (!l.geometry.index && Array.isArray(l.material)) ||
      (Array.isArray(l.material) ? l.material : [l.material]).some((d) => !d || d.userData.pane)
    ) {
      return;
    }
    t.multiplyMatrices(e, l.matrixWorld);
    const parts = a(l);
    parts.forEach(({ m: d, g: h }) => {
      let p = [d.uuid, +l.castShadow, +l.receiveShadow, +!!l.userData.noAO, +!!l.userData.noPick, l.renderOrder].join("|"),
        x = n.get(p);
      if (!x) {
        n.set(
          p,
          (x = {
            m: d,
            cast: l.castShadow,
            recv: l.receiveShadow,
            noAO: !!l.userData.noAO,
            noPick: !!l.userData.noPick,
            ro: l.renderOrder,
            geos: [],
            owners: new Set(),
          }),
        );
      }
      if (!h.attributes.uv) {
        h.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(h.attributes.position.count * 2), 2));
      }
      h.applyMatrix4(t);
      x.geos.push(h);
      x.owners.add(l);
    });
    s.push(l);
  });
  let o = 0;
  n.forEach((l) => {
    if (l.geos.length < 2) {
      l.geos.forEach((x) => x.dispose());
      return;
    }
    let u = Object.keys(l.geos[0].attributes).filter((x) => l.geos.every((g) => g.attributes[x]));
    l.geos.forEach((x) => {
      for (let g of Object.keys(x.attributes)) {
        if (!u.includes(g)) {
          x.deleteAttribute(g);
        }
      }
    });
    let d = l.geos.some((x) => !x.index) ? l.geos.map((x) => (x.index ? x.toNonIndexed() : x)) : l.geos,
      h = mergeGeometries(d);
    if (!h) {
      return;
    }
    h.computeBoundingSphere();
    let p = new THREE.Mesh(h, l.m);
    p.castShadow = l.cast;
    p.receiveShadow = l.recv;
    p.renderOrder = l.ro;
    if (l.noAO) {
      p.userData.noAO = true;
    }
    if (l.noPick) {
      p.userData.noPick = true;
    }
    i.add(p);
    o++;
    l.done = true;
  });
  let c = new Set();
  n.forEach((l) => {
    if (!l.done) {
      l.owners.forEach((u) => c.add(u));
    }
  });
  s.forEach((l) => {
    if (!c.has(l) && l.parent) {
      l.parent.remove(l);
      l.geometry.dispose();
    }
  });
  return o;
}
export function mergeEdges(i, e) {
  i.updateWorldMatrix(true, true);
  let t = new THREE.Matrix4().copy(i.matrixWorld).invert(),
    n = new THREE.Matrix4(),
    s = [],
    r = [];
  i.traverse((c) => {
    if (c.isLineSegments && c.material === e) {
      r.push(c);
    }
  });
  r.forEach((c) => {
    let l = c.geometry.clone();
    for (let u of Object.keys(l.attributes)) {
      if (u !== "position") {
        l.deleteAttribute(u);
      }
    }
    l.applyMatrix4(n.multiplyMatrices(t, c.matrixWorld));
    s.push(l);
  });
  if (s.length < 2) {
    return 0;
  }
  let a = mergeGeometries(s.map((c) => (c.index ? c.toNonIndexed() : c)));
  if (!a) {
    return 0;
  }
  let o = new THREE.LineSegments(a, e);
  o.raycast = () => {};
  o.userData.noAO = true;
  i.add(o);
  r.forEach((c) => {
    if (c.parent) {
      c.parent.remove(c);
    }
    c.geometry.dispose();
  });
  return r.length;
}
