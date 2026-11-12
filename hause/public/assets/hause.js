/* HAUSE.ca — page interactions and the scroll director for the 3D stage. No dependencies. */
(() => {
  "use strict";
  // palette tokens from the stylesheet (they change with the theme)
  const tok = (n, f) => (getComputedStyle(document.documentElement).getPropertyValue(n).trim() || f);
  const ACC = () => tok("--ember", "#f4bd7e"), COP = () => tok("--copper", "#d98a4e");
  const ACCRGB = () => tok("--accent-rgb", "244, 189, 126"), BGRGB = () => tok("--bg-rgb", "11, 15, 29");

  document.documentElement.classList.add("js");

  const LEAD_ENDPOINT = "https://hause-radon-leads.withered-glade-985a.workers.dev/lead";
  const PREVIEW = window.HAUSE_PREVIEW === true;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
  const fmt = (n) => Math.round(n).toLocaleString("en-CA");

  /* ------------------------------------------------------------------ data */
  const SYSTEMS = {
    electrical: { code: "H-101", name: "Electrical", covers: "Panels, service upgrades, wiring, EV chargers and safety.", cta: "Request electrical" },
    plumbing: { code: "H-102", name: "Plumbing", covers: "Leaks, supply lines, fixtures and repairs.", cta: "Request plumbing" },
    hvac: { code: "H-103", name: "HVAC / Furnace / Duct", covers: "Furnaces, ductwork, air conditioning and indoor air.", cta: "Request heating & HVAC" },
    "water-heaters": { code: "H-104", name: "Water heaters", covers: "Tank and tankless repair and replacement.", cta: "Request a water heater quote" },
    roofing: { code: "H-105", name: "Roofing", covers: "Hail damage, ice dams, shingles and flat roofs.", cta: "Request a roof inspection" },
    solar: { code: "H-106", name: "Solar", covers: "Design, batteries and utility interconnection.", cta: "Request a solar assessment" },
    radon: { code: "H-107", name: "Radon", covers: "Long-term testing and mitigation systems.", cta: "Request radon testing" },
    foundation: { code: "H-108", name: "Foundation", covers: "Cracks, water intrusion and structural review.", cta: "Request a foundation inspection" },
    sewer: { code: "H-109", name: "Sewer", covers: "Camera scopes, backups, roots and line repair.", cta: "Request a sewer scope" },
    asbestos: { code: "H-110", name: "Asbestos", covers: "Sampling and abatement before renovation or sale.", cta: "Request asbestos testing" },
    installation: { code: "H-111", name: "Installation", covers: "Appliances, fixtures, EV chargers and equipment.", cta: "Request an installation" }
  };
  // The whole service taxonomy. SYSTEMS above are the ones drawn in the 3D house; this list is open-ended.
  const CATEGORIES = [
    { key: "electrical", code: "H-101", name: "Electrical", does: "Panels and 200 A services, EV chargers, aluminum and knob-and-tube rewiring, hot tubs, lighting, generators", sites: ["calgaryelectricians.ca", "calgarycommercialelectrician.ca", "housewiring.ca", "200amppanel.ca", "electricalpanels.ca", "electricalpanelupgrade.ca", "basementwiring.ca"] },
    { key: "plumbing", code: "H-102", name: "Plumbing", does: "Leaks, fixtures, Poly-B replacement, sump pumps, softeners, gas lines", sites: ["kelownaplumbers.ca", "kelownaplumbing.ca"] },
    { key: "sewer", code: "H-109", name: "Sewer & drains", does: "Camera scopes, jetting, root cutting, augering, trenchless repair, lateral replacement", sites: ["sewers.ca", "sewerscope.ca", "sewerreplacements.ca", "trenchlesssewerrepair.ca", "newsewerline.ca", "sewerinstall.com", "sewerjetting.ca", "sewerroots.ca", "sewercleaners.ca", "drainaugering.ca", "sewerinspector.ca", "pipecleaning.ca", "sewerquotes.com"] },
    { key: "hvac", code: "H-103", name: "Heating, cooling & ducts", does: "Furnaces, boilers, heat pumps, air conditioning, duct cleaning, indoor air", sites: ["calgaryductcleaning.ca", "replacefurnace.ca"] },
    { key: "water-heaters", code: "H-104", name: "Water heaters", does: "Tank, tankless and heat-pump water heaters, repair and replacement", sites: ["tanklessinstallation.ca"] },
    { key: "roofing", code: "H-105", name: "Roof & exterior", does: "Shingles, hail claims, flat roofs, gutters, siding, soffit and fascia", sites: ["calgaryroofers.ca", "roofingcostcalculator.ca"] },
    { key: "windows-doors", code: "H-112", name: "Windows, doors & insulation", does: "Windows, entry and patio doors, attic insulation, air sealing", sites: ["roofinsulation.ca"] },
    { key: "solar", code: "H-106", name: "Solar & energy", does: "Solar, batteries, energy reviews, rebate paperwork", sites: ["solarpanelscalculator.com"] },
    { key: "radon", code: "H-107", name: "Radon", does: "Long-term tests, mitigation systems, post-mitigation retests", sites: ["radoninspectors.ca", "radonmap.ca", "radonlab.ca", "radonspecialists.ca", "radonabatement.ca", "radonfan.ca", "radondetectors.ca", "radonventilation.ca", "radonrisk.ca", "whatisradon.ca", "basementradon.ca", "edmontonradon.com"] },
    { key: "asbestos", code: "H-110", name: "Asbestos, mould & hazardous materials", does: "Sampling, lab testing, abatement, vermiculite, mould remediation", sites: ["asbestostest.ca", "asbestossampling.ca", "whatisasbestos.ca", "calgaryasbestos.ca"] },
    { key: "foundation", code: "H-108", name: "Foundation, concrete & excavation", does: "Cracks, waterproofing, concrete lifting, driveways, excavation", sites: ["crackedfoundations.ca", "polyjacking.ca", "calgaryexcavators.com"] },
    { key: "installation", code: "H-111", name: "Installation", does: "Appliances, TV mounting, smart home, security cameras, garage door openers", sites: ["installing.ca"] },
    { key: "upgrades", code: "H-113", name: "Upgrades & renovation", does: "Basements, kitchens, bathrooms, secondary suites, accessibility", sites: ["upgrading.ca"] },
    { key: "removal", code: "H-114", name: "Removal & disposal", does: "Junk, appliances, hot tubs, oil tanks, demolition", sites: ["removing.ca"] },
    { key: "replacement", code: "H-119", name: "Replacement", does: "Furnaces, water heaters, windows, roofs, panels and sewer lines: renewing what has worn out or failed", sites: ["replacing.ca"] },
    { key: "maintenance", code: "H-120", name: "Maintenance", does: "Seasonal servicing, inspections, filters, drains, gutters and prevention plans", sites: ["maintaining.ca"] },
    { key: "inspection", code: "H-115", name: "Inspections", does: "Pre-purchase, condo, new-build and older-home inspections", sites: ["calgaryhomeinspector.ca", "condoinspections.ca", "oldhouses.ca"] },
    { key: "painting", code: "H-116", name: "Painting & finishing", does: "Interior and exterior paint, drywall, flooring, trim and carpentry", sites: ["calgaryhomepainting.ca"] },
    { key: "cleaning", code: "H-117", name: "Cleaning, restoration & upkeep", does: "Deep cleans, disaster and fire restoration, carpets, snow clearing, lawn and yard", sites: ["disastercleanup.ca", "firerestoration.ca", "luxurycleaners.ca"] },
    { key: "moving", code: "H-118", name: "Moving", does: "Movers, quotes, storage, moving checklists", sites: ["movingquote.ca", "calgarymovingguide.ca"] },
    { key: "other", code: "H-199", name: "Anything else", does: "If it's in, on or under a house, ask. The intake team will find the right trade.", sites: [] }
  ];
  const SOON = [];
  const VERBS = [
    { verb: "Install", eg: "Appliances, chargers, smart home", site: "installing.ca", cat: "installation" },
    { verb: "Upgrade", eg: "Panels, furnaces, basements", site: "upgrading.ca", cat: "upgrades" },
    { verb: "Replace", eg: "Water heaters, windows, sewer lines", site: "replacing.ca", cat: "replacement" },
    { verb: "Remove", eg: "Junk, oil tanks, hot tubs", site: "removing.ca", cat: "removal" },
    { verb: "Maintain", eg: "Ducts, drains, gutters, snow", site: "maintaining.ca", cat: "maintenance" }
  ];
  const LEVELS = {
    roof: { name: "Roof & attic", note: "Where hail, ice dams and the sun do their work.", systems: ["roofing", "solar", "asbestos"], y: 16.2 },
    upper: { name: "Upper floor", note: "Bathrooms and the supply lines that feed them.", systems: ["plumbing"], y: 11.2 },
    main: { name: "Main floor", note: "Kitchens, appliances and the circuits behind them.", systems: ["installation", "electrical"], y: 6 },
    basement: { name: "Basement", note: "The mechanical heart: panel, furnace, water heater.", systems: ["electrical", "hvac", "water-heaters"], y: 1.2 },
    below: { name: "Below grade", note: "Everything under the slab and outside the walls.", systems: ["radon", "foundation", "sewer"], y: -1.6 }
  };
  const DAY = [
    { h: 5.5, key: "hvac", title: "The furnace short-cycles", body: "It's −27 °C before sunrise. The first call of the day is the one that keeps the house warm." },
    { h: 7.1, key: "water-heaters", title: "The shower runs cold", body: "A tank past its tenth winter often gives notice this way: rusty water first, then no hot water at all." },
    { h: 9.75, key: "electrical", title: "A breaker trips, again", body: "Kettle, toaster and a space heater on one 15 A kitchen circuit. Resetting it is not a fix." },
    { h: 14.5, key: "roofing", title: "Meltwater backs up at the eaves", body: "A chinook melts the snow, the eaves freeze again, and an ice dam pushes water under the shingles." },
    { h: 17.75, key: "sewer", title: "The floor drain gurgles", body: "Roots in an old clay lateral slow the line until the lowest drain in the house backs up." },
    { h: 20.5, key: "installation", title: "The EV charger comes on", body: "A 48 A charger on a 100 A service leaves little room for the dryer, the range and the furnace." },
    { h: 23.2, key: "radon", title: "The quiet one", body: "With windows shut all winter, radon can build up with no smell and no sign. Only a test tells you." }
  ];

  /* --------------------------------------------------------------- loader */
  const html = document.documentElement;
  const loadN = $("#loadN");
  const t0 = performance.now();
  let stageReady = !!window.HAUSE_STAGE || html.classList.contains("no-webgl");
  window.addEventListener("hause:stage-ready", () => { stageReady = true; });
  (function tickLoad() {
    const el = performance.now() - t0;
    if (window.HAUSE_STAGE) stageReady = true;
    const target = stageReady ? 100 : Math.min(92, el / 25);
    const cur = parseInt(loadN.textContent, 10) || 0;
    const next = Math.min(100, cur + Math.max(1, Math.ceil((target - cur) * 0.2)));
    loadN.textContent = String(next).padStart(2, "0");
    if ((next >= 100 && el > (reduce ? 200 : 1300)) || el > 5000) { html.classList.remove("is-loading"); return; }
    requestAnimationFrame(tickLoad);
  })();

  /* ---------------------------------------------------------- word splits */
  $$("[data-split]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", el.textContent.trim());
    el.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(" ");
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -12% 0px" });
    $$("[data-split]").forEach((el) => io.observe(el));
  } else $$("[data-split]").forEach((el) => el.classList.add("in"));

  /* ------------------------------------------------ bar, menu, dock, glow */
  const bar = $("#bar"), dock = $(".dock"), request = $("#request"), story = $("#story");
  const menuBtn = $("#menuBtn"), menuPanel = $("#menuPanel");
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") !== "true";
    menuBtn.setAttribute("aria-expanded", String(open)); menuPanel.hidden = !open;
  });
  menuPanel.addEventListener("click", (e) => { if (e.target.closest("a")) { menuBtn.setAttribute("aria-expanded", "false"); menuPanel.hidden = true; } });

  const glow = $("#glow");
  let gx = 0, gy = 0, gtx = 0, gty = 0;
  if (fine && !reduce) {
    window.addEventListener("pointermove", (e) => { gtx = e.clientX; gty = e.clientY; glow.classList.add("is-on"); }, { passive: true });
    (function loop() { gx = lerp(gx, gtx, 0.14); gy = lerp(gy, gty, 0.14); glow.style.transform = `translate3d(${gx}px,${gy}px,0)`; requestAnimationFrame(loop); })();
    $$("[data-magnet]").forEach((b) => {
      b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`; });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }

  // Any link with data-cat pre-selects the form's service category.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-cat]");
    if (!a) return;
    const sel = $("#f-category");
    if (sel && a.dataset.cat) { sel.value = a.dataset.cat; clearErr("category"); }
  });

  /* ------------------------------------------------------------- director */
  const stage = () => window.HAUSE_STAGE;
  const scenes = $$("[data-scene]").map((el) => ({ el, name: el.dataset.scene }));
  const layerItems = $$("#layerList li");
  const callouts = $$(".callout");
  const roomsLit = $("#roomsLit");
  let selectedLevel = "basement";
  let dayIndex = -1;
  let storyVisible = true;
  let ticking = false;
  let flatTimer = 0, flatNow = false;
  const pill = $("#chapill"), pillT = $("#chapillT");

  // Every scene starts from the same neutral state for the newer stage controls, then overrides what it needs.
  const RESET = { cut: 0, lift: 0, section: 0, cutX: 0.45, ugFocus: null, fx: 0, fz: 0, lensY: 0, season: 0, snowfall: 1, smoke: 1, aurora: 0, beacons: 0, melt: 0, icicles: 0, zk: 0, dof: 0, zoom: null };
  // Act II in 3D: a chapter whose close-up set the stage has; the SVG drawing stays as the fallback
  const shotCache = {};
  function zoomShots(S, name) {
    if (window.HAUSE_FLAT || !S || !S.zoomSets || !S.zoomSets.includes(name)) return null;
    if (!shotCache[name]) shotCache[name] = S.zoomShots(name) || [];
    return shotCache[name].length ? shotCache[name] : null;
  }
  const INSIDE_OFF = { ghost: 0, thermal: 0, netE: 0, netW: 0, netA: 0, netR: 0, netFocus: null };
  const sysSteps = $$("#sysSteps li"), sysTags = $$("#sysTags .tag"), thermo = $("#thermoScale"), scan = $("#scan");
  let sysStep = -2;
  function sysUI(step) {
    if (step === sysStep) return;
    sysStep = step;
    sysSteps.forEach((li, i) => { li.classList.toggle("is-on", i === step); li.classList.toggle("is-past", i < step); });
    sysTags.forEach((tg) => tg.classList.toggle("is-on", +tg.dataset.step === step));
    if (thermo) thermo.classList.toggle("is-on", step === 4);
  }
  // The stepped chapters (tour, below grade) share one pattern: a list of steps and tags pinned to 3D anchors.
  function Stepper(listSel, tagsSel) {
    const items = $$(listSel + " li"), tags = $$(tagsSel + " .tag");
    const o = { tags, step: -2, ui(step) {
      if (step === o.step) return;
      o.step = step;
      items.forEach((li, i) => { li.classList.toggle("is-on", i === step); li.classList.toggle("is-past", i < step); });
      tags.forEach((tg) => tg.classList.toggle("is-on", +tg.dataset.step === step));
    } };
    return o;
  }
  const tourUI = Stepper("#tourSteps", "#tourTags"), ugUI = Stepper("#ugSteps", "#ugTags");
  const progress = (el, vh) => { const r = el.getBoundingClientRect(); return { p: clamp(-r.top / Math.max(1, r.height - vh), 0, 1), top: r.top, bottom: r.bottom }; };
  // the height a pinned scene really occupies (100svh). window.innerHeight changes while a phone's toolbar slides in and
  // out; measuring the small viewport instead keeps scene progress, and with it the camera, from jumping mid-scroll
  const svhProbe = document.createElement("div");
  svhProbe.style.cssText = "position:absolute;left:0;top:0;width:1px;height:100vh;height:100svh;visibility:hidden;pointer-events:none";
  document.body.appendChild(svhProbe);
  let pinH = 0, pinW = 0;
  const viewH = () => {
    if (window.innerWidth !== pinW || !pinH) { pinW = window.innerWidth; pinH = svhProbe.offsetHeight || window.innerHeight; }
    return pinH;
  };
  window.addEventListener("resize", () => { if (window.innerWidth !== pinW) pinH = 0; }, { passive: true });

  // chapter rail
  const chapterEls = $$("#chapters a"), chapterBox = $("#chapters");
  let chapterNow = "";
  function chapterUI(name, show) {
    if (chapterBox) chapterBox.classList.toggle("is-on", show);
    if (pill) pill.classList.toggle("is-on", show);
    if (name === chapterNow) return;
    chapterNow = name;
    if (pillT) { const a = chapterEls.find((x) => x.dataset.ch === name); pillT.textContent = a ? a.textContent : ""; }
    const idx = chapterEls.findIndex((a) => a.dataset.ch === name);
    chapterEls.forEach((a, i) => { a.classList.toggle("is-on", i === idx); a.classList.toggle("is-past", i < idx); });
    if (chapterEls[idx]) { chapterEls[idx].classList.add("is-flash"); setTimeout(() => chapterEls[idx] && chapterEls[idx].classList.remove("is-flash"), 1800); }
  }

  // season data for the twelve-month chapter
  const SEASONS = [
    { name: "Winter", code: "S-1 · Dec to Feb", temp: "−35 °C to +5 °C", title: "The furnace, the roof and the pipes carry the season.", body: "A chinook can lift the temperature 25 degrees in a night and refreeze the eaves by morning. Furnaces fail on the coldest day, and a frozen line fails with them.", sites: ["replacefurnace.ca", "calgaryroofers.ca", "burstpipe.ca"], cat: "hvac", cta: "Request heating & HVAC" },
    { name: "Spring", code: "S-2 · Mar to May", temp: "Thaw, rain and 20° swings", title: "Meltwater finds every crack.", body: "Snow becomes water that has to go somewhere: weeping tile, the sump, the sewer, the grading. This is when a basement tells you what the winter did to it.", sites: ["crackedfoundations.ca", "sewerscope.ca", "weepingtilerepair.ca"], cat: "foundation", cta: "Request a foundation check" },
    { name: "Summer", code: "S-3 · Jun to Aug", temp: "Up to +35 °C, hail season", title: "Hail, heat and the long list of outdoor jobs.", body: "Roofs, decks, paint and solar all work in summer. So does hail: Calgary sits in Canada's hail corridor, and the damage is easiest to document straight after a storm.", sites: ["calgaryroofers.ca", "solarinstaller.ca", "compositedecking.ca", "calgaryhomepainting.ca"], cat: "roofing", cta: "Request a roof inspection" },
    { name: "Autumn", code: "S-4 · Sep to Nov", temp: "First frost before October", title: "Close the house up before it closes you in.", body: "Furnace tune-up, gutters, outdoor taps, and a radon test while the windows are shut. The cheapest repairs of the year are the ones you do before the first snow.", sites: ["maintaining.ca", "radonlab.ca", "calgaryductcleaning.ca"], cat: "maintenance", cta: "Request a maintenance visit" }
  ];
  const sEl = { name: $("#seasonName"), temp: $("#seasonTemp"), code: $("#seasonCode"), title: $("#seasonTitle"), body: $("#seasonBody"), sites: $("#seasonSites"), cta: $("#seasonCta"), dot: $("#seasonDot"), card: $("#seasonCard"), rail: $$("#seasonRail li") };
  let seasonNow = -1;
  function seasonUI(s) {
    const idx = Math.floor(((s + 0.125) % 1) * 4);
    if (sEl.dot) { const ang = s * Math.PI * 2 - Math.PI / 2; sEl.dot.setAttribute("cx", (60 + Math.cos(ang) * 46).toFixed(1)); sEl.dot.setAttribute("cy", (60 + Math.sin(ang) * 46).toFixed(1)); }
    sEl.rail.forEach((li, i) => { li.classList.toggle("is-on", i === idx); li.classList.toggle("is-past", i < idx); });
    if (idx === seasonNow) return;
    seasonNow = idx;
    const d = SEASONS[idx];
    if (!sEl.name) return;
    sEl.name.textContent = d.name; sEl.temp.textContent = d.temp; sEl.code.textContent = d.code; sEl.title.textContent = d.title; sEl.body.textContent = d.body;
    sEl.sites.innerHTML = d.sites.map(siteLink).join("");
    sEl.cta.textContent = d.cta + " ↗"; sEl.cta.dataset.cat = d.cat;
    sEl.card.classList.remove("is-swap"); void sEl.card.offsetWidth; sEl.card.classList.add("is-swap");
  }
  const blockN = $("#blockN");
  const netTotal = $("#netGrid li > a").length || 142;

  function direct() {
    const S = stage(); const vh = viewH();
    const sr = story.getBoundingClientRect();
    const inStory = sr.bottom > vh * 0.15;
    if (S) {
      if (inStory && !storyVisible) { S.resume(); storyVisible = true; }
      if (!inStory && storyVisible && sr.bottom < -vh * 0.2) { S.pause(); storyVisible = false; }
    }
    let active = scenes[0], ap = 0;
    scenes.forEach((s) => { const g = progress(s.el, vh); if (g.top <= vh * 0.5 && g.bottom > vh * 0.5) { active = s; ap = g.p; } });
    chapterUI(active.name, inStory && sr.top < vh * 0.5);
    const flat = !!active.el.dataset.flat;
    const zname = flat ? active.name.replace(/^z-/, "") : null;
    const shots = flat && window.HAUSE_ZOOM ? zoomShots(S, zname) : null;
    if (window.HAUSE_ZOOM) { window.HAUSE_ZOOM.setActive(flat ? active.name : null); if (flat) window.HAUSE_ZOOM.update(active.name, ap, !!shots); }
    if (shots) {
      // Act II, 3D: the stage flies into the chapter's close-up set, one camera shot per step
      if (flatNow) { flatNow = false; clearTimeout(flatTimer); }
      if (!storyVisible) { S.resume(); storyVisible = true; }
      sysUI(-1); tourUI.ui(-1); ugUI.ui(-1); layerItems.forEach((li) => li.classList.remove("is-on")); callouts.forEach((c) => { c.style.opacity = "0"; }); canvasPointer(false);
      const z = window.HAUSE_ZOOM.info(active.name, ap), sh = shots[Math.min(z.step, shots.length - 1)] || {};
      const narrow = window.innerWidth < 700;
      const st = Object.assign({ explode: 0, marks: 0, level: null, interactive: false, focusSys: null, ground: 1, time: 19.4, orbit: 0.015, dof: 0 }, sh, narrow && sh.narrow ? sh.narrow : {},
        { zoom: zname, zk: 1, zs: z.step, zp: ap, zq: z.q, visible: inStory ? 1 : 0 });
      delete st.narrow;
      if (st.tx === undefined) st.tx = -0.17 * st.radius;
      if (narrow && !st.lensY) st.lensY = -0.2;
      if (reduce) st.dof = Math.min(st.dof, 0.6);
      S.set(RESET); S.set(INSIDE_OFF); S.set(st);
      return;
    }
    if (flat) {
      // Act II: the drawing owns the screen. Fade the 3D stage, then rest it until the story returns to the house.
      sysUI(-1); tourUI.ui(-1); ugUI.ui(-1); layerItems.forEach((li) => li.classList.remove("is-on")); callouts.forEach((c) => { c.style.opacity = "0"; }); canvasPointer(false);
      if (S) { S.set({ visible: 0 }); if (!flatNow) { flatNow = true; clearTimeout(flatTimer); flatTimer = setTimeout(() => { if (flatNow && storyVisible) { S.pause(); storyVisible = false; } }, 650); } }
      return;
    }
    if (flatNow) { flatNow = false; clearTimeout(flatTimer); if (S && !storyVisible) { S.resume(); storyVisible = true; } }
    if (!S) return;
    const vis = inStory ? 1 : 0;
    S.set(RESET);
    if (active.name !== "systems") { S.set(INSIDE_OFF); sysUI(-1); }
    if (active.name !== "tour") tourUI.ui(-1);
    if (active.name !== "underground") ugUI.ui(-1);
    if (active.name === "hero") {
      S.set({ explode: 0, radius: lerp(36, 31, ap), theta: 0.55 - ap * 0.3, phi: 1.36 - ap * 0.05, ty: 4.2, tx: -6, time: 19.4, marks: 0, ground: 1, focusSys: null, level: null, interactive: false, orbit: 0.05, visible: vis });
    } else if (active.name === "explode") {
      const e = smooth(0.06, 0.62, ap);
      S.set({ explode: e, radius: lerp(31, 52, e), theta: lerp(0.25, -0.55, smooth(0, 0.9, ap)), phi: lerp(1.31, 1.2, e), ty: lerp(4.2, 6.2, e), tx: -7.5, time: 19.4, marks: smooth(0.4, 0.75, ap), ground: lerp(1, 0.08, e), focusSys: null, level: null, interactive: false, orbit: 0.02, visible: vis });
      const idx = ap > 0.55 ? Math.min(4, Math.floor(((ap - 0.55) / 0.45) * 5)) : -1;
      layerItems.forEach((li, i) => li.classList.toggle("is-on", i === idx));
      callouts.forEach((c) => { c.style.opacity = (smooth(0.55, 0.72, ap) * (1 - smooth(0.96, 1, ap))).toFixed(3); });
    } else if (active.name === "levels") {
      const lv = LEVELS[selectedLevel];
      S.set({ explode: 1, radius: 42, theta: -0.55, phi: 1.22, ty: lerp(6.2, lv.y, 0.85), tx: -8.5, marks: 1, ground: 0.08, level: selectedLevel, interactive: true, focusSys: null, orbit: 0.03, time: 19.4, visible: vis });
      callouts.forEach((c) => { c.style.opacity = "0"; });
    } else if (active.name === "tour") {
      // glass house, then the main floor, the upper floor and the basement. The roof and floors above the one we are in lift away.
      const step = ap < 0.2 ? 0 : ap < 0.46 ? 1 : ap < 0.72 ? 2 : 3;
      const K = [
        { lift: 0, ty: 3.8, radius: 34, phi: 1.2, theta: 0.5, ground: 1 },
        { lift: 2, ty: 1.5, radius: 27, phi: 1.0, theta: 0.5, ground: 1 },
        { lift: 1, ty: 4.7, radius: 27, phi: 1.02, theta: 0.58, ground: 1 },
        { lift: 3, ty: -1.8, radius: 21.5, phi: 0.98, theta: 0.5, ground: 0.07, tx: -4.2 }
      ][step];
      S.set(Object.assign({ explode: 0, tx: -5.5, time: 18.9, marks: 0, level: null, interactive: false, focusSys: null, orbit: 0.02, visible: vis, cut: smooth(0.02, 0.17, ap) }, K, { theta: K.theta + (ap - [0.1, 0.33, 0.59, 0.86][step]) * 0.9 }));
      tourUI.ui(step);
    } else if (active.name === "systems") {
      // 0–6% glass in · then power, water, air, radon draw in turn · 80% on: thermal camera
      const heat = ap > 0.8;
      const keep = 1 - smooth(0.77, 0.8, ap);
      const step = heat ? 4 : ap < 0.24 ? 0 : ap < 0.42 ? 1 : ap < 0.6 ? 2 : 3;
      const travel = clamp(ap / 0.78, 0, 1);
      S.set({
        explode: 0, marks: 0, level: null, interactive: false, focusSys: null, visible: vis, orbit: 0.02, time: 21.3,
        ghost: smooth(0, 0.06, ap) * keep, thermal: heat ? 1 : 0, netFocus: heat ? null : ["netE", "netW", "netA", "netR"][step],
        netE: smooth(0.05, 0.2, ap) * keep, netW: smooth(0.24, 0.38, ap) * keep, netA: smooth(0.42, 0.56, ap) * keep, netR: smooth(0.6, 0.72, ap) * keep,
        ground: heat ? 1 : 0.1,
        radius: heat ? 34 : lerp(37, 39, travel), theta: heat ? 0.42 : lerp(0.95, -0.55, travel), phi: heat ? 1.38 : 1.25,
        ty: heat ? 4.2 : step === 3 ? 4.8 : step === 1 ? 2.8 : 3.6, tx: -7
      });
      sysUI(step);
    } else if (active.name === "underground") {
      // the cut sweeps across the lot, then each service is lit in turn
      const step = ap < 0.17 ? 0 : ap < 0.36 ? 1 : ap < 0.55 ? 2 : ap < 0.75 ? 3 : 4;
      const K = [
        { radius: 52, ty: -1.5, fz: 0, phi: 1.4 }, { radius: 31, ty: -0.6, fz: 11, phi: 1.4 }, { radius: 30, ty: -1.2, fz: -9, phi: 1.4 },
        { radius: 22, ty: -1.2, fz: 2.4, phi: 1.38 }, { radius: 34, ty: -0.4, fz: -1.5, phi: 1.36 }
      ][step];
      S.set(Object.assign({ explode: 0, tx: -9, time: 13, marks: 0, level: null, interactive: false, focusSys: null, orbit: 0, visible: vis, ground: 1, season: 0.5, snowfall: 0,
        section: smooth(0.0, 0.15, ap), cutX: step === 4 ? -1.35 : 0.45, ugFocus: [null, "street", "sewer", "found", "radon"][step], theta: -1.28 + (ap - 0.5) * 0.1 }, K, { phi: lerp(0.62, K.phi, smooth(0.0, 0.17, ap)) }));
      ugUI.ui(step);
    } else if (active.name === "day") {
      const time = 5.5 + ap * 18.3;
      // the neighbours line up along the north and south sides, so while the camera circles the north side it climbs and looks down over them
      const swing = Math.sin(Math.PI * clamp((ap - 0.3) / 0.62, 0, 1));
      S.set({ explode: 0, radius: 34 + 4 * swing, theta: 0.55 + ap * 1.8, phi: 1.32 - 0.44 * swing, ty: 4.2, tx: -6, time, marks: 0, ground: 1, level: null, interactive: false, orbit: 0, visible: vis });
      setDay(time);
    } else if (active.name === "seasons") {
      const s = clamp(ap, 0, 1);
      S.set({ explode: 0, radius: 36 - Math.sin(s * Math.PI) * 4, theta: -0.25 + s * 1.35, phi: 1.3, ty: 4.2, tx: -6, time: 10.6, marks: 0, ground: 1, level: null, interactive: false, orbit: 0, visible: vis, season: s });
      seasonUI(s);
    } else if (active.name === "block") {
      const p = smooth(0.04, 0.55, ap);
      S.set({ explode: 0, radius: lerp(36, 122, p), theta: lerp(0.55, 0.32, p), phi: lerp(1.3, 0.98, p), ty: lerp(4.2, 5, p), tx: lerp(-6, -2, p), time: 19.4, marks: 0, ground: 1, level: null, interactive: false, orbit: 0.015, visible: vis, beacons: smooth(0.2, 0.85, ap) });
      if (blockN) blockN.textContent = String(Math.round(netTotal * smooth(0.25, 0.9, ap)));
    }
    if (active.name !== "explode") layerItems.forEach((li) => li.classList.remove("is-on"));
    canvasPointer(active.name === "levels");
  }
  const stageCanvas = $("#stage");
  function canvasPointer(on) { stageCanvas.style.pointerEvents = on ? "auto" : "none"; }
  canvasPointer(false);

  // Frame hook: explode callouts follow their layers; the hero readout follows the lights.
  function hookStage() {
    const S = stage(); if (!S) return;
    S.onFrame = () => {
      if (roomsLit) roomsLit.textContent = String(S.roomsLit || 0);
      if (callouts[0] && callouts[0].style.opacity !== "0" && callouts[0].style.opacity !== "") {
        const pts = S.projectLevels(), vw = window.innerWidth;
        const ws = callouts.map((c) => c.offsetWidth || 220);
        callouts.forEach((c, n) => {
          const i = S.levels.indexOf(c.dataset.level); const p = pts[i];
          if (p) c.style.transform = `translate3d(${(Math.min(p.x + 48, vw - ws[n] - 20)).toFixed(1)}px, ${(p.y - 22).toFixed(1)}px, 0)`;
        });
      }
    };
    S.onPick = (level) => { if (level && LEVELS[level]) selectLevel(level); };
    const baseFrame = S.onFrame;
    const tagSets = [{ tags: sysTags, on: () => sysStep >= 0 }, { tags: tourUI.tags, on: () => tourUI.step >= 0 }, { tags: ugUI.tags, on: () => ugUI.step >= 0 }];
    S.onFrame = () => {
      baseFrame();
      if (!S.projectAnchors || window.innerWidth < 760) return;
      const active = tagSets.filter((t) => t.on());
      if (!active.length) return;
      const pts = S.projectAnchors(), vw = window.innerWidth;
      active.forEach((set) => {
        const placed = [];
        // measure every label first, then move them all: reading a width after moving another label would force a
        // fresh layout for each label, every frame
        const live = set.tags.filter((tg) => tg.classList.contains("is-on") && pts[tg.dataset.anchor]).map((tg) => [tg, tg.offsetWidth || 120]);
        live.forEach(([tg, w]) => {
          const p = pts[tg.dataset.anchor];
          // a label that would run off the right edge flips to the left of its dot; labels never sit on top of each other
          const flip = p.x + 14 + w > vw - 16;
          const x = flip ? p.x - w - 28 : p.x;
          let y = p.y;
          for (let n = 0; n < 4; n++) {
            const hit = placed.find((q) => Math.abs(q.y - y) < 30 && x < q.x + q.w + 24 && q.x < x + w + 24);
            if (!hit) break;
            y = hit.y + 30;
          }
          placed.push({ x, y, w });
          // a label whose anchor is out of frame is hidden rather than cut in half
          tg.classList.toggle("is-off", p.x < 24 || p.x > vw - 24 || p.y < 74 || p.y > window.innerHeight - 24);
          tg.classList.toggle("is-flip", flip);
          tg.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        });
      });
    };
    // Act II pins follow the 3D set
    const frame2 = S.onFrame;
    S.onFrame = () => { frame2(); if (window.HAUSE_ZOOM && window.innerWidth >= 760) window.HAUSE_ZOOM.pins3d(S.projectAnchors()); };
    // build the close-up sets in idle time, one at a time, so the first fly-in does not stall
    if (S.prebuildZoom) {
      const idle = window.requestIdleCallback || ((f) => setTimeout(f, 200));
      const next = () => idle(() => { if (S.prebuildZoom()) setTimeout(next, 900); }, { timeout: 4000 });
      setTimeout(next, 3500);
    }
    S.onThermal = () => { if (!scan || reduce) return; scan.classList.remove("is-on"); void scan.offsetWidth; scan.classList.add("is-on"); };
  }
  if (stage()) hookStage(); else window.addEventListener("hause:stage-ready", hookStage, { once: true });

  /* --------------------------------------------------------------- levels */
  const tabs = $$("#levelTabs button");
  const card = $("#levelCard");
  function selectLevel(key) {
    selectedLevel = key;
    tabs.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.level === key)));
    const lv = LEVELS[key];
    card.innerHTML = `<p class="eyebrow">${lv.systems.map((k) => SYSTEMS[k].code).join(" · ")}</p><h3>${lv.name}</h3><p class="small">${lv.note}</p><ul>${lv.systems.map((k) => {
      const s = SYSTEMS[k];
      return `<li><a href="#request" data-cat="${k}"><span>${s.code}</span><b>${s.name}</b><em>Request ↗</em><small>${s.covers}</small></a></li>`;
    }).join("")}</ul>`;
    const S = stage(); if (S) S.selectLevel(key);
    requestDirect();
  }
  tabs.forEach((b) => b.addEventListener("click", () => selectLevel(b.dataset.level)));
  selectLevel(selectedLevel);

  /* ------------------------------------------------------------------ day */
  const clockT = $("#clockT"), sunDot = $("#sunDot"), evCard = $("#eventCard"), rail = $("#eventRail");
  DAY.forEach((d, i) => {
    const li = document.createElement("li");
    li.title = `${hhmm(d.h)} ${d.title}`;
    li.addEventListener("click", () => {
      const sc = $("#day"); const vh = window.innerHeight;
      const p = (d.h + 0.05 - 5.5) / 18.3;
      const top = sc.getBoundingClientRect().top + window.scrollY + p * (sc.offsetHeight - vh);
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    });
    rail.appendChild(li);
    d.i = i;
  });
  function hhmm(h) { const m = Math.round((h % 24) * 12) * 5; const H = Math.floor(m / 60) % 24; return `${String(H).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`; }
  function setDay(time) {
    clockT.textContent = hhmm(time);
    const h = time % 24;
    const day = h >= 7.4 && h <= 18.2;
    const f = day ? (h - 7.4) / 10.8 : (((h - 18.2) + 24) % 24) / 13.2;
    sunDot.setAttribute("cx", (10 + 200 * f).toFixed(1));
    sunDot.setAttribute("cy", (110 - Math.sin(Math.PI * f) * 100).toFixed(1));
    sunDot.setAttribute("fill", day ? ACC() : "#c9d3e6");
    sunDot.setAttribute("r", day ? "8" : "6");
    let idx = 0; DAY.forEach((d, i) => { if (time >= d.h) idx = i; });
    $$("li", rail).forEach((li, i) => { li.classList.toggle("is-on", i === idx); li.classList.toggle("is-past", i < idx); });
    const S = stage(); if (S) S.highlight(DAY[idx].key);
    if (idx !== dayIndex) {
      dayIndex = idx;
      const d = DAY[idx], s = SYSTEMS[d.key];
      $("#eventCode").textContent = `${hhmm(d.h)} · ${s.code} ${s.name}`;
      $("#eventTitle").textContent = d.title;
      $("#eventBody").textContent = d.body;
      const cta = $("#eventCta"); cta.dataset.cat = d.key; cta.textContent = `${s.cta} ↗`;
      if (!reduce) { evCard.classList.remove("is-swap"); void evCard.offsetWidth; evCard.classList.add("is-swap"); }
    }
  }
  setDay(5.5);

  /* ------------------------------------------------------ scroll plumbing */
  const navLinks = $$(".nav a");
  const navTargets = navLinks.map((a) => [a, $(a.getAttribute("href"))]).filter((x) => x[1]);
  function onScroll() {
    ticking = false;
    const y = window.scrollY, vh = window.innerHeight;
    // every layout read happens first, then the writes, so one scroll frame never forces a second layout
    const rr = dock ? request.getBoundingClientRect() : null, storyBottom = dock ? story.getBoundingClientRect().bottom : 0;
    let here = null;
    navTargets.forEach(([a, t]) => { const r = t.getBoundingClientRect(); if (r.top < vh * 0.5 && r.bottom > vh * 0.5) here = a; });
    direct();
    bar.classList.toggle("is-solid", y > vh * 0.6);
    if (dock) dock.classList.toggle("is-shown", storyBottom < vh * 0.5 && !(rr.top < vh && rr.bottom > 0));
    navLinks.forEach((a) => a.classList.toggle("is-here", a === here));
  }
  function requestDirect() { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }
  window.addEventListener("scroll", requestDirect, { passive: true });
  window.addEventListener("resize", requestDirect);
  window.addEventListener("hause:stage-ready", requestDirect);
  requestDirect();

  /* ------------------------------------------------------- verified pass */
  // The sample pro record clears one line at a time when it scrolls into view, then takes the stamp.
  (function pass() {
    const card = $("#pass"); if (!card) return;
    const items = $$(".pass__checks li", card), state = $(".pass__state", card);
    const finish = () => { card.classList.add("is-cleared"); state.textContent = "Cleared"; };
    if (reduce || !("IntersectionObserver" in window)) { items.forEach((li) => li.classList.add("is-ok")); finish(); return; }
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      items.forEach((li, i) => setTimeout(() => li.classList.add("is-ok"), 350 + i * 320));
      setTimeout(finish, 350 + items.length * 320 + 200);
    }, { threshold: 0.35 });
    io.observe(card);
  })();

  /* ---------------------------------------------------------------- x-ray */
  // One wall, four lenses. Thermal and moisture are real scalar fields drawn pixel by pixel,
  // so the reading under the crosshair is the same number the colour shows.
  (function xray() {
    const cv = $("#xrayCanvas"); if (!cv) return;
    const ctx = cv.getContext("2d");
    const note = $("#xrayNote");
    let W = 1200, H = 640, dpr = 1, mode = "xray";
    const face = document.createElement("canvas"), xr = document.createElement("canvas"), th = document.createElement("canvas"), mo = document.createElement("canvas"), ld = document.createElement("canvas");
    const lens = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let pointerIn = false, lastMove = 0, running = false, t = 0;
    const FONT = getComputedStyle(document.body).fontFamily;
    const NOTES = {
      xray: "X-ray: framing, wiring, supply lines, ductwork and insulation behind the drywall.",
      thermal: "Thermal: the surface temperature of the wall. Cold spots are where heat leaks out.",
      moisture: "Moisture: wood and drywall moisture content. Anything above about 19% is worth a look.",
      load: "Load: live current on each circuit against its breaker. Red means it's near the limit."
    };
    const G = { win: { x: 0.08, y: 0.14, w: 0.26, h: 0.44 }, outlets: [{ x: 0.46, y: 0.83 }, { x: 0.9, y: 0.83 }], sw: { x: 0.4, y: 0.5 }, thermo: { x: 0.6, y: 0.48 }, duct: { x: 0.64, w: 0.07 }, pex: 0.83, gap: 5, bays: 12 };
    const gauss = (d, s) => Math.exp(-(d * d) / (2 * s * s));

    // Temperature (°C) at a point in unit space.
    function tempAt(u, v) {
      const a = W / H, wn = G.win, bw = 1 / G.bays;
      let T = 19.6;
      const sx = (u % bw) / bw; T -= 1.3 * (gauss(sx, 0.03) + gauss(1 - sx, 0.03));
      const gx = (G.gap + 0.5) * bw; T -= 9.4 * Math.exp(-Math.pow((u - gx) / (bw * 0.48), 4) - Math.pow((v - 0.48) / 0.36, 4));
      if (u > wn.x && u < wn.x + wn.w && v > wn.y && v < wn.y + wn.h) T = 12.5 + (v - wn.y) / wn.h * 1.6;
      [[wn.x, wn.y], [wn.x + wn.w, wn.y], [wn.x, wn.y + wn.h], [wn.x + wn.w, wn.y + wn.h]].forEach(([x, y]) => { T -= 6.5 * gauss(Math.hypot((u - x) * a, v - y), 0.045); });
      T -= 6.2 * gauss(v - 0.975, 0.03) * (0.7 + 0.3 * Math.sin(u * 40));
      const dc = G.duct.x + G.duct.w / 2; T += 11.5 * gauss(u - dc, G.duct.w * 0.55) * (v > 0.1 && v < 0.93 ? 1 : 0.4) + 3 * gauss(Math.hypot((u - dc) * a, v - 0.25), 0.07);
      G.outlets.forEach((o) => { T -= 5.2 * gauss(Math.hypot((u - o.x) * a, v - o.y), 0.035); });
      T += 0.25 * Math.sin(u * 97 + v * 61) * Math.sin(u * 23 - v * 41);
      return T;
    }
    // Moisture content (%) at a point.
    function mcAt(u, v) {
      const a = W / H, wn = G.win;
      let m = 9.6 + 0.5 * Math.sin(u * 71 + v * 37) * Math.sin(u * 19 - v * 53);
      const lx = wn.x + wn.w * 0.18, ly = wn.y + wn.h;
      if (v > ly - 0.04) m += 19 * Math.exp(-Math.pow((u - lx) * a / 0.07, 2) - Math.pow((v - ly) / 0.34, 2)) * (1 + 0.12 * Math.sin(v * 60 + u * 30));
      m += 9 * gauss(Math.hypot((u - G.pex) * a, v - 0.9), 0.06);
      m += 3.2 * gauss(v - 0.98, 0.025);
      return m;
    }
    const IRON = [[0, 3, 0, 13], [0.2, 41, 5, 107], [0.42, 153, 10, 140], [0.62, 237, 77, 31], [0.85, 255, 194, 41], [1, 255, 250, 220]];
    const WET = [[0, 16, 22, 29], [0.3, 23, 56, 74], [0.55, 31, 126, 166], [0.8, 99, 212, 255], [1, 234, 252, 255]];
    function ramp(stops, t) {
      t = clamp(t, 0, 1); let i = 0; while (i < stops.length - 2 && stops[i + 1][0] < t) i++;
      const [t0, r0, g0, b0] = stops[i], [t1, r1, g1, b1] = stops[i + 1], k = (t - t0) / (t1 - t0);
      return [r0 + (r1 - r0) * k, g0 + (g1 - g0) * k, b0 + (b1 - b0) * k];
    }
    const RANGE = { thermal: [7, 33], moisture: [8, 30] };
    function field(canvas, fn, stops, lo, hi) {
      const s = 2, w = Math.ceil(W / s), h = Math.ceil(H / s);
      const tmp = document.createElement("canvas"); tmp.width = w; tmp.height = h;
      const tc = tmp.getContext("2d"), img = tc.createImageData(w, h), d = img.data;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const [r, g, b] = ramp(stops, (fn((x + 0.5) / w, (y + 0.5) / h) - lo) / (hi - lo)), i = (y * w + x) * 4;
        d[i] = r; d[i + 1] = g; d[i + 2] = b; d[i + 3] = 255;
      }
      tc.putImageData(img, 0, 0);
      const c = canvas.getContext("2d"); c.setTransform(1, 0, 0, 1, 0, 0); c.imageSmoothingEnabled = true; c.drawImage(tmp, 0, 0, canvas.width, canvas.height);
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      return c;
    }
    const CIRCUITS = [
      { name: "Receptacles", breaker: 15, amps: 13.4, pts: [[0, 0.72], [0.46, 0.72], [0.46, 0.8], [0.46, 0.72], [0.9, 0.72], [0.9, 0.8]], note: "Kettle and space heater on one circuit" },
      { name: "Lighting", breaker: 15, amps: 1.2, pts: [[0.4, 0.045], [0.4, 0.47]], note: "Switch leg to the ceiling light" },
      { name: "Thermostat", breaker: 0, amps: 0.3, volts: 24, pts: [[0.64, 0.12], [0.6, 0.12], [0.6, 0.45]], note: "24 V control wire" },
      { name: "Bathroom heater", breaker: 20, amps: 16.1, pts: [[1, 0.2], [0.74, 0.2], [0.74, 0.06]], note: "Dedicated 20 A circuit" }
    ];
    const loadColor = (c) => { const r = c.breaker ? c.amps / c.breaker : 0.1; return r > 0.8 ? "#ff5a3c" : r > 0.6 ? ACC() : c.volts ? "#7fd8ff" : "#7fe0a1"; };

    function size() {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(320, Math.round(r.width)); H = Math.max(300, Math.round(r.height || r.width * 0.53));
      [cv, face, xr, th, mo, ld].forEach((c) => { c.width = W * dpr; c.height = H * dpr; });
      paint();
    }
    function label(c, x, y, a, b, col) {
      c.font = `600 ${Math.max(12, W * 0.012)}px ${FONT}`; c.fillStyle = col || "#ece6da"; c.textAlign = "left"; c.fillText(a, x, y);
      c.font = `500 ${Math.max(10.5, W * 0.0095)}px ui-monospace, monospace`; c.fillStyle = "rgba(236,230,218,.75)"; c.fillText(b, x, y + Math.max(16, W * 0.015));
    }
    function paint() {
      const S = dpr, wn = G.win, wx = wn.x * W, wy = wn.y * H, ww = wn.w * W, wh = wn.h * H, bw = W / G.bays;
      // --- facade: interior drywall at dusk
      let c = face.getContext("2d"); c.setTransform(S, 0, 0, S, 0, 0);
      let g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#2d2a26"); g.addColorStop(1, "#1d1b19"); c.fillStyle = g; c.fillRect(0, 0, W, H);
      const lamp = c.createRadialGradient(W * 0.72, H * 0.1, 10, W * 0.72, H * 0.1, W * 0.6); lamp.addColorStop(0, "rgba(255,196,130,.22)"); lamp.addColorStop(1, "rgba(255,196,130,0)"); c.fillStyle = lamp; c.fillRect(0, 0, W, H);
      g = c.createLinearGradient(0, wy, 0, wy + wh); g.addColorStop(0, "#1a2448"); g.addColorStop(1, "#6d7098"); c.fillStyle = g; c.fillRect(wx, wy, ww, wh);
      c.fillStyle = "rgba(255,255,255,.7)"; for (let i = 0; i < 18; i++) c.fillRect(wx + ((i * 97) % ww), wy + ((i * 53) % wh), 1.5, 1.5);
      c.strokeStyle = "#0f0f10"; c.lineWidth = 10; c.strokeRect(wx, wy, ww, wh); c.lineWidth = 5; c.beginPath(); c.moveTo(wx + ww / 2, wy); c.lineTo(wx + ww / 2, wy + wh); c.stroke();
      c.fillStyle = "#15130f"; c.fillRect(wx - 16, wy + wh + 5, ww + 32, 10);
      c.fillStyle = "#12110f"; c.fillRect(0, H * 0.93, W, H * 0.07);
      const plate = (x, y, w, h) => { c.fillStyle = "#e7e2d8"; c.fillRect(x - w / 2, y - h / 2, w, h); c.fillStyle = "#b9b3a6"; c.fillRect(x - w / 5, y - h / 4, w / 2.5, h / 6); c.fillRect(x - w / 5, y + h / 10, w / 2.5, h / 6); };
      G.outlets.forEach((o) => plate(o.x * W, o.y * H, 22, 36));
      c.fillStyle = "#e7e2d8"; c.fillRect(G.sw.x * W - 11, G.sw.y * H - 18, 22, 36); c.fillStyle = "#b9b3a6"; c.fillRect(G.sw.x * W - 3, G.sw.y * H - 8, 6, 16);
      c.fillStyle = "#e7e2d8"; c.beginPath(); c.arc(G.thermo.x * W, G.thermo.y * H, 20, 0, Math.PI * 2); c.fill(); c.fillStyle = COP(); c.font = `600 11px ${FONT}`; c.textAlign = "center"; c.fillText("21°", G.thermo.x * W, G.thermo.y * H + 4);
      c.fillStyle = "#1a1917"; c.fillRect(G.duct.x * W - 2, H * 0.9, G.duct.w * W + 4, H * 0.035);
      c.fillStyle = "rgba(236,230,218,.08)"; c.fillRect(W * 0.76, H * 0.2, W * 0.14, H * 0.2);
      c.strokeStyle = "rgba(236,230,218,.25)"; c.lineWidth = 2; c.strokeRect(W * 0.76, H * 0.2, W * 0.14, H * 0.2);
      c.fillStyle = "#e7e2d8"; c.fillRect(0.74 * W - 9, 0.06 * H - 4, 18, 10);

      // --- x-ray: framing, wiring, plumbing, duct, insulation
      c = xr.getContext("2d"); c.setTransform(S, 0, 0, S, 0, 0);
      c.fillStyle = "#0a1626"; c.fillRect(0, 0, W, H);
      for (let i = 0; i < G.bays; i++) {
        if (i === G.gap) continue;
        c.fillStyle = "rgba(233,150,160,.16)"; c.fillRect(i * bw + 6, H * 0.06, bw - 12, H * 0.86);
        c.strokeStyle = "rgba(233,150,160,.25)"; c.lineWidth = 1;
        for (let y = H * 0.08; y < H * 0.9; y += 14) { c.beginPath(); c.moveTo(i * bw + 8, y); c.quadraticCurveTo(i * bw + bw / 2, y + 8, i * bw + bw - 8, y); c.stroke(); }
      }
      c.fillStyle = "#b7c7d6"; for (let i = 0; i <= G.bays; i++) c.fillRect(i * bw - 3, 0, 6, H);
      c.fillRect(0, 0, W, H * 0.045); c.fillRect(0, H * 0.925, W, H * 0.04);
      c.fillRect(wx - 10, wy - 22, ww + 20, 20); c.fillRect(wx - 10, wy + wh + 2, ww + 20, 10);
      c.fillStyle = "#0a1626"; c.fillRect(wx, wy, ww, wh);
      c.strokeStyle = "rgba(183,199,214,.6)"; c.setLineDash([6, 6]); c.strokeRect(wx, wy, ww, wh); c.setLineDash([]);
      c.strokeStyle = "#e08a4a"; c.lineWidth = 3.5; c.lineCap = "round"; c.lineJoin = "round";
      c.beginPath(); c.moveTo(0, H * 0.72); c.lineTo(G.outlets[0].x * W, H * 0.72); c.lineTo(G.outlets[0].x * W, G.outlets[0].y * H - 18);
      c.moveTo(G.outlets[0].x * W, H * 0.72); c.lineTo(G.outlets[1].x * W, H * 0.72); c.lineTo(G.outlets[1].x * W, G.outlets[1].y * H - 18);
      c.moveTo(G.sw.x * W, H * 0.045); c.lineTo(G.sw.x * W, G.sw.y * H - 18);
      c.moveTo(W, H * 0.2); c.lineTo(0.74 * W, H * 0.2); c.lineTo(0.74 * W, H * 0.06); c.stroke();
      c.fillStyle = "#1c2b3d"; c.strokeStyle = "#e08a4a"; c.lineWidth = 2;
      [[G.outlets[0].x, G.outlets[0].y], [G.outlets[1].x, G.outlets[1].y], [G.sw.x, G.sw.y]].forEach(([x, y]) => { c.fillRect(x * W - 14, y * H - 20, 28, 40); c.strokeRect(x * W - 14, y * H - 20, 28, 40); });
      c.lineWidth = 5; c.strokeStyle = "#e5694f"; c.beginPath(); c.moveTo(G.pex * W - 7, H); c.lineTo(G.pex * W - 7, H * 0.32); c.stroke();
      c.strokeStyle = "#5aa0e0"; c.beginPath(); c.moveTo(G.pex * W + 7, H); c.lineTo(G.pex * W + 7, H * 0.32); c.stroke();
      c.fillStyle = "rgba(160,170,180,.35)"; c.strokeStyle = "#9aa6b2"; c.lineWidth = 2; c.fillRect(G.duct.x * W, H * 0.12, G.duct.w * W, H * 0.8); c.strokeRect(G.duct.x * W, H * 0.12, G.duct.w * W, H * 0.8);
      for (let y = H * 0.14; y < H * 0.9; y += 18) { c.beginPath(); c.moveTo(G.duct.x * W, y); c.lineTo(G.duct.x * W + G.duct.w * W, y + 8); c.strokeStyle = "rgba(154,166,178,.35)"; c.stroke(); }
      label(c, G.outlets[0].x * W + 22, H * 0.69, "15 A circuit", "14/2 copper · H-101", ACC());
      label(c, G.sw.x * W + 22, H * 0.3, "Switch leg", "Pre-1978? Check for aluminum", ACC());
      label(c, G.pex * W + 20, H * 0.4, "Supply lines", "PEX hot / cold · H-102", "#8fc1f0");
      label(c, G.duct.x * W + G.duct.w * W + 12, H * 0.2 + 34, "Supply duct", "To the upper floor · H-103", "#c9d3dc");
      label(c, G.gap * bw + 8, H * 0.5, "Missing batt", "Cold bay · H-110", "#e9a0aa");
      label(c, wx + 8, wy - 30, "Window header", "Double 2×10", "#b7c7d6");

      // --- thermal (ironbow), drawn from tempAt()
      c = field(th, tempAt, IRON, ...RANGE.thermal);
      label(c, G.gap * bw + 8, H * 0.52, "10.2 °C", "Missing insulation", "#e7dcff");
      label(c, wx + ww + 14, wy + 16, "13.1 °C", "Air leak at the window frame", "#e7dcff");
      label(c, G.duct.x * W + G.duct.w * W + 12, H * 0.3, "31.0 °C", "Warm supply duct", "#1b120a");
      label(c, W * 0.36, H * 0.88, "13.4 °C", "Draft at the rim joist", "#e7dcff");
      label(c, G.outlets[1].x * W - 180, G.outlets[1].y * H - 34, "14.4 °C", "Unsealed outlet box", "#e7dcff");

      // --- moisture, drawn from mcAt()
      c = field(mo, mcAt, WET, ...RANGE.moisture);
      label(c, wx + ww * 0.18 + 16, wy + wh + H * 0.12, "27% MC", "Window flashing leak, drywall soft", "#eafcff");
      label(c, G.pex * W - 210, H * 0.78, "18% MC", "Slow drip at a supply fitting", "#eafcff");
      label(c, W * 0.46, H * 0.3, "10% MC", "Dry framing, normal", "#cfe6f2");

      // --- load: a dark wall, the circuits themselves are drawn live each frame
      c = ld.getContext("2d"); c.setTransform(S, 0, 0, S, 0, 0);
      c.fillStyle = "#070b14"; c.fillRect(0, 0, W, H);
      c.fillStyle = "rgba(143,166,184,.08)"; for (let i = 0; i <= G.bays; i++) c.fillRect(i * bw - 3, 0, 6, H);
      c.fillRect(0, 0, W, H * 0.045); c.fillRect(0, H * 0.925, W, H * 0.04);
      c.strokeStyle = "rgba(143,166,184,.25)"; c.setLineDash([4, 6]); c.strokeRect(wx, wy, ww, wh); c.setLineDash([]);
    }

    const P = (pt) => [pt[0] * W, pt[1] * H];
    function drawCircuits(c) {
      CIRCUITS.forEach((k, i) => {
        const col = loadColor(k), live = k.amps * (1 + 0.04 * Math.sin(t * 3 + i * 2));
        c.save(); c.lineCap = "round"; c.lineJoin = "round";
        c.strokeStyle = col; c.globalAlpha = 0.28; c.lineWidth = 12; c.shadowColor = col; c.shadowBlur = 18;
        c.beginPath(); k.pts.forEach((p, j) => { const [x, y] = P(p); j ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke();
        c.globalAlpha = 1; c.shadowBlur = 0; c.lineWidth = 3; c.setLineDash([10, 12]); c.lineDashOffset = -t * (20 + live * 9);
        c.stroke(); c.restore();
        const end = P(k.pts[k.pts.length - 1]);
        const pct = k.breaker ? Math.round((live / k.breaker) * 100) : null;
        label(c, end[0] + 14, end[1] + (i === 3 ? 20 : -6), `${k.name} · ${live.toFixed(1)} A${pct != null ? ` of ${k.breaker} A` : ""}`, k.note, col);
      });
    }
    function legend(c) {
      // scale bar or panel schedule, outside the lens, bottom right
      const x = 28, y = H - 70, w = 200;
      c.save(); c.globalAlpha = 0.92;
      c.fillStyle = ("rgba(" + BGRGB() + ", .72)"); c.fillRect(x - 12, y - 26, w + 24, 62);
      c.font = "500 10.5px ui-monospace, monospace"; c.textAlign = "left"; c.fillStyle = "rgba(236,230,218,.7)";
      if (mode === "thermal" || mode === "moisture") {
        const stops = mode === "thermal" ? IRON : WET, [lo, hi] = RANGE[mode];
        const gr = c.createLinearGradient(x, 0, x + w, 0); stops.forEach(([s, r, g2, b]) => gr.addColorStop(s, `rgb(${r},${g2},${b})`));
        c.fillText(mode === "thermal" ? "SURFACE °C" : "MOISTURE CONTENT %", x, y - 10);
        c.fillStyle = gr; c.fillRect(x, y, w, 10);
        c.fillStyle = "rgba(236,230,218,.75)"; c.fillText(String(lo), x, y + 26); c.textAlign = "right"; c.fillText(String(hi), x + w, y + 26);
      } else if (mode === "load") {
        c.fillText("PANEL SCHEDULE", x, y - 10);
        CIRCUITS.filter((k) => k.breaker).forEach((k, i) => {
          const r = clamp((k.amps * (1 + 0.04 * Math.sin(t * 3 + CIRCUITS.indexOf(k) * 2))) / k.breaker, 0, 1);
          c.fillStyle = "rgba(236,230,218,.12)"; c.fillRect(x + 92, y - 2 + i * 13, w - 92, 7);
          c.fillStyle = loadColor(k); c.fillRect(x + 92, y - 2 + i * 13, (w - 92) * r, 7);
          c.fillStyle = "rgba(236,230,218,.75)"; c.fillText(k.name.slice(0, 12), x, y + 5 + i * 13);
        });
      }
      c.restore();
    }
    function nearestCircuit(px, py) {
      let best = null, bd = 26;
      CIRCUITS.forEach((k) => {
        for (let j = 1; j < k.pts.length; j++) {
          const [ax, ay] = P(k.pts[j - 1]), [bx, by] = P(k.pts[j]), dx = bx - ax, dy = by - ay;
          const q = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1), 0, 1), d = Math.hypot(px - (ax + q * dx), py - (ay + q * dy));
          if (d < bd) { bd = d; best = k; }
        }
      });
      return best;
    }
    function reading(u, v) {
      const px = u * W, py = v * H, wn = G.win, bw = 1 / G.bays;
      if (mode === "thermal") { const T = tempAt(u, v); return { big: `${T.toFixed(1)} °C`, small: T < 15 ? "Heat escaping" : T > 26 ? "Heat source" : "Normal" }; }
      if (mode === "moisture") { const m = mcAt(u, v); return { big: `${m.toFixed(0)}% MC`, small: m > 19 ? "Wet, investigate" : m > 15 ? "Damp" : "Dry" }; }
      if (mode === "load") { const k = nearestCircuit(px, py); if (!k) return { big: "0.0 A", small: "No live circuit" }; const live = k.amps; return { big: `${live.toFixed(1)} A`, small: k.breaker ? `${Math.round((live / k.breaker) * 100)}% of a ${k.breaker} A breaker` : `${k.volts} V control` }; }
      if (u > wn.x && u < wn.x + wn.w && v > wn.y && v < wn.y + wn.h) return { big: "Window", small: "Double 2×10 header above" };
      if (Math.abs(px - G.pex * W) < 14) return { big: "PEX", small: "Hot and cold supply" };
      if (u > G.duct.x && u < G.duct.x + G.duct.w) return { big: "Duct", small: "Supply air, upper floor" };
      if (nearestCircuit(px, py)) return { big: "14/2", small: "Copper branch circuit" };
      const sx = (u % bw) / bw;
      if (sx < 0.05 || sx > 0.95 || v < 0.045 || v > 0.925) return { big: "Stud", small: "2×6 framing, 16 in on centre" };
      if (Math.floor(u / bw) === G.gap) return { big: "Empty bay", small: "No insulation" };
      return { big: "R-20", small: "Batt insulation" };
    }
    const SRC = { xray: xr, thermal: th, moisture: mo, load: ld };
    function draw() {
      const R = Math.min(W, H) * (W < 600 ? 0.3 : 0.24);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(face, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const x = lens.x * W, y = lens.y * H;
      ctx.save(); ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2); ctx.clip();
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(SRC[mode], 0, 0); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (mode === "load") drawCircuits(ctx);
      // scan line sweeping through the lens
      const sy = y - R + ((t * 90) % (R * 2));
      const sg = ctx.createLinearGradient(0, sy - 18, 0, sy + 2); sg.addColorStop(0, ("rgba(" + ACCRGB() + ", 0)")); sg.addColorStop(1, ("rgba(" + ACCRGB() + ", .28)"));
      ctx.fillStyle = sg; ctx.fillRect(x - R, sy - 18, R * 2, 20);
      ctx.restore();
      // ring, ticks, crosshair
      ctx.strokeStyle = ACC(); ctx.lineWidth = 2; ctx.shadowColor = ("rgba(" + ACCRGB() + ", .8)"); ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2); ctx.stroke(); ctx.shadowBlur = 0;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + t * 0.2; ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * (R + 6), y + Math.sin(a) * (R + 6)); ctx.lineTo(x + Math.cos(a) * (R + 18), y + Math.sin(a) * (R + 18)); ctx.stroke(); }
      ctx.strokeStyle = "rgba(255,255,255,.85)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x - 12, y); ctx.lineTo(x - 4, y); ctx.moveTo(x + 4, y); ctx.lineTo(x + 12, y); ctx.moveTo(x, y - 12); ctx.lineTo(x, y - 4); ctx.moveTo(x, y + 4); ctx.lineTo(x, y + 12); ctx.stroke();
      // live reading pill
      const rd = reading(lens.x, lens.y);
      ctx.font = `600 15px ui-monospace, monospace`; const bwid = Math.max(ctx.measureText(rd.big).width, (ctx.font = "500 11px ui-monospace, monospace", ctx.measureText(rd.small).width)) + 26;
      const px = clamp(x - bwid / 2, 8, W - bwid - 8), py = clamp(y + R + 14, 8, H - 50);
      ctx.fillStyle = ("rgba(" + BGRGB() + ", .82)"); ctx.strokeStyle = ("rgba(" + ACCRGB() + ", .5)"); ctx.beginPath(); ctx.roundRect ? ctx.roundRect(px, py, bwid, 44, 8) : ctx.rect(px, py, bwid, 44); ctx.fill(); ctx.stroke();
      ctx.textAlign = "left"; ctx.fillStyle = ACC(); ctx.font = "600 15px ui-monospace, monospace"; ctx.fillText(rd.big, px + 13, py + 19);
      ctx.fillStyle = "rgba(236,230,218,.75)"; ctx.font = "500 11px ui-monospace, monospace"; ctx.fillText(rd.small, px + 13, py + 35);
      legend(ctx);
    }
    function frame() {
      if (!running) return;
      t += 0.016;
      if (!pointerIn && performance.now() - lastMove > 1200) { lens.tx = 0.5 + Math.sin(t * 0.45) * 0.34; lens.ty = 0.5 + Math.sin(t * 0.7 + 1) * 0.28; }
      lens.x = lerp(lens.x, lens.tx, reduce ? 1 : 0.12); lens.y = lerp(lens.y, lens.ty, reduce ? 1 : 0.12);
      draw();
      requestAnimationFrame(frame);
    }
    const setPt = (e) => { const r = cv.getBoundingClientRect(); lens.tx = clamp((e.clientX - r.left) / r.width, 0, 1); lens.ty = clamp((e.clientY - r.top) / r.height, 0, 1); lastMove = performance.now(); };
    cv.addEventListener("pointerenter", () => { pointerIn = true; });
    cv.addEventListener("pointerleave", () => { pointerIn = false; lastMove = performance.now(); });
    cv.addEventListener("pointermove", setPt);
    cv.addEventListener("pointerdown", setPt);
    $$(".xray__modes button").forEach((b) => b.addEventListener("click", () => {
      mode = b.dataset.mode;
      $$(".xray__modes button").forEach((x) => x.setAttribute("aria-checked", String(x === b)));
      note.textContent = NOTES[mode];
      if (!running) draw();
    }));
    size(); draw();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { size(); draw(); }, 150); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((es) => { const on = es.some((e) => e.isIntersecting); if (on && !running) { running = true; requestAnimationFrame(frame); } else if (!on) running = false; }, { threshold: 0.05 }).observe(cv);
    }
  })();

  /* ------------------------------------------------------------- home age */
  (function age() {
    const input = $("#yearIn"), out = $("#yearOut"), list = $("#checks"), add = $("#ageAdd");
    if (!input) return;
    const NOW = 2026;
    const ITEMS = [
      { key: "electrical", title: "Knob-and-tube wiring", body: "Common in homes built before about 1950. Ungrounded, often buried in insulation, and many insurers ask about it.", hot: (y) => y < 1950 },
      { key: "electrical", title: "Aluminum branch wiring", body: "Installed in many Canadian homes from the mid-1960s to the late 1970s. The connections need inspection.", hot: (y) => y >= 1965 && y <= 1978 },
      { key: "plumbing", title: "Poly-B water lines", body: "Grey polybutylene supply pipe was used in Canada from about 1978 to 1997 and tends to fail at the fittings.", hot: (y) => y >= 1978 && y <= 1997 },
      { key: "asbestos", title: "Asbestos-containing materials", body: "Vermiculite insulation, textured ceilings, pipe wrap and some flooring. Test before you renovate.", hot: (y) => y < 1990 },
      { key: "electrical", title: "A 60 or 100 A service", body: "Built for far less load than a heat pump, an EV charger or a basement suite adds today.", show: (y) => y < 1980 },
      { key: "sewer", title: "Clay or cast-iron sewer lateral", body: "Older laterals crack, sag and let roots in. A camera scope shows the condition before anyone digs.", show: (y) => y < 1980 },
      { key: "foundation", title: "Foundation and drainage", body: "Older foundations may lack modern drainage and damp-proofing. Watch for cracks and damp walls.", show: (y) => y < 1975 },
      { key: "roofing", title: "Roof near the end of its life", body: "Asphalt shingles commonly last 20 to 25 years, less after Calgary hail. Original roof? Time to look.", show: (y) => NOW - y >= 20 },
      { key: "hvac", title: "Furnace past 15 years", body: "If the furnace came with the house, it's due for an assessment before the next cold snap.", show: (y) => NOW - y >= 15 },
      { key: "water-heaters", title: "Original water heater", body: "Tank heaters commonly last 8 to 12 years. If it came with the house, plan for it.", show: (y) => NOW - y >= 9 },
      { key: "installation", title: "EV charger and new circuits", body: "Newer homes usually have room for a Level 2 charger. It needs a contractor's permit in Calgary.", show: (y) => y >= 2000 },
      { key: "solar", title: "Solar-ready roof", body: "A newer roof with good sun is the right time to assess solar, before the next re-roof.", show: (y) => y >= 1995 },
      { key: "radon", title: "Radon test", body: "Every home, any age. Health Canada recommends every home be tested for at least three months.", show: () => true }
    ];
    let current = [];
    function render() {
      const y = +input.value;
      out.textContent = y;
      input.style.setProperty("--pct", `${((y - 1905) / (2026 - 1905)) * 100}%`);
      current = ITEMS.filter((it) => (it.hot ? it.hot(y) : it.show(y))).sort((a, b) => (b.hot ? 1 : 0) - (a.hot ? 1 : 0));
      list.innerHTML = current.map((it, i) => `<li class="${it.hot ? "is-hot" : ""}" style="--i:${i}"><span class="code">${SYSTEMS[it.key].code}</span><b>${it.title}</b><p>${it.body}</p></li>`).join("");
    }
    input.addEventListener("input", render);
    add.addEventListener("click", () => {
      const y = input.value;
      $("#f-message").value = `Home built in ${y}. Please check: ${current.map((c) => c.title).join("; ")}.`.slice(0, 1000);
      if (current[0]) $("#f-category").value = current[0].key;
      request.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
    render();
  })();

  /* -------------------------------------------------------------- gallery */
  (function gallery() {
    const panels = $$("#gallery .panel");
    const open = (p) => {
      panels.forEach((x) => { x.classList.toggle("is-open", x === p); const v = $("video", x); if (v && x !== p) v.pause(); });
      const v = $("video", p);
      if (v && !reduce) { v.addEventListener("playing", () => v.classList.add("is-on"), { once: true }); const pr = v.play(); if (pr && pr.catch) pr.catch(() => v.classList.add("is-broken")); }
    };
    panels.forEach((p) => { p.addEventListener("pointerenter", () => open(p)); p.addEventListener("focus", () => open(p)); });
  })();

  // Hide remote media that fails (for example on a host that blocks it) so the blurred placeholder shows.
  $$("img").forEach((img) => { if (img.complete && img.naturalWidth === 0 && img.src) img.classList.add("is-broken"); img.addEventListener("error", () => img.classList.add("is-broken")); });
  $$("video").forEach((v) => v.addEventListener("error", () => v.classList.add("is-broken"), true));

  /* ---------------------------------------------------------- service index */
  const NETDATA = (() => { try { return JSON.parse($("#netData").textContent); } catch (e) { return null; } })();
  if (NETDATA) CATEGORIES.forEach((c) => { if (NETDATA[c.key]) c.sites = NETDATA[c.key]; });
  const siteLink = (d) => SOON.includes(d) ? `<span class="site site--soon">${d} <em>soon</em></span>` : `<a class="site" href="https://${d}/" rel="noopener">${d}</a>`;
  const index = $("#serviceIndex");
  if (index) CATEGORIES.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="i-code">${c.code}</span><a class="i-main" href="#request" data-cat="${c.key}"><span class="i-name">${c.name}</span><span class="i-desc">${c.does}</span></a>${c.sites.length ? `<span class="i-sites">${c.sites.slice(0, 5).map(siteLink).join("")}${c.sites.length > 5 ? `<a class="site site--more" href="#network">+${c.sites.length - 5} more</a>` : ""}</span>` : `<span class="i-sites"></span>`}<a class="i-go" href="#request" data-cat="${c.key}">Request ↗</a>`;
    index.appendChild(li);
  });
  const verbs = $("#verbs");
  if (verbs) VERBS.forEach((v) => {
    const li = document.createElement("li");
    const here = v.site === "hause.ca";
    li.innerHTML = `<a href="#request"${v.cat ? ` data-cat="${v.cat}"` : ""}><b>${v.verb}</b><span>${v.eg}</span></a><small>${here ? "Right here" : siteLink(v.site)}</small>`;
    verbs.appendChild(li);
  });

  /* -------------------------------------------------------------- city map */
  (function cityMap() {
    const canvas = $("#cityMap"), cityFilm = $("#cityFilm");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    const LAYERS = {
      all: { n: 35704, label: "All electrical permits, 2025", w: (d, r) => r * (0.75 + 0.25 * (1 - d)) },
      reno: { n: 16330, label: "Renovations & alterations, 2025", w: (d, r) => r * Math.pow(1.15 - d, 2.2) },
      new: { n: 13185, label: "New construction, 2025", w: (d, r) => r * Math.pow(d + 0.05, 2.6) },
      solar: { n: 12710, label: "Solar PV, 2023–2025", w: (d, r) => r * (0.55 + 0.7 * d) }
    };
    const PER_POINT = 20;
    const LIMIT = [[.22,.03],[.78,.03],[.93,.08],[.96,.32],[.96,.62],[.93,.97],[.40,.97],[.38,.80],[.30,.71],[.18,.69],[.09,.62],[.07,.40],[.11,.17]];
    const RING = [[.25,.09],[.75,.09],[.88,.15],[.91,.40],[.91,.62],[.88,.91],[.45,.92],[.41,.78],[.29,.70],[.16,.65],[.13,.40],[.16,.20],[.25,.09]];
    const BOW = [[.05,.30],[.15,.33],[.25,.37],[.33,.40],[.42,.405],[.50,.43],[.55,.47],[.58,.55],[.60,.65],[.63,.75],[.66,.86],[.70,.97]];
    const ELBOW = [[.18,.645],[.27,.655],[.34,.645],[.40,.64],[.43,.585],[.46,.52],[.49,.47],[.52,.445]];
    const DEERFOOT = [[.60,.03],[.59,.20],[.575,.35],[.565,.45],[.58,.55],[.595,.70],[.615,.85],[.64,.97]];
    const HOLES = [{ x: .40, y: .22, rx: .07, ry: .05, label: "Nose Hill" }, { x: .67, y: .19, rx: .08, ry: .07, label: "YYC" }, { x: .63, y: .875, rx: .25, ry: .022, label: "Fish Creek" }, { x: .40, y: .64, rx: .04, ry: .033, label: "Glenmore" }, { x: .47, y: .42, rx: .035, ry: .025, label: "Downtown" }, { x: .67, y: .60, rx: .05, ry: .08, label: "" }];
    const DT = { x: .47, y: .42 };
    let seed = 20260928;
    const rnd = () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let q = Math.imul(seed ^ (seed >>> 15), 1 | seed); q = (q + Math.imul(q ^ (q >>> 7), 61 | q)) ^ q; return ((q ^ (q >>> 14)) >>> 0) / 4294967296; };
    const inPoly = (x, y, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if (((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) c = !c; } return c; };
    const segDist = (px, py, [ax, ay], [bx, by]) => { const dx = bx - ax, dy = by - ay; const q = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy), 0, 1); return Math.hypot(px - (ax + q * dx), py - (ay + q * dy)); };
    const lineDist = (x, y, line) => { let m = 9; for (let i = 1; i < line.length; i++) m = Math.min(m, segDist(x, y, line[i - 1], line[i])); return m; };
    const pts = [];
    const STEP = 0.0105;
    for (let gy = 0.03; gy < 0.975; gy += STEP) for (let gx = 0.06; gx < 0.965; gx += STEP) {
      const x = gx + (rnd() - 0.5) * STEP * 0.7, y = gy + (rnd() - 0.5) * STEP * 0.7;
      if (!inPoly(x, y, LIMIT)) continue;
      if (HOLES.some((h) => ((x - h.x) / h.rx) ** 2 + ((y - h.y) / h.ry) ** 2 < 1)) continue;
      if (lineDist(x, y, BOW) < 0.011 || lineDist(x, y, ELBOW) < 0.008) continue;
      pts.push({ x, y, d: clamp(Math.hypot(x - DT.x, y - DT.y) / 0.6, 0, 1), r: [rnd(), rnd(), rnd(), rnd()], delay: rnd() });
    }
    const cur = new Float32Array(pts.length), target = new Float32Array(pts.length);
    const keys = Object.keys(LAYERS);
    function computeTarget(key) {
      const L = LAYERS[key], li = keys.indexOf(key);
      const need = Math.min(pts.length, Math.round(L.n / PER_POINT));
      const order = pts.map((p, i) => [L.w(p.d, p.r[li]), i]).sort((a, b) => b[0] - a[0]);
      target.fill(0); for (let k = 0; k < need; k++) target[order[k][1]] = 1;
      return need;
    }
    const sprite = document.createElement("canvas");
    let S = 1, W = 0;
    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round((canvas.clientWidth || 600) * dpr); canvas.width = W; canvas.height = W; S = W / 640;
      const r = Math.max(4, Math.round(4.2 * S)); sprite.width = sprite.height = r * 2;
      const g = sprite.getContext("2d"); const grad = g.createRadialGradient(r, r, 0, r, r, r);
      grad.addColorStop(0, "rgba(255,214,160,1)"); grad.addColorStop(0.25, ("rgba(" + ACCRGB() + ", 0.75)")); grad.addColorStop(1, "rgba(217,138,78,0)"); g.fillStyle = grad; g.fillRect(0, 0, r * 2, r * 2);
    }
    const P = (v) => 24 * S + v * (W - 48 * S);
    const path = (line, close) => { ctx.beginPath(); line.forEach(([x, y], i) => (i ? ctx.lineTo(P(x), P(y)) : ctx.moveTo(P(x), P(y)))); if (close) ctx.closePath(); };
    function draw() {
      ctx.clearRect(0, 0, W, W);
      path(LIMIT, true); ctx.fillStyle = "rgba(143,166,184,0.035)"; ctx.fill(); ctx.strokeStyle = "rgba(143,166,184,0.45)"; ctx.lineWidth = 1.2 * S; ctx.stroke();
      path(RING, false); ctx.strokeStyle = "rgba(236,230,218,0.09)"; ctx.lineWidth = 3 * S; ctx.stroke();
      path(DEERFOOT, false); ctx.setLineDash([5 * S, 5 * S]); ctx.strokeStyle = "rgba(236,230,218,0.14)"; ctx.lineWidth = 1.2 * S; ctx.stroke(); ctx.setLineDash([]);
      path(BOW, false); ctx.strokeStyle = "rgba(143,166,184,0.75)"; ctx.lineWidth = 2.6 * S; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
      path(ELBOW, false); ctx.lineWidth = 1.8 * S; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(P(.40), P(.64), .033 * (W - 48 * S), .026 * (W - 48 * S), 0, 0, Math.PI * 2); ctx.fillStyle = "rgba(143,166,184,0.3)"; ctx.fill();
      const half = sprite.width / 2;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i], x = P(p.x), y = P(p.y), v = cur[i];
        ctx.fillStyle = `rgba(236,230,218,${0.13 - v * 0.05})`; ctx.fillRect(x - 0.8 * S, y - 0.8 * S, 1.6 * S, 1.6 * S);
        if (v > 0.02) { ctx.globalAlpha = v * 0.7; ctx.drawImage(sprite, x - half, y - half); ctx.globalAlpha = 1; ctx.fillStyle = `rgba(255,226,186,${v})`; ctx.fillRect(x - 0.9 * S, y - 0.9 * S, 1.8 * S, 1.8 * S); }
      }
      ctx.fillStyle = "rgba(255,236,210,0.9)";
      [[-.012,-.006],[0,0],[.01,-.01],[.016,.004],[-.006,.01],[.004,.012],[-.016,.004]].forEach(([dx, dy]) => ctx.fillRect(P(DT.x + dx) - 1.4 * S, P(DT.y + dy) - 1.4 * S, 2.8 * S, 2.8 * S));
      ctx.font = `500 ${Math.round(10.5 * S)}px "Geist Mono", ui-monospace, monospace`;
      ctx.fillStyle = "rgba(236,230,218,0.55)"; ctx.textAlign = "center";
      HOLES.forEach((h) => { if (h.label) ctx.fillText(h.label.toUpperCase(), P(h.x), P(h.y) + (h.label === "Downtown" ? -14 * S : 4 * S)); });
      ctx.fillStyle = "rgba(143,166,184,0.9)"; ctx.textAlign = "left"; ctx.fillText("BOW", P(.13), P(.305)); ctx.fillText("ELBOW", P(.21), P(.635));
      ctx.fillStyle = "rgba(236,230,218,0.4)"; ctx.textAlign = "right"; ctx.fillText("N ↑", W - 16 * S, 22 * S);
      ctx.textAlign = "left"; ctx.fillText("SCHEMATIC · NOT TO SCALE", 16 * S, W - 14 * S);
    }
    let raf = 0, a0 = 0;
    function animate(now) {
      if (!a0) a0 = now;
      const el = (now - a0) / 1000; let moving = false;
      for (let i = 0; i < pts.length; i++) {
        if (el < pts[i].delay * 1.1) { moving = true; continue; }
        const diff = target[i] - cur[i];
        if (Math.abs(diff) > 0.01) { cur[i] += diff * 0.12; moving = true; } else cur[i] = target[i];
      }
      draw(); raf = moving ? requestAnimationFrame(animate) : 0;
    }
    function run() { cancelAnimationFrame(raf); a0 = 0; raf = requestAnimationFrame(animate); }
    const countEl = $("#mapCount"), labelEl = $("#mapLabel");
    function setLayer(key, anim) {
      const need = computeTarget(key);
      labelEl.textContent = LAYERS[key].label;
      const from = parseInt(countEl.textContent.replace(/\D/g, ""), 10) || 0;
      if (!anim || reduce) countEl.textContent = fmt(need);
      else { const s0 = performance.now(); const tick = (q) => { const k = clamp((q - s0) / 900, 0, 1); countEl.textContent = fmt(from + (need - from) * k); if (k < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
      $$("#layers button").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.layer === key)));
      if (!anim || reduce) { cur.set(target); draw(); } else run();
    }
    size(); setLayer("all", false);
    $$("#layers button").forEach((b) => b.addEventListener("click", () => setLayer(b.dataset.layer, true)));
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { size(); draw(); }, 150); });
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => {
        if (!es.some((e) => e.isIntersecting)) return;
        io.disconnect();
        if (!reduce) { cur.fill(0); draw(); run(); }
        if (cityFilm && !reduce) { cityFilm.addEventListener("playing", () => cityFilm.classList.add("is-on"), { once: true }); const pr = cityFilm.play(); if (pr && pr.catch) pr.catch(() => cityFilm.classList.add("is-broken")); }
      }, { threshold: 0.3 });
      io.observe(canvas);
    }
  })();

  /* ------------------------------------------------------------------ form */
  const form = $("#leadForm"), done = $("#done"), formErr = $("#formErr"), sendBtn = $("#sendBtn");
  function setErr(name, msg) { const p = $(`.err[data-for="${name}"]`); if (p) { p.textContent = msg; p.closest(".f").classList.add("has-err"); } }
  function clearErr(name) { const p = $(`.err[data-for="${name}"]`); if (p) { p.textContent = ""; p.closest(".f").classList.remove("has-err"); } }
  if (form) {
    ["name", "phone", "email", "city", "propertyType", "category", "urgency"].forEach((n) => { const f = form.elements[n]; if (f) f.addEventListener("input", () => clearErr(n)); });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (sendBtn.disabled) return;
      formErr.hidden = true;
      const v = (n) => (form.elements[n] ? String(form.elements[n].value).trim() : "");
      const data = { name: v("name"), phone: v("phone"), email: v("email"), city: v("city"), category: v("category"), urgency: v("urgency"), propertyType: v("propertyType"), message: v("message") };
      let ok = true;
      const need = (cond, name, msg) => { if (!cond) { setErr(name, msg); ok = false; } else clearErr(name); };
      need(data.name.length >= 2 && data.name.length <= 100, "name", "Please enter your full name");
      need(data.phone.length >= 7 && data.phone.length <= 30, "phone", "Enter a valid phone number");
      need(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.email.length <= 255, "email", "Enter a valid email");
      need(!!data.city, "city", "Select a city");
      need(!!data.propertyType, "propertyType", "Select a property type");
      need(!!data.category, "category", "Select a category");
      need(!!data.urgency, "urgency", "Select urgency");
      if (!ok) { const first = form.querySelector(".has-err input, .has-err select"); if (first) first.focus(); return; }
      if (!form.elements.consent.checked) { formErr.textContent = "Please agree to be contacted about this request."; formErr.hidden = false; return; }
      if (PREVIEW) { formErr.textContent = "This is a design preview, so nothing was sent. On hause.ca this form delivers straight to the HAUSE intake team."; formErr.hidden = false; return; }
      sendBtn.disabled = true; sendBtn.firstChild.textContent = "Sending… ";
      const params = new URLSearchParams(window.location.search);
      const attribution = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "msclkid"].forEach((k) => { const val = params.get(k); if (val) attribution[k] = val.slice(0, 200); });
      try {
        const res = await fetch(LEAD_ENDPOINT, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            brand: "HAUSE", crm: "hause", sourceSite: window.location.hostname, formType: "home-service-request",
            email: data.email, pageUrl: window.location.href, website: v("website"),
            fields: { ...data, consentText: "I agree HAUSE may store my request and share it with a relevant service provider to respond.", _hause_path: window.location.pathname, _hause_referrer: document.referrer, _hause_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, ...attribution }
          })
        });
        const result = await res.json().catch(() => null);
        if (!res.ok || !result || !result.ok || !result.id) throw new Error((result && result.error) || "The request could not be saved. Please try again.");
        $("#refId").textContent = result.id;
        form.hidden = true; done.hidden = false;
        done.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      } catch (err) {
        formErr.textContent = `${err instanceof Error ? err.message : "The request could not be sent."} You can also email info@hause.ca.`;
        formErr.hidden = false;
      } finally { sendBtn.disabled = false; sendBtn.firstChild.textContent = "Send my request "; }
    });
    $("#againBtn").addEventListener("click", () => { form.elements.consent.checked = false; form.elements.message.value = ""; done.hidden = true; form.hidden = false; });
  }
  /* ------------------------------------------------------- network search */
  (function () {
    const input = $("#netFind"), grid = $("#netGrid"), count = $("#netCount"), empty = $("#netEmpty");
    if (!input || !grid) return;
    const groups = $$(".net__group", grid).map((g) => ({ el: g, n: $("h3 span", g), items: $$("li", g).map((li) => ({ li, q: (li.textContent + " " + (li.firstElementChild.title || "")).toLowerCase() })) }));
    const total = groups.reduce((n, g) => n + g.items.length, 0);
    const base = count.textContent;
    // on phones the directory folds into one tappable row per category; searching opens every match
    const fold = window.matchMedia("(max-width: 760px)").matches;
    if (fold) {
      grid.classList.add("net--fold");
      groups.forEach((g, i) => {
        const h = $("h3", g.el); h.setAttribute("role", "button"); h.tabIndex = 0; h.setAttribute("aria-expanded", "false");
        const toggle = () => { const open = g.el.classList.toggle("is-open"); h.setAttribute("aria-expanded", String(open)); };
        h.addEventListener("click", toggle);
        h.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      });
    }
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      let shown = 0;
      groups.forEach((g) => {
        let n = 0;
        g.items.forEach((it) => { const ok = q.every((w) => it.q.includes(w)); it.li.hidden = !ok; if (ok) n++; });
        g.el.hidden = n === 0; g.n.textContent = String(n); shown += n;
        if (fold && q.length) { g.el.classList.add("is-open"); }
      });
      count.textContent = q.length ? `${shown} of ${total} sites` : base;
      empty.hidden = shown !== 0;
    });
  })();
  const yr = $("#yr"); if (yr) yr.textContent = String(new Date().getFullYear());
})();
