import * as THREE from "three";
import { clamp, lerp, smooth, hash, fbm } from "./util.js";
let anisotropy = 4;
let quality = 1;
export const setAnisotropy = (i) => {
  anisotropy = Math.min(8, i);
};
export const setQuality = (i) => {
  quality = i >= 2 ? 1 : 0.5;
};
export const qscale = () => quality;
function dataTexture(i, e, t) {
  let n = new THREE.DataTexture(i, e, e, THREE.RGBAFormat, THREE.UnsignedByteType);
  n.wrapS = n.wrapT = THREE.RepeatWrapping;
  n.magFilter = THREE.LinearFilter;
  n.minFilter = THREE.LinearMipmapLinearFilter;
  n.generateMipmaps = true;
  n.colorSpace = t ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  n.anisotropy = anisotropy;
  n.needsUpdate = true;
  return n;
}
function pbrSet(i, e, t, n) {
  i = Math.max(128, Math.round(i * quality));
  let s = i * i,
    r = new Uint8Array(s * 4),
    a = new Uint8Array(s * 4),
    o = new Uint8Array(s * 4),
    c = new Float32Array(s);
  for (let h = 0; h < i; h++) {
    for (let p = 0; p < i; p++) {
      let x = h * i + p,
        g = n((p + 0.5) / i, (h + 0.5) / i);
      r[x * 4] = clamp(g[0], 0, 1) * 255;
      r[x * 4 + 1] = clamp(g[1], 0, 1) * 255;
      r[x * 4 + 2] = clamp(g[2], 0, 1) * 255;
      r[x * 4 + 3] = 255;
      c[x] = g[3];
      a[x * 4] = 255;
      a[x * 4 + 1] = clamp(g[4], 0, 1) * 255;
      a[x * 4 + 2] = clamp(g[5] || 0, 0, 1) * 255;
      a[x * 4 + 3] = 255;
    }
  }
  let l = e / i;
  for (let h = 0; h < i; h++) {
    for (let p = 0; p < i; p++) {
      let x = h * i + p,
        g = ((c[h * i + ((p + 1) % i)] - c[h * i + ((p - 1 + i) % i)]) * t) / (2 * l),
        m = ((c[((h + 1) % i) * i + p] - c[((h - 1 + i) % i) * i + p]) * t) / (2 * l),
        M = Math.hypot(g, m, 1);
      o[x * 4] = ((-g / M) * 0.5 + 0.5) * 255;
      o[x * 4 + 1] = ((-m / M) * 0.5 + 0.5) * 255;
      o[x * 4 + 2] = ((1 / M) * 0.5 + 0.5) * 255;
      o[x * 4 + 3] = 255;
    }
  }
  let u = dataTexture(r, i, true),
    f = dataTexture(o, i, false),
    d = dataTexture(a, i, false);
  [u, f, d].forEach((h) => h.repeat.set(1 / e, 1 / e));
  return {
    map: u,
    normalMap: f,
    rmMap: d,
    tile: e,
  };
}
const tint = (i, e) => [i[0] * e, i[1] * e, i[2] * e];
export function lapSiding(i = [0.2, 0.22, 0.25]) {
  return pbrSet(512, 0.6, 0.02, (e, t) => {
    let n = t * 3,
      s = Math.floor(n),
      r = n - s,
      a = fbm(e * 5 + s * 3.1, r * 22, 3, 5, 22, s),
      o,
      c = 1;
    if (r > 0.94) {
      o = 0;
      c = 0.45;
    } else {
      o = 0.28 + 0.72 * Math.pow(1 - r / 0.94, 1.4);
    }
    let l = (0.9 + 0.2 * hash(s, 3, 5)) * (0.9 + 0.2 * a) * c;
    return [...tint(i, l), o + (a - 0.5) * 0.08, 0.72 + 0.2 * a, 0];
  });
}
export function boardBatten(i = [0.13, 0.145, 0.16]) {
  return pbrSet(512, 1.2, 0.025, (e, t) => {
    let n = e * 4,
      s = Math.floor(n),
      r = n - s,
      a = Math.min(r, 1 - r) * 0.3,
      o = fbm(s * 5.1 + r * 3, t * 7, 3, 20, 7, s),
      c = 0.4 + (o - 0.5) * 0.1,
      l = 1;
    if (a < 0.026) {
      c = 1;
    } else if (a < 0.05) {
      c = 0;
      l = 0.5;
    }
    let u = (0.92 + 0.16 * hash(s, 1, 9)) * (0.9 + 0.2 * o) * l;
    return [...tint(i, u), c, 0.7 + 0.2 * o, 0];
  });
}
export function standingSeam(i = [0.1, 0.105, 0.115]) {
  return pbrSet(512, 0.9, 0.018, (e, t) => {
    let n = (e * 2) % 1,
      s = Math.min(n, 1 - n) * 0.45,
      r = s < 0.028 ? Math.pow(1 - s / 0.028, 0.7) : 0,
      a = (fbm(e * 3, t * 3, 3, 3, 3, 4) - 0.5) * 0.1,
      o = 0.34 + 0.12 * fbm(e * 8, t * 40, 2, 8, 40, 2);
    return [...tint(i, 1 + (fbm(e * 2, t * 6, 2, 2, 6, 11) - 0.5) * 0.25 + r * 0.35), 0.1 + r + a, o, 0.8];
  });
}
export function wood(i = [0.66, 0.43, 0.26], e = [0.4, 0.24, 0.13]) {
  return pbrSet(512, 0.6, 0.01, (t, n) => {
    let s = fbm(t * 3, n * 1.2, 3, 3, 2, 21) * 3,
      r = 0.5 + 0.5 * Math.sin(((t * 10 + s) * Math.PI * 2) / 1),
      a = fbm(t * 18, n * 2.4, 3, 18, 2, 33),
      o = clamp(0.25 + r * 0.35 + a * 0.5, 0, 1),
      c = (t * 6) % 1,
      l = c < 0.012 || c > 0.988 ? 0.45 : 1;
    return [lerp(e[0], i[0], o) * l, lerp(e[1], i[1], o) * l, lerp(e[2], i[2], o) * l, 0.55 + a * 0.3 - (l < 1 ? 0.5 : 0), 0.55 + 0.15 * a, 0];
  });
}
export function formedConcrete(i = [0.56, 0.55, 0.53]) {
  return pbrSet(512, 1.2, 0.012, (e, t) => {
    let n = t * 8,
      s = Math.floor(n),
      r = n - s,
      a = hash(s, 7, 2) * 40,
      o = fbm(e * 4 + a, r * 10, 3, 4, 10, s),
      c = hash(Math.floor(e * 512), Math.floor(t * 512), 3) > 0.985 ? 0.6 : 1,
      l = r < 0.04 ? 0.7 : 1,
      u = (0.9 + 0.2 * o) * c * l * (0.94 + 0.12 * hash(s, 4, 1));
    return [...tint(i, u), 0.5 + (o - 0.5) * 0.4 - (r < 0.04 ? 0.3 : 0), 0.92, 0];
  });
}
export function stone() {
  return pbrSet(512, 1, 0.045, (t, n) => {
    let s = t * 5,
      r = n * 4,
      a = Math.floor(s),
      o = Math.floor(r),
      c = 9,
      l = 9,
      u = 0;
    for (let M = -1; M <= 1; M++) {
      for (let E = -1; E <= 1; E++) {
        let _ = a + E,
          A = o + M,
          b = ((_ % 5) + 5) % 5,
          R = ((A % 4) + 4) % 4,
          v1 = _ + 0.15 + hash(b, R, 1) * 0.7,
          w = A + 0.15 + hash(b, R, 2) * 0.7,
          C = Math.hypot((s - v1) * 1, (r - w) * 1.25);
        if (C < c) {
          l = c;
          c = C;
          u = b * 31 + R;
        } else if (C < l) {
          l = C;
        }
      }
    }
    let f = l - c,
      d = smooth(0.04, 0.3, f),
      h = hash(u, 5, 3),
      p = 0.4 + h * 0.2,
      x = hash(u, 9, 1) * 0.06,
      g = 0.9 + 0.2 * fbm(t * 12, n * 12, 3, 12, 12, u),
      m = d > 0.02 ? 1 : 0.35;
    return [(p + x) * g * m, (p + x * 0.6) * g * m, (p - 0.02) * g * m, d * (0.7 + 0.3 * h), 0.88, 0];
  });
}
export function snow() {
  return pbrSet(512, 5, 0.06, (i, e) => {
    let t = fbm(i * 5, e * 5, 4, 5, 5, 71),
      n = fbm(i * 60, e * 60, 2, 60, 60, 72),
      s = hash(Math.floor(i * 512), Math.floor(e * 512), 8) > 0.988,
      r = 0.93 + 0.07 * t;
    return [0.9 * r, 0.94 * r, 1 * r, t * 0.8 + n * 0.2, s ? 0.12 : 0.78 + n * 0.15, 0];
  });
}
export function asphalt(i = [0.13, 0.135, 0.145]) {
  return pbrSet(256, 3, 0.01, (e, t) => {
    let n = hash(Math.floor(e * 256), Math.floor(t * 256), 12),
      s = fbm(e * 6, t * 6, 3, 6, 6, 9),
      r = 0.8 + 0.5 * n * n + 0.25 * s;
    return [...tint(i, r), n * 0.5 + s * 0.3, 0.88 - n * 0.1, 0];
  });
}
export function grass() {
  return pbrSet(512, 4, 0.05, (i, e) => {
    let t = fbm(i * 70, e * 70, 2, 70, 70, 3),
      n = fbm(i * 4, e * 4, 4, 4, 4, 5),
      s = fbm(i * 9, e * 9, 3, 9, 9, 6),
      r = 0.75 + 0.5 * t;
    return [lerp(0.22, 0.4, s) * r + n * 0.05, lerp(0.3, 0.4, s) * r * (0.85 + 0.3 * n), lerp(0.1, 0.16, s) * r, t, 0.92, 0];
  });
}
export function snowEdgeAlpha(i, e) {
  let t = new Uint8Array(i * i * 4);
  for (let s = 0; s < i; s++) {
    for (let r = 0; r < i; r++) {
      let a = (r + 0.5) / i,
        o = (s + 0.5) / i,
        c = 0.45 + 0.55 * fbm(a * 6, o * 4, 4, 1024, 1024, 41);
      c = smooth(0.2, 0.95, c);
      c *= 0.35 + 0.65 * smooth(0, 0.18, Math.min(a, 1 - a, o, 1 - o) + 0.04 * fbm(a * 30, o * 30, 2, 1024, 1024, 5));
      if (e) {
        c *= e(a, o);
      }
      let l = (s * i + r) * 4;
      t[l] = 255;
      t[l + 1] = clamp(c, 0, 1) * 255;
      t[l + 2] = 255;
      t[l + 3] = 255;
    }
  }
  let n = new THREE.DataTexture(t, i, i, THREE.RGBAFormat, THREE.UnsignedByteType);
  n.magFilter = n.minFilter = THREE.LinearFilter;
  n.generateMipmaps = false;
  n.needsUpdate = true;
  return n;
}
export function roomTexture(i = "living") {
  let e = document.createElement("canvas");
  e.width = 160;
  e.height = 160;
  let t = e.getContext("2d"),
    n = {
      living: ["#6b4426", "#d99a55", "#f5c27c"],
      kitchen: ["#7a5a3a", "#e6b673", "#fff0cf"],
      bed: ["#4a3a52", "#c78b7a", "#f1c6a0"],
      bath: ["#4f6670", "#a9c7cf", "#eaf6f4"],
      hall: ["#5a4128", "#c58c52", "#efba78"],
    }[i] || ["#6b4426", "#d99a55", "#f5c27c"],
    s = t.createLinearGradient(0, 0, 0, 160);
  s.addColorStop(0, n[0]);
  s.addColorStop(0.55, n[1]);
  s.addColorStop(1, n[2]);
  t.fillStyle = s;
  t.fillRect(0, 0, 160, 160);
  let r = i === "kitchen" ? 80 : 40 + Math.random() * 80,
    a = t.createRadialGradient(r, 52, 2, r, 52, 70);
  a.addColorStop(0, "rgba(255,246,214,.95)");
  a.addColorStop(1, "rgba(255,220,150,0)");
  t.fillStyle = a;
  t.fillRect(0, 0, 160, 160);
  t.fillStyle = "rgba(30,18,10,.55)";
  if (i === "living") {
    t.fillRect(14, 108, 92, 52);
    t.fillRect(14, 88, 92, 22);
    t.fillRect(112, 70, 6, 90);
  }
  if (i === "kitchen") {
    t.fillRect(0, 100, 160, 60);
    t.fillStyle = "rgba(30,18,10,.4)";
    for (let l = 0; l < 4; l++) {
      t.fillRect(8 + l * 38, 20, 30, 40);
    }
  }
  if (i === "bed") {
    t.fillRect(20, 96, 120, 64);
    t.fillRect(20, 70, 14, 40);
  }
  if (i === "bath") {
    t.fillStyle = "rgba(20,40,48,.35)";
    t.fillRect(0, 112, 160, 48);
    t.fillRect(104, 40, 40, 36);
  }
  if (i === "hall") {
    t.fillRect(0, 128, 160, 32);
    t.fillRect(70, 30, 36, 90);
  }
  let o = t.createLinearGradient(0, 0, 40, 0);
  o.addColorStop(0, "rgba(40,24,16,.7)");
  o.addColorStop(1, "rgba(40,24,16,0)");
  t.fillStyle = o;
  t.fillRect(0, 0, 40, 160);
  t.save();
  t.translate(160, 0);
  t.scale(-1, 1);
  t.fillStyle = o;
  t.fillRect(0, 0, 40, 160);
  t.restore();
  let c = new THREE.CanvasTexture(e);
  c.colorSpace = THREE.SRGBColorSpace;
  return c;
}
export function glowTexture(i = "rgba(255,190,120,0.9)", e = "rgba(255,150,80,0)") {
  let t = document.createElement("canvas");
  t.width = t.height = 128;
  let n = t.getContext("2d"),
    s = n.createRadialGradient(64, 64, 0, 64, 64, 64);
  s.addColorStop(0, i);
  s.addColorStop(0.35, i.replace(/[\d.]+\)$/, "0.35)"));
  s.addColorStop(1, e);
  n.fillStyle = s;
  n.fillRect(0, 0, 128, 128);
  let r = new THREE.CanvasTexture(t);
  r.colorSpace = THREE.SRGBColorSpace;
  return r;
}
export function markTexture() {
  let i = document.createElement("canvas");
  i.width = i.height = 128;
  let e = i.getContext("2d"),
    t = e.createRadialGradient(64, 64, 20, 64, 64, 64);
  t.addColorStop(0, "rgba(244,189,126,0.55)");
  t.addColorStop(1, "rgba(244,189,126,0)");
  e.fillStyle = t;
  e.fillRect(0, 0, 128, 128);
  e.beginPath();
  e.arc(64, 64, 30, 0, Math.PI * 2);
  e.fillStyle = "#d98a4e";
  e.fill();
  e.lineWidth = 3;
  e.strokeStyle = "#f4bd7e";
  e.stroke();
  e.beginPath();
  e.moveTo(49, 79);
  e.lineTo(64, 49);
  e.lineTo(79, 79);
  e.lineWidth = 6.5;
  e.strokeStyle = "#121311";
  e.lineJoin = "miter";
  e.stroke();
  e.fillStyle = "#121311";
  e.fillRect(60.5, 64.5, 7, 7);
  let n = new THREE.CanvasTexture(i);
  n.colorSpace = THREE.SRGBColorSpace;
  return n;
}
export function dotTexture(i = "rgba(255,255,255,0.6)") {
  let e = document.createElement("canvas");
  e.width = e.height = 64;
  let t = e.getContext("2d"),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
  n.addColorStop(0, "rgba(255,255,255,1)");
  n.addColorStop(0.25, i);
  n.addColorStop(1, "rgba(0,0,0,0)");
  t.fillStyle = n;
  t.fillRect(0, 0, 64, 64);
  let s = new THREE.CanvasTexture(e);
  s.colorSpace = THREE.SRGBColorSpace;
  return s;
}
export function poolTexture() {
  let i = document.createElement("canvas");
  i.width = i.height = 128;
  let e = i.getContext("2d");
  for (let n = 0; n < 9; n++) {
    let s = 64 + (hash(n, 1, 3) - 0.5) * 40,
      r = 64 + (hash(n, 2, 3) - 0.5) * 40,
      a = 22 + hash(n, 3, 3) * 22,
      o = e.createRadialGradient(s, r, 0, s, r, a);
    o.addColorStop(0, "rgba(255,255,255,0.28)");
    o.addColorStop(1, "rgba(255,255,255,0)");
    e.fillStyle = o;
    e.fillRect(0, 0, 128, 128);
  }
  let t = new THREE.CanvasTexture(i);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
