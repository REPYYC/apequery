// Shared helpers for the 3D stage: scalar maths, seeded randomness, tileable noise, a mobile check and box-projected UVs.

// scalar helpers
export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
export const lerp = (start, end, t) => start + (end - start) * t;
// smoothstep: 0 at edge0, 1 at edge1, eased in between
export const smooth = (edge0, edge1, value) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};
// seeded pseudo-random generator (mulberry32): returns a function giving the next number in [0, 1)
export function rng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 1831565813) | 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}
// integer hash of a lattice point and a seed, as a number in [0, 1)
export function hash(x, y, seed = 0) {
  let mixed = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(seed | 0, 2147483647);
  mixed = Math.imul(mixed ^ (mixed >>> 13), 1274126177);
  return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
}
// value noise: smoothly blends the hashed values at the four lattice corners around (x, y);
// the lattice wraps every periodX / periodY cells, so the noise tiles
function vnoise(x, y, periodX = 1024, periodY = 1024, seed = 0) {
  const cellX = Math.floor(x),
    cellY = Math.floor(y),
    fracX = x - cellX,
    fracY = y - cellY,
    blendX = fracX * fracX * (3 - 2 * fracX),
    blendY = fracY * fracY * (3 - 2 * fracY),
    wrapX = (cell) => ((cell % periodX) + periodX) % periodX,
    wrapY = (cell) => ((cell % periodY) + periodY) % periodY,
    value00 = hash(wrapX(cellX), wrapY(cellY), seed),
    value10 = hash(wrapX(cellX + 1), wrapY(cellY), seed),
    value01 = hash(wrapX(cellX), wrapY(cellY + 1), seed),
    value11 = hash(wrapX(cellX + 1), wrapY(cellY + 1), seed);
  return lerp(lerp(value00, value10, blendX), lerp(value01, value11, blendX), blendY);
}
// fractal noise: sums octaves of value noise, each at half the amplitude and twice the frequency of the last,
// normalised to [0, 1); the period is scaled with each octave, so the result still tiles every periodX / periodY
export function fbm(x, y, octaves = 4, periodX = 1024, periodY = 1024, seed = 0) {
  let amplitude = 0.5,
    frequency = 1,
    total = 0,
    amplitudeSum = 0;
  for (let octave = 0; octave < octaves; octave++) {
    total += amplitude * vnoise(x * frequency, y * frequency, periodX * frequency, periodY * frequency, seed + octave * 17);
    amplitudeSum += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }
  return total / amplitudeSum;
}
// narrow window or a phone / tablet user agent
export const isMobile = () => window.innerWidth < 760 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
// box-projected UVs in metres: every vertex takes its UV from its position on the plane its normal faces.
// opts.ox / oy / oz offset the positions first; opts.swap exchanges the two axes on horizontal faces.
export function boxUV(geometry, opts = {}) {
  const positions = geometry.attributes.position,
    normals = geometry.attributes.normal,
    uvs = geometry.attributes.uv,
    offsetX = opts.ox || 0,
    offsetY = opts.oy || 0,
    offsetZ = opts.oz || 0;
  for (let i = 0; i < positions.count; i++) {
    let normalX = normals.getX(i),
      normalY = normals.getY(i),
      normalZ = normals.getZ(i),
      posX = positions.getX(i) + offsetX,
      posY = positions.getY(i) + offsetY,
      posZ = positions.getZ(i) + offsetZ,
      u,
      v;
    if (Math.abs(normalZ) > 0.5) {
      // faces looking along z
      u = normalZ > 0 ? posX : -posX;
      v = posY;
    } else if (Math.abs(normalX) > 0.5) {
      // faces looking along x
      u = normalX > 0 ? -posZ : posZ;
      v = posY;
    } else {
      // every other face (tops and undersides): projected onto the ground plane, mirrored when facing down
      if (opts.swap) {
        u = posZ;
        v = posX;
      } else {
        u = posX;
        v = posZ;
      }
      if (normalY < 0) {
        v = -v;
      }
    }
    uvs.setXY(i, u, v);
  }
  uvs.needsUpdate = true;
}
