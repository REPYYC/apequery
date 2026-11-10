// Post-processing for the 3D stage. createPost() builds the EffectComposer chain:
// MSAA render target -> scene render pass -> GTAO ambient occlusion -> depth of field -> bloom -> output pass -> "HauseGrade" colour grade.
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { Pass, FullScreenQuad } from "three/addons/postprocessing/Pass.js";
// Remembers the depth texture of the buffer the scene was just rendered into (later passes swap the buffers around).
class DepthTap extends Pass {
  constructor(holder) {
    super();
    this.needsSwap = false;
    this.holder = holder;
  }
  render(renderer, writeBuffer, readBuffer) {
    this.holder.value = readBuffer.depthTexture;
  }
}
// Depth of field, worked at half resolution. A gather pass builds a blurred copy of the frame: a disc of taps around each
// pixel, every tap weighted by its own circle of confusion, so sharp things never smear into the blur behind them while
// blurred things in front do spill over what is behind. A composite pass then lays that copy over the sharp frame
// wherever the picture is out of focus. The circle of confusion grows with the distance from the focus plane relative to
// the pixel's own distance, so close-ups get a shallow, lens-like focus and wide shots only a soft far background.
const DOF_VERTEX = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";
const DOF_COMMON = `uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`;
const DOF_GATHER = `${DOF_COMMON}
    float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
    void main(){
      float cd = viewDist(vUv); float centerSize = cocAt(cd);
      vec3 color = texture2D(tDiffuse, vUv).rgb; float tot = 1.0; float spill = 0.0;
      float rot = ign(gl_FragCoord.xy) * 6.2831853;
      for (int i = 0; i < TAPS; i++) {
        float fi = float(i) + 0.5;
        float radius = uMaxBlur * sqrt(fi / float(TAPS));
        float ang = fi * 2.39996323 + rot;
        vec2 tc = vUv + vec2(cos(ang), sin(ang)) * uPx * radius;
        float sd = viewDist(tc); float ss = cocAt(sd);
        if (sd > cd) ss = clamp(ss, 0.0, centerSize * 2.0);
        float m = smoothstep(radius - 0.5, radius + 0.5, ss);
        color += mix(color / tot, min(texture2D(tDiffuse, tc).rgb, vec3(24.0)), m); tot += 1.0;
        spill += m * step(sd, cd * 0.97);
      }
      gl_FragColor = vec4(color / tot, spill / float(TAPS));
    }`;
const DOF_COMPOSITE = `${DOF_COMMON}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`;
class DofPass extends Pass {
  // depthHolder.value is the scene's depth texture for the current frame (see DepthTap); taps is the size of the gather disc
  constructor(depthHolder, taps) {
    super();
    this.depthHolder = depthHolder;
    // uniforms both shaders share
    this.shared = {
      tDepth: {
        value: null,
      },
      uPx: {
        value: new THREE.Vector2(1 / 1440, 1 / 900),
      },
      uNear: {
        value: 0.3,
      },
      uFar: {
        value: 1400,
      },
      uFocus: {
        value: 30,
      },
      uAperture: {
        value: 0,
      },
      uMaxBlur: {
        value: 12,
      },
    };
    this.half = new THREE.WebGLRenderTarget(720, 450, {
      type: THREE.HalfFloatType,
      depthBuffer: false,
    });
    this.gather = new THREE.ShaderMaterial({
      name: "HauseDofGather",
      defines: {
        TAPS: taps,
      },
      uniforms: {
        tDiffuse: {
          value: null,
        },
        ...this.shared,
      },
      vertexShader: DOF_VERTEX,
      fragmentShader: DOF_GATHER,
      depthTest: false,
      depthWrite: false,
    });
    this.composite = new THREE.ShaderMaterial({
      name: "HauseDofComposite",
      uniforms: {
        tDiffuse: {
          value: null,
        },
        tBlur: {
          value: this.half.texture,
        },
        uHalfPx: {
          value: new THREE.Vector2(1 / 720, 1 / 450),
        },
        ...this.shared,
      },
      vertexShader: DOF_VERTEX,
      fragmentShader: DOF_COMPOSITE,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.gather);
  }
  setSize(width, height) {
    const halfWidth = Math.max(1, Math.round(width / 2)),
      halfHeight = Math.max(1, Math.round(height / 2));
    this.half.setSize(halfWidth, halfHeight);
    this.shared.uPx.value.set(1 / width, 1 / height);
    this.composite.uniforms.uHalfPx.value.set(1 / halfWidth, 1 / halfHeight);
    // the widest blur disc: about 1.4% of the frame height
    this.shared.uMaxBlur.value = Math.max(6, height * 0.014);
  }
  render(renderer, writeBuffer, readBuffer) {
    this.shared.tDepth.value = this.depthHolder.value;
    this.gather.uniforms.tDiffuse.value = readBuffer.texture;
    this.quad.material = this.gather;
    renderer.setRenderTarget(this.half);
    this.quad.render(renderer);
    this.composite.uniforms.tDiffuse.value = readBuffer.texture;
    this.quad.material = this.composite;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.quad.render(renderer);
  }
  dispose() {
    this.half.dispose();
    this.gather.dispose();
    this.composite.dispose();
    this.quad.dispose();
  }
}
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
// Builds the post chain for a quality tier: 2 = ambient occlusion + depth of field + bloom, 1 = depth of field + bloom,
// 0 = none of them and a lighter grade.
// Returns the composer and its passes plus setSize / render / dispose.
export function createPost(renderer, scene, camera, tier, width, height) {
  // multisampled half-float target (4x on tier 2, 2x on tier 1, none on tier 0) and the composer drawing into it
  const msaaSamples = tier >= 2 ? 4 : tier === 1 ? 2 : 0,
    msaaTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: msaaSamples,
      depthTexture: new THREE.DepthTexture(width, height),
    }),
    composer = new EffectComposer(renderer, msaaTarget);
  // width and height are already device pixels: keep the composer from multiplying them by the pixel ratio a second time
  composer.setPixelRatio(1);
  composer.addPass(new RenderPass(scene, camera));
  // keep hold of the scene's depth for the depth-of-field pass
  const sceneDepth = {
    value: null,
  };
  composer.addPass(new DepthTap(sceneDepth));
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
      undefined,
      {
        radius: 0.9,
        distanceExponent: 1.4,
        thickness: 1.2,
        scale: 1,
        samples: 12,
        distanceFallOff: 1,
        screenSpaceRadius: false,
      },
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
  // depth of field (48 taps on tier 2, 20 on tier 1); main.js switches it on only while S.dof is above zero
  let dof = null;
  if (tier >= 1) {
    dof = new DofPass(sceneDepth, tier >= 2 ? 48 : 20);
    dof.enabled = false;
    composer.addPass(dof);
    dof.setSize(composer.readBuffer.width, composer.readBuffer.height);
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
    dof: dof,
    grade: grade,
    tier: tier,
    // depth of field for this frame: strength (0 switches the pass off), focus distance and the camera's clip planes
    setDof(strength, focus, near, far) {
      if (!dof) {
        return;
      }
      dof.enabled = strength > 0.01;
      const u = dof.shared;
      u.uAperture.value = strength;
      u.uFocus.value = focus;
      u.uNear.value = near;
      u.uFar.value = far;
    },
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
      if (dof) {
        dof.dispose();
      }
      msaaTarget.dispose();
    },
  };
}
