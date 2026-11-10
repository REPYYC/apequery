// Thermal camera view: swaps the material of every mesh in the scene for a ShaderMaterial that shows
// a thermal value through an iron palette, and swaps the original materials back when it is turned off.
import * as THREE from "three";
// vertex shader: passes on the world position and world normal (handles instanced meshes)
const THERMAL_VERT = `varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`;
// fragment shader: the thermal value is uBase, plus uGrad rising with world height, plus uBand in bands at three heights,
// plus drifting noise and a small rim term; the iron palette turns it into a colour
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
// scene: the scene that is traversed; M: shared materials (not used here); skipParents: objects whose descendants
// keep their materials; onChange(on): called after every switch
export function createThermal({ scene: scene, M: M, skipParents: skipParents, onChange: onChange }) {
  // the uTime uniform shared by every thermal material, and the thermal materials made so far
  const timeUniform = {
      value: 0,
    },
    materialCache = new Map();
  // one shared ShaderMaterial per combination of base, grad and band
  function thermalMaterial(base, grad = 0, band = 0) {
    const key = base + "|" + grad + "|" + band;
    if (!materialCache.has(key)) {
      materialCache.set(
        key,
        new THREE.ShaderMaterial({
          uniforms: {
            uBase: {
              value: base,
            },
            uGrad: {
              value: grad,
            },
            uBand: {
              value: band,
            },
            uTime: timeUniform,
          },
          vertexShader: THERMAL_VERT,
          fragmentShader: THERMAL_FRAG,
        }),
      );
    }
    return materialCache.get(key);
  }
  // thermal value of each tagged system (userData.sys): a base value, or [base, grad]
  const thermalBySystem = {
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
  // thermal material that stands in for `material`: by the mesh's system tag when it has one,
  // otherwise by the material's own userData.th, otherwise a base value of 0.3
  function thermalFor(material, sys) {
    if (sys && thermalBySystem[sys] !== undefined) {
      return thermalMaterial(...[].concat(thermalBySystem[sys]));
    }
    const thermalParams = material.userData && material.userData.th;
    if (thermalParams) {
      return thermalMaterial(...thermalParams);
    } else {
      return thermalMaterial(0.3);
    }
  }
  // `active`: whether the thermal view is on (`unused` is never read)
  let unused = [],
    active = false;
  // turns the thermal view on or off: sprites flagged noAO are hidden while it is on, and mesh materials are swapped
  // for thermal ones (originals kept in userData.mat0) or restored; meshes flagged noThermal or inside one of
  // skipParents are left alone; onChange is then called with the new state
  function set(on) {
    if (on !== active) {
      active = on;
      scene.traverse((obj) => {
        if (obj.isSprite && obj.userData.noAO) {
          obj.visible = !active && (obj.userData.wasVisible ?? true);
          return;
        }
        if (!(!(obj.isMesh || obj.isInstancedMesh) || !obj.material) && !obj.userData.noThermal) {
          for (let ancestor = obj.parent; ancestor; ancestor = ancestor.parent) {
            if (skipParents.includes(ancestor)) {
              return;
            }
          }
          if (active) {
            obj.userData.mat0 = obj.material;
            obj.material = Array.isArray(obj.material)
              ? obj.material.map((mat) => thermalFor(mat, obj.userData.sys))
              : thermalFor(obj.material, obj.userData.sys);
          } else if (obj.userData.mat0) {
            obj.material = obj.userData.mat0;
            obj.userData.mat0 = null;
          }
        }
      });
      if (onChange) {
        onChange(active);
      }
    }
  }
  return {
    set: set,
    time: timeUniform,
    get on() {
      return active;
    },
  };
}
