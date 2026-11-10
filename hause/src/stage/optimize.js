// Draw-call reduction for the static parts of the stage.
// mergeStatic(layer) merges a layer's static meshes into one mesh per material (and shadow / AO / pick / render-order flags);
// mergeEdges(layer, edgeMat) merges a layer's edge line segments into a single LineSegments object.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
// Merges the static meshes under `layer`, in the layer's local space, and removes the originals.
// Returns the number of merged meshes that were created.
export function mergeStatic(layer) {
  layer.updateWorldMatrix(true, true);
  // world -> layer-local matrix, a scratch matrix, geometry buckets keyed by material + flags, and the meshes that fed them
  const layerInverse = new THREE.Matrix4().copy(layer.matrixWorld).invert(),
    toLayer = new THREE.Matrix4(),
    buckets = new Map(),
    sourceMeshes = [],
    // true when the object, or an ancestor below the layer, is tagged userData.sys, keep or level
    staysSeparate = (obj) => {
      for (let node = obj; node && node !== layer; node = node.parent) {
        if (node.userData.sys || node.userData.keep || node.userData.level) {
          return true;
        }
      }
      return false;
    },
    // one { m: material, g: geometry clone } part per material; a multi-material mesh is split along its geometry groups
    splitByMaterial = (mesh) =>
      Array.isArray(mesh.material)
        ? mesh.geometry.groups.map((group) => {
            const partGeo = mesh.geometry.clone(),
              indexAttr = mesh.geometry.index;
            partGeo.clearGroups();
            if (indexAttr) {
              partGeo.setIndex(Array.from(indexAttr.array.slice(group.start, group.start + group.count)));
            } else {
              partGeo.deleteAttribute("position");
            }
            return {
              m: mesh.material[group.materialIndex],
              g: partGeo,
            };
          })
        : [
            {
              m: mesh.material,
              g: mesh.geometry.clone(),
            },
          ];
  // collect the mergeable meshes: visible, childless, not instanced, not tagged to stay separate, no glass pane material
  layer.traverse((mesh) => {
    if (
      !mesh.isMesh ||
      mesh.isInstancedMesh ||
      mesh === layer ||
      !mesh.material ||
      !mesh.visible ||
      staysSeparate(mesh) ||
      mesh.children.length ||
      (!mesh.geometry.index && Array.isArray(mesh.material)) ||
      (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).some((mat) => !mat || mat.userData.pane)
    ) {
      return;
    }
    // bake every part into layer space and file it in the bucket for its material + flags
    toLayer.multiplyMatrices(layerInverse, mesh.matrixWorld);
    const parts = splitByMaterial(mesh);
    parts.forEach(({ m: mat, g: geo }) => {
      let bucketKey = [mat.uuid, +mesh.castShadow, +mesh.receiveShadow, +!!mesh.userData.noAO, +!!mesh.userData.noPick, mesh.renderOrder].join("|"),
        bucket = buckets.get(bucketKey);
      if (!bucket) {
        buckets.set(
          bucketKey,
          (bucket = {
            m: mat,
            cast: mesh.castShadow,
            recv: mesh.receiveShadow,
            noAO: !!mesh.userData.noAO,
            noPick: !!mesh.userData.noPick,
            ro: mesh.renderOrder,
            geos: [],
            owners: new Set(),
          }),
        );
      }
      // geometry without uv gets a zero-filled uv attribute
      if (!geo.attributes.uv) {
        geo.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
      }
      geo.applyMatrix4(toLayer);
      bucket.geos.push(geo);
      bucket.owners.add(mesh);
    });
    sourceMeshes.push(mesh);
  });
  // merge every bucket that holds at least two geometries into one mesh
  let mergedCount = 0;
  buckets.forEach((bucket) => {
    if (bucket.geos.length < 2) {
      bucket.geos.forEach((geo) => geo.dispose());
      return;
    }
    // keep only the attributes that every geometry in the bucket has
    const sharedAttrs = Object.keys(bucket.geos[0].attributes).filter((attrName) => bucket.geos.every((geo) => geo.attributes[attrName]));
    bucket.geos.forEach((geo) => {
      for (let attrName of Object.keys(geo.attributes)) {
        if (!sharedAttrs.includes(attrName)) {
          geo.deleteAttribute(attrName);
        }
      }
    });
    // if any geometry in the bucket is non-indexed, un-index the others too
    const geosToMerge = bucket.geos.some((geo) => !geo.index) ? bucket.geos.map((geo) => (geo.index ? geo.toNonIndexed() : geo)) : bucket.geos,
      mergedGeo = mergeGeometries(geosToMerge);
    if (!mergedGeo) {
      return;
    }
    mergedGeo.computeBoundingSphere();
    // the merged mesh carries the bucket's material, shadow flags, render order and noAO / noPick tags
    const mergedMesh = new THREE.Mesh(mergedGeo, bucket.m);
    mergedMesh.castShadow = bucket.cast;
    mergedMesh.receiveShadow = bucket.recv;
    mergedMesh.renderOrder = bucket.ro;
    if (bucket.noAO) {
      mergedMesh.userData.noAO = true;
    }
    if (bucket.noPick) {
      mergedMesh.userData.noPick = true;
    }
    layer.add(mergedMesh);
    mergedCount++;
    bucket.done = true;
  });
  // remove the source meshes, except those that own a part in a bucket that was not merged
  const unmergedOwners = new Set();
  buckets.forEach((bucket) => {
    if (!bucket.done) {
      bucket.owners.forEach((owner) => unmergedOwners.add(owner));
    }
  });
  sourceMeshes.forEach((mesh) => {
    if (!unmergedOwners.has(mesh) && mesh.parent) {
      mesh.parent.remove(mesh);
      mesh.geometry.dispose();
    }
  });
  return mergedCount;
}
// Merges every LineSegments under `layer` that uses `edgeMat` into one LineSegments in the layer's local space.
// Returns the number of line objects that were replaced (0 when fewer than two were found or the merge failed).
export function mergeEdges(layer, edgeMat) {
  layer.updateWorldMatrix(true, true);
  const layerInverse = new THREE.Matrix4().copy(layer.matrixWorld).invert(),
    toLayer = new THREE.Matrix4(),
    edgeGeos = [],
    edgeLines = [];
  // find the edge lines
  layer.traverse((obj) => {
    if (obj.isLineSegments && obj.material === edgeMat) {
      edgeLines.push(obj);
    }
  });
  // clone each geometry, keep only its positions and bake it into layer space
  edgeLines.forEach((line) => {
    const geo = line.geometry.clone();
    for (let attrName of Object.keys(geo.attributes)) {
      if (attrName !== "position") {
        geo.deleteAttribute(attrName);
      }
    }
    geo.applyMatrix4(toLayer.multiplyMatrices(layerInverse, line.matrixWorld));
    edgeGeos.push(geo);
  });
  if (edgeGeos.length < 2) {
    return 0;
  }
  const mergedGeo = mergeGeometries(edgeGeos.map((geo) => (geo.index ? geo.toNonIndexed() : geo)));
  if (!mergedGeo) {
    return 0;
  }
  // one merged object: never hit by raycasts, excluded from ambient occlusion; it replaces the originals
  const mergedLines = new THREE.LineSegments(mergedGeo, edgeMat);
  mergedLines.raycast = () => {};
  mergedLines.userData.noAO = true;
  layer.add(mergedLines);
  edgeLines.forEach((line) => {
    if (line.parent) {
      line.parent.remove(line);
    }
    line.geometry.dispose();
  });
  return edgeLines.length;
}
