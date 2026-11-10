// Close-up sets (Act II): detailed pieces of the house that the camera flies into. A set is built the first time it is asked
// for (or in idle time after boot), shown only while it is the subject, and lit by one shared shadow-casting work light.
import * as THREE from "three";
import { lerp, clamp } from "../util.js";
import { dotTexture } from "../textures.js";
import { createKit } from "./kit.js";
import { createService, createPanelSet } from "./panel.js";
import { createAtticSet } from "./attic.js";
import { createSewerSet } from "./sewer.js";
import { createRadonSet } from "./radon.js";
import { createRestoreSet } from "./restore.js";
import { createCycleSet } from "./cycle.js";

// A set is made by create<Name>Set(ctx) with ctx = { kit, M, H, Ug, Wd, tier, reduce } and returns:
//   name, group        the Object3D holding everything (house coordinates: +x north, +y up, +z east / street)
//   anchors            { hotspotKey: Vector3 } in house coordinates, for the labels the page pins to the picture
//   shots              one camera and state target per step of the chapter (see the page director)
//   hides(H, Ug, Wd)   optional: objects of the plain house that the detailed set stands in for
//   input(data)        optional: values from controls on the page
//   light(step, q)     optional: { pos, at, power, fill } for the shared work light, in house coordinates
//   update({ step, p, q, k, t, dt, snap, reduce })   every frame while it shows: step index, chapter progress p (0..1),
//                      progress q through the step (0..1), how far the set is in (k), clock t, frame time dt
export function createSets({ M, H, Ug, Wd, tier, reduce, glowTex }) {
  const kit = createKit({ M, tier, reduce, glowTex, dotTex: dotTexture("rgba(255,255,255,0.75)") });
  const root = new THREE.Group();
  root.name = "sets";
  const noPick = (obj) => obj.traverse((o) => { o.userData.noPick = true; });
  // the mast and meter are part of the house in every scene
  const service = createService({ kit });
  root.add(service.group);
  noPick(service.group);

  const makers = {};
  Object.entries({ panel: createPanelSet, attic: createAtticSet, sewer: createSewerSet, radon: createRadonSet, restore: createRestoreSet, cycle: createCycleSet })
    .forEach(([name, make]) => { if (typeof make === "function") makers[name] = make; });
  const sets = {};
  // work light: a warm spot with soft shadows, plus a cool fill opposite it
  const lamp = new THREE.SpotLight(0xffe2bd, 0, 18, 0.5, 0.8, 1);
  lamp.castShadow = tier >= 1;
  lamp.shadow.mapSize.set(tier >= 2 ? 2048 : 1024, tier >= 2 ? 2048 : 1024);
  lamp.shadow.bias = -0.0006; lamp.shadow.normalBias = 0.006; lamp.shadow.radius = 3;
  lamp.shadow.camera.near = 0.15; lamp.shadow.camera.far = 16;
  const fill = new THREE.PointLight(0x8fa8e8, 0, 9, 2);
  root.add(lamp, lamp.target, fill);
  const lampPos = new THREE.Vector3(2, -0.3, -2.5), lampAt = new THREE.Vector3(2.8, -1.2, -3.9);
  let lampPower = 0, fillK = 1, shown = null, hidden = [];

  function ensure(name) {
    if (sets[name] || !makers[name]) return sets[name];
    const set = makers[name]({ kit, M, H, Ug, Wd, tier, reduce });
    set.group.visible = false;
    noPick(set.group);
    root.add(set.group);
    sets[name] = set;
    return set;
  }
  /** Shows the set named by target.zoom while S.zk > 0, feeds it the step and progress, and aims the work light. */
  function update(S, target, t, dt, snap) {
    kit.time.value = t;
    service.disc.rotation.y = t * 1.4;
    const name = target.zoom && makers[target.zoom] ? target.zoom : null;
    if (name) ensure(name);
    const want = S.zk > 0.004 ? name || shown : null;
    if (want !== shown) {
      if (shown && sets[shown]) sets[shown].group.visible = false;
      hidden.forEach((o) => { o.visible = true; });
      hidden = [];
      shown = want;
      if (shown) {
        sets[shown].group.visible = true;
        if (sets[shown].hides) { hidden = (sets[shown].hides(H, Ug, Wd) || []).filter((o) => o && o.visible); hidden.forEach((o) => { o.visible = false; }); }
      }
    }
    const ease = snap ? 1 : 1 - Math.exp(-dt * 3.2);
    let power = 0;
    if (shown) {
      const set = sets[shown];
      set.update({ step: target.zs | 0, p: target.zp || 0, q: target.zq || 0, k: S.zk, t, dt, reduce, snap });
      const l = set.light ? set.light(target.zs | 0, target.zq || 0) : null;
      if (l) {
        // a light that was off jumps to its new place instead of sweeping across the scene
        const move = lampPower < 0.02 ? 1 : ease;
        lampPos.lerp(_v.fromArray(l.pos), move); lampAt.lerp(_v.fromArray(l.at), move); power = l.power * S.zk; fillK = lerp(fillK, l.fill ?? 1, ease);
      }
    }
    lampPower = lerp(lampPower, power, ease);
    lamp.position.copy(lampPos); lamp.target.position.copy(lampAt);
    lamp.intensity = 10 * lampPower;
    lamp.visible = lampPower > 0.01;
    fill.position.copy(lampAt).add(_v.set(-1.2, 0.5, 1.6));
    fill.intensity = 1.4 * lampPower * fillK;
    fill.visible = lampPower > 0.01;
  }
  const _v = new THREE.Vector3();
  return {
    root, kit, update, ensure,
    names: Object.keys(makers),
    get shown() { return shown; },
    /** label anchors of the set that is showing, in house coordinates */
    anchors() { return shown ? sets[shown].anchors : null; },
    input(name, data) { const set = ensure(name); if (set && set.input) set.input(data); },
    /** the camera and state targets a set asks for, one per step (null when there is no such set) */
    shots(name) { const set = ensure(name); return set ? set.shots || [] : null; },
    /** a built set by name (builds it first if needed) */
    get: (name) => ensure(name),
    /** build the sets that are not built yet, one per call; returns false when there is nothing left */
    prebuild() { const next = Object.keys(makers).find((n) => !sets[n]); if (!next) return false; ensure(next); return true; },
    lampPower: () => lampPower
  };
}
