// Close-up set 1 of 6: the 200 A electrical service.
// Outside: the mast, weatherhead and meter on the back wall. Inside the basement: the panel on its plywood board with a main
// breaker, two bus bars, branch breakers, the 240 V loads that the load check switches on and off, the cables leaving for the
// house, and a receptacle whose aluminum wires are pigtailed to copper.
import * as THREE from "three";
import { lerp, smooth, clamp } from "../util.js";

// world position of the panel's board (front face of the plywood, centre of the enclosure)
const ORIGIN = new THREE.Vector3(2.8, -1.25, -3.945);
const PITCH = 0.0266;                        // one breaker space (about an inch)
const rowY = (row) => 0.3 - row * PITCH;

// what sits in each column, top to bottom: [amps, poles, key?, name?, tag?]
const LEFT = [[15, 1], [15, 1], [20, 1], [15, 1], [15, 1], [20, 1], [15, 1], [15, 1], [40, 2, "range", "RANGE"], [30, 2, "dryer", "DRYER"], [40, 2, "hp", "HEAT PUMP"], [30, 2, "base", "BASEBOARD"], [15, 1], [15, 1]];
const RIGHT = [[15, 1, null, null, "AFCI"], [15, 1, null, null, "AFCI"], [20, 1, null, null, "GFCI"], [20, 1], [15, 1], [15, 1], [20, 1], [15, 1], [30, 2, "wh", "WATER HTR"], [30, 2, "ac", "A/C"], [50, 2, "ev", "EV CHARGER"], [60, 2, "spa", "HOT TUB"], [40, 2, "suite", "SUITE"]];

/** The mast, weatherhead and meter on the back wall. Always in the scene: it is where the service drop from the lane lands. */
export function createService({ kit }) {
  const { box, cyl, tube, mats, atlas } = kit;
  const g = new THREE.Group();
  const X = 2.8, Z = -4.3;
  // mast and weatherhead
  cyl(0.034, 3.7, mats.galv, X, 3.6, Z, g);
  cyl(0.06, 0.16, mats.galv, X, 5.5, Z - 0.02, g, { r2: 0.03 });
  box(0.1, 0.05, 0.16, mats.galv, X, 5.44, Z - 0.05, g, { rot: [0.5, 0, 0] });
  [2.2, 3.4, 4.6].forEach((y) => box(0.12, 0.03, 0.2, mats.galv, X, y, Z + 0.1, g, { cast: false }));
  // meter socket, glass dome, dial
  box(0.3, 0.44, 0.12, mats.enclosure, X, 1.45, Z + 0.02, g, { r: 0.012 });
  cyl(0.092, 0.03, mats.galv, X, 1.5, Z - 0.05, g, { axis: "z", seg: 28 });
  cyl(0.085, 0.085, mats.glassClear, X, 1.5, Z - 0.1, g, { axis: "z", seg: 28, cast: false });
  cyl(0.074, 0.006, mats.whitePlastic, X, 1.5, Z - 0.075, g, { axis: "z", seg: 28, cast: false });
  const labels = atlas([{ key: "kwh", text: "08431", sub: "kWh · CL200 · 240 V", w: 192, h: 96, size: 46, color: "#0e1014" }], { width: 256, emissive: 0.15 });
  const dial = labels.plane("kwh", 0.1, g, X, 1.5, Z - 0.0795);
  dial.rotation.y = Math.PI;
  const disc = cyl(0.05, 0.002, mats.aluminum, X, 1.452, Z - 0.09, g, { seg: 24, cast: false, keep: true });
  // conduit from the meter down to the rim, an LB fitting, and in through the wall
  cyl(0.03, 1.02, mats.conduit, X, 0.72, Z, g);
  box(0.075, 0.13, 0.075, mats.conduit, X, 0.17, Z, g, { r: 0.012 });
  cyl(0.03, 0.34, mats.conduit, X, 0.15, Z + 0.17, g, { axis: "z" });
  // bare copper to the ground rod
  tube([[X + 0.11, 1.24, Z + 0.03], [X + 0.13, 0.6, Z + 0.06], [X + 0.14, 0.05, Z - 0.12], [X + 0.14, -0.25, Z - 0.16]], 0.006, mats.copper, g, { radial: 6 });
  cyl(0.011, 0.5, mats.copper, X + 0.14, -0.05, Z - 0.16, g, { seg: 8 });
  kit.bake(g);
  g.add(disc);
  return { group: g, disc, labels };
}

export function createPanelSet({ kit }) {
  const { box, cyl, tube, mats, flow, atlas, V } = kit;
  const group = new THREE.Group();
  group.position.copy(ORIGIN);
  const fixed = new THREE.Group();   // everything that never moves: baked into a few meshes at the end
  group.add(fixed);

  /* ---------------------------------------------------------------- labels */
  const cells = [];
  [15, 20, 30, 40, 50, 60].forEach((a) => cells.push({ key: "a" + a, text: String(a), w: 96, h: 56, size: 40, color: "#f4f1ea" }));
  cells.push({ key: "a200", text: "200", w: 144, h: 72, size: 56, color: "#f4f1ea" });
  [...LEFT, ...RIGHT].filter((c) => c[3]).forEach((c) => cells.push({ key: "n" + c[2], text: c[3], w: 224, h: 44, size: 26, color: "#f4bd7e" }));
  cells.push({ key: "AFCI", text: "AFCI", w: 112, h: 44, size: 26, color: "#9fc4ff" }, { key: "GFCI", text: "GFCI", w: 112, h: 44, size: 26, color: "#ffe08a" });
  cells.push({ key: "rating", text: "200 A · 120/240 V · 1Ø 3W", w: 420, h: 44, size: 24, color: "#cfd4da" });
  // the energy monitor's screen: demand in amps, the service size, and a bar that turns from green to amber to red
  cells.push({ key: "mon", w: 320, h: 200, text: "49 A", sub: "of a 100 A service", ratio: 0.49, draw(g, w, h, c) {
    g.fillStyle = "#05070b"; g.fillRect(0, 0, w, h);
    const tone = c.ratio > 0.9 ? "#ff6b4f" : c.ratio > 0.7 ? "#f4bd7e" : "#8fd3a6";
    g.textAlign = "left"; g.textBaseline = "middle";
    g.fillStyle = "#8b93a1"; g.font = "600 17px ui-monospace, Menlo, monospace"; g.fillText("DEMAND", 20, 30);
    g.fillStyle = tone; g.font = "700 74px ui-monospace, Menlo, monospace"; g.fillText(c.text, 18, 92);
    g.fillStyle = "#cfd4da"; g.font = "500 19px ui-monospace, Menlo, monospace"; g.fillText(c.sub, 20, 146);
    g.fillStyle = "#1c222c"; g.fillRect(20, 168, w - 40, 14);
    g.fillStyle = tone; g.fillRect(20, 168, (w - 40) * Math.min(1, c.ratio), 14);
  } });
  cells.push({ key: "dir", w: 300, h: 420, draw(g, w, h) {
    g.fillStyle = "#e9e4d6"; g.fillRect(0, 0, w, h);
    g.fillStyle = "#1a1c20"; g.font = "700 20px ui-monospace, Menlo, monospace"; g.textAlign = "left"; g.textBaseline = "middle";
    g.fillText("CIRCUIT DIRECTORY", 14, 24);
    g.strokeStyle = "rgba(20,22,26,.45)"; g.lineWidth = 1; g.font = "500 13px ui-monospace, Menlo, monospace";
    const rows = ["KITCHEN PLUGS", "BEDROOM 1 · AFCI", "BEDROOM 2 · AFCI", "BATH · GFCI", "LIVING", "FURNACE", "RANGE 40A", "DRYER 30A", "WATER HTR 30A", "A/C 30A", "EV CHARGER 50A", "HOT TUB 60A", "HEAT PUMP 40A", "SUITE 40A"];
    rows.forEach((r, i) => { const y = 54 + i * 25; g.beginPath(); g.moveTo(12, y + 12); g.lineTo(w - 12, y + 12); g.stroke(); g.fillText(String(i + 1).padStart(2, "0") + "  " + r, 14, y); });
  } });
  const L = atlas(cells, { width: 1024, emissive: 0.22 });

  /* ------------------------------------------------- board and enclosure */
  box(2.0, 1.9, 0.03, mats.plywood, 0.2, 0.1, -0.015, fixed, { uv: { ox: 1, oy: 1 } });
  box(2.3, 2.4, 0.1, mats.concrete, 0.2, 0.05, -0.085, fixed, { cast: false, uv: true });   // wall patch behind the board
  const EW = 0.4, EH = 1.0, ED = 0.1, t = 0.004;
  box(EW, EH, t, mats.enclosureDark, 0, 0, t / 2, fixed);
  box(t, EH, ED, mats.enclosure, -EW / 2, 0, ED / 2, fixed);
  box(t, EH, ED, mats.enclosure, EW / 2, 0, ED / 2, fixed);
  box(EW, t, ED, mats.enclosure, 0, EH / 2, ED / 2, fixed);
  box(EW, t, ED, mats.enclosure, 0, -EH / 2, ED / 2, fixed);
  // service conduit: down the wall from the rim into the top of the enclosure
  cyl(0.03, 0.92, mats.conduit, 0, EH / 2 + 0.46, 0.045, fixed);
  cyl(0.04, 0.03, mats.enclosure, 0, EH / 2 + 0.012, 0.045, fixed);

  /* ---------------------------------------------- main breaker and lugs */
  // energy monitor on the board beside the panel, with its lead into the enclosure
  box(0.19, 0.125, 0.026, mats.blackPlastic, 0.42, 0.3, 0.013, fixed, { r: 0.006 });
  const monitor = L.plane("mon", 0.168, group, 0.42, 0.3, 0.0268, { keep: true });
  tube([[0.325, 0.3, 0.012], [0.27, 0.31, 0.014], [0.215, 0.33, 0.03]], 0.004, mats.rubber, fixed, { radial: 6 });
  box(0.11, 0.075, 0.058, mats.blackPlastic, 0, 0.39, 0.035, fixed, { r: 0.004 });
  const mainHandle = box(0.034, 0.024, 0.022, kit.std(0x1d2025, 0.4, 0.1, { emissive: 0xf4bd7e, emissiveIntensity: 0.0 }), 0, 0.39, 0.072, group, { r: 0.003, keep: true });
  L.plane("a200", 0.05, fixed, 0, 0.365, 0.0646);
  [-0.03, 0.03].forEach((x) => box(0.022, 0.022, 0.03, mats.brass, x, 0.447, 0.03, fixed));
  // service conductors (two hots and the neutral) dropping out of the conduit onto the lugs
  [[-0.03, mats.rubber], [0.03, kit.std(0x8c1f1a, 0.6)], [0.085, mats.whitePlastic]].forEach(([x, m], i) =>
    tube([[i === 2 ? 0.02 : x * 0.4, 0.5, 0.045], [x * 0.8, 0.485, 0.04], [x, 0.46, 0.032]], 0.0075, m, fixed, { radial: 8, seg: 10 }));

  /* ----------------------------------------------------------- bus bars */
  const busMat = mats.copperHot.clone();
  const buses = [-0.012, 0.012].map((x) => box(0.016, 0.74, 0.005, busMat, x, -0.02, 0.012, group, { keep: true, cast: false }));
  [-0.03, 0.03].forEach((x, i) => box(0.016, 0.06, 0.005, busMat, x * 0.7, 0.36, 0.012, fixed, { cast: false }));

  /* ------------------------------------------------------------ breakers */
  const loads = {};                     // key -> { handle material, cable flow level, breaker position }
  const handleBase = mats.greyPlastic;
  const wireHot = mats.rubber, wireRed = kit.std(0x8c1f1a, 0.6), wireWhite = mats.whitePlastic;
  const column = (list, side) => {
    let row = 0;
    list.forEach(([amps, poles, key, name, tag]) => {
      const y = poles === 2 ? (rowY(row) + rowY(row + 1)) / 2 : rowY(row);
      const h = poles === 2 ? PITCH * 2 - 0.002 : PITCH - 0.002;
      const cx = side * 0.076;
      box(0.088, h, 0.055, mats.blackPlastic, cx, y, 0.0325, fixed, { r: 0.0025, cast: false });
      // handle (toward the centre), amp number, optional name or protection tag
      const hx = side * 0.047;
      let hm = handleBase;
      if (key) { hm = kit.std(0x4a4f57, 0.5, 0.05, { emissive: 0xffa53d, emissiveIntensity: 0 }); loads[key] = { handle: hm, level: null, pos: V(cx, y, 0.06), amps }; }
      box(0.015, poles === 2 ? h * 0.72 : 0.0125, 0.013, hm, hx, y, 0.0655, key ? group : fixed, { r: 0.002, cast: false, keep: !!key });
      L.plane("a" + amps, 0.02, fixed, side * 0.07, y + (poles === 2 ? 0.009 : 0), 0.0603);
      if (name) L.plane("n" + key, 0.05, fixed, side * 0.087, y - 0.011, 0.0603);
      if (tag) { L.plane(tag, 0.026, fixed, side * 0.099, y, 0.0603); box(0.007, 0.007, 0.004, tag === "AFCI" ? mats.bluePlastic : mats.yellowPlastic, side * 0.118, y, 0.062, fixed, { cast: false }); }
      // stab onto the bus (poles alternate between the two bars) and the wires out through the gutter to the top
      for (let p = 0; p < poles; p++) {
        const r = row + p, py = rowY(r);
        box(0.03, 0.007, 0.004, mats.copper, side * 0.024 + (r % 2 ? 0.012 : -0.012) * 0.3, py, 0.016, fixed, { cast: false });
        const gx = side * (0.146 + (r % 4) * 0.0045), gz = 0.026 + (r % 3) * 0.008;
        tube([[side * 0.121, py, 0.034], [side * 0.134, py + 0.002, gz + 0.004], [gx, py + 0.02, gz], [gx, 0.3 + (r % 5) * 0.01, gz], [side * (0.1 + (r % 6) * 0.012), 0.492, 0.03 + (r % 2) * 0.04]], 0.0023, poles === 2 && p === 1 ? wireRed : wireHot, fixed, { radial: 5, seg: 14, cast: false });
      }
      row += poles;
    });
  };
  column(LEFT, -1);
  column(RIGHT, 1);
  // neutral bars with their screws, the bonding strap between them, and white neutrals up the gutters
  [-1, 1].forEach((side) => {
    box(0.012, 0.52, 0.008, mats.aluminum, side * 0.176, -0.02, 0.012, fixed, { cast: false });
    for (let i = 0; i < 22; i++) cyl(0.0034, 0.004, mats.galv, side * 0.176, 0.22 - i * 0.0225, 0.018, fixed, { axis: "z", seg: 6, cast: false });
    for (let i = 0; i < 9; i++) { const y = 0.2 - i * 0.05; tube([[side * 0.176, y, 0.02], [side * 0.164, y + 0.03, 0.05 + (i % 3) * 0.008], [side * 0.162, 0.33, 0.055 + (i % 3) * 0.008], [side * (0.06 + i * 0.012), 0.492, 0.07]], 0.0023, wireWhite, fixed, { radial: 5, seg: 12, cast: false }); }
  });
  box(0.36, 0.01, 0.004, mats.aluminum, 0, -0.3, 0.008, fixed, { cast: false });
  // ground bar and the bare copper leaving the bottom for the water service
  box(0.18, 0.012, 0.008, mats.brass, -0.05, -0.43, 0.012, fixed, { cast: false });
  tube([[-0.1, -0.43, 0.02], [-0.13, -0.47, 0.04], [-0.13, -0.56, 0.04], [-0.2, -0.75, 0.012], [-0.7, -0.82, 0.008]], 0.004, mats.copper, fixed, { radial: 6 });

  /* -------------------------------------------------- deadfront and door */
  const cover = new THREE.Group(); cover.userData.keep = true; group.add(cover);
  const cz = 0.0585, cm = mats.enclosure;
  box(0.07, 0.98, 0.003, cm, -0.159, 0, cz, cover);
  box(0.07, 0.98, 0.003, cm, 0.159, 0, cz, cover);
  box(0.056, 0.66, 0.003, cm, 0, -0.02, cz, cover);                     // strip between the two columns
  box(0.248, 0.062, 0.003, cm, 0, 0.459, cz, cover);                    // above the main
  box(0.064, 0.094, 0.003, cm, -0.092, 0.381, cz, cover);               // either side of the main
  box(0.064, 0.094, 0.003, cm, 0.092, 0.381, cz, cover);
  box(0.248, 0.018, 0.003, cm, 0, 0.323, cz, cover);                    // between the main and the first row
  box(0.248, 0.292, 0.003, cm, 0, -0.344, cz, cover);                   // blank spaces at the bottom
  const rating = L.plane("rating", 0.2, cover, 0, 0.462, cz + 0.002);
  const door = new THREE.Group(); door.userData.keep = true; door.position.set(-EW / 2, 0, ED + 0.002); group.add(door);
  box(EW, EH, 0.003, mats.enclosure, EW / 2, 0, 0, door);
  const dir = L.plane("dir", 0.24, door, EW / 2, 0.02, -0.003); dir.rotation.y = Math.PI;
  box(0.012, 0.06, 0.012, mats.galv, EW - 0.02, 0, 0.006, door);
  door.rotation.y = -2.05;

  /* ------------------------------------------- cables leaving for the house */
  const jackets = { 15: mats.whitePlastic, 20: mats.yellowPlastic, 30: mats.orangePlastic, 40: mats.rubber, 50: mats.rubber, 60: mats.rubber };
  const branchFlow = { 15: flow(0xffc98a, { base: 0xb9b5ab, intensity: 0.7, dash: 2.2, speed: 0.9, rest: 0, gain: 1, roughness: 0.6 }), 20: flow(0xffb84f, { base: 0xc9a520, intensity: 0.7, dash: 2.2, speed: 0.9, rest: 0, gain: 1, roughness: 0.6 }) };
  const CEIL = 0.955;      // underside of the joists, in board coordinates
  let slot = 0;
  const run = (amps, key, dir) => {
    const i = slot++, kx = -0.17 + (i % 13) * 0.028, kz = 0.028 + (i % 2) * 0.042, r = amps >= 40 ? 0.0085 : amps === 30 ? 0.0065 : 0.0052;
    const up = [[kx, 0.5, kz], [kx, 0.66 + (i % 3) * 0.03, kz], [kx * 1.4, CEIL - 0.06, kz + 0.05], [kx * 1.6, CEIL, kz + 0.16 + (i % 4) * 0.03]];
    const lane = 0.3 + (i % 7) * 0.035;
    const out = dir === "south" ? [[-0.6, CEIL, lane], [-2.2, CEIL, lane], [-5.4, CEIL, lane + 0.2]]
      : dir === "north" ? [[0.6, CEIL, lane], [1.6, CEIL, lane], [2.1, CEIL, lane + 1.2], [2.1, CEIL, 5.5]]
      : dir === "east" ? [[kx * 1.2, CEIL, 0.9], [kx, CEIL, 3.2], [kx + 0.6, CEIL, 7.4]]
      : dir === "up" ? [[-0.42, CEIL + 0.1, 0.3], [-0.42, CEIL + 0.9, 0.34]]
      : [[0.5, CEIL, 0.2], [0.62, CEIL + 0.02, 0.02], [0.62, CEIL + 0.02, -0.4]];
    let mat = jackets[amps];
    if (key && loads[key]) { mat = flow(0xffa53d, { base: 0x17191d, intensity: 2.6, dash: 1.6, speed: 1.1, rest: 0.0, gain: 1, level: 0 }); loads[key].level = mat.userData.level; }
    else if (branchFlow[amps]) mat = branchFlow[amps];
    tube([...up, ...out], r, mat, fixed, { radial: 7, density: 9, tension: 0.35, cast: i % 3 === 0 });
  };
  const dirs = ["south", "north", "south", "east", "north", "south", "north", "south"];
  LEFT.filter((c) => !c[2]).forEach((c, i) => run(c[0], null, dirs[i % dirs.length]));
  RIGHT.filter((c) => !c[2]).forEach((c, i) => run(c[0], null, dirs[(i + 3) % dirs.length]));
  run(40, "range", "up"); run(30, "dryer", "south"); run(40, "hp", "south"); run(30, "base", "north");
  run(30, "wh", "south"); run(30, "ac", "out"); run(50, "ev", "east"); run(60, "spa", "out"); run(40, "suite", "north");
  // running board the cables are stapled to, and a few staples
  box(2.4, 0.02, 0.09, mats.studs, -0.4, CEIL + 0.012, 0.5, fixed, { uv: true, cast: false });

  /* ------------------------------------- receptacle with aluminum pigtails */
  const R = V(0.72, -0.2, 0);
  box(0.06, 0.098, 0.062, mats.bluePlastic, R.x, R.y, 0.031, fixed, { r: 0.004 });
  const recep = new THREE.Group(); recep.position.set(R.x + 0.012, R.y - 0.004, 0.118); recep.rotation.set(0.12, -0.5, 0.06); recep.userData.keep = true; group.add(recep);
  box(0.034, 0.104, 0.024, mats.whitePlastic, 0, 0, 0, recep, { r: 0.004 });
  box(0.04, 0.118, 0.0016, mats.galv, 0, 0, 0.0128, recep);
  [0.028, -0.028].forEach((y) => { box(0.004, 0.011, 0.002, mats.rubber, -0.006, y, 0.0125, recep, { cast: false }); box(0.004, 0.011, 0.002, mats.rubber, 0.006, y, 0.0125, recep, { cast: false }); });
  [0.012, -0.012].forEach((y) => { cyl(0.0035, 0.004, mats.brass, 0.0185, y, -0.004, recep, { axis: "x", seg: 8 }); cyl(0.0035, 0.004, mats.aluminum, -0.0185, y, -0.004, recep, { axis: "x", seg: 8 }); });
  // old cable in from above, its two aluminum conductors, the purple connectors, the copper pigtails to the screws
  tube([[R.x - 0.01, 0.62, 0.012], [R.x - 0.012, 0.2, 0.014], [R.x - 0.008, R.y + 0.05, 0.02]], 0.0058, mats.greyPlastic, fixed, { radial: 7 });
  const conn = [];
  [[-1, mats.aluminum], [1, mats.aluminum]].forEach(([s, m]) => {
    const cxn = V(R.x + s * 0.03, R.y + 0.012 * s + 0.02, 0.085 + (s > 0 ? 0.012 : 0));
    tube([[R.x - 0.008 + s * 0.004, R.y + 0.045, 0.022], [R.x + s * 0.02, R.y + 0.05, 0.05], [cxn.x, cxn.y + 0.016, cxn.z]], 0.0019, m, fixed, { radial: 6, seg: 12, cast: false });
    const c = cyl(0.0078, 0.027, mats.purple, cxn.x, cxn.y, cxn.z, group, { seg: 12, keep: true }); conn.push(c);
    cyl(0.0086, 0.006, mats.purple, cxn.x, cxn.y + 0.0135, cxn.z, fixed, { seg: 12 });
    tube([[cxn.x, cxn.y + 0.014, cxn.z], [cxn.x + s * 0.012, cxn.y + 0.03, cxn.z + 0.012], [R.x + 0.012 + s * 0.026, R.y + 0.006 * s, 0.1], [R.x + 0.012 + s * 0.02, R.y - 0.004 + 0.012 * s, 0.112]], 0.0017, mats.copper, fixed, { radial: 6, seg: 14, cast: false });
  });

  kit.bake(fixed);

  /* --------------------------------------------------------------- state */
  const anchors = {
    meter: V(2.8, 1.5, -4.42), main: ORIGIN.clone().add(V(0, 0.39, 0.075)), bus: ORIGIN.clone().add(V(0, -0.06, 0.02)), branch: ORIGIN.clone().add(V(-0.076, rowY(3), 0.06)),
    range: ORIGIN.clone().add(loads.range.pos), ev: ORIGIN.clone().add(loads.ev.pos), spa: ORIGIN.clone().add(loads.spa.pos),
    alu: ORIGIN.clone().add(V(R.x + 0.03, R.y + 0.03, 0.09)), afci: ORIGIN.clone().add(V(0.099, rowY(0.5), 0.06)), load: ORIGIN.clone().add(V(0.33, 0.35, 0.03))
  };
  // camera for each step: outside at the mast, in at the meter, through the wall to the panel, then around it
  const P = { fx: 2.8, fz: -3.9, time: 19.4, cut: 0, ghost: 0, ground: 1, orbit: 0.012 };
  const shots = [
    { ...P, radius: 15, theta: 3.42, phi: 1.4, ty: 2.8, fz: -4.2, dof: 0, orbit: 0.03, time: 15.5 },
    { ...P, radius: 3.4, theta: 3.5, phi: 1.72, ty: 1.95, fz: -4.35, dof: 0.8, time: 15.5 },
    { ...P, radius: 1.5, theta: 0.3, phi: 1.44, ty: -1.0, dof: 1.2 },
    { ...P, radius: 1.45, theta: -0.28, phi: 1.47, ty: -1.24, dof: 1.3 },
    { ...P, radius: 1.75, theta: 0.34, phi: 1.74, ty: -0.98, fz: -3.8, dof: 1.1 },
    { ...P, radius: 1.15, theta: 1.0, phi: 1.5, ty: -1.3, fx: 3.45, dof: 1.0 },
    { ...P, radius: 1.85, theta: 0.2, phi: 1.6, ty: -0.98, fx: 3.0, fz: -3.8, dof: 1.0 }
  ];
  let on = new Set(["range", "dryer", "ac"]);
  let shown = "";
  let coverK = 0;
  const big = ["range", "ev", "spa"];
  return {
    name: "panel", group, anchors, shots,
    hides: (H) => H.sys.electrical ? H.sys.electrical.meshes : [],
    /** { on: [load keys], amps, service } from the load check on the page */
    input(data) {
      if (!data) return;
      if (data.on) on = new Set(data.on);
      if (data.amps !== undefined && data.service) {
        const text = `${Math.round(data.amps)} A`, sub = `of a ${data.service} A service`;
        if (text + sub !== shown) { shown = text + sub; L.set("mon", text, sub, { ratio: data.amps / data.service }); }
      }
    },
    /** where the work light stands for each step (world coordinates) */
    light(step) {
      if (step === 0) return { pos: [2.2, 3.4, -7.4], at: [2.8, 1.6, -4.3], power: 0 };
      if (step === 1) return { pos: [2.2, 3.4, -7.4], at: [2.8, 1.6, -4.3], power: 0.55, fill: 0.3 };
      if (step === 5) return { pos: [2.9, -0.45, -2.2], at: [3.52, -1.45, -3.9], power: 0.8 };
      return { pos: [1.5, -0.5, -1.7], at: [2.8, -1.2, -3.9], power: 1 };
    },
    update({ step, k, t, dt, snap }) {
      const ease = snap ? 1 : 1 - Math.exp(-dt * 5);
      // the deadfront comes off for the bus bars and the big loads, and goes back on for the inspection and the load check
      coverK = lerp(coverK, step === 3 || step === 4 ? 1 : 0, ease);
      const c = smooth(0, 1, coverK);
      cover.position.set(0.52 * c, -0.99 * c, 0.2 * Math.sin(Math.PI * c) + 0.075 * c);
      cover.rotation.set(-0.13 * c, 0, -0.05 * c);
      busMat.emissiveIntensity = 0.08 + 0.26 * c + (step === 3 ? 0.12 * Math.sin(t * 2.2) : 0);
      mainHandle.material.emissiveIntensity = step === 2 ? 0.4 + 0.2 * Math.sin(t * 3) : 0.06;
      // branch circuits pulse while they are the subject
      const branchLevel = step === 3 ? 1 : step === 6 ? 0.35 : 0.12;
      Object.values(branchFlow).forEach((m) => { m.userData.level.value = lerp(m.userData.level.value, branchLevel, ease); });
      // the 240 V loads: all three big ones in their step, the switched-on ones in the load check
      Object.entries(loads).forEach(([key, ld]) => {
        const want = step === 4 ? (big.includes(key) ? 1 : 0) : step === 6 ? (on.has(key) ? 1 : 0) : 0;
        if (ld.level) ld.level.value = lerp(ld.level.value, want, ease);
        ld.handle.emissiveIntensity = lerp(ld.handle.emissiveIntensity, want * 2.4, ease);
      });
      conn.forEach((cm, i) => { cm.scale.setScalar(step === 5 ? 1 + 0.08 * Math.sin(t * 4 + i) : 1); });
      rating.visible = c < 0.9;
      void k; void monitor;
    }
  };
}
