// Close-up set 4 of 6: radon.
// A corner of the basement around the radon riser, cut open below the slab to show the soil, the crushed-stone layer and,
// once the system is in, the suction pit; the slab cracks, the wall-to-floor joint and the sump the gas gets in by; a shelf
// with a long-term detector and a digital monitor. Then the system: the sealed core and pit, the 100 mm riser with its
// manometer and labels, the sealed cracks and sump lid, the inline fan in the attic and the stack through the roof.
import * as THREE from "three";
import { lerp, smooth, rng } from "../util.js";

const PX = -1.2, PZ = -1.5, R = 0.057;              // riser axis (where the house has its radon pipe) and 100 mm PVC
const TOP = -2.8, SB = -2.9, GB = -3.05, PB = -4.4; // slab top, slab underside (top of the stone), bottom of the stone, bottom of the soil block
const HX0 = -2.1, HX1 = 0.25, HZ0 = -1.5, HZ1 = -0.25, HY = -3.75;  // the cut-away in front of the riser
const PR = 0.24;                                     // suction pit radius
const FAN = 7.9, STACK = 10.45;                      // fan centre, top of the stack
const WZ = -3.995;                                   // inside face of the back foundation wall
const SX = 0.66, SZ = 1.6;                           // sump
const SH = { x: -0.5, y: -1.52, z: WZ + 0.1 };       // shelf (top face height)
const MON = { x: -0.3, z: WZ + 0.115 };              // monitor on the shelf
const A0 = -0.59;                                     // the riser's labels and manometer face this way (angle from +z toward +x)
const MOUTH = new THREE.Vector3(PX, SB - 0.1, PZ + 0.03);
const ROOF = (x) => 8.054 + 0.1233 + 0.72 * (x + 2.78);   // top of the -x roof slope (house.js geometry)
// cracks in the slab (from, to) and the stretch of wall-to-floor joint the gas comes up through
const CRACK_A = [[-0.36, HZ0], [-0.62, WZ + 0.04]];
const CRACK_B = [[-0.95, HZ1], [-1.5, 1.25]];
const JOINT = [-2.3, 0.05];

export function createRadonSet({ kit, M, tier, reduce }) {
  const { box, cyl, tube, mats, atlas, V } = kit;
  const group = new THREE.Group();
  const fixed = new THREE.Group(), before = new THREE.Group(), after = new THREE.Group();
  group.add(fixed, before, after);
  const rand = rng(41);

  /* ------------------------------------------------------------ textures */
  const paint = (w, h, fn, rx, ry) => {
    const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
    fn(cv.getContext("2d"), w, h);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(rx, ry); tex.anisotropy = 8;
    return tex;
  };
  const speckle = (g, w, h, n, cols, rmin, rmax) => { for (let i = 0; i < n; i++) { g.fillStyle = cols[(rand() * cols.length) | 0]; g.beginPath(); g.ellipse(rand() * w, rand() * h, rmin + rand() * (rmax - rmin), rmin + rand() * (rmax - rmin) * 0.7, rand() * 3, 0, 6.3); g.fill(); } };
  // basement slab: grey, a little mottled, with fine aggregate showing
  const slabTex = paint(256, 256, (g, w, h) => {
    g.fillStyle = "#7c776f"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) { const x = rand() * w, y = rand() * h, r = 20 + rand() * 50; const gr = g.createRadialGradient(x, y, 0, x, y, r); const d = rand() > 0.5; gr.addColorStop(0, d ? "rgba(60,56,50,.18)" : "rgba(160,154,144,.14)"); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
    speckle(g, w, h, 900, ["rgba(50,47,43,.35)", "rgba(170,164,152,.3)", "rgba(96,90,82,.4)"], 0.4, 1.3);
  }, 1 / 1.6, 1 / 1.6);
  // crushed stone under the slab
  const gravelTex = paint(256, 256, (g, w, h) => {
    g.fillStyle = "#3a3732"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      const x = rand() * w, y = rand() * h, r = 2 + rand() * 5, s = 70 + rand() * 60, n = 5 + ((rand() * 3) | 0);
      g.fillStyle = `rgb(${s | 0},${(s * 0.97) | 0},${(s * 0.9) | 0})`; g.beginPath();
      for (let k = 0; k < n; k++) { const a = (k / n) * 6.283 + rand() * 0.5, rr = r * (0.6 + rand() * 0.5); g[k ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr * 0.8); }
      g.closePath(); g.fill(); g.strokeStyle = "rgba(20,18,16,.45)"; g.lineWidth = 1; g.stroke();
    }
  }, 1 / 0.45, 1 / 0.45);
  // soil: brown clay-till darkening with depth, with grain and small stones (v runs with height: y = -2.9 is the top row)
  const soilTex = paint(256, 256, (g, w, h) => {
    const img = g.createImageData(w, h), d = img.data;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = y / h, n = (rand() - 0.5) * 26, band = Math.sin(y * 0.11 + Math.sin(x * 0.05) * 1.6) * 6;
      const o = (y * w + x) * 4;
      d[o] = 90 - 30 * k + n + band; d[o + 1] = 68 - 22 * k + n * 0.9 + band; d[o + 2] = 50 - 12 * k + n * 0.8 + band * 0.6; d[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    speckle(g, w, h, 160, ["rgba(150,140,124,.8)", "rgba(120,112,100,.8)", "rgba(70,60,50,.7)"], 0.8, 3.2);
  }, 1 / 1.7, 1 / 1.7);
  soilTex.wrapT = THREE.ClampToEdgeWrapping; soilTex.offset.set(0, 1 + 2.9 / 1.7);

  /* ----------------------------------------------------------- materials */
  const slabMat = kit.std(0xffffff, 0.92, 0, { map: slabTex });
  const gravel = kit.std(0xffffff, 1, 0, { map: gravelTex });
  const soil = kit.std(0xffffff, 1, 0, { map: soilTex });
  const poly = mats.rubber;
  const caulk = kit.std(0x8e8b84, 0.7, 0);
  const pvc = kit.std(0xa6a39b, 0.8, 0);
  const liquid = kit.std(0x1f6fd0, 0.15, 0, { emissive: 0x4fa6ff, emissiveIntensity: 0.55 });
  const steelBracket = mats.blackPlastic, ink = mats.rubber;

  /* --------------------------------------------------------------- labels */
  // cracks and their caulk, printed onto the slab
  const crackCell = (key, w, seed, sealed) => {
    const r = rng(seed), pts = [], branches = [];
    let y = 16; for (let x = 3; x <= w - 3; x += 6) { y = Math.max(7, Math.min(25, y + (r() - 0.5) * 5)); pts.push([x, y]); }
    for (let b = 0; b < 4; b++) { const i = 3 + ((r() * (pts.length - 6)) | 0); const p = pts[i]; branches.push([p, [p[0] + 8 + r() * 26, p[1] + (r() > 0.5 ? 1 : -1) * (5 + r() * 7)]]); }
    return { key, w, h: 32, draw(g) {
      const line = (lw, col) => { g.strokeStyle = col; g.lineWidth = lw; g.lineJoin = g.lineCap = "round"; g.beginPath(); pts.forEach((p, i) => g[i ? "lineTo" : "moveTo"](p[0], p[1])); g.stroke(); };
      if (sealed) { line(8, "rgba(74,72,68,1)"); line(3, "rgba(98,95,90,.9)"); return; }
      line(3.4, "rgba(150,144,134,.35)"); line(1.6, "rgba(16,14,12,.92)");
      g.lineWidth = 0.9; g.strokeStyle = "rgba(16,14,12,.8)"; branches.forEach(([a, b]) => { g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); });
    } };
  };
  const L = atlas([
    { key: "warn", text: "RADON SYSTEM", sub: "DO NOT TURN OFF", w: 384, h: 112, size: 50, color: "#16130c", bg: "#e3bd2f" },
    { key: "info", w: 384, h: 150, draw(g, w, h) {
      g.fillStyle = "#e8e3d6"; g.fillRect(0, 0, w, h); g.fillStyle = "#1a1c20"; g.textAlign = "left"; g.textBaseline = "middle";
      g.font = "700 25px ui-monospace, Menlo, monospace"; g.fillText("RADON MITIGATION", 14, 24);
      g.font = "500 19px ui-monospace, Menlo, monospace";
      ["SUB-SLAB DEPRESSURIZATION", "INSTALLED 2026-11", "BEFORE: 412 Bq/m³", "RETEST: 91-DAY TEST"].forEach((s, i) => g.fillText(s, 14, 56 + i * 24));
    } },
    { key: "air", text: "AIRFLOW ▲", w: 224, h: 56, size: 30, color: "#16130c", bg: "#e8e3d6" },
    { key: "fan", text: "RADON FAN", sub: "120 V · 60 Hz · 85 W", w: 384, h: 104, size: 44, color: "#2a2c30" },
    { key: "jbox", text: "RADON FAN", sub: "DISCONNECT", w: 224, h: 84, size: 34, color: "#16130c", bg: "#e3bd2f" },
    { key: "sump", text: "SEALED SUMP", sub: "RADON · KEEP CLOSED", w: 320, h: 96, size: 38, color: "#16130c", bg: "#e8e3d6" },
    { key: "alpha", w: 160, h: 160, draw(g, w) {
      g.fillStyle = "#e8e3d6"; g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 2, 0, 6.3); g.fill();
      g.fillStyle = "#1a1c20"; g.textAlign = "center"; g.textBaseline = "middle";
      g.font = "700 17px ui-monospace, Menlo, monospace"; g.fillText("ALPHA TRACK", w / 2, 46);
      g.font = "600 14px ui-monospace, Menlo, monospace"; g.fillText("LONG-TERM · 91 d", w / 2, 72);
      g.font = "500 13px ui-monospace, Menlo, monospace"; g.fillText("START 11-10", w / 2, 96); g.fillText("DO NOT OPEN", w / 2, 116);
    } },
    { key: "scale", w: 64, h: 300, draw(g, w, h) {
      g.fillStyle = "#ebe7dd"; g.fillRect(0, 0, w, h); g.fillStyle = "#1a1c20"; g.strokeStyle = "#1a1c20"; g.textBaseline = "middle"; g.textAlign = "center";
      for (let i = -11; i <= 11; i++) { const y = h / 2 - i * 11; const big = i % 5 === 0; g.lineWidth = big ? 2 : 1; g.beginPath(); g.moveTo(big ? 10 : 18, y); g.lineTo(w - (big ? 10 : 18), y); g.stroke(); }
      g.font = "700 15px ui-monospace, Menlo, monospace"; g.fillText("0", w / 2, h / 2 - 9);
      g.font = "600 12px ui-monospace, Menlo, monospace"; g.fillText("Pa", w / 2, 12); g.fillText("250", w / 2, h / 2 - 64); g.fillText("250", w / 2, h / 2 + 64);
    } }
    , crackCell("ca", 512, 7, false), crackCell("cas", 512, 7, true), crackCell("cb", 384, 9, false), crackCell("cbs", 384, 9, true)
  ], { width: 1024, emissive: 0.22 });
  // the monitor's screen: reading, unit, and the daily readings as a line against the 200 Bq/m³ guideline
  const hist = []; { let v = 400; for (let i = 0; i < 46; i++) { v = lerp(v, 330 + rand() * 200, 0.45); hist.push(v); } }
  const SCR = atlas([{ key: "mon", w: 256, h: 192, value: 412, after: 0, draw(g, w, h, c) {
    g.fillStyle = "#06080c"; g.fillRect(0, 0, w, h);
    const v = Math.round(c.value), tone = v >= 200 ? "#ff6b4f" : v >= 100 ? "#f4bd7e" : "#8fd3a6";
    g.textBaseline = "middle"; g.textAlign = "left"; g.fillStyle = "#8b93a1"; g.font = "600 15px ui-monospace, Menlo, monospace";
    g.fillText("RADON", 14, 18); g.textAlign = "right"; g.fillText(c.after > 0.5 ? "RETEST" : "91-DAY AVG", w - 14, 18);
    if (c.after > 0.5) { g.textAlign = "right"; g.fillStyle = "#8b93a1"; g.font = "500 15px ui-monospace, Menlo, monospace"; g.fillText("was 412", w - 14, 52); }
    g.textAlign = "left"; g.fillStyle = tone; g.font = "700 64px ui-monospace, Menlo, monospace"; const s = String(v); g.fillText(s, 12, 66);
    const tw = g.measureText(s).width; g.fillStyle = "#cfd4da"; g.font = "500 17px ui-monospace, Menlo, monospace"; g.fillText("Bq/m³", 20 + tw, 80);
    const y0 = 178, sc = 64 / 480, x0 = 14, dx = (w - 28) / (hist.length - 1);
    g.strokeStyle = "rgba(139,147,161,.6)"; g.lineWidth = 1; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(x0, y0 - 200 * sc); g.lineTo(w - 14, y0 - 200 * sc); g.stroke(); g.setLineDash([]);
    g.fillStyle = "#8b93a1"; g.font = "500 12px ui-monospace, Menlo, monospace"; g.fillText("200", x0, y0 - 200 * sc - 9);
    g.strokeStyle = tone; g.lineWidth = 2.2; g.beginPath();
    hist.forEach((hv, i) => { const k = c.after * smooth(hist.length - 12, hist.length - 1, i); const val = lerp(hv, c.value + (hv - 420) * 0.08, k); g[i ? "lineTo" : "moveTo"](x0 + i * dx, y0 - val * sc); });
    g.stroke();
  } }], { width: 256, emissive: 0.8 });
  /** an atlas sticker wrapped around a cylinder of radius r, centred on angle a0 (0 faces +z, π/2 faces +x) */
  const wrap = (atl, key, width, r, cx, cy, cz, a0, parent) => {
    const m = atl.plane(key, width, parent);
    const uv = m.geometry.attributes.uv; let u0 = 1, u1 = 0, v0 = 1, v1 = 0;
    for (let i = 0; i < uv.count; i++) { u0 = Math.min(u0, uv.getX(i)); u1 = Math.max(u1, uv.getX(i)); v0 = Math.min(v0, uv.getY(i)); v1 = Math.max(v1, uv.getY(i)); }
    const g = new THREE.PlaneGeometry(width, m.geometry.parameters.height, 16, 1), p = g.attributes.position, gu = g.attributes.uv;
    for (let i = 0; i < p.count; i++) { const a = a0 + p.getX(i) / r; p.setXYZ(i, cx + r * Math.sin(a), cy + p.getY(i), cz + r * Math.cos(a)); gu.setXY(i, lerp(u0, u1, gu.getX(i)), lerp(v0, v1, gu.getY(i))); }
    g.computeVertexNormals(); m.geometry.dispose(); m.geometry = g;
    return m;
  };
  /** a decal lying flat on the slab, along the line from a to b */
  const decal = (key, a, b, parent, lift = 0.0015) => {
    const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.hypot(dx, dz);
    return L.plane(key, len, parent, (a[0] + b[0]) / 2, TOP + lift, (a[1] + b[1]) / 2, { rot: [-Math.PI / 2, 0, Math.atan2(-dz, dx)] });
  };

  /* ------------------------------------------- slab, stone and soil block */
  // a box from its extents, with metre UVs in house coordinates
  const blk = (x0, x1, y0, y1, z0, z1, mat, parent, o = {}) => {
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, cz = (z0 + z1) / 2;
    return box(x1 - x0, y1 - y0, z1 - z0, mat, cx, cy, cz, parent, { uv: { ox: cx, oy: cy, oz: cz }, ...o });
  };
  const FB = HZ0 - 0.5;   // back of the swappable piece in front of the riser
  // slab (inside the foundation walls) around the cut-away
  blk(-5, 5, SB, TOP, -4, HZ0, slabMat, fixed);
  blk(-5, 5, SB, TOP, HZ1, 4, slabMat, fixed);
  blk(-5, HX0, SB, TOP, HZ0, HZ1, slabMat, fixed);
  blk(HX1, 5, SB, TOP, HZ0, HZ1, slabMat, fixed);
  // crushed stone
  [[-5, HX0, -4, HZ0], [HX1, 5, -4, HZ0], [HX0, HX1, -4, FB], [-5, 5, HZ1, 4], [-5, HX0, HZ0, HZ1], [HX1, 5, HZ0, HZ1]]
    .forEach(([x0, x1, z0, z1]) => blk(x0, x1, GB, SB, z0, z1, gravel, fixed, { cast: false }));
  // soil, out under the footings
  [[-5.6, HX0, -4.6, HZ0], [HX1, 5.6, -4.6, HZ0], [HX0, HX1, -4.6, FB], [-5.6, 5.6, HZ1, 4.6], [-5.6, HX0, HZ0, HZ1], [HX1, 5.6, HZ0, HZ1]]
    .forEach(([x0, x1, z0, z1]) => blk(x0, x1, PB, GB, z0, z1, soil, fixed, { cast: false }));
  blk(HX0, HX1, PB, HY, HZ0, HZ1, soil, fixed, { cast: false });
  // the poly sheet between slab and stone, showing as a dark line on the three cut faces
  blk(HX0, HX1, SB - 0.004, SB, HZ0, HZ0 + 0.002, poly, fixed, { cast: false });
  blk(HX0 - 0.002, HX0, SB - 0.004, SB, HZ0, HZ1, poly, fixed, { cast: false });
  blk(HX1, HX1 + 0.002, SB - 0.004, SB, HZ0, HZ1, poly, fixed, { cast: false });
  // stones standing out of the cut faces of the stone layer
  {
    const n = tier >= 1 ? 260 : 120, geo = new THREE.IcosahedronGeometry(1, 0);
    const stones = new THREE.InstancedMesh(geo, kit.std(0xffffff, 1, 0), n);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
    let i = 0;
    while (i < n) {
      const f = rand(), y = GB + 0.012 + rand() * (SB - GB - 0.024), r = 0.007 + rand() * 0.013;
      const side = rand();
      if (side < 0.6) { const x = lerp(HX0 + 0.02, HX1 - 0.02, f); if (Math.abs(x - PX) < PR + 0.03) continue; p.set(x, y, HZ0 + r * 0.25); }
      else if (side < 0.8) p.set(HX0 + r * 0.25, y, lerp(HZ0 + 0.02, HZ1 - 0.02, f));
      else p.set(HX1 - r * 0.25, y, lerp(HZ0 + 0.02, HZ1 - 0.02, f));
      s.set(r, r * (0.6 + rand() * 0.4), r * (0.7 + rand() * 0.3)); q.setFromEuler(e.set(rand() * 6, rand() * 6, rand() * 6));
      stones.setMatrixAt(i, m4.compose(p, q, s)); const sh = 0.07 + rand() * 0.07; stones.setColorAt(i, c.setRGB(sh, sh * 0.97, sh * 0.9)); i++;
    }
    stones.castShadow = false; stones.receiveShadow = true;
    fixed.add(stones);
  }
  // before: the stone and soil in front of the riser are whole
  blk(HX0, HX1, GB, SB, FB, HZ0, gravel, before, { cast: false });
  blk(HX0, HX1, PB, GB, FB, HZ0, soil, before, { cast: false });
  // after: the same piece with the pit dug out under the core (a half-bowl in the cut face)
  {
    const ta = Math.asin((SB - GB) / PR), cx = Math.cos(ta) * PR;
    const ext = (shape, mat) => { const g = new THREE.ExtrudeGeometry(shape, { depth: HZ0 - FB, bevelEnabled: false, curveSegments: 20 }); g.translate(0, 0, FB); const m = new THREE.Mesh(g, mat); m.receiveShadow = true; after.add(m); return m; };
    const gl = new THREE.Shape(); gl.moveTo(HX0, SB); gl.lineTo(PX - PR, SB); gl.absarc(PX, SB, PR, Math.PI, Math.PI + ta, false); gl.lineTo(HX0, GB); gl.closePath();
    const gr = new THREE.Shape(); gr.moveTo(HX1, SB); gr.lineTo(HX1, GB); gr.lineTo(PX + cx, GB); gr.absarc(PX, SB, PR, -ta, 0, false); gr.closePath();
    const so = new THREE.Shape(); so.moveTo(HX0, GB); so.lineTo(PX - cx, GB); so.absarc(PX, SB, PR, Math.PI + ta, 2 * Math.PI - ta, false); so.lineTo(HX1, GB); so.lineTo(HX1, PB); so.lineTo(HX0, PB); so.closePath();
    ext(gl, gravel); ext(gr, gravel); ext(so, soil);
    const bowl = new THREE.SphereGeometry(PR, 24, 10, Math.PI, Math.PI, Math.PI / 2, Math.PI / 2);
    bowl.translate(PX, SB, PZ);
    const bp = bowl.attributes.position, bu = bowl.attributes.uv;
    for (let i = 0; i < bp.count; i++) bu.setXY(i, bp.getX(i) + bp.getZ(i) * 0.7, bp.getY(i));
    const ix = bowl.index.array; for (let i = 0; i < ix.length; i += 3) { const k = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = k; }
    const bn = bowl.attributes.normal; for (let i = 0; i < bn.count; i++) bn.setXYZ(i, -bn.getX(i), -bn.getY(i), -bn.getZ(i));
    const bm = new THREE.Mesh(bowl, gravel); bm.receiveShadow = true; after.add(bm);
  }

  /* ------------------------------ cracks, the wall joint and the sump */
  decal("ca", CRACK_A[0], CRACK_A[1], fixed);
  decal("cb", CRACK_B[0], CRACK_B[1], fixed);
  decal("cas", CRACK_A[0], CRACK_A[1], after, 0.003);
  decal("cbs", CRACK_B[0], CRACK_B[1], after, 0.003);
  // a dark gap where the slab meets the back wall; a bead of sealant along it once the system goes in
  blk(-4.9, 4.9, TOP - 0.002, TOP + 0.0012, WZ, WZ + 0.012, ink, fixed, { cast: false, receive: false });
  box(9.8, 0.012, 0.016, caulk, 0, TOP + 0.004, WZ + 0.008, after, { r: 0.005, cast: false });
  // sump: discharge pipe with a check valve up to the joists and out the front wall, pump cord, and the lid
  const SL = TOP + 0.05;   // top of the house's own lid, which ours sits on
  const dis = mats.whitePlastic;
  cyl(0.024, -0.12 - SL, dis, SX, (SL - 0.12) / 2, SZ, fixed);
  cyl(0.034, 0.1, mats.rubber, SX, -2.3, SZ, fixed, { seg: 16 });
  [-2.34, -2.26].forEach((y) => cyl(0.036, 0.012, mats.galv, SX, y, SZ, fixed, { seg: 16, cast: false }));
  tube([[SX, -0.2, SZ], [SX, -0.13, SZ + 0.02], [SX, -0.12, SZ + 0.1]], 0.024, dis, fixed, { radial: 12, seg: 10 });
  cyl(0.024, 4.0 - SZ - 0.1, dis, SX, -0.12, (SZ + 0.1 + 3.99) / 2, fixed, { axis: "z" });
  tube([[SX + 0.06, SL + 0.03, SZ + 0.05], [SX + 0.05, -2.4, SZ + 0.03], [SX + 0.03, -1.6, SZ + 0.03], [SX + 0.03, -0.26, SZ + 0.03]], 0.004, mats.rubber, fixed, { radial: 5, cast: false });
  // before: a loose lid sitting a little askew, with a gap round the pipe and an open notch for the cord
  {
    const lid = cyl(0.345, 0.022, mats.blackPlastic, SX + 0.012, SL + 0.011, SZ - 0.016, before, { seg: 40 });
    lid.rotation.set(0.015, 0, -0.012);
    cyl(0.055, 0.003, ink, SX, SL + 0.024, SZ, before, { seg: 20, cast: false });
    box(0.035, 0.004, 0.05, ink, SX + 0.06, SL + 0.023, SZ + 0.06, before, { cast: false });
  }
  // after: a gasketed lid with a ring of bolts, grommets on the pipe and the cord, and a label
  {
    cyl(0.35, 0.02, mats.blackPlastic, SX, SL + 0.01, SZ, after, { seg: 40 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.346, 0.006, 6, 48), caulk); ring.rotation.x = Math.PI / 2; kit.place(ring, SX, SL + 0.004, SZ, after, { cast: false });
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; cyl(0.009, 0.008, mats.galv, SX + Math.cos(a) * 0.318, SL + 0.024, SZ + Math.sin(a) * 0.318, after, { seg: 8, cast: false }); }
    cyl(0.036, 0.016, mats.rubber, SX, SL + 0.026, SZ, after, { seg: 16, cast: false });
    cyl(0.011, 0.012, mats.rubber, SX + 0.06, SL + 0.025, SZ + 0.05, after, { seg: 10, cast: false });
    L.plane("sump", 0.16, after, SX - 0.1, SL + 0.0215, SZ + 0.15, { rot: [-Math.PI / 2, 0, 0.35] });
  }

  /* --------------------------------------------- shelf, detector, monitor */
  box(0.9, 0.022, 0.2, mats.plywood, SH.x, SH.y - 0.011, SH.z, fixed, { uv: { ox: 1, oz: 1 } });
  [-0.33, 0.33].forEach((dx) => {
    const x = SH.x + dx;
    box(0.022, 0.15, 0.004, steelBracket, x, SH.y - 0.097, WZ + 0.002, fixed, { cast: false });
    box(0.022, 0.004, 0.17, steelBracket, x, SH.y - 0.024, WZ + 0.087, fixed, { cast: false });
    const br = box(0.016, 0.004, 0.2, steelBracket, x, SH.y - 0.085, WZ + 0.077, fixed, { cast: false }); br.rotation.x = -0.71;
    [-0.05, -0.13].forEach((dy) => cyl(0.006, 0.006, mats.galv, x, SH.y + dy, WZ + 0.006, fixed, { axis: "z", seg: 8, cast: false }));
  });
  // alpha-track detector: a small puck with its label, on the shelf
  cyl(0.034, 0.016, mats.greyPlastic, SH.x - 0.24, SH.y + 0.008, SH.z + 0.01, fixed, { seg: 28 });
  cyl(0.03, 0.004, mats.blackPlastic, SH.x - 0.24, SH.y + 0.018, SH.z + 0.01, fixed, { seg: 28, cast: false });
  L.plane("alpha", 0.056, fixed, SH.x - 0.24, SH.y + 0.0205, SH.z + 0.01, { rot: [-Math.PI / 2, 0, 0.2] });
  // digital monitor: a white case standing on the shelf, angled into the room
  {
    const mg = new THREE.Group(); mg.position.set(MON.x, SH.y, MON.z); mg.rotation.y = -0.22; fixed.add(mg);
    box(0.105, 0.155, 0.04, mats.whitePlastic, 0, 0.0775, 0, mg, { r: 0.012 });
    box(0.092, 0.074, 0.003, mats.blackPlastic, 0, 0.105, 0.02, mg, { cast: false });
    SCR.plane("mon", 0.086, mg, 0, 0.105, 0.0218);
    for (let i = 0; i < 5; i++) box(0.05, 0.003, 0.002, mats.greyPlastic, 0, 0.022 + i * 0.008, 0.0202, mg, { cast: false });
  }

  /* -------------------------------------------- the riser in the basement */
  const a0s = Math.sin(A0), a0c = Math.cos(A0);
  cyl(R, FAN - 0.24 - (SB - 0.08), pvc, PX, (FAN - 0.24 + SB - 0.08) / 2, PZ, after, { seg: 28 });
  cyl(R, STACK - FAN - 0.22, pvc, PX, (STACK + FAN + 0.22) / 2, PZ, after, { seg: 28 });
  // sealed core: a bead of urethane round the pipe where it goes through the slab
  cyl(R + 0.014, 0.012, caulk, PX, TOP + 0.005, PZ, after, { seg: 28, cast: false });
  // solvent-welded couplings
  [-1.95, -0.62, 2.0, 5.0].forEach((y) => cyl(R + 0.006, 0.07, pvc, PX, y, PZ, after, { seg: 28 }));
  // blocking between two joists and a strap round the pipe
  box(0.91, 0.14, 0.038, mats.plywood, -1.5, -0.18, PZ - R - 0.022, after, { uv: true });
  {
    const st = new THREE.Mesh(new THREE.TorusGeometry(R + 0.003, 0.0022, 4, 24, Math.PI), mats.galv);
    st.rotation.set(-Math.PI / 2, 0, 0); kit.place(st, PX, -0.16, PZ, after, { cast: false });
    [-1, 1].forEach((s) => { box(0.028, 0.03, 0.002, mats.galv, PX + s * (R + 0.016), -0.16, PZ - R - 0.002, after, { cast: false }); cyl(0.005, 0.004, mats.galv, PX + s * (R + 0.02), -0.16, PZ - R + 0.001, after, { axis: "z", seg: 8, cast: false }); });
  }
  // labels wrapped onto the pipe
  wrap(L, "warn", 0.11, R + 0.0012, PX, -1.18, PZ, A0, after);
  wrap(L, "info", 0.1, R + 0.0012, PX, -2.18, PZ, A0, after);
  wrap(L, "air", 0.07, R + 0.0012, PX, -0.88, PZ, A0, after);
  // U-tube manometer clipped to the riser, its hose into a grommet in the pipe wall
  const cols = [];
  {
    const mg = new THREE.Group(); mg.position.set(PX + a0s * (R + 0.014), -1.58, PZ + a0c * (R + 0.014)); mg.rotation.y = A0; after.add(mg);
    box(0.064, 0.2, 0.006, mats.whitePlastic, 0, 0, 0, mg, { r: 0.003 });
    L.plane("scale", 0.026, mg, 0, -0.005, 0.0034);
    [0.075, -0.075].forEach((y) => box(0.03, 0.014, 0.014, mats.whitePlastic, 0, y, -0.009, mg, { cast: false }));
    const glass = mats.glassClear;
    [-0.019, 0.019].forEach((x) => cyl(0.0042, 0.16, glass, x, 0, 0.009, mg, { seg: 10, cast: false }));
    const bend = [[-0.019, -0.08, 0.009], [-0.019, -0.088, 0.009], [-0.012, -0.096, 0.009], [0, -0.098, 0.009], [0.012, -0.096, 0.009], [0.019, -0.088, 0.009], [0.019, -0.08, 0.009]];
    tube(bend, 0.0042, glass, mg, { radial: 8, seg: 16, cast: false });
    tube(bend, 0.003, liquid, mg, { radial: 6, seg: 16, cast: false });
    [-0.019, 0.019].forEach((x) => {
      const g = new THREE.CylinderGeometry(0.003, 0.003, 1, 8); g.translate(0, 0.5, 0);
      const c = new THREE.Mesh(g, liquid); c.position.set(x, -0.08, 0.009); c.userData.keep = true; c.castShadow = false; mg.add(c); cols.push(c);
    });
    cyl(0.0055, 0.008, mats.blackPlastic, 0.019, 0.083, 0.009, mg, { seg: 10, cast: false });
    // clear hose from the pipe-side leg into the riser
    tube([[-0.019, 0.08, 0.009], [-0.019, 0.1, 0.01], [-0.024, 0.118, 0.0], [-0.022, 0.124, -0.014]], 0.003, mats.glassClear, mg, { radial: 6, seg: 12, cast: false });
    cyl(0.007, 0.008, mats.rubber, -0.022, 0.124, -0.016, mg, { axis: "z", seg: 10, cast: false });
    // cable ties round the pipe at the two clips
    [0.075, -0.075].forEach((y) => { const t = new THREE.Mesh(new THREE.TorusGeometry(R + 0.0015, 0.0018, 4, 32), mats.blackPlastic); t.rotation.x = Math.PI / 2; kit.place(t, PX, -1.58 + y, PZ, after, { cast: false }); });
  }

  /* ------------------------------------------------------ fan in the attic */
  {
    const fanM = mats.whitePlastic, fanDark = mats.greyPlastic;
    const coupler = (y) => {
      cyl(R + 0.011, 0.1, mats.rubber, PX, y, PZ, after, { seg: 28 });
      [y - 0.03, y + 0.03].forEach((cy, i) => {
        cyl(R + 0.0125, 0.012, mats.galv, PX, cy, PZ, after, { seg: 28, cast: false });
        const a = A0 - 1.1 + i * 0.5; box(0.016, 0.012, 0.012, mats.galv, PX + Math.sin(a) * (R + 0.018), cy, PZ + Math.cos(a) * (R + 0.018), after, { rot: [0, a, 0], cast: false });
      });
    };
    coupler(FAN - 0.27); coupler(FAN + 0.27);
    cyl(R + 0.002, 0.06, fanDark, PX, FAN - 0.2, PZ, after, { seg: 28 });
    cyl(R + 0.002, 0.06, fanDark, PX, FAN + 0.2, PZ, after, { seg: 28 });
    cyl(0.07, 0.06, fanM, PX, FAN - 0.11, PZ, after, { seg: 36, r2: 0.135 });
    cyl(0.135, 0.06, fanM, PX, FAN + 0.11, PZ, after, { seg: 36, r2: 0.07 });
    cyl(0.135, 0.16, fanM, PX, FAN, PZ, after, { seg: 36 });
    cyl(0.1375, 0.012, fanDark, PX, FAN + 0.02, PZ, after, { seg: 36, cast: false });
    wrap(L, "fan", 0.16, 0.1365, PX, FAN - 0.03, PZ, -0.9, after);
    // power: a cord from a gland on the housing to a disconnect on a post, then down into the insulation
    // rafters (2x6 at 600 mm, the riser passing between two) and the ridge board under the deck
    const pitchA = Math.atan(0.72), under = (x) => ROOF(x) - 0.2466;
    [-3.0, -2.4, -1.8, -1.2, -0.6, 0.0].forEach((z) => box(4.84 / Math.cos(pitchA), 0.14, 0.038, mats.plywood, -2.48, under(-2.48) - 0.07 / Math.cos(pitchA), z, after, { rot: [0, 0, pitchA], uv: true }));
    box(0.038, 0.18, 4.2, mats.plywood, 0, under(0) - 0.09, -1.5, after, { uv: true });
    // a 2x4 post from the ceiling joists up to a rafter carries the disconnect
    const post = { x: PX - 0.35, z: -1.8 };
    const postTop = under(post.x) - 0.14 / Math.cos(pitchA);
    box(0.089, postTop - 6.37, 0.038, mats.plywood, post.x, (postTop + 6.37) / 2, post.z, after, { uv: true });
    box(0.11, 0.11, 0.055, mats.greyPlastic, post.x, 7.75, post.z + 0.047, after, { r: 0.006 });
    box(0.018, 0.03, 0.014, mats.blackPlastic, post.x, 7.77, post.z + 0.081, after, { cast: false });
    L.plane("jbox", 0.075, after, post.x, 7.72, post.z + 0.0752);
    const gl = [PX + Math.sin(Math.PI + 0.25) * 0.135, FAN - 0.04, PZ + Math.cos(Math.PI + 0.25) * 0.135];
    cyl(0.008, 0.016, mats.blackPlastic, gl[0], gl[1], gl[2] - 0.006, after, { axis: "z", seg: 10, cast: false });
    tube([[gl[0], gl[1], gl[2] - 0.012], [gl[0] + 0.02, gl[1] - 0.12, gl[2] - 0.1], [post.x + 0.02, 7.62, post.z + 0.12], [post.x, 7.69, post.z + 0.06]], 0.0045, mats.blackPlastic, after, { radial: 6, cast: false });
    tube([[post.x + 0.03, 7.69, post.z + 0.05], [post.x + 0.05, 7.4, post.z + 0.03], [post.x + 0.055, 6.6, post.z + 0.025], [post.x + 0.2, 6.42, post.z + 0.1]], 0.006, mats.rubber, after, { radial: 6, cast: false });
    // riser clamp resting on the ceiling joists
    [-1, 1].forEach((s) => { box(0.34, 0.03, 0.006, mats.galv, PX, 6.44, PZ + s * (R + 0.004), after, { cast: false }); [-0.15, 0.15].forEach((dx) => cyl(0.006, 0.03, mats.galv, PX + dx, 6.44, PZ, after, { axis: "z", seg: 8, cast: false })); });
    // flashing boot where the stack leaves the roof, a storm collar, and the open top with its screen
    const ry = ROOF(PX), pitch = Math.atan(0.72);
    box(0.42, 0.006, 0.42, mats.galv, PX, ry + 0.003 / Math.cos(pitch), PZ, after, { rot: [0, 0, pitch], cast: false });
    cyl(0.13, 0.15, mats.rubber, PX, ry + 0.09, PZ, after, { seg: 28, r2: R + 0.008 });
    cyl(R + 0.012, 0.02, mats.galv, PX, ry + 0.2, PZ, after, { seg: 28, cast: false });
    cyl(R + 0.004, 0.02, mats.galv, PX, STACK - 0.005, PZ, after, { seg: 28, cast: false });
    cyl(R - 0.004, 0.002, ink, PX, STACK - 0.004, PZ, after, { seg: 24, cast: false });
  }

  // only the larger parts cast shadows; one shadow setting per material keeps the baked meshes few
  const casters = new Set([pvc, mats.plywood, mats.whitePlastic, mats.blackPlastic, mats.rubber, slabMat]);
  [fixed, before, after].forEach((g) => g.traverse((o) => { if (o.isMesh && !o.isInstancedMesh) { o.castShadow = casters.has(o.material) && o.renderOrder === 0; o.receiveShadow = true; } }));
  kit.bake(fixed); kit.bake(before); kit.bake(after);

  /* ------------------------------------------------------------ soil gas */
  const GAS = 0xd98cff;
  // in the cut: gas rising through the soil and the stone, then out sideways under the slab, or into the pit once there is suction
  const soilGas = kit.particles(300, { color: GAS, size: 0.065, gain: 2.2 });
  const ns = soilGas.userData.n, sp = soilGas.userData.pos, sv = new Float32Array(ns * 4), sAfter = new Float32Array(ns * 3);
  const spawnSoil = (i, anywhere) => {
    sp[i * 3] = lerp(HX0 + 0.03, HX1 - 0.03, rand()); sp[i * 3 + 1] = anywhere ? lerp(HY, SB - 0.03, rand()) : HY + rand() * 0.08; sp[i * 3 + 2] = lerp(HZ0 + 0.02, HZ1 - 0.05, rand());
    sv[i * 4] = 0.05 + rand() * 0.08; sv[i * 4 + 1] = rand() * 6.28;
    const e = rand(), j = (rand() - 0.5) * 0.6;
    if (e < 0.4) { sv[i * 4 + 2] = j; sv[i * 4 + 3] = -1; } else if (e < 0.6) { sv[i * 4 + 2] = -1; sv[i * 4 + 3] = j; } else if (e < 0.75) { sv[i * 4 + 2] = 1; sv[i * 4 + 3] = j; } else { sv[i * 4 + 2] = j; sv[i * 4 + 3] = 1; }
  };
  for (let i = 0; i < ns; i++) { spawnSoil(i, true); const f = rand(); sAfter[i * 3] = lerp(sp[i * 3], MOUTH.x, f); sAfter[i * 3 + 1] = lerp(sp[i * 3 + 1], MOUTH.y, f * f); sAfter[i * 3 + 2] = lerp(sp[i * 3 + 2], MOUTH.z, f); }
  const sBefore = sp.slice();
  // in the room: gas coming up through the cracks, the wall joint and round the sump lid
  const roomGas = kit.particles(170, { color: GAS, size: 0.055, gain: 1.8 });
  const nr = roomGas.userData.n, rp = roomGas.userData.pos, rv = new Float32Array(nr * 4);
  const onLine = (ln, f, out, i) => { out[i * 3] = lerp(ln[0][0], ln[1][0], f); out[i * 3 + 2] = lerp(ln[0][1], ln[1][1], f); };
  const spawnRoom = (i, aged) => {
    const s = rand();
    if (s < 0.3) onLine(CRACK_A, rand(), rp, i); else if (s < 0.48) onLine(CRACK_B, rand(), rp, i);
    else if (s < 0.8) { rp[i * 3] = lerp(JOINT[0], JOINT[1], rand()); rp[i * 3 + 2] = WZ + 0.012; }
    else { const a = rand() * 6.283, r = rand() < 0.4 ? 0.06 : 0.35; rp[i * 3] = SX + Math.cos(a) * r; rp[i * 3 + 2] = SZ + Math.sin(a) * r; }
    rp[i * 3 + 1] = TOP + 0.01;
    rv[i * 4] = 0.03 + rand() * 0.11; rv[i * 4 + 1] = rand() * 6.28; rv[i * 4 + 2] = 4 + rand() * 10; rv[i * 4 + 3] = 0;
    if (aged) { const age = rand() * rv[i * 4 + 2]; rv[i * 4 + 3] = age; rp[i * 3 + 1] += rv[i * 4] * age * 0.85; }
  };
  for (let i = 0; i < nr; i++) spawnRoom(i, true);
  // out of the stack: the exhaust above the roof
  const plume = kit.particles(80, { color: GAS, size: 0.08, gain: 1.2 });
  const np = plume.userData.n, pp = plume.userData.pos, pv = new Float32Array(np * 4);
  const spawnPlume = (i, aged) => {
    pp[i * 3] = PX + (rand() - 0.5) * 0.05; pp[i * 3 + 1] = STACK; pp[i * 3 + 2] = PZ + (rand() - 0.5) * 0.05;
    pv[i * 4] = 0.45 + rand() * 0.35; pv[i * 4 + 1] = rand() * 6.28; pv[i * 4 + 2] = 2 + rand() * 1.6; pv[i * 4 + 3] = 0;
    if (aged) { const age = rand() * pv[i * 4 + 2]; pv[i * 4 + 3] = age; stepPlume(i, age, 0); }
  };
  const stepPlume = (i, dt, t) => {
    const a = pv[i * 4 + 3] / pv[i * 4 + 2], ph = pv[i * 4 + 1];
    pp[i * 3 + 1] += pv[i * 4] * (1 - 0.6 * a) * dt;
    pp[i * 3] += (-0.22 * a + Math.sin(ph) * 0.12 * a) * dt;
    pp[i * 3 + 2] += (0.08 * a + Math.cos(ph + t * 0.3) * 0.12 * a) * dt;
  };
  for (let i = 0; i < np; i++) spawnPlume(i, true);
  group.add(soilGas, roomGas, plume);

  /* ---------------------------------------------------------------- state */
  const anchors = {
    soil: V(-0.45, -3.42, HZ0 + 0.02),
    test: V(MON.x, SH.y + 0.1, MON.z + 0.03),
    pit: V(PX, SB - 0.12, PZ + 0.04),
    fan: V(PX - 0.08, FAN, PZ + 0.11),
    stack: V(PX, STACK - 0.15, PZ),
    after: V(MON.x, SH.y + 0.1, MON.z + 0.03)
  };
  const P = { time: 19.4, cut: 0, ghost: 0, ground: 1, orbit: 0.012 };
  const shots = [
    { ...P, radius: 15, theta: 0.6, phi: 1.36, fx: -0.6, ty: -1.5, fz: -0.8, cut: 1, ground: 0, dof: 0, orbit: 0.025 },
    { ...P, radius: 1.6, theta: 0.2, phi: 1.36, fx: MON.x - 0.05, ty: SH.y + 0.07, fz: WZ + 0.1, dof: 1.1, narrow: { fx: MON.x - 0.12 } },
    { ...P, radius: 2.9, theta: 0.38, phi: 1.2, fx: PX + 0.25, ty: -3.0, fz: PZ, dof: 1.0, narrow: { fx: PX + 0.05 } },
    { ...P, radius: 2.6, theta: 0.75, phi: 1.5, fx: PX, ty: 8.05, fz: PZ, dof: 0.9, orbit: 0.012, narrow: { ty: 7.85 } },
    { ...P, radius: 0.78, theta: -0.12, phi: 1.47, fx: MON.x, ty: SH.y + 0.1, fz: MON.z + 0.02, dof: 1.3 }
  ];
  let mode = 0, pull = 0, value = 412, shownV = 412, shownA = 0, afterK = 0, lastSoil = -1;
  return {
    name: "radon", group, anchors, shots,
    hides(H) {
      const out = [...(H.sys.radon ? H.sys.radon.meshes : [])];
      // the basement slab (system materials are clones, so find it by where it sits)
      if (H.sys.foundation) H.sys.foundation.meshes.forEach((m) => { if (Math.abs(m.position.y + 2.88) < 0.01) out.push(m); });
      // the plain sump pipe and its light: ours stand in for them
      H.layers.basement.traverse((o) => { if (o.isMesh && Math.abs(o.position.x - SX) < 0.01 && Math.abs(o.position.z - SZ) < 0.01) out.push(o); });
      return out;
    },
    light(step) {
      if (step === 0) return { pos: [0.6, -0.6, 0.9], at: [-0.9, -3.1, -1.1], power: 0.75, fill: 0.6 };
      if (step === 1) return { pos: [-0.3, -0.9, -2.4], at: [SH.x + 0.1, SH.y, WZ], power: 0.4, fill: 0.5 };
      if (step === 2) return { pos: [0.2, -1.6, 0.4], at: [PX + 0.1, SB - 0.2, PZ], power: 0.4 };
      if (step === 3) return { pos: [0.3, 8.85, 0.3], at: [PX, FAN, PZ], power: 0.75, fill: 0.35 };
      if (step === 4) return { pos: [0.2, -1.05, -2.9], at: [MON.x, SH.y + 0.08, WZ], power: 0.35, fill: 0.4 };
      return { pos: [-2.3, -0.9, 0.3], at: [-1.0, -1.7, -2.4], power: 0.5 };
    },
    update({ step, t, dt, snap }) {
      const on = step >= 2 ? 1 : 0;
      const ease = (k) => (snap ? 1 : 1 - Math.exp(-dt * k));
      mode = lerp(mode, on, ease(1.6));
      pull = lerp(pull, on, ease(1.2));
      before.visible = !on; after.visible = !!on;
      // manometer: the leg on the pipe side rises as the fan pulls
      const dh = 0.022 * pull;
      cols[0].scale.y = 0.08 + dh; cols[1].scale.y = 0.08 - dh;
      // monitor: 412 until the retest, then counts down to 45
      value = step === 4 ? lerp(value, 45, ease(1.3)) : lerp(value, 412, ease(6));
      afterK = lerp(afterK, step === 4 ? 1 : 0, ease(1.3));
      const v = Math.round(value), a = Math.round(afterK * 20) / 20;
      if (v !== shownV || a !== shownA) { shownV = v; shownA = a; SCR.set("mon", undefined, undefined, { value: v, after: a }); }
      roomGas.material.opacity = 1 - mode; roomGas.visible = mode < 0.98;
      plume.material.opacity = smooth(0.3, 1, pull); plume.visible = pull > 0.3;
      if (reduce) {
        const s = mode > 0.5 ? 1 : 0;
        if (s !== lastSoil) { lastSoil = s; sp.set(s ? sAfter : sBefore); soilGas.geometry.attributes.position.needsUpdate = true; }
        return;
      }
      const d = Math.min(dt, 0.05);
      // soil gas
      for (let i = 0; i < ns; i++) {
        const x = sp[i * 3], y = sp[i * 3 + 1], z = sp[i * 3 + 2], s = sv[i * 4], ph = sv[i * 4 + 1];
        let bx = Math.sin(t * 0.9 + ph) * 0.02, by = s, bz = Math.cos(t * 0.7 + ph) * 0.02;
        const k = smooth(GB - 0.03, SB - 0.03, y);
        bx += sv[i * 4 + 2] * 0.14 * k; bz += sv[i * 4 + 3] * 0.14 * k; by *= 1 - k;
        const dx = MOUTH.x - x, dy = MOUTH.y - y, dz = MOUTH.z - z, dist = Math.hypot(dx, dy, dz) + 1e-4, v2 = (0.12 + s) * (0.7 + 0.35 / (dist + 0.2));
        const ax = (dx / dist) * v2 + Math.sin(t * 1.3 + ph) * 0.015, ay = (dy / dist) * v2, az = (dz / dist) * v2;
        sp[i * 3] = x + lerp(bx, ax, mode) * d; sp[i * 3 + 1] = Math.min(y + lerp(by, ay, mode) * d, SB - 0.015); sp[i * 3 + 2] = z + lerp(bz, az, mode) * d;
        if (sp[i * 3] < HX0 - 0.03 || sp[i * 3] > HX1 + 0.03 || sp[i * 3 + 2] < HZ0 - 0.04 || sp[i * 3 + 2] > HZ1 + 0.03 || (mode > 0.5 && dist < 0.06)) spawnSoil(i, false);
      }
      soilGas.geometry.attributes.position.needsUpdate = true;
      // room gas
      if (roomGas.visible) {
        for (let i = 0; i < nr; i++) {
          const ph = rv[i * 4 + 1]; rv[i * 4 + 3] += d;
          if (rv[i * 4 + 3] > rv[i * 4 + 2]) { spawnRoom(i, false); continue; }
          rp[i * 3 + 1] += rv[i * 4] * d * (1 - 0.3 * rv[i * 4 + 3] / rv[i * 4 + 2]);
          rp[i * 3] += Math.sin(t * 0.5 + ph) * 0.035 * d; rp[i * 3 + 2] += Math.cos(t * 0.4 + ph * 1.3) * 0.035 * d;
        }
        roomGas.geometry.attributes.position.needsUpdate = true;
      }
      // exhaust
      if (plume.visible) {
        for (let i = 0; i < np; i++) { pv[i * 4 + 3] += d; if (pv[i * 4 + 3] > pv[i * 4 + 2]) spawnPlume(i, false); else stepPlume(i, d, t); }
        plume.geometry.attributes.position.needsUpdate = true;
      }
    }
  };
}
