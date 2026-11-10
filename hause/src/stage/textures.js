// Procedural textures for the 3D stage, all generated in code: tileable PBR texture sets computed from noise
// (colour, normal and roughness / metalness maps) and small textures drawn on a canvas.
import * as THREE from "three";
import { clamp, lerp, smooth, hash, fbm } from "./util.js";
// settings applied to every PBR set: anisotropic filtering level and resolution scale (1 or 0.5)
let anisotropy = 4;
let quality = 1;
export const setAnisotropy = (maxAnisotropy) => {
  anisotropy = Math.min(8, maxAnisotropy);
};
export const setQuality = (tier) => {
  quality = tier >= 2 ? 1 : 0.5;
};
export const qscale = () => quality;
// square, repeating, mip-mapped RGBA texture from raw bytes; srgb marks colour data
function dataTexture(data, size, srgb) {
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
  return texture;
}
// Builds one tileable PBR texture set { map, normalMap, rmMap, tile }. texelFn(u, v) returns
// [r, g, b, height, roughness, metalness] for a texel; the normal map is derived from the heights, scaled by bumpDepth,
// and the textures repeat once every tileSize UV units (boxUV lays UVs out in metres).
function pbrSet(size, tileSize, bumpDepth, texelFn) {
  size = Math.max(128, Math.round(size * quality));
  const texelCount = size * size,
    colorData = new Uint8Array(texelCount * 4),
    rmData = new Uint8Array(texelCount * 4),
    normalData = new Uint8Array(texelCount * 4),
    heights = new Float32Array(texelCount);
  // colour, height, and roughness / metalness (green / blue channels) of every texel
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const index = y * size + x,
        texel = texelFn((x + 0.5) / size, (y + 0.5) / size);
      colorData[index * 4] = clamp(texel[0], 0, 1) * 255;
      colorData[index * 4 + 1] = clamp(texel[1], 0, 1) * 255;
      colorData[index * 4 + 2] = clamp(texel[2], 0, 1) * 255;
      colorData[index * 4 + 3] = 255;
      heights[index] = texel[3];
      rmData[index * 4] = 255;
      rmData[index * 4 + 1] = clamp(texel[4], 0, 1) * 255;
      rmData[index * 4 + 2] = clamp(texel[5] || 0, 0, 1) * 255;
      rmData[index * 4 + 3] = 255;
    }
  }
  // normal map from the height differences between neighbouring texels, wrapping at the edges
  const texelSize = tileSize / size;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const index = y * size + x,
        slopeX = ((heights[y * size + ((x + 1) % size)] - heights[y * size + ((x - 1 + size) % size)]) * bumpDepth) / (2 * texelSize),
        slopeY = ((heights[((y + 1) % size) * size + x] - heights[((y - 1 + size) % size) * size + x]) * bumpDepth) / (2 * texelSize),
        normalLength = Math.hypot(slopeX, slopeY, 1);
      normalData[index * 4] = ((-slopeX / normalLength) * 0.5 + 0.5) * 255;
      normalData[index * 4 + 1] = ((-slopeY / normalLength) * 0.5 + 0.5) * 255;
      normalData[index * 4 + 2] = ((1 / normalLength) * 0.5 + 0.5) * 255;
      normalData[index * 4 + 3] = 255;
    }
  }
  const colorTex = dataTexture(colorData, size, true),
    normalTex = dataTexture(normalData, size, false),
    rmTex = dataTexture(rmData, size, false);
  [colorTex, normalTex, rmTex].forEach((texture) => texture.repeat.set(1 / tileSize, 1 / tileSize));
  return {
    map: colorTex,
    normalMap: normalTex,
    rmMap: rmTex,
    tile: tileSize,
  };
}
// an rgb triple scaled by a brightness factor
const tint = (rgb, shade) => [rgb[0] * shade, rgb[1] * shade, rgb[2] * shade];
// lap siding: horizontal boards, three per tile, each tapering upwards to a dark line under the next board
export function lapSiding(color = [0.2, 0.22, 0.25]) {
  return pbrSet(512, 0.6, 0.02, (u, v) => {
    let boardCoord = v * 3,
      board = Math.floor(boardCoord),
      across = boardCoord - board,
      grain = fbm(u * 5 + board * 3.1, across * 22, 3, 5, 22, board),
      height,
      shade = 1;
    if (across > 0.94) {
      height = 0;
      shade = 0.45;
    } else {
      height = 0.28 + 0.72 * Math.pow(1 - across / 0.94, 1.4);
    }
    const brightness = (0.9 + 0.2 * hash(board, 3, 5)) * (0.9 + 0.2 * grain) * shade;
    return [...tint(color, brightness), height + (grain - 0.5) * 0.08, 0.72 + 0.2 * grain, 0];
  });
}
// board and batten: vertical boards, four per tile, with a raised batten over each joint and a dark groove beside it
export function boardBatten(color = [0.13, 0.145, 0.16]) {
  return pbrSet(512, 1.2, 0.025, (u, v) => {
    let boardCoord = u * 4,
      board = Math.floor(boardCoord),
      across = boardCoord - board,
      edgeDist = Math.min(across, 1 - across) * 0.3,
      grain = fbm(board * 5.1 + across * 3, v * 7, 3, 20, 7, board),
      height = 0.4 + (grain - 0.5) * 0.1,
      shade = 1;
    if (edgeDist < 0.026) {
      height = 1;
    } else if (edgeDist < 0.05) {
      height = 0;
      shade = 0.5;
    }
    const brightness = (0.92 + 0.16 * hash(board, 1, 9)) * (0.9 + 0.2 * grain) * shade;
    return [...tint(color, brightness), height, 0.7 + 0.2 * grain, 0];
  });
}
// standing-seam metal: two panels per tile with a raised seam along each panel edge, slightly uneven and mostly metallic
export function standingSeam(color = [0.1, 0.105, 0.115]) {
  return pbrSet(512, 0.9, 0.018, (u, v) => {
    const across = (u * 2) % 1,
      seamDist = Math.min(across, 1 - across) * 0.45,
      seam = seamDist < 0.028 ? Math.pow(1 - seamDist / 0.028, 0.7) : 0,
      warp = (fbm(u * 3, v * 3, 3, 3, 3, 4) - 0.5) * 0.1,
      roughness = 0.34 + 0.12 * fbm(u * 8, v * 40, 2, 8, 40, 2);
    return [...tint(color, 1 + (fbm(u * 2, v * 6, 2, 2, 6, 11) - 0.5) * 0.25 + seam * 0.35), 0.1 + seam + warp, roughness, 0.8];
  });
}
// wood: wavy ring bands and fine streaks blended between a dark and a light tone, six planks per tile with dark gaps
export function wood(lightColor = [0.66, 0.43, 0.26], darkColor = [0.4, 0.24, 0.13]) {
  return pbrSet(512, 0.6, 0.01, (u, v) => {
    const warp = fbm(u * 3, v * 1.2, 3, 3, 2, 21) * 3,
      rings = 0.5 + 0.5 * Math.sin(((u * 10 + warp) * Math.PI * 2) / 1),
      streaks = fbm(u * 18, v * 2.4, 3, 18, 2, 33),
      tone = clamp(0.25 + rings * 0.35 + streaks * 0.5, 0, 1),
      across = (u * 6) % 1,
      shade = across < 0.012 || across > 0.988 ? 0.45 : 1;
    return [
      lerp(darkColor[0], lightColor[0], tone) * shade,
      lerp(darkColor[1], lightColor[1], tone) * shade,
      lerp(darkColor[2], lightColor[2], tone) * shade,
      0.55 + streaks * 0.3 - (shade < 1 ? 0.5 : 0),
      0.55 + 0.15 * streaks,
      0,
    ];
  });
}
// board-formed concrete: eight horizontal form-board bands per tile, each with its own grain, a darker recessed line
// at every joint and scattered dark specks
export function formedConcrete(color = [0.56, 0.55, 0.53]) {
  return pbrSet(512, 1.2, 0.012, (u, v) => {
    const boardCoord = v * 8,
      board = Math.floor(boardCoord),
      across = boardCoord - board,
      grainShift = hash(board, 7, 2) * 40,
      grain = fbm(u * 4 + grainShift, across * 10, 3, 4, 10, board),
      speckShade = hash(Math.floor(u * 512), Math.floor(v * 512), 3) > 0.985 ? 0.6 : 1,
      jointShade = across < 0.04 ? 0.7 : 1,
      brightness = (0.9 + 0.2 * grain) * speckShade * jointShade * (0.94 + 0.12 * hash(board, 4, 1));
    return [...tint(color, brightness), 0.5 + (grain - 0.5) * 0.4 - (across < 0.04 ? 0.3 : 0), 0.92, 0];
  });
}
// stone: irregular stones from cellular noise on a wrapping 5 x 4 grid, with dark recessed joints between them
export function stone() {
  return pbrSet(512, 1, 0.045, (u, v) => {
    // distances to the nearest and second-nearest stone centres among the surrounding cells
    let gridX = u * 5,
      gridY = v * 4,
      cellX = Math.floor(gridX),
      cellY = Math.floor(gridY),
      nearest = 9,
      secondNearest = 9,
      stoneId = 0;
    for (let offsetY = -1; offsetY <= 1; offsetY++) {
      for (let offsetX = -1; offsetX <= 1; offsetX++) {
        const neighborX = cellX + offsetX,
          neighborY = cellY + offsetY,
          wrappedX = ((neighborX % 5) + 5) % 5,
          wrappedY = ((neighborY % 4) + 4) % 4,
          centerX = neighborX + 0.15 + hash(wrappedX, wrappedY, 1) * 0.7,
          centerY = neighborY + 0.15 + hash(wrappedX, wrappedY, 2) * 0.7,
          dist = Math.hypot((gridX - centerX) * 1, (gridY - centerY) * 1.25);
        if (dist < nearest) {
          secondNearest = nearest;
          nearest = dist;
          stoneId = wrappedX * 31 + wrappedY;
        } else if (dist < secondNearest) {
          secondNearest = dist;
        }
      }
    }
    // the two distances are equal on the border between stones, which is where the joint goes
    const borderDist = secondNearest - nearest,
      face = smooth(0.04, 0.3, borderDist),
      stoneRandom = hash(stoneId, 5, 3),
      baseTone = 0.4 + stoneRandom * 0.2,
      warmth = hash(stoneId, 9, 1) * 0.06,
      mottle = 0.9 + 0.2 * fbm(u * 12, v * 12, 3, 12, 12, stoneId),
      jointShade = face > 0.02 ? 1 : 0.35;
    return [
      (baseTone + warmth) * mottle * jointShade,
      (baseTone + warmth * 0.6) * mottle * jointShade,
      (baseTone - 0.02) * mottle * jointShade,
      face * (0.7 + 0.3 * stoneRandom),
      0.88,
      0,
    ];
  });
}
// snow: soft drifts with fine grain and scattered glossy sparkles
export function snow() {
  return pbrSet(512, 5, 0.06, (u, v) => {
    const drifts = fbm(u * 5, v * 5, 4, 5, 5, 71),
      grain = fbm(u * 60, v * 60, 2, 60, 60, 72),
      sparkle = hash(Math.floor(u * 512), Math.floor(v * 512), 8) > 0.988,
      brightness = 0.93 + 0.07 * drifts;
    return [0.9 * brightness, 0.94 * brightness, 1 * brightness, drifts * 0.8 + grain * 0.2, sparkle ? 0.12 : 0.78 + grain * 0.15, 0];
  });
}
// asphalt: per-texel speckle over broader light and dark patches
export function asphalt(color = [0.13, 0.135, 0.145]) {
  return pbrSet(256, 3, 0.01, (u, v) => {
    const speckle = hash(Math.floor(u * 256), Math.floor(v * 256), 12),
      patches = fbm(u * 6, v * 6, 3, 6, 6, 9),
      brightness = 0.8 + 0.5 * speckle * speckle + 0.25 * patches;
    return [...tint(color, brightness), speckle * 0.5 + patches * 0.3, 0.88 - speckle * 0.1, 0];
  });
}
// grass: fine blade noise over broader patches, varying between a darker and a lighter green
export function grass() {
  return pbrSet(512, 4, 0.05, (u, v) => {
    const blades = fbm(u * 70, v * 70, 2, 70, 70, 3),
      patches = fbm(u * 4, v * 4, 4, 4, 4, 5),
      toneMix = fbm(u * 9, v * 9, 3, 9, 9, 6),
      brightness = 0.75 + 0.5 * blades;
    return [
      lerp(0.22, 0.4, toneMix) * brightness + patches * 0.05,
      lerp(0.3, 0.4, toneMix) * brightness * (0.85 + 0.3 * patches),
      lerp(0.1, 0.16, toneMix) * brightness,
      blades,
      0.92,
      0,
    ];
  });
}
// alpha map (green channel) for the roof snow sheets: noisy coverage that thins out raggedly towards the edges;
// the optional maskFn(u, v) multiplies the coverage, e.g. to cut an opening
export function snowEdgeAlpha(size, maskFn) {
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let u = (x + 0.5) / size,
        v = (y + 0.5) / size,
        alpha = 0.45 + 0.55 * fbm(u * 6, v * 4, 4, 1024, 1024, 41);
      alpha = smooth(0.2, 0.95, alpha);
      alpha *= 0.35 + 0.65 * smooth(0, 0.18, Math.min(u, 1 - u, v, 1 - v) + 0.04 * fbm(u * 30, v * 30, 2, 1024, 1024, 5));
      if (maskFn) {
        alpha *= maskFn(u, v);
      }
      const offset = (y * size + x) * 4;
      data[offset] = 255;
      data[offset + 1] = clamp(alpha, 0, 1) * 255;
      data[offset + 2] = 255;
      data[offset + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.magFilter = texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}
// a lit room seen through a window, drawn on a canvas: a top-to-bottom gradient in the room kind's colours,
// a glow of light, dark shapes that depend on the room kind, and shaded sides
export function roomTexture(kind = "living") {
  const canvas = document.createElement("canvas");
  canvas.width = 160;
  canvas.height = 160;
  const ctx = canvas.getContext("2d"),
    palette = {
      living: ["#6b4426", "#d99a55", "#f5c27c"],
      kitchen: ["#7a5a3a", "#e6b673", "#fff0cf"],
      bed: ["#4a3a52", "#c78b7a", "#f1c6a0"],
      bath: ["#4f6670", "#a9c7cf", "#eaf6f4"],
      hall: ["#5a4128", "#c58c52", "#efba78"],
    }[kind] || ["#6b4426", "#d99a55", "#f5c27c"],
    backdrop = ctx.createLinearGradient(0, 0, 0, 160);
  backdrop.addColorStop(0, palette[0]);
  backdrop.addColorStop(0.55, palette[1]);
  backdrop.addColorStop(1, palette[2]);
  ctx.fillStyle = backdrop;
  ctx.fillRect(0, 0, 160, 160);
  // glow of light
  const lightX = kind === "kitchen" ? 80 : 40 + Math.random() * 80,
    lightGlow = ctx.createRadialGradient(lightX, 52, 2, lightX, 52, 70);
  lightGlow.addColorStop(0, "rgba(255,246,214,.95)");
  lightGlow.addColorStop(1, "rgba(255,220,150,0)");
  ctx.fillStyle = lightGlow;
  ctx.fillRect(0, 0, 160, 160);
  // dark silhouettes for each room kind
  ctx.fillStyle = "rgba(30,18,10,.55)";
  if (kind === "living") {
    ctx.fillRect(14, 108, 92, 52);
    ctx.fillRect(14, 88, 92, 22);
    ctx.fillRect(112, 70, 6, 90);
  }
  if (kind === "kitchen") {
    ctx.fillRect(0, 100, 160, 60);
    ctx.fillStyle = "rgba(30,18,10,.4)";
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(8 + i * 38, 20, 30, 40);
    }
  }
  if (kind === "bed") {
    ctx.fillRect(20, 96, 120, 64);
    ctx.fillRect(20, 70, 14, 40);
  }
  if (kind === "bath") {
    ctx.fillStyle = "rgba(20,40,48,.35)";
    ctx.fillRect(0, 112, 160, 48);
    ctx.fillRect(104, 40, 40, 36);
  }
  if (kind === "hall") {
    ctx.fillRect(0, 128, 160, 32);
    ctx.fillRect(70, 30, 36, 90);
  }
  // shade fading in from the left edge, then mirrored onto the right edge
  const sideShade = ctx.createLinearGradient(0, 0, 40, 0);
  sideShade.addColorStop(0, "rgba(40,24,16,.7)");
  sideShade.addColorStop(1, "rgba(40,24,16,0)");
  ctx.fillStyle = sideShade;
  ctx.fillRect(0, 0, 40, 160);
  ctx.save();
  ctx.translate(160, 0);
  ctx.scale(-1, 1);
  ctx.fillStyle = sideShade;
  ctx.fillRect(0, 0, 40, 160);
  ctx.restore();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
// round glow: a radial gradient from innerColor at the centre, through the same colour at 0.35 alpha, to outerColor at the rim
export function glowTexture(innerColor = "rgba(255,190,120,0.9)", outerColor = "rgba(255,150,80,0)") {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d"),
    gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, innerColor);
  gradient.addColorStop(0.35, innerColor.replace(/[\d.]+\)$/, "0.35)"));
  gradient.addColorStop(1, outerColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
// the HAUSE A mark: a soft halo, an orange disc with a lighter rim, and a dark A drawn as a chevron with a small square
export function markTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d"),
    halo = ctx.createRadialGradient(64, 64, 20, 64, 64, 64);
  halo.addColorStop(0, "rgba(244,189,126,0.55)");
  halo.addColorStop(1, "rgba(244,189,126,0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, 128, 128);
  ctx.beginPath();
  ctx.arc(64, 64, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#d98a4e";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#f4bd7e";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(49, 79);
  ctx.lineTo(64, 49);
  ctx.lineTo(79, 79);
  ctx.lineWidth = 6.5;
  ctx.strokeStyle = "#121311";
  ctx.lineJoin = "miter";
  ctx.stroke();
  ctx.fillStyle = "#121311";
  ctx.fillRect(60.5, 64.5, 7, 7);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
// small round dot: a white core, the given colour around it, fading to transparent at the rim
export function dotTexture(color = "rgba(255,255,255,0.6)") {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d"),
    gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.25, color);
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
// soft irregular blob: nine faint white discs of varying size scattered around the centre
export function poolTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d");
  for (let i = 0; i < 9; i++) {
    const x = 64 + (hash(i, 1, 3) - 0.5) * 40,
      y = 64 + (hash(i, 2, 3) - 0.5) * 40,
      radius = 22 + hash(i, 3, 3) * 22,
      blob = ctx.createRadialGradient(x, y, 0, x, y, radius);
    blob.addColorStop(0, "rgba(255,255,255,0.28)");
    blob.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = blob;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
