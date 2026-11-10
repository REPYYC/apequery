// Close-up set 3 of 6: the sewer lateral, from the floor drain to the main under the back lane.
// The stage cuts the lot open along x = CUT. Everything here stands in the slot between that cut and an earth face just
// behind it, drawn as a section: the clay lateral is cut open along its axis, so the camera, the roots and the tools in it
// show. One pipe carries every step: inspection, roots, cleaning, the two trenchless repairs, an open-cut replacement to
// the main, and at the front of the house the water service, the weeping tile and the sump.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { lerp, smooth, clamp, rng } from "../util.js";

const PX = 0.6, CUT = 0.42, XC = CUT + 0.004, FX = 0.86;     // pipe axis, section cut, cut faces, earth face (all x)
const Z0 = -4.25, Y0 = -3.4;                                  // lateral centre where it leaves the back wall, under the footing
const RUN = 13.62, SL = Math.atan2(0.26, RUN), CS = Math.cos(SL), SN = Math.sin(SL);
const ZM = -18.2, YM = -3.95, RM = 0.19, RMI = 0.15;          // the main under the lane, running along x
const SEG = 0.75, S0 = 0.12, NSEG = 18;                       // clay lengths: 75 cm, first bell just outside the wall
const RI = 0.075, RO = 0.092, RB = 0.116, RBI = 0.096;        // clay bore, barrel, bell, bell bore (150 mm pipe)
const ROOT_J = 11, CRACK_J = 1, OFFSET_J = 2;                 // the joint the roots found, the cracked length, the offset joint
const LINER = [4.62, 6.87], BURST = [6.95, 9.05];              // trenchless zones (s along the lateral)
const TZ0 = -14.05, TZ1 = -18.95, TY = -4.3, TX = 1.3;        // the open-cut trench
const SZ = 1.6, WX = 0.7, CLZ = -2.9;                                        // sump pit (z), water service (x)
const jointS = (j) => S0 + j * SEG;
/** lateral frame -> house coordinates: s metres down the pipe from the wall, x across, y up from the axis */
const W = (s, x = 0, y = 0, out = new THREE.Vector3()) => out.set(PX + x, Y0 + y * CS - s * SN, Z0 - y * SN - s * CS);

const _c = new THREE.Color();
function paint(g, hex) {
  _c.set(hex);
  const n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = _c.r; a[i * 3 + 1] = _c.g; a[i * 3 + 2] = _c.b; }
  g.setAttribute("color", new THREE.BufferAttribute(a, 3));
  return g;
}
/** A pipe wall cut open along its axis. loop: the wall's cross-section as a closed list of [h along the pipe, r];
 *  cols: a colour per edge of the loop; cut: colour of the sawn faces. Axis along -z from h = 0, the kept half on +x. */
function shell(loop, cols, cut, seg = 14) {
  const parts = [];
  loop.forEach((a, i) => {
    const b = loop[(i + 1) % loop.length];
    if (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) < 1e-6) return;
    const g = new THREE.LatheGeometry([new THREE.Vector2(a[1], a[0]), new THREE.Vector2(b[1], b[0])], seg, 0, Math.PI).toNonIndexed();
    g.rotateX(-Math.PI / 2);
    parts.push(paint(g, cols[i]));
  });
  const top = new THREE.ShapeGeometry(new THREE.Shape(loop.map(([h, r]) => new THREE.Vector2(-h, r)))).toNonIndexed();
  top.rotateY(-Math.PI / 2);
  const bot = top.clone(); bot.scale(1, -1, 1);
  parts.push(paint(top, cut), paint(bot, cut));
  return mergeGeometries(parts);
}
/** a plain pipe of length len cut open: bore ri, wall ro */
const plainShell = (len, ri, ro, out, inn, cut, seg) => shell([[0, ri], [0, ro], [len, ro], [len, ri]], [cut, out, cut, inn], cut, seg);

export function createSewerSet({ kit, M, Ug, tier, reduce }) {
  const { box, cyl, tube, mats, atlas, V } = kit;
  const group = new THREE.Group();
  group.name = "sewer";
  const fixed = new THREE.Group();
  group.add(fixed);
  const R = rng(1958);

  /* ------------------------------------------------------------ materials */
  // most parts are matte or metal in a vertex colour, so each group bakes to one or two meshes
  const vc = (rough, metal, extra = {}) => kit.std(0xffffff, rough, metal, { vertexColors: true, side: THREE.DoubleSide, ...extra });
  const matte = vc(0.74, 0), metal = vc(0.48, 0.8, { envMapIntensity: 1.1 }), gloss = matte;
  const pbox = (w, h, d, col, x, y, z, parent, o = {}) => { const m = box(w, h, d, o.mat || matte, x, y, z, parent, o); paint(m.geometry, col); return m; };
  const pcyl = (r, len, col, x, y, z, parent, o = {}) => { const m = cyl(r, len, o.mat || matte, x, y, z, parent, o); paint(m.geometry, col); return m; };
  const ptube = (pts, r, col, parent, o = {}) => { const m = tube(pts, r, o.mat || matte, parent, o); paint(m.geometry, col); return m; };
  const vmesh = (geo, parent, o = {}) => kit.place(new THREE.Mesh(geo, o.mat || matte), o.x || 0, o.y || 0, o.z || 0, parent, o);
  const pmesh = (geo, col, parent, o = {}) => { paint(geo, col); return kit.place(new THREE.Mesh(geo, o.mat || matte), o.x || 0, o.y || 0, o.z || 0, parent, o); };
  const sewage = kit.flow(0xc9a26a, { base: 0x2c2216, intensity: 1.1, dash: 1.4, speed: 0.45, rest: 0.3, gain: 1, roughness: 0.12 });
  const water = (base, o = {}) => kit.flow(0x4fa6ff, { base, intensity: 1.6, dash: 2.2, speed: 0.7, rest: 0.05, gain: 1, roughness: 0.4, ...o });
  // the earth: the stage's own strata face material, laid on planes at their true depth so the bands line up
  const ugFace = Ug && Ug.group ? Ug.group.children.find((o) => o.isMesh && o.geometry.parameters && o.geometry.parameters.height === 9) : null;
  const faceMat = ugFace ? ugFace.material : mats.soil;
  /** earth face (a vertical plane facing -x) from z0 to z1 and y0 to y1 at x */
  const face = (z0, z1, y0, y1, x, parent) => {
    const g = new THREE.PlaneGeometry(Math.abs(z1 - z0), y1 - y0);
    g.rotateY(-Math.PI / 2); g.translate(x, (y0 + y1) / 2, (z0 + z1) / 2);
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getZ(i) + 120) / 240, (p.getY(i) + 9.02) / 9);
    return kit.place(new THREE.Mesh(g, faceMat), 0, 0, 0, parent, { cast: false });
  };
  // clear stone as it shows on a cut face
  const gcv = document.createElement("canvas"); gcv.width = gcv.height = 256;
  { const g = gcv.getContext("2d"); g.fillStyle = "#3b3833"; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 520; i++) { const x = R() * 256, y = R() * 256, r = 3 + R() * 7, l = 70 + R() * 90;
      g.fillStyle = `rgb(${l | 0},${(l * 0.96) | 0},${(l * 0.9) | 0})`; g.beginPath(); g.ellipse(x, y, r, r * (0.6 + R() * 0.4), R() * 3, 0, 6.3); g.fill();
      g.fillStyle = "rgba(255,255,255,0.12)"; g.beginPath(); g.ellipse(x - r * 0.25, y - r * 0.25, r * 0.45, r * 0.3, 0, 0, 6.3); g.fill(); } }
  const gTex = new THREE.CanvasTexture(gcv); gTex.colorSpace = THREE.SRGBColorSpace; gTex.wrapS = gTex.wrapT = THREE.RepeatWrapping; gTex.repeat.set(2.6, 2.6);
  const gravel = kit.std(0xffffff, 0.95, 0, { map: gTex });
  const lipMat = new THREE.MeshBasicMaterial({ color: 0xf4bd7e, toneMapped: false });
  const lip = (z0, z1, x, parent) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, Math.abs(z1 - z0)), lipMat); m.position.set(x - 0.02, 0.02, (z0 + z1) / 2); m.userData.noAO = true; parent.add(m); return m; };
  /** a section cap: a flat polygon [[z, y], ...] in the cut plane, with optional holes */
  const cap = (pts, col, holes = [], parent = fixed, x = XC) => {
    const sh = new THREE.Shape(pts.map(([z, y]) => new THREE.Vector2(z, y)));
    holes.forEach((h) => sh.holes.push(h.length === 3 ? new THREE.Path().absarc(h[0], h[1], h[2], 0, Math.PI * 2, false) : new THREE.Path(h.map(([z, y]) => new THREE.Vector2(z, y)))));
    const g = new THREE.ShapeGeometry(sh, 8); g.rotateY(-Math.PI / 2); g.translate(x, 0, 0);
    return typeof col === "object" ? kit.place(new THREE.Mesh(g, col), 0, 0, 0, parent, { cast: false }) : pmesh(g, col, parent, { cast: false });
  };

  /* ---------------------------------------------------------------- labels */
  const cells = [
    { key: "mon", w: 320, h: 232, text: "0.0 m", sub: "CLAY 150 mm", flag: "", draw: drawMonitor },
    { key: "pvc", text: "SEWER PVC · SDR 35 · 150 mm · 2025", w: 600, h: 34, size: 22, color: "#eef3ec" },
    { key: "pb", text: "PB · 19 mm · 1987", w: 300, h: 34, size: 22, color: "#22262b" },
    { key: "pl", text: "PROPERTY LINE", w: 220, h: 54, size: 26, color: "#1a1206", bg: "#f08a2c" },
    { key: "permit", text: "CONNECTION PERMIT", sub: "INSPECTED · BACKFILL OK", w: 260, h: 74, size: 22, color: "#15130c", bg: "#e9c22e" },
    { key: "shut", text: "MAIN SHUT-OFF", w: 200, h: 46, size: 22, color: "#fff4ea", bg: "#b8321f" },
    { key: "pump", text: "SUMP · 1/3 HP", w: 180, h: 40, size: 22, color: "#d9dde2" }
  ];
  function drawMonitor(g, w, h, c) {
    g.fillStyle = "#05070a"; g.fillRect(0, 0, w, h);
    // what the camera sees: the bore lit by its own LEDs, falling off to black, the next joint as a ring, the trickle below
    const cx = w / 2, cy = h / 2 + 14;
    const gr = g.createRadialGradient(cx, cy, 4, cx, cy, 112);
    gr.addColorStop(0, "#040201"); gr.addColorStop(0.32, "#1d1008"); gr.addColorStop(0.78, "#9a6038"); gr.addColorStop(1, "#4a2c18");
    g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, 108, 0, 6.3); g.fill();
    g.strokeStyle = "rgba(14,8,4,.85)"; g.lineWidth = 6;
    const ox = c.flag === "OFFSET JOINT" ? 9 : 0;
    g.beginPath(); g.arc(cx, cy + ox, 46, 0, 6.3); g.stroke();
    g.fillStyle = "rgba(150,112,62,.75)"; g.beginPath(); g.ellipse(cx, cy + 86, 58, 12, 0, 0, 6.3); g.fill();
    if (c.flag === "CRACK") { g.strokeStyle = "#0a0503"; g.lineWidth = 3; g.beginPath(); g.moveTo(cx - 18, cy - 104); g.lineTo(cx - 8, cy - 80); g.lineTo(cx - 20, cy - 62); g.lineTo(cx - 9, cy - 44); g.stroke(); }
    if (c.flag === "ROOTS") { g.strokeStyle = "#d8c49a"; g.lineWidth = 2; for (let i = 0; i < 9; i++) { g.beginPath(); g.moveTo(cx - 40 + i * 10, cy - 46); g.quadraticCurveTo(cx - 30 + i * 7, cy, cx - 20 + i * 5, cy + 20); g.stroke(); } }
    g.textAlign = "left"; g.textBaseline = "middle";
    g.fillStyle = "#f4bd7e"; g.font = "700 28px ui-monospace, Menlo, monospace"; g.fillText(c.text, 14, 24);
    g.fillStyle = "#cfd4da"; g.font = "500 15px ui-monospace, Menlo, monospace"; g.fillText(c.sub, 14, 50);
    g.fillStyle = "#ff6b4f"; g.beginPath(); g.arc(w - 22, 22, 7, 0, 6.3); g.fill();
    g.textAlign = "right"; g.fillStyle = "#cfd4da"; g.font = "600 14px ui-monospace, Menlo, monospace"; g.fillText("REC", w - 36, 23);
    if (c.flag) { g.textAlign = "left"; g.fillStyle = "#ff6b4f"; g.font = "700 20px ui-monospace, Menlo, monospace"; g.fillText(c.flag, 14, h - 18); }
  }
  const L = atlas(cells, { width: 1024, emissive: 0.26 });

  /* ------------------------------------------------- the lateral's frame */
  const pf = new THREE.Group();                // origin where the lateral leaves the wall; -z runs down the pipe
  pf.position.set(PX, Y0, Z0); pf.rotation.x = -SL;
  fixed.add(pf);

  /* ------------------------------------------------ clay: 18 lengths, one draw */
  const CLAY = { out: 0x8a5134, inn: 0x5b3423, end: 0x74472e, cut: 0xc48a60 };
  const clayGeo = shell([[0, RBI], [0, RB], [0.09, RB], [0.125, RO], [SEG + 0.075, RO], [SEG + 0.075, RI], [0.1, RI], [0.1, RBI]],
    [CLAY.end, CLAY.out, CLAY.out, CLAY.out, CLAY.end, CLAY.inn, CLAY.inn, 0x3f2418], CLAY.cut, 18);
  const clay = new THREE.InstancedMesh(clayGeo, matte, NSEG);
  clay.castShadow = true; clay.receiveShadow = true; clay.frustumCulled = false; clay.userData.keep = true;
  pf.add(clay);
  // where each length sits: the offset joint drops one length, the belly sags two
  const sag = (j) => (j === OFFSET_J ? -0.013 : j === 4 ? -0.016 : j === 5 ? -0.024 : j === 6 ? -0.01 : 0);
  const clayM = [], m4 = new THREE.Matrix4(), zero = new THREE.Matrix4().makeScale(0, 0, 0);
  for (let j = 0; j < NSEG; j++) { clayM.push(new THREE.Matrix4().makeTranslation(0, sag(j), -jointS(j))); clay.setMatrixAt(j, clayM[j]); }
  let clayKey = "";
  const showClay = (hide) => {          // hide(j) -> true for lengths that are gone in this step
    let key = "";
    for (let j = 0; j < NSEG; j++) key += hide(j) ? "0" : "1";
    if (key === clayKey) return;
    clayKey = key;
    for (let j = 0; j < NSEG; j++) clay.setMatrixAt(j, key[j] === "1" ? clayM[j] : zero);
    clay.instanceMatrix.needsUpdate = true;
  };
  // the crack in length 1: a dark split running along the crown, and the trickle of sewage along the invert
  ptube([[0.02, RI * 0.99, -1.02], [0.034, RI * 0.97, -1.18], [0.022, RI * 0.98, -1.32], [0.04, RI * 0.96, -1.5]].map(([x, y, z]) => {
    const k = RI * 0.985 / Math.hypot(x, y); return [x * k, y * k, z];
  }), 0.0028, 0x120a06, pf, { radial: 5, seg: 16, cast: false });
  const strip = (s0, s1, y, w, parent, mat = sewage, x0 = 0) => {
    const g = new THREE.PlaneGeometry(s1 - s0, w); g.rotateX(-Math.PI / 2); g.rotateY(Math.PI / 2);
    g.translate(x0 + w / 2, y, -(s0 + s1) / 2);
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setX(i, -p.getZ(i));
    return kit.place(new THREE.Mesh(g, mat), 0, 0, 0, parent, { cast: false });
  };
  const wet = (d) => Math.sqrt(RI * RI - (RI - d) * (RI - d));
  strip(0, RUN, -RI + 0.016, wet(0.016), pf);
  // the belly holds standing water
  strip(jointS(4) - 0.05, jointS(7) - 0.1, -RI + 0.014, wet(0.03), pf).position.y = -0.018;

  /* ---------------------------------------- building drain under the slab */
  const df = new THREE.Group();                // floor drain to the wall, cast iron
  const DZ0 = 0.78, DY0 = -3.06, DSL = Math.atan2(DY0 - Y0 - 0.02, DZ0 - Z0);
  df.position.set(PX, DY0, DZ0); df.rotation.x = -DSL;
  fixed.add(df);
  const IRON = { out: 0x2e3034, inn: 0x4f3424, cut: 0x8d9096 };
  const dlen = DZ0 - Z0 + 0.12;
  vmesh(plainShell(dlen, RI, 0.086, IRON.out, IRON.inn, IRON.cut, 16), df);
  [0.0, 1.5, 3.0, 4.5].forEach((h) => vmesh(shell([[h, 0.086], [h, 0.104], [h + 0.09, 0.104], [h + 0.12, 0.086]], [IRON.cut, IRON.out, IRON.out, IRON.out], IRON.cut, 16), df));
  strip(0.05, dlen, -RI + 0.014, wet(0.014), df);
  // the branch from the stack (it comes in from the far side of the cut), and the cleanout riser up to the slab
  pcyl(0.056, 0.4, IRON.out, -0.2, 0.012, -2.75, df, { axis: "x", seg: 16 });
  { const yb = DY0 - (DZ0 - CLZ) * Math.tan(DSL) + 0.06; vmesh(plainShell(-2.77 - yb, 0.052, 0.062, IRON.out, IRON.inn, IRON.cut, 14).rotateX(Math.PI / 2), fixed, { x: PX, y: yb, z: CLZ }); }
  // floor drain: grate at the slab, trap below it
  pcyl(0.09, 0.012, 0x8c939b, PX, -2.795, DZ0 + 0.04, fixed, { mat: metal, seg: 24 });
  ptube([[PX, -2.8, DZ0 + 0.04], [PX, -3.08, DZ0 + 0.06], [PX, -3.2, DZ0 - 0.04], [PX, -3.1, DZ0 - 0.14], [PX, -3.06, DZ0 - 0.02]], 0.05, IRON.out, fixed, { radial: 12, seg: 24 });

  /* ------------------------------------------------- foundation, cut faces */
  const CONC = M.form || M.concrete;
  cap([[-4.5, -3.25], [-3.7, -3.25], [-3.7, -2.95], [-4.0, -2.95], [-4.0, 0.3], [-4.25, 0.3], [-4.25, -2.95], [-4.5, -2.95]], CONC);
  cap([[4.5, -3.25], [3.7, -3.25], [3.7, -2.95], [4.0, -2.95], [4.0, 0.3], [4.25, 0.3], [4.25, -2.95], [4.5, -2.95]], CONC, [[4.125, -2.3, 0.028]]);
  [[-4.0, CLZ - 0.07], [CLZ + 0.07, DZ0 - 0.07], [DZ0 + 0.13, SZ - 0.25], [SZ + 0.25, 4.0]].forEach(([a, b]) => cap([[a, -2.96], [b, -2.96], [b, -2.8], [a, -2.8]], M.slab || 0x6d6a63));
  // damp-proofing membrane on the outside of both walls
  [-1, 1].forEach((s) => pbox(FX - XC, 3.0, 0.012, 0x16181b, (XC + FX) / 2, -1.55, s * 4.258, fixed, { cast: false }));

  /* ----------------------------------------------------------- the earth */
  face(Z0, TZ0, -9.02, 0, FX, fixed);
  face(TZ1, -60, -9.02, 0, FX, fixed);
  face(-Z0, 60, -9.02, 0, FX, fixed);
  face(Z0, -Z0, -9.02, -2.96, FX, fixed);
  lip(Z0, TZ0, FX, fixed); lip(TZ1, -60, FX, fixed); lip(-Z0, 60, FX, fixed);
  const backfill = new THREE.Group(); backfill.userData.keep = true; group.add(backfill);      // the yard over the trench, until step 5
  face(TZ0, TZ1, -9.02, 0, FX, backfill);

  /* ------------------------------------------------------- the main and its tie-in */
  const MAIN = { out: 0x86827a, inn: 0x4c4943, cut: 0xa9a59c };
  const mainLen = 2.6;
  [[RM, MAIN.out], [RMI, MAIN.inn]].forEach(([r, col]) => pcyl(r, mainLen, col, XC + mainLen / 2, YM, ZM, fixed, { axis: "x", seg: 32, open: true }));
  const ring = new THREE.RingGeometry(RMI, RM, 32); ring.rotateY(-Math.PI / 2);
  pmesh(ring, MAIN.cut, fixed, { x: XC, y: YM, z: ZM, cast: false });
  const mw = Math.sqrt(RMI * RMI - 0.085 * 0.085);
  { const g = new THREE.PlaneGeometry(mainLen, mw * 2); g.rotateX(-Math.PI / 2); g.translate(XC + mainLen / 2, YM - 0.085, ZM); const uv = g.attributes.uv, p = g.attributes.position; for (let i = 0; i < p.count; i++) uv.setX(i, p.getX(i)); kit.place(new THREE.Mesh(g, sewage), 0, 0, 0, fixed, { cast: false }); }
  const oldEnd = new THREE.Group(); oldEnd.userData.keep = true; group.add(oldEnd);
  const tieOld = [W(RUN - 0.25), W(RUN), V(PX, YM + 0.25, ZM + 0.2), V(PX, YM + RM * 0.72, ZM + RM * 0.68)];
  ptube(tieOld, RO, CLAY.out, oldEnd, { radial: 16, seg: 16 });
  pmesh(new THREE.SphereGeometry(0.15, 14, 10), 0x77736b, oldEnd, { x: PX, y: YM + RM * 0.72, z: ZM + RM * 0.68 }).scale.set(0.8, 0.7, 1);

  /* ------------------------------------------------------- roots from the spruce */
  const ROOT = 0x6a4e33, ROOT_IN = [0xcbb48a, 0xa98e64, 0xd9c7a0];
  const sR = jointS(ROOT_J);
  /** a root: a tube through pts that thins from r0 to r1 */
  const root = (pts0, r0, r1, col, parent, o = {}) => {
    // break each run into three with a little sideways wander, so no root runs dead straight
    const pts = [pts0[0]];
    for (let i = 1; i < pts0.length; i++) {
      const a = pts0[i - 1], b = pts0[i], d = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) * (o.wob ?? 0.12);
      for (let k = 1; k <= 3; k++) { const t = k / 3; pts.push(k === 3 ? b : [lerp(a[0], b[0], t) + (R() - 0.5) * d * 0.3, lerp(a[1], b[1], t) + (R() - 0.5) * d, lerp(a[2], b[2], t) + (R() - 0.5) * d]); }
    }
    const m = ptube(pts, r0, col, parent, { radial: o.radial || 6, density: o.density || 26, tension: 0.4, cast: o.cast ?? r0 > 0.01 });
    const g = m.geometry, { tubularSegments: n, radialSegments: rs } = g.parameters, p = g.attributes.position, c = new THREE.Vector3();
    for (let i = 0; i <= n; i++) {
      m.userData.curve.getPointAt(i / n, c);
      const f = lerp(1, r1 / r0, Math.pow(i / n, 0.8));
      for (let j = 0; j <= rs; j++) { const k = i * (rs + 1) + j; p.setXYZ(k, c.x + (p.getX(k) - c.x) * f, c.y + (p.getY(k) - c.y) * f, c.z + (p.getZ(k) - c.z) * f); }
    }
    return m;
  };
  const rj = (a, ds = 0, r = RB + 0.006) => W(sR + ds, r * Math.sin(a), r * Math.cos(a));
  // three main roots off the spruce, thinning as they go down after the moisture round the joint
  [[0.034, 0.008, [[0.83, -0.12, -12.4], [0.8, -0.6, -12.0], [0.78, -1.3, -11.6], [0.76, -2.0, -11.45], [0.74, -2.7, -11.8]]],
   [0.03, 0.007, [[0.83, -0.15, -12.48], [0.8, -0.7, -13.0], [0.77, -1.4, -13.4], [0.75, -2.2, -13.5], [0.73, -2.9, -13.2]]],
   [0.028, 0.006, [[0.83, -0.2, -12.44], [0.79, -1.0, -12.5], [0.76, -1.9, -12.66], [0.73, -2.7, -12.7], rj(0.25, -0.02, 0.15).toArray()]]
  ].forEach(([r0, r1, pts]) => root(pts, r0, r1, ROOT, fixed));
  // feeder roots off them, converging on the bell, and a mat of hair roots hugging it
  for (let i = 0; i < 8; i++) {
    const a = 0.2 + R() * 1.4, z0 = -11.9 - R() * 1.4, from = [0.7 + R() * 0.1, -2.6 - R() * 0.5, z0];
    const m1 = [from[0] - 0.02 + R() * 0.04, lerp(from[1], -3.3, 0.45), lerp(z0, -12.62, 0.4) + (R() - 0.5) * 0.25], m2 = rj(a + 0.5, -0.12 + R() * 0.08, 0.17);
    root([from, m1, m2.toArray(), rj(a, -0.03, RB + 0.008).toArray(), rj(a + 0.2, 0.004, 0.106).toArray()], 0.0055, 0.0016, ROOT, fixed, { radial: 5, density: 40, cast: false });
  }
  for (let i = 0; i < 18; i++) {
    const a = R() * 1.7, ds = -0.06 + R() * 0.16, sweep = 0.4 + R() * 0.8;
    root([rj(a, ds, RB + 0.004).toArray(), rj(a + sweep * 0.5, ds + 0.02, RB + 0.009).toArray(), rj(a + sweep, ds - 0.01, RB + 0.004).toArray()], 0.0028, 0.0012, ROOT, fixed, { radial: 4, density: 60, cast: false });
  }
  // inside: the root mass streams down the pipe from the joint, hanging into the flow (the auger shortens it)
  const roots = new THREE.Group(); roots.userData.keep = true;
  roots.position.set(0, 0, -(sR + 0.075)); pf.add(roots);
  const NROOT = tier === 0 ? 26 : 44;
  for (let i = 0; i < NROOT; i++) {
    const phi = 0.05 + R() * 3.05, len = 0.12 + R() * R() * 0.6, thick = i < 5 ? 0.0045 : 0.0016 + R() * 0.0018;
    let x = RI * 0.97 * Math.sin(phi), y = RI * 0.97 * Math.cos(phi), z = 0, vx = -x * 0.25, vy = -0.2 - y * 0.2;
    const pts = [];
    for (let k = 0; k <= 9; k++) {
      pts.push([x, y, z]);
      z -= len / 9;
      vx += (R() - 0.5) * 0.7; vy += (R() - 0.62) * 0.5;
      x += vx * len * 0.06; y += vy * len * 0.06;
      const d = Math.hypot(x, y); if (d > RI * 0.94) { x *= (RI * 0.94) / d; y *= (RI * 0.94) / d; vx *= -0.5; vy *= -0.5; }
    }
    root(pts, thick, thick * 0.35, ROOT_IN[i % 3], roots, { radial: 4, density: 50, cast: false, wob: 0 });
  }
  bakeVC(roots);
  // grease and scale on the bore of the last lengths before the joint
  const SC0 = sR - 0.8, SC1 = sR + 0.9, SCH = 48, SCR = 16;
  const scaleGeo = new THREE.CylinderGeometry(RI - 0.0018, RI - 0.0018, SC1 - SC0, SCR, SCH, true, 0, Math.PI);
  scaleGeo.rotateX(-Math.PI / 2);
  const scale = new THREE.Mesh(paint(scaleGeo, 0x8c7f5c), vc(0.9, 0));
  scale.position.set(0, 0, -(SC0 + SC1) / 2); scale.userData.keep = true; scale.receiveShadow = true; pf.add(scale);

  /* ---------------------------------------------- step 1: camera and reel */
  const camKit = new THREE.Group(); camKit.userData.keep = true; group.add(camKit);
  const kitStatic = new THREE.Group(); camKit.add(kitStatic);
  const RX = 1.55, RY = -2.5, RZ = -2.42;          // reel hub, out in the basement
  // reel frame: two A-legs either side of the drum, feet on the slab
  [RX - 0.09, RX + 0.09].forEach((x) => {
    ptube([[x, -2.79, RZ - 0.26], [x, RY, RZ], [x, -2.79, RZ + 0.26]], 0.011, 0x8c939b, kitStatic, { mat: metal, radial: 8, tension: 0 });
    pcyl(0.013, 0.56, 0x8c939b, x, -2.79, RZ, kitStatic, { axis: "z", mat: metal, seg: 8 });
  });
  pcyl(0.014, 0.2, 0x8c939b, RX, RY, RZ, kitStatic, { axis: "x", mat: metal, seg: 10 });
  // the control unit on the floor at the cleanout: a case with its lid up, the screen in the lid
  const CX = 1.0, CZ = -2.92, LT = 0.32;
  pbox(0.17, 0.075, 0.26, 0x1b1d21, CX, -2.762, CZ, kitStatic, { r: 0.012 });
  pbox(0.07, 0.01, 0.12, 0x3a3e45, CX - 0.03, -2.722, CZ + 0.04, kitStatic, { cast: false });
  const lid = new THREE.Group(); lid.position.set(CX + 0.075, -2.725, CZ); lid.rotation.z = LT; kitStatic.add(lid);
  pbox(0.016, 0.2, 0.26, 0x1b1d21, -0.008, 0.1, 0, lid, { r: 0.006 });
  const screen = L.plane("mon", 0.225, camKit, 0, 0, 0, { keep: true });
  screen.rotation.order = "ZYX"; screen.rotation.set(0, -Math.PI / 2, LT);
  screen.position.set(CX + 0.075 - 0.0165 * Math.cos(LT) - 0.1 * Math.sin(LT), -2.725 - 0.0165 * Math.sin(LT) + 0.1 * Math.cos(LT), CZ);
  // the drum, coiled with the yellow push rod; it turns as rod pays out
  const drum = new THREE.Group(); drum.position.set(RX, RY, RZ); camKit.add(drum);
  pcyl(0.25, 0.014, 0x26292e, 0.075, 0, 0, drum, { axis: "x", seg: 36 });
  pcyl(0.05, 0.15, 0x3a3e45, 0, 0, 0, drum, { axis: "x", seg: 16 });
  for (let i = 0; i < 7; i++) { const t = new THREE.TorusGeometry(0.11 + i * 0.019, 0.0075, 6, 40); t.rotateY(Math.PI / 2); pmesh(t, 0xe2b52a, drum, { x: -0.02 + (i % 2) * 0.016, cast: false }); }
  [0, 2.1, 4.2].forEach((a) => pbox(0.012, 0.36, 0.03, 0x8c939b, 0.06, 0, 0, drum, { mat: metal, rot: [a, 0, 0], cast: false }));
  bakeVC(drum);
  // rod: off the drum, across the floor, into the cleanout, down the riser and along the drain to the wall; video lead to the case
  const DRY = (z) => DY0 - (DZ0 - z) * Math.tan(DSL);
  ptube([[RX - 0.04, RY - 0.23, RZ - 0.1], [RX - 0.12, -2.775, RZ - 0.32], [1.2, -2.79, -2.62], [0.84, -2.785, -2.68], [PX + 0.08, -2.76, CLZ + 0.04], [PX + 0.01, -2.86, CLZ], [PX, DRY(CLZ) - 0.06, CLZ - 0.04]], 0.0055, 0xe2b52a, kitStatic, { radial: 6, density: 24, tension: 0.4, cast: false });
  ptube([[RX - 0.06, RY, RZ], [RX - 0.2, -2.79, RZ - 0.1], [CX + 0.06, -2.79, CZ + 0.18], [CX + 0.05, -2.76, CZ + 0.12]], 0.005, 0x101114, kitStatic, { radial: 6, cast: false });
  pcyl(0.05, 0.03, 0xb08a3a, 0.76, -2.785, CLZ + 0.3, kitStatic, { mat: metal, seg: 16 });   // the cleanout plug, out on the floor
  bakeVC(kitStatic);
  // the crawler's road: along the invert of the drain from the cleanout, out under the footing and down the lateral
  const road = new THREE.CatmullRomCurve3([V(PX, DRY(CLZ - 0.1) - RI, CLZ - 0.1), V(PX, DRY(-3.6) - RI, -3.6), V(PX, DRY(Z0 + 0.1) - RI, Z0 + 0.1), W(0.3, 0, -RI), W(1.0, 0, -RI), W(1.6, 0, -RI)], false, "catmullrom", 0.2);
  const ROADN = 120, rod = tube(road.getSpacedPoints(ROADN), 0.0055, matte, group, { seg: ROADN, radial: 6, keep: true, cast: false });
  paint(rod.geometry, 0xe2b52a);
  const roadP = new THREE.Vector3(), roadT = new THREE.Vector3();
  // the crawler: a yellow body on four wheels, the camera head with its ring of LEDs in front
  const crawler = new THREE.Group(); crawler.userData.keep = true; group.add(crawler);
  pbox(0.06, 0.034, 0.16, 0xe9c22e, 0, 0.002, 0, crawler, { r: 0.008 });
  pbox(0.03, 0.012, 0.1, 0x2a2d31, 0, 0.024, 0.01, crawler, { r: 0.004 });
  [-1, 1].forEach((sx) => [-1, 1].forEach((sz) => { const w = pcyl(0.02, 0.013, 0x101114, sx * 0.039, -0.012, sz * 0.058, crawler, { axis: "x", seg: 14 }); w.rotation.z = sx * 0.5; }));
  pcyl(0.022, 0.06, 0x9aa1a9, 0, 0.008, -0.105, crawler, { axis: "z", seg: 18 });
  pcyl(0.0095, 0.006, 0x050608, 0, 0.008, -0.136, crawler, { axis: "z", seg: 14 });
  pcyl(0.008, 0.03, 0x2a2d31, 0, 0.004, 0.092, crawler, { axis: "z", seg: 10 });
  const ledRing = new THREE.Mesh(new THREE.TorusGeometry(0.0158, 0.003, 6, 20), mats.led(0xfff0d8, 2.4));
  ledRing.position.set(0, 0.008, -0.1355); crawler.add(ledRing);
  bakeVC(crawler);
  const beam = kit.sprite(0xffe2bd, 0.16, 0, 0.008, -0.16, crawler, 0.55);

  /* ------------------------------------------------ step 3: auger and jet */
  const auger = new THREE.Group(); auger.userData.keep = true; pf.add(auger);
  const cutter = new THREE.Group(); auger.add(cutter);
  pcyl(0.012, 0.05, 0xa8b0b8, 0, 0, 0, cutter, { axis: "z", mat: metal, seg: 12 });
  for (let i = 0; i < 4; i++) { const b = pbox(0.004, RI * 1.7, 0.03, 0xc8ced4, 0, 0, -0.03, cutter, { mat: metal, cast: false }); b.rotation.z = (i * Math.PI) / 4; }
  pcyl(0.009, 0.04, 0x55595f, 0, 0, 0.04, auger, { axis: "z", mat: metal, seg: 10 });
  bakeVC(cutter); bakeVC(auger);
  const coilGeo = new THREE.CylinderGeometry(0.0085, 0.0085, 1, 8, 1, true); coilGeo.translate(0, 0.5, 0); coilGeo.rotateX(-Math.PI / 2);
  const coil = new THREE.Mesh(paint(coilGeo, 0x4a4e55), metal); coil.userData.keep = true; pf.add(coil);
  const nozzle = new THREE.Group(); nozzle.userData.keep = true; pf.add(nozzle);
  pcyl(0.014, 0.04, 0xc9a24a, 0, 0, 0, nozzle, { axis: "z", mat: metal, seg: 14 });
  pmesh(new THREE.SphereGeometry(0.014, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(-Math.PI / 2), 0xc9a24a, nozzle, { z: -0.02, mat: metal });
  pcyl(0.011, 0.025, 0x9aa1a9, 0, 0, 0.032, nozzle, { axis: "z", mat: metal, seg: 12 });
  bakeVC(nozzle);
  const hoseGeo = new THREE.CylinderGeometry(0.009, 0.009, 1, 8, 1, true); hoseGeo.translate(0, 0.5, 0); hoseGeo.rotateX(-Math.PI / 2);
  const hose = new THREE.Mesh(paint(hoseGeo, 0x15171a), gloss); hose.userData.keep = true; pf.add(hose);
  // six jets firing back at 30 degrees: the spray hits the wall and runs down
  const NSPRAY = 200, spray = kit.particles(NSPRAY, { color: 0x9fd0ff, size: 0.017, gain: 1.6 });
  pf.add(spray);

  /* ------------------------------------------ step 4: liner and bursting */
  const trenchless = new THREE.Group(); trenchless.userData.keep = true; pf.add(trenchless);
  const LH = 60, LR = 16, linerLen = LINER[1] - LINER[0];
  const linerMat = kit.flow(0xff9a3d, { base: 0x5f9c7c, intensity: 0.75, dash: 1.4, speed: 0.32, rest: 0.12, gain: 1, roughness: 0.55, metalness: 0 });
  linerMat.side = THREE.DoubleSide;
  const linerGeo = new THREE.CylinderGeometry(RI - 0.003, RI - 0.003, linerLen, LR, LH, true, 0, Math.PI);
  linerGeo.rotateX(-Math.PI / 2); linerGeo.translate(0, 0, -(LINER[0] + LINER[1]) / 2);
  { const p = linerGeo.attributes.position, uv = linerGeo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setX(i, -p.getZ(i)); }
  const liner = kit.place(new THREE.Mesh(linerGeo, linerMat), 0, 0, 0, trenchless, { keep: true });
  // the inverting front: the liner turns itself inside out as water pressure pushes it down the pipe
  const bulbGeo = new THREE.SphereGeometry(RI - 0.003, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2); bulbGeo.rotateX(-Math.PI / 2); bulbGeo.scale(1, 1, 0.45);
  const bulb = kit.place(new THREE.Mesh(bulbGeo, linerMat), 0, 0, 0, trenchless, { keep: true });
  const hdpeGeo = new THREE.CylinderGeometry(0.08, 0.08, 1, 24, 1, true); hdpeGeo.translate(0, 0.5, 0); hdpeGeo.rotateX(-Math.PI / 2);
  const hdpe = kit.place(new THREE.Mesh(hdpeGeo, mats.hdpe), 0, 0, 0, trenchless, { keep: true });
  const head = new THREE.Group(); head.userData.keep = true; trenchless.add(head);
  pcyl(0.03, 0.17, 0x9aa3ad, 0, 0, -0.085, head, { axis: "z", r2: 0.104, mat: metal, seg: 20 });
  pcyl(0.086, 0.07, 0x6c737b, 0, 0, 0.035, head, { axis: "z", mat: metal, seg: 20 });
  for (let i = 0; i < 3; i++) { const f = pbox(0.006, 0.05, 0.12, 0xb7bec6, 0, 0, -0.07, head, { mat: metal }); f.geometry.translate(0, 0.085, 0); f.rotation.z = (i * Math.PI * 2) / 3 + 0.4; }
  pcyl(0.006, BURST[1] - 0.05, 0x9aa1a9, 0, 0, -BURST[1] / 2 + 0.05, head, { axis: "z", mat: metal, seg: 6, cast: false });
  bakeVC(head);
  // pieces of the old pipe pushed out into the soil
  const NSH = 44, shardGeo = paint(new THREE.BoxGeometry(0.05, 0.011, 0.065), 0x74422a);
  const shards = new THREE.InstancedMesh(shardGeo, matte, NSH); shards.userData.keep = true; shards.frustumCulled = false; shards.castShadow = true;
  const shardS = [];
  { const q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < NSH; i++) {
      const s = BURST[0] + 0.1 + (i / NSH) * (BURST[1] - BURST[0] - 0.15) + R() * 0.05, a = R() * Math.PI * 2, r = 0.1 + R() * 0.05;
      p.set(r * Math.sin(a), r * Math.cos(a), -s); e.set(R() * 0.5, R() * 0.6, -a + (R() - 0.5) * 0.6); q.setFromEuler(e);
      sc.set(0.6 + R() * 0.6, 1, 0.6 + R() * 0.7); m4.compose(p, q, sc); shards.setMatrixAt(i, m4); shardS.push(s);
    } }
  trenchless.add(shards);

  /* ------------------------------------------------- step 5: open-cut trench */
  const trench = new THREE.Group(); trench.userData.keep = true; group.add(trench);
  const tStatic = new THREE.Group(); trench.add(tStatic);
  face(TZ0, TZ1, TY, 0, TX, tStatic);
  face(TZ0, TZ1, -9.02, TY, FX, tStatic);
  { // trench ends: earth walls facing into the trench
    [[TZ0, -1], [TZ1, 1]].forEach(([z, s]) => {
      const g = new THREE.PlaneGeometry(TX - CUT, -TY); g.rotateY(s > 0 ? 0 : Math.PI); g.translate((TX + CUT) / 2, TY / 2, z);
      const p = g.attributes.position, uv = g.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) * 0.3 + 60) / 240, (p.getY(i) + 9.02) / 9);
      kit.place(new THREE.Mesh(g, faceMat), 0, 0, 0, tStatic, { cast: false });
    });
    const fl = new THREE.PlaneGeometry(TX - CUT, TZ0 - TZ1); fl.rotateX(-Math.PI / 2); fl.translate((TX + CUT) / 2, TY, (TZ0 + TZ1) / 2);
    pmesh(fl, 0x3b2c1e, tStatic, { cast: false });
  }
  // cut asphalt and its gravel base where the trench crosses the lane
  pbox(0.01, 0.1, -15.95 - TZ1, 0x2a2b2e, TX - 0.006, -0.045, (-15.95 + TZ1) / 2, tStatic, { cast: false });
  pbox(0.01, 0.3, -15.95 - TZ1, 0x77736b, TX - 0.006, -0.25, (-15.95 + TZ1) / 2, tStatic, { cast: false });
  // hydraulic shores: rails on plywood against the far wall, cylinders across to the near wall (cut by the section)
  [-15.1, -16.4, -17.6].forEach((z) => {
    pbox(0.02, 2.4, 1.0, 0x7a6146, TX - 0.012, -1.45, z, tStatic, { mat: matte, cast: false });
    pbox(0.05, 2.5, 0.08, 0xc2c8ce, TX - 0.048, -1.4, z, tStatic, { mat: metal });
    [-0.6, -2.3].forEach((y) => { pcyl(0.03, TX - 0.07 - CUT + 0.3, 0xc2c8ce, (TX - 0.07 + CUT - 0.3) / 2, y, z, tStatic, { axis: "x", mat: metal, seg: 12 }); pcyl(0.042, 0.2, 0xd8b23a, TX - 0.25, y, z, tStatic, { axis: "x", mat: gloss, seg: 14 }); });
  });
  // ladder out of the trench, leaning on its house end
  [0.62, 1.0].forEach((x) => ptube([[x, TY, TZ0 - 0.6], [x, 0.9, TZ0 - 0.04]], 0.016, 0xc2c8ce, tStatic, { mat: metal, radial: 8, tension: 0 }));
  for (let i = 0; i < 15; i++) { const k = (i + 0.5) / 15; pcyl(0.012, 0.38, 0xc2c8ce, 0.81, lerp(TY, 0.9, k), lerp(TZ0 - 0.6, TZ0 - 0.04, k), tStatic, { axis: "x", mat: metal, seg: 8, cast: false }); }
  // spoil pile beside the trench, snow on its shoulders
  pmesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), 0x3a2b1d, tStatic, { x: 2.6, y: -0.05, z: -15.0 }).scale.set(1.15, 0.85, 1.05);
  pmesh(new THREE.SphereGeometry(1, 20, 6, 0, Math.PI * 2, 0, 0.7), 0xdfe6ef, tStatic, { x: 2.6, y: -0.06, z: -15.0, cast: false }).scale.set(1.17, 0.87, 1.07);
  // gravel bedding, new green PVC on it, a rubber coupling to the old clay, a 45 into a saddle wye on the main
  const tf = new THREE.Group(); tf.position.copy(pf.position); tf.rotation.copy(pf.rotation); tStatic.add(tf);
  const sT0 = jointS(13) - 0.04;
  { const sB = RUN - 0.3, a = W(sT0, 0, -0.035), b = W(sB, 0, -0.035);
    cap([[a.z, TY], [b.z, TY], [b.z, b.y], [a.z, a.y]], gravel, [], tStatic);
    const g = new THREE.PlaneGeometry(TX - XC, sB - sT0); g.rotateX(-Math.PI / 2); g.translate((TX + XC) / 2 - PX, -0.035, -(sT0 + sB) / 2);
    const p = g.attributes.position, uv = g.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i), p.getZ(i));
    kit.place(new THREE.Mesh(g, gravel), 0, 0, 0, tf, { cast: false });
    pbox(TX - XC - 0.01, 0.5, 0.012, 0x3b2c1e, (TX + XC) / 2 - PX, -0.3, -sT0 + 0.006, tf, { cast: false }); }
  const PVC = 0x2f7d4a;
  pcyl(0.081, RUN - sT0, PVC, 0, 0, -(sT0 + RUN) / 2, tf, { axis: "z", mat: gloss, seg: 28 });
  pcyl(0.1, 0.16, 0x17181b, 0, 0, -sT0 + 0.02, tf, { axis: "z", seg: 24 });
  [-0.05, 0.05].forEach((d) => pcyl(0.102, 0.018, 0xc2c8ce, 0, 0, -sT0 + 0.02 + d, tf, { axis: "z", mat: metal, seg: 24, cast: false }));
  L.plane("pvc", 0.62, tf, -0.0815, 0.012, -(sT0 + 0.7), { rot: [0, -Math.PI / 2, 0] });
  ptube([W(RUN - 0.05), W(RUN + 0.1), V(PX, YM + 0.24, ZM + 0.2), V(PX, YM + RM * 0.73, ZM + RM * 0.69)], 0.081, PVC, tStatic, { mat: gloss, radial: 20, seg: 16 });
  { const g = new THREE.CylinderGeometry(RM + 0.013, RM + 0.013, 0.34, 24, 1, true, -0.25, 2.2); g.rotateZ(Math.PI / 2); pmesh(g, PVC, tStatic, { x: PX, y: YM, z: ZM, mat: gloss }); }
  [-0.13, 0.13].forEach((d) => pcyl(RM + 0.017, 0.025, 0xc2c8ce, PX + d, YM, ZM, tStatic, { axis: "x", mat: metal, seg: 32, open: true, cast: false }));
  L.plane("permit", 0.17, tStatic, XC + 0.03, YM + 0.24, ZM - 0.26, { rot: [0, -Math.PI / 2, 0] });
  bakeVC(tStatic);
  /* ------------------------------------------------- property line stake */
  { const zp = -15.95;
    pbox(0.035, 0.75, 0.035, 0x9a7a52, 0.66, -0.12, zp, fixed);
    pcyl(0.008, 0.6, 0x5b4636, 0.66, -0.7, zp, fixed, { seg: 6, cast: false });
    pbox(0.004, 0.12, 0.05, 0xf08a2c, 0.64, 0.17, zp - 0.03, fixed, { cast: false, rot: [0, 0, 0.2] });
    L.plane("pl", 0.13, fixed, 0.64, 0.05, zp, { rot: [0, -Math.PI / 2, 0] }); }

  /* --------------------------------- step 6: water service, weeping tile, sump */
  // frost in the top of the soil, and the wet patch round the leak
  const fcv = document.createElement("canvas"); fcv.width = 256; fcv.height = 128;
  { const g = fcv.getContext("2d"), gr = g.createLinearGradient(0, 0, 0, 128);
    gr.addColorStop(0, "rgba(220,236,255,0.55)"); gr.addColorStop(0.86, "rgba(205,226,252,0.34)"); gr.addColorStop(0.97, "rgba(205,226,252,0.12)"); gr.addColorStop(1, "rgba(200,222,250,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(240,248,255,${0.2 + R() * 0.5})`; g.fillRect(R() * 128, Math.pow(R(), 1.6) * 110, 1 + R() * 1.5, 1 + R() * 1.5); }
    const w = g.createRadialGradient(192, 64, 2, 192, 64, 62); w.addColorStop(0, "rgba(8,6,4,0.72)"); w.addColorStop(1, "rgba(8,6,4,0)"); g.fillStyle = w; g.fillRect(128, 0, 128, 128); }
  const fTex = new THREE.CanvasTexture(fcv); fTex.colorSpace = THREE.SRGBColorSpace;
  const fMat = new THREE.MeshStandardMaterial({ map: fTex, transparent: true, depthWrite: false, roughness: 0.9, emissive: 0x9fb8d8, emissiveIntensity: 0.05 });
  const decal = (u0, u1, w, h, x, y, z) => {
    const g = new THREE.PlaneGeometry(w, h); g.rotateY(-Math.PI / 2); const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, lerp(u0, u1, uv.getX(i)));
    return kit.place(new THREE.Mesh(g, fMat), x, y, z, fixed, { cast: false, receive: false });
  };
  decal(0, 0.5, 26, 2.05, FX - 0.004, -1.025, 4.25 + 13);
  decal(0.5, 1, 0.8, 0.6, FX - 0.006, -2.45, 4.8);
  // water service: grey Poly-B from the street, a crimp coupling to copper, through the wall, up to the shut-off and meter
  const WY = -2.32, wsY = (z) => WY - Math.max(0, z - 4.45) * 0.012;
  const pbMat = matte, cuMat = metal;
  ptube([[WX, wsY(4.62), 4.62], [WX, wsY(7.5), 7.5], [WX, wsY(12), 12]], 0.0135, 0x80868d, fixed, { mat: pbMat, radial: 10, tension: 0 });
  ptube([[WX, wsY(4.6), 4.6], [WX, WY, 4.45], [WX, WY, 3.96], [WX, WY + 0.06, 3.9], [WX, WY + 0.2, 3.88], [WX, -1.02, 3.88], [WX, -0.3, 3.88], [WX, -0.24, 3.8], [WX - 0.5, -0.24, 3.8]], 0.0125, 0xb8743f, fixed, { mat: cuMat, radial: 10, density: 26, tension: 0.15 });
  pcyl(0.019, 0.04, 0xc9a24a, WX, wsY(4.61), 4.61, fixed, { axis: "z", mat: metal, seg: 14 });
  [4.585, 4.635].forEach((z) => pcyl(0.0175, 0.008, 0xb8743f, WX, wsY(z), z, fixed, { axis: "z", mat: metal, seg: 12, cast: false }));
  // the split in the Poly-B, swollen at the crack
  pcyl(0.016, 0.06, 0x7a8087, WX, wsY(4.8), 4.8, fixed, { axis: "z", seg: 12 });
  pbox(0.004, 0.012, 0.05, 0x0c0d0f, WX - 0.016, wsY(4.8) + 0.004, 4.8, fixed, { cast: false });
  L.plane("pb", 0.19, fixed, WX - 0.0145, wsY(5.3), 5.3, { rot: [0, -Math.PI / 2, 0] });
  // shut-off valve with its tag, then the meter
  pcyl(0.022, 0.07, 0xc9a24a, WX, -1.72, 3.88, fixed, { mat: metal, seg: 14 });
  pbox(0.012, 0.016, 0.1, 0xc23a2b, WX - 0.03, -1.7, 3.88 - 0.04, fixed, { mat: gloss, cast: false });
  L.plane("shut", 0.11, fixed, WX - 0.045, -1.8, 3.82, { rot: [0, -Math.PI / 2, 0] });
  pbox(0.1, 0.17, 0.1, 0x22344a, WX, -1.42, 3.88, fixed, { r: 0.012, mat: gloss });
  pcyl(0.04, 0.02, 0x8c939b, WX - 0.05, -1.4, 3.88, fixed, { axis: "x", mat: metal, seg: 18 });
  // weeping tile: perforated pipe in a filter sock, in clear stone, cut where the section crosses it
  const TZ = 4.7, TYc = -3.25;
  pcyl(0.066, FX - XC, 0xbdb7aa, (XC + FX) / 2, TYc, TZ, fixed, { axis: "x", seg: 24, open: true });
  pcyl(0.05, FX - XC, 0x111214, (XC + FX) / 2, TYc, TZ, fixed, { axis: "x", seg: 24, open: true });
  { const g = new THREE.RingGeometry(0.05, 0.066, 24); g.rotateY(-Math.PI / 2); pmesh(g, 0x2a2c2f, fixed, { x: XC + 0.002, y: TYc, z: TZ, cast: false });
    const s = new THREE.RingGeometry(0.06, 0.066, 24); s.rotateY(-Math.PI / 2); pmesh(s, 0xd8d3c6, fixed, { x: XC + 0.003, y: TYc, z: TZ, cast: false }); }
  cap([[4.5, -3.37], [5.08, -3.37], [5.08, -2.87], [4.5, -2.87]], gravel, [[TZ, TYc, 0.068]], fixed);
  pbox(FX - XC, 0.008, 0.66, 0xcfcabe, (XC + FX) / 2, -2.865, 4.82, fixed, { cast: false });
  // tile to sump: a solid pipe under the footing into the pit
  ptube([[PX, TYc - 0.03, TZ - 0.04], [PX, -3.36, 4.42], [PX, -3.37, 3.6], [PX, -3.37, SZ + 0.2]], 0.038, 0x1b1d21, fixed, { radial: 12, tension: 0.2 });
  // the pit: a plastic basin cut open, the pump on its floor, its float, the discharge up through a check valve
  const pit = new THREE.Mesh(plainShell(0.68, 0.215, 0.232, 0x1c1e22, 0x2b2e33, 0x50545b, 22), matte);
  pit.geometry.rotateX(Math.PI / 2); pit.position.set(PX, -3.48, SZ); fixed.add(pit); pit.receiveShadow = true;
  { const g = new THREE.CircleGeometry(0.232, 20, -Math.PI / 2, Math.PI); g.rotateX(-Math.PI / 2); pmesh(g, 0x2b2e33, fixed, { x: PX, y: -3.475, z: SZ, cast: false }); }
  pcyl(0.082, 0.22, 0x2a2d31, PX, -3.36, SZ, fixed, { seg: 20 });
  pmesh(new THREE.SphereGeometry(0.082, 18, 6, 0, Math.PI * 2, 0, Math.PI / 2), 0x2a2d31, fixed, { x: PX, y: -3.25, z: SZ });
  pcyl(0.095, 0.02, 0x1a1b1e, PX, -3.465, SZ, fixed, { seg: 20 });
  L.plane("pump", 0.1, fixed, PX - 0.084, -3.34, SZ, { rot: [0, -Math.PI / 2, 0] });
  pcyl(0.004, 0.3, 0x8c939b, PX + 0.02, -3.2, SZ + 0.12, fixed, { mat: metal, seg: 6, cast: false });
  const disMat = water(0xd2cfc6, { intensity: 1.5, speed: 1.4, level: 0, roughness: 0.45 });
  const DX = 0.66;
  tube([[PX, -3.17, SZ], [PX, -3.0, SZ], [DX, -2.85, SZ], [DX, -2.2, SZ], [DX, -0.5, SZ], [DX, -0.42, SZ + 0.08], [DX, -0.42, 3.86], [DX, -0.34, 3.94], [DX, 0.12, 3.94], [DX, 0.15, 4.02], [DX, 0.15, 4.42], [DX, 0.06, 4.5]], 0.024, disMat, fixed, { radial: 10, density: 16, tension: 0.12 });
  pcyl(0.034, 0.13, 0x8f949b, DX, -1.9, SZ, fixed, { seg: 16 });
  [-1.84, -1.96].forEach((y) => pcyl(0.037, 0.012, 0xc2c8ce, DX, y, SZ, fixed, { mat: metal, seg: 16, cast: false }));
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.214, 24, -Math.PI / 2, Math.PI).rotateX(-Math.PI / 2), mats.water);
  pool.position.set(PX, -3.3, SZ); pool.userData.keep = true; group.add(pool);
  const float = pcyl(0.024, 0.05, 0x3a3e45, PX + 0.02, -3.2, SZ + 0.12, group, { seg: 12, keep: true });
  // drops: water working down through the backfill to the tile, and spraying from the split
  const NDROP = 64, drops = kit.particles(NDROP, { color: 0x4fa6ff, size: 0.022, gain: 1.3 });
  group.add(drops);

  bakeVC(fixed);
  /** merge every static mesh under g by material, keeping vertex colours (kit.bake drops them) */
  function bakeVC(g) {
    g.updateWorldMatrix(true, true);
    const inv = new THREE.Matrix4().copy(g.matrixWorld).invert(), mw = new THREE.Matrix4(), buckets = new Map(), gone = [];
    const kept = (o) => { for (let p = o; p && p !== g; p = p.parent) if (p.userData.keep) return true; return false; };
    g.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || kept(o) || Array.isArray(o.material) || o.children.length) return;
      const key = o.material.uuid + "|" + o.renderOrder;
      let b = buckets.get(key); if (!b) buckets.set(key, (b = { mat: o.material, cast: false, recv: false, ro: o.renderOrder, geos: [] }));
      b.cast = b.cast || o.castShadow; b.recv = b.recv || o.receiveShadow;
      const geo = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      Object.keys(geo.attributes).forEach((k) => { if (k !== "position" && k !== "normal" && k !== "uv" && k !== "color") geo.deleteAttribute(k); });
      if (!geo.attributes.uv) geo.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
      if (o.material.vertexColors) { if (!geo.attributes.color) paint(geo, 0xffffff); } else if (geo.attributes.color) geo.deleteAttribute("color");
      geo.applyMatrix4(mw.multiplyMatrices(inv, o.matrixWorld));
      b.geos.push(geo); gone.push(o);
    });
    buckets.forEach((b) => {
      const geo = mergeGeometries(b.geos); if (!geo) return;
      const mesh = new THREE.Mesh(geo, b.mat); mesh.castShadow = b.cast; mesh.receiveShadow = b.recv; mesh.renderOrder = b.ro; mesh.userData.keep = true;
      g.add(mesh); b.geos.forEach((x) => x.dispose());
    });
    gone.forEach((o) => { o.parent && o.parent.remove(o); o.geometry.dispose(); });
  }

  /* --------------------------------------------------------------- state */
  const anchors = {
    hub: W(5.6, 0.02, RO + 0.02), cam: W(1.2), roots: W(sR + 0.12, 0.03, 0.03), jet: W(8.2),
    liner: W(5.6), burst: W(8.3), trench: V(1.0, -1.4, -15.4), main: V(PX, YM + RM + 0.02, ZM + 0.05),
    water: V(WX, wsY(4.8), 4.8), tile: V(PX, TYc, TZ)
  };
  const P = { fx: PX + 0.1, time: 19.4, cut: 0, ghost: 0, section: 1, cutX: CUT, ugFocus: null, ground: 1, orbit: 0.01, season: 0, lift: 0 };
  const shots = [
    { ...P, radius: 28, theta: -0.95, phi: 1.2, ty: -2.2, fz: -7.8, dof: 0, orbit: 0.02, time: 16.6, narrow: { radius: 34, fz: -10.5, ty: -1.6 } },
    { ...P, radius: 3.2, theta: -1.57, phi: 1.4, ty: -3.0, fz: -3.55, dof: 0.6, narrow: { radius: 3.3, fz: -3.45 } },
    { ...P, radius: 1.7, theta: -1.42, phi: 1.22, ty: -3.45, fz: -12.8, dof: 1.1, narrow: { radius: 1.9 } },
    { ...P, radius: 1.6, theta: -1.5, phi: 1.32, ty: -3.56, fz: -12.5, dof: 1.1, narrow: { radius: 1.8, fz: -12.62 } },
    { ...P, radius: 5.2, theta: -1.55, phi: 1.42, ty: -3.45, fz: -10.9, dof: 0.8, narrow: { radius: 7.2, fz: -11.3 } },
    { ...P, radius: 8.6, theta: -1.62, phi: 1.14, ty: -2.1, fz: -16.8, dof: 0.6, time: 16.6, narrow: { radius: 9, fz: -16.5 } },
    { ...P, radius: 7.2, theta: -1.5, phi: 1.46, ty: -2.6, fz: 3.7, dof: 0.7, narrow: { radius: 8.6, fz: 3.3 } }
  ];
  let monKey = "", pumpK = 0, sewK = 1;
  const flag = (s) => (s > 0.95 && s < 1.55 ? "CRACK" : Math.abs(s - jointS(OFFSET_J) - 0.06) < 0.1 ? "OFFSET JOINT" : (s - S0 + SEG * 2) % SEG < 0.12 ? "JOINT" : "");
  // drop particles: per-drop seed
  const dropSeed = new Float32Array(NDROP * 2);
  for (let i = 0; i < NDROP; i++) { dropSeed[i * 2] = R(); dropSeed[i * 2 + 1] = R(); }
  const sprayDir = new Float32Array(NSPRAY * 2);
  for (let i = 0; i < NSPRAY; i++) { sprayDir[i * 2] = ((i % 6) / 6) * Math.PI * 2 + R() * 0.3; sprayDir[i * 2 + 1] = R(); }

  return {
    name: "sewer", group, anchors, shots,
    hides: (H, U) => {
      const out = H.sys.sewer ? [...H.sys.sewer.meshes] : [];
      if (U && U.groups) ["water", "gas", "sewer", "found", "radon"].forEach((k) => U.groups[k] && out.push(U.groups[k]));
      if (U && U.group) U.group.children.forEach((o) => { const p = o.geometry && o.geometry.parameters; if (o.isMesh && p && (p.height === 9 || p.depth === 240)) out.push(o); });
      return out;
    },
    light(step) {
      if (step === 0) return { pos: [-2.6, -1.0, -8.6], at: [0.8, -3.3, -11.5], power: 0.7, fill: 0.6 };
      if (step === 1) return { pos: [-1.6, -3.05, -5.2], at: [0.7, -3.3, -4.0], power: 0.55, fill: 0.9 };
      if (step === 2 || step === 3) return { pos: [-1.3, -2.5, -12.0], at: [0.7, -3.5, -12.8], power: 0.6, fill: 0.8 };
      if (step === 4) return { pos: [-4.6, -2.0, -9.4], at: [0.75, -3.55, -11.1], power: 1.0, fill: 0.6 };
      if (step === 5) return { pos: [-2.6, -1.2, -15.0], at: [1.0, -2.8, -16.6], power: 1.1, fill: 0.7 };
      return { pos: [-2.4, -2.1, 6.6], at: [0.75, -2.9, 4.4], power: 0.9, fill: 1.0 };
    },
    update({ step, q, t, dt, snap }) {
      const ease = snap ? 1 : 1 - Math.exp(-dt * 5);
      const tt = reduce ? 0 : t;
      // which parts of the story are in the pipe at this step
      const sHead = lerp(BURST[0] + 0.05, BURST[1] - 0.05, q);
      showClay((j) => (step === 4 && j >= 9 && j <= 11 && jointS(j) + SEG * 0.5 < sHead) || (step === 5 && j >= 13));
      camKit.visible = crawler.visible = rod.visible = step === 1;
      trench.visible = step === 5; backfill.visible = oldEnd.visible = step !== 5;
      trenchless.visible = step === 4;
      const dirty = step <= 3;
      roots.visible = scale.visible = dirty;
      sewK = lerp(sewK, step === 0 ? 1.8 : 0.55, ease);
      sewage.userData.level.value = sewK;

      // step 1: the crawler pays out along the lateral; the drum turns; the monitor reads the line
      if (step === 1) {
        const u = lerp(0.0, 0.62, q);
        road.getPointAt(u, roadP); road.getTangentAt(u, roadT);
        crawler.position.copy(roadP); crawler.position.y += 0.045 - 0.003;
        crawler.rotation.x = Math.atan2(roadT.y, -roadT.z);
        rod.geometry.setDrawRange(0, Math.round(u * ROADN) * 6 * 6);
        const s = Z0 - roadP.z;
        drum.rotation.x = -u * 9;
        anchors.cam.copy(roadP); anchors.cam.y += 0.07;
        beam.material.opacity = 0.45 + (reduce ? 0 : 0.08 * Math.sin(tt * 9));
        const d = (u * road.getLength() + 0.4).toFixed(1), fl = s < S0 ? "" : flag(s), key = d + fl;
        if (key !== monKey) { monKey = key; L.set("mon", d + " m", s < S0 ? "CAST IRON 150 mm" : "CLAY 150 mm · 1958", { flag: fl }); }
      }
      // step 3: the auger bores through the roots, then the jet scours the wall back to clean clay
      const qa = step === 3 ? clamp(q / 0.42, 0, 1) : 0, qj = step === 3 ? clamp((q - 0.42) / 0.58, 0, 1) : 0;
      auger.visible = coil.visible = step === 3 && q < 0.42;
      nozzle.visible = hose.visible = spray.visible = step === 3 && q >= 0.42;
      const cutK = step === 3 ? smooth(0.1, 0.9, qa) : 0;
      roots.scale.set(1, 1, step === 3 && q >= 0.42 ? 0.12 : Math.max(0.12, 1 - 0.88 * cutK));
      const sN = lerp(sR - 0.3, sR + 0.7, qj);
      if (step === 3) {
        if (auger.visible) {
          const sA = lerp(sR - 0.3, sR + 0.4, qa);
          auger.position.set(0, -0.004, -sA); cutter.rotation.z = -tt * 14;
          coil.position.set(0, -0.006, -6.0); coil.scale.set(1, 1, Math.max(0.01, sA - 6.06));
          W(sA, 0, 0.02, anchors.jet);
        }
        if (nozzle.visible) {
          nozzle.position.set(0, -RI + 0.02, -sN);
          hose.position.set(0, -RI + 0.012, -6.0); hose.scale.set(1, 1, Math.max(0.01, sN - 6.03));
          W(sN, 0, 0.02, anchors.jet);
          // spray: six streams back and out, each drop flies to the wall and slides off
          const pos = spray.userData.pos, n = spray.userData.n;
          for (let i = 0; i < n; i++) {
            const a = sprayDir[i * 2], u = (sprayDir[i * 2 + 1] + tt * 2.6) % 1, reach = u * 0.2, rr = 0.012 + reach * 0.62;
            let x = rr * Math.sin(a), y = -RI + 0.02 + rr * Math.cos(a);
            const d = Math.hypot(x, y); if (d > RI * 0.95) { x *= (RI * 0.95) / d; y = (y * RI * 0.95) / d - (reach - 0.1) * 0.15; }
            pos[i * 3] = x; pos[i * 3 + 1] = Math.max(y, -RI * 0.95); pos[i * 3 + 2] = -sN + 0.02 + reach;
          }
          spray.geometry.attributes.position.needsUpdate = true;
        }
        if (q >= 0.42 && sN > sR + 0.1) roots.visible = false;
      }
      // the scale layer: gone behind the nozzle
      if (scale.visible) {
        const rows = step === 3 && q >= 0.42 ? Math.round(clamp((SC1 - sN) / (SC1 - SC0), 0, 1) * SCH) : SCH;
        scale.geometry.setDrawRange(0, rows * SCR * 6);
      }
      // step 4: the liner inverts down the lengths that are cracked; the bursting head splits the next run and pulls HDPE in
      if (step === 4) {
        const sF = lerp(LINER[0] + 0.15, LINER[1], q), rows = Math.round(((sF - LINER[0]) / (LINER[1] - LINER[0])) * LH);
        liner.geometry.setDrawRange((LH - rows) * LR * 6, rows * LR * 6);
        bulb.position.set(0, 0, -sF); W(sF, 0, 0.02, anchors.liner);
        head.position.set(0, 0, -sHead); W(sHead, 0, 0.11, anchors.burst);
        hdpe.position.set(0, 0, -(BURST[0] - 0.1)); hdpe.scale.set(1, 1, Math.max(0.01, sHead - BURST[0] + 0.1 - 0.05));
        let c = 0; while (c < NSH && shardS[c] < sHead - 0.06) c++;
        shards.count = c;
      }
      // step 6: the sump fills from the tile, the float lifts, the pump empties it up the discharge
      const cyc = reduce ? 0.5 : (tt % 9) / 9, fill = cyc < 0.82 ? cyc / 0.82 : 1 - (cyc - 0.82) / 0.18;
      const pumping = !reduce && cyc >= 0.82;
      pool.position.y = lerp(-3.38, -3.14, fill);
      float.position.y = Math.max(-3.24, pool.position.y + 0.012);
      pumpK = lerp(pumpK, pumping ? 1 : 0, snap ? 1 : 1 - Math.exp(-dt * 6));
      disMat.userData.level.value = pumpK;
      if (step === 6) {
        const pos = drops.userData.pos, n = drops.userData.n;
        for (let i = 0; i < n; i++) {
          const a = dropSeed[i * 2], b = dropSeed[i * 2 + 1];
          if (i % 3 !== 2) {           // seeping down through the backfill into the stone round the tile
            const u = (b + tt * 0.11) % 1;
            pos[i * 3] = XC + 0.03 + a * 0.36; pos[i * 3 + 1] = lerp(-1.0, -3.1, u); pos[i * 3 + 2] = 4.32 + ((a * 7.3) % 1) * 0.62;
          } else {                     // spraying from the split in the Poly-B
            const u = (b + tt * 1.3) % 1, dir = (a - 0.5) * 1.6;
            pos[i * 3] = WX - 0.02 - u * 0.05; pos[i * 3 + 1] = wsY(4.8) + 0.01 + u * 0.16 - u * u * 0.22; pos[i * 3 + 2] = 4.8 + dir * u * 0.14;
          }
        }
        drops.geometry.attributes.position.needsUpdate = true;
      }
      drops.visible = step === 6;
    }
  };
}
