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
function boot() {
  let i = performance.now(),
    e = [],
    t = (H) => e.push([H, Math.round(performance.now() - i)]),
    n = document.getElementById("stage"),
    s = document.documentElement,
    r = () => window.dispatchEvent(new Event("hause:stage-ready")),
    a = () => {
      s.classList.add("no-webgl");
      r();
    };
  if (!n) {
    return a();
  }
  let o = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    c = isMobile(),
    l = navigator.hardwareConcurrency || 4,
    u = typeof window.HAUSE_QUALITY == "number" ? window.HAUSE_QUALITY : c ? (l >= 6 ? 1 : 0) : l >= 6 ? 2 : 1;
  try {
    let H = document.createElement("canvas"),
      pe = H.getContext("webgl2");
    if (!pe) {
      return a();
    }
    let ge = pe.getExtension("WEBGL_lose_context");
    if (ge) {
      ge.loseContext();
    }
  } catch {
    return a();
  }
  let f;
  try {
    f = new THREE.WebGLRenderer({
      canvas: n,
      antialias: u === 0,
      powerPreference: "high-performance",
    });
    if (!f.getContext()) {
      throw new Error("no gl");
    }
  } catch {
    return a();
  }
  n.addEventListener("webglcontextlost", (H) => {
    H.preventDefault();
    z = false;
    s.classList.add("no-webgl");
  });
  f.toneMapping = THREE.ACESFilmicToneMapping;
  f.toneMappingExposure = 1;
  f.shadowMap.enabled = true;
  f.shadowMap.type = THREE.PCFShadowMap;
  let d = new THREE.Plane(new THREE.Vector3(1, 0, 0), 1000);
  f.clippingPlanes = [d];
  setAnisotropy(f.capabilities.getMaxAnisotropy());
  setQuality(u);
  let h = new THREE.Scene();
  h.environmentIntensity = 0.6;
  h.fog = new THREE.Fog(1317678, 70, 360);
  let p = new THREE.PerspectiveCamera(30, 1, 0.3, 1400);
  t("renderer");
  let x = createSky(f, h);
  t("sky");
  let { M: g, T: m } = createMaterials();
  t("materials+textures");
  let M = glowTexture(),
    E = markTexture(),
    _ = createHouse({
      M: g,
      T: m,
      markTex: E,
      glowTex: M,
    });
  h.add(_.house);
  t("house");
  let A = createWorld({
    M: g,
    T: m,
    glowTex: M,
    markTex: E,
    tier: u,
    reduce: o,
  });
  h.add(A.world);
  t("world");
  let b = createSystems({
      house: _.house,
      reduce: o,
    }),
    R = createInterior({
      M: g,
      layers: _.layers,
      glowTex: M,
    }),
    v1 = createUnderground({
      scene: h,
      M: g,
      tier: u,
      reduce: o,
    });
  Object.values(_.layers).forEach((H) => {
    mergeEdges(H, _.edgeMat);
    mergeStatic(H);
  });
  mergeStatic(A.props);
  t("systems+interior+underground+merge");
  let w = new THREE.HemisphereLight(10466518, 1709842, 0.5),
    C = new THREE.DirectionalLight(16769728, 3);
  C.castShadow = true;
  C.shadow.mapSize.set(u >= 2 ? 2048 : 1024, u >= 2 ? 2048 : 1024);
  Object.assign(C.shadow.camera, {
    left: -26,
    right: 26,
    top: 26,
    bottom: -26,
    near: 5,
    far: 240,
  });
  C.shadow.bias = -0.0003;
  C.shadow.normalBias = 0.04;
  C.shadow.radius = u >= 2 ? 2.5 : 1.5;
  C.target.position.set(0, 3, 0);
  let N = new THREE.DirectionalLight(9085656, 0.6);
  N.position.copy(x.U.uMoonDir.value).multiplyScalar(60);
  h.add(w, C, C.target, N);
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
    },
    I = Object.assign(
      {
        level: null,
        focusSys: null,
        netFocus: null,
        ugFocus: null,
        interactive: false,
      },
      S,
    ),
    L = [
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
    ],
    U = 0,
    V = 1,
    O = 1,
    G = 1,
    z = true,
    k = 0,
    K = -9,
    ie = {
      set(H) {
        Object.assign(I, H);
      },
      highlight(H) {
        I.focusSys = H;
      },
      selectLevel(H) {
        I.level = H;
      },
      levels: LEVELS.map((H) => H.key),
      onPick: null,
      onHoverLevel: null,
      onFrame: null,
      onThermal: null,
      roomsLit: 0,
      get quality() {
        return u;
      },
    };
  window.HAUSE_STAGE = ie;
  let xe = new THREE.Color(14256718),
    Ue = null;
  function Ce(H) {
    Ue = H;
    Object.keys(_.sys).forEach((pe) =>
      _.sys[pe].mats.forEach((ge) => {
        if (pe === H) {
          ge.emissive.copy(xe);
          ge.emissiveIntensity = 0.9;
        } else {
          ge.emissive.copy(ge.userData.baseEmissive);
          ge.emissiveIntensity = 1;
        }
      }),
    );
  }
  let Ye = new Set();
  _.house.traverse((H) => {
    if (!(!H.isMesh || !H.material)) {
      (Array.isArray(H.material) ? H.material : [H.material]).forEach((pe) => {
        if (pe.userData && (pe.userData.shell || pe.userData.wall)) {
          Ye.add(pe);
        }
      });
    }
  });
  let J = "",
    se = false;
  _.edgeMat.visible = false;
  function ye(H, pe) {
    let ge = H.toFixed(3) + "|" + pe.toFixed(3);
    if (ge === J) {
      return;
    }
    J = ge;
    let he = H > 0.01 || pe > 0.01;
    Ye.forEach((He) => {
      let ke = He.userData.pane,
        rt = He.userData.shell ? H * (ke ? 0.75 : 0.9) : 0,
        nt = He.userData.wall ? pe * (ke ? 0.8 : 0.9) : 0;
      if (he !== se) {
        He.transparent = he || !!He.userData.alwaysTransparent;
        He.needsUpdate = true;
      }
      He.opacity = 1 - Math.max(rt, nt);
      He.depthWrite = Math.max(rt, nt) < 0.4;
    });
    se = he;
    _.edgeMat.opacity = Math.max(H * 0.28, pe * 0.16);
    _.edgeMat.visible = _.edgeMat.opacity > 0.01;
  }
  let Ve = createThermal({
      scene: h,
      M: g,
      skipParents: Object.values(b.groups),
      onChange: (H) => {
        A.setThermal(H);
        f.toneMapping = H ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
        if (ie.onThermal) {
          ie.onThermal(H);
        }
      },
    }),
    ce = new THREE.Vector3();
  function Ie(H, pe) {
    ce.copy(pe);
    H.localToWorld(ce);
    ce.project(p);
    return {
      x: (ce.x * 0.5 + 0.5) * V,
      y: (-ce.y * 0.5 + 0.5) * O,
      behind: ce.z > 1,
    };
  }
  let je = (H, pe, ge) => new THREE.Vector3(H, pe, ge),
    le = LEVELS.map((H) => ({
      obj: _.layers[H.key],
      offset: je(
        W / 2 + 1.4,
        {
          roof: 7.8,
          upper: 4.9,
          main: 1.8,
          basement: -1.2,
          below: -2.8,
        }[H.key],
        D / 2,
      ),
    }));
  ie.projectLevels = () => le.map((H) => Ie(H.obj, H.offset));
  ie.projectAnchors = () => {
    let H = {};
    Object.keys(_.ANCHORS).forEach((pe) => {
      H[pe] = Ie(_.house, _.ANCHORS[pe]);
    });
    Object.keys(v1.ANCHORS).forEach((pe) => {
      H[pe] = Ie(_.house, v1.ANCHORS[pe]);
    });
    return H;
  };
  let _e = {
      x: 0,
      y: 0,
      nx: 0,
      ny: 0,
    },
    j = null,
    $ = new THREE.Raycaster(),
    de = [];
  _.house.traverse((H) => {
    if (!(!H.isMesh || H.isInstancedMesh || !H.visible || H.userData.noPick)) {
      H.geometry.computeBoundingSphere();
      if (H.geometry.boundingSphere.radius > 0.3) {
        de.push(H);
      }
    }
  });
  let Ae = (H) => {
    while (H && !H.userData.level) {
      H = H.parent;
    }
    if (H) {
      return H.userData.level;
    } else {
      return null;
    }
  };
  ie.pickAt = (H, pe) => {
    $.setFromCamera(
      {
        x: (H / V) * 2 - 1,
        y: -(pe / O) * 2 + 1,
      },
      p,
    );
    let ge = $.intersectObjects(de, false)[0];
    if (ge) {
      return {
        level: Ae(ge.object),
        sys: ge.object.userData.sys || null,
      };
    } else {
      return null;
    }
  };
  ie.pickCount = () => de.length;
  window.addEventListener(
    "pointermove",
    (H) => {
      _e.nx = (H.clientX / V) * 2 - 1;
      _e.ny = (H.clientY / O) * 2 - 1;
      if (j) {
        k = j.theta0 - (H.clientX - j.x) * 0.006;
      }
    },
    {
      passive: true,
    },
  );
  n.addEventListener("pointerdown", (H) => {
    if (I.interactive) {
      j = {
        x: H.clientX,
        theta0: k,
        t: performance.now(),
      };
    }
  });
  window.addEventListener("pointerup", (H) => {
    if (!j) {
      return;
    }
    let pe = Math.abs(H.clientX - j.x) < 6 && performance.now() - j.t < 400;
    j = null;
    if (pe && I.interactive) {
      $.setFromCamera(
        {
          x: (H.clientX / V) * 2 - 1,
          y: -(H.clientY / O) * 2 + 1,
        },
        p,
      );
      let ge = $.intersectObjects(de, false)[0];
      if (ge && ie.onPick) {
        ie.onPick(Ae(ge.object), ge.object.userData.sys || null);
      }
    }
  });
  n.addEventListener("pointermove", (H) => {
    if (!I.interactive || j) {
      return;
    }
    $.setFromCamera(
      {
        x: (H.clientX / V) * 2 - 1,
        y: -(H.clientY / O) * 2 + 1,
      },
      p,
    );
    let pe = $.intersectObjects(de, false)[0],
      ge = pe ? Ae(pe.object) : null;
    n.style.cursor = ge ? "pointer" : "grab";
    if (ie.onHoverLevel) {
      ie.onHoverLevel(ge);
    }
  });
  let Ee = null;
  function Le() {
    if (Ee) {
      Ee.dispose();
    }
    Ee = u >= 1 ? createPost(f, h, p, u, Math.round(V * G), Math.round(O * G)) : null;
  }
  function Je() {
    V = window.innerWidth;
    O = window.innerHeight;
    G = Math.min(window.devicePixelRatio || 1, u >= 2 ? 1.75 : u === 1 ? 1.5 : 1.25);
    f.setPixelRatio(G);
    f.setSize(V, O, false);
    p.aspect = V / O;
    p.fov = V < 700 ? 44 : 30;
    p.updateProjectionMatrix();
    if (Ee) {
      Ee.setSize(Math.round(V * G), Math.round(O * G));
    }
  }
  window.addEventListener("resize", Je);
  Je();
  Le();
  let B = new THREE.Vector3();
  function pt(H, pe) {
    let ge = 0.5 - 0.5 * Math.cos(pe * Math.PI * 2),
      he = lerp(7.5, 5, ge),
      He = lerp(18.3, 21.9, ge),
      ke = lerp(24, 62, ge),
      rt = (Math.PI * (H - he)) / (He - he),
      nt = ke * Math.sin(rt),
      Jt = (nt * Math.PI) / 180;
    B.set(-Math.sin(rt) * Math.cos(Jt), Math.sin(Jt), Math.cos(rt) * Math.cos(Jt)).normalize();
    return nt;
  }
  let Qe = [
    [0, [0.62, 0.6, 0.55]],
    [0.16, [0.7, 0.7, 0.55]],
    [0.3, [0.8, 1, 0.62]],
    [0.5, [0.74, 0.95, 0.55]],
    [0.68, [1.05, 0.88, 0.5]],
    [0.82, [1, 0.72, 0.45]],
    [1, [0.62, 0.6, 0.55]],
  ];
  function D1(H, pe) {
    let ge = 0;
    while (ge < Qe.length - 2 && Qe[ge + 1][0] <= H) {
      ge++;
    }
    let [he, He] = Qe[ge],
      [ke, rt] = Qe[ge + 1],
      nt = (H - he) / (ke - he);
    pe.setRGB(lerp(He[0], rt[0], nt), lerp(He[1], rt[1], nt), lerp(He[2], rt[2], nt));
  }
  let y = new THREE.Vector3(),
    Y = new THREE.Vector3(),
    Q = new THREE.Vector3(),
    re = new THREE.Vector3(),
    Pe = new THREE.Vector3(),
    Se = {
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
    },
    ue = [
      [0, [0.3, 0.3, 0.3]],
      [0.22, [0.62, 0.8, 0.28]],
      [0.36, [0.4, 0.62, 0.2]],
      [0.55, [0.3, 0.5, 0.15]],
      [0.7, [0.95, 0.7, 0.18]],
      [0.82, [0.9, 0.35, 0.1]],
      [1, [0.5, 0.2, 0.08]],
    ];
  function ve(H, pe) {
    let ge = 0;
    while (ge < ue.length - 2 && ue[ge + 1][0] <= H) {
      ge++;
    }
    let [he, He] = ue[ge],
      [ke, rt] = ue[ge + 1],
      nt = (H - he) / (ke - he);
    pe.setRGB(lerp(He[0], rt[0], nt), lerp(He[1], rt[1], nt), lerp(He[2], rt[2], nt));
  }
  let Oe = new THREE.Color(16777215),
    et = new THREE.Color(),
    Ne = 0;
  function Fe(H, pe) {
    U += H;
    let ge = pe ? 1 : 1 - Math.exp(-H * (o ? 30 : 4.2));
    L.forEach(($t) => {
      S[$t] = lerp(S[$t], I[$t], ge);
    });
    S.theta = lerp(S.theta, I.theta + (o ? 0 : Math.sin(U * 0.08) * I.orbit) + k, ge);
    LEVELS.forEach(($t) => {
      let dn = _.layers[$t.key],
        hi =
          $t.key === "roof"
            ? 18 * clamp(S.lift, 0, 1)
            : $t.key === "upper"
              ? 12 * clamp(S.lift - 1, 0, 1)
              : $t.key === "main"
                ? 9 * clamp(S.lift - 2, 0, 1)
                : 0;
      dn.position.y = lerp(dn.position.y, $t.dy * S.explode + hi + (I.level === $t.key ? 0.9 : 0), ge);
    });
    let he = ((S.season % 1) + 1) % 1,
      He = Math.max(1 - smooth(0.1, 0.3, he), smooth(0.84, 1, he)),
      ke = Math.max(1 - smooth(0.06, 0.22, he), smooth(0.88, 1, he));
    Se.ug = 0;
    Se.beacons = S.beacons;
    Se.section = S.section;
    Se.cutX = S.cutX;
    Se.ground = S.ground;
    Se.ghost = S.ghost;
    Se.cut = S.cut;
    Se.lift = S.lift;
    Se.snow = He;
    Se.roofSnow = ke;
    Se.explode = S.explode;
    Se.grow = smooth(0.2, 0.34, he) * (1 - smooth(0.78, 0.93, he));
    ve(he, Se.leafTint);
    Se.rain = smooth(0.2, 0.24, he) * (1 - smooth(0.3, 0.34, he)) * (o ? 0 : 1);
    Se.leaves = smooth(0.72, 0.78, he) * (1 - smooth(0.9, 0.95, he)) * (o ? 0 : 1);
    Se.melt = Math.max(S.melt, 1 - ke);
    Se.icicles = Math.max(S.icicles, smooth(0.03, 0.1, he) * (1 - smooth(0.17, 0.26, he)) + smooth(0.9, 0.97, he) * 0.5);
    Se.snowfall = S.snowfall * (o ? 0 : 1) * (he < 0.05 || he > 0.93 ? 1 : 0);
    Se.smoke = S.smoke * (1 - smooth(0.12, 0.3, he) + smooth(0.8, 0.95, he));
    D1(he, A.U.uTint.value);
    let rt = pt(S.time, he),
      nt = smooth(-5, 10, rt);
    x.update(
      {
        elev: rt,
        daylight: nt,
        sunDir: B,
        thermal: S.thermal,
        aurora: S.aurora * (1 - nt),
        cloud: lerp(0.38, 0.62, smooth(0, 1, Math.abs(Math.sin(he * Math.PI * 2)))),
        snowy: He > 0.5,
        voidK: clamp(1 - S.ground, 0, 1),
      },
      U,
    );
    x.follow(p.position);
    h.fog.color.copy(x.horizon);
    let Jt = 1 - smooth(0, 28, rt);
    C.position.copy(B).multiplyScalar(110).add(C.target.position);
    C.color.setRGB(1, lerp(0.95, 0.62, Jt), lerp(0.88, 0.4, Jt));
    C.intensity = 3.6 * smooth(-4, 6, rt) * (1 - S.thermal);
    w.color.copy(x.zenith).lerp(Oe, 0.4);
    w.groundColor.setRGB(0.1, 0.09, 0.08).lerp(et.setRGB(0.55, 0.6, 0.72), He * 0.8 * (0.25 + 0.75 * nt));
    w.intensity = (0.5 + 0.35 * nt + 0.25 * S.cut) * (1 - S.thermal);
    N.intensity = 0.7 * (1 - nt) * (1 - S.thermal);
    h.environmentIntensity = 0.5 + 0.4 * nt + 0.1 * S.cut;
    f.toneMappingExposure = Ve.on ? 1 : lerp(1.2, 0.95, nt);
    if (pe || U - K > 0.4) {
      x.refreshEnv(pe);
      K = U;
    }
    ye(S.ghost * (1 - clamp(S.explode * 4, 0, 1)), S.cut);
    R.update(1 - nt, S.cut);
    let tn = _.update(Se, ge, U, nt, pe ? 100 : H);
    ie.roomsLit = Math.round(clamp(tn, 0, 7));
    _.extra.chimneyTop.getWorldPosition(re);
    A.update(Se, U, H, nt, y, re, clamp(tn / 9, 0, 1));
    let $n = I.focusSys;
    Object.keys(_.sys).forEach(($t) =>
      _.sys[$t].marks.forEach((dn) => {
        let hi = $n ? ($t === $n ? 1 : S.marks * 0.35) : S.marks;
        dn.material.opacity = lerp(dn.material.opacity, hi, ge);
        dn.scale.setScalar(0.95 * ($t === $n ? 1 + Math.sin(U * 4) * 0.12 : 1) * (1 + S.explode * 0.25));
      }),
    );
    if ($n !== Ue) {
      Ce($n);
    }
    b.update(S, I.netFocus, U, H);
    let ki = v1.update(Se, I.ugFocus, U, H);
    d.constant = -ki;
    Ve.set(I.thermal > 0.5);
    Ve.time.value = U;
    _e.x = lerp(_e.x, _e.nx, ge * 0.6);
    _e.y = lerp(_e.y, _e.ny, ge * 0.6);
    let li = S.theta + _e.x * 0.08,
      ci = clamp(S.phi + _e.y * 0.04, 0.35, 1.5),
      Kn = V < 700;
    y.set(S.fx, S.ty + (Kn ? -1.2 : 0), S.fz);
    Y.set(Math.sin(ci) * Math.sin(li), Math.cos(ci), Math.sin(ci) * Math.cos(li))
      .multiplyScalar(S.radius * (Kn ? 1.25 : 1))
      .add(y);
    p.position.copy(Y);
    p.lookAt(y);
    p.updateMatrixWorld();
    Q.setFromMatrixColumn(p.matrixWorld, 0);
    p.position.addScaledVector(Q, Kn ? 0 : S.tx);
    p.updateMatrixWorld();
    Pe.copy(y).applyMatrix4(p.matrixWorldInverse);
    let Dn = Math.max(0.001, Pe.length());
    A.sight.value.set(Pe.x / Dn, Pe.y / Dn, Pe.z / Dn, Dn);
    if (Math.abs(S.lensY - Ne) > 0.0001) {
      Ne = S.lensY;
      if (Math.abs(Ne) < 0.0001) {
        p.clearViewOffset();
      } else {
        p.setViewOffset(V, O, 0, -Ne * O, V, O);
      }
    }
    n.style.opacity = S.visible.toFixed(3);
  }
  let Ge = {
      n: 0,
      sum: 0,
      last: 0,
    },
    $e = performance.now();
  function it(H) {
    if (Ee) {
      let pe = Ee.gtao,
        ge = S.ghost > 0.05 || S.cut > 0.05 || Ve.on || S.explode > 0.05;
      if (pe) {
        pe.enabled = !ge;
      }
      if (Ee.bloom) {
        Ee.bloom.strength = Ve.on ? 0.9 : 0.3 + 0.55 * (1 - clamp(B.y * 4, 0, 1));
      }
      Ee.grade.uniforms.uSat.value = Ve.on ? 1 : 1.05;
      Ee.render(H, U);
    } else {
      f.render(h, p);
    }
  }
  function q(H) {
    let pe = H - Ge.last;
    Ge.last = H;
    if (!(pe > 250 || pe <= 0) && (Ge.n++, Ge.n > 40 && (Ge.sum += pe), Ge.n === 130)) {
      let ge = Ge.sum / 90;
      if (ge > 26 && u > 1 && typeof window.HAUSE_QUALITY != "number") {
        u--;
        Le();
        Je();
        C.shadow.mapSize.set(1024, 1024);
        if (C.shadow.map) {
          C.shadow.map.dispose();
        }
        C.shadow.map = null;
      } else if (ge > 34 && u === 1 && G > 1.01 && typeof window.HAUSE_QUALITY != "number") {
        G = 1;
        f.setPixelRatio(1);
        f.setSize(V, O, false);
        if (Ee) {
          Ee.setSize(V, O);
        }
      }
      Ge = {
        n: 0,
        sum: 0,
        last: H,
      };
    }
  }
  function De(H) {
    if (!z) {
      return;
    }
    let pe = Math.min((H - $e) / 1000, 0.05);
    $e = H;
    Fe(pe, false);
    it(pe);
    q(H);
    if (ie.onFrame) {
      ie.onFrame();
    }
    requestAnimationFrame(De);
  }
  ie.pause = () => {
    z = false;
  };
  ie.resume = () => {
    if (!z) {
      z = true;
      $e = performance.now();
      Ge.last = 0;
      requestAnimationFrame(De);
    }
  };
  ie.settle = () => {
    Fe(0.016, true);
    Fe(0.016, true);
    it(0.016);
    if (ie.onFrame) {
      ie.onFrame();
    }
  };
  if (window.HAUSE_DEBUG) {
    ie.debug = {
      scene: h,
      camera: p,
      renderer: f,
      S,
      target: I,
      H: _,
      Wd: A,
      sky: x,
      sun: C,
      hemi: w,
      moon: N,
    };
  }
  ie.info = () => ({
    tier: u,
    calls: f.info.render.calls,
    triangles: f.info.render.triangles,
    pixelRatio: G,
    buildMs: ie.buildMs,
  });
  t("pre-first-render");
  ie.settle();
  t("first-render");
  ie.laps = e;
  requestAnimationFrame((H) => {
    $e = H;
    requestAnimationFrame(De);
  });
  ie.buildMs = Math.round(performance.now() - i);
  s.classList.add("has-webgl");
  r();
}
boot();
