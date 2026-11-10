// Close-up set 5 of 6: the first 72 hours (disaster restoration).
// A finished rec room in the north half of the basement (drywall on the foundation wall and on a stud partition, a 9×9
// tile floor, a textured ceiling, an old wrapped heating pipe, the water service and main shut-off) and the kitchen on
// the main floor. One house, five emergencies and the way back: a burst copper line, a sewage backup at the floor drain,
// a pan fire, mould behind containment, asbestos sampling before demolition, then drying and the rebuild.
import * as THREE from "three";
import { lerp, smooth, clamp, rng } from "../util.js";

const FY = -2.8;                   // basement slab top
const CY = -0.27;                  // underside of the rec-room ceiling (just under the joists)
const RX0 = 1.8, RX1 = 4.88;       // the room's open side, and the face of the drywall on the north foundation wall
const RZ0 = -2.93, RZ1 = 2.45;     // the face of the drywall on the back partition, and the room's front edge
const LX = RX1 - RX0, LZ = RZ1 - RZ0, MX = (RX0 + RX1) / 2, MZ = (RZ0 + RZ1) / 2;
const BAND = 0.6;                  // the flood cut: bottom 600 mm of drywall
const SX = 4.9375, SZ = -2.9875;   // stud centre lines of the north wall and the partition
const MF = 0.3, TOP = 1.24;        // main floor, kitchen counter top
const BURST = new THREE.Vector3(4.775, -0.45, -0.7);
const DRAIN = new THREE.Vector3(2.75, FY, -1.45);
const PAN = new THREE.Vector3(2.22, 1.29, -3.42);
const HOOD = 1.585;                // underside of the range hood
const WATER = { x0: -0.4, x1: RX1, z0: RZ0, z1: 2.62 };   // the flood can run out of the room into the open basement

const canvas = (w, h, draw) => { const cv = document.createElement("canvas"); cv.width = w; cv.height = h; draw(cv.getContext("2d"), w, h); return cv; };
const texture = (cv, o = {}) => {
  const t = new THREE.CanvasTexture(cv);
  if (o.color !== false) t.colorSpace = THREE.SRGBColorSpace;
  if (o.wrap !== false) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (o.repeat) t.repeat.set(o.repeat[0], o.repeat[1]);
  t.anisotropy = 8;
  return t;
};
const ellipse = (g, x, y, rx, ry, stops) => {
  g.save(); g.translate(x, y); g.scale(1, ry / rx);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx); stops.forEach(([o, c]) => gr.addColorStop(o, c));
  g.fillStyle = gr; g.beginPath(); g.arc(0, 0, rx, 0, 6.2832); g.fill(); g.restore();
};

export function createRestoreSet({ kit, M, tier }) {
  const { box, cyl, sphere, tube, mats, atlas, V } = kit;
  const group = new THREE.Group();
  const fixed = new THREE.Group(); group.add(fixed);
  const part = (parent = group) => { const g = new THREE.Group(); parent.add(g); return g; };
  const seal = (g) => { kit.bake(g); g.userData.keep = true; return g; };
  const quad = (w, h, mat, parent, x, y, z, o = {}) => {
    const g = new THREE.PlaneGeometry(w, h);
    if (o.u) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, lerp(o.u[0], o.u[1], uv.getX(i))); }
    if (o.base) g.translate(0, h / 2, 0);           // origin on the bottom edge, so scale.y grows it upward
    if (o.edge) g.translate(-w / 2, 0, 0);          // origin on the right edge, so scale.x grows it leftward
    const m = kit.place(new THREE.Mesh(g, mat), x, y, z, parent, { cast: false, ...o });
    if (o.ry) m.rotation.y = o.ry;
    if (o.rx) m.rotation.x = o.rx;
    return m;
  };
  const r = rng(72);

  /* -------------------------------------------------------------- textures */
  // 9-inch vinyl-asbestos floor tile, two tones laid as a checkerboard, marbled; one canvas = 4 × 4 tiles
  const TILE = 0.2286;
  const tileTex = texture(canvas(512, 512, (g) => {
    const s = 128;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const dark = (i + j) % 2 === 1, l = (dark ? 128 : 172) + (r() - 0.5) * 14;
      g.fillStyle = `rgb(${l | 0},${(l * 0.93) | 0},${(l * 0.78) | 0})`; g.fillRect(i * s, j * s, s, s);
      for (let k = 0; k < 16; k++) {
        const x = i * s + r() * s, y = j * s + r() * s, a = r() * 6.28, len = 10 + r() * 34;
        g.strokeStyle = r() > 0.5 ? `rgba(255,246,222,${0.06 + r() * 0.1})` : `rgba(60,46,30,${0.06 + r() * 0.1})`; g.lineWidth = 1 + r() * 2.5;
        g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a + 1) * len * 0.5, y + Math.sin(a + 1) * len * 0.5, x + Math.cos(a) * len, y + Math.sin(a) * len); g.stroke();
      }
    }
    g.strokeStyle = "rgba(48,38,26,.55)"; g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * s, 0); g.lineTo(i * s, 512); g.moveTo(0, i * s); g.lineTo(512, i * s); g.stroke(); }
    ellipse(g, 300, 260, 220, 170, [[0, "rgba(70,56,36,.16)"], [1, "rgba(70,56,36,0)"]]);   // traffic wear
  }), { repeat: [LX / (4 * TILE), LZ / (4 * TILE)] });
  // the textured ("popcorn") ceiling: a bump map of crowded little lumps
  const popTex = texture(canvas(256, 256, (g, w, h) => {
    g.fillStyle = "#7a7a7a"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const l = r() > 0.3 ? 150 + r() * 100 : 30 + r() * 50; g.fillStyle = `rgba(${l | 0},${l | 0},${l | 0},${0.5 + r() * 0.5})`; g.beginPath(); g.arc(r() * w, r() * h, 0.8 + r() * r() * 4.2, 0, 6.2832); g.fill(); }
  }), { color: false, repeat: [LX / 0.32, LZ / 0.32] });
  // corrugation for lay-flat duct and for air-cell pipe wrap (tube UVs run in metres along the tube)
  const ribCv = canvas(32, 4, (g, w) => { for (let x = 0; x < w; x++) { const l = 128 + 120 * Math.sin((x / w) * 6.2832); g.fillStyle = `rgb(${l | 0},${l | 0},${l | 0})`; g.fillRect(x, 0, 1, 4); } });
  const ribTex = texture(ribCv, { color: false, repeat: [1 / 0.045, 1] });
  const cellTex = texture(ribCv, { color: false, repeat: [1 / 0.014, 1] });
  // a soft, ragged blob: the alpha of the spreading flood and of the sewage puddle
  const blobCv = canvas(256, 256, (g, w) => {
    g.fillStyle = "#000"; g.fillRect(0, 0, w, w); g.filter = "blur(4px)"; g.fillStyle = "#fff"; g.beginPath();
    for (let i = 0; i <= 96; i++) { const a = (i / 96) * 6.2832, rr = w * 0.4 * (1 + 0.08 * Math.sin(3 * a + 1) + 0.05 * Math.sin(7 * a + 2) + 0.025 * Math.sin(17 * a)); g[i ? "lineTo" : "moveTo"](w / 2 + Math.cos(a) * rr, w / 2 + Math.sin(a) * rr); }
    g.fill(); g.filter = "none";
  });
  const blobTex = (o) => { const t = texture(blobCv, { color: false, wrap: false }); t.center.set(o.cu, o.cv); t.offset.set(0.5 - o.cu, 0.5 - o.cv); return t; };
  // ripples: a tiling normal map built from a few integer-frequency waves
  const rippleCv = canvas(128, 128, (g, w, h) => {
    const img = g.createImageData(w, h), K = 6.2832 / w;
    const H = (x, y) => Math.sin(K * (2 * x + y)) * 0.5 + Math.sin(K * (-x + 3 * y) + 1.3) * 0.35 + Math.sin(K * (5 * x - 2 * y) + 2.1) * 0.2 + Math.sin(K * (3 * x + 5 * y) + 0.4) * 0.15;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const dx = (H(x + 1, y) - H(x - 1, y)) * 2.2, dy = (H(x, y + 1) - H(x, y - 1)) * 2.2, l = Math.hypot(dx, dy, 1), o = (y * w + x) * 4;
      img.data[o] = (-dx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (-dy / l * 0.5 + 0.5) * 255; img.data[o + 2] = (1 / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  });
  // water wicking up the drywall: a brown stain under a wavy tide line, darkest at the floor
  const wickTex = texture(canvas(1024, 128, (g, w, h) => {
    const line = []; for (let x = 0; x <= w; x += 8) line.push(h * 0.13 + Math.sin(x * 0.013) * 5 + Math.sin(x * 0.051 + 1) * 3 + (r() - 0.5) * 3);
    const path = (dy) => { g.beginPath(); line.forEach((y, i) => g[i ? "lineTo" : "moveTo"](i * 8, y + dy)); };
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "rgba(96,70,40,.22)"); gr.addColorStop(1, "rgba(56,40,22,.66)");
    g.fillStyle = gr; path(0); g.lineTo(w, h); g.lineTo(0, h); g.fill();
    g.strokeStyle = "rgba(72,50,26,.8)"; g.lineWidth = 3; path(0); g.stroke();
    g.strokeStyle = "rgba(80,58,30,.35)"; g.lineWidth = 2; path(16); g.stroke();
  }), { wrap: false });
  // mould: colonies of black and grey-green spots, thickest along the floor
  const mouldTex = texture(canvas(2048, 256, (g, w, h) => {
    for (let c = 0; c < 54; c++) {
      const cx = r() * w, cy = h * (0.5 + r() * 0.5), sp = 18 + r() * 70, n = (30 + r() * 120) | 0;
      ellipse(g, cx, cy, sp * 1.4, sp * 1.1, [[0, "rgba(38,46,28,.42)"], [1, "rgba(38,46,28,0)"]]);
      for (let i = 0; i < n; i++) {
        const a = r() * 6.2832, d = sp * Math.sqrt(r());
        g.fillStyle = r() > 0.3 ? `rgba(16,20,12,${0.55 + r() * 0.4})` : `rgba(86,106,64,${0.4 + r() * 0.4})`;
        g.beginPath(); g.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.8, 0.8 + r() * r() * 5, 0, 6.2832); g.fill();
      }
    }
  }), { wrap: false });
  // soot: a plume that is darkest at its source (bottom edge) and spreads as it climbs
  const sootTex = texture(canvas(256, 256, (g, w, h) => {
    for (let i = 0; i < 30; i++) { const t = i / 29; ellipse(g, w / 2 + (r() - 0.5) * 50 * t, h * (0.96 - t * 0.62), w * (0.06 + 0.36 * t), h * (0.07 + 0.2 * t), [[0, `rgba(12,10,8,${0.3 * (1 - 0.55 * t)})`], [1, "rgba(12,10,8,0)"]]); }
    for (let i = 0; i < 40; i++) { const x = w * (0.3 + r() * 0.4); g.strokeStyle = `rgba(10,8,6,${0.04 + r() * 0.06})`; g.lineWidth = 2 + r() * 6; g.beginPath(); g.moveTo(x, h); g.lineTo(x + (x - w / 2) * 0.8, h * (0.2 + r() * 0.3)); g.stroke(); }
  }), { wrap: false });
  // vinyl plank (the new floor): six 200 mm planks across, staggered joints; one canvas = 1.2 × 1.2 m
  const plankTex = texture(canvas(512, 512, (g, w, h) => {
    const pw = w / 6;
    for (let i = 0; i < 6; i++) {
      const joint = r() * h;
      [[0, joint], [joint, h]].forEach(([y0, y1]) => {
        const l = 150 + (r() - 0.5) * 26; g.fillStyle = `rgb(${l | 0},${(l * 0.9) | 0},${(l * 0.76) | 0})`; g.fillRect(i * pw, y0, pw, y1 - y0);
        for (let k = 0; k < 22; k++) { const x = i * pw + r() * pw; g.strokeStyle = `rgba(${r() > 0.5 ? "70,52,32" : "220,200,170"},${0.05 + r() * 0.08})`; g.lineWidth = 0.6 + r() * 1.6; g.beginPath(); g.moveTo(x, y0); g.bezierCurveTo(x + 4, y0 + (y1 - y0) * 0.3, x - 4, y0 + (y1 - y0) * 0.7, x + (r() - 0.5) * 6, y1); g.stroke(); }
      });
      g.fillStyle = "rgba(40,30,20,.5)"; g.fillRect(i * pw, joint - 1, pw, 2); g.fillRect(i * pw, 0, 2, h);
    }
  }), { repeat: [LX / 1.2, LZ / 1.2] });
  // subway tile backsplash: one canvas = 300 × 150 mm
  const subwayTex = texture(canvas(256, 128, (g, w, h) => {
    g.fillStyle = "#c2beb2"; g.fillRect(0, 0, w, h);
    [[0, 0], [1, 0], [-0.5, 1], [0.5, 1], [1.5, 1]].forEach(([c, row]) => {
      const x = c * 128 + 2, y = row * 64 + 2, l = 120 + (r() - 0.5) * 12;
      g.fillStyle = `rgb(${(l * 0.86) | 0},${l | 0},${(l * 0.96) | 0})`; g.fillRect(x, y, 124, 60);
      g.fillStyle = "rgba(255,255,255,.12)"; g.fillRect(x + 4, y + 4, 116, 10);
    });
  }), { repeat: [3.57 / 0.3, 0.61 / 0.15] });

  /* ------------------------------------------------------------- materials */
  const OLD = new THREE.Color(0xb0a28a), NEW = new THREE.Color(0xaeb6ac), CEIL_OLD = new THREE.Color(0xb3ab98), CEIL_NEW = new THREE.Color(0xb6b8b0);
  const paint = kit.std(OLD.getHex(), 0.88);
  const board = kit.std(0x8a8170, 0.95);                       // paper back of the drywall, seen through the flood cut
  const trim = kit.std(0xb9b3a6, 0.45);
  const ceiling = kit.std(CEIL_OLD.getHex(), 0.95, 0, { bumpMap: popTex, bumpScale: 3 });
  const tile = kit.std(0xffffff, 0.5, 0, { map: tileTex });
  const plank = kit.std(0xffffff, 0.55, 0, { map: plankTex });
  const cabinet = kit.std(0x3a2c22, 0.5);
  const splash = kit.std(0xffffff, 0.25, 0, { map: subwayTex });
  const ribbed = kit.std(0x8e9297, 0.5, 0.4, { bumpMap: ribTex, bumpScale: 1.5 });
  const airCell = kit.std(0xb8b09d, 0.92, 0, { bumpMap: cellTex, bumpScale: 2.5 });
  const fanMat = kit.std(0x2f5fa8, 0.45, 0.05, { side: THREE.DoubleSide });
  const decal = (map, o = {}) => { const m = new THREE.MeshStandardMaterial({ map, transparent: true, depthWrite: false, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, ...o }); m.userData.th = [0.5]; return m; };
  const wickMat = decal(wickTex), mouldMat = decal(mouldTex), sootMat = decal(sootTex);
  const ripple = texture(rippleCv, { color: false, repeat: [(WATER.x1 - WATER.x0) / 0.7, (WATER.z1 - WATER.z0) / 0.7] });
  const water = mats.water.clone();
  water.alphaMap = blobTex({ cu: (BURST.x - WATER.x0) / (WATER.x1 - WATER.x0), cv: (WATER.z1 - BURST.z) / (WATER.z1 - WATER.z0) });
  water.normalMap = ripple; water.normalScale.set(0.35, 0.35); water.opacity = 0.5; water.color.set(0x1f4f78); water.roughness = 0.03;
  const PUD = 3.8;
  const sewage = mats.sewage.clone();
  sewage.alphaMap = blobTex({ cu: 0.5, cv: 0.5 });
  sewage.normalMap = texture(rippleCv, { color: false, repeat: [PUD / 0.5, PUD / 0.5] }); sewage.normalScale.set(0.3, 0.3);

  /* ----------------------------------------------------------------- labels */
  const cells = [
    { key: "tag", text: "MAIN SHUT-OFF", w: 256, h: 64, size: 30, color: "#16181c", bg: "#e9c22e" },
    { key: "reg", text: "0412.7", sub: "m³", w: 160, h: 72, size: 34, color: "#1a1c20", bg: "#d9d4c4" },
    { key: "cat3", w: 240, h: 320, draw(g, w, h) {
      g.fillStyle = "#e3bd2c"; g.fillRect(0, 0, w, h); g.fillStyle = "#121316"; g.fillRect(0, 26, w, 58);
      g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#e3bd2c"; g.font = "800 40px ui-sans-serif, Arial, sans-serif"; g.fillText("CAUTION", w / 2, 56);
      g.fillStyle = "#121316"; g.font = "800 34px ui-sans-serif, Arial, sans-serif"; g.fillText("CATEGORY 3", w / 2, 132); g.fillText("WATER", w / 2, 172);
      g.font = "600 21px ui-sans-serif, Arial, sans-serif"; g.fillText("SEWAGE · NO ENTRY", w / 2, 226); g.fillText("WITHOUT PPE", w / 2, 256);
    } },
    { key: "hepa", text: "HEPA · 99.97 %", w: 256, h: 44, size: 24, color: "#cfd4da" },
    { key: "zip", text: "CONTAINMENT", sub: "KEEP ZIPPED SHUT", w: 288, h: 84, size: 34, color: "#16181c", bg: "#e9c22e" },
    { key: "mano", text: "−6 Pa", sub: "NEGATIVE AIR", w: 176, h: 96, size: 40, color: "#8fd3a6", bg: "#05070b" },
    { key: "asb", text: "ASBESTOS SAMPLING", sub: "DO NOT DISTURB", w: 384, h: 92, size: 34, color: "#ff6b4f", bg: "#e6e1d4" },
    { key: "s1", text: "S-01", sub: "CEILING TEXTURE", w: 176, h: 72, size: 32, color: "#16181c", bg: "#e6e1d4" },
    { key: "s2", text: "S-02", sub: "9×9 FLOOR TILE", w: 176, h: 72, size: 32, color: "#16181c", bg: "#e6e1d4" },
    { key: "s3", text: "S-03", sub: "PIPE WRAP", w: 176, h: 72, size: 32, color: "#16181c", bg: "#e6e1d4" },
    { key: "lab", w: 300, h: 384, draw(g, w) {
      g.fillStyle = "#d8d3c5"; g.fillRect(0, 0, w, 384);
      g.textAlign = "left"; g.textBaseline = "middle"; g.fillStyle = "#16181c"; g.font = "700 22px ui-monospace, Menlo, monospace"; g.fillText("LAB RESULTS · PLM", 16, 30);
      g.font = "500 14px ui-monospace, Menlo, monospace"; g.fillStyle = "#4a4d52"; g.fillText("BULK SAMPLES · 3", 16, 58);
      g.fillStyle = "#16181c"; g.fillRect(16, 74, w - 32, 2);
      [["S-01 CEILING", "NONE DETECTED", "#2f7a4c"], ["S-02 FLOOR TILE", "CHRYSOTILE 3 %", "#c2402b"], ["S-03 PIPE WRAP", "CHRYSOTILE 60 %", "#c2402b"]].forEach(([a, b, c], i) => {
        const y = 108 + i * 78; g.fillStyle = "#16181c"; g.font = "700 18px ui-monospace, Menlo, monospace"; g.fillText(a, 16, y);
        g.fillStyle = c; g.font = "700 20px ui-monospace, Menlo, monospace"; g.fillText(b, 16, y + 28);
        g.fillStyle = "rgba(20,22,26,.3)"; g.fillRect(16, y + 50, w - 32, 1);
      });
      g.fillStyle = "#c2402b"; g.font = "800 20px ui-monospace, Menlo, monospace"; g.fillText("ABATE BEFORE DEMO", 16, 352);
    } },
    { key: "rh", text: "RH 46 %", sub: "PUMP ON", w: 176, h: 88, size: 36, color: "#9fc4ff", bg: "#05070b" },
    { key: "mm", text: "28", sub: "% WOOD", tone: "#ff6b4f", w: 200, h: 120, draw(g, w, h, c) {
      g.fillStyle = "#05070b"; g.fillRect(0, 0, w, h);
      g.textAlign = "left"; g.textBaseline = "middle";
      g.fillStyle = "#8b93a1"; g.font = "600 15px ui-monospace, Menlo, monospace"; g.fillText("MOISTURE", 14, 20);
      g.fillStyle = c.tone; g.font = "700 58px ui-monospace, Menlo, monospace"; g.fillText(c.text, 12, 66);
      g.fillStyle = "#cfd4da"; g.font = "500 17px ui-monospace, Menlo, monospace"; g.fillText(c.sub, 98, 76);
      g.fillStyle = "#1c222c"; g.fillRect(14, 102, w - 28, 8); g.fillStyle = c.tone; g.fillRect(14, 102, (w - 28) * clamp((+c.text - 6) / 26, 0.05, 1), 8);
    } }
  ];
  const L = atlas(cells, { width: 1024, emissive: 0.25 });

  /* ------------------------------------------------------ the rec room shell */
  // north wall: studs on the foundation wall, plates, the drywall above the flood-cut line and its end
  for (let z = RZ0 + 0.06; z < RZ1; z += 0.406) box(0.089, CY - FY - 0.076, 0.038, mats.studs, SX, (FY + CY) / 2, z, fixed, { cast: false, uv: true });
  box(0.089, 0.038, LZ, mats.studs, SX, FY + 0.019, MZ, fixed, { cast: false, uv: true });
  box(0.089, 0.038, LZ, mats.studs, SX, CY - 0.019, MZ, fixed, { cast: false, uv: true });
  const HUP = CY - FY - BAND;
  box(0.013, HUP, LZ, paint, RX1 + 0.0065, FY + BAND + HUP / 2, MZ, fixed);
  box(0.115, CY - FY, 0.013, paint, SX - 0.004, (FY + CY) / 2, RZ1 + 0.0065, fixed);
  // back partition: studs, plates, drywall on the room side above the cut, the board on the laundry side, its end
  for (let x = RX0 + 0.04; x < RX1; x += 0.406) box(0.038, CY - FY - 0.076, 0.089, mats.studs, x, (FY + CY) / 2, SZ, fixed, { cast: false, uv: true });
  box(LX, 0.038, 0.089, mats.studs, MX, FY + 0.019, SZ, fixed, { cast: false, uv: true });
  box(LX, 0.038, 0.089, mats.studs, MX, CY - 0.019, SZ, fixed, { cast: false, uv: true });
  box(LX, HUP, 0.013, paint, MX, FY + BAND + HUP / 2, RZ0 - 0.0065, fixed);
  box(LX, CY - FY, 0.013, board, MX, (FY + CY) / 2, SZ - 0.051, fixed);
  box(0.013, CY - FY, 0.128, paint, RX0 - 0.0065, (FY + CY) / 2, SZ, fixed);
  // ceiling (textured) and the drywall bulkhead boxed around the duct trunk
  quad(LX, LZ, ceiling, fixed, MX, CY, MZ, { rx: Math.PI / 2, receive: true });
  const BX1 = 2.95, BZ1 = -2.24, BY = -0.47;
  box(BX1 - RX0, 0.013, BZ1 - RZ0, paint, (RX0 + BX1) / 2, BY, (RZ0 + BZ1) / 2, fixed);
  box(BX1 - RX0, CY - BY, 0.013, paint, (RX0 + BX1) / 2, (BY + CY) / 2, BZ1, fixed);
  box(0.013, CY - BY, BZ1 - RZ0, paint, BX1, (BY + CY) / 2, (RZ0 + BZ1) / 2, fixed);
  // floor: 9×9 tile on the slab, an aluminum threshold where the tile stops
  quad(LX, LZ, tile, fixed, MX, FY + 0.003, MZ, { rx: -Math.PI / 2, receive: true });
  box(0.045, 0.008, LZ, mats.galv, RX0 + 0.02, FY + 0.004, MZ, fixed, { cast: false });
  // floor drain: cast-iron ring, grate and its slots, set in a cut in the tile
  cyl(0.095, 0.008, mats.castIron, DRAIN.x, FY + 0.004, DRAIN.z, fixed, { seg: 24, cast: false });
  cyl(0.074, 0.006, mats.galv, DRAIN.x, FY + 0.009, DRAIN.z, fixed, { seg: 24, cast: false });
  for (let i = -2; i <= 2; i++) box(0.012, 0.002, 0.11 - Math.abs(i) * 0.018, mats.blackPlastic, DRAIN.x + i * 0.024, FY + 0.0125, DRAIN.z, fixed, { cast: false });

  // the old flood-cut band (drywall and baseboard below 600 mm) carries the wicking and the mould; it is gone in the rebuild
  const oldBand = part();
  box(0.013, BAND, LZ, paint, RX1 + 0.0065, FY + BAND / 2, MZ, oldBand);
  box(LX, BAND, 0.013, paint, MX, FY + BAND / 2, RZ0 - 0.0065, oldBand);
  box(0.012, 0.09, LZ, trim, RX1 - 0.006, FY + 0.045, MZ, oldBand, { cast: false });
  box(LX, 0.09, 0.012, trim, MX, FY + 0.045, RZ0 + 0.006, oldBand, { cast: false });
  const wickG = part(oldBand); wickG.position.y = FY;
  quad(LZ, 0.46, wickMat, wickG, RX1 - 0.0125, 0, MZ, { ry: -Math.PI / 2, base: true });
  quad(LX, 0.46, wickMat, wickG, MX, 0, RZ0 + 0.0125, { base: true, u: [0, LX / LZ] });
  seal(wickG);
  quad(LZ, BAND, mouldMat, oldBand, RX1 - 0.0128, FY, MZ, { ry: -Math.PI / 2, base: true });
  quad(LX, BAND, mouldMat, oldBand, MX, FY, RZ0 + 0.0128, { base: true, u: [0.2, 0.2 + LX / LZ] });
  seal(oldBand);
  // the new band: fresh drywall and baseboard that rise into the cut, and the new plank floor laid from the wall out
  const newBand = part();
  newBand.position.y = FY;
  box(0.013, BAND, LZ, paint, RX1 + 0.0065, BAND / 2, MZ, newBand); box(0.012, 0.09, LZ, trim, RX1 - 0.006, 0.045, MZ, newBand, { cast: false });
  box(LX, BAND, 0.013, paint, MX, BAND / 2, RZ0 - 0.0065, newBand); box(LX, 0.09, 0.012, trim, MX, 0.045, RZ0 + 0.006, newBand, { cast: false });
  seal(newBand);
  const newFloor = quad(LX, LZ, plank, group, RX1, FY + 0.007, MZ, { rx: -Math.PI / 2, edge: true, keep: true, receive: true });

  /* ------------------------------------------- the old heating pipe and its wrap */
  // drops out of the bulkhead, runs along the partition, rises into the ceiling; one sample cut is taped over
  const PY = -0.62, PZ = RZ0 + 0.1;
  const runA = [[2.3, BY, PZ], [2.3, PY + 0.06, PZ], [2.33, PY + 0.008, PZ], [2.38, PY, PZ], [3.49, PY, PZ]];
  const runB = [[3.57, PY, PZ], [4.56, PY, PZ], [4.61, PY + 0.008, PZ], [4.64, PY + 0.06, PZ], [4.64, CY, PZ]];
  const wrapOld = part(), wrapNew = part();
  [runA, runB].forEach((run) => { tube(run, 0.043, airCell, wrapOld, { type: "centripetal", radial: 12, density: 24 }); tube(run, 0.033, mats.rubber, wrapNew, { type: "centripetal", radial: 12, density: 24 }); });
  [2.9, 3.53, 4.2].forEach((x) => cyl(0.046, x === 3.53 ? 0.09 : 0.05, x === 3.53 ? mats.galv : airCell, x, PY, PZ, wrapOld, { axis: "x", seg: 16 }));   // canvas bands and the taped sample cut
    seal(wrapOld); seal(wrapNew);
  [2.75, 3.85].forEach((x) => { box(0.022, CY - PY - 0.04, 0.004, mats.galv, x, (CY + PY) / 2 + 0.02, PZ - 0.046, fixed, { cast: false }); box(0.022, 0.004, 0.1, mats.galv, x, PY - 0.046, PZ, fixed, { cast: false }); });
  cyl(0.06, 0.008, trim, 4.64, CY - 0.004, PZ, fixed, { seg: 20, cast: false });

  /* ------------------------------------- water service, main shut-off, supply line */
  const WX = 4.8, WZ = 2.1;
  cyl(0.019, 0.26, mats.bluePlastic, WX, FY + 0.13, WZ, fixed, { seg: 12 });            // service up through the slab
  cyl(0.04, 0.012, mats.castIron, WX, FY + 0.006, WZ, fixed, { seg: 16, cast: false });
  box(0.1, 0.12, 0.11, mats.brass, WX, FY + 0.32, WZ, fixed, { r: 0.01 });                 // meter
  cyl(0.04, 0.035, mats.blackPlastic, WX - 0.065, FY + 0.33, WZ, fixed, { axis: "x", seg: 20 });
  L.plane("reg", 0.06, fixed, WX - 0.0835, FY + 0.33, WZ, { rot: [0, -Math.PI / 2, 0] });
  cyl(0.015, 0.12, mats.brass, WX, FY + 0.44, WZ, fixed, { seg: 12 });
  cyl(0.024, 0.09, mats.brass, WX, FY + 0.53, WZ, fixed, { seg: 16 });                     // ball valve
  cyl(0.006, 0.03, mats.galv, WX - 0.035, FY + 0.53, WZ, fixed, { axis: "x", seg: 8 });
  const lever = new THREE.Group(); lever.position.set(WX - 0.052, FY + 0.53, WZ); lever.userData.keep = true; group.add(lever);
  box(0.01, 0.14, 0.024, mats.redPlastic, 0, 0.06, 0, lever, { r: 0.004 });
  box(0.014, 0.06, 0.028, mats.redPlastic, -0.002, 0.11, 0, lever, { r: 0.005 });
  L.plane("tag", 0.1, fixed, WX - 0.03, FY + 0.43, WZ - 0.055, { rot: [0, -Math.PI / 2 + 0.35, 0.05] });
  tube([[WX - 0.035, FY + 0.53, WZ - 0.01], [WX - 0.045, FY + 0.49, WZ - 0.04], [WX - 0.03, FY + 0.455, WZ - 0.055]], 0.0012, mats.galv, fixed, { radial: 4, cast: false });
  // copper: up the wall, along the top of the north wall, into the partition
  const CU = 0.0112;
  cyl(CU, -0.45 - (FY + 0.58), mats.copper, WX, (FY + 0.58 - 0.45) / 2, WZ, fixed, { seg: 10 });
  sphere(0.016, mats.copper, WX, -0.45, WZ, fixed, { seg: 10, seg2: 8 });
  cyl(CU, WZ - RZ0, mats.copper, WX, -0.45, (WZ + RZ0) / 2, fixed, { axis: "z", seg: 10 });
  [1.5, 0.6, -1.3, -2.2].forEach((z) => box(0.07, 0.022, 0.02, mats.galv, WX + 0.045, -0.45, z, fixed, { cast: false }));
  [-2.1, -1.2].forEach((y) => box(0.07, 0.02, 0.022, mats.galv, WX + 0.045, y, WZ, fixed, { cast: false }));
  // the split: frost-swollen copper with a dark tear on the room side
  cyl(0.0142, 0.07, mats.copper, BURST.x + 0.025, BURST.y, BURST.z, fixed, { axis: "z", seg: 12 });
  box(0.004, 0.006, 0.045, mats.blackPlastic, BURST.x + 0.011, BURST.y, BURST.z, fixed, { cast: false });

  /* -------------------------------------------------------------------- kitchen */
  // base cabinets, counter, slide-in range, tile backsplash, soffit and filler uppers (the house's own uppers and hood stay)
  const KZ0 = -3.885, KZ1 = -3.27, KX0 = 1.285, KX1 = 4.86, RG0 = 2.02, RG1 = 2.78;
  [[KX0, RG0], [RG1, KX1]].forEach(([a, b]) => {
    box(b - a, 0.8, KZ1 - KZ0 - 0.03, cabinet, (a + b) / 2, MF + 0.5, (KZ0 + KZ1) / 2 - 0.015, fixed);
    box(b - a, 0.1, 0.5, mats.blackPlastic, (a + b) / 2, MF + 0.05, KZ0 + 0.25, fixed, { cast: false });
    box(b - a + 0.01, 0.04, KZ1 - KZ0 + 0.02, M.counter, (a + b) / 2, TOP - 0.02, (KZ0 + KZ1) / 2 + 0.01, fixed);
    const n = Math.max(1, Math.round((b - a) / 0.46)), dw = (b - a) / n;
    for (let i = 0; i < n; i++) {
      const cx = a + dw * (i + 0.5);
      box(dw - 0.006, 0.15, 0.02, cabinet, cx, TOP - 0.13, KZ1 - 0.01, fixed, { r: 0.004 });
      box(dw - 0.006, 0.6, 0.02, cabinet, cx, MF + 0.42, KZ1 - 0.01, fixed, { r: 0.004 });
      box(0.12, 0.012, 0.02, mats.galv, cx, TOP - 0.11, KZ1 + 0.01, fixed, { cast: false });
      box(0.012, 0.12, 0.02, mats.galv, cx + dw / 2 - 0.05, MF + 0.6, KZ1 + 0.01, fixed, { cast: false });
    }
  });
  box(3.57, 0.61, 0.012, splash, (KX0 + KX1) / 2, (TOP + 1.85) / 2, KZ0 + 0.006, fixed);
  box(KX1 - KX0, 3.195 - 2.57, 0.37, paint, (KX0 + KX1) / 2, (2.57 + 3.195) / 2, -3.705, fixed);
  box(0.115, 0.72, 0.36, cabinet, 1.343, 2.21, -3.7, fixed);
  box(KX1 - 4.4, 0.72, 0.36, cabinet, (4.4 + KX1) / 2, 2.21, -3.7, fixed);
  // range: body, oven door and window, handle, knobs, glass top with four burners, backguard
  box(RG1 - RG0 - 0.004, TOP - MF - 0.012, 0.62, mats.steel, 2.4, (MF + TOP) / 2 - 0.006, -3.575, fixed);
  box(0.7, 0.56, 0.02, mats.steel, 2.4, MF + 0.44, -3.255, fixed, { r: 0.006 });
  box(0.5, 0.24, 0.006, mats.blackPlastic, 2.4, MF + 0.5, -3.243, fixed, { cast: false });
  cyl(0.011, 0.6, mats.galv, 2.4, MF + 0.78, -3.215, fixed, { axis: "x", seg: 10 });
  [-0.09, 0.09].forEach((dx) => box(0.014, 0.014, 0.04, mats.galv, 2.4 + dx * 3, MF + 0.78, -3.235, fixed, { cast: false }));
  [-0.27, -0.16, 0.16, 0.27].forEach((dx) => cyl(0.02, 0.025, mats.blackPlastic, 2.4 + dx, TOP - 0.07, -3.255, fixed, { axis: "z", seg: 14 }));
  box(RG1 - RG0, 0.012, 0.6, mats.blackPlastic, 2.4, TOP - 0.006, -3.575, fixed, { cast: false });
  [[-0.18, -3.42, 0.095], [0.18, -3.42, 0.08], [-0.18, -3.72, 0.08], [0.18, -3.72, 0.095]].forEach(([dx, z, rr]) => cyl(rr, 0.002, mats.greyPlastic, 2.4 + dx, TOP + 0.001, z, fixed, { seg: 24, cast: false }));
  box(RG1 - RG0, 0.06, 0.03, mats.steel, 2.4, TOP + 0.03, KZ0 + 0.03, fixed);
  // the pan that caught fire (front left), a kettle at the back, a towel on the oven handle, a utensil crock
  cyl(0.125, 0.05, mats.castIron, PAN.x, TOP + 0.027, PAN.z, fixed, { seg: 24 });
  box(0.2, 0.016, 0.026, mats.castIron, PAN.x - 0.07, TOP + 0.045, PAN.z + 0.2, fixed, { rot: [0, 1.1, 0] });
  cyl(0.08, 0.15, mats.steel, 2.58, TOP + 0.078, -3.72, fixed, { seg: 20, r2: 0.06 });
  box(0.13, 0.25, 0.012, mats.greyPlastic, 2.3, MF + 0.68, -3.198, fixed, { rot: [0.05, 0, 0] });
  cyl(0.055, 0.15, mats.greyPlastic, 3.4, TOP + 0.075, -3.75, fixed, { seg: 16 });
  [[-0.02, 0.1], [0.015, -0.08], [0.0, 0.0]].forEach(([dx, a]) => cyl(0.006, 0.3, cabinet, 3.4 + dx, TOP + 0.2, -3.75 + dx, fixed, { seg: 6, rot: [a, 0, a * 0.6] }));

  /* --------------------------------------------------------- step 0: burst line */
  const flood = part();
  const waterPlane = quad(WATER.x1 - WATER.x0, WATER.z1 - WATER.z0, water, flood, (WATER.x0 + WATER.x1) / 2, FY + 0.01, (WATER.z0 + WATER.z1) / 2, { rx: -Math.PI / 2, keep: true });
  waterPlane.renderOrder = 2; waterPlane.userData.noAO = true;
  const spray = kit.particles(240, { color: 0xa8d6ff, size: 0.045, gain: 1.1, opacity: 0.85 });
  flood.add(spray);
  const sN = spray.userData.n, sP = spray.userData.pos, sV = new Float32Array(sN * 4);
  for (let i = 0; i < sN; i++) {
    const a = (r() - 0.5) * 1.2, e = (r() - 0.32) * 0.75, sp = 2.0 + r() * 2.4;
    sV[i * 4] = -Math.cos(e) * Math.cos(a) * sp; sV[i * 4 + 1] = Math.sin(e) * sp; sV[i * 4 + 2] = Math.cos(e) * Math.sin(a) * sp; sV[i * 4 + 3] = r();
  }

  /* -------------------------------------------------------- step 1: sewage backup */
  const sew = part();
  const puddle = quad(PUD, PUD, sewage, sew, DRAIN.x, FY + 0.012, DRAIN.z, { rx: -Math.PI / 2, keep: true });
  puddle.renderOrder = 2; puddle.userData.noAO = true;
  const dome = kit.place(new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2), sewage), DRAIN.x, FY + 0.01, DRAIN.z, sew, { keep: true, cast: false });
  const bubbles = kit.particles(40, { color: 0x8a7046, size: 0.022, gain: 1, normal: true, opacity: 0.9 });
  sew.add(bubbles);
  const bN = bubbles.userData.n, bP = bubbles.userData.pos, bV = new Float32Array(bN * 3);
  for (let i = 0; i < bN; i++) { bV[i * 3] = r() * 6.2832; bV[i * 3 + 1] = 0.02 + r() * 0.2; bV[i * 3 + 2] = r(); }
  // an A-frame caution sign set up beside the drain, turned toward the room
  const sign = part(sew); sign.position.set(2.1, FY, -0.35); sign.rotation.y = -1.0;
  [[-0.2, 0.0616], [0.2, -0.0616]].forEach(([a, z]) => box(0.32, 0.64, 0.012, mats.yellowPlastic, 0, 0.3, z, sign, { rot: [a, 0, 0], r: 0.005 }));
  box(0.34, 0.03, 0.03, mats.yellowPlastic, 0, 0.615, 0, sign, { r: 0.008 });
  L.plane("cat3", 0.26, sign, 0, 0.3 + 0.199 * 0.0075, 0.0616 + 0.98 * 0.0075, { rot: [-0.2, 0, 0] });
  seal(sign);

  /* ---------------------------------------------------------- step 2: kitchen fire */
  const fire = part();
  const soot = part(fire);
  quad(1.9, 1.6, sootMat, soot, 2.35, 1.595, -3.505);                        // up the cabinet fronts and the soffit
  quad(1.6, 0.61, sootMat, soot, 2.3, TOP, KZ0 + 0.0125, { base: true });     // the backsplash behind the range
  quad(0.92, 0.16, sootMat, soot, 2.4, 1.6, -3.274);                         // the hood's front edge
  quad(3.0, 2.6, sootMat, soot, 2.45, 3.188, -2.75, { rx: Math.PI / 2 });     // a dark bloom across the ceiling
  seal(soot);
  const flameA = kit.particles(80, { color: 0xffc36b, size: 0.07, gain: 1.25, opacity: 0.9 });
  const flameB = kit.particles(60, { color: 0xff7a2a, size: 0.12, gain: 1.0, opacity: 0.75 });
  const smoke = kit.particles(110, { color: 0x2a2724, size: 0.3, gain: 1, normal: true, opacity: 0.5 });
  const pall = kit.particles(50, { color: 0x1e1c1a, size: 0.55, gain: 1, normal: true, opacity: 0.35 });
  fire.add(flameA, flameB, smoke, pall);
  const seed = (pts, k) => { const v = new Float32Array(pts.userData.n * k); for (let i = 0; i < v.length; i++) v[i] = r(); return v; };
  const fA = seed(flameA, 4), fB = seed(flameB, 4), sk = seed(smoke, 4), pl = seed(pall, 4);
  const glow = kit.sprite(0xff8a3a, 1.1, PAN.x, PAN.y + 0.16, PAN.z + 0.04, fire, 0);
  const fireLight = new THREE.PointLight(0xff8a3a, 0, 5, 2);
  fireLight.position.set(PAN.x, PAN.y + 0.2, PAN.z + 0.22); group.add(fireLight);

  /* --------------------------------------------- step 3: mould, containment, HEPA */
  const mould = part();
  const CXA = 2.28, CZB = 0.9, CH = CY - FY;
  const polyMat = mats.poly.clone(); polyMat.opacity = 0.15; polyMat.color.set(0xc6d2db);
  const rollMat = polyMat.clone(); rollMat.opacity = 0.45;
  // poly sheeting: a grid bowed inward by the negative air (local +z), with creases, and an optional opening (door)
  const bowAt = (u, v, w) => 0.075 * Math.sin(Math.PI * u) * Math.pow(Math.sin(Math.PI * v), 0.6) + 0.008 * Math.sin((u - 0.5) * w * 11 + v * 3) * Math.sin(Math.PI * v);
  const sheet = (w, parent, hole) => {
    const xs = [], ys = [];
    for (let i = 0; i <= 16; i++) xs.push(-w / 2 + (w * i) / 16);
    for (let j = 0; j <= 10; j++) ys.push(-CH / 2 + (CH * j) / 10);
    if (hole) { xs.push(hole[0], hole[1]); ys.push(hole[2]); }
    xs.sort((p, q) => p - q); ys.sort((p, q) => p - q);
    const pos = [], uv = [], idx = [], nx = xs.length;
    ys.forEach((y) => xs.forEach((x) => { const u = x / w + 0.5, v = y / CH + 0.5; pos.push(x, y, bowAt(u, v, w)); uv.push(u, v); }));
    for (let j = 0; j < ys.length - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const cx = (xs[i] + xs[i + 1]) / 2, cy = (ys[j] + ys[j + 1]) / 2;
      if (hole && cx > hole[0] && cx < hole[1] && cy < hole[2]) continue;
      const a = i + nx * (j + 1), b = i + nx * j, c = i + 1 + nx * j, d = i + 1 + nx * (j + 1);
      idx.push(a, b, d, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
    g.computeVertexNormals();
    return kit.place(new THREE.Mesh(g, polyMat), 0, 0, 0, parent, { cast: false, receive: false });
  };
  // sheet A closes the open side of the room (local x runs along world -z), sheet B crosses the room at z = 0.9
  const WA = CZB - RZ0, WB = RX1 - CXA, CA = (RZ0 + CZB) / 2;
  const lx = (wz) => -(wz - CA), lu = (wz) => (lx(wz) + WA / 2) / WA, ly = (h) => -CH / 2 + h;
  const DZ = -0.75, DW = 0.84, DOOR = 2.05;                // the zipper door: centre (world z), width, height
  const d0 = lx(DZ + DW / 2), d1 = lx(DZ - DW / 2);
  const sheetA = part(mould); sheetA.position.set(CXA, (FY + CY) / 2, CA); sheetA.rotation.y = Math.PI / 2;
  sheet(WA, sheetA, [d0, d1, ly(DOOR)]);
  const sheetB = part(mould); sheetB.position.set((CXA + RX1) / 2, (FY + CY) / 2, CZB); sheetB.rotation.y = Math.PI;
  sheet(WB, sheetB);
  // the door is unzipped and its flap rolled up and tied; a zip and its pull down each side
  [d0, d1].forEach((x, i) => {
    const u = (x + WA / 2) / WA, pts = [];
    for (let k = 0; k <= 10; k++) { const y = ly(0.03 + (k / 10) * (DOOR - 0.03)); pts.push([x, y, bowAt(u, (y + CH / 2) / CH, WA) - 0.006]); }
    tube(pts, 0.006, mats.blackPlastic, sheetA, { radial: 5, cast: false });
    box(0.016, 0.04, 0.01, mats.blackPlastic, x + (i ? -0.012 : 0.012), ly(1.1), bowAt(u, 1.1 / CH, WA) - 0.014, sheetA, { cast: false });
  });
  const rz = bowAt(0.5, DOOR / CH, WA) - 0.03;
  cyl(0.05, DW + 0.02, rollMat, (d0 + d1) / 2, ly(DOOR + 0.04), rz, sheetA, { axis: "x", seg: 14, cast: false });
  [-0.25, 0.25].forEach((dx) => box(0.035, 0.12, 0.11, mats.bluePlastic, (d0 + d1) / 2 + dx, ly(DOOR + 0.03), rz, sheetA, { cast: false }));
  seal(sheetA);
  // printed on and taped to the outside of sheet A: the containment sign and a manometer reading the negative pressure
  L.plane("zip", 0.34, mould, CXA + bowAt(lu(-1.95), 1.55 / CH, WA) - 0.014, FY + 1.55, -1.95, { rot: [0, -Math.PI / 2, 0] });
  const mzz = 0.25, mxx = CXA + bowAt(lu(mzz), 1.45 / CH, WA) - 0.03;
  box(0.03, 0.15, 0.11, mats.blackPlastic, mxx, FY + 1.45, mzz, mould, { r: 0.006 });
  L.plane("mano", 0.09, mould, mxx - 0.0155, FY + 1.47, mzz, { rot: [0, -Math.PI / 2, 0] });
  tube([[mxx, FY + 1.38, mzz - 0.03], [mxx + 0.02, FY + 1.3, mzz - 0.06], [CXA + 0.2, FY + 1.2, mzz - 0.05]], 0.003, mats.glassClear, mould, { radial: 5, cast: false });
  // blue tape sealing both sheets to the floor, the ceiling and the walls
  const tapeMat = mats.bluePlastic;
  box(0.05, 0.003, WA, tapeMat, CXA + 0.01, FY + 0.0015, CA, mould, { cast: false });
  box(0.05, 0.003, WA, tapeMat, CXA + 0.01, CY - 0.0015, CA, mould, { cast: false });
  box(WB, 0.003, 0.05, tapeMat, (CXA + RX1) / 2, FY + 0.0015, CZB - 0.01, mould, { cast: false });
  box(WB, 0.003, 0.05, tapeMat, (CXA + RX1) / 2, CY - 0.0015, CZB - 0.01, mould, { cast: false });
  box(0.003, CH, 0.05, tapeMat, RX1 - 0.0015, (FY + CY) / 2, CZB - 0.01, mould, { cast: false });
  box(0.05, CH, 0.003, tapeMat, CXA + 0.01, (FY + CY) / 2, RZ0 + 0.0015, mould, { cast: false });
  // HEPA air scrubber inside the containment, exhausting through a taped port in sheet B and away along the floor
  const AS = V(2.85, FY, 0.32);
  box(0.44, 0.5, 0.62, mats.enclosureDark, AS.x, AS.y + 0.33, AS.z, mould, { r: 0.02 });
  box(0.45, 0.04, 0.63, mats.blackPlastic, AS.x, AS.y + 0.6, AS.z, mould, { r: 0.012 });
  box(0.004, 0.36, 0.48, mats.blackPlastic, AS.x - 0.222, AS.y + 0.33, AS.z, mould, { cast: false });
  for (let i = 0; i < 9; i++) box(0.008, 0.008, 0.46, mats.galv, AS.x - 0.226, AS.y + 0.17 + i * 0.04, AS.z, mould, { cast: false });
  L.plane("hepa", 0.2, mould, AS.x - 0.228, AS.y + 0.545, AS.z, { rot: [0, -Math.PI / 2, 0] });
  box(0.012, 0.012, 0.004, mats.led(0x8fd3a6, 2), AS.x - 0.226, AS.y + 0.545, AS.z + 0.25, mould, { cast: false });
  [[-0.17, -0.25], [0.17, -0.25], [-0.17, 0.25], [0.17, 0.25]].forEach(([dx, dz]) => cyl(0.03, 0.025, mats.blackPlastic, AS.x + dx, AS.y + 0.04, AS.z + dz, mould, { axis: "x", seg: 12 }));
  tube([[AS.x - 0.16, AS.y + 0.66, AS.z - 0.2], [AS.x - 0.16, AS.y + 0.72, AS.z - 0.1], [AS.x - 0.16, AS.y + 0.72, AS.z + 0.1], [AS.x - 0.16, AS.y + 0.66, AS.z + 0.2]], 0.01, mats.blackPlastic, mould, { radial: 6 });
  cyl(0.11, 0.06, mats.galv, AS.x, AS.y + 0.38, AS.z + 0.33, mould, { axis: "z", seg: 20 });
  tube([[AS.x, AS.y + 0.38, AS.z + 0.36], [AS.x, AS.y + 0.37, CZB - 0.05], [AS.x - 0.05, AS.y + 0.3, CZB + 0.25], [AS.x - 0.3, AS.y + 0.11, 1.6], [2.0, AS.y + 0.1, 2.2], [0.9, AS.y + 0.1, 2.7]], 0.1, ribbed, mould, { radial: 14, density: 10 });
  [[0, 0.16], [0, -0.16]].forEach(([, dy]) => box(0.3, 0.05, 0.004, tapeMat, AS.x, AS.y + 0.37 + dy, CZB + 0.004, mould, { cast: false }));
  [[0.16], [-0.16]].forEach(([dx]) => box(0.05, 0.3, 0.004, tapeMat, AS.x + dx, AS.y + 0.37, CZB + 0.004, mould, { cast: false }));
  seal(mould);

  /* -------------------------------------------- step 4: asbestos sampling before demo */
  const asb = part();
  // a step ladder in the corner under the pipe, the three bagged samples on its top cap, the result sheet on the wall
  const lad = part(asb); lad.position.set(4.05, FY, -2.05); lad.rotation.y = -0.5;
  const LH = 1.72, la = 0.17;
  [[-0.21, 1], [0.21, 1], [-0.21, -1], [0.21, -1]].forEach(([x, s]) => box(0.024, LH / Math.cos(la), 0.07, mats.aluminum, x, LH / 2, s * Math.tan(la) * LH / 2, lad, { rot: [-s * la, 0, 0] }));
  [0.3, 0.6, 0.9, 1.2, 1.5].forEach((y) => box(0.42, 0.022, 0.085, mats.aluminum, 0, y, Math.tan(la) * (LH - y), lad, { cast: false }));
  [0.5, 1.0].forEach((y) => box(0.4, 0.016, 0.016, mats.aluminum, 0, y, -Math.tan(la) * (LH - y), lad, { cast: false }));
  box(0.46, 0.05, 0.24, mats.greyPlastic, 0, LH + 0.02, 0, lad, { r: 0.01 });
  ["s1", "s2", "s3"].forEach((k, i) => {
    const x = -0.14 + i * 0.14, z = (i - 1) * 0.02, rot = (i - 1) * 0.15;
    box(0.11, 0.012, 0.15, mats.glassClear, x, LH + 0.052, z, lad, { rot: [0, rot, 0], cast: false });
    box(0.05, 0.006, 0.05, mats.whitePlastic, x + 0.01, LH + 0.049, z + 0.03, lad, { rot: [0, rot + 0.4, 0], cast: false });
    box(0.104, 0.002, 0.012, mats.greyPlastic, x, LH + 0.059, z - 0.065, lad, { rot: [0, rot, 0], cast: false });
    L.plane(k, 0.085, lad, x, LH + 0.0595, z - 0.012, { rot: [-Math.PI / 2, 0, rot] });
  });
  L.plane("lab", 0.24, asb, 3.15, -1.32, RZ0 + 0.002);
  [[-0.11, 0.15], [0.11, 0.15], [-0.11, -0.15], [0.11, -0.15]].forEach(([dx, dy]) => box(0.04, 0.016, 0.002, mats.whitePlastic, 3.15 + dx, -1.32 + dy, RZ0 + 0.003, asb, { rot: [0, 0, 0.5 * Math.sign(dx * dy)], cast: false }));
  L.plane("asb", 0.36, asb, 2.45, -1.15, RZ0 + 0.002);
  // where each sample came from: a cut in a floor tile, a scraped spot in the ceiling texture (both taped)
  box(0.06, 0.004, 0.06, mats.blackPlastic, 3.4, FY + 0.004, -1.0, asb, { cast: false });
  box(0.11, 0.002, 0.04, mats.whitePlastic, 3.4, FY + 0.006, -0.95, asb, { cast: false });
  cyl(0.035, 0.003, mats.greyPlastic, 3.9, CY - 0.002, -1.75, asb, { seg: 16, cast: false });
  box(0.1, 0.002, 0.04, mats.whitePlastic, 3.93, CY - 0.004, -1.71, asb, { cast: false });
  seal(asb);

  /* --------------------------------------------------- step 5: dry, clean, rebuild */
  const gear = part();
  const fans = [];
  const airMover = (x, z, ry) => {
    const g = part(gear); g.position.set(x, FY, z); g.rotation.y = ry;
    cyl(0.2, 0.24, fanMat, 0, 0.235, 0, g, { axis: "z", seg: 28, open: true });
    cyl(0.17, 0.02, mats.blackPlastic, 0, 0.235, 0, g, { axis: "z", seg: 24 });
    box(0.25, 0.14, 0.24, fanMat, 0.12, 0.09, 0, g, { r: 0.02 });
    box(0.03, 0.12, 0.22, mats.blackPlastic, 0.245, 0.09, 0, g, { cast: false });
    [-1, 1].forEach((s) => {
      [0.06, 0.11, 0.165].forEach((rr) => kit.place(new THREE.Mesh(new THREE.TorusGeometry(rr, 0.004, 4, 28), mats.galv), 0, 0.235, s * 0.122, g, { cast: false }));
      box(0.34, 0.008, 0.006, mats.galv, 0, 0.235, s * 0.122, g, { cast: false });
      box(0.008, 0.34, 0.006, mats.galv, 0, 0.235, s * 0.122, g, { cast: false });
    });
    box(0.04, 0.03, 0.2, mats.blackPlastic, -0.13, 0.015, 0, g);
    box(0.04, 0.03, 0.2, mats.blackPlastic, 0.2, 0.015, 0, g);
    box(0.18, 0.026, 0.03, mats.yellowPlastic, -0.04, 0.47, 0, g, { r: 0.01 });
    [-0.11, 0.03].forEach((dx) => box(0.02, 0.06, 0.02, mats.yellowPlastic, dx, 0.44, 0, g));
    tube([[-0.18, 0.15, -0.05], [-0.32, 0.03, -0.1], [-0.6, 0.006, -0.3], [-1.0, 0.006, -0.35]], 0.006, mats.blackPlastic, g, { radial: 5, cast: false });
    const wheel = new THREE.Group(); wheel.position.set(0, 0.235, 0); wheel.userData.keep = true; g.add(wheel);
    for (let i = 0; i < 10; i++) { const a = (i / 10) * 6.2832; box(0.008, 0.06, 0.2, mats.blackPlastic, Math.cos(a) * 0.12, Math.sin(a) * 0.12, 0, wheel, { rot: [0, 0, a + 0.5], cast: false }); }
    kit.bake(wheel);
    fans.push(wheel);
  };
  airMover(4.42, -2.25, -0.55); airMover(4.45, -0.5, -0.5); airMover(4.42, 1.25, -0.6);
  // dehumidifier on its wheels, condensate hose to the floor drain; the pin meter on top, its probe in a stud
  const DH = V(3.4, FY, -0.85);
  box(0.42, 0.66, 0.4, mats.enclosure, DH.x, DH.y + 0.42, DH.z, gear, { r: 0.02 });
  box(0.43, 0.04, 0.41, mats.blackPlastic, DH.x, DH.y + 0.09, DH.z, gear, { r: 0.01 });
  for (let i = 0; i < 8; i++) box(0.006, 0.012, 0.32, mats.galv, DH.x - 0.212, DH.y + 0.22 + i * 0.045, DH.z, gear, { cast: false });
  box(0.004, 0.36, 0.34, mats.blackPlastic, DH.x - 0.211, DH.y + 0.38, DH.z, gear, { cast: false });
  L.plane("rh", 0.12, gear, DH.x - 0.2115, DH.y + 0.66, DH.z + 0.05, { rot: [0, -Math.PI / 2, 0] });
  [[-0.15, -0.16], [0.15, -0.16], [-0.15, 0.16], [0.15, 0.16]].forEach(([dx, dz]) => cyl(0.05, 0.03, mats.blackPlastic, DH.x + dx, DH.y + 0.05, DH.z + dz, gear, { axis: "z", seg: 14 }));
  tube([[DH.x + 0.19, DH.y + 0.7, DH.z - 0.16], [DH.x + 0.22, DH.y + 0.92, DH.z - 0.16], [DH.x + 0.22, DH.y + 0.92, DH.z + 0.16], [DH.x + 0.19, DH.y + 0.7, DH.z + 0.16]], 0.011, mats.galv, gear, { radial: 8, tension: 0.1 });
  tube([[DH.x + 0.1, DH.y + 0.12, DH.z - 0.2], [DH.x - 0.05, DH.y + 0.01, DH.z - 0.4], [DRAIN.x + 0.25, FY + 0.012, DRAIN.z + 0.1], [DRAIN.x + 0.02, FY + 0.015, DRAIN.z + 0.01]], 0.008, mats.blackPlastic, gear, { radial: 6, cast: false });
  const MM = V(DH.x + 0.02, DH.y + 0.765, DH.z - 0.05);
  box(0.085, 0.024, 0.16, mats.blackPlastic, MM.x, MM.y, MM.z, gear, { r: 0.008, rot: [0, 0.3, 0] });
  L.plane("mm", 0.066, gear, MM.x, MM.y + 0.0125, MM.z - 0.02, { rot: [-Math.PI / 2, 0, 0.3] });
  const STUDZ = RZ0 + 0.06 + 0.406 * 5;
  [-0.012, 0.012].forEach((dz) => cyl(0.0022, 0.035, mats.galv, 4.878, FY + 0.32, STUDZ + dz, gear, { axis: "x", seg: 6, cast: false }));
  cyl(0.013, 0.1, mats.blackPlastic, 4.81, FY + 0.32, STUDZ, gear, { axis: "x", seg: 12 });
  tube([[4.76, FY + 0.32, STUDZ], [4.6, FY + 0.12, STUDZ + 0.1], [4.0, FY + 0.01, -0.6], [3.62, FY + 0.3, -0.62], [MM.x + 0.03, MM.y, MM.z + 0.08]], 0.004, mats.blackPlastic, gear, { radial: 5, cast: false });
  seal(gear);

  kit.bake(fixed);

  /* ------------------------------------------------------------------ state */
  const anchors = {
    water: BURST.clone(), sewage: DRAIN.clone().add(V(0, 0.06, 0)), fire: V(PAN.x, PAN.y + 0.2, PAN.z),
    mould: V(RX1 - 0.02, FY + 0.32, -1.75), asb: V(3.53, PY, PZ), rebuild: V(RX1 - 0.02, FY + 0.32, 0.25)
  };
  const P = { time: 19.4, cut: 0, ghost: 0, ground: 1, orbit: 0.012 };
  const shots = [
    { ...P, radius: 13, theta: -1.3, phi: 1.53, fx: 3.0, ty: -0.7, fz: -0.4, cut: 0.9, ground: 0, dof: 0.3, orbit: 0.02 },
    { ...P, radius: 3.3, theta: -1.0, phi: 1.05, fx: 2.85, ty: -2.6, fz: -1.2, dof: 1.1 },
    { ...P, radius: 4.2, theta: 0.45, phi: 1.6, fx: 2.45, ty: 2.15, fz: -3.45, dof: 1.0 },
    { ...P, radius: 4.2, theta: -1.12, phi: 1.5, fx: 3.6, ty: -1.85, fz: -1.0, dof: 1.0 },
    { ...P, radius: 4.4, theta: -0.7, phi: 1.62, fx: 4.0, ty: -1.45, fz: -2.0, dof: 0.9 },
    { ...P, radius: 4.2, theta: -1.15, phi: 1.36, fx: 3.9, ty: -2.15, fz: -0.5, dof: 0.9 }
  ];
  const WLX = WATER.x1 - WATER.x0, WLZ = WATER.z1 - WATER.z0;
  let mmShown = "", mouldK = 0;
  return {
    name: "restore", group, anchors, shots,
    // the plain kitchen counter, fridge and cooktop: the detailed kitchen stands in for them
    hides: (H) => (H.sys.installation ? H.sys.installation.meshes : []),
    light(step) {
      if (step === 0) return { pos: [0.6, -1.0, 1.8], at: [4.3, -2.2, -0.8], power: 0.7, fill: 0.6 };
      if (step === 1) return { pos: [1.3, -0.6, 0.4], at: [2.8, -2.8, -1.4], power: 0.85 };
      if (step === 2) return { pos: [3.6, 2.95, -1.0], at: [2.4, 1.3, -3.6], power: 0.45, fill: 0.35 };
      if (step === 3) return { pos: [0.7, -0.6, 0.5], at: [4.2, -2.3, -1.2], power: 0.9 };
      if (step === 4) return { pos: [1.7, -0.75, 0.6], at: [4.3, -1.2, -2.3], power: 0.85 };
      return { pos: [1.3, -0.55, 1.4], at: [4.3, -2.4, -0.4], power: 0.9 };
    },
    update({ step, q, t, dt, snap, reduce }) {
      const ease = snap ? 1 : 1 - Math.exp(-dt * 4);
      const tt = reduce ? 1.7 : t;
      flood.visible = step === 0; sew.visible = step === 1; fire.visible = step === 2; mould.visible = step === 3; asb.visible = step === 4;
      gear.visible = step === 5 && q < 0.5;
      oldBand.visible = step !== 5; wrapOld.visible = step !== 5; wrapNew.visible = step === 5;

      // walls: the wick climbs during the flood and stays for the mould; mould colonies only in their step
      const wick = step === 0 ? 0.03 + 0.97 * smooth(0.04, 0.9, q) : step === 3 ? 1 : 0;
      wickG.visible = wick > 0.01; wickG.scale.y = Math.max(0.01, wick);
      mouldK = lerp(mouldK, step === 3 ? 0.55 + 0.45 * smooth(0, 0.7, q) : 0, ease);
      mouldMat.opacity = mouldK; mouldMat.visible = mouldK > 0.01;

      // the rebuild: new drywall rises into the cut, the room is painted and the ceiling skimmed smooth, the plank goes down
      const rb = step === 5 ? 1 : 0;
      const rise = rb * smooth(0.52, 0.7, q), paintK = rb * smooth(0.66, 0.84, q), lay = rb * smooth(0.72, 0.96, q);
      newBand.visible = rise > 0.005; newBand.scale.y = Math.max(0.001, rise);
      paint.color.copy(OLD).lerp(NEW, paintK);
      ceiling.color.copy(CEIL_OLD).lerp(CEIL_NEW, paintK); ceiling.bumpScale = 3 * (1 - paintK);
      newFloor.visible = lay > 0.005; newFloor.scale.x = Math.max(0.001, lay);

      if (step === 0) {
        // the flood: spreads from under the split and rises until the main is shut; the spray dies back to a drip
        const lev = smooth(0, 0.7, q), shut = smooth(0.6, 0.74, q);
        waterPlane.position.y = FY + 0.009 + 0.03 * lev;
        const R = lerp(0.3, 6.2, Math.pow(smooth(0, 0.85, q), 1.1));
        water.alphaMap.repeat.set((0.4 * WLX) / R, (0.4 * WLZ) / R);
        ripple.offset.set(tt * 0.035, tt * 0.022);
        lever.rotation.x = -shut * Math.PI / 2;
        const m = 1 - 0.96 * shut, live = Math.round(sN * (1 - 0.85 * shut)), h = BURST.y - FY - 0.03 * lev;
        spray.material.opacity = 0.85 - 0.35 * shut;
        for (let i = 0; i < sN; i++) {
          const o = i * 3;
          if (i >= live) { sP[o + 1] = -60; continue; }
          const vx = sV[i * 4] * m, vy = sV[i * 4 + 1] * m, vz = sV[i * 4 + 2] * m, life = (vy + Math.sqrt(vy * vy + 19.6 * h)) / 9.8;
          const a = ((tt / life + sV[i * 4 + 3]) % 1) * life;
          sP[o] = BURST.x - 0.012 + vx * a; sP[o + 1] = BURST.y + vy * a - 4.9 * a * a; sP[o + 2] = BURST.z + vz * a;
        }
        spray.geometry.attributes.position.needsUpdate = true;
      }
      if (step === 1) {
        // sewage wells up out of the drain: a pulsing dome, a puddle spreading with the scroll, a few bubbles
        const R = lerp(0.2, 1.75, smooth(0, 0.85, q));
        sewage.alphaMap.repeat.set((0.4 * PUD) / R, (0.4 * PUD) / R);
        sewage.normalMap.offset.set(tt * 0.02, -tt * 0.03);
        const pulse = reduce ? 0.5 : 0.5 + 0.5 * Math.sin(tt * 3.1);
        dome.scale.set(1 + 0.12 * pulse, 0.14 + 0.1 * pulse, 1 + 0.12 * pulse);
        for (let i = 0; i < bN; i++) {
          const o = i * 3, u = (tt * 0.45 + bV[i * 3 + 2]) % 1, d = bV[i * 3 + 1] * (0.4 + u) * Math.min(1, R / 0.6);
          bP[o] = DRAIN.x + Math.cos(bV[i * 3]) * d; bP[o + 1] = FY + 0.016 + 0.012 * Math.sin(u * Math.PI); bP[o + 2] = DRAIN.z + Math.sin(bV[i * 3]) * d;
        }
        bubbles.geometry.attributes.position.needsUpdate = true;
      }
      fireLight.intensity = step === 2 ? (2.6 + (reduce ? 0 : 0.7 * Math.sin(tt * 17) + 0.5 * Math.sin(tt * 7.3))) * (0.7 + 0.3 * Math.min(1, q * 3)) : 0;
      if (step === 2) {
        // pan fire: flames that flatten and roll out under the hood, smoke up the cabinets and across the ceiling, soot growing
        sootMat.opacity = 0.18 + 0.82 * smooth(0, 0.85, q);
        glow.material.opacity = 0.45 + (reduce ? 0 : 0.12 * Math.sin(tt * 13));
        const flames = (pts, v, spread, height, rate) => {
          const p = pts.userData.pos;
          for (let i = 0; i < pts.userData.n; i++) {
            const o = i * 3, a = v[i * 4] * 6.2832, u = (tt * rate * (0.7 + 0.6 * v[i * 4 + 1]) + v[i * 4 + 3]) % 1;
            const rr = spread * Math.sqrt(v[i * 4 + 2]) * (1 - 0.65 * u);
            let x = PAN.x + Math.cos(a) * rr + Math.sin(tt * 9 + i) * 0.012 * u, y = PAN.y + u * height * (0.5 + v[i * 4 + 1]), z = PAN.z + Math.sin(a) * rr;
            if (y > HOOD) { const over = y - HOOD; y = HOOD - over * 0.12; z += over * 1.7; x += Math.cos(a) * over * 0.7; }
            p[o] = x; p[o + 1] = y; p[o + 2] = z;
          }
          pts.geometry.attributes.position.needsUpdate = true;
        };
        flames(flameA, fA, 0.08, 0.26, 1.6);
        flames(flameB, fB, 0.11, 0.38, 1.1);
        const sp = smoke.userData.pos;
        for (let i = 0; i < smoke.userData.n; i++) {
          const o = i * 3, u = (tt * 0.11 * (0.7 + 0.6 * sk[i * 4]) + sk[i * 4 + 3]) % 1, j = (sk[i * 4 + 1] - 0.5) * 0.14;
          let x, y, z;
          if (u < 0.15) { const s = u / 0.15; x = PAN.x + j; y = PAN.y + 0.15 + s * (HOOD - PAN.y - 0.2); z = PAN.z + j * 0.5; }
          else if (u < 0.3) { const s = (u - 0.15) / 0.15; x = PAN.x + j * 1.6; y = HOOD - 0.03; z = PAN.z + s * 0.32; }
          else if (u < 0.55) { const s = (u - 0.3) / 0.25; x = PAN.x + j * 2 + s * 0.1; y = HOOD + s * (3.06 - HOOD); z = PAN.z + 0.32 + s * 0.12 + Math.sin(s * 3 + i) * 0.04; }
          else { const s = (u - 0.55) / 0.45, a = (sk[i * 4 + 2] - 0.5) * 2.6, d = s * (0.7 + 1.6 * sk[i * 4]); x = PAN.x + 0.1 + Math.sin(a) * d; y = 3.07 - s * 0.08; z = PAN.z + 0.44 + Math.cos(a) * d; }
          sp[o] = x; sp[o + 1] = y; sp[o + 2] = z;
        }
        smoke.geometry.attributes.position.needsUpdate = true;
        smoke.material.opacity = 0.32 + 0.22 * Math.min(1, q * 2);
        const pp = pall.userData.pos;
        for (let i = 0; i < pall.userData.n; i++) {
          const o = i * 3, w = tt * 0.05 + pl[i * 4 + 3] * 6.28;
          pp[o] = 1.45 + pl[i * 4] * 3.2 + Math.sin(w) * 0.15; pp[o + 1] = 2.98 + pl[i * 4 + 1] * 0.16; pp[o + 2] = -3.7 + pl[i * 4 + 2] * 2.6 + Math.cos(w * 0.7) * 0.15;
        }
        pall.geometry.attributes.position.needsUpdate = true;
        pall.material.opacity = 0.08 + 0.32 * smooth(0.05, 0.9, q);
      }
      if (step === 3) {
        // the negative-air sheets breathe a little with the scrubber
        const b = reduce ? 1 : 1 + 0.12 * Math.sin(tt * 0.9);
        sheetA.scale.z = b;
      }
      if (step === 5) {
        // the pin meter falls from wet framing to dry as the drying runs; then the gear goes and the room is rebuilt
        if (!reduce) fans.forEach((w, i) => { w.rotation.z -= dt * (34 + i * 3); });
        const v = Math.round(lerp(28, 11, smooth(0.02, 0.45, q)));
        const tone = v > 19 ? "#ff6b4f" : v > 15 ? "#f4bd7e" : "#8fd3a6", sub = v <= 12 ? "DRY" : "% WOOD";
        if (v + sub !== mmShown) { mmShown = v + sub; L.set("mm", String(v), sub, { tone }); }
      }
    }
  };
}
