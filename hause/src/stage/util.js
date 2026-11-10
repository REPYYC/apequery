export const clamp = (i, e, t) => Math.min(t, Math.max(e, i));
export const lerp = (i, e, t) => i + (e - i) * t;
export const smooth = (i, e, t) => {
  let n = clamp((t - i) / (e - i), 0, 1);
  return n * n * (3 - 2 * n);
};
export function rng(i) {
  let e = i >>> 0;
  return () => {
    e = (e + 1831565813) | 0;
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function hash(i, e, t = 0) {
  let n = Math.imul(i | 0, 374761393) + Math.imul(e | 0, 668265263) + Math.imul(t | 0, 2147483647);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}
function vnoise(i, e, t = 1024, n = 1024, s = 0) {
  let r = Math.floor(i),
    a = Math.floor(e),
    o = i - r,
    c = e - a,
    l = o * o * (3 - 2 * o),
    u = c * c * (3 - 2 * c),
    f = (m) => ((m % t) + t) % t,
    d = (m) => ((m % n) + n) % n,
    h = hash(f(r), d(a), s),
    p = hash(f(r + 1), d(a), s),
    x = hash(f(r), d(a + 1), s),
    g = hash(f(r + 1), d(a + 1), s);
  return lerp(lerp(h, p, l), lerp(x, g, l), u);
}
export function fbm(i, e, t = 4, n = 1024, s = 1024, r = 0) {
  let a = 0.5,
    o = 1,
    c = 0,
    l = 0;
  for (let u = 0; u < t; u++) {
    c += a * vnoise(i * o, e * o, n * o, s * o, r + u * 17);
    l += a;
    a *= 0.5;
    o *= 2;
  }
  return c / l;
}
export const isMobile = () => window.innerWidth < 760 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
export function boxUV(i, e = {}) {
  let t = i.attributes.position,
    n = i.attributes.normal,
    s = i.attributes.uv,
    r = e.ox || 0,
    a = e.oy || 0,
    o = e.oz || 0;
  for (let c = 0; c < t.count; c++) {
    let l = n.getX(c),
      u = n.getY(c),
      f = n.getZ(c),
      d = t.getX(c) + r,
      h = t.getY(c) + a,
      p = t.getZ(c) + o,
      x,
      g;
    if (Math.abs(f) > 0.5) {
      x = f > 0 ? d : -d;
      g = h;
    } else if (Math.abs(l) > 0.5) {
      x = l > 0 ? -p : p;
      g = h;
    } else {
      if (e.swap) {
        x = p;
        g = d;
      } else {
        x = d;
        g = p;
      }
      if (u < 0) {
        g = -g;
      }
    }
    s.setXY(c, x, g);
  }
  s.needsUpdate = true;
}
