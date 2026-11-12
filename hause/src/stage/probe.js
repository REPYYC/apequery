// Room light probe. Outdoors the scene is lit by an environment map of the sky. Inside a closed room that is wrong: the
// sky's blue would light things no sky can reach. For the close-ups the stage captures the room itself from a point near
// the subject (a small cube map, pre-filtered like the sky's), and uses that as the environment instead, so reflections
// and ambient light come from the lit surfaces of the room: warm bounce next to the work light, darkness where it is dark.
import * as THREE from "three";

export function createRoomProbe(renderer, scene) {
  // 128 matches the sky's environment map, so swapping one for the other does not recompile any material
  const cubeTarget = new THREE.WebGLCubeRenderTarget(128, {
      type: THREE.HalfFloatType,
      generateMipmaps: false,
    }),
    cubeCamera = new THREE.CubeCamera(0.04, 40, cubeTarget),
    pmrem = new THREE.PMREMGenerator(renderer);
  let filtered = null;
  return {
    // the probe's pre-filtered environment texture, or null before the first capture
    get texture() {
      return filtered ? filtered.texture : null;
    },
    // capture the room as seen from position (house and world coordinates are the same); the scene is rendered without
    // any environment map, so the probe holds direct light and what it lights, not light that was already bounced
    capture(position) {
      const previousEnvironment = scene.environment;
      scene.environment = null;
      cubeCamera.position.copy(position);
      cubeCamera.update(renderer, scene);
      scene.environment = previousEnvironment;
      const next = pmrem.fromCubemap(cubeTarget.texture);
      if (filtered) {
        filtered.dispose();
      }
      filtered = next;
      return filtered.texture;
    },
    dispose() {
      cubeTarget.dispose();
      pmrem.dispose();
      if (filtered) {
        filtered.dispose();
      }
    },
  };
}
