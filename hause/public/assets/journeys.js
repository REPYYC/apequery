/* HAUSE.ca — journeys: guided paths through the house for one situation (buying, an emergency, a suite, winter, a storm,
   going electric). Each stop flies the story to a close-up step, explains what matters, and adds it to a checklist that
   becomes one request at the end. Reads the chapters' step timing from window.HAUSE_SCENES. No dependencies. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const LIVE = (() => { try { return new Set(JSON.parse($("#liveData").textContent)); } catch (e) { return null; } })();
  const site = (d) => (!LIVE || LIVE.has(d) ? `<a class="chip" href="https://${d}/" rel="noopener">${d}</a>` : `<span class="chip chip--soon">${d}</span>`);

  // [scene, step, title, why, ask (what to ask for), sites]
  const J = {
    buying: {
      label: "Buying a home", icon: "M4 11 12 4l8 7v9h-5v-6H9v6H4z", cat: "inspection", urgency: "This week",
      lede: "Six checks most offers skip. Do them before you firm up, while the seller can still fix or credit them.",
      stops: [
        ["z-sewer", 1, "Scope the sewer line", "A camera run costs a fraction of a lateral replacement, and nothing else shows roots, bellies or a collapsed clay joint before possession.", ["A camera inspection with the video and a written report", "Where the line meets the main"], ["sewerscope.ca", "sewerinspector.ca"]],
        ["z-radon", 1, "Ask about radon", "A short test during the offer tells you little; ask for a past long-term result, or plan a 91-day test in the first heating season.", ["Any past long-term test result", "Whether a mitigation system is installed and running"], ["radonlab.ca", "radondetectors.ca"]],
        ["z-panel", 5, "Read the panel", "Aluminum branch wiring, a 60 or 100 A service and missing AFCI or GFCI protection change insurance and renovation costs.", ["Service size and panel age", "Aluminum wiring and how it was remediated"], ["electricalinspections.ca", "aluminumwiring.ca"]],
        ["z-attic", 4, "Look in the attic", "Vermiculite, frost stains on the deck and bath fans venting into the insulation are all visible with a flashlight.", ["Insulation type and depth", "Signs of frost, rain or ice dams"], ["whatisasbestos.ca", "roofinsulation.ca"]],
        ["z-attic", 0, "Roof age and hail", "Hail-bruised roofs fail years early, and insurers ask about roof age first.", ["Roof age and any past hail claims", "Photos of the vents and flashing"], ["calgaryroofers.ca", "roofingcostcalculator.ca"]],
        ["z-cycle", 3, "Furnace and water heater age", "Both carry a date on the rating plate. A 15-year-old furnace or a rusting tank belongs in the price.", ["Install dates from the rating plates", "Service records"], ["replacefurnace.ca", "hotwatertank.ca"]]
      ]
    },
    urgent: {
      label: "Something's wrong now", icon: "M12 3 2 21h20zM12 10v5M12 18h.01", cat: "other", urgency: "Emergency",
      lede: "What to do in the first ten minutes, then one request to the right pro. For gas, fire or immediate danger, call 911 first.",
      stops: [
        ["z-restore", 0, "Water on the floor", "Shut the main water valve, switch off power to the wet area at the panel, then photograph everything before you move it.", ["Where the leak started", "How long it ran"], ["burstpipe.ca", "disastercleanup.ca"]],
        ["z-restore", 1, "Sewage coming up a drain", "Stop using water in the house. This is category 3 water: keep people and pets out and do not try to clean it yourself.", ["Which drain overflowed", "Whether it happened before"], ["sewagecleanup.ca", "sewers.ca"]],
        ["z-panel", 2, "Power out or a breaker that will not reset", "A breaker that trips again straight away is protecting a fault. Leave it off; a burning smell or a hot panel cover means call 911.", ["Which circuits are out", "Any smell, heat or sound at the panel"], ["electricalrepair.ca", "calgaryelectricians.ca"]],
        ["z-cycle", 1, "No heat", "Check the thermostat batteries, the furnace switch and the filter. Below +5 °C indoors, protect the pipes: open cabinet doors and let a tap drip.", ["Furnace age and the last service", "Any error light on the furnace"], ["replacefurnace.ca", "calgaryductcleaning.ca"]],
        ["z-sewer", 6, "Sump pump not keeping up", "Clear the discharge, check the float can move, and keep a backup pump ready on a stormy night.", ["Whether the pump runs at all", "Water level in the pit"], ["weepingtilerepair.ca", "sewerscope.ca"]]
      ]
    },
    suite: {
      label: "Basement suite", icon: "M3 21V9l9-6 9 6v12M9 21v-6h6v6", cat: "upgrades", urgency: "Within a month",
      lede: "The checks that decide whether a basement can become a legal suite, in the order the trades need them.",
      stops: [
        ["z-restore", 4, "Test for asbestos first", "Textured ceilings, old floor tile and pipe wrap get sampled before demolition. Alberta requires it on most renovation work.", ["Sampling of every suspect material", "A written abatement scope if any test positive"], ["asbestostest.ca", "asbestossampling.ca"]],
        ["z-panel", 6, "Will the service carry it?", "A suite adds a kitchen, a laundry and heat. A load calculation tells you whether 100 A is enough or the panel goes to 200 A.", ["A load calculation", "A sub-panel or service upgrade quote"], ["200amppanel.ca", "electricalpanelupgrade.ca"]],
        ["z-radon", 2, "Mitigate radon before you finish", "Sub-slab suction is easiest to run before walls and ceilings go up.", ["A long-term test result", "A mitigation quote with the pipe route planned"], ["radonsystem.ca", "basementradon.ca"]],
        ["z-sewer", 5, "Drain and sewer capacity", "A second kitchen and bathroom on an old clay lateral is a backup waiting to happen. Scope it, and replace it if it is failing.", ["A camera inspection", "A replacement or relining quote"], ["sewerreplacement.ca", "sewerrelining.ca"]],
        ["z-cycle", 5, "Strip-out and permits", "Selective demolition, a bin and permits come before framing. Separate heating for the suite is often part of the permit.", ["A demolition plan", "The permit list for a secondary suite"], ["demolishing.ca", "upgrading.ca"]]
      ]
    },
    winter: {
      label: "Ready for winter", icon: "M12 2v20M4 6l16 12M20 6 4 18", cat: "maintenance", urgency: "Within a month",
      lede: "The autumn list that saves the most in January. Most of it is an hour of somebody's time.",
      stops: [
        ["z-cycle", 1, "Service the furnace", "A tune-up and a new filter before the first cold snap; furnaces fail on the coldest night, not the first one.", ["A furnace tune-up", "A filter and carbon monoxide alarm check"], ["maintaining.ca", "calgaryductcleaning.ca"]],
        ["z-attic", 3, "Seal and insulate the attic", "Air leaks into the attic cause both ice dams and attic rain. Seal first, then top up insulation.", ["An air-sealing and insulation check", "Bath fan ducts ending at the roof"], ["roofinsulation.ca", "roofventilation.ca"]],
        ["z-attic", 1, "Watch the eaves", "Clean gutters and check the eave for last year's ice-dam staining.", ["Gutter cleaning", "An eave and soffit check"], ["calgaryroofers.ca", "roofventilation.ca"]],
        ["z-radon", 1, "Start a radon test", "Long-term tests belong in heating season, with the windows shut.", ["A 91-day alpha-track test"], ["radondetectors.ca", "radonlab.ca"]],
        ["z-sewer", 6, "Protect the water service", "Know where the main shut-off is, and insulate lines near exterior walls.", ["The shut-off location", "Poly-B or frozen-line risks"], ["polybutylene.ca", "burstpipes.ca"]]
      ]
    },
    storm: {
      label: "After a storm", icon: "M7 17h10a5 5 0 0 0-1-9.9A6 6 0 0 0 4 9a4 4 0 0 0 3 8zM9 21l1-3M14 21l1-3", cat: "roofing", urgency: "This week",
      lede: "Document first, repair second. Insurers want photos taken before anything is fixed.",
      stops: [
        ["z-attic", 0, "Photograph the roof", "Bruised shingles, dented vents and torn flashing. A roofer's inspection report carries more weight than phone photos.", ["A roof inspection with photos", "Help with the insurance claim"], ["calgaryroofers.ca", "roofingcostcalculator.ca"]],
        ["z-attic", 6, "Windows and siding", "Cracked glazing, split siding and dented trim on the storm side of the house.", ["An exterior damage report"], ["replacewindows.ca", "compositedecking.ca"]],
        ["z-restore", 0, "Water inside", "Any water through the roof or into the basement starts the 48-hour mould clock.", ["Moisture readings", "Drying equipment if needed"], ["disastercleanup.ca", "burstpipe.ca"]],
        ["z-sewer", 6, "Check the sump", "Heavy rain is when the weeping tile and the sump do their work, or don't.", ["A sump and weeping-tile check"], ["weepingtilerepair.ca", "crackedfoundations.ca"]]
      ]
    },
    electric: {
      label: "Going electric", icon: "M13 2 4 14h7l-1 8 9-12h-7z", cat: "electrical", urgency: "Within a month",
      lede: "EV charger, heat pump, solar: each one starts at the same panel in the basement.",
      stops: [
        ["z-panel", 4, "The big loads", "A 48 A charger, a heat pump and a hot tub each need their own breaker and cable. Together they are what pushes a 100 A service over.", ["Dedicated circuits for each load", "Permits for each"], ["evchargerinstallation.ca", "hottubwiring.ca"]],
        ["z-panel", 6, "Does the service fit?", "Switch your loads on in the load check. Over 80 % means a 200 A upgrade or load management first.", ["A load calculation", "A 200 A upgrade quote"], ["200amppanel.ca", "electricalpanels.ca"]],
        ["z-cycle", 2, "A cold-climate heat pump", "Paired with the furnace, it carries most of the year and hands over on the coldest days.", ["A heat-pump sizing", "Thermostat and controls"], ["upgrading.ca", "replacefurnace.ca"]],
        ["z-attic", 5, "Solar on the right slope", "A newer roof with a clear south or west face; plan it before the next re-roof.", ["A solar assessment", "The roof's remaining life"], ["solarinstaller.ca", "electricbill.ca"]]
      ]
    }
  };

  /* ---------------------------------------------------------- scrolling */
  function stopY(scene, step) {
    const el = document.getElementById(scene); if (!el) return 0;
    const cuts = (window.HAUSE_SCENES && window.HAUSE_SCENES[scene] && window.HAUSE_SCENES[scene].cuts) || [];
    const a = step ? cuts[step - 1] || 0 : 0, b = step < cuts.length ? cuts[step] : 1;
    const top = el.getBoundingClientRect().top + window.scrollY, range = Math.max(0, el.offsetHeight - window.innerHeight);
    return Math.round(top + range * (a + (b - a) * 0.55));
  }
  // short hops scroll smoothly; long ones cut through a brief fade so the camera lands on the step instead of racing
  // through every chapter in between
  const veil = document.createElement("div"); veil.className = "veil"; veil.setAttribute("aria-hidden", "true"); document.body.appendChild(veil);
  let cutTimer = 0;
  function fly(y) {
    if (window.HAUSE_PLATFORM && window.HAUSE_PLATFORM.stopFilm) window.HAUSE_PLATFORM.stopFilm();
    const far = Math.abs(y - window.scrollY) > window.innerHeight * 2.5;
    if (!far || reduce) { window.scrollTo({ top: y, behavior: reduce || far ? "auto" : "smooth" }); return; }
    clearTimeout(cutTimer);
    veil.classList.add("is-on");
    cutTimer = setTimeout(() => {
      window.scrollTo({ top: y, behavior: "auto" });
      const S = window.HAUSE_STAGE;
      // let the scroll director set the new chapter's camera first, then snap to it under the veil
      setTimeout(() => { if (S && S.settle) S.settle(); setTimeout(() => veil.classList.remove("is-on"), 120); }, 90);
    }, 260);
  }

  /* --------------------------------------------------------------- card */
  const card = document.createElement("aside");
  card.className = "jcard"; card.hidden = true; card.setAttribute("aria-live", "polite"); card.setAttribute("aria-label", "Journey");
  document.body.appendChild(card);
  let cur = null, idx = 0, keep = {};
  const html = document.documentElement;
  function start(key) {
    cur = J[key]; if (!cur) return;
    idx = 0; keep = {}; cur.stops.forEach((_, i) => { keep[i] = true; });
    card.hidden = false; html.classList.add("is-journey"); render(); requestAnimationFrame(() => card.classList.add("is-on"));
    go();
  }
  function exit() {
    cur = null; card.classList.remove("is-on"); html.classList.remove("is-journey");
    setTimeout(() => { if (!cur) card.hidden = true; }, 300);
  }
  function go() { if (cur && idx < cur.stops.length) { const [scene, step] = cur.stops[idx]; fly(stopY(scene, step)); } }
  function render() {
    const n = cur.stops.length, end = idx >= n;
    const dots = cur.stops.map((_, i) => `<i class="${i < idx ? "is-past" : i === idx ? "is-on" : ""}${keep[i] ? "" : " is-skip"}"></i>`).join("") + `<i class="${end ? "is-on" : ""}"></i>`;
    let body;
    if (!end) {
      const [, , title, why, ask, sites] = cur.stops[idx];
      body = `<p class="jcard__n">Stop ${idx + 1} of ${n}</p><h3>${esc(title)}</h3><p class="jcard__why">${esc(why)}</p>
        <p class="jcard__k">Ask for</p><ul class="jcard__ask">${ask.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
        <p class="jcard__sites">${sites.map(site).join("")}</p>
        <label class="jcard__keep"><input type="checkbox" data-keep ${keep[idx] ? "checked" : ""}> <span>Add to my request</span></label>`;
    } else {
      const picked = cur.stops.filter((_, i) => keep[i]);
      body = `<p class="jcard__n">Your list</p><h3>${picked.length ? `${picked.length} thing${picked.length > 1 ? "s" : ""} to look at` : "Nothing picked yet"}</h3>
        <ol class="jcard__list">${picked.map((s) => `<li><b>${esc(s[2])}</b><span>${esc(s[4].join(" · "))}</span></li>`).join("")}</ol>
        <p class="jcard__why">One request covers all of it. HAUSE reviews the list and matches the right vetted pro for each part.</p>`;
    }
    card.innerHTML = `<div class="jcard__top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${cur.icon}"/></svg><b>${esc(cur.label)}</b><button type="button" class="jcard__x" data-exit aria-label="End the journey">×</button></div>
      <div class="jcard__dots" aria-hidden="true">${dots}</div>
      ${idx === 0 ? `<p class="jcard__lede">${esc(cur.lede)}</p>` : ""}
      <div class="jcard__body">${body}</div>
      <div class="jcard__nav">${idx > 0 ? `<button type="button" class="btn btn--ghost btn--sm" data-prev>Back</button>` : `<span></span>`}
        ${end ? `<button type="button" class="btn btn--sm" data-send>Send as one request ↗</button>` : `<button type="button" class="btn btn--sm" data-next>${idx === n - 1 ? "See my list" : "Next stop"} →</button>`}</div>`;
  }
  card.addEventListener("click", (e) => {
    if (e.target.closest("[data-exit]")) return exit();
    if (e.target.closest("[data-next]")) { idx++; render(); go(); return; }
    if (e.target.closest("[data-prev]")) { idx--; render(); go(); return; }
    if (e.target.closest("[data-send]")) return send();
  });
  card.addEventListener("change", (e) => { if (e.target.matches("[data-keep]")) { keep[idx] = e.target.checked; render(); } });
  function send() {
    const picked = cur.stops.filter((_, i) => keep[i]);
    const sel = $("#f-category"); if (sel) { sel.value = cur.cat; sel.dispatchEvent(new Event("change", { bubbles: true })); }
    const urg = $("#f-urgency"); if (urg) { const o = Array.from(urg.options).find((x) => x.textContent === cur.urgency); if (o) { urg.value = o.value || o.textContent; urg.dispatchEvent(new Event("change", { bubbles: true })); } }
    const msg = $("#f-message");
    if (msg) { msg.value = `${cur.label}. Please look at:\n` + picked.map((s) => `- ${s[2]}: ${s[4].join("; ")}`).join("\n"); msg.dispatchEvent(new Event("input", { bubbles: true })); }
    const req = $("#request"); exit();
    if (req) { fly(req.getBoundingClientRect().top + window.scrollY - 70); setTimeout(() => { const n = $("#f-name"); if (n) n.focus({ preventScroll: true }); }, reduce ? 50 : 1100); }
  }
  document.addEventListener("keydown", (e) => {
    if (!cur || /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || "")) return;
    if (e.key === "Escape") exit();
    else if (e.key === "ArrowRight" && idx < cur.stops.length) { idx++; render(); go(); }
    else if (e.key === "ArrowLeft" && idx > 0) { idx--; render(); go(); }
  });

  /* ------------------------------------------------------------ entries */
  // a row under the hero's calls to action, and a section before the standard
  const chips = Object.entries(J).map(([k, j]) => `<button type="button" class="jchip" data-journey="${k}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${j.icon}"/></svg>${esc(j.label)}</button>`).join("");
  const heroCta = $(".hero__cta");
  if (heroCta) {
    const row = document.createElement("div"); row.className = "jrow rise"; row.style.setProperty("--d", "3.5");
    row.innerHTML = `<span>Or start from where you are</span>${chips}`;
    heroCta.parentNode.insertBefore(row, heroCta.nextSibling);
  }
  const std = $("#standard");
  if (std) {
    const sec = document.createElement("section"); sec.className = "sec journeys"; sec.id = "journeys"; sec.setAttribute("aria-labelledby", "journeys-title");
    sec.innerHTML = `<div class="wrap"><div class="head head--row"><div><p class="eyebrow"><span class="code">Journeys</span> Start from your situation</p><h2 id="journeys-title">Six ways through the house.</h2></div>
      <p class="lede">Pick what is going on. HAUSE walks you to every part of the house that matters for it, builds the list as you go, and sends it as one request.</p></div>
      <ul class="jgrid">${Object.entries(J).map(([k, j]) => `<li><button type="button" data-journey="${k}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${j.icon}"/></svg><b>${esc(j.label)}</b><span>${esc(j.lede)}</span><em>${j.stops.length} stops · ${j.stops.map((s) => esc(s[2])).slice(0, 3).join(" · ")}…</em><i>Start ↗</i></button></li>`).join("")}</ul></div>`;
    std.parentNode.insertBefore(sec, std);
  }
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-journey]"); if (b) start(b.dataset.journey); });
  window.HAUSE_JOURNEYS = { start, exit, list: Object.keys(J), get: (k) => J[k] };
})();
