import * as THREE from "three";
import { clamp, lerp, smooth, rng } from "./util.js";
const SKY = [
  [-90, "#04060d", "#0c1124"],
  [-20, "#05070f", "#10162b"],
  [-14, "#080d20", "#1a2140"],
  [-9, "#0f1838", "#33406a"],
  [-5, "#1a2650", "#7a6f94"],
  [-2, "#27345e", "#d98d62"],
  [1, "#35508a", "#eba66f"],
  [5, "#43689f", "#e8bf8f"],
  [12, "#4a78b0", "#dccfb4"],
  [25, "#4a80ba", "#c7dcec"],
  [50, "#3f78b8", "#b4d2e8"],
  [90, "#3a72b0", "#accce6"],
];
const SKY_VERT = `varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`;
const SKY_FRAG = `precision highp float;
uniform vec3 uTop, uHor, uLow, uSunDir, uSunCol, uMoonDir;
uniform float uSunI, uMoonI, uTime, uCloud, uAurora, uThermal, uSnowLine;
varying vec3 vDir;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * n2(p); p = p*2.03 + vec2(17.1, 9.2); a *= 0.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float e = d.y;
  float up = pow(clamp(e * 1.25, 0.0, 1.0), 0.62);
  vec3 col = mix(uHor, uTop, up);
  if (e < 0.0) col = mix(uHor, uLow, smoothstep(0.0, 0.3, -e));
  // sun: wide horizon glow, tight glow, disc
  float sd = dot(d, uSunDir);
  col += uSunCol * pow(max(sd, 0.0), 4.0) * exp(-abs(e) * 5.0) * 0.55 * uSunI;
  col += uSunCol * pow(max(sd, 0.0), 36.0) * 0.55 * uSunI;
  col += uSunCol * smoothstep(0.99955, 0.99985, sd) * 9.0 * uSunI * step(0.0, e + 0.01);
  // moon
  float md = dot(d, uMoonDir);
  col += vec3(0.72, 0.8, 1.0) * (smoothstep(0.99962, 0.99982, md) * 2.2 + pow(max(md, 0.0), 160.0) * 0.22) * uMoonI;
  // clouds
  if (e > 0.0) {
    vec2 p = d.xz / (e + 0.14) * 0.62 + vec2(uTime * 0.006, uTime * 0.0022);
    float c = fbm(p * 1.7);
    float cov = mix(0.64, 0.4, uCloud);
    float m = smoothstep(cov, cov + 0.26, c) * smoothstep(0.0, 0.16, e);
    float lit = clamp(dot(normalize(vec3(d.x, 0.25, d.z)), uSunDir) * 0.5 + 0.5, 0.0, 1.0);
    vec3 cc = mix(uHor * 0.85 + 0.015, uSunCol * 0.85 + uHor * 0.35, lit * clamp(uSunI, 0.0, 1.0));
    cc *= 1.0 - 0.4 * smoothstep(0.5, 0.92, c);
    col = mix(col, cc, m * 0.82);
  }
  // aurora over the northern horizon (+x)
  if (uAurora > 0.001 && e > 0.015) {
    float az = atan(d.z, d.x);
    float band = exp(-pow(az / 1.05, 2.0));
    float ec = 0.2 + 0.08 * sin(az * 3.0 + uTime * 0.16) + 0.035 * sin(az * 7.0 - uTime * 0.23);
    float w = 0.075 + 0.03 * sin(az * 4.0 + uTime * 0.1);
    float ribbon = exp(-pow((e - ec) / w, 2.0)) + 0.35 * exp(-pow((e - ec - 0.1) / (w * 2.2), 2.0));
    float rays = 0.5 + 0.5 * n2(vec2(az * 26.0 + uTime * 0.35, e * 2.5));
    vec3 ac = mix(vec3(0.18, 1.0, 0.52), vec3(0.72, 0.26, 0.95), smoothstep(ec, ec + 0.2, e));
    col += ac * ribbon * rays * band * smoothstep(0.015, 0.09, e) * uAurora * 1.4;
  }
  col = mix(col, vec3(0.03, 0.005, 0.07) + col * 0.15, uThermal);
  gl_FragColor = vec4(col, 1.0);
}`;
export function createSky(i, e) {
  let t = {
      uTop: {
        value: new THREE.Color(),
      },
      uHor: {
        value: new THREE.Color(),
      },
      uLow: {
        value: new THREE.Color(),
      },
      uSunDir: {
        value: new THREE.Vector3(0, 1, 0),
      },
      uSunCol: {
        value: new THREE.Color(1, 0.8, 0.6),
      },
      uMoonDir: {
        value: new THREE.Vector3(0.3, 0.55, -0.78).normalize(),
      },
      uSunI: {
        value: 0,
      },
      uMoonI: {
        value: 0,
      },
      uTime: {
        value: 0,
      },
      uCloud: {
        value: 0.4,
      },
      uAurora: {
        value: 0,
      },
      uThermal: {
        value: 0,
      },
      uSnowLine: {
        value: 0,
      },
    },
    n = new THREE.ShaderMaterial({
      uniforms: t,
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: false,
    }),
    s = new THREE.Mesh(new THREE.SphereGeometry(500, 48, 28), n);
  s.renderOrder = -10;
  s.frustumCulled = false;
  s.userData.noThermal = true;
  s.userData.noAO = true;
  e.add(s);
  let r = rng(7),
    a = 1500,
    o = new Float32Array(a * 3);
  for (let b = 0; b < a; b++) {
    let R = r() * Math.PI * 2,
      v1 = Math.acos(1 - r() * 1),
      w = 480;
    o[b * 3] = Math.sin(v1) * Math.cos(R) * w;
    o[b * 3 + 1] = Math.cos(v1) * w;
    o[b * 3 + 2] = Math.sin(v1) * Math.sin(R) * w;
  }
  let c = new THREE.BufferGeometry();
  c.setAttribute("position", new THREE.BufferAttribute(o, 3));
  let l = new THREE.PointsMaterial({
      color: 14674175,
      size: 1.7,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    }),
    u = new THREE.Points(c, l);
  u.frustumCulled = false;
  u.renderOrder = -9;
  u.userData.noAO = true;
  e.add(u);
  function f(b, R, v1) {
    let w = document.createElement("canvas");
    w.width = 4096;
    w.height = 256;
    let C = w.getContext("2d"),
      N = rng(b);
    C.filter = "blur(1.4px)";
    let S = Array.from(
      {
        length: 8,
      },
      () => N() * 6.28,
    );
    C.clearRect(0, 0, 2048, 256);
    C.beginPath();
    C.moveTo(0, 256);
    let I = [3, 7, 15, 31, 63],
      L = [0.5, 0.28, 0.15, 0.08 * v1, 0.045 * v1];
    for (let O = 0; O <= 4096; O += 2) {
      let G = (O / 4096) * Math.PI * 2,
        z = 0;
      for (let k = 0; k < 5; k++) {
        z += L[k] * Math.pow(1 - Math.abs(Math.sin(G * I[k] + S[k])), 1.6);
      }
      C.lineTo(O, 256 - clamp(z / 1.06, 0, 1) * R);
    }
    C.lineTo(4096, 256);
    C.closePath();
    let U = C.createLinearGradient(0, 256 - R, 0, 256);
    U.addColorStop(0, "rgba(255,255,255,1)");
    U.addColorStop(0.3, "rgba(232,236,248,1)");
    U.addColorStop(0.62, "rgba(120,132,160,1)");
    U.addColorStop(1, "rgba(66,74,96,0)");
    C.fillStyle = U;
    C.fill();
    let V = new THREE.CanvasTexture(w);
    V.colorSpace = THREE.SRGBColorSpace;
    V.wrapS = THREE.RepeatWrapping;
    V.anisotropy = 4;
    return V;
  }
  function d(b) {
    let R = document.createElement("canvas");
    R.width = 2048;
    R.height = 128;
    let v1 = R.getContext("2d"),
      w = rng(b);
    v1.clearRect(0, 0, 2048, 128);
    v1.fillStyle = "rgba(255,255,255,1)";
    for (let N = 0; N < 2048; N += 3) {
      let S = 34 + w() * 40 + Math.sin(N * 0.01) * 10,
        I = 6 + w() * 7;
      v1.beginPath();
      v1.moveTo(N - I, 128);
      v1.lineTo(N, 128 - S);
      v1.lineTo(N + I, 128);
      v1.fill();
    }
    v1.fillRect(0, 100, 2048, 28);
    let C = new THREE.CanvasTexture(R);
    C.colorSpace = THREE.SRGBColorSpace;
    C.wrapS = THREE.RepeatWrapping;
    return C;
  }
  let h = [
      {
        tex: f(3, 220, 1),
        R: 450,
        h: 190,
        y: 40,
        k: 0.8,
        mix: 0.86,
      },
      {
        tex: f(11, 170, 0.8),
        R: 360,
        h: 120,
        y: 16,
        k: 0.55,
        mix: 0.68,
      },
      {
        tex: d(5),
        R: 300,
        h: 34,
        y: 8,
        k: 0.22,
        mix: 0.2,
      },
    ].map((b) => {
      let R = new THREE.MeshBasicMaterial({
          map: b.tex,
          transparent: true,
          side: THREE.BackSide,
          depthWrite: false,
          fog: false,
          color: 4478327,
        }),
        v1 = new THREE.Mesh(new THREE.CylinderGeometry(b.R, b.R, b.h, 96, 1, true), R);
      v1.position.y = b.y;
      v1.renderOrder = -8;
      v1.frustumCulled = false;
      v1.userData.noThermal = true;
      v1.userData.noAO = true;
      e.add(v1);
      return {
        ...b,
        mat: R,
        mesh: v1,
      };
    }),
    p = new THREE.PMREMGenerator(i),
    x = new THREE.Scene(),
    g = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), n.clone());
  g.material.uniforms = t;
  g.material.depthTest = true;
  x.add(g);
  let m = null,
    M = "",
    E = new THREE.Color(),
    _ = new THREE.Color();
  return {
    dome: s,
    mat: n,
    U: t,
    stars: u,
    horizon: new THREE.Color(),
    zenith: new THREE.Color(),
    update(b, R) {
      let v1 = clamp(b.elev, -90, 90),
        w = 0;
      while (w < SKY.length - 2 && SKY[w + 1][0] <= v1) {
        w++;
      }
      let [C, N, S] = SKY[w],
        [I, L, U] = SKY[w + 1],
        V = smooth(0, 1, (v1 - C) / (I - C));
      t.uTop.value.copy(E.set(N)).lerp(_.set(L), V);
      t.uHor.value.copy(E.set(S)).lerp(_.set(U), V);
      if (b.seasonTint) {
        t.uTop.value.lerp(b.seasonTint.top, b.seasonTint.k);
        t.uHor.value.lerp(b.seasonTint.hor, b.seasonTint.k);
      }
      t.uLow.value
        .copy(t.uHor.value)
        .multiplyScalar(0.55 + 0.25 * b.daylight)
        .lerp(E.set(b.snowy ? 7174806 : 2764834), 0.18 + 0.2 * b.daylight);
      t.uLow.value.multiplyScalar(1 - 0.82 * (b.voidK || 0));
      t.uSunDir.value.copy(b.sunDir);
      let O = 1 - smooth(0, 0.5, b.sunDir.y);
      t.uSunCol.value.setRGB(1, lerp(0.93, 0.56, O), lerp(0.84, 0.32, O));
      t.uSunI.value = smooth(-0.14, 0.04, b.sunDir.y) * lerp(1, 1.4, O);
      t.uMoonI.value = (1 - b.daylight) * 0.9;
      t.uTime.value = R;
      t.uCloud.value = b.cloud ?? 0.4;
      t.uAurora.value = b.aurora || 0;
      t.uThermal.value = b.thermal || 0;
      this.horizon.copy(t.uHor.value);
      this.zenith.copy(t.uTop.value);
      l.opacity = clamp((1 - b.daylight * 1.2) * 0.95, 0, 1) * (1 - (b.thermal || 0));
      h.forEach((G) => {
        G.mat.color
          .copy(t.uHor.value)
          .lerp(t.uTop.value, 0.12)
          .multiplyScalar(G.k * (0.55 + 0.7 * b.daylight))
          .lerp(E.set(16777215), 0)
          .multiplyScalar(1);
        G.mat.color.lerp(t.uHor.value, 1 - G.mix);
        G.mat.color.lerp(_.set(2101306), (b.thermal || 0) * 0.9);
      });
    },
    follow(b) {
      s.position.copy(b);
      u.position.copy(b);
      h.forEach((R) => {
        R.mesh.position.x = b.x;
        R.mesh.position.z = b.z;
      });
    },
    refreshEnv(b) {
      let R = [
        t.uTop.value.getHexString(),
        t.uHor.value.getHexString(),
        t.uSunI.value.toFixed(2),
        t.uAurora.value.toFixed(1),
        t.uThermal.value.toFixed(1),
        t.uSunDir.value.x.toFixed(2),
        t.uSunDir.value.y.toFixed(2),
      ].join("|");
      if (!b && R === M) {
        return;
      }
      M = R;
      let v1 = m;
      m = p.fromScene(x, 0.015, 0.1, 200, {
        size: 128,
      });
      e.environment = m.texture;
      if (v1) {
        v1.dispose();
      }
    },
  };
}
