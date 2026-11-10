// Close-up set 6 of 6: twenty-five years of one mechanical room.
// The south-west corner of the basement: a condensing furnace on its pad with filter base, return drop, plenum and supply
// trunk, PVC venting and a black-iron gas line; the 189 L tank water heater beside it; a finished stud wall with the
// thermostat. Each step of the chapter adds or takes away what that year brought: the crate on install day, the filter
// swap and duct cleaning, the heat pump coil and its outdoor unit, the leaking tank and the tankless that replaces it, the
// old tank leaving on a hand truck, and the selective demolition that turns the basement into a suite.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { lerp, smooth, clamp } from "../util.js";

const FX = -3.3, FZ = -2.6;          // furnace centre (plan)
const SLAB = -2.8;                   // top of the basement slab
const CAB0 = -2.51, CAB1 = -1.39;    // furnace cabinet bottom and top
const FRONT = FZ + 0.37;             // front face of the cabinet (+z)
const WALLX = -4.9;                  // face of the stud wall on the south foundation wall
const TOP = -0.26;                   // underside of the top plate (just below the joists)
const GX = -2.75, GY = -0.6;         // the gas main runs along z under the trunk
const YEARS = [0, 1, 12, 18, 22, 25];
const VERBS = ["INSTALL", "MAINTAIN", "UPGRADE", "REPLACE", "REMOVE", "DEMOLISH"];
// furnace service record: [year, entry]
const LOG = [[0, "INSTALLED · PERMIT"], [1, "FILTER · TUNE-UP"], [3, "FILTER · TUNE-UP"], [5, "DUCTS CLEANED"], [8, "IGNITER"], [11, "FILTER · TUNE-UP"],
  [12, "HEAT PUMP COIL"], [15, "TUNE-UP"], [18, "FILTER · TUNE-UP"], [20, "BLOWER MOTOR"], [24, "TUNE-UP"]];
const PHN = 12;                      // most phases a set of merged meshes can carry

export function createCycleSet({ kit, tier }) {
  const { box, cyl, tube, mats, atlas, V, std } = kit;
  const group = new THREE.Group();
  const fixed = new THREE.Group();
  group.add(fixed);

  /* ------------------------------------------------------------ materials */
  const enamel = std(0x948f86, 0.42, 0.3, { envMapIntensity: 0.8 });
  const tankMat = std(0x66808f, 0.42, 0.3, { envMapIntensity: 0.8 });
  const drywall = std(0xa6a297, 0.93, 0);
  const wood = std(0xc4a272, 0.82, 0);
  const cardboard = std(0x8f7148, 0.95, 0);
  const rust = std(0x6e3416, 0.95, 0.15);
  const snow = std(0xd3dbe4, 0.88, 0);
  const unitMat = std(0x51575e, 0.5, 0.45, { envMapIntensity: 0.8 });
  const dollyMat = std(0x8e2a22, 0.45, 0.5);
  const binMat = std(0x2c3833, 0.6, 0.05);
  const burner = std(0x140a04, 0.4, 0, { emissive: 0xff8a3a, emissiveIntensity: 1.4 });
  const ledMat = mats.led(0x8fd3a6, 2);
  const dark = mats.castIron, galv = mats.galv, white = mats.pvc, copper = mats.copper, yellow = mats.yellowPlastic;

  /* --------------------------------------------------------------- labels */
  const mono = "ui-monospace, Menlo, Consolas, monospace";
  const pleats = (dirty) => (g, w, h) => {
    g.fillStyle = dirty ? "#5f574b" : "#a9a08a"; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 8) { g.fillStyle = dirty ? "rgba(30,26,20,.55)" : "rgba(120,110,90,.45)"; g.fillRect(x, 0, 3, h); }
    if (dirty) for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(40,34,26,${0.15 + (i % 5) * 0.06})`; g.fillRect((i * 37) % w, (i * 53) % h, 6 + (i % 4) * 3, 4 + (i % 3) * 3); }
    g.fillStyle = dirty ? "#6e5a3c" : "#9a7a4c"; g.fillRect(0, 0, w, 6); g.fillRect(0, h - 6, w, 6); g.fillRect(0, 0, 6, h); g.fillRect(w - 6, 0, 6, h);
  };
  const cells = [
    { key: "afue", text: "96% AFUE", sub: "60 000 BTU/h · NAT GAS", w: 256, h: 72, size: 32, color: "#1b1d21", bg: "#c9c3b2" },
    { key: "permit", w: 128, h: 220, draw(g, w, h) {
      g.fillStyle = "#e08a2c"; g.beginPath(); g.moveTo(0, 22); g.lineTo(22, 0); g.lineTo(w - 22, 0); g.lineTo(w, 22); g.lineTo(w, h); g.lineTo(0, h); g.fill();
      g.fillStyle = "#14161a"; g.beginPath(); g.arc(w / 2, 20, 8, 0, 6.3); g.fill();
      g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#1a1308";
      g.font = `700 22px ${mono}`; g.fillText("GAS", w / 2, 58); g.fillText("PERMIT", w / 2, 84);
      g.font = `500 15px ${mono}`; g.fillText("INSPECTED", w / 2, 122); g.fillText("YEAR 0", w / 2, 144);
      g.strokeStyle = "#1a1308"; g.lineWidth = 2; g.strokeRect(14, 166, w - 28, 36); g.font = `700 18px ${mono}`; g.fillText("PASS", w / 2, 185);
    } },
    { key: "crate", text: "UPFLOW FURNACE", sub: "THIS SIDE UP · 52 kg", w: 320, h: 72, size: 30, color: "#2a1d0e" },
    { key: "svc", w: 256, h: 384, year: 0, draw(g, w, h, c) {
      g.fillStyle = "#d8d1bd"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#24262b"; g.fillRect(0, 0, w, 44);
      g.fillStyle = "#e9e3d3"; g.textAlign = "left"; g.textBaseline = "middle"; g.font = `700 20px ${mono}`; g.fillText("SERVICE RECORD", 12, 23);
      g.font = `500 15px ${mono}`;
      LOG.forEach(([y, s], i) => {
        const ty = 66 + i * 28;
        g.strokeStyle = "rgba(20,22,26,.3)"; g.beginPath(); g.moveTo(10, ty + 13); g.lineTo(w - 10, ty + 13); g.stroke();
        if (y > c.year) return;
        g.fillStyle = "#2b3a66"; g.fillText(("YR " + y).padEnd(6) + s, 12, ty);
      });
    } },
    { key: "cal", w: 200, h: 248, year: 0, verb: "INSTALL", draw(g, w, h, c) {
      g.fillStyle = "#cdc6b3"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#a8322a"; g.fillRect(0, 0, w, 54);
      g.fillStyle = "#1a1c20"; [40, 100, 160].forEach((x) => { g.beginPath(); g.arc(x, 8, 6, 0, 6.3); g.fill(); });
      g.textAlign = "center"; g.textBaseline = "middle";
      g.fillStyle = "#f1e6d6"; g.font = `700 24px ${mono}`; g.fillText("YEAR", w / 2, 33);
      g.fillStyle = "#16181c"; g.font = `700 112px ${mono}`; g.fillText(String(c.year), w / 2, 140);
      g.fillStyle = "#5a3a1c"; g.font = `700 22px ${mono}`; g.fillText(c.verb, w / 2, 222);
    } },
    { key: "tstat", w: 192, h: 192, draw(g, w, h) {
      g.fillStyle = "#05070b"; g.beginPath(); g.arc(w / 2, h / 2, w / 2 - 2, 0, 6.3); g.fill();
      g.strokeStyle = "#8fd3a6"; g.lineWidth = 6; g.beginPath(); g.arc(w / 2, h / 2, w / 2 - 14, 2.3, 2.3 + 3.4); g.stroke();
      g.textAlign = "center"; g.textBaseline = "middle";
      g.fillStyle = "#eef2f0"; g.font = `600 58px ${mono}`; g.fillText("21°", w / 2 + 4, h / 2 - 6);
      g.fillStyle = "#8fd3a6"; g.font = `600 15px ${mono}`; g.fillText("HEAT PUMP", w / 2, h / 2 + 36);
      g.fillStyle = "#8b93a1"; g.font = `500 13px ${mono}`; g.fillText("OUT −18°", w / 2, h / 2 + 58);
    } },
    { key: "coil", text: "HEAT PUMP COIL", sub: "CASED · 3 TON", w: 256, h: 64, size: 26, color: "#e3ddd0" },
    { key: "odu", text: "COLD CLIMATE", sub: "HEATS TO −30 °C", w: 256, h: 64, size: 26, color: "#e3ddd0" },
    { key: "tank", text: "189 L", sub: "GAS · 40 000 BTU/h", w: 192, h: 96, size: 42, color: "#e9e6de" },
    { key: "tkl", w: 128, h: 72, draw(g, w, h) {
      g.fillStyle = "#05070b"; g.fillRect(0, 0, w, h);
      g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#7fc4ff"; g.font = `700 34px ${mono}`; g.fillText("49°C", w / 2, h / 2 - 6);
      g.fillStyle = "#8fd3a6"; g.font = `500 12px ${mono}`; g.fillText("ON DEMAND", w / 2, h - 12);
    } },
    { key: "capped", w: 112, h: 176, draw(g, w, h) {
      g.fillStyle = "#c23a2b"; g.fillRect(0, 14, w, h - 14); g.beginPath(); g.moveTo(0, 14); g.lineTo(w / 2, 0); g.lineTo(w, 14); g.fill();
      g.fillStyle = "#14161a"; g.beginPath(); g.arc(w / 2, 20, 7, 0, 6.3); g.fill();
      g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#f6eee4";
      g.font = `700 21px ${mono}`; g.fillText("CAPPED", w / 2, 64);
      g.font = `500 13px ${mono}`; g.fillText("GAS OFF", w / 2, 98); g.fillText("DO NOT", w / 2, 124); g.fillText("OPEN", w / 2, 142);
    } },
    { key: "suite", w: 256, h: 320, draw(g, w, h) {
      g.fillStyle = "#c9c4b4"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#1a1c20"; g.textAlign = "left"; g.textBaseline = "middle"; g.font = `700 21px ${mono}`;
      g.fillText("SECONDARY SUITE", 12, 24); g.font = `500 14px ${mono}`; g.fillText("BUILDING PERMIT · YR 25", 12, 48);
      g.strokeStyle = "#2b3a66"; g.lineWidth = 3; g.strokeRect(20, 70, w - 40, 170);
      g.beginPath(); g.moveTo(20, 150); g.lineTo(130, 150); g.moveTo(130, 70); g.lineTo(130, 240); g.stroke();
      g.lineWidth = 1.5; g.beginPath(); g.arc(130, 196, 34, Math.PI, Math.PI * 1.5); g.stroke();
      g.fillStyle = "#2b3a66"; g.font = `600 13px ${mono}`; g.fillText("MECH", 40, 110); g.fillText("BEDROOM", 148, 110); g.fillText("BATH", 40, 196); g.fillText("LIVING", 148, 196);
      g.fillStyle = "#1a1c20"; g.font = `500 13px ${mono}`; g.fillText("MECH ROOM: TYPE X", 12, 268); g.fillText("BOTH SIDES · 30 MIN", 12, 290);
    } },
    { key: "disc", text: "HEAT PUMP", w: 128, h: 32, size: 18, color: "#e3ddd0" },
    { key: "bin", text: "DRYWALL ONLY", w: 192, h: 40, size: 22, color: "#e3ddd0" },
    { key: "pleatOld", w: 96, h: 128, draw: pleats(true) },
    { key: "pleatNew", w: 96, h: 128, draw: pleats(false) }
  ];
  const L = atlas(cells, { width: 1024, emissive: 0.22 });

  /* -------------------------------------------------------------- helpers */
  const _up = V(0, 1, 0), _d = V(0, 0, 0);
  /** one shadow setting per material, so that baking makes one mesh per material */
  const bake = (g) => {
    const cast = new Map();
    g.traverse((o) => { if (o.isMesh) cast.set(o.material, (cast.get(o.material) || false) || o.castShadow); });
    g.traverse((o) => { if (o.isMesh && !o.userData.keep) { o.castShadow = cast.get(o.material); o.receiveShadow = true; } });
    return kit.bake(g);
  };
  /** straight pipe through points with a collar at every bend: { fit: collar radius factor (0 = none), ends: couplings } */
  const pipe = (pts, r, mat, parent, o = {}) => {
    const P = pts.map((p) => V(p[0], p[1], p[2]));
    const fk = o.fit ?? 1.35, seg = o.seg || 10, cast = o.cast !== false;
    const piece = (a, b, rr) => {
      const len = a.distanceTo(b); if (len < 1e-4) return;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, len, seg), mat);
      m.position.copy(a).add(b).multiplyScalar(0.5);
      m.quaternion.setFromUnitVectors(_up, _d.subVectors(b, a).normalize());
      m.castShadow = cast; m.receiveShadow = true; parent.add(m);
    };
    for (let i = 0; i < P.length - 1; i++) {
      piece(P[i], P[i + 1], r);
      if (i > 0 && fk) { const a = P[i]; [P[i - 1], P[i + 1]].forEach((q) => { _d.subVectors(q, a).normalize(); piece(a.clone(), a.clone().addScaledVector(_d, r * 2.2), r * fk); }); }
    }
  };

  /* Phases: the things that come and go. Every phase is built in house coordinates into its own group; at the end all of
     them are merged into one mesh per material, each vertex tagged with its phase, and the vertex shader scales a phase
     about its pivot (to nothing when it is away). One draw object per material however many phases there are. */
  const phP = { value: Array.from({ length: PHN }, () => V(0, 0, 0)) };
  const phS = { value: Array.from({ length: PHN }, () => V(0, 0, 0)) };
  const inject = (sh) => {
    sh.uniforms.uPhP = phP; sh.uniforms.uPhS = phS;
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", `#include <common>\nattribute float aPh; uniform vec3 uPhP[${PHN}]; uniform vec3 uPhS[${PHN}];`)
      .replace("#include <begin_vertex>", "#include <begin_vertex>\n{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }");
  };
  const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depthMat.onBeforeCompile = inject; depthMat.customProgramCacheKey = () => "cyclePhDepth";
  const phases = [];
  /** mode: "s" uniform scale, "y" grows upward, "xz" spreads, "pop" switches */
  const phase = (name, pivot, mode = "s") => {
    const g = new THREE.Group(); g.name = name; group.add(g);
    const ph = { g, i: phases.length, pivot: pivot.clone(), mode, k: 0 };
    phP.value[ph.i].copy(pivot);
    phases.push(ph);
    return ph;
  };
  const mergePhases = () => {
    group.updateWorldMatrix(true, true);
    const inv = new THREE.Matrix4().copy(group.matrixWorld).invert(), m4 = new THREE.Matrix4();
    const buckets = new Map();
    phases.forEach((ph) => ph.g.traverse((o) => {
      if (!o.isMesh) return;
      const key = o.material.uuid + "|" + o.renderOrder;
      let b = buckets.get(key); if (!b) buckets.set(key, (b = { mat: o.material, cast: false, ro: o.renderOrder, geos: [] }));
      b.cast = b.cast || o.castShadow;
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      Object.keys(g.attributes).forEach((k) => { if (k !== "position" && k !== "normal" && k !== "uv") g.deleteAttribute(k); });
      if (!g.attributes.uv) g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      g.applyMatrix4(m4.multiplyMatrices(inv, o.matrixWorld));
      g.setAttribute("aPh", new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(ph.i), 1));
      b.geos.push(g);
    }));
    phases.forEach((ph) => { ph.g.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); group.remove(ph.g); });
    buckets.forEach((b) => {
      const geo = mergeGeometries(b.geos); b.geos.forEach((x) => x.dispose()); if (!geo) return;
      const mat = b.mat.clone(); mat.onBeforeCompile = inject; mat.customProgramCacheKey = () => "cyclePh";
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = b.cast; mesh.receiveShadow = true; mesh.renderOrder = b.ro; mesh.frustumCulled = false;
      if (b.cast) mesh.customDepthMaterial = depthMat;
      // the ambient occlusion pass draws with its own material, which knows nothing of the phases
      mesh.userData.keep = true; mesh.userData.noAO = true;
      group.add(mesh);
    });
  };
  const show = (ph, want, ease) => {
    ph.k = lerp(ph.k, want, ease);
    if (Math.abs(ph.k - want) < 0.002) ph.k = want;
    const e = ph.mode === "pop" ? (ph.k > 0.5 ? 1 : 0) : smooth(0, 1, ph.k);
    const s = phS.value[ph.i];
    if (ph.mode === "y") s.set(1, e, 1); else if (ph.mode === "xz") s.set(e, 1, e); else s.setScalar(e);
    if (e < 0.001) s.setScalar(0);
    return e;
  };

  /* ----------------------------------------------- basement fit-out (fixed) */
  // floor drain beside the furnace
  cyl(0.085, 0.012, galv, -2.7, SLAB + 0.004, -1.85, fixed, { seg: 20, cast: false });
  cyl(0.068, 0.014, dark, -2.7, SLAB + 0.005, -1.85, fixed, { seg: 20, cast: false });
  for (let i = -2; i <= 2; i++) box(0.11 - Math.abs(i) * 0.02, 0.006, 0.008, galv, -2.7, SLAB + 0.012, -1.85 + i * 0.022, fixed, { cast: false });

  // stud wall on the south foundation wall: plates, studs, batts in the bays the demolition opens, two sheets that stay
  const Z0 = -3.95, Z1 = 0.9;
  box(0.089, 0.038, Z1 - Z0, wood, WALLX - 0.045, SLAB + 0.019, (Z0 + Z1) / 2, fixed, { cast: false });
  box(0.089, 0.038, Z1 - Z0, wood, WALLX - 0.045, TOP - 0.019, (Z0 + Z1) / 2, fixed, { cast: false });
  for (let z = Z0 + 0.02; z <= Z1; z += 0.406) box(0.089, TOP - SLAB - 0.076, 0.038, wood, WALLX - 0.045, (SLAB + TOP) / 2, Math.min(z, Z1 - 0.02), fixed, { cast: false });
  for (let i = 0; i < 6; i++) {
    if (i === 2 || i === 4) continue;
    box(0.08, TOP - SLAB - 0.09, 0.36, mats.insulPink, WALLX - 0.05, (SLAB + TOP) / 2, -1.48 + 0.019 + i * 0.406 + 0.203, fixed, { cast: false });
  }
  const sheet = (z0, z1, parent) => {
    box(0.0127, TOP - SLAB - 0.01, z1 - z0 - 0.003, drywall, WALLX + 0.0064, (SLAB + TOP) / 2, (z0 + z1) / 2, parent);
    box(0.012, 0.08, z1 - z0, white, WALLX + 0.019, SLAB + 0.04, (z0 + z1) / 2, parent, { cast: false });   // baseboard
  };
  sheet(Z0, -2.7, fixed); sheet(-2.7, -1.48, fixed);

  /* ------------------------------------------------------------- furnace */
  box(0.68, 0.05, 0.88, dark, FX, SLAB + 0.025, FZ, fixed);                                      // equipment pad
  // filter base (the return comes in from the side), the slot the filter slides through, and the return drop
  box(0.56, 0.24, 0.74, galv, FX, (SLAB + 0.05 + CAB0) / 2, FZ, fixed);
  box(0.52, 0.036, 0.012, dark, FX, -2.56, FRONT - 0.004, fixed, { cast: false });
  box(0.56, 0.012, 0.02, galv, FX, -2.535, FRONT + 0.008, fixed, { cast: false });
  box(0.3, -0.25 - (SLAB + 0.05), 0.6, galv, FX - 0.43, (-0.25 + SLAB + 0.05) / 2, FZ, fixed);
  [-2.2, -1.6, -1.0, -0.5].forEach((y) => box(0.304, 0.012, 0.604, galv, FX - 0.43, y, FZ, fixed, { cast: false }));   // seams
  // cabinet: enamel shell, two doors, louvres, the burner sight glass, the status light and the rating sticker
  box(0.56, CAB1 - CAB0, 0.74, enamel, FX, (CAB0 + CAB1) / 2, FZ, fixed, { r: 0.008 });
  box(0.54, 0.52, 0.008, mats.enclosure, FX, -1.67, FRONT + 0.004, fixed, { r: 0.003 });
  box(0.54, 0.54, 0.008, mats.enclosure, FX, -2.225, FRONT + 0.004, fixed, { r: 0.003 });
  for (let i = 0; i < 6; i++) box(0.3, 0.011, 0.006, dark, FX - 0.05, -1.47 - i * 0.026, FRONT + 0.008, fixed, { cast: false });
  for (let i = 0; i < 4; i++) box(0.3, 0.011, 0.006, dark, FX - 0.05, -2.41 - i * 0.022, FRONT + 0.008, fixed, { cast: false });
  [-1.43, -1.99].forEach((y) => box(0.09, 0.016, 0.01, dark, FX + 0.17, y, FRONT + 0.011, fixed, { cast: false }));   // door pulls
  box(0.09, 0.06, 0.006, dark, FX + 0.15, -1.72, FRONT + 0.009, fixed, { cast: false });
  const flame = box(0.064, 0.036, 0.004, burner, FX + 0.15, -1.72, FRONT + 0.012, group, { cast: false, keep: true });
  const led = box(0.012, 0.012, 0.004, ledMat, FX + 0.2, -2.08, FRONT + 0.01, group, { cast: false, keep: true });
  box(0.04, 0.024, 0.004, dark, FX + 0.2, -2.08, FRONT + 0.0085, fixed, { cast: false });
  L.plane("afue", 0.15, fixed, FX - 0.1, -1.78, FRONT + 0.0095);
  L.plane("svc", 0.13, fixed, FX + 0.2805, -1.95, FZ + 0.1).rotation.y = Math.PI / 2;
  box(0.004, 0.012, 0.03, dark, FX + 0.283, -1.85, FZ + 0.1, fixed, { cast: false });
  // condensate tube from the cabinet to the floor drain
  tube([[FX + 0.24, -2.45, FRONT + 0.01], [FX + 0.3, -2.62, FRONT + 0.08], [-2.85, SLAB + 0.02, -2.05], [-2.72, SLAB + 0.02, -1.88]], 0.008, white, fixed, { radial: 6, cast: false });
  // plenum and the supply trunk, with drive cleats, strap hangers, a round takeoff and the trunk register
  box(0.56, -0.25 - CAB1, 0.74, galv, FX, (CAB1 - 0.25) / 2, FZ, fixed);
  box(0.57, 0.02, 0.75, galv, FX, CAB1 + 0.01, FZ, fixed, { cast: false });
  const T0 = FX + 0.28, T1 = 1.4;
  box(T1 - T0, 0.25, 0.5, galv, (T0 + T1) / 2, -0.375, FZ, fixed);
  for (let x = T0 + 1.2; x < T1; x += 1.5) box(0.02, 0.258, 0.508, galv, x, -0.375, FZ, fixed, { cast: false });
  for (let x = T0 + 0.6; x < T1; x += 1.2) [-1, 1].forEach((s) => box(0.025, 0.27, 0.003, galv, x, -0.37, FZ + s * 0.253, fixed, { cast: false }));
  cyl(0.065, 0.24, galv, -1.5, -0.375, FZ + 0.37, fixed, { axis: "z", seg: 16 });
  cyl(0.065, 0.42, galv, -1.5, -0.27, FZ + 0.49, fixed, { seg: 16 });
  cyl(0.07, 0.03, galv, -1.5, -0.375, FZ + 0.26, fixed, { axis: "z", seg: 16, cast: false });
  const REG = V(-2.3, -0.375, FZ + 0.25);
  box(0.27, 0.12, 0.012, white, REG.x, REG.y, REG.z + 0.006, fixed, { cast: false });
  for (let i = 0; i < 7; i++) box(0.012, 0.09, 0.006, dark, REG.x - 0.105 + i * 0.035, REG.y, REG.z + 0.014, fixed, { cast: false });
  // service switch on the plenum and its armoured cable up to the joists
  box(0.05, 0.12, 0.075, mats.enclosure, FX + 0.305, -0.85, FZ + 0.2, fixed);
  box(0.006, 0.1, 0.06, white, FX + 0.333, -0.85, FZ + 0.2, fixed, { cast: false });
  box(0.01, 0.025, 0.012, dark, FX + 0.338, -0.85, FZ + 0.2, fixed, { cast: false });
  cyl(0.008, 0.55, galv, FX + 0.305, -0.52, FZ + 0.2, fixed, { seg: 6, cast: false });
  // condensing furnace venting: two PVC pipes out of the back, up into the joist bay and out through the rim
  [-3.45, -3.22].forEach((x, i) => {
    pipe([[x, -1.62, FZ - 0.37], [x, -1.62, -3.2], [x, -0.1 + i * 0.02, -3.2], [x, -0.1 + i * 0.02, -3.85], [x, 0.14, -3.85], [x, 0.14, -4.4]], 0.04, white, fixed, { fit: 1.2, seg: 14 });
    cyl(0.048, 0.06, white, x, 0.14, -4.42, fixed, { axis: "z", seg: 14 });
    box(0.025, 0.2, 0.003, galv, x, -0.2, -3.4, fixed, { cast: false });   // pipe strap
  });

  /* ------------------------------------------------------------- gas line */
  pipe([[GX, GY, 1.2], [GX, GY, -3.5]], 0.017, dark, fixed, { fit: 0 });
  [0.6, -0.6, -1.8, -3.1].forEach((z) => box(0.02, -0.25 - GY, 0.004, galv, GX, (GY - 0.25) / 2 + 0.01, z, fixed, { cast: false }));
  cyl(0.024, 0.06, dark, GX, GY, -3.5, fixed, { axis: "z", seg: 10 });   // cap at the end of the main
  // furnace drop: tee, union, shut-off, drip leg, nipple into the cabinet
  pipe([[GX, GY, -2.3], [GX, -1.72, -2.3], [FX + 0.28, -1.72, -2.3]], 0.017, dark, fixed);
  pipe([[GX, -1.72, -2.3], [GX, -1.95, -2.3]], 0.017, dark, fixed, { fit: 0 });
  cyl(0.025, 0.04, dark, GX, -1.965, -2.3, fixed, { seg: 10 });
  cyl(0.024, 0.06, dark, GX, -1.72, -2.3, fixed, { seg: 10 });
  cyl(0.024, 0.06, dark, GX, GY, -2.3, fixed, { axis: "z", seg: 10 });
  cyl(0.029, 0.035, dark, GX, -1.48, -2.3, fixed, { seg: 8 });
  cyl(0.026, 0.07, copper, GX, -1.25, -2.3, fixed, { seg: 12 });
  box(0.016, 0.1, 0.02, yellow, GX + 0.035, -1.24, -2.3, fixed, { r: 0.004 });
  // water heater branch and its shut-off (the handle turns when the tank is disconnected)
  pipe([[GX, GY, -2.7], [-1.86, GY, -2.7], [-1.86, -2.0, -2.7]], 0.017, dark, fixed);
  cyl(0.024, 0.06, dark, GX, GY, -2.7, fixed, { axis: "z", seg: 10 });
  cyl(0.026, 0.07, copper, -1.86, -1.85, -2.7, fixed, { seg: 12 });
  const whHandle = new THREE.Group(); whHandle.position.set(-1.86, -1.85, -2.7); whHandle.userData.keep = true; group.add(whHandle);
  box(0.016, 0.1, 0.02, yellow, 0.035, 0.01, 0, whHandle, { r: 0.004, cast: false });

  /* ------------------------------------- water heater stubs that stay; calendar */
  [-2.2, -2.0].forEach((x) => cyl(0.011, 0.5, copper, x, -0.5, -3.0, fixed, { seg: 8 }));
  cyl(0.085, 0.06, galv, -2.1, -0.28, -3.0, fixed, { seg: 16 });
  box(0.006, 0.006, 0.02, galv, -1.15, -0.93, -3.985, fixed, { cast: false });
  L.plane("cal", 0.2, fixed, -1.15, -1.07, -3.988);

  /* -------------------------------------------- step 0: crate and permit */
  const crate = phase("crate", V(-2.2, SLAB, -1.05));
  {
    const g = crate.g, cx = -2.2, cz = -1.05, y = SLAB;
    // pallet: three stringers, deck boards
    [-0.4, 0, 0.4].forEach((dz) => box(0.9, 0.09, 0.07, wood, cx, y + 0.045, cz + dz, g));
    for (let i = 0; i < 6; i++) box(0.11, 0.02, 0.92, wood, cx - 0.4 + i * 0.16, y + 0.1, cz, g);
    // foam corner blocks and the top tray, and the slit sleeve lying flat beside it
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => box(0.12, 0.1, 0.12, white, cx + sx * 0.32, y + 0.16, cz + sz * 0.33, g, { cast: false }));
    box(0.62, 0.1, 0.8, cardboard, cx + 0.05, y + 0.27, cz + 0.02, g, { rot: [0, 0.1, 0] });
    box(1.6, 0.008, 0.78, cardboard, -3.75, y + 0.004, -0.9, g, { rot: [0, 0.35, 0], cast: false });
    box(0.78, 0.008, 0.76, cardboard, -3.2, y + 0.012, -0.25, g, { rot: [0, -0.2, 0], cast: false });
    L.plane("crate", 0.34, g, -3.7, y + 0.0095, -0.9).rotation.set(-Math.PI / 2, 0, 0.35);
    // cut strapping
    tube([[cx - 0.5, y + 0.11, cz + 0.2], [cx - 0.7, y + 0.01, cz + 0.4], [cx - 0.95, y + 0.005, cz + 0.3], [cx - 1.1, y + 0.005, cz + 0.6]], 0.006, dark, g, { radial: 4, cast: false });
    // permit tag on its wire, hanging from the furnace shut-off
    tube([[GX, -1.22, -2.28], [GX + 0.01, -1.3, -2.25], [GX + 0.01, -1.36, -2.26]], 0.0015, galv, g, { radial: 4, cast: false });
    L.plane("permit", 0.07, g, GX + 0.01, -1.42, -2.255).rotation.set(0.05, 0.3, 0.04);
  }

  /* ---------------------------------------------------- step 1: maintenance */
  // two filters (old and new) that slide through the slot: one box each, printed on all sides from the atlas
  const filterMat = L.mat.clone(); filterMat.transparent = false; filterMat.depthWrite = true; filterMat.alphaTest = 0;
  const filter = (key) => {
    const probe = L.plane(key, 0.1); const uv = probe.geometry.attributes.uv;
    let u0 = 1, u1 = 0, v0 = 1, v1 = 0;
    for (let i = 0; i < uv.count; i++) { u0 = Math.min(u0, uv.getX(i)); u1 = Math.max(u1, uv.getX(i)); v0 = Math.min(v0, uv.getY(i)); v1 = Math.max(v1, uv.getY(i)); }
    probe.geometry.dispose();
    const geo = new THREE.BoxGeometry(0.5, 0.025, 0.64), guv = geo.attributes.uv;
    for (let i = 0; i < guv.count; i++) guv.setXY(i, u0 + guv.getX(i) * (u1 - u0), v0 + guv.getY(i) * (v1 - v0));
    const f = new THREE.Mesh(geo, filterMat); f.castShadow = true; f.receiveShadow = true; f.userData.keep = true;
    group.add(f);
    return f;
  };
  const oldF = filter("pleatOld"), newF = filter("pleatNew");
  const FHOME = V(FX, -2.56, FZ + 0.05), FOUT = V(FX, -2.56, FZ + 0.78), FLEAN = V(-3.88, SLAB + 0.322, -2.2);
  // duct cleaning: the hose clamped over the trunk register, across the floor toward the stairs
  const hose = phase("hose", REG);
  {
    const g = hose.g;
    const pts = [[REG.x, REG.y, REG.z + 0.06], [REG.x + 0.02, REG.y - 0.12, REG.z + 0.3], [-2.15, -1.5, -1.75], [-1.95, SLAB + 0.09, -1.3], [-1.55, SLAB + 0.08, -0.7], [-0.4, SLAB + 0.08, 0.1], [1.4, SLAB + 0.08, 0.7]];
    const h = tube(pts, 0.07, dark, g, { radial: 10, density: 6, tension: 0.4 });
    const curve = h.userData.curve, len = h.userData.len, ring = new THREE.TorusGeometry(0.072, 0.007, 4, 12);
    const n = Math.round(len / (tier >= 1 ? 0.07 : 0.14));
    for (let i = 2; i < n; i++) {
      const u = i / n, m = new THREE.Mesh(ring, dark);
      m.position.copy(curve.getPointAt(u)); m.quaternion.setFromUnitVectors(V(0, 0, 1), curve.getTangentAt(u)); g.add(m);
    }
    box(0.3, 0.16, 0.08, dark, REG.x, REG.y, REG.z + 0.05, g, { r: 0.01 });     // register adapter
    cyl(0.08, 0.06, galv, REG.x, REG.y, REG.z + 0.11, g, { axis: "z", seg: 16 });
  }

  /* ------------------------------------------------ step 2: heat pump upgrade */
  const hp = phase("hp", V(FX, CAB1, FZ), "y");
  const OX = -3.0, OZ = -4.85, OY = 0.42;
  const fan = new THREE.Group(); fan.userData.keep = true; fan.position.set(OX - 0.1, OY + 0.4, OZ - 0.17); group.add(fan);
  {
    const g = hp.g;
    // cased coil between the cabinet and the plenum, with its access panel and label
    box(0.6, 0.44, 0.78, enamel, FX, CAB1 + 0.22, FZ, g, { r: 0.008 });
    box(0.52, 0.34, 0.006, enamel, FX, CAB1 + 0.22, FZ + 0.392, g, { r: 0.003 });
    for (let i = 0; i < 4; i++) box(0.012, 0.012, 0.008, galv, FX + (i % 2 ? 0.24 : -0.24), CAB1 + (i < 2 ? 0.07 : 0.37), FZ + 0.396, g, { cast: false });
    L.plane("coil", 0.2, g, FX - 0.08, CAB1 + 0.3, FZ + 0.3965);
    // line set: insulated suction line and bare liquid line, up into the bay, along the joists and out through the rim
    const ls = (r, m, dx) => tube([[FX + 0.3, CAB1 + 0.2 + dx, FZ - 0.28], [-2.92, CAB1 + 0.2 + dx, FZ - 0.28], [-2.9 + dx, -0.6, -2.9], [-2.9 + dx, -0.13, -2.95], [-2.9 + dx, -0.12, -3.85], [-2.9 + dx, 0.12, -3.97], [-2.9 + dx, 0.12, -4.35], [-2.85 + dx, 0.32, -4.42], [-2.75 + dx, 0.6, -4.5], [-2.55, 0.62 + dx * 2, -4.62]], r, m, g, { radial: 8, density: 10, tension: 0.2 });
    ls(0.021, dark, 0); ls(0.006, copper, 0.045);
    box(0.02, 0.22, 0.003, galv, -2.88, -0.24, -3.4, g, { cast: false });
    // the thermostat on the finished wall
    box(0.012, 0.11, 0.11, dark, WALLX + 0.019, -1.3, -1.85, g, { r: 0.004 });
    L.plane("tstat", 0.092, g, WALLX + 0.0256, -1.3, -1.85).rotation.y = Math.PI / 2;
    // outdoor unit behind the back wall: snowy pad and stand, cabinet, grille, snow cap, disconnect
    box(1.2, 0.08, 0.7, snow, OX, 0.04, OZ, g);
    [-0.4, 0.4].forEach((dx) => { box(0.05, OY - 0.08, 0.05, galv, OX + dx, (OY + 0.08) / 2, OZ + 0.12, g); box(0.05, OY - 0.08, 0.05, galv, OX + dx, (OY + 0.08) / 2, OZ - 0.12, g); box(0.06, 0.04, 0.5, galv, OX + dx, OY - 0.02, OZ, g); });
    box(0.96, 0.78, 0.38, unitMat, OX, OY + 0.39, OZ, g, { r: 0.02 });
    cyl(0.31, 0.02, dark, OX - 0.1, OY + 0.4, OZ - 0.19, g, { axis: "z", seg: 32, cast: false });
    [0.12, 0.2, 0.28].forEach((r) => { const t = new THREE.Mesh(new THREE.TorusGeometry(r, 0.005, 4, 32), galv); t.position.set(OX - 0.1, OY + 0.4, OZ - 0.205); g.add(t); });
    box(0.62, 0.008, 0.008, galv, OX - 0.1, OY + 0.4, OZ - 0.206, g, { cast: false });
    box(0.008, 0.62, 0.008, galv, OX - 0.1, OY + 0.4, OZ - 0.206, g, { cast: false });
    L.plane("odu", 0.2, g, OX + 0.33, OY + 0.62, OZ - 0.193).rotation.y = Math.PI;
    box(1.0, 0.07, 0.42, snow, OX, OY + 0.815, OZ, g, { r: 0.03, cast: false });
    box(0.7, 0.05, 0.3, snow, OX - 0.05, OY + 0.86, OZ, g, { r: 0.022, cast: false });
    box(0.22, 0.1, 0.9, snow, OX + 0.4, 0.13, OZ + 0.1, g, { r: 0.04, cast: false });
    box(0.14, 0.2, 0.08, unitMat, -2.25, 0.9, -4.29, g, { r: 0.01 });
    L.plane("disc", 0.1, g, -2.25, 0.93, -4.332).rotation.y = Math.PI;
    tube([[-2.25, 0.8, -4.3], [-2.3, 0.6, -4.4], [-2.52, 0.55, -4.7]], 0.012, dark, g, { radial: 6, cast: false });
    // fan blades behind the grille (they turn)
    for (let i = 0; i < 3; i++) { const bl = box(0.26, 0.09, 0.006, dark, 0, 0, 0, null, { cast: false }); bl.geometry.translate(0.14, 0, 0); bl.rotation.set(0, 0.25, (i * Math.PI * 2) / 3); fan.add(bl); }
    bake(fan);
  }

  /* -------------------------------------------- the tank water heater (moves) */
  const HOME = V(-2.1, SLAB + 0.12, -2.64);    // the hand truck's axle, in front of the tank
  const carrier = new THREE.Group(); carrier.rotation.order = "YXZ"; carrier.position.copy(HOME); carrier.userData.keep = true; group.add(carrier);
  let rustBand;
  {
    const g = new THREE.Group(), tz = -0.36; carrier.add(g);
    cyl(0.28, 1.38, tankMat, 0, -0.1 + 0.69, tz, g, { seg: 28 });
    cyl(0.284, 0.04, dark, 0, -0.1, tz, g, { seg: 28 });
    cyl(0.27, 0.03, tankMat, 0, 1.295, tz, g, { seg: 28, r2: 0.2 });
    box(0.14, 0.08, 0.01, dark, 0, 0.08, -0.083, g);
    box(0.1, 0.12, 0.07, dark, 0, 0.26, -0.05, g, { r: 0.008 });
    cyl(0.02, 0.025, copper, 0, 0.29, -0.012, g, { axis: "z", seg: 12, cast: false });
    cyl(0.012, 0.06, copper, 0.12, 0.05, -0.1, g, { axis: "z", seg: 8, cast: false });
    // draft hood and collar, the two nipples with their unions, the T&P valve and its discharge pipe
    cyl(0.07, 0.08, galv, 0, 1.35, tz, g, { seg: 16, r2: 0.04 });
    cyl(0.075, 0.1, galv, 0, 1.43, tz, g, { seg: 16 });
    [-0.1, 0.1].forEach((x) => { cyl(0.012, 0.08, galv, x, 1.33, tz, g, { seg: 8 }); cyl(0.02, 0.03, copper, x, 1.37, tz, g, { seg: 8 }); });
    cyl(0.018, 0.06, copper, 0.3, 1.1, tz, g, { axis: "x", seg: 8 });
    box(0.025, 0.04, 0.02, copper, 0.31, 1.13, tz, g, { cast: false });
    pipe([[0.33, 1.1, tz], [0.34, 1.1, tz], [0.34, 0.04, tz]], 0.011, copper, g, { seg: 8 });
    L.plane("tank", 0.14, g, 0, 0.78, -0.076);
    bake(g);
    rustBand = cyl(0.287, 0.18, rust, 0, -0.01, tz, carrier, { seg: 28, open: true, keep: true });
  }
  // hand truck that comes for the tank in step 4: frame, nose plate, handle, axle, wheels and a ratchet strap
  const dolly = new THREE.Group(); dolly.userData.keep = true; carrier.add(dolly);
  const wheels = new THREE.Group(); wheels.position.set(0, 0, 0.02); wheels.userData.keep = true;
  {
    const g = new THREE.Group(); dolly.add(g);
    [-0.17, 0.17].forEach((x) => pipe([[x, -0.1, -0.05], [x, 1.28, -0.05], [x, 1.4, 0.03]], 0.013, dollyMat, g, { seg: 8, fit: 0 }));
    pipe([[-0.17, 1.4, 0.03], [0.17, 1.4, 0.03]], 0.013, dollyMat, g, { seg: 8, fit: 0 });
    [0.35, 0.85].forEach((y) => cyl(0.009, 0.34, dollyMat, 0, y, -0.05, g, { axis: "x", seg: 6 }));
    box(0.38, 0.01, 0.24, dollyMat, 0, -0.115, -0.17, g);
    cyl(0.012, 0.5, dollyMat, 0, 0, 0.02, g, { axis: "x", seg: 8 });
    [-0.17, 0.17].forEach((x) => box(0.02, 0.1, 0.08, dollyMat, x, -0.04, -0.02, g));
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.286, 0.006, 4, 40), yellow); strap.rotation.x = Math.PI / 2; strap.position.set(0, 0.95, -0.36); g.add(strap);
    box(0.06, 0.04, 0.03, yellow, 0, 0.95, -0.065, g);
    bake(g);
    [-0.25, 0.25].forEach((x) => {
      cyl(0.12, 0.06, dark, x, 0, 0, wheels, { axis: "x", seg: 20 });
      cyl(0.055, 0.065, dollyMat, x, 0, 0, wheels, { axis: "x", seg: 12 });
      box(0.068, 0.02, 0.16, dollyMat, x, 0, 0, wheels, { cast: false });
    });
    bake(wheels);
    dolly.add(wheels);
  }
  // what connects the tank to the house until it is swapped: gas nipple and drip leg, water lines, vent connector
  const conn = phase("conn", V(-2.1, -1.5, -2.85), "pop");
  {
    const g = conn.g;
    pipe([[-1.86, -2.0, -2.7], [-1.86, -2.42, -2.7], [-2.05, -2.42, -2.7]], 0.017, dark, g);
    pipe([[-1.86, -2.42, -2.7], [-1.86, -2.56, -2.7]], 0.017, dark, g, { fit: 0 });
    cyl(0.024, 0.03, dark, -1.86, -2.575, -2.7, g, { seg: 10 });
    cyl(0.024, 0.05, dark, -1.86, -2.0, -2.7, g, { seg: 10 });
    [-2.2, -2.0].forEach((x) => cyl(0.011, 0.5, copper, x, -1.0, -3.0, g, { seg: 8 }));
    cyl(0.075, 0.96, galv, -2.1, -0.76, -3.0, g, { seg: 16 });
    [-1.0, -0.55].forEach((y) => cyl(0.079, 0.02, galv, -2.1, y, -3.0, g, { seg: 16, cast: false }));
  }
  // ... and what is left when it is gone: caps on the copper stubs and the gas valve, with a red tag
  const caps = phase("caps", V(-2.0, -1.2, -2.85), "pop");
  {
    const g = caps.g;
    [-2.2, -2.0].forEach((x) => cyl(0.014, 0.035, copper, x, -0.765, -3.0, g, { seg: 8 }));
    cyl(0.024, 0.035, dark, -1.86, -1.905, -2.7, g, { seg: 10 });
    tube([[-1.86, -1.86, -2.68], [-1.85, -1.92, -2.66], [-1.85, -1.97, -2.665]], 0.0015, galv, g, { radial: 4, cast: false });
    L.plane("capped", 0.055, g, -1.85, -2.02, -2.66).rotation.set(0, 0.25, -0.05);
    cyl(0.08, 0.012, galv, -2.1, -0.315, -3.0, g, { seg: 16, cast: false });
  }
  // the leak: a puddle spreading from the base of the tank
  const puddle = phase("puddle", V(-1.95, SLAB + 0.003, -2.6), "xz");
  [[0, 0, 0.42, 0.3], [0.25, 0.18, 0.28, 0.2], [-0.2, 0.22, 0.22, 0.18]].forEach(([dx, dz, rx, rz]) => {
    cyl(1, 0.004, mats.water, -1.95 + dx, SLAB + 0.003, -2.6 + dz, puddle.g, { seg: 28, cast: false }).scale.set(rx, 1, rz);
  });

  /* ---------------------------------------------- step 3: the tankless heater */
  const TKX = -1.72, TKY = -1.1, TKZ = -3.89;
  const tkl = phase("tankless", V(TKX, TKY, TKZ));
  {
    const g = tkl.g;
    box(0.36, 0.56, 0.2, enamel, TKX, TKY, TKZ, g, { r: 0.012 });
    box(0.3, 0.46, 0.006, enamel, TKX, TKY, TKZ + 0.1, g, { r: 0.003 });
    L.plane("tkl", 0.08, g, TKX, TKY + 0.12, TKZ + 0.105);
    // concentric vent up and out through the wall
    pipe([[TKX + 0.06, TKY + 0.28, TKZ], [TKX + 0.06, -0.62, TKZ], [TKX + 0.06, -0.62, -4.05]], 0.05, white, g, { fit: 1.15, seg: 16 });
    // gas from the end of the main with its own shut-off; cold in and hot out with isolation valves
    pipe([[GX, GY, -3.5], [GX, GY, -3.84], [-1.45, GY, -3.84], [-1.45, -1.52, -3.84], [TKX + 0.1, -1.52, -3.84], [TKX + 0.1, TKY - 0.28, -3.84]], 0.014, dark, g, { seg: 8 });
    cyl(0.022, 0.06, copper, -1.45, -1.25, -3.84, g, { seg: 10 });
    box(0.014, 0.08, 0.016, yellow, -1.42, -1.24, -3.84, g, { r: 0.003, cast: false });
    [[TKX - 0.1, mats.bluePlastic, -2.25], [TKX - 0.02, mats.redPlastic, -2.35]].forEach(([x, hm, x2], i) => {
      pipe([[x, TKY - 0.28, -3.84], [x, -1.6 - i * 0.06, -3.84], [x2, -1.6 - i * 0.06, -3.84], [x2, -0.26, -3.84]], 0.011, copper, g, { seg: 8 });
      cyl(0.017, 0.04, copper, x, -1.47, -3.84, g, { seg: 8 });
      box(0.05, 0.012, 0.012, hm, x + 0.02, -1.47, -3.815, g, { cast: false });
    });
    [-0.45, -1.2].forEach((y) => box(0.03, 0.012, 0.03, copper, -2.3, y, -3.85, g, { cast: false }));
  }

  /* ---------------------------------------------- step 5: selective demolition */
  // the two sheets that come off (shown until then)
  const loose = phase("loose", V(WALLX, -1.5, -0.3), "pop");
  sheet(-1.48, -0.29, loose.g); sheet(-0.29, Z1, loose.g);
  const demo = phase("demo", V(-3.0, SLAB, -0.5), "y");
  {
    const g = demo.g;
    // new partition for the mechanical room, with a door rough opening
    const PZ = -1.05, PX0 = WALLX + 0.02, PX1 = -1.45, D0 = -2.45, D1 = -1.6;
    box(D0 - PX0, 0.038, 0.089, wood, (PX0 + D0) / 2, SLAB + 0.019, PZ, g);
    box(PX1 - D1, 0.038, 0.089, wood, (D1 + PX1) / 2, SLAB + 0.019, PZ, g);
    box(PX1 - PX0, 0.038, 0.089, wood, (PX0 + PX1) / 2, TOP - 0.019, PZ, g);
    for (let x = PX0 + 0.02; x < PX1; x += 0.406) {
      if (x > D0 - 0.04 && x < D1 + 0.04) continue;
      box(0.038, TOP - SLAB - 0.076, 0.089, wood, x, (SLAB + TOP) / 2, PZ, g);
    }
    [D0 - 0.019, D1 + 0.019].forEach((x) => box(0.038, TOP - SLAB - 0.076, 0.089, wood, x, (SLAB + TOP) / 2, PZ, g));
    [D0 + 0.019, D1 - 0.019].forEach((x) => box(0.038, 2.07, 0.089, wood, x, SLAB + 1.035, PZ, g));
    box(D1 - D0, 0.18, 0.089, wood, (D0 + D1) / 2, SLAB + 2.16, PZ, g);
    L.plane("suite", 0.15, g, D0 - 0.4, -1.25, PZ + 0.046);
    // drywall off the wall, stacked flat on two sleepers
    [-0.5, 0.5].forEach((dz) => box(1.1, 0.04, 0.08, wood, -2.3, SLAB + 0.02, 0.62 + dz * 1.8, g));
    for (let i = 0; i < 4; i++) box(1.22, 0.0127, 2.44, drywall, -2.3 + (i % 2) * 0.02, SLAB + 0.047 + i * 0.0135, 0.62 + (i % 3) * 0.015, g, { rot: [0, (i - 1.5) * 0.012, 0] });
    // rolling bin with broken drywall and a pulled batt
    const BX = -3.85, BZ = 0.25;
    box(0.62, 0.88, 0.92, binMat, BX, SLAB + 0.5, BZ, g, { r: 0.02 });
    box(0.66, 0.04, 0.96, binMat, BX, SLAB + 0.95, BZ, g, { r: 0.01 });
    [-0.3, 0.3].forEach((dz) => cyl(0.05, 0.04, dark, BX + 0.2, SLAB + 0.05, BZ + dz, g, { axis: "x", seg: 12 }));
    [[0.0, 0.1, 0.4, 0.4], [-0.1, -0.15, -0.3, 0.6], [0.12, -0.25, 0.2, -0.5]].forEach(([dx, dz, a, b]) => box(0.4, 0.0127, 0.5, drywall, BX + dx, SLAB + 0.95, BZ + dz, g, { rot: [a, b, 0.2] }));
    box(0.3, 0.09, 0.6, mats.insulPink, BX - 0.05, SLAB + 0.98, BZ - 0.1, g, { rot: [0.3, 0.2, -0.25] });
    L.plane("bin", 0.2, g, BX + 0.312, SLAB + 0.75, BZ).rotation.y = Math.PI / 2;
    // scraps on the slab along the opened wall
    for (let i = 0; i < 7; i++) box(0.05 + (i % 3) * 0.04, 0.0127, 0.04 + (i % 2) * 0.05, drywall, WALLX + 0.12 + (i % 3) * 0.09, SLAB + 0.007, -1.3 + i * 0.3, g, { rot: [0, i * 0.7, 0], cast: false });
  }

  bake(fixed);
  mergePhases();

  /* --------------------------------------------------------------- anchors */
  const anchors = {
    install: V(FX, -1.65, FRONT + 0.02),
    maintain: V(FX + 0.1, -2.56, FRONT + 0.03),
    upgrade: V(WALLX + 0.03, -1.3, -1.85),
    hpump: V(FX + 0.1, CAB1 + 0.22, FZ + 0.4),
    replace: V(TKX, TKY + 0.05, TKZ + 0.11),
    remove: V(-2.1, -1.9, -2.6),          // rides on the tank (updated every frame)
    demo: V(WALLX - 0.04, -1.5, -0.6)
  };

  /* ----------------------------------------------------------------- shots */
  // arrival from above with the floors lifted off, looking along the joists; then down into the mechanical room
  const P = { time: 19.4, cut: 0, ghost: 0, ground: 1, lift: 0, orbit: 0.012 };
  const shots = [
    { ...P, radius: 12, theta: 0.16, phi: 0.8, fx: -2.6, ty: -2.0, fz: -2.2, lift: 3, dof: 0, orbit: 0.02, narrow: { radius: 11 } },
    { ...P, radius: 3.1, theta: 0.42, phi: 1.36, fx: -3.0, ty: -2.0, fz: -2.3, dof: 1.0 },
    { ...P, radius: 3.4, theta: 1.25, phi: 1.5, fx: -4.0, ty: -1.3, fz: -2.15, dof: 0.9 },
    { ...P, radius: 3.4, theta: 0.35, phi: 1.38, fx: -1.85, ty: -1.65, fz: -3.2, dof: 1.0 },
    { ...P, radius: 3.4, theta: 0.85, phi: 1.32, fx: -1.2, ty: -2.0, fz: -2.0, dof: 0.8 },
    { ...P, radius: 3.6, theta: 1.1, phi: 1.42, fx: -3.6, ty: -1.55, fz: -0.6, dof: 0.8 }
  ];

  /* ----------------------------------------------------------------- state */
  let year = -1, fq = 0, tilt = 0, turn = 0, move = 0, dollyK = 0, rolled = 0, handle = 0;
  const OUT = V(0.25, SLAB + 0.12, -0.75), run = HOME.distanceTo(OUT), _p = V(0, 0, 0);
  return {
    name: "cycle", group, anchors, shots,
    hides: (H) => [...(H.sys.hvac ? H.sys.hvac.meshes : []), ...(H.sys["water-heaters"] ? H.sys["water-heaters"].meshes : [])],
    light(step) {
      if (step === 0) return { pos: [-2.0, 2.4, 0.6], at: [-3.0, -2.2, -2.4], power: 1, fill: 0.3 };
      if (step === 1) return { pos: [-1.7, -0.5, -0.7], at: [-3.3, -2.3, -2.4], power: 1, fill: 0.35 };
      if (step === 2) return { pos: [-1.6, -0.45, -1.1], at: [-3.9, -1.4, -2.2], power: 1, fill: 0.35 };
      if (step === 3) return { pos: [-0.9, -0.5, -1.5], at: [-1.9, -1.8, -3.4], power: 1, fill: 0.35 };
      if (step === 4) return { pos: [-0.3, -0.45, -0.7], at: [-1.2, -2.2, -1.8], power: 1, fill: 0.35 };
      return { pos: [-2.2, -0.5, 0.9], at: [-4.2, -1.8, -0.6], power: 1, fill: 0.35 };
    },
    update({ step, q, t, dt, snap, reduce }) {
      const ease = snap ? 1 : 1 - Math.exp(-dt * 4);
      q = clamp(q || 0, 0, 1);
      // year on the calendar and the rows of the service record
      const y = step === 1 ? Math.round(1 + 11 * q) : YEARS[step] ?? 25;
      if (y !== year) { year = y; L.set("cal", undefined, undefined, { year: y, verb: VERBS[step] || "" }); L.set("svc", undefined, undefined, { year: y }); }
      // furnace: burner flame through the sight glass and the blinking status light
      burner.emissiveIntensity = reduce ? 1.4 : 1.3 + 0.3 * Math.sin(t * 13.1) + 0.2 * Math.sin(t * 7.7 + 1.3);
      ledMat.emissiveIntensity = reduce ? 1.8 : Math.sin(t * 2.4) > -0.2 ? 2 : 0.3;
      // the filter swap scrubs with the scroll through step 1: old one out and leaned on the return, new one in
      const fw = step === 1 ? q : step > 1 ? 1 : 0;
      fq = snap ? fw : lerp(fq, fw, 1 - Math.exp(-dt * 6));
      const outK = smooth(0.06, 0.28, fq), leanK = smooth(0.3, 0.46, fq), newIn = smooth(0.5, 0.86, fq), newShow = smooth(0.38, 0.48, fq);
      oldF.visible = step <= 1;
      oldF.position.lerpVectors(FHOME, FOUT, outK).lerp(FLEAN, leanK);
      oldF.rotation.set(-1.72 * leanK, 0, 0.06 * leanK);
      newF.visible = newShow > 0.001;
      newF.position.lerpVectors(FOUT, FHOME, newIn);
      newF.scale.setScalar(Math.max(0.001, newShow));
      // what each year brings and takes away
      show(crate, step === 0 ? 1 : 0, ease);
      show(hose, step === 1 ? 1 : 0, ease);
      const e = show(hp, step >= 2 ? 1 : 0, ease);
      fan.visible = e > 0.98;
      if (!reduce) fan.rotation.z = t * 6;
      const swapped = step > 3 || (step === 3 && q > 0.6);
      show(conn, swapped ? 0 : 1, 1);
      show(caps, swapped ? 1 : 0, 1);
      show(puddle, step === 3 ? 0.15 + 0.85 * smooth(0, 0.45, q) : 0, ease);
      show(tkl, step > 3 || (step === 3 && q > 0.45) ? 1 : 0, ease);
      show(loose, step < 5 ? 1 : 0, 1);
      show(demo, step === 5 ? 1 : 0, ease);
      handle = lerp(handle, swapped ? 1 : 0, ease);
      whHandle.rotation.z = -handle * Math.PI / 2;
      // the old tank: rusts in step 3, leaves on the hand truck in step 4 (scrubbed), gone in step 5
      rustBand.visible = step >= 3;
      const dq = step === 4 ? q : step > 4 ? 1 : 0;
      tilt = lerp(tilt, smooth(0, 0.25, dq) * 0.42, ease);
      turn = lerp(turn, smooth(0.12, 0.4, dq) * 0.89, ease);
      const m0 = move; move = lerp(move, smooth(0.3, 1, dq), ease);
      rolled += (move - m0) * run;
      dollyK = lerp(dollyK, step === 4 ? 1 : 0, ease);
      carrier.visible = step <= 4;
      carrier.position.lerpVectors(HOME, OUT, move);
      carrier.rotation.set(tilt, turn, 0);
      dolly.visible = dollyK > 0.02;
      dolly.scale.setScalar(Math.max(0.001, smooth(0, 1, dollyK)));
      wheels.rotation.x = rolled / 0.12;
      _p.set(0, 0.95, -0.36); carrier.updateMatrix(); anchors.remove.copy(_p.applyMatrix4(carrier.matrix));
    }
  };
}
