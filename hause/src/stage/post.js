import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
const GradeShader = {
  name: "HauseGrade",
  uniforms: {
    tDiffuse: {
      value: null,
    },
    uTime: {
      value: 0,
    },
    uVig: {
      value: 0.32,
    },
    uGrain: {
      value: 0.03,
    },
    uCA: {
      value: 0.0011,
    },
    uSat: {
      value: 1.05,
    },
    uCon: {
      value: 1.05,
    },
    uThermal: {
      value: 0,
    },
    uAspect: {
      value: 1.6,
    },
  },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; c.x *= uAspect * 0.62; float r2 = dot(c, c);
      vec2 off = (vUv - 0.5) * r2 * uCA * 6.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col = (col - 0.5) * uCon + 0.5;
      // split tone: cool shadows, warm highlights
      col = mix(col * vec3(0.96, 0.99, 1.05), col * vec3(1.04, 1.0, 0.95), smoothstep(0.15, 0.85, l));
      col *= 1.0 - uVig * smoothstep(0.08, 0.6, r2);
      col += (hash(vUv * vec2(1920.0, 1080.0)) - 0.5) * uGrain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};
export function createPost(i, e, t, n, s, r) {
  let a = n >= 2 ? 4 : n === 1 ? 2 : 0,
    o = new THREE.WebGLRenderTarget(s, r, {
      type: THREE.HalfFloatType,
      samples: a,
    }),
    c = new EffectComposer(i, o);
  c.setSize(s, r);
  c.addPass(new RenderPass(e, t));
  let l = null,
    u = null;
  if (n >= 2) {
    l = new GTAOPass(
      e,
      t,
      s,
      r,
      {
        radius: 0.9,
        distanceExponent: 1.4,
        thickness: 1.2,
        scale: 1,
        samples: 12,
        distanceFallOff: 1,
        screenSpaceRadius: false,
      },
      undefined,
      {
        lumaPhi: 10,
        depthPhi: 2,
        normalPhi: 3,
        radius: 6,
        radiusExponent: 1,
        rings: 2,
        samples: 12,
      },
    );
    l.blendIntensity = 0.9;
    l._overrideVisibility = function () {
      let d = this._visibilityCache;
      this.scene.traverse((h) => {
        if ((h.isPoints || h.isLine || h.isLine2 || h.isSprite || (h.userData && h.userData.noAO)) && h.visible) {
          h.visible = false;
          d.push(h);
        }
      });
    };
    c.addPass(l);
  }
  if (n >= 1) {
    u = new UnrealBloomPass(new THREE.Vector2(s, r), 0.55, 0.62, 1);
    c.addPass(u);
  }
  c.addPass(new OutputPass());
  let f = new ShaderPass(GradeShader);
  if (n === 0) {
    f.uniforms.uCA.value = 0;
    f.uniforms.uGrain.value = 0.015;
  }
  c.addPass(f);
  return {
    composer: c,
    bloom: u,
    gtao: l,
    grade: f,
    tier: n,
    setSize(d, h) {
      c.setSize(d, h);
      f.uniforms.uAspect.value = d / h;
    },
    render(d, h) {
      f.uniforms.uTime.value = h % 10;
      c.render(d);
    },
    dispose() {
      c.dispose();
      o.dispose();
    },
  };
}
