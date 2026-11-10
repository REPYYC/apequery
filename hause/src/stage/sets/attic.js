// Close-up set 2 of 6: the roof and the attic, all on the north (+x) side of the house, the slope that carries the array.
// Outside: hailstones on the metal roof, its roof cap and the array; snow, a meltwater film, an ice dam and icicles along the
// eave, cut open at the back rake; the array's racking; the bedroom window under that eave with fogged glass, a rotten sill
// and stained siding. Inside: trusses under an OSB deck whose nail tips frost over and then drip, blown insulation with a
// depth ruler, eave baffles, a bath fan whose duct first ends in the insulation and then at the roof cap, and a patch of old
// vermiculite with a sample bag.
import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";
import { lerp, smooth, clamp, rng } from "../util.js";

const PITCH = Math.atan2(3.6, 5), CP = Math.cos(PITCH), SP = Math.sin(PITCH), TP = 3.6 / 5;
const UY = 9.9324;                                   // underside of the roof slab where it would meet x = 0
const under = (x) => UY - Math.abs(x) * TP;         // underside of the roof at x
// The +x slope's own frame: s runs down the slope from the ridge, n is the outward normal (0 = underside of the house's
// roof slab, 0.2 = its top), z is unchanged. at(s, n, z) gives house coordinates.
const at = (s, n, z = 0, out = new THREE.Vector3()) => out.set(s * CP + n * SP, UY - s * SP + n * CP, z);
const TOP = 0.2, EAVE = 6.805;                      // slab top (n) and the eave end of the slab (s)
const TRUSS = Array.from({ length: 13 }, (_, i) => -3.6 + i * 0.6);
const WIN = { z0: -2.4, z1: -0.6, y0: 4.35, y1: 5.75 }; // the upper bedroom window in the +x wall (outer face x = 5.11)
const GUT = { x: 5.466, y: 5.723 };                 // the house gutter: centre x and underside
const VERM = { x: 0.75, z: 0.95, rx: 0.52, rz: 0.44 }; // the raked-open patch over the old vermiculite (clear of the webs)
const FAN = { x: 2.55, z: -0.9 }, CAP = 4.78;       // bath fan on the ceiling, and the s of its roof cap (just below the array)
const FLUFF = 6.8;                                   // top of the 400 mm of blown insulation (ceiling at 6.40)

/** canvas texture; o.repeat [u, v], o.clamp, o.color = false for data maps */
function canvasTex(w, h, draw, o = {}) {
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  draw(cv.getContext("2d"), w, h);
  const tex = new THREE.CanvasTexture(cv);
  if (o.color !== false) tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = o.clamp ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  tex.anisotropy = 8;
  if (o.repeat) tex.repeat.set(o.repeat[0], o.repeat[1]);
  return tex;
}

export function createAtticSet({ kit, H, tier }) {
  const { box, cyl, tube, mats, std, atlas, V } = kit;
  const group = new THREE.Group(); group.name = "attic";
  const fixed = new THREE.Group(); group.add(fixed);
  const lo = tier === 0;
  const R = rng(17);
  const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
  // a frame on the +x slope (and its mirror on the -x slope) for building in (s, n, z)
  const frame = (parent, west) => { const g = new THREE.Group(); g.position.set(0, UY, 0); g.rotation.set(0, west ? Math.PI : 0, -PITCH); parent.add(g); return g; };
  const sx = frame(fixed), sw = frame(fixed, true);

  /* -------------------------------------------------------------- materials */
  const osb = new THREE.MeshStandardMaterial({ roughness: 0.86, map: canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = "#b48d58"; g.fillRect(0, 0, w, h);
    const r = rng(21);
    for (let i = 0; i < 1500; i++) {
      const x = r() * w, y = r() * h, L = 12 + r() * 36, T = 3 + r() * 8, tone = r();
      g.fillStyle = tone < 0.4 ? `rgba(118,80,38,${0.22 + r() * 0.3})` : tone < 0.85 ? `rgba(218,182,124,${0.22 + r() * 0.3})` : `rgba(78,52,24,${0.35 + r() * 0.3})`;
      g.save(); g.translate(x, y); g.rotate((r() - 0.5) * 1.2 + (r() > 0.5 ? 0 : Math.PI / 2)); g.fillRect(-L / 2, -T / 2, L, T); g.restore();
    }
    g.fillStyle = "rgba(48,30,14,.85)"; g.fillRect(0, 0, w, 2); g.fillRect(0, 0, 2, h);   // the joints between 1.2 x 2.4 m sheets
  }, { repeat: [1 / 2.4, 1 / 1.2] }) });
  osb.userData.th = [0.4];
  // spruce lumber: pale, with long soft grain (UVs in metres along the piece)
  const lumber = std(0xffffff, 0.78, 0, { map: canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#cdae78"; g.fillRect(0, 0, w, h);
    const r = rng(33);
    for (let i = 0; i < 70; i++) {
      const y = r() * h, a = 0.06 + r() * 0.12;
      g.strokeStyle = r() > 0.4 ? `rgba(122,84,40,${a})` : `rgba(246,226,182,${a})`; g.lineWidth = 0.6 + r() * 2.4;
      g.beginPath(); g.moveTo(0, y); for (let x = 0; x <= w; x += 16) g.lineTo(x, y + Math.sin(x * 0.024 + i) * 2.5); g.stroke();
    }
    for (let i = 0; i < 2; i++) { const x = r() * w, y = r() * h; const gr = g.createRadialGradient(x, y, 0, x, y, 9); gr.addColorStop(0, "rgba(96,58,24,.7)"); gr.addColorStop(1, "rgba(96,58,24,0)"); g.fillStyle = gr; g.fillRect(x - 12, y - 6, 24, 12); }
  }, { repeat: [1 / 1.6, 1 / 0.4] }) });
  const fluffTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#808080"; g.fillRect(0, 0, w, h);
    const r = rng(5);
    for (let i = 0; i < 700; i++) {
      const x = r() * w, y = r() * h, rad = 2 + r() * 10, c = r() < 0.5 ? 255 : 0;
      for (const ox of [-w, 0, w]) for (const oy of [-h, 0, h]) {
        if (x + ox < -rad || x + ox > w + rad || y + oy < -rad || y + oy > h + rad) continue;
        const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, rad);
        gr.addColorStop(0, `rgba(${c},${c},${c},0.22)`); gr.addColorStop(1, `rgba(${c},${c},${c},0)`);
        g.fillStyle = gr; g.fillRect(x + ox - rad, y + oy - rad, rad * 2, rad * 2);
      }
    }
  }, { color: false, repeat: [2.5, 2.5] });
  const fluff = std(0xcdbd98, 1, 0, { bumpMap: fluffTex, bumpScale: 3 });
  const frostTex = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = "#000"; g.fillRect(0, 0, w, h);
    const r = rng(8);
    g.strokeStyle = "#fff"; g.lineCap = "round";
    for (let i = 0; i < 900; i++) {   // feathery hoar: a spine with barbs either side
      const x = r() * w, y = r() * h, a = r() * 6.28, L = 6 + r() * 24;
      g.globalAlpha = 0.3 + r() * 0.6; g.lineWidth = 0.8 + r() * 1.4;
      const x2 = x + Math.cos(a) * L, y2 = y + Math.sin(a) * L;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2);
      for (let k = 1; k < 5; k++) {
        const f = k / 5, bx = x + (x2 - x) * f, by = y + (y2 - y) * f, bl = L * 0.32 * (1 - f) + 2;
        g.moveTo(bx, by); g.lineTo(bx + Math.cos(a + 0.7) * bl, by + Math.sin(a + 0.7) * bl);
        g.moveTo(bx, by); g.lineTo(bx + Math.cos(a - 0.7) * bl, by + Math.sin(a - 0.7) * bl);
      }
      g.stroke();
    }
    g.globalAlpha = 0.28; g.fillStyle = "#fff"; g.fillRect(0, 0, w, h);
  }, { color: false, repeat: [4, 4] });
  const frostSheet = std(0xeef5ff, 0.45, 0, { alphaMap: frostTex, transparent: true, depthWrite: false, emissive: 0xaecbff, emissiveIntensity: 0.12, side: THREE.DoubleSide });
  const frostTip = std(0xf2f7ff, 0.35, 0, { emissive: 0xbfd6ff, emissiveIntensity: 0.22 });
  const baffleMat = std(0xc9d3da, 0.62, 0.02);
  const soffitMat = std(0xffffff, 0.55, 0.3, { map: canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#d7d5cf"; g.fillRect(0, 0, w, h);
    g.fillStyle = "#3a3c40";
    for (let j = 0; j < 4; j++) for (let i = 0; i < 6; i++) g.fillRect(8 + i * 20 + (j % 2) * 10, 12 + j * 32, 6, 14);
    g.fillStyle = "rgba(0,0,0,.18)"; g.fillRect(0, 0, w, 3);
  }, { repeat: [1 / 0.16, 1 / 0.16] }) });
  const ductMat = std(0xd8d2c6, 0.55, 0.12, { envMapIntensity: 0.4, map: canvasTex(16, 64, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, "#5e6268"); gr.addColorStop(0.35, "#b9bec4"); gr.addColorStop(0.7, "#9a9fa6"); gr.addColorStop(1, "#5e6268");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  }, { repeat: [34, 1] }), envMapIntensity: 1.1 });
  const snowMat = std(0xb0b8c4, 0.95, 0, { bumpMap: fluffTex, bumpScale: 1.2 });
  const iceMat = new THREE.MeshPhysicalMaterial({ color: 0xb4cfdb, roughness: 0.08, metalness: 0, transparent: true, opacity: 0.72, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 0.75, bumpMap: fluffTex, bumpScale: 0.6 });
  iceMat.userData.th = [0.1];
  const hailMat = std(0xe8eef5, 0.28, 0, { emissive: 0x9fb2c4, emissiveIntensity: 0.12 });
  const cellMat = new THREE.MeshPhysicalMaterial({ roughness: 0.14, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.4, map: canvasTex(512, 384, (g, w, h) => {
    g.fillStyle = "#b9bfc8"; g.fillRect(0, 0, w, h);
    const cols = 10, rows = 6, m = 5, cw = (w - 2 * m) / cols, ch = (h - 2 * m) / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const x = m + i * cw + 1.5, y = m + j * ch + 1.5, ww = cw - 3, hh = ch - 3, c = 6;
      g.fillStyle = "#0c1830";
      g.beginPath(); g.moveTo(x + c, y); g.lineTo(x + ww - c, y); g.lineTo(x + ww, y + c); g.lineTo(x + ww, y + hh - c); g.lineTo(x + ww - c, y + hh); g.lineTo(x + c, y + hh); g.lineTo(x, y + hh - c); g.lineTo(x, y + c); g.closePath(); g.fill();
      g.fillStyle = "rgba(150,165,190,.18)"; for (let k = 1; k < 12; k++) g.fillRect(x, y + (hh * k) / 12, ww, 0.6);
      g.fillStyle = "rgba(196,204,216,.75)"; for (let b = 1; b <= 3; b++) g.fillRect(x + (ww * b) / 4 - 0.7, y, 1.4, hh);
    }
  }, { clamp: true }) });
  cellMat.userData.th = [0.17];
  const fogMat = new THREE.MeshStandardMaterial({ color: 0xaab4be, roughness: 0.9, transparent: true, depthWrite: false, map: canvasTex(256, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, "rgba(214,224,232,0.2)"); gr.addColorStop(0.45, "rgba(214,224,232,0.42)"); gr.addColorStop(1, "rgba(224,232,240,0.74)");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const r = rng(4);
    g.globalCompositeOperation = "destination-out";       // runs where drops have slid down and cleared the film
    for (let i = 0; i < 26; i++) { const x = r() * w, y0 = r() * h * 0.6, len = 30 + r() * 140; g.lineWidth = 1 + r() * 2.2; g.strokeStyle = "rgba(0,0,0,.75)"; g.beginPath(); g.moveTo(x, y0); g.bezierCurveTo(x + (r() - 0.5) * 8, y0 + len * 0.4, x + (r() - 0.5) * 8, y0 + len * 0.7, x + (r() - 0.5) * 6, y0 + len); g.stroke(); }
    g.globalCompositeOperation = "source-over";
    for (let i = 0; i < 260; i++) { const x = r() * w, y = h * Math.sqrt(r()), rad = 0.8 + r() * 2.4; g.fillStyle = `rgba(250,252,255,${0.4 + r() * 0.5})`; g.beginPath(); g.arc(x, y, rad, 0, 6.3); g.fill(); }
    g.fillStyle = "rgba(240,246,252,.8)"; [[0, h], [w, h]].forEach(([cx, cy]) => { const gg = g.createRadialGradient(cx, cy, 0, cx, cy, 70); gg.addColorStop(0, "rgba(244,248,252,.9)"); gg.addColorStop(1, "rgba(244,248,252,0)"); g.fillStyle = gg; g.fillRect(cx - 70, cy - 70, 140, 140); });
  }, { clamp: true }) });
  fogMat.userData.th = [0.5];
  // stains on the siding from the soffit down past the window: canvas covers z 0.3 .. -3.3, y 5.88 .. 3.6
  const SZ0 = 0.3, SZ1 = -3.3, SY0 = 5.88, SY1 = 3.6;
  const stainMat = new THREE.MeshStandardMaterial({ roughness: 0.9, transparent: true, depthWrite: false, map: canvasTex(512, 324, (g, w, h) => {
    const px = (z) => ((SZ0 - z) / (SZ0 - SZ1)) * w, py = (y) => ((SY0 - y) / (SY0 - SY1)) * h;
    const r = rng(9);
    const streak = (x, y0, len, wid, a) => {
      const gr = g.createLinearGradient(0, y0, 0, y0 + len); gr.addColorStop(0, `rgba(186,178,160,${a * 0.32})`); gr.addColorStop(1, "rgba(206,196,176,0)");
      g.fillStyle = gr; g.beginPath(); g.moveTo(x - wid / 2, y0);
      for (let k = 0; k <= 8; k++) g.lineTo(x - wid / 2 + Math.sin(k * 1.7 + x) * 1.5 - (wid * 0.2 * k) / 8, y0 + (len * k) / 8);
      for (let k = 8; k >= 0; k--) g.lineTo(x + wid / 2 + Math.sin(k * 1.3 + x) * 1.5 + (wid * 0.15 * k) / 8, y0 + (len * k) / 8);
      g.closePath(); g.fill();
    };
    for (let i = 0; i < 22; i++) streak(px(0.1 - r() * 3.2), 0, 30 + r() * 120, 4 + r() * 16, 0.25 + r() * 0.35);      // from the soffit
    [WIN.z0 - 0.06, WIN.z1 + 0.06].forEach((z) => { streak(px(z), py(5.86), 90, 18, 0.5); streak(px(z) + (r() - 0.5) * 6, py(4.3), 150, 14, 0.55); });
    for (let i = 0; i < 14; i++) streak(px(WIN.z0 + 0.05 + r() * 1.7), py(4.3) + r() * 6, 30 + r() * 120, 2 + r() * 7, 0.2 + r() * 0.35);   // under the sill
    g.clearRect(px(WIN.z1), py(WIN.y1), px(WIN.z0) - px(WIN.z1), py(WIN.y0) - py(WIN.y1));
  }, { clamp: true }) });
  stainMat.userData.th = [0.3];
  const rotMat = std(0xffffff, 0.92, 0, { map: canvasTex(128, 256, (g, w, h) => {
    g.fillStyle = "#4b3a29"; g.fillRect(0, 0, w, h);
    const r = rng(12);
    for (let i = 0; i < 40; i++) { const x = r() * w; g.strokeStyle = r() > 0.5 ? `rgba(20,14,8,${0.3 + r() * 0.4})` : `rgba(120,98,70,${0.2 + r() * 0.3})`; g.lineWidth = 0.6 + r() * 1.8; g.beginPath(); g.moveTo(x, 0); for (let y = 0; y <= h; y += 16) g.lineTo(x + Math.sin(y * 0.05 + i) * 2, y); g.stroke(); }
    for (let i = 0; i < 26; i++) { const x = r() * w, y = r() * h, rx = 3 + r() * 10, ry = 8 + r() * 30; const gr = g.createRadialGradient(x, y, 0, x, y, ry); gr.addColorStop(0, `rgba(14,10,6,${0.55 + r() * 0.35})`); gr.addColorStop(1, "rgba(14,10,6,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, 6.3); g.fill(); }
    for (let i = 0; i < 7; i++) { g.fillStyle = `rgba(206,200,188,${0.45 + r() * 0.3})`; g.fillRect(r() * w, r() * h, 2 + r() * 6, 4 + r() * 14); }   // the last of the paint
  }, { repeat: [1 / 0.3, 1 / 0.3] }) });
  const capMat = mats.galv;
  const tin = std(0xcac6bd, 0.5, 0.12, { envMapIntensity: 0.35 });
  const water = new THREE.MeshPhysicalMaterial({ color: 0x1f3a50, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.86, clearcoat: 1, envMapIntensity: 1.1 });
  water.userData.th = [0.3];
  const melt = kit.flow(0x4fa6ff, { base: 0x0e1c2a, intensity: 0.35, dash: 5, speed: 0.2, rest: 0.3, gain: 1, roughness: 0.08 });

  /* ---------------------------------------------------------------- labels */
  const L = atlas([
    { key: "ruler", w: 72, h: 664, draw(g, w, h) {
      g.fillStyle = "#e6d9b0"; g.fillRect(0, 0, w, h);
      const mm = (v) => h - (v / 600) * h;          // the board is 600 mm tall, 0 at the ceiling
      g.fillStyle = "rgba(143,211,166,.9)"; g.fillRect(0, mm(445), w, mm(400) - mm(445));
      g.fillStyle = "#1a1c20"; g.textAlign = "right"; g.textBaseline = "middle";
      for (let v = 0; v <= 600; v += 10) { const y = mm(v), L = v % 100 === 0 ? 22 : v % 50 === 0 ? 15 : 8; g.fillRect(0, y - 0.8, L, 1.6); }
      g.font = "700 18px ui-monospace, Menlo, monospace";
      for (let v = 100; v < 600; v += 100) if (v !== 400) g.fillText(String(v), w - 3, mm(v) + 10);
      g.font = "800 17px ui-monospace, Menlo, monospace"; g.fillText("400", w - 3, mm(400) - 12); g.fillText("R-50", w - 3, mm(400) - 32);
      g.font = "700 14px ui-monospace, Menlo, monospace"; g.fillText("mm", w - 3, mm(565));
    } },
    { key: "bag", w: 200, h: 112, bg: "#f1efe8", draw(g, w, h) {
      g.fillStyle = "#f1efe8"; g.fillRect(0, 0, w, h); g.strokeStyle = "#1a1c20"; g.lineWidth = 3; g.strokeRect(5, 5, w - 10, h - 10);
      g.fillStyle = "#1a1c20"; g.textAlign = "left"; g.textBaseline = "middle"; g.font = "700 30px ui-monospace, Menlo, monospace"; g.fillText("SAMPLE A-1", 16, 36);
      g.font = "500 17px ui-monospace, Menlo, monospace"; g.fillText("ATTIC · LOOSE FILL", 16, 70); g.fillText("SEALED · FOR LAB", 16, 92);
    } },
    { key: "caution", w: 300, h: 150, draw(g, w, h) {
      g.fillStyle = "#e9c22e"; g.fillRect(0, 0, w, h); g.fillStyle = "#16171a"; g.fillRect(0, 0, w, 12); g.fillRect(0, h - 12, w, 12);
      g.textAlign = "center"; g.textBaseline = "middle"; g.font = "800 44px ui-monospace, Menlo, monospace"; g.fillText("CAUTION", w / 2, 46);
      g.font = "700 20px ui-monospace, Menlo, monospace"; g.fillText("POSSIBLE ASBESTOS", w / 2, 88); g.fillText("DO NOT DISTURB", w / 2, 116);
    } },
    { key: "pv", w: 300, h: 92, draw(g, w, h) {
      g.fillStyle = "#b8281c"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#f4f1ea"; g.textAlign = "center"; g.textBaseline = "middle"; g.font = "800 34px ui-monospace, Menlo, monospace"; g.fillText("PV SYSTEM", w / 2, 32);
      g.font = "600 17px ui-monospace, Menlo, monospace"; g.fillText("DC CONDUCTORS · 600 V", w / 2, 66);
    } },
  ], { width: 1024, emissive: 0.2 });

  /* ------------------------------------------------- roof deck and trusses */
  [sx, sw].forEach((f) => box(6.27, 0.012, 7.55, osb, 3.165, -0.008, 0, f, { uv: true, cast: false }));
  box(0.05, 0.012, 7.55, mats.blackPlastic, 0, UY - 0.03, 0, fixed, { cast: false });     // the ridge vent's slot and its mesh
  // gable framing: the inside face of each gable sheathed in OSB around the attic window, with gable studs
  const gable = new THREE.Shape();
  gable.moveTo(-4.95, 6.4); gable.lineTo(4.95, 6.4); gable.lineTo(0, under(0) - 0.02); gable.lineTo(-4.95, 6.4);
  const hole = new THREE.Path(); hole.moveTo(-0.5, 7.5); hole.lineTo(0.5, 7.5); hole.lineTo(0.5, 8.5); hole.lineTo(-0.5, 8.5); hole.lineTo(-0.5, 7.5);
  gable.holes.push(hole);
  const gableGeo = new THREE.ShapeGeometry(gable);
  [[-3.775, 0], [3.775, Math.PI]].forEach(([z, ry]) => {
    const m = new THREE.Mesh(gableGeo, osb); m.position.set(0, 0, z); m.rotation.y = ry; m.receiveShadow = true; fixed.add(m);
    [-4.2, -3.4, -2.6, -1.8, -1.05, 1.05, 1.8, 2.6, 3.4, 4.2].forEach((x) => { const top = under(x) - 0.06; box(0.038, top - 6.4, 0.089, lumber, x, (top + 6.4) / 2, z + Math.sign(-z) * 0.046, fixed, { uv: true, cast: false }); });
    [7.45, 8.55].forEach((y) => box(1.12, 0.038, 0.089, lumber, 0, y, z + Math.sign(-z) * 0.046, fixed, { uv: true, cast: false }));
  });
  // trusses at 600 mm: top chords on both slopes (the +x one runs out to the fascia), bottom chord, Fink webs, plates
  const web = (ax, ay, bx, by, z, parent = fixed) => box(Math.hypot(bx - ax, by - ay), 0.089, 0.038, lumber, (ax + bx) / 2, (ay + by) / 2, z, parent, { uv: true, rot: [0, 0, Math.atan2(by - ay, bx - ax)] });
  const chordDrop = (0.014 + 0.089) / CP;
  TRUSS.forEach((z) => {
    box(6.76, 0.089, 0.038, lumber, 3.38, -0.0585, z, sx, { uv: true });
    box(6.2, 0.089, 0.038, lumber, 3.1, -0.0585, z, sw, { uv: true });
    box(9.9, 0.089, 0.038, lumber, 0, 6.4 + 0.0445, z, fixed, { uv: true, cast: false });
    [-1, 1].forEach((side) => {
      web(side * 1.667, 6.48, side * 2.5, under(2.5) - chordDrop + 0.02, z);
      web(side * 1.667, 6.48, side * 0.08, under(0) - chordDrop - 0.04, z);
      [[side * 2.5, under(2.5) - chordDrop + 0.01]].forEach(([x, y]) => [-1, 1].forEach((f) => box(0.16, 0.12, 0.002, tin, x, y, z + f * 0.02, fixed, { cast: false })));
    });
    [-1, 1].forEach((f) => box(0.2, 0.14, 0.002, tin, 0, under(0) - chordDrop - 0.01, z + f * 0.02, fixed, { cast: false }));
  });
  // permanent lateral brace across the webs on each side
  [-1, 1].forEach((side) => box(0.038, 0.089, 7.5, lumber, side * 2.06, 7.32, 0, fixed, { uv: true, cast: false }));

  /* ------------------------------------------------------ eave and baffles */
  // baffles between the trusses hold a 50 mm channel open from the soffit up past the insulation
  for (let i = 0; i < TRUSS.length - 1; i++) {
    const zc = TRUSS[i] + 0.3;
    box(1.12, 0.004, 0.54, baffleMat, 5.66, -0.066, zc, sx, { cast: false });
    [-1, 1].forEach((f) => box(1.12, 0.052, 0.004, baffleMat, 5.66, -0.04, zc + f * 0.27, sx, { cast: false }));
    [-0.13, 0, 0.13].forEach((dz) => box(1.12, 0.01, 0.03, baffleMat, 5.66, -0.07, zc + dz, sx, { cast: false }));
    for (let k = 0; k < 3; k++) [-1, 1].forEach((f) => box(0.012, 0.002, 0.01, mats.galv, 5.25 + k * 0.4, -0.016, zc + f * 0.272, sx, { cast: false }));
  }
  // vented soffit outside, and the frieze board that closes it at each end
  box(0.33, 0.008, 8.9, soffitMat, 5.27, 5.876, 0, fixed, { uv: true, cast: false });
  [-4.455, 4.455].forEach((z) => box(0.33, 0.36, 0.02, mats.whitePlastic, 5.27, 6.05, z, fixed, { cast: false }));

  /* ------------------------------------------------------------ insulation */
  const span = (...parts) => { const out = []; for (let i = 0; i < parts.length - 1; i++) { const [a, h] = parts[i], b = parts[i + 1][0]; for (let x = a; x < b - 1e-6; x += h) out.push(x); } out.push(parts[parts.length - 1][0]); return out; };
  const xs = lo ? span([-4.95, 0.4], [-0.1, 0.08], [1.7, 0.2], [4.0, 0.1], [4.95]) : span([-4.95, 0.25], [-0.1, 0.04], [1.65, 0.12], [4.0, 0.06], [4.95]);
  const zs = lo ? span([-3.75, 0.25], [0.2, 0.08], [1.7, 0.3], [3.75]) : span([-3.75, 0.15], [0.25, 0.04], [1.7, 0.2], [3.75]);
  const bump = (x, z) => 0.013 * Math.sin(x * 7.1 + Math.sin(z * 3.3) * 1.7) + 0.01 * Math.sin(z * 8.3 + x * 2.1) + 0.006 * Math.sin(x * 23 + z * 19) + 0.004 * Math.sin(x * 41 - z * 37);
  const fluffY = (x, z) => {
    let y = Math.min(FLUFF + bump(x, z), under(x) - 0.095);
    const dx = (x - VERM.x) / VERM.rx, dz = (z - VERM.z) / VERM.rz, an = Math.atan2(dz, dx), d = Math.sqrt(dx * dx + dz * dz) + 0.05 * Math.sin(an * 5) + 0.03 * Math.sin(an * 13 + 1) + 0.02 * Math.sin(an * 29 + x * 40);
    if (d < 1.4) y = lerp(6.43, y + 0.05 * Math.max(0, 1 - Math.abs(d - 1.06) / 0.3) + 0.02 * Math.sin(x * 37 + z * 29), smooth(0.7, 1.0, d));
    return Math.max(y, 6.405);
  };
  {
    const nx = xs.length, nz = zs.length, pos = new Float32Array(nx * nz * 3), uv = new Float32Array(nx * nz * 2), idx = [];
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const k = j * nx + i; pos.set([xs[i], fluffY(xs[i], zs[j]), zs[j]], k * 3); uv.set([xs[i], zs[j]], k * 2); }
    for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) { const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1; idx.push(a, c, b, b, c, d); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pos, 3)); geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, fluff); m.receiveShadow = true; m.castShadow = false; fixed.add(m);
  }
  // depth ruler on a wire stand: its 400 mm line sits at the surface
  const RU = V(3.62, 6.7, -1.32);
  const ruG = new THREE.Group(); ruG.position.copy(RU); ruG.rotation.y = -2.2; fixed.add(ruG);
  box(0.07, 0.6, 0.004, mats.whitePlastic, 0, 0, -0.003, ruG, { cast: false });
  L.plane("ruler", 0.065, ruG, 0, 0, 0);
  cyl(0.002, 0.62, mats.galv, 0, 0.05, -0.008, ruG, { seg: 5, cast: false });

  /* ------------------------------------------------------- bath fan ducts */
  // ceiling-mounted housing (buried), its collar, the duct that ends in the insulation, the one that reaches the cap
  box(0.26, 0.17, 0.26, tin, FAN.x, 6.485, FAN.z, fixed);
  cyl(0.06, 0.12, tin, FAN.x, 6.62, FAN.z, fixed, { seg: 16 });
  const loose = tube([[FAN.x, 6.6, FAN.z], [FAN.x + 0.04, 6.92, FAN.z + 0.03], [FAN.x + 0.3, 7.0, FAN.z + 0.2], [FAN.x + 0.62, 6.93, FAN.z + 0.38], [FAN.x + 0.85, 6.87, FAN.z + 0.45]], 0.07, ductMat, group, { radial: 14, density: 30, keep: true });
  const looseEnd = V(FAN.x + 0.92, 6.88, FAN.z + 0.48);
  const capCollar = at(CAP, -0.1, FAN.z);
  const fixedDuct = tube([[FAN.x, 6.6, FAN.z], [FAN.x + 0.06, 6.9, FAN.z], [FAN.x + 0.55, 6.99, FAN.z + 0.02], [capCollar.x - 0.22, 6.92, FAN.z], [capCollar.x, capCollar.y, FAN.z]], 0.07, ductMat, group, { radial: 14, density: 30, keep: true });
  // galvanised collar through the deck, strap clamps, and the cap outside
  cyl(0.075, 0.13, tin, CAP, -0.06, FAN.z, sx, { seg: 18 });
  [[FAN.x, 6.66, FAN.z]].forEach(([x, y, z]) => cyl(0.077, 0.02, tin, x, y, z, fixed, { seg: 18, cast: false }));
  box(0.46, 0.006, 0.44, capMat, CAP - 0.02, TOP + 0.003, FAN.z, sx);
  cyl(0.08, 0.1, capMat, CAP, TOP + 0.05, FAN.z, sx, { seg: 18 });
  box(0.3, 0.13, 0.28, capMat, CAP - 0.01, TOP + 0.15, FAN.z, sx, { r: 0.02 });
  box(0.05, 0.08, 0.26, mats.blackPlastic, CAP + 0.135, TOP + 0.1, FAN.z, sx, { cast: false });

  /* ----------------------------------------------------------- vermiculite */
  const vermBase = cyl(0.5, 0.058, std(0x7a6546, 0.95, 0.1), VERM.x, 6.431, VERM.z, fixed, { seg: 32, cast: false });
  vermBase.scale.set(VERM.rx / 0.5 * 1.05, 1, VERM.rz / 0.5 * 1.05);
  {
    const n = lo ? 450 : 1000, geo = new THREE.OctahedronGeometry(1, 0);
    const pebbles = new THREE.InstancedMesh(geo, std(0xffffff, 0.7, 0.35, { envMapIntensity: 1.2 }), n);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3(), col = new THREE.Color();
    const tones = [0xa07a44, 0xb89458, 0x7d6038, 0x9c968a, 0xc2a670, 0x8a7a5e];
    for (let i = 0; i < n; i++) {
      const a = R() * 6.283, rr = Math.sqrt(R()) * 1.02;
      p.set(VERM.x + Math.cos(a) * rr * VERM.rx, 6.462 + R() * 0.008, VERM.z + Math.sin(a) * rr * VERM.rz);
      const s = 0.006 + R() * 0.008; sc.set(s * (1 + R() * 0.8), s * 0.5, s * (1 + R() * 0.8));
      q.setFromEuler(e.set(R() * 0.6, R() * 6.28, R() * 0.6)); m4.compose(p, q, sc); pebbles.setMatrixAt(i, m4);
      pebbles.setColorAt(i, col.setHex(tones[(R() * tones.length) | 0]));
    }
    pebbles.castShadow = false; pebbles.receiveShadow = true;
    group.add(pebbles);
  }
  // the sample bag on the insulation beside the patch, and a caution card on a wire stake
  const BAG = V(VERM.x - 0.59, 0, VERM.z + 0.47); BAG.y = fluffY(BAG.x, BAG.z) + 0.016;
  const bagG = new THREE.Group(); bagG.position.copy(BAG); bagG.rotation.set(0.05, 0.5, -0.04); fixed.add(bagG);
  box(0.14, 0.022, 0.18, mats.vermiculite, 0, 0, 0.01, bagG, { r: 0.01, cast: false });
  box(0.16, 0.03, 0.22, mats.poly, 0, 0.002, 0, bagG, { r: 0.012, cast: false });
  box(0.16, 0.006, 0.012, mats.bluePlastic, 0, 0.012, -0.095, bagG, { cast: false });
  const bagLabel = L.plane("bag", 0.12, bagG, 0, 0.018, 0.03); bagLabel.rotation.x = -Math.PI / 2;
  const CARD = V(VERM.x + 0.08, 0, VERM.z + 0.6); CARD.y = fluffY(CARD.x, CARD.z) + 0.2;
  const cardG = new THREE.Group(); cardG.position.copy(CARD); cardG.rotation.set(0, -2.3, 0.05); fixed.add(cardG);
  box(0.174, 0.09, 0.002, mats.whitePlastic, 0, 0.02, -0.0015, cardG, { cast: false });
  L.plane("caution", 0.17, cardG, 0, 0.02, 0);
  cyl(0.0022, 0.42, mats.galv, 0, -0.14, -0.004, cardG, { seg: 5, cast: false });

  /* ------------------------------------------------ nails and their frost */
  const nails = [];
  for (let s = 2.4; s < 6.0; s += lo ? 0.45 : 0.3) for (let z = -3.5; z < 1.4; z += lo ? 0.24 : 0.16) {
    const zz = z + (R() - 0.5) * 0.05;
    if (TRUSS.some((tz) => Math.abs(tz - zz) < 0.035)) continue;
    nails.push([s + (R() - 0.5) * 0.04, zz, 0.024 + R() * 0.012]);
  }
  const NN = nails.length;
  const nailMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.0016, 0.0016, 1, 5), mats.galv, NN);
  const frostMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), frostTip, NN);
  const m4 = new THREE.Matrix4(), qs = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -PITCH)), sc = new THREE.Vector3(), tips = [];
  nails.forEach(([s, z, len], i) => {
    at(s, -0.014 - len / 2, z, v1); m4.compose(v1, qs, sc.set(1, len, 1)); nailMesh.setMatrixAt(i, m4);
    tips.push(at(s, -0.014 - len - 0.004, z));
  });
  nailMesh.castShadow = false; frostMesh.castShadow = false;
  group.add(nailMesh, frostMesh);
  const frostScale = nails.map(() => 0.8 + R() * 0.6);
  let frostShown = -1;
  const setFrost = (k) => {
    if (Math.abs(k - frostShown) < 0.004) return;
    frostShown = k;
    for (let i = 0; i < NN; i++) {
      const f = frostScale[i] * (0.15 + 0.85 * k), r = 0.0055 * f;
      at(nails[i][0], -0.014 - nails[i][2] * (0.4 + 0.25 * k), nails[i][1], v1);
      m4.compose(v1, qs, sc.set(r, nails[i][2] * 0.32 * (0.3 + 0.7 * k) + r, r)); frostMesh.setMatrixAt(i, m4);
    }
    frostMesh.instanceMatrix.needsUpdate = true;
  };
  const frostPlane = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 5.0), frostSheet);
  frostPlane.rotation.x = Math.PI / 2; frostPlane.position.set(4.0, -0.0165, -1.1); frostPlane.renderOrder = 2; frostPlane.userData.keep = true;
  const frostG = frame(group); frostG.add(frostPlane); frostG.userData.keep = true;

  /* -------------------------------------------------------- the array */
  // the house's array, rebuilt on proper racking: rails on standing-seam clamps, mid and end clamps, cells, wiring
  const ROWS = [2.455, 3.905], COLS = [-1.6, -0.55, 0.5, 1.55], PB = TOP + 0.135, PT = PB + 0.036;
  ROWS.forEach((s0) => COLS.forEach((z0) => {
    box(1.3, 0.03, 0.95, mats.enclosureDark, s0, PB + 0.015, z0, sx, { cast: false });
    box(1.29, 0.004, 0.94, cellMat, s0, PT - 0.004, z0, sx, { cast: false });
    [-1, 1].forEach((f) => { box(1.32, 0.036, 0.016, mats.aluminum, s0, PB + 0.018, z0 + f * 0.477, sx, { cast: false }); box(0.016, 0.036, 0.97, mats.aluminum, s0 + f * 0.652, PB + 0.018, z0, sx, { cast: false }); });
  }));
  const zA = COLS[0] - 0.49, zB = COLS[3] + 0.49;
  ROWS.forEach((s0) => [-0.36, 0.36].forEach((ds) => {
    const s = s0 + ds;
    box(0.04, 0.045, zB - zA + 0.14, mats.aluminum, s, PB - 0.0225, (zA + zB) / 2, sx, { cast: false });
    for (let z = zA + 0.1; z < zB; z += 0.52) { box(0.05, 0.05, 0.04, mats.aluminum, s, TOP + 0.025, z, sx, { r: 0.006, cast: false }); box(0.012, 0.045, 0.04, mats.aluminum, s + 0.02, TOP + 0.07, z, sx, { cast: false }); cyl(0.007, 0.012, mats.galv, s + 0.03, TOP + 0.025, z, sx, { axis: "x", seg: 6, cast: false }); }
    [zA - 0.012, zB + 0.012].forEach((z) => box(0.045, 0.04, 0.02, mats.aluminum, s, PB + 0.02, z, sx, { cast: false }));
    for (let c = 0; c < 3; c++) { const z = (COLS[c] + COLS[c + 1]) / 2; box(0.04, 0.008, 0.045, mats.aluminum, s, PT + 0.003, z, sx, { cast: false }); cyl(0.006, 0.006, mats.galv, s, PT + 0.009, z, sx, { seg: 6, cast: false }); }
  }));
  // junction box below the array's back corner, wires to it under the panels, and the conduit into the roof boot
  const JB = { s: 4.74, z: zA + 0.25 };
  box(0.2, 0.09, 0.16, mats.greyPlastic, JB.s, TOP + 0.06, JB.z, sx, { r: 0.008 });
  box(0.24, 0.015, 0.2, mats.aluminum, JB.s, TOP + 0.01, JB.z, sx, { cast: false });
  const pv = L.plane("pv", 0.13, sx, JB.s, TOP + 0.1065, JB.z); pv.rotation.x = -Math.PI / 2; pv.rotation.z = Math.PI / 2;
  [[0.03, -0.004], [-0.03, 0.004]].forEach(([dz, dn]) => tube([[ROWS[1] + 0.2, PB - 0.01, COLS[0] + dz * 3], [ROWS[1] + 0.5, PB - 0.025 + dn, COLS[0] - 0.3 + dz], [JB.s - 0.15, TOP + 0.07, JB.z + 0.25 + dz], [JB.s - 0.04, TOP + 0.07, JB.z + 0.06 + dz]], 0.004, mats.rubber, sx, { radial: 5, cast: false }));
  tube([[JB.s + 0.1, TOP + 0.05, JB.z], [JB.s + 0.2, TOP + 0.05, JB.z], [JB.s + 0.26, TOP + 0.04, JB.z]], 0.012, mats.conduit, sx, { radial: 8, cast: false });
  cyl(0.06, 0.07, mats.blackPlastic, JB.s + 0.3, TOP + 0.03, JB.z, sx, { r2: 0.025, seg: 14, cast: false });

  /* ------------------------------------------- window, sill and siding */
  const fog = new THREE.Mesh(new THREE.PlaneGeometry(WIN.z1 - WIN.z0 - 0.14, WIN.y1 - WIN.y0 - 0.14), fogMat);
  fog.position.set(5.037, (WIN.y0 + WIN.y1) / 2, (WIN.z0 + WIN.z1) / 2); fog.rotation.y = Math.PI / 2; fog.renderOrder = 2; fog.userData.keep = true; group.add(fog);
  const stain = new THREE.Mesh(new THREE.PlaneGeometry(SZ0 - SZ1, SY0 - SY1), stainMat);
  stain.position.set(5.1135, (SY0 + SY1) / 2, (SZ0 + SZ1) / 2); stain.rotation.y = Math.PI / 2; stain.renderOrder = 2; fixed.add(stain);
  box(0.272, 0.062, 2.045, rotMat, 5.141, WIN.y0 - 0.03, (WIN.z0 + WIN.z1) / 2, fixed, { uv: true });
  box(0.05, 0.03, 0.22, rotMat, 5.25, WIN.y0 - 0.068, WIN.z1 + 0.05, fixed, { uv: true, rot: [0.3, 0.2, -0.5], cast: false });   // a piece that has broken off the corner

  /* ---------------------------------------------- winter: snow, ice, icicles */
  // the snowpack, the meltwater under it, the pool behind the dam and the dam itself, built in the slope frame and grown
  // out of the roof when the chapter turns to winter. The snow stops 150 mm short of the back rake to show the layers.
  const winS = frame(group); winS.userData.keep = true;
  const extrude = (pts, z0, z1, mat, jitter) => {
    const sh = new THREE.Shape(); sh.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach((p) => sh.lineTo(p[0], p[1]));
    let geo = new THREE.ExtrudeGeometry(sh, { depth: z1 - z0, steps: jitter ? 44 : 1, bevelEnabled: false, curveSegments: 1 });
    if (jitter) {
      const p = geo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const s = p.getX(i), n = p.getY(i), z = p.getZ(i);
        if (n > TOP + 0.03) p.setY(i, n + jitter(s, z) * smooth(TOP + 0.03, TOP + 0.12, n));
        if (s > EAVE + 0.03) p.setX(i, s + Math.abs(jitter(s + 3, z * 1.7)) * 1.6);   // lumps where the ice runs over the edge
      }
      geo.deleteAttribute("normal"); geo.deleteAttribute("uv"); geo = mergeVertices(geo, 1e-4); geo.computeVertexNormals();
      const pp = geo.attributes.position, uv = new Float32Array(pp.count * 2);
      for (let i = 0; i < pp.count; i++) { uv[i * 2] = pp.getZ(i) * 0.6; uv[i * 2 + 1] = pp.getX(i) * 0.6; }
      geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    }
    const m = new THREE.Mesh(geo, mat); m.position.z = z0; m.castShadow = true; m.receiveShadow = true; winS.add(m);
    return m;
  };
  const N0 = TOP + 0.016;
  const drift = (s, z) => 0.025 * Math.sin(z * 2.3 + s * 3) + 0.015 * Math.sin(z * 5.7 - s * 2) + 0.008 * Math.sin(z * 13 + s * 11);
  extrude([[4.62, N0], [4.9, TOP + 0.1], [5.3, TOP + 0.17], [5.8, TOP + 0.19], [5.98, TOP + 0.17], [6.07, TOP + 0.11], [6.12, TOP + 0.05], [6.14, N0]], -4.35, 4.5, snowMat, drift);
  extrude([[0.06, N0], [0.2, TOP + 0.09], [0.6, TOP + 0.12], [1.55, TOP + 0.13], [1.72, TOP + 0.08], [1.78, N0]], -4.5, 4.5, snowMat, drift);
  [[-4.5, zA - 0.5], [zB + 0.5, 4.5]].forEach(([z0, z1]) => extrude([[1.5, N0], [1.5, TOP + 0.12], [3.0, TOP + 0.14], [4.95, TOP + 0.16], [4.95, N0]], z0, z1, snowMat, drift));
  extrude([[6.06, TOP + 0.002], [6.07, TOP + 0.045], [6.4, TOP + 0.05], [6.42, TOP + 0.002]], -4.5, 4.5, water);
  extrude([[6.3, TOP], [6.36, TOP + 0.07], [6.46, TOP + 0.12], [6.68, TOP + 0.14], [6.84, TOP + 0.12], [6.92, TOP + 0.03], [6.935, -0.08], [6.9, -0.17], [6.86, -0.13], [6.84, 0.02], [6.81, 0.17], [6.79, TOP]], -4.5, 4.5, iceMat,
    (s, z) => 0.04 * Math.sin(z * 1.7 + 1) + 0.03 * Math.sin(z * 4.9 + s * 6) + 0.018 * Math.sin(z * 11.3 + 2 + s * 9) + 0.01 * Math.sin(z * 29 + s * 13));
  {
    const film = new THREE.PlaneGeometry(1.42, 0.15), uv = film.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, 4.68 + uv.getX(i) * 1.42);
    const m = new THREE.Mesh(film, melt); m.rotation.x = -Math.PI / 2; m.position.set(4.68 + 0.71, TOP + 0.004, -4.425); m.receiveShadow = true; winS.add(m);
  }
  kit.bake(winS);
  // ice in the gutter and icicles under it, hung from a group at the gutter's underside so they grow downward
  const icy = new THREE.Group(); icy.position.set(GUT.x, GUT.y, 0); icy.userData.keep = true; group.add(icy);
  box(0.135, 0.05, 8.9, iceMat, 0, 0.12, 0, icy, { cast: false });
  const NI = lo ? 60 : 130;
  const icicleGeo = new THREE.ConeGeometry(0.028, 1, 7, 1, true); icicleGeo.rotateX(Math.PI); icicleGeo.translate(0, -0.5, 0);
  const icicles = new THREE.InstancedMesh(icicleGeo, iceMat, NI);
  const icTips = [];
  for (let i = 0; i < NI; i++) {
    const z = -4.42 + (i / (NI - 1)) * 8.84 + (R() - 0.5) * 0.05, near = Math.max(0, 1 - Math.abs(z + 1.5) / 2.2);
    const len = 0.06 + R() * R() * (0.55 + 0.5 * near), th = 0.7 + R() * 0.9;
    v1.set((R() - 0.5) * 0.08, 0.004, z); m4.compose(v1, qs.identity(), sc.set(th, len, th)); icicles.setMatrixAt(i, m4);
    icTips.push([v1.x, len, z]);
  }
  qs.setFromEuler(new THREE.Euler(0, 0, -PITCH));
  icicles.castShadow = false; icy.add(icicles);
  kit.bake(icy);

  /* --------------------------------------------------------------- hail */
  const NH = lo ? 260 : 560;
  const hail = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), hailMat, NH);
  {
    const inArray = (s, z) => s > ROWS[0] - 0.67 && s < ROWS[1] + 0.67 && z > zA && z < zB;
    for (let i = 0; i < NH; i++) {
      const r = 0.007 + R() * R() * 0.016, k = R();
      let s, n, z;
      if (k < 0.16) { v1.set(GUT.x + (R() - 0.5) * 0.1, GUT.y + 0.1 + r, -4.4 + R() * 8.8); }
      else {
        s = k < 0.4 ? 6.2 + R() * 0.58 : 0.3 + Math.sqrt(R()) * 6.45; z = -4.4 + R() * 8.8;
        n = inArray(s, z) ? PT + r : TOP + r * 0.6 + (Math.abs(z - FAN.z) < 0.14 && Math.abs(s - CAP) < 0.15 ? 0.21 : 0);
        at(s, n, z, v1);
      }
      m4.compose(v1, qs, sc.set(r, r * 0.92, r)); hail.setMatrixAt(i, m4);
    }
  }
  hail.castShadow = false; hail.receiveShadow = true; group.add(hail);

  /* ---------------------------------------------------------- particles */
  // mist: the vapour out of the loose duct (step 2) and the air drawn up the baffles to the ridge (step 3)
  const mist = kit.particles(260, { size: 0.06, color: 0xdfeaff, opacity: 0.5, gain: 0.55 });
  // drops: the thaw off the nail tips (step 2) and meltwater off the icicles and the window head (steps 1 and 6)
  const drops = kit.particles(240, { size: 0.014, color: 0xbfe0ff, gain: 1.1 });
  group.add(mist, drops);
  const nM = mist.userData.n, nD = drops.userData.n;
  const seed = Float32Array.from({ length: Math.max(nM, nD) * 4 }, () => R());
  const tipPick = Array.from({ length: nD }, (_, i) => (i * 7919) % NN);
  const icPick = icTips.map((t, i) => [t[1], i]).sort((a, b) => b[0] - a[0]).slice(0, 40).map((x) => x[1]);

  kit.bake(fixed);

  /* --------------------------------------------------------------- state */
  const anchors = {
    roof: at(5.7, TOP + 0.05, -3.3),
    ice: at(6.62, TOP + 0.17, -2.0),
    rain: at(4.75, -0.05, -0.35),
    ins: V(RU.x, FLUFF + 0.02, RU.z),
    fan: at(CAP, -0.16, FAN.z),
    verm: V(VERM.x, 6.48, VERM.z),
    solar: at(JB.s, TOP + 0.12, JB.z),
    win: V(5.16, 4.36, -1.0)
  };
  const B = { cut: 0, ghost: 0, ground: 1, season: 0, snowfall: 0, melt: 0, icicles: 0, orbit: 0.012, time: 19.4 };
  const shots = [
    { ...B, radius: 13, theta: 2.12, phi: 1.18, fx: 4.0, ty: 6.8, fz: -1.4, dof: 0, orbit: 0.025, time: 12.5, season: 0.5, narrow: { radius: 13 } },
    { ...B, radius: 3.6, theta: 2.15, phi: 1.02, fx: 5.4, ty: 6.15, fz: -2.0, dof: 0.8, time: 19.4, snowfall: 1, narrow: { radius: 3.1 } },
    { ...B, radius: 2.3, theta: 3.95, phi: 1.55, fx: 3.45, ty: 7.0, fz: -0.3, dof: 1.0, narrow: { radius: 1.7, fx: 3.75, ty: 7.1, fz: -0.3 } },
    { ...B, radius: 1.75, theta: 4.25, phi: 1.33, fx: 3.75, ty: 6.92, fz: -1.15, dof: 1.0, narrow: { radius: 1.35, fx: 3.8, ty: 7.0, fz: -1.05 } },
    { ...B, radius: 2.6, theta: 3.95, phi: 0.88, fx: VERM.x - 0.2, ty: 6.55, fz: VERM.z + 0.25, dof: 1.0, narrow: { radius: 2.2, fx: VERM.x + 0.05, fz: VERM.z + 0.25 } },
    { ...B, radius: 2.7, theta: 2.1, phi: 1.1, fx: 3.85, ty: 7.5, fz: -1.5, dof: 0.9, narrow: { radius: 2.4 } },
    { ...B, radius: 4.1, theta: 1.92, phi: 1.54, fx: 5.15, ty: 4.95, fz: -1.3, dof: 0.9, snowfall: 1, narrow: { radius: 3.5 } }
  ];
  let winterK = 0, frostK = 1;
  const posM = mist.userData.pos, posD = drops.userData.pos;
  return {
    name: "attic", group, anchors, shots,
    hides: (Hh) => {
      const h = Hh || H, out = [];
      if (h.sys.asbestos) out.push(...h.sys.asbestos.meshes);
      if (h.sys.solar && h.sys.solar.meshes[0]) out.push(h.sys.solar.meshes[0].parent);
      if (h.extra && h.extra.snowR) out.push(h.extra.snowR);   // its cut-out edge looks torn up close; this set lays its own
      return out;
    },
    light(step) {
      if (step === 0) return { pos: [8.5, 11.5, -5.5], at: [4.6, 7.4, -1.6], power: 0 };
      if (step === 1) return { pos: [7.9, 9.0, -4.0], at: [5.45, 6.1, -2.0], power: 0.6, fill: 0.3 };
      if (step === 2) return { pos: [1.4, 8.4, -2.4], at: [3.9, 7.2, -0.6], power: 0.9, fill: 0.6 };
      if (step === 3) return { pos: [1.4, 8.5, -2.4], at: [4.1, 6.85, -0.7], power: 0.9, fill: 0.6 };
      if (step === 4) return { pos: [0.6, 8.6, -0.6], at: [VERM.x, 6.45, VERM.z], power: 0.9, fill: 0.5 };
      if (step === 5) return { pos: [6.6, 10.2, -3.6], at: [3.8, 7.55, -1.4], power: 0.8, fill: 0.35 };
      return { pos: [7.6, 6.6, -3.6], at: [5.1, 5.0, -1.4], power: 0.9, fill: 0.2 };
    },
    update({ step, q, t, dt, snap, reduce }) {
      const ease = snap ? 1 : 1 - Math.exp(-dt * 2.6);
      winterK = lerp(winterK, step >= 1 ? 1 : 0, ease);
      const w = smooth(0, 1, winterK);
      winS.visible = icy.visible = w > 0.01;
      winS.scale.y = Math.max(0.001, w); icy.scale.y = Math.max(0.001, w);
      hail.visible = step === 0; fog.visible = step >= 1;
      // frost builds in the cold snap and goes in the chinook (scrubbed by the scroll); the attic is dry once fixed
      const wantFrost = step === 2 ? 1 - smooth(0.4, 0.8, q) : step < 2 ? 1 : 0;
      frostK = lerp(frostK, wantFrost, snap ? 1 : 1 - Math.exp(-dt * 6));
      frostSheet.opacity = 0.75 * frostK;
      frostG.visible = frostMesh.visible = frostK > 0.01;
      setFrost(frostK);
      loose.visible = step <= 2; fixedDuct.visible = step >= 3;
      // particles
      const tt = reduce ? 3.3 : t;
      let cm = 0, cd = 0;
      if (step === 2) {
        const thaw = smooth(0.35, 0.65, q);
        const vap = Math.round(nM * 0.7);
        for (let i = 0; i < vap; i++) {   // vapour rising out of the loose duct and spreading under the deck
          const a = (tt * (0.16 + seed[i] * 0.08) + seed[i + nM]) % 1, sp = a * a;
          posM[cm * 3] = looseEnd.x + 0.06 + a * 0.9 + Math.sin(tt * 0.7 + i) * 0.05 * a;
          posM[cm * 3 + 1] = Math.min(looseEnd.y + 0.03 + a * 0.9, under(looseEnd.x + 0.06 + a * 0.9) - 0.08) + 0.02 * Math.sin(i);
          posM[cm * 3 + 2] = looseEnd.z + (seed[i + 2 * nM] - 0.5) * sp * 2.2;
          cm++;
        }
        const nd = Math.round(nD * thaw);
        for (let i = 0; i < nd; i++) {    // a bead grows on the tip, falls, and the next one forms
          const tp = tips[tipPick[i]], per = 0.9 + seed[i] * 1.1, ph = ((tt + seed[i + nD] * per) % per) / per;
          const fall = Math.max(0, ph - 0.6) / 0.4, drop = 9.8 * (fall * per * 0.4) ** 2 * 0.5;
          posD[cd * 3] = tp.x; posD[cd * 3 + 1] = Math.max(tp.y - 0.004 - drop, FLUFF - 0.01); posD[cd * 3 + 2] = tp.z;
          cd++;
        }
      } else if (step === 3) {
        for (let i = 0; i < nM; i++) {    // air in at the soffit, up the baffle channels, along the deck to the ridge vent
          const bay = (seed[i] * 12) | 0, zc = TRUSS[bay] + 0.3 + (seed[i + nM] - 0.5) * 0.4;
          const a = (tt * (0.07 + seed[i + 2 * nM] * 0.04) + seed[i + 3 * nM]) % 1;
          const s = 6.5 - a * 6.45, n = s > 5.1 ? -0.04 : -0.04 - 0.06 * Math.sin(seed[i] * 9 + a * 6) - 0.04;
          at(s, s > 6.15 ? -0.04 - (s - 6.15) * 0.6 : n, zc, v2);
          posM[cm * 3] = v2.x; posM[cm * 3 + 1] = v2.y; posM[cm * 3 + 2] = v2.z; cm++;
        }
      }
      if (step === 1 || step === 6) {
        for (let i = 0; i < icPick.length && cd < nD; i++) {
          const ic = icTips[icPick[i]], per = 1.2 + seed[i] * 1.6, ph = ((tt + seed[i + nD] * per) % per) / per;
          const fall = Math.max(0, ph - 0.55) / 0.45, drop = 4.9 * (fall * per * 0.45) ** 2;
          posD[cd * 3] = GUT.x + ic[0]; posD[cd * 3 + 1] = GUT.y - ic[1] * w - 0.01 - drop; posD[cd * 3 + 2] = ic[2]; cd++;
        }
        if (step === 6) for (let i = 0; i < 16 && cd < nD; i++) {
          const z = i < 6 ? WIN.z0 + 0.04 + seed[i] * 0.1 : i < 12 ? WIN.z1 - 0.04 - seed[i] * 0.1 : WIN.z0 + 0.3 + seed[i] * 1.2;
          const per = 0.8 + seed[i + 5] * 1.2, ph = ((tt + seed[i + nD] * per) % per) / per, fall = Math.max(0, ph - 0.5) / 0.5;
          posD[cd * 3] = 5.165; posD[cd * 3 + 1] = Math.max(WIN.y1 + 0.02 - 4.9 * (fall * per * 0.5) ** 2, WIN.y0 + 0.002); posD[cd * 3 + 2] = z; cd++;
        }
      }
      mist.material.size = step === 2 ? 0.14 : 0.07; mist.material.opacity = step === 2 ? 0.5 : 0.85; drops.material.size = step === 2 ? 0.014 : 0.03;
      mist.geometry.setDrawRange(0, cm); drops.geometry.setDrawRange(0, cd);
      mist.visible = cm > 0; drops.visible = cd > 0;
      if (cm) mist.geometry.attributes.position.needsUpdate = true;
      if (cd) drops.geometry.attributes.position.needsUpdate = true;
    }
  };
}
