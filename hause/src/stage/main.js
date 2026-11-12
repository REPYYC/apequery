// Stage controller for the HAUSE 3D scene (entry point of the stage bundle).
// boot() probes WebGL2, picks a quality tier (0/1/2), builds the renderer, scene, camera, sky, materials, house, world,
// service systems, interior, underground, lights, thermal view and post-processing, wires up pointer input,
// runs the frame loop and exposes the public API as window.HAUSE_STAGE.
// Short names used throughout: M = materials, T = texture sets, H = house, Wd = world, Sys = service systems,
// Ug = underground, S = eased stage state, E = environment derived from S each frame, vw / vh = viewport size in CSS pixels.
import * as THREE from "three";
import { clamp, lerp, smooth, isMobile } from "./util.js";
import { setAnisotropy, setQuality, glowTexture, markTexture } from "./textures.js";
import { createMaterials } from "./materials.js";
import { createSky } from "./sky.js";
import { createPost } from "./post.js";
import { W, D, LEVELS, createHouse } from "./house.js";
import { createWorld } from "./world.js";
import { createSystems } from "./systems.js";
import { createThermal } from "./thermal.js";
import { createInterior } from "./interior.js";
import { createUnderground } from "./underground.js";
import { mergeStatic, mergeEdges } from "./optimize.js";
import { createSets } from "./sets/index.js";
import { createRoomProbe } from "./probe.js";
// Builds and starts the stage. Without the canvas or WebGL2 it flags the page "no-webgl" and returns early.
function boot() {
  // boot timing (lap(label) records [label, ms since boot started]), the stage canvas and the no-WebGL fallback
  const bootStart = performance.now(),
    laps = [],
    lap = (label) => laps.push([label, Math.round(performance.now() - bootStart)]),
    canvas = document.getElementById("stage"),
    docEl = document.documentElement,
    announceReady = () => window.dispatchEvent(new Event("hause:stage-ready")),
    failNoWebGL = () => {
      docEl.classList.add("no-webgl");
      announceReady();
    };
  if (!canvas) {
    return failNoWebGL();
  }
  // reduced-motion preference and quality tier: 0 or 1 when isMobile() says so, otherwise 1 or 2 (the higher value with
  // six or more CPU cores); a numeric window.HAUSE_QUALITY overrides it
  let reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    mobile = isMobile(),
    cores = navigator.hardwareConcurrency || 4,
    tier = typeof window.HAUSE_QUALITY == "number" ? window.HAUSE_QUALITY : mobile ? (cores >= 6 ? 1 : 0) : cores >= 6 ? 2 : 1;
  // probe WebGL2 on a throwaway canvas, then release that context
  try {
    const probeCanvas = document.createElement("canvas"),
      probeGl = probeCanvas.getContext("webgl2");
    if (!probeGl) {
      return failNoWebGL();
    }
    const loseContextExt = probeGl.getExtension("WEBGL_lose_context");
    if (loseContextExt) {
      loseContextExt.loseContext();
    }
  } catch {
    return failNoWebGL();
  }
  // renderer (built-in antialiasing only on tier 0; the higher tiers render through the multisampled post chain)
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: tier === 0,
      powerPreference: "high-performance",
    });
    if (!renderer.getContext()) {
      throw new Error("no gl");
    }
  } catch {
    return failNoWebGL();
  }
  // a lost context stops the frame loop and flags the page
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    running = false;
    docEl.classList.add("no-webgl");
  });
  // tone mapping and shadow maps
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  // statistics add up over every pass of a frame (shadows, probe, post); the loop resets them once per frame
  renderer.info.autoReset = false;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // renderer-wide clipping plane for the section cut: it clips everything with x < -constant; update() positions it
  const cutPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 1000);
  renderer.clippingPlanes = [cutPlane];
  // texture settings: maximum anisotropy and quality tier
  setAnisotropy(renderer.capabilities.getMaxAnisotropy());
  setQuality(tier);
  // scene, fog and camera
  const scene = new THREE.Scene();
  scene.environmentIntensity = 0.6;
  scene.fog = new THREE.Fog(1317678, 70, 360);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.3, 1400);
  let appliedNear = 0.3,
    // adaptive resolution: the governor lowers this (down to 0.6) while frames are slow and raises it again when they are fast
    resScale = 1,
    upWait = 0,
    upWaitLength = 3;
  lap("renderer");
  // sky, materials and textures, house, world
  const sky = createSky(renderer, scene);
  lap("sky");
  const { M: M, T: T } = createMaterials();
  lap("materials+textures");
  const glowTex = glowTexture(),
    markTex = markTexture(),
    H = createHouse({
      M: M,
      T: T,
      markTex: markTex,
      glowTex: glowTex,
    });
  scene.add(H.house);
  lap("house");
  const Wd = createWorld({
    M: M,
    T: T,
    glowTex: glowTex,
    markTex: markTex,
    tier: tier,
    reduce: reduce,
  });
  scene.add(Wd.world);
  lap("world");
  // service systems, interior and underground
  const Sys = createSystems({
      house: H.house,
      reduce: reduce,
    }),
    interior = createInterior({
      M: M,
      layers: H.layers,
      glowTex: glowTex,
    }),
    Ug = createUnderground({
      scene: scene,
      M: M,
      tier: tier,
      reduce: reduce,
    });
  // merge static geometry to cut draw calls: every house layer (its edge lines first), then the world props
  Object.values(H.layers).forEach((layer) => {
    mergeEdges(layer, H.edgeMat);
    mergeStatic(layer);
  });
  mergeStatic(Wd.props);
  // close-up sets (Act II): the mast and meter are built now, the detailed sets when they are first needed
  const Sets = createSets({
    M: M,
    H: H,
    Ug: Ug,
    Wd: Wd,
    tier: tier,
    reduce: reduce,
    glowTex: glowTex,
  });
  H.house.add(Sets.root);
  lap("systems+interior+underground+merge");
  // lights: hemisphere fill, shadow-casting sun, moon
  const hemi = new THREE.HemisphereLight(10466518, 1709842, 0.5),
    sun = new THREE.DirectionalLight(16769728, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(tier >= 2 ? 2048 : 1024, tier >= 2 ? 2048 : 1024);
  Object.assign(sun.shadow.camera, {
    left: -26,
    right: 26,
    top: 26,
    bottom: -26,
    near: 5,
    far: 240,
  });
  // the sun's shadow map is redrawn only when something that changes it has changed (see update)
  sun.shadow.autoUpdate = false;
  sun.shadow.bias = -0.0003;
  sun.shadow.normalBias = 0.04;
  sun.shadow.radius = tier >= 2 ? 2.5 : 1.5;
  sun.target.position.set(0, 3, 0);
  const moon = new THREE.DirectionalLight(9085656, 0.6);
  moon.position.copy(sky.U.uMoonDir.value).multiplyScalar(60);
  scene.add(hemi, sun, sun.target, moon);
  // S = eased stage state; target = the values S eases toward, plus the selections that are not eased;
  // KEYS = the keys of S that update() eases every frame (theta is eased separately).
  // Camera keys: radius / theta / phi orbit the look-at point (fx, ty, fz), tx shifts the camera sideways, lensY shifts
  // the lens vertically, orbit is the idle sway. time = hour of day, season = position in the year (0..1), cutX = x of
  // the section cut. The other keys are the amounts of the views and effects.
  let S = {
      explode: 0,
      radius: 36,
      theta: 0.55,
      phi: 1.36,
      ty: 4.2,
      tx: -6,
      time: 19.4,
      marks: 0,
      ground: 1,
      orbit: 0.04,
      visible: 1,
      ghost: 0,
      cut: 0,
      lift: 0,
      thermal: 0,
      netE: 0,
      netW: 0,
      netA: 0,
      netR: 0,
      lensY: 0,
      fx: 0,
      fz: 0,
      beacons: 0,
      section: 0,
      cutX: 0.45,
      season: 0,
      snowfall: 1,
      smoke: 1,
      melt: 0,
      icicles: 0,
      aurora: 0,
      // zk = how far the close-up set named by target.zoom is in (0..1), dof = depth-of-field strength (0 = off)
      zk: 0,
      dof: 0,
    },
    target = Object.assign(
      {
        level: null,
        focusSys: null,
        netFocus: null,
        ugFocus: null,
        interactive: false,
        // close-up set: its name, the current step, the scroll progress through its chapter and through the step
        zoom: null,
        zs: 0,
        zp: 0,
        zq: 0,
      },
      S,
    ),
    KEYS = [
      "explode",
      "radius",
      "phi",
      "ty",
      "tx",
      "time",
      "marks",
      "ground",
      "visible",
      "ghost",
      "cut",
      "lift",
      "thermal",
      "netE",
      "netW",
      "netA",
      "netR",
      "lensY",
      "fx",
      "fz",
      "beacons",
      "section",
      "cutX",
      "season",
      "snowfall",
      "smoke",
      "melt",
      "icicles",
      "aurora",
      "zk",
      "dof",
    ],
    // running clock in seconds, viewport size, pixel ratio, loop flag, drag rotation, clock time of the last environment refresh
    elapsed = 0,
    vw = 1,
    vh = 1,
    pixelRatio = 1,
    running = true,
    dragTheta = 0,
    lastEnvRefresh = -9,
    // velocities of the eased keys (see damp): the stage follows the scroll on a critically damped spring, so every move
    // starts and ends gently instead of jumping off at full speed the moment the target changes
    vel = {},
    // public API, exposed as window.HAUSE_STAGE
    api = {
      set(values) {
        Object.assign(target, values);
      },
      highlight(sysKey) {
        target.focusSys = sysKey;
      },
      selectLevel(levelKey) {
        target.level = levelKey;
      },
      levels: LEVELS.map((level) => level.key),
      // callbacks the page can set
      onPick: null,
      onHoverLevel: null,
      onFrame: null,
      onThermal: null,
      // rooms-lit count (0..7), refreshed by update()
      roomsLit: 0,
      get quality() {
        return tier;
      },
    };
  window.HAUSE_STAGE = api;
  // system highlight: the focused system's materials glow in the highlight colour, the others return to their base emissive
  let highlightColor = new THREE.Color(14256718),
    highlightedSys = null;
  function applyHighlight(sysKey) {
    highlightedSys = sysKey;
    Object.keys(H.sys).forEach((key) =>
      H.sys[key].mats.forEach((mat) => {
        if (key === sysKey) {
          mat.emissive.copy(highlightColor);
          mat.emissiveIntensity = 0.9;
        } else {
          mat.emissive.copy(mat.userData.baseEmissive);
          mat.emissiveIntensity = 1;
        }
      }),
    );
  }
  // house materials tagged shell or wall: they fade in the x-ray (ghost) and cut-away views
  const shellMats = new Set();
  H.house.traverse((obj) => {
    if (!(!obj.isMesh || !obj.material)) {
      (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach((mat) => {
        if (mat.userData && (mat.userData.shell || mat.userData.wall)) {
          shellMats.add(mat);
        }
      });
    }
  });
  let shellKey = "",
    wasFaded = false;
  H.edgeMat.visible = false;
  // applies the ghost / cut fade to the shell materials and the edge lines; does nothing while both values are unchanged
  function applyShell(ghost, cut) {
    const key = ghost.toFixed(3) + "|" + cut.toFixed(3);
    if (key === shellKey) {
      return;
    }
    shellKey = key;
    const faded = ghost > 0.01 || cut > 0.01;
    shellMats.forEach((mat) => {
      const isPane = mat.userData.pane,
        ghostFade = mat.userData.shell ? ghost * (isPane ? 0.75 : 0.9) : 0,
        cutFade = mat.userData.wall ? cut * (isPane ? 0.8 : 0.9) : 0;
      if (faded !== wasFaded) {
        mat.transparent = faded || !!mat.userData.alwaysTransparent;
        mat.needsUpdate = true;
      }
      mat.opacity = 1 - Math.max(ghostFade, cutFade);
      mat.depthWrite = Math.max(ghostFade, cutFade) < 0.4;
    });
    wasFaded = faded;
    H.edgeMat.opacity = Math.max(ghost * 0.28, cut * 0.16);
    H.edgeMat.visible = H.edgeMat.opacity > 0.01;
  }
  // thermal camera view (objects under the system groups keep their materials); tone mapping is off while it is on
  const thermal = createThermal({
      scene: scene,
      M: M,
      skipParents: [...Object.values(Sys.groups), Sets.root],
      onChange: (thermalOn) => {
        Wd.setThermal(thermalOn);
        renderer.toneMapping = thermalOn ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
        if (api.onThermal) {
          api.onThermal(thermalOn);
        }
      },
    }),
    // scratch vector for toScreen()
    projected = new THREE.Vector3();
  // projects a point given in obj's local space to viewport pixels; behind is set when its projected depth is beyond 1
  function toScreen(obj, localPos) {
    projected.copy(localPos);
    obj.localToWorld(projected);
    projected.project(camera);
    return {
      x: (projected.x * 0.5 + 0.5) * vw,
      y: (-projected.y * 0.5 + 0.5) * vh,
      behind: projected.z > 1,
    };
  }
  // one anchor point per level, in that level's group: 1.4 beyond the +x wall, on the front face, at a per-level height
  const vec3 = (x, y, z) => new THREE.Vector3(x, y, z),
    levelAnchors = LEVELS.map((level) => ({
      obj: H.layers[level.key],
      offset: vec3(
        W / 2 + 1.4,
        {
          roof: 7.8,
          upper: 4.9,
          main: 1.8,
          basement: -1.2,
          below: -2.8,
        }[level.key],
        D / 2,
      ),
    }));
  // screen positions of the level anchors, and of the named house and underground anchors
  api.projectLevels = () => levelAnchors.map((anchor) => toScreen(anchor.obj, anchor.offset));
  api.projectAnchors = () => {
    const points = {};
    Object.keys(H.ANCHORS).forEach((anchorName) => {
      points[anchorName] = toScreen(H.house, H.ANCHORS[anchorName]);
    });
    Object.keys(Ug.ANCHORS).forEach((anchorName) => {
      points[anchorName] = toScreen(H.house, Ug.ANCHORS[anchorName]);
    });
    // anchors of the close-up set that is showing, under "z.<name>"
    const setAnchors = Sets.anchors();
    if (setAnchors) {
      Object.keys(setAnchors).forEach((anchorName) => {
        points["z." + anchorName] = toScreen(H.house, setAnchors[anchorName]);
      });
    }
    return points;
  };
  // close-up sets: their names, input from the page (for example the loads switched on in the panel), and a way to build
  // the remaining sets ahead of time
  api.zoomSets = Sets.names;
  // colour grade of the final image, set by the page's theme: { shadow: [r, g, b], high: [r, g, b], sat }
  api.setLook = (values) => {
    Object.assign(gradeLook, values || {});
  };
  // the camera and state targets a set asks for, one per step of its chapter (builds the set if it is not built yet)
  api.zoomShots = (name) => Sets.shots(name);
  api.zoomInput = (name, data) => Sets.input(name, data);
  api.prebuildZoom = () => Sets.prebuild();
  // pointer state (mouse.nx / ny = raw position in -1..1, mouse.x / y = eased), the current drag, and picking
  let mouse = {
      x: 0,
      y: 0,
      nx: 0,
      ny: 0,
    },
    drag = null,
    raycaster = new THREE.Raycaster(),
    pickables = [];
  H.house.traverse((obj) => {
    // pickable: visible, non-instanced meshes not flagged noPick whose bounding radius is above 0.3
    if (!(!obj.isMesh || obj.isInstancedMesh || !obj.visible || obj.userData.noPick)) {
      obj.geometry.computeBoundingSphere();
      if (obj.geometry.boundingSphere.radius > 0.3) {
        pickables.push(obj);
      }
    }
  });
  // level key of the first object, walking up from obj, that carries userData.level (null if there is none)
  const levelOf = (obj) => {
    while (obj && !obj.userData.level) {
      obj = obj.parent;
    }
    if (obj) {
      return obj.userData.level;
    } else {
      return null;
    }
  };
  // level and system under a viewport point, or null
  api.pickAt = (clientX, clientY) => {
    raycaster.setFromCamera(
      {
        x: (clientX / vw) * 2 - 1,
        y: -(clientY / vh) * 2 + 1,
      },
      camera,
    );
    const hit = raycaster.intersectObjects(pickables, false)[0];
    if (hit) {
      return {
        level: levelOf(hit.object),
        sys: hit.object.userData.sys || null,
      };
    } else {
      return null;
    }
  };
  api.pickCount = () => pickables.length;
  // pointer move anywhere on the page: parallax target, and the orbit rotation while dragging
  window.addEventListener(
    "pointermove",
    (event) => {
      mouse.nx = (event.clientX / vw) * 2 - 1;
      mouse.ny = (event.clientY / vh) * 2 - 1;
      if (drag) {
        dragTheta = drag.theta0 - (event.clientX - drag.x) * 0.006;
      }
    },
    {
      passive: true,
    },
  );
  // drag start (interactive mode only)
  canvas.addEventListener("pointerdown", (event) => {
    if (target.interactive) {
      drag = {
        x: event.clientX,
        theta0: dragTheta,
        t: performance.now(),
      };
    }
  });
  // drag end; a short press that barely moved counts as a click and reports the picked level and system
  window.addEventListener("pointerup", (event) => {
    if (!drag) {
      return;
    }
    const isClick = Math.abs(event.clientX - drag.x) < 6 && performance.now() - drag.t < 400;
    drag = null;
    if (isClick && target.interactive) {
      raycaster.setFromCamera(
        {
          x: (event.clientX / vw) * 2 - 1,
          y: -(event.clientY / vh) * 2 + 1,
        },
        camera,
      );
      const hit = raycaster.intersectObjects(pickables, false)[0];
      if (hit && api.onPick) {
        api.onPick(levelOf(hit.object), hit.object.userData.sys || null);
      }
    }
  });
  // hover: cursor and onHoverLevel callback
  canvas.addEventListener("pointermove", (event) => {
    if (!target.interactive || drag) {
      return;
    }
    raycaster.setFromCamera(
      {
        x: (event.clientX / vw) * 2 - 1,
        y: -(event.clientY / vh) * 2 + 1,
      },
      camera,
    );
    const hit = raycaster.intersectObjects(pickables, false)[0],
      hoverLevel = hit ? levelOf(hit.object) : null;
    canvas.style.cursor = hoverLevel ? "pointer" : "grab";
    if (api.onHoverLevel) {
      api.onHoverLevel(hoverLevel);
    }
  });
  // post-processing chain (tiers 1 and 2 only); rebuilt when the governor lowers the tier
  let post = null;
  function rebuildPost() {
    if (post) {
      post.dispose();
    }
    post = tier >= 1 ? createPost(renderer, scene, camera, tier, Math.round(vw * pixelRatio), Math.round(vh * pixelRatio)) : null;
  }
  // viewport size, capped pixel ratio, camera aspect and field of view (wider on narrow screens)
  // on touch screens the browser's toolbar slides in and out while the page scrolls, changing only the height, by a
  // little: the canvas keeps the taller size (its CSS height is the large viewport) rather than reallocating every
  // render target mid-scroll. A width change (rotation, a new window size) always resizes.
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  let resizeTimer = 0;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const w = window.innerWidth,
        h = window.innerHeight;
      if (coarse && w === vw && h <= vh && h > vh * 0.72) {
        return;
      }
      resize();
    }, 90);
  }
  function resize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, tier >= 2 ? 2 : tier === 1 ? 1.5 : 1.25) * resScale;
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(vw, vh, false);
    camera.aspect = vw / vh;
    camera.fov = vw < 700 ? 44 : 30;
    camera.updateProjectionMatrix();
    if (post) {
      post.setSize(Math.round(vw * pixelRatio), Math.round(vh * pixelRatio));
    }
  }
  window.addEventListener("resize", onResize);
  resize();
  rebuildPost();
  // direction toward the sun, written by solar()
  const sunDir = new THREE.Vector3();
  // sun position from the hour of day and the season (0..1): updates sunDir and returns the elevation in degrees.
  // Day length and noon elevation follow the season; the sun rises at +z, peaks toward -x and sets at -z.
  function solar(hour, season) {
    const summer = 0.5 - 0.5 * Math.cos(season * Math.PI * 2),
      sunrise = lerp(7.5, 5, summer),
      sunset = lerp(18.3, 21.9, summer),
      noonElev = lerp(24, 62, summer),
      dayAngle = (Math.PI * (hour - sunrise)) / (sunset - sunrise),
      elev = noonElev * Math.sin(dayAngle),
      elevRad = (elev * Math.PI) / 180;
    sunDir.set(-Math.sin(dayAngle) * Math.cos(elevRad), Math.sin(elevRad), Math.cos(dayAngle) * Math.cos(elevRad)).normalize();
    return elev;
  }
  // grass tint through the year as [season, [r, g, b]] stops; grassTint() writes the interpolated colour into out
  const grassStops = [
    [0, [0.62, 0.6, 0.55]],
    [0.16, [0.7, 0.7, 0.55]],
    [0.3, [0.8, 1, 0.62]],
    [0.5, [0.74, 0.95, 0.55]],
    [0.68, [1.05, 0.88, 0.5]],
    [0.82, [1, 0.72, 0.45]],
    [1, [0.62, 0.6, 0.55]],
  ];
  function grassTint(season, out) {
    let i = 0;
    while (i < grassStops.length - 2 && grassStops[i + 1][0] <= season) {
      i++;
    }
    const [startAt, startRgb] = grassStops[i],
      [endAt, endRgb] = grassStops[i + 1],
      blend = (season - startAt) / (endAt - startAt);
    out.setRGB(lerp(startRgb[0], endRgb[0], blend), lerp(startRgb[1], endRgb[1], blend), lerp(startRgb[2], endRgb[2], blend));
  }
  // scratch vectors: camera look-at point, camera position, camera right axis, chimney top, line of sight in view space
  const look = new THREE.Vector3(),
    camPos = new THREE.Vector3(),
    right = new THREE.Vector3(),
    chimney = new THREE.Vector3(),
    sightV = new THREE.Vector3(),
    // E = environment derived from S every frame, passed to the house, world and underground updates
    E = {
      ug: 0,
      section: 0,
      cutX: 0.45,
      ground: 1,
      ghost: 0,
      cut: 0,
      snow: 1,
      roofSnow: 1,
      snowfall: 1,
      rain: 0,
      leaves: 0,
      smoke: 1,
      melt: 0,
      icicles: 0,
      grow: 0,
      leafTint: new THREE.Color(0.3, 0.5, 0.15),
      explode: 0,
      lift: 0,
      zk: 0,
    },
    // leaf colour through the year (same stop format as grassStops); leafTint() writes the interpolated colour into out
    leafStops = [
      [0, [0.3, 0.3, 0.3]],
      [0.22, [0.62, 0.8, 0.28]],
      [0.36, [0.4, 0.62, 0.2]],
      [0.55, [0.3, 0.5, 0.15]],
      [0.7, [0.95, 0.7, 0.18]],
      [0.82, [0.9, 0.35, 0.1]],
      [1, [0.5, 0.2, 0.08]],
    ];
  function leafTint(season, out) {
    let i = 0;
    while (i < leafStops.length - 2 && leafStops[i + 1][0] <= season) {
      i++;
    }
    const [startAt, startRgb] = leafStops[i],
      [endAt, endRgb] = leafStops[i + 1],
      blend = (season - startAt) / (endAt - startAt);
    out.setRGB(lerp(startRgb[0], endRgb[0], blend), lerp(startRgb[1], endRgb[1], blend), lerp(startRgb[2], endRgb[2], blend));
  }
  // colours used for the hemisphere light, and the lens offset currently applied to the camera
  let white = new THREE.Color(16777215),
    snowBounce = new THREE.Color(),
    appliedLensY = 0,
    // distance from the camera to the look-at point: the focus distance for the depth of field
    focusDist = 30;
  // indoor light: indoorK eases to 1 while the camera is inside the closed house during a close-up; the room probe is
  // captured a moment after each step change (probeKey = what it was captured for, probeAge = seconds since the change)
  const roomProbe = tier >= 1 ? createRoomProbe(renderer, scene) : null,
    probePos = new THREE.Vector3();
  let indoorK = 0,
    skyEnv = null,
    probeKey = "",
    probeAge = 0,
    probeShots = 0,
    // what the sun's shadow map was last drawn for, and how long ago
    shadowKey = "",
    shadowAge = 9;
  // the page theme's colour grade (see api.setLook)
  const gradeLook = {
    shadow: [0.96, 0.99, 1.05],
    high: [1.04, 1.0, 0.95],
    sat: 1.05,
  };
  // critically damped spring (the "smooth damp" of game engines): moves value toward goal, reaching it in about
  // smoothTime * 2 seconds with no overshoot; the velocity is kept per key in vel
  function damp(key, value, goal, smoothTime, dt, snap) {
    if (snap || !(dt > 0)) {
      vel[key] = 0;
      return goal;
    }
    const omega = 2 / smoothTime,
      x = omega * dt,
      decay = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x),
      change = value - goal,
      v = vel[key] || 0,
      temp = (v + omega * change) * dt;
    vel[key] = (v - omega * temp) * decay;
    let next = goal + (change + temp) * decay;
    // never pass the goal
    if (goal - value > 0 === next > goal) {
      next = goal;
      vel[key] = 0;
    }
    return next;
  }
  // advances the stage by dt seconds; snap = true jumps every eased value straight to its target
  function update(dt, snap) {
    elapsed += dt;
    const ease = snap ? 1 : 1 - Math.exp(-dt * (reduce ? 30 : 4.2));
    // spring the state toward its target; theta adds the slow idle orbit (unless reduced motion) and the drag rotation,
    // and follows a drag more tightly than it follows the scroll
    const smoothTime = reduce ? 0.04 : 0.3;
    KEYS.forEach((key) => {
      S[key] = damp(key, S[key], target[key], smoothTime, dt, snap);
    });
    S.theta = damp(
      "theta",
      S.theta,
      target.theta + (reduce ? 0 : Math.sin(elapsed * 0.08) * target.orbit) + dragTheta,
      drag ? Math.min(smoothTime, 0.12) : smoothTime,
      dt,
      snap,
    );
    // layer heights: exploded view, roof / upper / main lifted off in turn, and the selected level raised a little
    LEVELS.forEach((level) => {
      const layer = H.layers[level.key],
        liftY =
          level.key === "roof"
            ? 18 * clamp(S.lift, 0, 1)
            : level.key === "upper"
              ? 12 * clamp(S.lift - 1, 0, 1)
              : level.key === "main"
                ? 9 * clamp(S.lift - 2, 0, 1)
                : 0;
      layer.position.y = lerp(layer.position.y, level.dy * S.explode + liftY + (target.level === level.key ? 0.9 : 0), ease);
    });
    // derived environment: the season (wrapped to 0..1) sets snow cover, growth, rain, falling leaves, melt, icicles,
    // snowfall and chimney smoke
    const season = ((S.season % 1) + 1) % 1,
      snow = Math.max(1 - smooth(0.1, 0.3, season), smooth(0.84, 1, season)),
      roofSnow = Math.max(1 - smooth(0.06, 0.22, season), smooth(0.88, 1, season));
    E.ug = 0;
    E.beacons = S.beacons;
    E.section = S.section;
    E.cutX = S.cutX;
    E.ground = S.ground;
    E.ghost = S.ghost;
    E.cut = S.cut;
    E.lift = S.lift;
    E.zk = S.zk;
    E.snow = snow;
    E.roofSnow = roofSnow;
    E.explode = S.explode;
    E.grow = smooth(0.2, 0.34, season) * (1 - smooth(0.78, 0.93, season));
    leafTint(season, E.leafTint);
    E.rain = smooth(0.2, 0.24, season) * (1 - smooth(0.3, 0.34, season)) * (reduce ? 0 : 1);
    E.leaves = smooth(0.72, 0.78, season) * (1 - smooth(0.9, 0.95, season)) * (reduce ? 0 : 1);
    E.melt = Math.max(S.melt, 1 - roofSnow);
    E.icicles = Math.max(S.icicles, smooth(0.03, 0.1, season) * (1 - smooth(0.17, 0.26, season)) + smooth(0.9, 0.97, season) * 0.5);
    E.snowfall = S.snowfall * (reduce ? 0 : 1) * (season < 0.05 || season > 0.93 ? 1 : 0);
    E.smoke = S.smoke * (1 - smooth(0.12, 0.3, season) + smooth(0.8, 0.95, season));
    // grass tint, sun position, sky and fog
    grassTint(season, Wd.U.uTint.value);
    const elev = solar(S.time, season),
      daylight = smooth(-5, 10, elev);
    sky.update(
      {
        elev: elev,
        daylight: daylight,
        sunDir: sunDir,
        thermal: S.thermal,
        aurora: S.aurora * (1 - daylight),
        cloud: lerp(0.38, 0.62, smooth(0, 1, Math.abs(Math.sin(season * Math.PI * 2)))),
        snowy: snow > 0.5,
        voidK: clamp(1 - S.ground, 0, 1),
      },
      elapsed,
    );
    sky.follow(camera.position);
    scene.fog.color.copy(sky.horizon);
    // lights: the sun turns warmer toward the horizon; sun, hemisphere and moon fade out in the thermal view
    const lowSun = 1 - smooth(0, 28, elev);
    sun.position.copy(sunDir).multiplyScalar(110).add(sun.target.position);
    sun.color.setRGB(1, lerp(0.95, 0.62, lowSun), lerp(0.88, 0.4, lowSun));
    sun.intensity = 3.6 * smooth(-4, 6, elev) * (1 - S.thermal);
    hemi.color.copy(sky.zenith).lerp(white, 0.4);
    hemi.groundColor.setRGB(0.1, 0.09, 0.08).lerp(snowBounce.setRGB(0.55, 0.6, 0.72), snow * 0.8 * (0.25 + 0.75 * daylight));
    hemi.intensity = (0.5 + 0.35 * daylight + 0.25 * S.cut) * (1 - S.thermal);
    moon.intensity = 0.7 * (1 - daylight) * (1 - S.thermal);
    scene.environmentIntensity = 0.5 + 0.4 * daylight + 0.1 * S.cut;
    renderer.toneMappingExposure = thermal.on ? 1 : lerp(1.2, 0.95, daylight);
    // let the sky refresh its environment map, at most every 0.4 s (forced when snapping)
    if (roomProbe && skyEnv && scene.environment === roomProbe.texture) {
      scene.environment = skyEnv;
    }
    if (snap || elapsed - lastEnvRefresh > 0.4) {
      sky.refreshEnv(snap);
      lastEnvRefresh = elapsed;
    }
    skyEnv = scene.environment;
    // redraw the sun's shadows when the sun, the house's layers, the cut or the snow change, every frame while an
    // outdoor close-up is animating, and otherwise a few times a second as a safety net
    shadowAge += dt;
    const nextShadowKey = `${sunDir.x.toFixed(3)},${sunDir.y.toFixed(3)},${sunDir.z.toFixed(3)},${S.explode.toFixed(2)},${S.lift.toFixed(2)},${S.cut.toFixed(2)},${S.ghost.toFixed(1)},${S.section.toFixed(2)},${S.cutX.toFixed(2)},${snow.toFixed(2)},${target.level},${Sets.shown}`;
    if (snap || nextShadowKey !== shadowKey || shadowAge > 0.3 || (S.zk > 0.02 && indoorK < 0.9)) {
      sun.shadow.needsUpdate = true;
      shadowKey = nextShadowKey;
      shadowAge = 0;
    }
    // shell fade (the ghost fade backs off as the house explodes), interior, house and world
    applyShell(S.ghost * (1 - clamp(S.explode * 4, 0, 1)), S.cut);
    interior.update(1 - daylight, S.cut);
    const roomsOn = H.update(E, ease, elapsed, daylight, snap ? 100 : dt);
    api.roomsLit = Math.round(clamp(roomsOn, 0, 7));
    H.extra.chimneyTop.getWorldPosition(chimney);
    Wd.update(E, elapsed, dt, daylight, look, chimney, clamp(roomsOn / 9, 0, 1));
    // system markers: ease their opacity, pulse the focused system's markers, switch the highlight when the focus changes
    const focusSys = target.focusSys;
    Object.keys(H.sys).forEach((key) =>
      H.sys[key].marks.forEach((mark) => {
        const markOpacity = focusSys ? (key === focusSys ? 1 : S.marks * 0.35) : S.marks;
        mark.material.opacity = lerp(mark.material.opacity, markOpacity, ease);
        mark.scale.setScalar(0.95 * (key === focusSys ? 1 + Math.sin(elapsed * 4) * 0.12 : 1) * (1 + S.explode * 0.25));
      }),
    );
    if (focusSys !== highlightedSys) {
      applyHighlight(focusSys);
    }
    // systems, underground (returns the x of the section cut, which positions the clipping plane) and thermal view
    Sys.update(S, target.netFocus, elapsed, dt);
    const cutPlaneX = Ug.update(E, target.ugFocus, elapsed, dt);
    cutPlane.constant = -cutPlaneX;
    thermal.set(target.thermal > 0.5);
    thermal.time.value = elapsed;
    Sets.update(S, target, elapsed, dt, snap, indoorK);
    // camera: orbit around the look-at point with a little mouse parallax, then shift sideways along its right axis;
    // narrow screens look lower, stand further back and skip the shift
    mouse.x = lerp(mouse.x, mouse.nx, ease * 0.6);
    mouse.y = lerp(mouse.y, mouse.ny, ease * 0.6);
    const theta = S.theta + mouse.x * 0.08,
      // close-ups may look straight down or up from below; the wide views stay above the horizon
      phi = clamp(S.phi + mouse.y * 0.04, 0.35 - 0.27 * S.zk, 1.5 + 1.2 * S.zk),
      narrow = vw < 700;
    // the near plane follows the camera distance so close-ups do not clip; narrow screens look a little below the subject
    const near = clamp(S.radius * 0.012, 0.02, 0.3);
    if (Math.abs(near - appliedNear) > appliedNear * 0.02) {
      appliedNear = near;
      camera.near = near;
      camera.updateProjectionMatrix();
    }
    look.set(S.fx, S.ty + (narrow ? -1.2 * clamp(S.radius / 30, 0, 1) : 0), S.fz);
    camPos
      .set(Math.sin(phi) * Math.sin(theta), Math.cos(phi), Math.sin(phi) * Math.cos(theta))
      .multiplyScalar(S.radius * (narrow ? 1.25 : 1))
      .add(look);
    camera.position.copy(camPos);
    camera.lookAt(look);
    camera.updateMatrixWorld();
    right.setFromMatrixColumn(camera.matrixWorld, 0);
    camera.position.addScaledVector(right, narrow ? 0 : S.tx);
    camera.updateMatrixWorld();
    // view-space direction and distance from the camera to the look-at point, for the world's sight uniform
    sightV.copy(look).applyMatrix4(camera.matrixWorldInverse);
    const sightDist = Math.max(0.001, sightV.length());
    focusDist = sightDist;
    Wd.sight.value.set(sightV.x / sightDist, sightV.y / sightDist, sightV.z / sightDist, sightDist);
    // is the camera inside the closed house (under the roof line, nothing cut, lifted or made of glass)?
    const cp = camera.position,
      underRoof = cp.y < 6.2 || cp.y < 6.2 + (5 - Math.abs(cp.x)) * 0.72,
      inHouse = Math.abs(cp.x) < 4.95 && Math.abs(cp.z) < 3.95 && cp.y > -2.95 && underRoof,
      sealed = S.cut < 0.05 && S.ghost < 0.05 && S.lift < 0.05 && S.explode < 0.05 && S.section < 0.05 && S.thermal < 0.05,
      indoorTarget = S.zk > 0.5 && inHouse && sealed ? 1 : 0;
    indoorK = snap ? indoorTarget : lerp(indoorK, indoorTarget, 1 - Math.exp(-dt * 7));
    // indoors the sky no longer lights the room: the hemisphere light fades and the room's own probe takes over
    // sealed in the basement there is nothing of the street to see: skip drawing it
    Wd.world.visible = !(indoorK > 0.98 && cp.y < 0.2);
    hemi.intensity *= 1 - 0.82 * indoorK;
    moon.intensity *= 1 - indoorK;
    if (roomProbe) {
      const key = `${target.zoom}:${target.zs}`;
      if (key !== probeKey) {
        probeKey = key;
        probeAge = 0;
        probeShots = 0;
      }
      probeAge += dt;
      // one capture as soon as the camera is in, and one more once the work light and the set have settled
      if (indoorK > 0.9 && (snap || (probeShots === 0 && probeAge > 0.25) || (probeShots === 1 && probeAge > 1.4))) {
        probePos.copy(look).lerp(cp, 0.4);
        roomProbe.capture(probePos);
        probeShots = snap ? 2 : probeShots + 1;
      }
      const useProbe = indoorK > 0.5 && roomProbe.texture;
      if (useProbe) {
        scene.environment = roomProbe.texture;
      }
      // the swap happens while the environment light is dipped to nothing, so it never pops
      const dip = clamp(Math.abs(indoorK - 0.5) * 4 - 0.4, 0, 1);
      scene.environmentIntensity = (useProbe ? 1.15 : scene.environmentIntensity) * dip;
    } else {
      scene.environmentIntensity *= 1 - 0.7 * indoorK;
    }
    // vertical lens shift (camera view offset), re-applied only when lensY changes
    if (Math.abs(S.lensY - appliedLensY) > 0.0001) {
      appliedLensY = S.lensY;
      if (Math.abs(appliedLensY) < 0.0001) {
        camera.clearViewOffset();
      } else {
        camera.setViewOffset(vw, vh, 0, -appliedLensY * vh, vw, vh);
      }
    }
    // canvas fade
    canvas.style.opacity = S.visible.toFixed(3);
  }
  // frame-time governor state and the previous frame's timestamp
  let gov = {
      n: 0,
      sum: 0,
      last: 0,
    },
    lastFrameTime = performance.now();
  // renders through the post chain when there is one, otherwise directly; ambient occlusion is off in the ghost, cut,
  // thermal and exploded views, and bloom is stronger when the sun is low
  function renderFrame(dt) {
    if (post) {
      const gtao = post.gtao,
        skipAO = S.ghost > 0.05 || S.cut > 0.05 || thermal.on || S.explode > 0.05;
      if (gtao) {
        gtao.enabled = !skipAO;
      }
      if (post.bloom) {
        // stronger when the sun is low; eased back in the close-ups, where lit windows and lamps fill much more of the frame
        post.bloom.strength = thermal.on ? 0.9 : (0.3 + 0.55 * (1 - clamp(sunDir.y * 4, 0, 1))) * (1 - 0.45 * S.zk);
      }
      post.grade.uniforms.uSat.value = thermal.on ? 1 : gradeLook.sat;
      post.grade.uniforms.uShadow.value.fromArray(thermal.on ? [1, 1, 1] : gradeLook.shadow);
      post.grade.uniforms.uHigh.value.fromArray(thermal.on ? [1, 1, 1] : gradeLook.high);
      post.grade.uniforms.uCool.value = thermal.on ? 0 : gradeLook.cool || 0;
      post.setDof(thermal.on ? 0 : S.dof, focusDist, camera.near, camera.far);
      post.render(dt, elapsed);
    } else {
      renderer.render(scene, camera);
    }
  }
  // frame-time governor: skips 40 warm-up frames, averages the next 90 and, when that average is too slow, drops tier 2
  // to tier 1 (with a smaller shadow map); after that it scales the resolution down and up to hold the frame rate.
  // Never when window.HAUSE_QUALITY is a number
  function govern(now) {
    const frameMs = now - gov.last;
    gov.last = now;
    if (!(frameMs > 250 || frameMs <= 0) && (gov.n++, gov.n > 40 && (gov.sum += frameMs), gov.n === 130)) {
      const avgMs = gov.sum / 90;
      if (avgMs > 26 && tier > 1 && typeof window.HAUSE_QUALITY != "number") {
        tier--;
        rebuildPost();
        resize();
        sun.shadow.mapSize.set(1024, 1024);
        if (sun.shadow.map) {
          sun.shadow.map.dispose();
        }
        sun.shadow.map = null;
      } else if (typeof window.HAUSE_QUALITY != "number") {
        // adaptive resolution: under about 48 fps render fewer pixels, above about 80 fps give them back
        // (a display's refresh rate hides how much headroom there is, so stepping back up is tried only after a wait
        // that doubles every time the resolution has had to come down)
        let nextScale = resScale;
        if (avgMs > 21) {
          nextScale = Math.max(0.6, resScale * 0.85);
          upWait = upWaitLength;
          upWaitLength = Math.min(32, upWaitLength * 2);
        } else if (avgMs < 17.6 && resScale < 1) {
          if (upWait > 0) {
            upWait--;
          } else {
            nextScale = Math.min(1, resScale * 1.12);
          }
        }
        if (Math.abs(nextScale - resScale) > 0.01) {
          resScale = nextScale;
          resize();
        }
      }
      gov = {
        n: 0,
        sum: 0,
        last: now,
      };
    }
  }
  // frame loop (dt capped at 50 ms)
  function loop(now) {
    if (!running) {
      return;
    }
    const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
    lastFrameTime = now;
    renderer.info.reset();
    update(dt, false);
    renderFrame(dt);
    govern(now);
    if (api.onFrame) {
      api.onFrame();
    }
    requestAnimationFrame(loop);
  }
  // pause / resume the loop; settle() snaps everything to its target and renders one frame
  api.pause = () => {
    running = false;
  };
  api.resume = () => {
    if (!running) {
      running = true;
      lastFrameTime = performance.now();
      gov.last = 0;
      requestAnimationFrame(loop);
    }
  };
  api.settle = () => {
    renderer.info.reset();
    update(0.016, true);
    update(0.016, true);
    renderFrame(0.016);
    if (api.onFrame) {
      api.onFrame();
    }
  };
  // debug handles and render statistics
  if (window.HAUSE_DEBUG) {
    api.debug = {
      scene: scene,
      camera: camera,
      renderer: renderer,
      S,
      target: target,
      H: H,
      Wd: Wd,
      sky: sky,
      sun: sun,
      hemi: hemi,
      moon: moon,
      Sets: Sets,
      get post() {
        return post;
      },
    };
  }
  api.info = () => ({
    tier: tier,
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    pixelRatio: pixelRatio,
    indoor: +indoorK.toFixed(2),
    worldDrawn: Wd.world.visible,
    buildMs: api.buildMs,
  });
  // first render, then start the loop and announce that the stage is ready
  lap("pre-first-render");
  api.settle();
  lap("first-render");
  api.laps = laps;
  requestAnimationFrame((now) => {
    lastFrameTime = now;
    requestAnimationFrame(loop);
  });
  api.buildMs = Math.round(performance.now() - bootStart);
  docEl.classList.add("has-webgl");
  announceReady();
}
boot();
