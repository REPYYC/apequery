// Sky for the 3D stage: a shader sky dome driven by the sun's elevation (gradient, sun, moon, clouds, aurora), stars,
// rings of mountains and forest on the horizon, and the environment map that is rendered from the sky.
import * as THREE from "three";
import { clamp, lerp, smooth, rng } from "./util.js";
// sky colours by sun elevation, one row per key elevation: [elevationDegrees, topColour, horizonColour]
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
// sky dome shaders: the vertex shader passes on each vertex's direction from the dome centre and pins the dome to the far plane
const SKY_VERT = `varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`;
// the fragment shader paints the top-to-horizon gradient, the colour below the horizon, sun, moon, clouds and aurora,
// and darkens the result in the thermal view
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
export function createSky(renderer, scene) {
  // sky dome: the sky shader on the inside of a large sphere
  const uniforms = {
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
    skyMat = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: false,
    }),
    skyDome = new THREE.Mesh(new THREE.SphereGeometry(500, 48, 28), skyMat);
  skyDome.renderOrder = -10;
  skyDome.frustumCulled = false;
  skyDome.userData.noThermal = true;
  skyDome.userData.noAO = true;
  scene.add(skyDome);
  // stars: points scattered over the upper hemisphere, just inside the dome
  const starRandom = rng(7),
    starCount = 1500,
    starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const azimuth = starRandom() * Math.PI * 2,
      zenithAngle = Math.acos(1 - starRandom() * 1),
      radius = 480;
    starPositions[i * 3] = Math.sin(zenithAngle) * Math.cos(azimuth) * radius;
    starPositions[i * 3 + 1] = Math.cos(zenithAngle) * radius;
    starPositions[i * 3 + 2] = Math.sin(zenithAngle) * Math.sin(azimuth) * radius;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({
      color: 14674175,
      size: 1.7,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    }),
    starField = new THREE.Points(starGeo, starMat);
  starField.frustumCulled = false;
  starField.renderOrder = -9;
  starField.userData.noAO = true;
  scene.add(starField);
  // mountain range silhouette for a horizon ring: a ridged-noise skyline that wraps around seamlessly,
  // filled white at the peaks down to blue-grey, fading out at the base
  function mountainTexture(seed, peakHeight, fineDetail) {
    const canvas = document.createElement("canvas");
    canvas.width = 4096;
    canvas.height = 256;
    const ctx = canvas.getContext("2d"),
      random = rng(seed);
    ctx.filter = "blur(1.4px)";
    const phases = Array.from(
      {
        length: 8,
      },
      () => random() * 6.28,
    );
    ctx.clearRect(0, 0, 2048, 256);
    ctx.beginPath();
    ctx.moveTo(0, 256);
    const frequencies = [3, 7, 15, 31, 63],
      amplitudes = [0.5, 0.28, 0.15, 0.08 * fineDetail, 0.045 * fineDetail];
    for (let x = 0; x <= 4096; x += 2) {
      let angle = (x / 4096) * Math.PI * 2,
        ridge = 0;
      for (let octave = 0; octave < 5; octave++) {
        ridge += amplitudes[octave] * Math.pow(1 - Math.abs(Math.sin(angle * frequencies[octave] + phases[octave])), 1.6);
      }
      ctx.lineTo(x, 256 - clamp(ridge / 1.06, 0, 1) * peakHeight);
    }
    ctx.lineTo(4096, 256);
    ctx.closePath();
    const gradient = ctx.createLinearGradient(0, 256 - peakHeight, 0, 256);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(232,236,248,1)");
    gradient.addColorStop(0.62, "rgba(120,132,160,1)");
    gradient.addColorStop(1, "rgba(66,74,96,0)");
    ctx.fillStyle = gradient;
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.anisotropy = 4;
    return texture;
  }
  // forest silhouette for the nearest ring: a row of pointed tree tops above a solid band
  function forestTexture(seed) {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 128;
    const ctx = canvas.getContext("2d"),
      random = rng(seed);
    ctx.clearRect(0, 0, 2048, 128);
    ctx.fillStyle = "rgba(255,255,255,1)";
    for (let x = 0; x < 2048; x += 3) {
      const treeHeight = 34 + random() * 40 + Math.sin(x * 0.01) * 10,
        halfWidth = 6 + random() * 7;
      ctx.beginPath();
      ctx.moveTo(x - halfWidth, 128);
      ctx.lineTo(x, 128 - treeHeight);
      ctx.lineTo(x + halfWidth, 128);
      ctx.fill();
    }
    ctx.fillRect(0, 100, 2048, 28);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }
  // horizon rings: two mountain ranges and a forest, each an open cylinder seen from the inside
  // (R radius, h height, y centre height, k brightness, mix how much of its own tint it keeps against the horizon colour)
  const horizonRings = [
      {
        tex: mountainTexture(3, 220, 1),
        R: 450,
        h: 190,
        y: 40,
        k: 0.8,
        mix: 0.86,
      },
      {
        tex: mountainTexture(11, 170, 0.8),
        R: 360,
        h: 120,
        y: 16,
        k: 0.55,
        mix: 0.68,
      },
      {
        tex: forestTexture(5),
        R: 300,
        h: 34,
        y: 8,
        k: 0.22,
        mix: 0.2,
      },
    ].map((spec) => {
      const ringMat = new THREE.MeshBasicMaterial({
          map: spec.tex,
          transparent: true,
          side: THREE.BackSide,
          depthWrite: false,
          fog: false,
          color: 4478327,
        }),
        ringMesh = new THREE.Mesh(new THREE.CylinderGeometry(spec.R, spec.R, spec.h, 96, 1, true), ringMat);
      ringMesh.position.y = spec.y;
      ringMesh.renderOrder = -8;
      ringMesh.frustumCulled = false;
      ringMesh.userData.noThermal = true;
      ringMesh.userData.noAO = true;
      scene.add(ringMesh);
      return {
        ...spec,
        mat: ringMat,
        mesh: ringMesh,
      };
    }),
    // environment map: a small copy of the sky dome in its own scene, pre-filtered for reflections and ambient light
    pmrem = new THREE.PMREMGenerator(renderer),
    envScene = new THREE.Scene(),
    envDome = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMat.clone());
  envDome.material.uniforms = uniforms;
  envDome.material.depthTest = true;
  envScene.add(envDome);
  let envTarget = null,
    envKey = "",
    scratchColorA = new THREE.Color(),
    scratchColorB = new THREE.Color();
  return {
    dome: skyDome,
    mat: skyMat,
    U: uniforms,
    stars: starField,
    horizon: new THREE.Color(),
    zenith: new THREE.Color(),
    // per frame: sky colours from the sun elevation, then the sun, moon, cloud, aurora and thermal uniforms, stars and rings
    update(skyState, time) {
      // blend the two SKY rows on either side of the sun elevation
      let elev = clamp(skyState.elev, -90, 90),
        row = 0;
      while (row < SKY.length - 2 && SKY[row + 1][0] <= elev) {
        row++;
      }
      const [lowerElev, lowerTop, lowerHorizon] = SKY[row],
        [upperElev, upperTop, upperHorizon] = SKY[row + 1],
        blend = smooth(0, 1, (elev - lowerElev) / (upperElev - lowerElev));
      uniforms.uTop.value.copy(scratchColorA.set(lowerTop)).lerp(scratchColorB.set(upperTop), blend);
      uniforms.uHor.value.copy(scratchColorA.set(lowerHorizon)).lerp(scratchColorB.set(upperHorizon), blend);
      if (skyState.seasonTint) {
        uniforms.uTop.value.lerp(skyState.seasonTint.top, skyState.seasonTint.k);
        uniforms.uHor.value.lerp(skyState.seasonTint.hor, skyState.seasonTint.k);
      }
      // colour below the horizon: dimmed horizon colour mixed with a ground colour (snowy or bare), darkened by voidK
      uniforms.uLow.value
        .copy(uniforms.uHor.value)
        .multiplyScalar(0.55 + 0.25 * skyState.daylight)
        .lerp(scratchColorA.set(skyState.snowy ? 7174806 : 2764834), 0.18 + 0.2 * skyState.daylight);
      uniforms.uLow.value.multiplyScalar(1 - 0.82 * (skyState.voidK || 0));
      // sun: warmer and stronger while it is low, fading out once it is below the horizon
      uniforms.uSunDir.value.copy(skyState.sunDir);
      const lowSun = 1 - smooth(0, 0.5, skyState.sunDir.y);
      uniforms.uSunCol.value.setRGB(1, lerp(0.93, 0.56, lowSun), lerp(0.84, 0.32, lowSun));
      uniforms.uSunI.value = smooth(-0.14, 0.04, skyState.sunDir.y) * lerp(1, 1.4, lowSun);
      uniforms.uMoonI.value = (1 - skyState.daylight) * 0.9;
      uniforms.uTime.value = time;
      uniforms.uCloud.value = skyState.cloud ?? 0.4;
      uniforms.uAurora.value = skyState.aurora || 0;
      uniforms.uThermal.value = skyState.thermal || 0;
      this.horizon.copy(uniforms.uHor.value);
      this.zenith.copy(uniforms.uTop.value);
      // stars come out as daylight goes
      starMat.opacity = clamp((1 - skyState.daylight * 1.2) * 0.95, 0, 1) * (1 - (skyState.thermal || 0));
      // horizon rings take their tint from the sky colours
      horizonRings.forEach((ring) => {
        ring.mat.color
          .copy(uniforms.uHor.value)
          .lerp(uniforms.uTop.value, 0.12)
          .multiplyScalar(ring.k * (0.55 + 0.7 * skyState.daylight))
          .lerp(scratchColorA.set(16777215), 0)
          .multiplyScalar(1);
        ring.mat.color.lerp(uniforms.uHor.value, 1 - ring.mix);
        ring.mat.color.lerp(scratchColorB.set(2101306), (skyState.thermal || 0) * 0.9);
      });
    },
    // keep the dome and stars centred on the camera; the rings follow it horizontally only
    follow(cameraPos) {
      skyDome.position.copy(cameraPos);
      starField.position.copy(cameraPos);
      horizonRings.forEach((ring) => {
        ring.mesh.position.x = cameraPos.x;
        ring.mesh.position.z = cameraPos.z;
      });
    },
    // re-render the environment map from the sky, skipped (unless forced) while the sky looks the same as last time
    refreshEnv(force) {
      const key = [
        uniforms.uTop.value.getHexString(),
        uniforms.uHor.value.getHexString(),
        uniforms.uSunI.value.toFixed(2),
        uniforms.uAurora.value.toFixed(1),
        uniforms.uThermal.value.toFixed(1),
        uniforms.uSunDir.value.x.toFixed(2),
        uniforms.uSunDir.value.y.toFixed(2),
      ].join("|");
      if (!force && key === envKey) {
        return;
      }
      envKey = key;
      const previousTarget = envTarget;
      envTarget = pmrem.fromScene(envScene, 0.015, 0.1, 200, {
        size: 128,
      });
      scene.environment = envTarget.texture;
      if (previousTarget) {
        previousTarget.dispose();
      }
    },
  };
}
