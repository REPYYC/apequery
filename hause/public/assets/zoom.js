/* HAUSE.ca — Act II director: mounts the six drawings, drives their cameras from scroll, places hotspot pins, runs the panel-load check and the job finder. */
(() => {
  "use strict";
  // palette tokens from the stylesheet (they change with the theme)
  const tok = (n, f) => (getComputedStyle(document.documentElement).getPropertyValue(n).trim() || f);
  const ACC = () => tok("--ember", "#f4bd7e"), COP = () => tok("--copper", "#d98a4e");
  const ACCRGB = () => tok("--accent-rgb", "244, 189, 126"), BGRGB = () => tok("--bg-rgb", "11, 15, 29");

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LIVE = (() => { try { return new Set(JSON.parse($("#liveData").textContent)); } catch (e) { return null; } })();
  const isLive = (d) => !LIVE || LIVE.has(d);
  const chip = (d) => isLive(d) ? `<a class="chip" href="https://${d}/" rel="noopener">${d}</a>` : `<span class="chip chip--soon" title="In build">${d}</span>`;

  /* ------------------------------------------------------------ scenes */
  const SCENES = window.HAUSE_SCENES || {};
  const mounted = {};
  $$("[data-scene^='z-']").forEach((sec) => {
    const name = sec.dataset.scene, cfg = SCENES[name]; if (!cfg) return;
    const svg = $("svg.zoom__svg", sec), pins = $(".zoom__pins", sec), steps = $$(".sys-steps > li", sec);
    if (!svg) return;
    svg.setAttribute("viewBox", `0 0 ${cfg.view[0]} ${cfg.view[1]}`);
    svg.setAttribute("preserveAspectRatio", window.matchMedia("(max-width: 760px)").matches ? "xMidYMid slice" : "xMidYMid meet");
    svg.innerHTML = cfg.draw();
    const hs = {}; $$(".hs", svg).forEach((g) => { hs[g.dataset.hs] = g; });
    // pins: one per hotspot, label + first two sites
    const pinEls = {};
    Object.entries(cfg.hots).forEach(([key, [label, list]]) => {
      if (!hs[key]) return;
      const el = document.createElement("div");
      el.className = "pin"; el.dataset.hs = key;
      const first = list.filter(isLive).slice(0, 2);
      el.innerHTML = `<b>${label}</b>${first.length ? `<span>${first.map((d) => `<a href="https://${d}/" rel="noopener">${d} ↗</a>`).join("")}</span>` : `<span><em>In build</em></span>`}`;
      pins.appendChild(el); pinEls[key] = el;
    });
    // step chips come from the scene config so the drawing and the copy never disagree
    steps.forEach((li, i) => {
      const keys = (li.dataset.hots || "").split(/\s+/).filter(Boolean);
      const seen = new Set();
      const list = [...keys.flatMap((k) => (cfg.hots[k] ? cfg.hots[k][1] : [])), ...(li.dataset.sites || '').split(/s+/).filter(Boolean)].filter((d) => !seen.has(d) && seen.add(d));
      if (list.length) { const p = document.createElement("p"); p.className = "step__sites"; p.innerHTML = list.map(chip).join(""); li.querySelector("div").insertBefore(p, li.querySelector(".link")); }
      li.dataset.step = String(i);
    });
    // which step each hotspot belongs to (the drawing carries it; the 3D sets use the same keys)
    const hotStep = {}; Object.entries(hs).forEach(([k, g]) => { hotStep[k] = +g.dataset.step; });
    mounted[name] = { sec, svg, pins, steps, hs, hotStep, pinEls, cfg, step: -1, box: cfg.keys[0][1].slice(), raf: 0, active: false, is3d: false };
  });

  function viewAt(cfg, ap) {
    const K = cfg.keys;
    if (ap <= K[0][0]) return K[0][1];
    for (let i = 1; i < K.length; i++) {
      if (ap <= K[i][0]) { const t = ease((ap - K[i - 1][0]) / (K[i][0] - K[i - 1][0])); const a = K[i - 1][1], b = K[i][1]; return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t), lerp(a[3], b[3], t)]; }
    }
    return K[K.length - 1][1];
  }
  function placePins(m) {
    const fr = m.pins.getBoundingClientRect(); if (!fr.width) return;
    const vw = window.innerWidth; const placed = [];
    Object.entries(m.pinEls).forEach(([key, el]) => {
      const g = m.hs[key]; const on = g.classList.contains("is-on");
      el.classList.toggle("is-on", on); if (!on) return;
      const pt = m.svg.createSVGPoint(); pt.x = 0; pt.y = 0;
      const p = pt.matrixTransform(g.getScreenCTM());
      const x0 = p.x - fr.left, y0 = p.y - fr.top; const w = el.offsetWidth || 180, h = el.offsetHeight || 40;
      const flip = x0 + 18 + w > fr.width - 12;
      let x = flip ? x0 - w - 18 : x0 + 18, y = y0 - h / 2;
      y = clamp(y, 8, fr.height - h - 8);
      for (let n = 0; n < 5; n++) { const hit = placed.find((q) => Math.abs(q.y - y) < h + 6 && x < q.x + q.w + 10 && q.x < x + w + 10); if (!hit) break; y = hit.y + h + 8; }
      placed.push({ x, y, w });
      el.classList.toggle("is-flip", flip);
      el.classList.toggle("is-off", x0 < 0 || x0 > fr.width || y0 < 0 || y0 > fr.height);
      el.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
      void vw;
    });
  }
  /** step index, progress through the step (q) and number of steps at chapter progress ap */
  function info(name, ap) {
    const m = mounted[name]; if (!m) return null;
    // a chapter never has more steps than it has list items: any extra interval belongs to the last step
    const cuts = m.cfg.cuts, n = Math.min(cuts.length + 1, m.steps.length || cuts.length + 1), step = Math.min(cuts.filter((c) => ap >= c).length, n - 1);
    const a = step ? cuts[step - 1] : 0, b = step < n - 1 ? cuts[step] : 1;
    return { step, q: clamp((ap - a) / Math.max(0.001, b - a), 0, 1), n };
  }
  // 3D mode: the pins follow the set's anchors, projected by the stage every frame
  function pins3d(proj) {
    const m = Object.values(mounted).find((x) => x.active && x.is3d); if (!m || !proj) return;
    const fr = m.pins.getBoundingClientRect(); if (!fr.width) return;
    const placed = [];
    // switch pins on and off, measure the ones that are on, then place them: no layout is forced between two moves
    const live = Object.entries(m.pinEls).map(([key, el]) => {
      const p = proj["z." + key];
      return [el, p, !!p && m.hotStep[key] === m.step];
    });
    live.forEach(([el, , on]) => el.classList.toggle("is-on", on));
    const sized = live.filter((x) => x[2]).map(([el, p]) => [el, p, el.offsetWidth || 180, el.offsetHeight || 40]);
    sized.forEach(([el, p, w, h]) => {
      const x0 = p.x - fr.left, y0 = p.y - fr.top;
      const flip = x0 + 30 + w > fr.width - 12;
      let x = flip ? x0 - w - 30 : x0 + 30, y = clamp(y0 - h / 2, 70, fr.height - h - 12);
      for (let n = 0; n < 5; n++) { const hit = placed.find((q) => Math.abs(q.y - y) < h + 6 && x < q.x + q.w + 10 && q.x < x + w + 10); if (!hit) break; y = hit.y + h + 8; }
      placed.push({ x, y, w });
      el.classList.toggle("is-flip", flip);
      el.classList.toggle("is-off", p.behind || x0 < 0 || x0 > fr.width || y0 < 0 || y0 > fr.height);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.setProperty("--dy", `${(y0 - y - h / 2).toFixed(1)}px`);
    });
  }
  function update(name, ap, is3d) {
    const m = mounted[name]; if (!m) return;
    const cfg = m.cfg;
    const step = cfg.cuts.filter((c) => ap >= c).length;
    if (!!is3d !== m.is3d) { m.is3d = !!is3d; m.sec.classList.toggle("is-3d", m.is3d); m.step = -1; }
    if (m.is3d) {
      const step = info(name, ap).step;
      if (step !== m.step) {
        m.step = step;
        m.steps.forEach((li, i) => { li.classList.toggle("is-on", i === step); li.classList.toggle("is-past", i < step); });
        m.sec.classList.toggle("is-title", step === 0 && name === "z-panel");
      }
      m.sec.style.setProperty("--p", ap.toFixed(3));
      return;
    }
    const box = viewAt(cfg, ap);
    // smooth the camera a touch so wheel steps don't snap
    const k = reduce ? 1 : 0.35;
    m.box = m.box.map((v, i) => lerp(v, box[i], k));
    m.svg.setAttribute("viewBox", m.box.map((v) => v.toFixed(1)).join(" "));
    if (step !== m.step) {
      m.step = step; m.svg.dataset.step = String(step);
      m.steps.forEach((li, i) => { li.classList.toggle("is-on", i === step); li.classList.toggle("is-past", i < step); });
      Object.values(m.hs).forEach((g) => g.classList.toggle("is-on", +g.dataset.step === step));
      m.sec.classList.toggle("is-title", step === 0 && name === "z-panel");
    }
    m.sec.style.setProperty("--p", ap.toFixed(3));
    if (cfg.onProgress) cfg.onProgress(m.svg, ap, step);
    placePins(m);
    // settle the camera after the scroll stops
    cancelAnimationFrame(m.raf);
    if (!reduce && m.box.some((v, i) => Math.abs(v - box[i]) > 0.3)) m.raf = requestAnimationFrame(() => update(name, ap));
  }
  function setActive(name) {
    Object.values(mounted).forEach((m) => { const on = m.sec.dataset.scene === name; if (on !== m.active) { m.active = on; m.sec.classList.toggle("is-live", on); } });
  }
  window.HAUSE_ZOOM = { update, setActive, info, pins3d, has: (n) => !!mounted[n] };

  /* -------------------------------------------------------- panel load */
  (function loadCheck() {
    const box = $("#loadCalc"); if (!box) return;
    const m = mounted["z-panel"]; if (!m) return;
    const svg = m.svg;
    const LOADS = [
      { key: "range", name: "Electric range", w: 6000, brk: "range" }, { key: "dryer", name: "Dryer", w: 5000, brk: "dryer" }, { key: "wh", name: "Electric water heater", w: 4500, brk: "water-heater" },
      { key: "ac", name: "Central A/C", w: 3500, brk: "a-c" }, { key: "ev", name: "EV charger, 48 A", w: 11500, brk: "ev-charger" }, { key: "spa", name: "Hot tub", w: 11000, brk: "hot-tub-gfci" },
      { key: "hp", name: "Heat pump", w: 7000, brk: "" }, { key: "suite", name: "Basement suite", w: 5000, brk: "basement" }, { key: "base", name: "Baseboard heaters", w: 6000, brk: "" }
    ];
    const BASE = 5000; // lights, plugs, furnace blower, fridge, bath fans
    const state = { service: 100, on: new Set(["range", "dryer", "ac"]) };
    box.innerHTML = `<div class="lc__svc" role="radiogroup" aria-label="Service size"><button type="button" role="radio" data-svc="100" aria-checked="true">100 A</button><button type="button" role="radio" data-svc="200" aria-checked="false">200 A</button></div>
      <ul class="lc__loads">${LOADS.map((l) => `<li><button type="button" data-load="${l.key}" aria-pressed="${state.on.has(l.key)}"><span>${l.name}</span><small>${(l.w / 1000).toFixed(1)} kW</small></button></li>`).join("")}</ul>
      <div class="lc__out"><div class="lc__bar"><i id="lcBar"></i></div><p><b id="lcAmps">0 A</b> <span id="lcVerdict"></span></p><p class="small">Rule-of-thumb demand: 5 kW base plus 75% of the loads you switch on, at 240 V. Not a CEC Section 8 calculation. A licensed electrician confirms.</p></div>`;
    const bar = $("#lcBar", box), amps = $("#lcAmps", box), verdict = $("#lcVerdict", box);
    const gArc = $("#pGaugeArc", svg), gN = $("#pGaugeN", svg), gS = $("#pGaugeS", svg);
    function render() {
      const w = BASE + LOADS.filter((l) => state.on.has(l.key)).reduce((n, l) => n + l.w, 0) * 0.75;
      const a = w / 240, r = a / state.service;
      amps.textContent = `${Math.round(a)} A`;
      bar.style.width = `${clamp(r, 0, 1) * 100}%`; bar.dataset.level = r > 0.9 ? "hot" : r > 0.7 ? "warm" : "ok";
      verdict.textContent = r > 1 ? `over a ${state.service} A service. Upgrade before adding anything.` : r > 0.9 ? `of ${state.service} A. Upgrade likely before the next big load.` : r > 0.7 ? `of ${state.service} A. Tight. Ask before adding a charger or a suite.` : `of ${state.service} A. Fits, with room.`;
      if (gArc) { gArc.setAttribute("stroke-dashoffset", String(220 - 220 * clamp(r, 0, 1))); gArc.setAttribute("stroke", r > 0.9 ? "#ff6b4f" : r > 0.7 ? ACC() : "#8fd3a6"); gN.textContent = `${Math.round(a)} A`; gS.textContent = `of a ${state.service} A service`; }
      $$(".brk", svg).forEach((b) => b.classList.remove("is-hot"));
      LOADS.filter((l) => state.on.has(l.key) && l.brk).forEach((l) => { const b = svg.querySelector(`.brk[data-brk="${l.brk}"]`); if (b) b.classList.add("is-hot"); });
      $$(".flow[data-run]", svg).forEach((p) => p.classList.toggle("is-hot", state.on.has(p.dataset.run === "ev-charger" ? "ev" : "spa")));
      // the 3D panel lights the same breakers and shows the demand on its monitor
      const S = window.HAUSE_STAGE;
      if (S && S.zoomInput) S.zoomInput("panel", { on: [...state.on], amps: a, service: state.service });
    }
    window.addEventListener("hause:stage-ready", () => render(), { once: true });
    box.addEventListener("click", (e) => {
      const s = e.target.closest("[data-svc]"), l = e.target.closest("[data-load]");
      if (s) { state.service = +s.dataset.svc; $$("[data-svc]", box).forEach((b) => b.setAttribute("aria-checked", String(b === s))); render(); }
      if (l) { const k = l.dataset.load; state.on.has(k) ? state.on.delete(k) : state.on.add(k); l.setAttribute("aria-pressed", String(state.on.has(k))); render(); }
    });
    render();
  })();

  /* ---------------------------------------------------------- job finder */
  (function jobs() {
    const input = $("#jobFind"), out = $("#jobOut"); if (!input || !out) return;
    const VERB = { installing: ["installing.ca", "installation", "Install"], maintaining: ["maintaining.ca", "maintenance", "Maintain"], removing: ["removing.ca", "removal", "Remove"], replacing: ["replacing.ca", "replacement", "Replace"], upgrading: ["upgrading.ca", "upgrades", "Upgrade"] };
    const CAT = { electrical: "electrical", lighting: "electrical", hvac: "hvac", comfort: "hvac", water: "plumbing", bathroom: "plumbing", utilities: "plumbing", mechanical: "hvac", systems: "installation", materials: "asbestos", "air-safety": "radon", exterior: "roofing", openings: "windows-doors", windows: "windows-doors", outdoor: "cleaning", landscape: "cleaning", clearance: "removal", furniture: "removal", appliances: "removal", interior: "removal", surfaces: "painting", floors: "painting", walls: "painting", remodelling: "upgrades" };
    let data = null, loading = false;
    const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ");
    const SAMPLE = ["dishwasher", "hot tub", "panel", "sump pump", "deck", "furnace filter", "garage door", "closet", "fence", "mould"];
    function load() {
      if (data || loading) return; loading = true;
      fetch("data/jobs.json").then((r) => r.json()).then((j) => { data = j.map((x) => ({ ...x, q: norm(x.n + " " + x.t + " " + x.d) })); render(); }).catch(() => { out.innerHTML = `<p class="small">The job list did not load. Describe the work on the request form and the intake team will route it.</p>`; });
    }
    function score(j, words) { let s = 0; const n = norm(j.n); words.forEach((w) => { if (n.startsWith(w)) s += 6; else if (n.includes(w)) s += 4; else if (j.q.includes(w)) s += 1; }); return s; }
    function render() {
      const q = input.value.trim(); const words = norm(q).split(/\s+/).filter((w) => w.length > 1);
      if (!data) { out.innerHTML = `<p class="small">Loading ${637} named jobs…</p>`; return; }
      if (!words.length) { out.innerHTML = `<p class="jobs__hint">Try: ${SAMPLE.map((s) => `<button type="button" class="jobs__try" data-q="${s}">${s}</button>`).join("")}</p>`; return; }
      const hits = data.map((j) => [score(j, words), j]).filter((x) => x[0] > 0).sort((a, b) => b[0] - a[0] || a[1].n.localeCompare(b[1].n)).slice(0, 8);
      if (!hits.length) { out.innerHTML = `<p class="small">No named job matches “${q}” yet. Pick the closest category below, or describe it on the request form.</p>`; return; }
      out.innerHTML = `<ol class="jobs__list">${hits.map(([, j]) => { const v = VERB[j.v]; const cat = CAT[j.g] || v[1]; return `<li><div><b>${j.n}</b><span>${v[2]} · ${j.t}</span><p>${j.d}</p></div><div class="jobs__go"><a class="chip" href="https://${v[0]}/" rel="noopener">${v[0]} ↗</a><a class="link" href="#request" data-cat="${cat}" data-job="${j.n.replace(/"/g, "")}">Request ↗</a></div></li>`; }).join("")}</ol>`;
    }
    input.addEventListener("focus", load, { once: true });
    input.addEventListener("input", () => { load(); render(); });
    out.addEventListener("click", (e) => {
      const t = e.target.closest(".jobs__try"); if (t) { input.value = t.dataset.q; load(); render(); input.focus(); return; }
      const r = e.target.closest("[data-job]"); if (r) { const msg = $("#f-message"); if (msg && !msg.value) msg.value = `Job: ${r.dataset.job}.`; }
    });
    if ("IntersectionObserver" in window) new IntersectionObserver((es) => { if (es.some((x) => x.isIntersecting)) load(); }, { rootMargin: "400px" }).observe(input); else load();
    render();
  })();
})();
