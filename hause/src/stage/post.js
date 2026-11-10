// Post-processing for the 3D stage. createPost() builds the EffectComposer chain:
// MSAA render target -> scene render pass -> GTAO ambient occlusion -> bloom -> output pass -> "HauseGrade" colour grade.
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
// Final full-screen grade: chromatic aberration, saturation, contrast, split toning, vignette and film grain.
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
// Builds the post chain for a quality tier: 2 = ambient occlusion + bloom, 1 = bloom only, 0 = neither and a lighter grade.
// Returns the composer and its passes plus setSize / render / dispose.
export function createPost(renderer, scene, camera, tier, width, height) {
  // multisampled half-float target (4x on tier 2, 2x on tier 1, none on tier 0) and the composer drawing into it
  const msaaSamples = tier >= 2 ? 4 : tier === 1 ? 2 : 0,
    msaaTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: msaaSamples,
    }),
    composer = new EffectComposer(renderer, msaaTarget);
  composer.setSize(width, height);
  composer.addPass(new RenderPass(scene, camera));
  // optional passes; they stay null when the tier leaves them out
  let gtao = null,
    bloom = null;
  // ambient occlusion (tier 2 only)
  if (tier >= 2) {
    gtao = new GTAOPass(
      scene,
      camera,
      width,
      height,
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
    gtao.blendIntensity = 0.9;
    // replaces the pass's own hook: besides points and lines, also hide sprites and anything flagged userData.noAO
    // while the pass renders its normals-and-depth buffer (the pass restores their visibility afterwards)
    gtao._overrideVisibility = function () {
      const hiddenCache = this._visibilityCache;
      this.scene.traverse((obj) => {
        if ((obj.isPoints || obj.isLine || obj.isLine2 || obj.isSprite || (obj.userData && obj.userData.noAO)) && obj.visible) {
          obj.visible = false;
          hiddenCache.push(obj);
        }
      });
    };
    composer.addPass(gtao);
  }
  // bloom (tiers 1 and 2)
  if (tier >= 1) {
    bloom = new UnrealBloomPass(new THREE.Vector2(width, height), 0.55, 0.62, 1);
    composer.addPass(bloom);
  }
  // output pass (tone mapping and colour space), then the grade; tier 0 turns off chromatic aberration and halves the grain
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader);
  if (tier === 0) {
    grade.uniforms.uCA.value = 0;
    grade.uniforms.uGrain.value = 0.015;
  }
  composer.addPass(grade);
  return {
    composer: composer,
    bloom: bloom,
    gtao: gtao,
    grade: grade,
    tier: tier,
    // resize the composer and update the aspect ratio the grade uses
    setSize(newWidth, newHeight) {
      composer.setSize(newWidth, newHeight);
      grade.uniforms.uAspect.value = newWidth / newHeight;
    },
    // render one frame; time (wrapped every 10 s) animates the film grain
    render(dt, time) {
      grade.uniforms.uTime.value = time % 10;
      composer.render(dt);
    },
    dispose() {
      composer.dispose();
      msaaTarget.dispose();
    },
  };
}
