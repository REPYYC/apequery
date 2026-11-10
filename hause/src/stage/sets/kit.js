// Shared parts kit for the close-up sets (Act II): materials, primitives, printed labels, animated cable flows, soft particles.
// Everything a set builds goes through here so the six sets read as one family.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { boxUV } from "../util.js";

export function createKit({ M, tier, glowTex, dotTex }) {
  const time = { value: 0 };

  /* ------------------------------------------------------------ materials */
  const std = (color, roughness = 0.6, metalness = 0, extra = {}) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
    m.userData.th = [0.4];
    return m;
  };
  // sheet plywood: pale face veneer with long soft grain, a few knots, and the seam between two sheets (UVs in metres)
  function plywood() {
    const cv = document.createElement("canvas"); cv.width = cv.height = 512;
    const g = cv.getContext("2d");
    g.fillStyle = "#b99a6e"; g.fillRect(0, 0, 512, 512);
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 260; i++) {
      const y = rnd() * 512, a = 0.03 + rnd() * 0.07;
      g.strokeStyle = rnd() > 0.5 ? `rgba(90,62,30,${a})` : `rgba(240,220,180,${a})`; g.lineWidth = 0.6 + rnd() * 2.2;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x <= 512; x += 32) g.lineTo(x, y + Math.sin(x * 0.012 + i) * (2 + rnd() * 5));
      g.stroke();
    }
    for (let i = 0; i < 5; i++) { const x = rnd() * 512, y = rnd() * 512, r = 4 + rnd() * 7; const gr = g.createRadialGradient(x, y, 0, x, y, r * 2.4); gr.addColorStop(0, "rgba(70,44,20,.55)"); gr.addColorStop(1, "rgba(70,44,20,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, r * 2.6, r * 1.3, 0, 0, 6.3); g.fill(); }
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(1 / 1.2, 1 / 1.2); tex.anisotropy = 8;
    const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.82, metalness: 0 }); m.userData.th = [0.45];
    return m;
  }
  const glowing = (color, intensity = 1.5, extra = {}) => std(0x0c0d10, 0.5, 0, { emissive: color, emissiveIntensity: intensity, ...extra });
  const mats = {
    enclosure: std(0x7b8087, 0.5, 0.6, { envMapIntensity: 0.7 }),
    enclosureDark: std(0x2a2d32, 0.62, 0.5, { envMapIntensity: 0.6 }),
    galv: std(0xaab1ba, 0.38, 0.9, { envMapIntensity: 1.3 }),
    blackPlastic: std(0x121316, 0.42, 0.05),
    greyPlastic: std(0x4a4f57, 0.5, 0.05),
    whitePlastic: std(0xa9a69e, 0.55, 0.02),
    conduit: std(0x6f747c, 0.62, 0.02),
    bluePlastic: std(0x2f5fa8, 0.5, 0.02),
    orangePlastic: std(0xe07a2a, 0.5, 0.02),
    yellowPlastic: std(0xe9c22e, 0.5, 0.02),
    redPlastic: std(0xc23a2b, 0.5, 0.02),
    purple: std(0x7a3fc4, 0.45, 0.05, { emissive: 0x5a2aa0, emissiveIntensity: 0.25 }),
    green: std(0x2f9a57, 0.5, 0.05),
    copper: std(0xd98a4e, 0.25, 1, { envMapIntensity: 1.5 }),
    copperHot: std(0xc9713a, 0.3, 1, { envMapIntensity: 1.5, emissive: 0xff7a2a, emissiveIntensity: 0.3 }),
    aluminum: std(0xc9ced4, 0.3, 1, { envMapIntensity: 1.4 }),
    brass: std(0xc9a24a, 0.32, 1, { envMapIntensity: 1.3 }),
    rubber: std(0x0d0e10, 0.85, 0),
    plywood: plywood(), studs: M.cedar, concrete: M.concrete, slab: M.slab, drywall: M.drywall, steel: M.steel, pvc: M.pvc,
    castIron: std(0x2b2d31, 0.75, 0.6),
    clay: std(0x9a5b3c, 0.9, 0),
    hdpe: std(0x14161a, 0.35, 0.1, { envMapIntensity: 1.2 }),
    gravel: std(0x6f6a62, 1, 0),
    soil: std(0x3a2c1e, 1, 0),
    insulPink: std(0xe9a0aa, 1, 0),
    insulYellow: std(0xe2c66a, 1, 0),
    vermiculite: std(0xb08a4a, 0.95, 0.15),
    frost: std(0xf2f7ff, 0.35, 0, { emissive: 0xbfd6ff, emissiveIntensity: 0.25 }),
    ice: M.ice,
    water: new THREE.MeshPhysicalMaterial({ color: 0x2a6fb0, roughness: 0.06, metalness: 0, transparent: true, opacity: 0.78, envMapIntensity: 1.8, clearcoat: 1 }),
    sewage: new THREE.MeshPhysicalMaterial({ color: 0x5a4628, roughness: 0.2, metalness: 0, transparent: true, opacity: 0.9, envMapIntensity: 1.2 }),
    glassClear: new THREE.MeshPhysicalMaterial({ color: 0xdfeaf2, roughness: 0.03, metalness: 0, transparent: true, opacity: 0.22, envMapIntensity: 2, clearcoat: 1 }),
    poly: new THREE.MeshPhysicalMaterial({ color: 0xdde6ee, roughness: 0.35, metalness: 0, transparent: true, opacity: 0.28, envMapIntensity: 1.4, side: THREE.DoubleSide, depthWrite: false }),
    led: (color = 0x8fd3a6, k = 3) => glowing(color, k),
    glow: glowing
  };
  [mats.water, mats.sewage, mats.glassClear, mats.poly].forEach((m) => { m.userData.th = [0.3]; });

  /* ----------------------------------------------------------- primitives */
  const place = (mesh, x, y, z, parent, o = {}) => {
    mesh.position.set(x, y, z);
    mesh.castShadow = o.cast !== false;
    mesh.receiveShadow = o.receive !== false;
    if (o.keep) mesh.userData.keep = true;
    if (o.rot) mesh.rotation.set(o.rot[0] || 0, o.rot[1] || 0, o.rot[2] || 0);
    if (parent) parent.add(mesh);
    return mesh;
  };
  /** box(w, h, d, material, x, y, z, parent, { r: corner radius, keep, cast, receive, rot }) */
  const box = (w, h, d, mat, x = 0, y = 0, z = 0, parent, o = {}) => {
    const g = o.r ? new RoundedBoxGeometry(w, h, d, 2, Math.min(o.r, w / 2, h / 2, d / 2)) : new THREE.BoxGeometry(w, h, d);
    if (o.uv) boxUV(g, o.uv === true ? {} : o.uv);   // metre-scaled UVs for the tiling PBR sets
    return place(new THREE.Mesh(g, mat), x, y, z, parent, o);
  };
  /** cyl(radius, length, material, x, y, z, parent, { axis: "x" | "y" | "z", seg, r2 }) */
  const cyl = (r, len, mat, x = 0, y = 0, z = 0, parent, o = {}) => {
    const g = new THREE.CylinderGeometry(o.r2 ?? r, r, len, o.seg || 16, 1, !!o.open);
    if (o.axis === "x") g.rotateZ(Math.PI / 2); else if (o.axis === "z") g.rotateX(Math.PI / 2);
    return place(new THREE.Mesh(g, mat), x, y, z, parent, o);
  };
  const sphere = (r, mat, x, y, z, parent, o = {}) => place(new THREE.Mesh(new THREE.SphereGeometry(r, o.seg || 16, o.seg2 || 12), mat), x, y, z, parent, o);
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  /** tube through points ([x, y, z] or Vector3). UV.x runs in metres along the tube so flow materials dash evenly. */
  const tube = (pts, radius, mat, parent, o = {}) => {
    const curve = new THREE.CatmullRomCurve3(pts.map((p) => (p.isVector3 ? p : V(p[0], p[1], p[2]))), false, o.type || "catmullrom", o.tension ?? 0.3);
    const len = curve.getLength();
    const g = new THREE.TubeGeometry(curve, o.seg || Math.max(8, Math.round(len * (o.density || 14))), radius, o.radial || 8, false);
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * len);
    const m = place(new THREE.Mesh(g, mat), 0, 0, 0, parent, o);
    m.userData.curve = curve; m.userData.len = len;
    return m;
  };

  /* ---------------------------------------------------------- flow material */
  /** A cable or pipe whose glow travels along it. level.value 0..1 switches it on; speed in m/s; dash in dashes per metre. */
  const flow = (color, o = {}) => {
    const level = { value: o.level ?? 1 };
    const m = new THREE.MeshStandardMaterial({ color: o.base ?? 0x15171a, roughness: o.roughness ?? 0.45, metalness: o.metalness ?? 0.1, emissive: color, emissiveIntensity: o.intensity ?? 2.2 });
    m.defines = { USE_UV: "" };
    m.userData.level = level; m.userData.th = [0.6];
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uFlowT = time; sh.uniforms.uFlowL = level;
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", "#include <common>\nuniform float uFlowT; uniform float uFlowL;")
        .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(o.dash ?? 3).toFixed(2)} - uFlowT * ${((o.speed ?? 0.5) * (o.dash ?? 3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(o.rest ?? 0.12).toFixed(2)} + ${(o.gain ?? 1).toFixed(2)} * fp) * uFlowL; }`);
    };
    m.customProgramCacheKey = () => `flow${o.dash ?? 3}_${o.speed ?? 0.5}_${o.rest ?? 0.12}_${o.gain ?? 1}`;
    return m;
  };

  /* ------------------------------------------------------- printed labels */
  /** One canvas, many stickers. cells: [{ key, text, sub?, w, h (px), color?, bg?, size? }] -> plane(key, widthMetres) */
  const atlas = (cells, o = {}) => {
    const pad = 4, W = o.width || 1024;
    let x = pad, y = pad, rowH = 0;
    const slots = {};
    cells.forEach((c) => { if (x + c.w + pad > W) { x = pad; y += rowH + pad; rowH = 0; } slots[c.key] = { x, y, w: c.w, h: c.h, c }; x += c.w + pad; rowH = Math.max(rowH, c.h); });
    const H = 2 ** Math.ceil(Math.log2(y + rowH + pad));
    const cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    const g = cv.getContext("2d");
    const draw = (s) => {
      const c = s.c;
      g.clearRect(s.x, s.y, s.w, s.h);
      if (c.bg) { g.fillStyle = c.bg; g.fillRect(s.x, s.y, s.w, s.h); }
      if (c.draw) { g.save(); g.translate(s.x, s.y); c.draw(g, s.w, s.h, c); g.restore(); return; }
      g.fillStyle = c.color || "#ece6da"; g.textAlign = c.align || "center"; g.textBaseline = "middle";
      const tx = c.align === "left" ? s.x + 6 : s.x + s.w / 2;
      g.font = `${c.weight || 600} ${c.size || Math.round(s.h * 0.62)}px ${c.font || "ui-monospace, Menlo, Consolas, monospace"}`;
      if (c.sub) { g.fillText(c.text, tx, s.y + s.h * 0.38); g.font = `500 ${Math.round((c.size || s.h * 0.62) * 0.5)}px ui-monospace, Menlo, Consolas, monospace`; g.globalAlpha = 0.75; g.fillText(c.sub, tx, s.y + s.h * 0.78); g.globalAlpha = 1; }
      else g.fillText(c.text, tx, s.y + s.h / 2 + 1);
    };
    Object.values(slots).forEach(draw);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    const mat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: o.emissive ?? 0.35, roughness: 0.6, transparent: true, alphaTest: 0.02, depthWrite: false });
    mat.userData.th = [0.4];
    const plane = (key, width, parent, px = 0, py = 0, pz = 0, opts = {}) => {
      const s = slots[key]; const h = width * (s.h / s.w);
      const geo = new THREE.PlaneGeometry(width, h); const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, (s.x + uv.getX(i) * s.w) / W, 1 - (s.y + (1 - uv.getY(i)) * s.h) / H);
      const m = place(new THREE.Mesh(geo, mat), px, py, pz, parent, { cast: false, receive: false, ...opts });
      m.renderOrder = 3;
      return m;
    };
    /** redraw one sticker: new text, new second line, and any other fields its draw() reads */
    const set = (key, text, sub, extra) => { const s = slots[key]; if (text !== undefined) s.c.text = text; if (sub !== undefined) s.c.sub = sub; if (extra) Object.assign(s.c, extra); draw(s); tex.needsUpdate = true; };
    return { plane, set, mat, tex };
  };

  /* ------------------------------------------------------------ particles */
  /** Soft points (additive, or normal blending with { normal: true }). Returns the Points: move them by writing
   *  points.userData.pos (Float32Array, userData.n * 3) and setting points.geometry.attributes.position.needsUpdate = true. */
  const particles = (count, o = {}) => {
    const n = tier >= 1 ? count : Math.ceil(count * 0.45);
    const geo = new THREE.BufferGeometry(); const pos = new Float32Array(n * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ size: o.size ?? 0.05, map: dotTex, color: new THREE.Color(o.color ?? 0xffffff).multiplyScalar(o.gain ?? 1.6), transparent: true, depthWrite: false, blending: o.normal ? THREE.NormalBlending : THREE.AdditiveBlending, toneMapped: false, sizeAttenuation: true, opacity: o.opacity ?? 1 });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false; pts.userData.noAO = true; pts.userData.keep = true; pts.raycast = () => {};
    pts.userData.n = n; pts.userData.pos = pos;
    return pts;
  };
  const sprite = (color, size, x, y, z, parent, opacity = 0.8) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity }));
    s.position.set(x, y, z); s.scale.set(size, size, 1); s.userData.noAO = true; s.userData.keep = true; s.raycast = () => {};
    if (parent) parent.add(s);
    return s;
  };

  /** Merge every static mesh under a group by material (animated parts carry userData.keep). */
  const bake = (group) => {
    const buckets = new Map(); const gone = [];
    group.updateWorldMatrix(true, true);
    const inv = new THREE.Matrix4().copy(group.matrixWorld).invert(), m4 = new THREE.Matrix4();
    const kept = (o) => { for (let p = o; p && p !== group; p = p.parent) if (p.userData.keep) return true; return false; };
    group.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || kept(o) || Array.isArray(o.material) || o.children.length) return;
      const key = o.material.uuid + "|" + +o.castShadow + +o.receiveShadow + "|" + o.renderOrder;
      let b = buckets.get(key); if (!b) buckets.set(key, (b = { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, ro: o.renderOrder, geos: [] }));
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      Object.keys(g.attributes).forEach((k) => { if (k !== "position" && k !== "normal" && k !== "uv") g.deleteAttribute(k); });
      if (!g.attributes.uv) g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      g.applyMatrix4(m4.multiplyMatrices(inv, o.matrixWorld));
      b.geos.push(g); gone.push(o);
    });
    buckets.forEach((b) => {
      const g = mergeGeometries(b.geos); if (!g) return;
      const mesh = new THREE.Mesh(g, b.mat); mesh.castShadow = b.cast; mesh.receiveShadow = b.recv; mesh.renderOrder = b.ro; mesh.userData.keep = true;
      group.add(mesh); b.geos.forEach((x) => x.dispose());
    });
    gone.forEach((o) => { o.parent && o.parent.remove(o); o.geometry.dispose(); });
    return group;
  };

  return { time, mats, std, box, cyl, sphere, tube, V, flow, atlas, particles, sprite, bake, place };
}
