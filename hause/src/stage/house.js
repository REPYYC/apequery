// The house. createHouse() builds a two-storey gabled house on a basement out of boxes, rounded boxes and cylinders,
// grouped into the five pull-apart layers (roof, upper, main, basement, below). It tags the service systems
// (foundation, sewer, radon, hvac, electrical, plumbing, roofing, solar, ...), registers every window for the dusk
// lighting and returns update(), which drives the window glow, the room and porch lights, the roof snow and the icicles.
// Axes: y is up, +z is the front (street side), -z the back, +x north, -x south; the ground is at y = 0.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { clamp, lerp, smooth, rng, boxUV } from "./util.js";
import { snowEdgeAlpha, roomTexture } from "./textures.js";
import { makeGlass } from "./materials.js";
// footprint (W along x, D along z) and storey height
export const W = 10;
export const D = 8;
const FLOOR = 2.9;
// the five layers, top to bottom; dy is how far a layer is raised when the house is fully pulled apart
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
// Vector3 shorthand
const v = (x, y, z) => new THREE.Vector3(x, y, z);
export function createHouse({ M: M, T: T, markTex: markTex, glowTex: glowTex }) {
  // root group with one sub-group per layer
  const house = new THREE.Group(),
    layers = {};
  LEVELS.forEach((level) => {
    const layer = new THREE.Group();
    layer.userData.level = level.key;
    layers[level.key] = layer;
    house.add(layer);
  });
  // shared state: tagged systems, window entries for the lighting, the outline material,
  // and parts that update() and the caller need later
  const sys = {},
    windows = [],
    edgeMat = new THREE.LineBasicMaterial({
      color: 11126756,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      toneMapped: false,
      fog: false,
    }),
    extra = {
      icicles: null,
      snowL: null,
      snowR: null,
      chimneyTop: new THREE.Object3D(),
      fans: [],
    },
    setUV = boxUV;
  // box mesh with position-based UVs (setUV); opts: uv, cast, receive, edges (adds outline lines)
  function box(w, h, d, mat, x = 0, y = 0, z = 0, parent, opts = {}) {
    const geo = new THREE.BoxGeometry(w, h, d);
    setUV(geo, opts.uv || {});
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = opts.cast !== false;
    mesh.receiveShadow = opts.receive !== false;
    if (opts.edges) {
      const edgeLines = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), edgeMat);
      edgeLines.raycast = () => {};
      mesh.add(edgeLines);
    }
    if (parent) {
      parent.add(mesh);
    }
    return mesh;
  }
  // rounded-box mesh; opts: seg, cast
  function rbox(w, h, d, radius, mat, x = 0, y = 0, z = 0, parent, opts = {}) {
    const geo = new RoundedBoxGeometry(w, h, d, opts.seg || 2, radius),
      mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = opts.cast !== false;
    mesh.receiveShadow = true;
    if (parent) {
      parent.add(mesh);
    }
    return mesh;
  }
  // upright cylinder mesh
  function cyl(radius, height, mat, x, y, z, parent, segments = 18) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segments), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    if (parent) {
      parent.add(mesh);
    }
    return mesh;
  }
  // tags meshes as part of a service system: each gets its own material clone (base emissive remembered) and,
  // when an anchor is given, a marker sprite is added to that layer
  function system(key, parts, anchor, level) {
    const entry = (sys[key] ||= {
        meshes: [],
        mats: [],
        marks: [],
      }),
      cloneMat = (mat) => {
        const cloned = mat.clone();
        cloned.userData.baseEmissive = cloned.emissive.clone();
        return cloned;
      };
    parts.forEach((part) => {
      part.material = Array.isArray(part.material) ? part.material.map(cloneMat) : cloneMat(part.material);
      part.userData.sys = key;
      entry.meshes.push(part);
      entry.mats.push(...[].concat(part.material));
    });
    if (anchor) {
      const mark = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: markTex,
          transparent: true,
          depthTest: false,
          depthWrite: false,
          opacity: 0,
        }),
      );
      mark.position.copy(anchor);
      mark.scale.set(0.95, 0.95, 1);
      mark.renderOrder = 10;
      mark.userData.sys = key;
      mark.userData.noAO = true;
      layers[level].add(mark);
      entry.marks.push(mark);
    }
  }
  // number of windows built so far (it sets their lighting order) and a cache of interior textures, one per room type
  let windowCount = 0,
    roomTexCache = {},
    cachedRoomTexture = (room) => (roomTexCache[room] ||= roomTexture(room));
  // window unit: glass pane, frame, mullions, sill, head trim and glow halo; registers itself in windows
  function windowUnit(parent, rect, wallThickness, room, order, always) {
    const width = rect.x1 - rect.x0,
      height = rect.y1 - rect.y0,
      centerX = (rect.x0 + rect.x1) / 2,
      centerY = (rect.y0 + rect.y1) / 2,
      unit = new THREE.Group();
    unit.position.set(centerX, centerY, 0);
    parent.add(unit);
    // glass pane showing the room texture
    const glassMat = makeGlass(cachedRoomTexture(room || "living")),
      pane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), glassMat);
    pane.position.z = 0.03;
    pane.receiveShadow = false;
    unit.add(pane);
    // frame: top, bottom, left, right
    const frameWidth = 0.075,
      frameDepth = 0.1;
    rbox(width, frameWidth, frameDepth, 0.012, M.trim, 0, height / 2 - frameWidth / 2, 0.07, unit, {
      seg: 1,
    });
    rbox(width, frameWidth, frameDepth, 0.012, M.trim, 0, -height / 2 + frameWidth / 2, 0.07, unit, {
      seg: 1,
    });
    rbox(frameWidth, height, frameDepth, 0.012, M.trim, -width / 2 + frameWidth / 2, 0, 0.07, unit, {
      seg: 1,
    });
    rbox(frameWidth, height, frameDepth, 0.012, M.trim, width / 2 - frameWidth / 2, 0, 0.07, unit, {
      seg: 1,
    });
    // vertical mullions on wide windows, a horizontal bar on tall ones
    const paneCount = width > 1.35 ? Math.round(width / 0.95) : 1;
    for (let i = 1; i < paneCount; i++) {
      rbox(0.035, height - 0.1, 0.07, 0.008, M.trim, -width / 2 + (width / paneCount) * i, 0, 0.065, unit, {
        seg: 1,
        cast: false,
      });
    }
    if (height > 1.2) {
      rbox(width - 0.1, 0.035, 0.07, 0.008, M.trim, 0, height * 0.12, 0.065, unit, {
        seg: 1,
        cast: false,
      });
    }
    // sill and head trim
    rbox(width + 0.22, 0.055, 0.26, 0.012, M.cedar, 0, -height / 2 - 0.03, 0.14, unit, {
      seg: 1,
    });
    rbox(width + 0.18, 0.09, 0.12, 0.012, M.trim, 0, height / 2 + 0.07, 0.1, unit, {
      seg: 1,
    });
    // glow halo in front of the glass
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    );
    halo.position.set(0, 0, 0.4);
    halo.scale.set(width * 2.6, height * 2.6, 1);
    halo.userData.noAO = true;
    unit.add(halo);
    // entry read by update()
    windows.push({
      mat: glassMat,
      halo: halo,
      order: order != null ? order + windowCount * 0.001 : windowCount,
      always: !!always,
      w: width,
      h: height,
    });
    windowCount++;
    return unit;
  }
  // door unit: door slab with a narrow glass lite (lit like a window), handle, head trim and side casings
  function doorUnit(parent, rect, wallThickness) {
    const width = rect.x1 - rect.x0,
      height = rect.y1 - rect.y0,
      centerX = (rect.x0 + rect.x1) / 2,
      centerY = (rect.y0 + rect.y1) / 2,
      unit = new THREE.Group();
    unit.position.set(centerX, centerY, 0);
    parent.add(unit);
    // door slab
    box(width, height, 0.07, M.door, 0, 0, 0, unit, {
      uv: {
        ox: centerX,
        oy: centerY,
      },
    });
    // glass lite, registered in windows
    const doorGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.22, height * 0.72), makeGlass(cachedRoomTexture("hall")));
    doorGlass.position.set(-width / 2 + 0.22, 0.05, 0.04);
    unit.add(doorGlass);
    windows.push({
      mat: doorGlass.material,
      halo: null,
      order: 0.5,
      always: false,
      w: 0.22,
      h: height * 0.72,
    });
    // handle, head trim, side casings
    rbox(0.03, 0.8, 0.05, 0.012, M.trim, width / 2 - 0.14, -0.05, 0.08, unit, {
      seg: 1,
    });
    rbox(width + 0.14, 0.09, 0.12, 0.012, M.trim, 0, height / 2 + 0.07, 0.07, unit, {
      seg: 1,
    });
    rbox(0.07, height, 0.1, 0.01, M.trim, -width / 2 - 0.035, 0, 0.06, unit, {
      seg: 1,
    });
    rbox(0.07, height, 0.1, 0.01, M.trim, width / 2 + 0.035, 0, 0.06, unit, {
      seg: 1,
    });
  }
  // wall with openings: the wall is split into a grid at every opening edge, each solid cell becomes a box
  // (mat on the outer face, drywall on the inner face), then every opening gets a door or a window unit
  function wall(width, height, thickness, openings, mat, parent, pos, rotY, opts = {}) {
    // grid lines: the wall's own edges plus the edges of every opening
    const group = new THREE.Group(),
      xCuts = new Set([-width / 2, width / 2]),
      yCuts = new Set([0, height]);
    openings.forEach((opening) => {
      xCuts.add(opening.x0);
      xCuts.add(opening.x1);
      yCuts.add(opening.y0);
      yCuts.add(opening.y1);
    });
    const xEdges = [...xCuts].sort((a, b) => a - b),
      yEdges = [...yCuts].sort((a, b) => a - b),
      faceMats = [M.trim, M.trim, M.trim, M.trim, mat, M.drywall];
    // a box for every grid cell that is not inside an opening
    for (let i = 0; i < xEdges.length - 1; i++) {
      for (let j = 0; j < yEdges.length - 1; j++) {
        const cellX = (xEdges[i] + xEdges[i + 1]) / 2,
          cellY = (yEdges[j] + yEdges[j + 1]) / 2;
        if (!openings.some((opening) => cellX > opening.x0 && cellX < opening.x1 && cellY > opening.y0 && cellY < opening.y1)) {
          box(xEdges[i + 1] - xEdges[i], yEdges[j + 1] - yEdges[j], thickness, faceMats, cellX, cellY, 0, group, {
            edges: true,
            uv: {
              ox: cellX,
              oy: cellY + (opts.v0 || 0),
            },
          });
        }
      }
    }
    // doors and windows
    openings.forEach((opening) => {
      if (opening.door) {
        doorUnit(group, opening, thickness);
      } else {
        windowUnit(group, opening, thickness, opening.room, opts.order, opening.always);
      }
    });
    group.position.copy(pos);
    group.rotation.y = rotY || 0;
    parent.add(group);
    return group;
  }
  // below grade: foundation walls, footings, slab, sewer line, radon pipe stub, weeping tile
  (() => {
    const belowLayer = layers.below,
      foundationWalls = [],
      foundationMat = M.form;
    // foundation walls: front, back, north (+x), south (-x)
    foundationWalls.push(
      box(W + 0.5, 3.4, 0.25, foundationMat, 0, -1.4, D / 2 + 0.12, belowLayer, {
        edges: true,
        uv: {
          ox: 0,
          oy: -1.4,
        },
      }),
    );
    foundationWalls.push(
      box(W + 0.5, 3.4, 0.25, foundationMat, 0, -1.4, -D / 2 - 0.12, belowLayer, {
        edges: true,
        uv: {
          ox: 0,
          oy: -1.4,
        },
      }),
    );
    foundationWalls.push(
      box(0.25, 3.4, D, foundationMat, W / 2 + 0.12, -1.4, 0, belowLayer, {
        edges: true,
        uv: {
          oy: -1.4,
        },
      }),
    );
    foundationWalls.push(
      box(0.25, 3.4, D, foundationMat, -W / 2 - 0.12, -1.4, 0, belowLayer, {
        edges: true,
        uv: {
          oy: -1.4,
        },
      }),
    );
    // footings and basement slab
    box(W + 1.2, 0.3, 0.8, M.concrete, 0, -3.1, D / 2 + 0.1, belowLayer);
    box(W + 1.2, 0.3, 0.8, M.concrete, 0, -3.1, -D / 2 - 0.1, belowLayer);
    box(0.8, 0.3, D, M.concrete, W / 2 + 0.1, -3.1, 0, belowLayer);
    box(0.8, 0.3, D, M.concrete, -W / 2 - 0.1, -3.1, 0, belowLayer);
    const slab = box(W, 0.16, D, M.slab, 0, -2.88, 0, belowLayer, {
      edges: true,
    });
    system("foundation", [...foundationWalls, slab], v(W / 2 + 0.6, -1.4, 1.6), "below");
    // sewer: lateral sloping down toward the back lane, stub through the slab, cleanout riser up to grade
    const sewerLateral = cyl(0.14, 9, M.pipe, 0.6, -3.25, -D / 2 - 4.3, belowLayer);
    sewerLateral.rotation.x = Math.PI / 2 - 0.05;
    const sewerStub = cyl(0.14, 0.6, M.pipe, 0.6, -3, -D / 2 + 0.2, belowLayer),
      sewerCleanout = cyl(0.12, 3.2, M.pvc, 0.6, -1.6, -D / 2 - 1.2, belowLayer);
    system("sewer", [sewerLateral, sewerStub, sewerCleanout], v(0.6, -2.4, -D / 2 - 4.5), "below");
    // radon pipe stub at the slab
    const radonPitPipe = cyl(0.1, 0.5, M.pvc, -1.2, -2.7, -1.5, belowLayer);
    system("radon", [radonPitPipe], v(-1.2, -2.2, -1.5), "below");
    // weeping tile along the front footing
    const weepingTile = cyl(0.06, W + 1, M.pvc, 0, -3.25, D / 2 + 0.7, belowLayer, 10);
    weepingTile.rotation.z = Math.PI / 2;
    weepingTile.castShadow = false;
  })();
  // basement: light, furnace and ducts, water heater, electrical panel, radon pipe, plumbing stack, floor joists
  (() => {
    const basementLayer = layers.basement,
      basementLight = new THREE.PointLight(16766880, 0, 15, 2);
    basementLight.position.set(0.2, -0.7, -0.4);
    basementLayer.add(basementLight);
    basementLayer.userData.lights = [basementLight];
    // furnace with its band, duct trunk, plenum and vent pipe
    const furnace = box(0.85, 1.7, 0.85, M.white, -3.3, -2, -2.6, basementLayer),
      furnaceBand = box(0.87, 0.12, 0.87, M.copper, -3.3, -1.5, -2.6, basementLayer),
      ductTrunk = box(6.2, 0.36, 0.5, M.steel, -0.3, -0.12, -2.6, basementLayer),
      plenum = box(0.5, 1, 0.5, M.steel, -3.3, -0.7, -2.6, basementLayer),
      furnaceVent = cyl(0.07, 1.2, M.pvc, -3, -0.6, -3.1, basementLayer);
    system("hvac", [furnace, furnaceBand, ductTrunk, plenum, furnaceVent], v(-3.3, -0.9, -2), "basement");
    // water heater and its pipe
    const waterHeater = cyl(0.3, 1.4, M.white, -2.1, -2.1, -3, basementLayer),
      heaterPipe = cyl(0.04, 1.2, M.copper, -2, -0.9, -3, basementLayer);
    system("water-heaters", [waterHeater, heaterPipe], v(-2.1, -1.1, -2.6), "basement");
    // electrical panel and its feed
    const panelBox = box(0.62, 0.95, 0.14, M.steel, 2.8, -1.2, -3.8, basementLayer),
      panelFace = box(0.4, 0.7, 0.02, M.copper, 2.8, -1.2, -3.72, basementLayer),
      panelFeed = cyl(0.05, 1.5, M.copper, 2.8, -0.1, -3.8, basementLayer);
    system("electrical", [panelBox, panelFace, panelFeed], v(2.8, -0.5, -3.3), "basement");
    // radon pipe and plumbing stack
    const radonPipe = cyl(0.1, 3.1, M.pvc, -1.2, -1.2, -1.5, basementLayer);
    system("radon", [radonPipe], null, "basement");
    cyl(0.09, 3.1, M.pipe, -2.6, -1.3, -3.6, basementLayer);
    // floor joists under the main floor
    for (let i = -4; i <= 4; i++) {
      box(0.09, 0.3, D - 0.3, M.cedar, i * 1, 0 - 0.1, 0, basementLayer, {
        cast: false,
      });
    }
  })();
  // openings of the main-floor front wall: living-room window, front door, kitchen window
  const mainFrontOpenings = [
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
  // main floor: floor, exterior walls, partition, kitchen, meter, room lights and the front porch
  (() => {
    const mainLayer = layers.main,
      floorY = 0.3;
    box(W, 0.3, D, M.floor, 0, 0.15, 0, mainLayer, {
      edges: true,
    });
    // exterior walls: front, back, north (+x), south (-x)
    wall(W, FLOOR, 0.22, mainFrontOpenings, M.lap, mainLayer, v(0, floorY, D / 2), 0, {
      order: 1,
      v0: floorY,
    });
    wall(
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
      M.lap,
      mainLayer,
      v(0, floorY, -D / 2),
      Math.PI,
      {
        order: 4,
        v0: floorY,
      },
    );
    wall(
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
      M.lap,
      mainLayer,
      v(W / 2, floorY, 0),
      Math.PI / 2,
      {
        order: 2,
        v0: floorY,
      },
    );
    wall(
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
      M.lap,
      mainLayer,
      v(-W / 2, floorY, 0),
      -Math.PI / 2,
      {
        order: 3,
        v0: floorY,
      },
    );
    // interior partition
    box(0.15, FLOOR, 5, M.drywall, 1.2, floorY + FLOOR / 2, -1.2, mainLayer);
    // kitchen: counter, fridge, cooktop
    const counter = box(3, 0.95, 0.65, M.counter, 2.9, floorY + 0.48, -3.4, mainLayer),
      fridge = rbox(0.85, 1.95, 0.7, 0.03, M.steel, 4.35, floorY + 0.98, -3.4, mainLayer),
      cooktop = box(0.75, 0.05, 0.6, M.steel, 2.4, floorY + 0.97, -3.4, mainLayer);
    system("installation", [counter, fridge, cooktop], v(3, 2.3, -3.2), "main");
    // radon pipe and plumbing stack
    const radonPipe = cyl(0.1, 3.2, M.pvc, -1.2, 1.9, -1.5, mainLayer);
    system("radon", [radonPipe], null, "main");
    cyl(0.09, 3.2, M.pipe, -2.6, 1.9, -3.6, mainLayer);
    // meter box and mast on the outside of the back wall
    rbox(0.3, 0.42, 0.18, 0.02, M.white, 2.8, 1.5, -D / 2 - 0.2, mainLayer);
    cyl(0.035, 3.6, M.steel, 2.8, 3.55, -D / 2 - 0.1, mainLayer, 10);
    // room lights
    const livingLight = new THREE.PointLight(16758123, 0, 11, 2);
    livingLight.position.set(-1.5, 2.4, 0.5);
    mainLayer.add(livingLight);
    const kitchenLight = new THREE.PointLight(16758123, 0, 9, 2);
    kitchenLight.position.set(3, 2.4, -1.5);
    mainLayer.add(kitchenLight);
    mainLayer.userData.lights = [livingLight, kitchenLight];
    // front porch: stone base, cedar deck, two steps
    const porchGroup = new THREE.Group();
    mainLayer.add(porchGroup);
    box(2.9, 0.32, 2.3, M.stone, 0.55, 0.16, 5.1, porchGroup, {
      uv: {
        ox: 0.55,
        oy: 0.16,
      },
    });
    box(2.9, 0.07, 2.3, M.cedar, 0.55, 0.35, 5.1, porchGroup, {
      uv: {},
    });
    box(1.7, 0.17, 0.4, M.concrete, 0.7, 0.085, 6.55, porchGroup);
    box(1.9, 0.17, 0.4, M.concrete, 0.7, 0.255 - 0.085, 6.2, porchGroup);
    // posts on stone piers, beam and porch roof
    [-0.75, 1.85].forEach((postX) => {
      rbox(0.22, 2.55, 0.22, 0.015, M.cedar, postX, 1.67, 6.12, porchGroup);
      box(0.34, 0.5, 0.34, M.stone, postX, 0.6, 6.12, porchGroup, {
        uv: {
          ox: postX,
          oy: 0.6,
        },
      });
    });
    rbox(3.5, 0.24, 0.22, 0.02, M.cedar, 0.55, 2.84, 6.12, porchGroup);
    const porchRoof = box(3.4, 0.14, 2.6, [M.trim, M.trim, M.roof, M.cedar, M.trim, M.trim], 0.55, 3, 5.25, porchGroup, {
      uv: {
        swap: true,
      },
    });
    porchRoof.rotation.x = 0.1;
    // sconces on either side of the door, each with a glow halo
    [-0.15, 1.65].forEach((sconceX) => {
      const sconce = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.24, 12), M.sconce);
      sconce.position.set(sconceX, 1.9, 4.2);
      sconce.userData.noAO = true;
      porchGroup.add(sconce);
      const sconceHalo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0,
        }),
      );
      sconceHalo.position.set(sconceX, 1.9, 4.5);
      sconceHalo.scale.set(1.6, 1.6, 1);
      sconceHalo.userData.noAO = true;
      porchGroup.add(sconceHalo);
      extra.porchHalos = (extra.porchHalos || []).concat(sconceHalo);
    });
    // side railings: top rail, bottom rail, balusters
    [-0.78, 1.88].forEach((railX) => {
      box(0.06, 0.06, 2, M.trim, railX, 1.2, 5.15, porchGroup);
      box(0.05, 0.05, 2, M.trim, railX, 0.55, 5.15, porchGroup);
      for (let i = 0; i < 8; i++) {
        box(0.025, 0.62, 0.025, M.trim, railX, 0.9, 4.25 + i * 0.27, porchGroup, {
          cast: false,
        });
      }
    });
    // small plaque showing the mark texture, next to the door
    const markPlaque = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.2),
      new THREE.MeshBasicMaterial({
        map: markTex,
        transparent: true,
        toneMapped: false,
      }),
    );
    markPlaque.position.set(1.62, 1.35, 4.13);
    markPlaque.userData.noAO = true;
    porchGroup.add(markPlaque);
    // porch light
    const porchLight = new THREE.PointLight(16761469, 0, 7, 2);
    porchLight.position.set(0.75, 2.6, D / 2 + 1.1);
    mainLayer.add(porchLight);
    mainLayer.userData.porch = porchLight;
  })();
  // upper floor: floor, exterior walls, partition, bathroom fixtures, radon pipe, room light
  (() => {
    const upperLayer = layers.upper,
      floorY = 3.45;
    box(W, 0.25, D, M.floor, 0, 3.32, 0, upperLayer, {
      edges: true,
    });
    // exterior walls: front, back, north (+x), south (-x)
    wall(
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
      M.bb,
      upperLayer,
      v(0, floorY, D / 2),
      0,
      {
        order: 5,
        v0: floorY,
      },
    );
    wall(
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
      M.bb,
      upperLayer,
      v(0, floorY, -D / 2),
      Math.PI,
      {
        order: 8,
        v0: floorY,
      },
    );
    wall(
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
      M.bb,
      upperLayer,
      v(W / 2, floorY, 0),
      Math.PI / 2,
      {
        order: 6,
        v0: floorY,
      },
    );
    wall(
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
      M.bb,
      upperLayer,
      v(-W / 2, floorY, 0),
      -Math.PI / 2,
      {
        order: 7,
        v0: floorY,
      },
    );
    // interior partition
    box(0.15, FLOOR, D - 0.4, M.drywall, -1.6, floorY + FLOOR / 2, 0, upperLayer);
    // bathroom: tub, vanity, plumbing stack
    const tub = rbox(1.7, 0.55, 0.8, 0.08, M.ceramic, -3.6, floorY + 0.28, -3.35, upperLayer),
      vanity = rbox(0.7, 0.85, 0.5, 0.04, M.ceramic, -2.4, floorY + 0.43, -3.5, upperLayer),
      plumbingStack = cyl(0.09, 3, M.pipe, -2.6, floorY + 1.4, -3.6, upperLayer);
    system("plumbing", [tub, vanity, plumbingStack], v(-3.4, 4.6, -3), "upper");
    // radon pipe
    const radonPipe = cyl(0.1, 3, M.pvc, -1.2, floorY + 1.4, -1.5, upperLayer);
    system("radon", [radonPipe], null, "upper");
    // room light
    const upperLight = new THREE.PointLight(16758123, 0, 11, 2);
    upperLight.position.set(0.5, 5.6, 0.5);
    upperLayer.add(upperLight);
    upperLayer.userData.lights = [upperLight];
  })();
  // roof: two slopes with trim and gutters, gables with attic windows, solar array, snow, icicles,
  // attic floor with insulation, radon pipe and fan, plumbing stack, chimney
  (() => {
    // roof shape: base height, rise to the ridge, half span, eave overhang, pitch angle, length of a slope
    const roofLayer = layers.roof,
      roofBaseY = 6.35,
      roofRise = 3.6,
      halfSpan = W / 2,
      overhang = 0.6,
      pitch = Math.atan2(roofRise, halfSpan),
      slopeLength = Math.hypot(halfSpan + overhang, ((halfSpan + overhang) * roofRise) / halfSpan),
      // one roof slab tilted by the pitch: tiltSign 1 gives the slope on the -x side, -1 the one on the +x side
      makeSlope = (tiltSign) => {
        const geo = new THREE.BoxGeometry(slopeLength, 0.2, D + 1);
        setUV(geo, {
          swap: true,
        });
        const slope = new THREE.Mesh(geo, [M.trim, M.trim, M.roof, M.cedar, M.trim, M.trim]);
        slope.castShadow = true;
        slope.receiveShadow = true;
        slope.rotation.z = tiltSign * pitch;
        const centerY = roofBaseY + roofRise - ((halfSpan + overhang) / 2) * (roofRise / halfSpan) + 0.12;
        slope.position.set(tiltSign > 0 ? -(halfSpan + overhang) / 2 + 0.02 : (halfSpan + overhang) / 2 - 0.02, centerY, 0);
        roofLayer.add(slope);
        return slope;
      },
      slopeL = makeSlope(1),
      slopeR = makeSlope(-1);
    // outline lines
    [slopeL, slopeR].forEach((slope) => {
      const edgeLines = new THREE.LineSegments(new THREE.EdgesGeometry(slope.geometry, 30), edgeMat);
      edgeLines.raycast = () => {};
      slope.add(edgeLines);
    });
    // rake boards at both gable ends, fascia along the eave and a gutter that is kept level
    [slopeL, slopeR].forEach((slope, index) => {
      [-1, 1].forEach((endSign) =>
        box(slopeLength, 0.3, 0.06, M.trim, 0, -0.05, endSign * (D / 2 + 0.5), slope, {
          cast: false,
        }),
      );
      const eaveSign = index === 0 ? -1 : 1;
      box(0.06, 0.34, D + 1.04, M.trim, eaveSign * (slopeLength / 2), -0.1, 0, slope, {
        cast: false,
      });
      const gutter = box(0.12, 0.1, D + 0.9, M.trim, eaveSign * (slopeLength / 2 + 0.06), -0.28, 0, slope, {
        cast: false,
      });
      gutter.rotation.z = -slope.rotation.z;
    });
    // ridge cap
    box(0.3, 0.22, D + 1.05, M.trim, 0, roofBaseY + roofRise + 0.2, 0, roofLayer);
    system("roofing", [slopeL, slopeR], v(-2.8, 9.1, 2.2), "roof");
    // gables: an extruded triangle with a square hole for the attic window
    const gableShape = new THREE.Shape();
    gableShape.moveTo(-halfSpan, 0);
    gableShape.lineTo(halfSpan, 0);
    gableShape.lineTo(0, roofRise);
    gableShape.lineTo(-halfSpan, 0);
    const atticWindowHole = new THREE.Path();
    atticWindowHole.moveTo(-0.5, 1.15);
    atticWindowHole.lineTo(0.5, 1.15);
    atticWindowHole.lineTo(0.5, 2.15);
    atticWindowHole.lineTo(-0.5, 2.15);
    atticWindowHole.lineTo(-0.5, 1.15);
    gableShape.holes.push(atticWindowHole);
    const gableGeo = new THREE.ExtrudeGeometry(gableShape, {
      depth: 0.22,
      bevelEnabled: false,
    });
    // front and back gable, each with an attic window and a large glow halo
    [D / 2 - 0.22, -D / 2].forEach((gableZ, index) => {
      const gable = new THREE.Mesh(gableGeo, [M.bb, M.trim]);
      gable.position.set(0, roofBaseY, gableZ);
      gable.castShadow = true;
      gable.receiveShadow = true;
      roofLayer.add(gable);
      const windowMount = new THREE.Group();
      windowMount.position.set(0, roofBaseY + 1.65, gableZ + 0.11);
      roofLayer.add(windowMount);
      const atticWindow = windowUnit(
        windowMount,
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
      if (index === 1) {
        windowMount.rotation.y = Math.PI;
        windowMount.position.z = gableZ + 0.11 - 0;
      }
      const atticHalo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0,
        }),
      );
      atticHalo.position.set(0, roofBaseY + 1.65, gableZ + (index === 0 ? 0.55 : -0.3));
      atticHalo.scale.set(3.4, 3.4, 1);
      atticHalo.userData.noAO = true;
      roofLayer.add(atticHalo);
      windows.push({
        mat: null,
        halo: atticHalo,
        order: -1,
        always: true,
        w: 1,
        h: 1,
        haloOnly: true,
        level: 0.6,
      });
    });
    // solar array on the +x slope: 2 x 4 panels with frames
    const solarArray = new THREE.Group();
    solarArray.rotation.z = -pitch;
    solarArray.position.copy(slopeR.position);
    const solarPanels = [];
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 4; col++) {
        const panel = box(1.3, 0.05, 0.95, M.solar, -0.9 + row * 1.45, 0.16, -1.6 + col * 1.05, solarArray, {
            cast: false,
          }),
          panelFrame = box(1.34, 0.04, 0.99, M.solarFrame, -0.9 + row * 1.45, 0.14, -1.6 + col * 1.05, solarArray, {
            cast: false,
          });
        solarPanels.push(panel);
      }
    }
    roofLayer.add(solarArray);
    system("solar", solarPanels, v(3.4, 9.3, 0.6), "roof");
    // roof snow: a bumpy sheet whose alpha map gives it an irregular edge; the optional mask cuts areas out of it
    const makeRoofSnow = (mask) => {
      const geo = new THREE.PlaneGeometry(slopeLength - 0.25, D + 0.7, 30, 30),
        pos = geo.attributes.position,
        snowRand = rng(5);
      for (let i = 0; i < pos.count; i++) {
        pos.setZ(i, 0.025 + snowRand() * 0.05);
      }
      geo.computeVertexNormals();
      const snowMat = M.snowRoof.clone();
      snowMat.alphaMap = snowEdgeAlpha(256, mask);
      snowMat.alphaTest = 0.25;
      snowMat.userData = {
        ...M.snowRoof.userData,
      };
      const snowMesh = new THREE.Mesh(geo, snowMat);
      snowMesh.rotation.x = -Math.PI / 2;
      snowMesh.position.y = 0.105;
      snowMesh.receiveShadow = true;
      snowMesh.castShadow = true;
      return snowMesh;
    };
    extra.snowL = makeRoofSnow();
    extra.snowL.userData.keep = true;
    slopeL.add(extra.snowL);
    // the sheet on the +x slope leaves a hole over the solar array
    extra.snowR = makeRoofSnow((alongSlope, alongRidge) => (alongSlope > 0.24 && alongSlope < 0.7 && alongRidge > 0.24 && alongRidge < 0.76 ? 0 : 1));
    extra.snowR.userData.keep = true;
    slopeR.add(extra.snowR);
    // snow cap along the ridge
    const snowCap = box(0.5, 0.16, D + 0.8, M.snowRoof, 0, roofBaseY + roofRise + 0.38, 0, roofLayer, {
      cast: false,
    });
    snowCap.material = M.snowRoof;
    snowCap.userData.keep = true;
    // icicles: instanced cones along both eaves; hidden here, update() rescales them from the stored base matrices
    (() => {
      const icicleRand = rng(9),
        perEave = 70,
        icicleGeo = new THREE.ConeGeometry(0.04, 1, 6);
      icicleGeo.rotateX(Math.PI);
      icicleGeo.translate(0, -0.5, 0);
      const icicles = new THREE.InstancedMesh(icicleGeo, M.ice, perEave * 2),
        matrix = new THREE.Matrix4(),
        quat = new THREE.Quaternion(),
        pos = new THREE.Vector3(),
        scale = new THREE.Vector3(),
        eaveY = roofBaseY + roofRise - (halfSpan + overhang) * (roofRise / halfSpan) + 0;
      for (let side = 0; side < 2; side++) {
        for (let i = 0; i < perEave; i++) {
          const z = -D / 2 - 0.4 + (i / (perEave - 1)) * (D + 0.8),
            length = 0.12 + icicleRand() * icicleRand() * 0.7,
            thickness = 0.7 + icicleRand() * 0.8;
          pos.set((side ? 1 : -1) * (halfSpan + overhang + 0.08), eaveY - 0.35, z + (icicleRand() - 0.5) * 0.06);
          scale.set(thickness, length, thickness);
          matrix.compose(pos, quat, scale);
          icicles.setMatrixAt(side * perEave + i, matrix);
        }
      }
      icicles.userData.baseMatrices = Array.from(
        {
          length: perEave * 2,
        },
        (unused, i) => {
          const baseMatrix = new THREE.Matrix4();
          icicles.getMatrixAt(i, baseMatrix);
          return baseMatrix;
        },
      );
      icicles.castShadow = false;
      icicles.userData.noAO = true;
      icicles.visible = false;
      roofLayer.add(icicles);
      extra.icicles = icicles;
    })();
    // attic: bumpy insulation blanket (tagged as the asbestos system) on the attic floor
    const insulGeo = new THREE.PlaneGeometry(W - 0.6, D - 0.6, 40, 32),
      insulPos = insulGeo.attributes.position,
      insulRand = rng(3);
    for (let i = 0; i < insulPos.count; i++) {
      insulPos.setZ(i, insulRand() * 0.12);
    }
    insulGeo.computeVertexNormals();
    const insulation = new THREE.Mesh(insulGeo, M.insul);
    insulation.rotation.x = -Math.PI / 2;
    insulation.position.y = roofBaseY + 0.02;
    insulation.receiveShadow = true;
    roofLayer.add(insulation);
    box(W, 0.1, D, M.floor, 0, roofBaseY - 0.05, 0, roofLayer);
    system("asbestos", [insulation], v(-0.4, 7.3, -0.8), "roof");
    // radon pipe up through the roof and its fan
    const radonPipe = cyl(0.1, 4.6, M.pvc, -1.2, roofBaseY + 2.2, -1.5, roofLayer);
    system("radon", [radonPipe], v(-1.2, 10.9, -1.5), "roof");
    const radonFan = cyl(0.24, 0.42, M.steel, -1.2, 7.9, -1.5, roofLayer, 16);
    system("radon", [radonFan], null, "roof");
    // plumbing stack
    cyl(0.09, 4, M.pipe, -2.6, roofBaseY + 2, -3.6, roofLayer);
    // chimney: stone stack, concrete crown, steel cap; extra.chimneyTop is an empty object placed at its top
    const chimney = box(0.95, 4.1, 0.95, M.stone, -3.4, 8.4, -1.6, roofLayer, {
      uv: {
        ox: -3.4,
        oy: 8.4,
      },
    });
    box(1.15, 0.12, 1.15, M.concrete, -3.4, 10.5, -1.6, roofLayer);
    box(0.7, 0.3, 0.7, M.steel, -3.4, 10.7, -1.6, roofLayer);
    extra.chimneyTop.position.set(-3.4, 10.9, -1.6);
    roofLayer.add(extra.chimneyTop);
  })();
  // label anchor points, and scratch objects for update()
  const ANCHORS = {
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
    scratchMatrix = new THREE.Matrix4(),
    scratchPos = new THREE.Vector3(),
    scratchQuat = new THREE.Quaternion(),
    scratchScale = new THREE.Vector3();
  // per frame: turns the window glow and room lights on at dusk (dimmed in the ghost and cut views), lights the basement
  // when the house is pulled apart or lifted and the porch at night, melts the roof snow and grows the icicles.
  // Reads S.ghost, S.cut, S.explode, S.lift, S.melt and S.icicles; returns the lighting level (0..9).
  function update(S, k, t, daylight, dt) {
    // eased on/off switch: on while daylight is below 0.55; it switches off faster than on
    const lightsTarget = daylight < 0.55 ? 1 : 0;
    update.on = lerp(update.on ?? 0, lightsTarget, clamp(dt * (lightsTarget ? 0.55 : 1.2), 0, 1));
    const roomsLit = update.on * 9,
      viewDim = (1 - S.ghost * 0.85) * (1 - 0.35 * (S.cut || 0)),
      cutDim = 1 - 0.65 * (S.cut || 0),
      cutBoost = 1 + 1.6 * (S.cut || 0);
    // windows come on one after another, in their order
    windows.forEach((win) => {
      const lit = (win.always ? 1 : clamp(roomsLit - win.order, 0, 1)) * viewDim,
        nightFactor = 1 - daylight * 0.8;
      if (win.mat) {
        win.mat.emissiveIntensity = (win.always ? 2.6 : 2) * lit * nightFactor * cutDim;
      }
      if (win.halo) {
        win.halo.material.opacity = (win.haloOnly ? 0.28 : win.always ? 0.5 : 0.3) * lit * nightFactor * cutDim;
      }
    });
    // room lights on the main and upper floors
    ["main", "upper"].forEach((level) =>
      (layers[level].userData.lights || []).forEach((light) => {
        light.intensity = 9 * clamp(roomsLit / 9, 0, 1) * (1 - daylight) * viewDim * cutBoost;
      }),
    );
    // basement lights
    const basementReveal = Math.max(smooth(0.2, 0.7, S.explode || 0), clamp(((S.lift || 0) - 1.5) / 1.5, 0, 1));
    (layers.basement.userData.lights || []).forEach((light) => {
      light.intensity = 30 * basementReveal * viewDim * cutBoost;
    });
    // porch light, sconce halos and sconces
    const porchGlow = (1 - daylight) * viewDim;
    layers.main.userData.porch.intensity = 12 * porchGlow;
    (extra.porchHalos || []).forEach((halo) => {
      halo.material.opacity = 0.55 * porchGlow * cutDim;
    });
    M.sconce.emissiveIntensity = 0.4 + 3.2 * (1 - daylight);
    // roof snow: a higher alpha test cuts more of the two sheets away as it melts;
    // the snow cap on the ridge is hidden past 0.6
    const melt = clamp(S.melt, 0, 1),
      snowAlphaTest = 0.18 + melt * 0.8;
    extra.snowL.material.alphaTest = snowAlphaTest;
    extra.snowR.material.alphaTest = clamp(snowAlphaTest + 0.1, 0, 1);
    const snowCap = layers.roof.children.find((child) => child.material === M.snowRoof);
    if (snowCap) {
      snowCap.visible = melt < 0.6;
    }
    // icicles: every instance is rescaled from its base matrix
    const icicles = extra.icicles,
      growth = clamp(S.icicles, 0, 1);
    icicles.visible = growth > 0.01;
    if (icicles.visible) {
      for (let i = 0; i < icicles.count; i++) {
        scratchMatrix.copy(icicles.userData.baseMatrices[i]);
        scratchMatrix.decompose(scratchPos, scratchQuat, scratchScale);
        scratchScale.y *= growth;
        scratchScale.x *= 0.5 + 0.5 * growth;
        scratchScale.z = scratchScale.x;
        scratchMatrix.compose(scratchPos, scratchQuat, scratchScale);
        icicles.setMatrixAt(i, scratchMatrix);
      }
      icicles.instanceMatrix.needsUpdate = true;
    }
    return roomsLit;
  }
  // public API
  return {
    house: house,
    layers: layers,
    sys: sys,
    windows: windows,
    ANCHORS: ANCHORS,
    edgeMat: edgeMat,
    extra: extra,
    update: update,
    box: box,
    rbox: rbox,
    cyl: cyl,
    system: system,
    wall: wall,
    windowUnit: windowUnit,
    setUV: setUV,
    v: v,
  };
}
