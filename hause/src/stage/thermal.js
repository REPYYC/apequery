import * as THREE from "three";
const THERMAL_VERT = `varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`;
const THERMAL_FRAG = `uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hh(i), hh(i + vec3(1,0,0)), f.x), mix(hh(i + vec3(0,1,0)), hh(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hh(i + vec3(0,0,1)), hh(i + vec3(1,0,1)), f.x), mix(hh(i + vec3(0,1,1)), hh(i + vec3(1,1,1)), f.x), f.y), f.z); }
vec3 iron(float t){ t = clamp(t, 0.0, 1.0);
  vec3 c0 = vec3(0.01, 0.0, 0.05), c1 = vec3(0.16, 0.02, 0.42), c2 = vec3(0.6, 0.04, 0.55), c3 = vec3(0.93, 0.3, 0.12), c4 = vec3(1.0, 0.76, 0.16), c5 = vec3(1.0, 0.98, 0.86);
  if (t < 0.2) return mix(c0, c1, t / 0.2); if (t < 0.42) return mix(c1, c2, (t - 0.2) / 0.22);
  if (t < 0.62) return mix(c2, c3, (t - 0.42) / 0.2); if (t < 0.85) return mix(c3, c4, (t - 0.62) / 0.23); return mix(c4, c5, (t - 0.85) / 0.15); }
vec3 toLinear(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
void main(){
  float t = uBase + uGrad * clamp(vW.y / 10.0, 0.0, 1.0);
  t += uBand * (exp(-pow((vW.y - 0.3) * 3.2, 2.0)) + 0.85 * exp(-pow((vW.y - 3.38) * 3.2, 2.0)) + 0.7 * exp(-pow((vW.y - 6.35) * 3.0, 2.0)));
  t += (n3(vW * 1.6 + uTime * 0.05) - 0.5) * 0.08;
  float rim = pow(1.0 - abs(dot(normalize(vN), normalize(cameraPosition - vW))), 2.0) * 0.05;
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;
export function createThermal({ scene: i, M: e, skipParents: t, onChange: n }) {
  let s = {
      value: 0,
    },
    r = new Map();
  function a(d, h = 0, p = 0) {
    let x = d + "|" + h + "|" + p;
    if (!r.has(x)) {
      r.set(
        x,
        new THREE.ShaderMaterial({
          uniforms: {
            uBase: {
              value: d,
            },
            uGrad: {
              value: h,
            },
            uBand: {
              value: p,
            },
            uTime: s,
          },
          vertexShader: THERMAL_VERT,
          fragmentShader: THERMAL_FRAG,
        }),
      );
    }
    return r.get(x);
  }
  let o = {
    hvac: 0.93,
    "water-heaters": 0.88,
    electrical: 0.6,
    plumbing: 0.56,
    installation: 0.5,
    radon: 0.22,
    solar: 0.17,
    roofing: [0.4, 0.12],
    foundation: 0.33,
    sewer: 0.3,
    asbestos: 0.5,
  };
  function c(d, h) {
    if (h && o[h] !== undefined) {
      return a(...[].concat(o[h]));
    }
    let p = d.userData && d.userData.th;
    if (p) {
      return a(...p);
    } else {
      return a(0.3);
    }
  }
  let l = [],
    u = false;
  function f(d) {
    if (d !== u) {
      u = d;
      i.traverse((h) => {
        if (h.isSprite && h.userData.noAO) {
          h.visible = !u && (h.userData.wasVisible ?? true);
          return;
        }
        if (!(!(h.isMesh || h.isInstancedMesh) || !h.material) && !h.userData.noThermal) {
          for (let p = h.parent; p; p = p.parent) {
            if (t.includes(p)) {
              return;
            }
          }
          if (u) {
            h.userData.mat0 = h.material;
            h.material = Array.isArray(h.material) ? h.material.map((p) => c(p, h.userData.sys)) : c(h.material, h.userData.sys);
          } else if (h.userData.mat0) {
            h.material = h.userData.mat0;
            h.userData.mat0 = null;
          }
        }
      });
      if (n) {
        n(u);
      }
    }
  }
  return {
    set: f,
    time: s,
    get on() {
      return u;
    },
  };
}
