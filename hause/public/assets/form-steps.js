/* HAUSE.ca — the request form in three short steps (the job, the home, you). It rearranges the existing fields and
   leaves validation and sending to assets/hause.js, so the lead pipeline is unchanged. Category and urgency get
   tap targets that drive the original selects. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const form = $("#leadForm"); if (!form) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const field = (name) => { const el = form.elements[name]; return el ? el.closest(".f") : null; };
  const STEPS = [
    { key: "job", label: "The job", title: "What needs doing?", fields: ["category", "urgency", "message"] },
    { key: "home", label: "The home", title: "Where is it?", fields: ["city", "propertyType"] },
    { key: "you", label: "You", title: "Who should the pro call?", fields: ["name", "phone", "email"] }
  ];
  // the same checks hause.js runs on submit, per field, so each step can be checked on its own
  const RULES = {
    category: [(v) => !!v, "Pick what needs doing"], urgency: [(v) => !!v, "Pick how soon"],
    city: [(v) => !!v, "Select a city"], propertyType: [(v) => !!v, "Select a property type"],
    name: [(v) => v.length >= 2 && v.length <= 100, "Please enter your full name"],
    phone: [(v) => v.length >= 7 && v.length <= 30, "Enter a valid phone number"],
    email: [(v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 255, "Enter a valid email"]
  };
  const val = (n) => (form.elements[n] ? String(form.elements[n].value).trim() : "");
  const errEl = (n) => $(`.err[data-for="${n}"]`, form);
  function check(n) {
    const r = RULES[n]; if (!r) return true;
    const ok = r[0](val(n)), p = errEl(n), f = field(n);
    if (p) p.textContent = ok ? "" : r[1];
    if (f) f.classList.toggle("has-err", !ok);
    return ok;
  }

  /* ------------------------------------------------------------ layout */
  const head = document.createElement("div");
  head.className = "fs-head";
  head.innerHTML = `<ol class="fs-steps">${STEPS.map((s, i) => `<li data-i="${i}"><button type="button" data-goto="${i}"><i>${i + 1}</i><span>${s.label}</span></button></li>`).join("")}</ol><div class="fs-bar"><i></i></div>`;
  form.parentNode.insertBefore(head, form);
  const panes = STEPS.map((s, i) => {
    const pane = document.createElement("div");
    pane.className = "fs-pane"; pane.dataset.i = String(i); pane.setAttribute("role", "group"); pane.setAttribute("aria-label", `${i + 1} of 3: ${s.label}`);
    pane.innerHTML = `<p class="fs-title">${s.title}</p>`;
    s.fields.forEach((n) => { const f = field(n); if (f) pane.appendChild(f); });
    form.appendChild(pane);
    return pane;
  });
  // consent, the form error and the send row belong to the last step
  [$(".consent", form), $("#formErr"), $(".send", form)].forEach((el) => { if (el) panes[2].appendChild(el); });
  // next / back controls on the first two steps
  panes.forEach((pane, i) => {
    if (i === 2) { const back = document.createElement("button"); back.type = "button"; back.className = "btn btn--ghost btn--sm fs-back"; back.dataset.goto = "1"; back.textContent = "Back"; const send = $(".send", pane); if (send) send.insertBefore(back, send.firstChild); return; }
    const nav = document.createElement("div"); nav.className = "fs-nav f--wide";
    nav.innerHTML = `${i ? `<button type="button" class="btn btn--ghost btn--sm" data-goto="${i - 1}">Back</button>` : "<span></span>"}<button type="button" class="btn" data-next="${i}">Continue <span aria-hidden="true">→</span></button>`;
    pane.appendChild(nav);
  });

  /* -------------------------------------------------- category tiles */
  const cat = form.elements.category;
  const TILES = [["electrical", "Electrical", "M13 2 4 14h7l-1 8 9-12h-7z"], ["plumbing", "Plumbing", "M7 3v6a5 5 0 0 0 10 0V3M12 14v7"], ["hvac", "Heating & cooling", "M12 2v20M4 6l16 12M20 6 4 18"], ["sewer", "Sewer & drains", "M3 12h18M7 8v8M17 8v8"], ["roofing", "Roof & exterior", "M3 12 12 4l9 8M5 10v10h14V10"], ["radon", "Radon", "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 6v6"], ["water-heaters", "Water heater", "M8 3h8v18H8zM12 7v4"], ["upgrades", "Renovation", "M14 4l6 6-10 10H4v-6z"]];
  if (cat) {
    const tiles = document.createElement("div"); tiles.className = "fs-tiles"; tiles.setAttribute("role", "radiogroup"); tiles.setAttribute("aria-label", "What needs doing");
    tiles.innerHTML = TILES.map(([v, l, d]) => `<button type="button" role="radio" aria-checked="false" data-cat-tile="${v}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg><span>${l}</span></button>`).join("") + `<button type="button" class="fs-more" data-more>More…</button>`;
    const f = field("category"); f.insertBefore(tiles, cat); f.classList.add("is-tiles");
    tiles.addEventListener("click", (e) => {
      const t = e.target.closest("[data-cat-tile]");
      if (t) { cat.value = t.dataset.catTile; cat.dispatchEvent(new Event("change", { bubbles: true })); }
      if (e.target.closest("[data-more]")) { f.classList.add("show-select"); cat.focus(); }
    });
    const syncTiles = () => { const v = cat.value; let hit = false; $$("[data-cat-tile]", tiles).forEach((b) => { const on = b.dataset.catTile === v; hit = hit || on; b.setAttribute("aria-checked", String(on)); }); f.classList.toggle("show-select", !!v && !hit); if (v) check("category"); };
    cat.addEventListener("change", syncTiles); syncTiles();
  }
  /* ---------------------------------------------------- urgency pills */
  const urg = form.elements.urgency;
  if (urg) {
    const seg = document.createElement("div"); seg.className = "fs-seg"; seg.setAttribute("role", "radiogroup"); seg.setAttribute("aria-label", "How soon");
    seg.innerHTML = Array.from(urg.options).filter((o) => o.index > 0).map((o) => `<button type="button" role="radio" aria-checked="false" data-urg="${o.value || o.textContent}" class="${/emergency/i.test(o.textContent) ? "is-alarm" : ""}">${o.textContent}</button>`).join("");
    const f = field("urgency"); f.insertBefore(seg, urg); f.classList.add("is-seg");
    seg.addEventListener("click", (e) => { const b = e.target.closest("[data-urg]"); if (b) { urg.value = b.dataset.urg; urg.dispatchEvent(new Event("change", { bubbles: true })); } });
    const syncSeg = () => { $$("[data-urg]", seg).forEach((b) => b.setAttribute("aria-checked", String(b.dataset.urg === urg.value))); if (urg.value) check("urgency"); };
    urg.addEventListener("change", syncSeg); syncSeg();
  }

  /* ---------------------------------------------------------- stepping */
  let cur = 0;
  function show(i, focus) {
    cur = Math.max(0, Math.min(2, i));
    panes.forEach((p, k) => { p.hidden = k !== cur; });
    $$(".fs-steps li", head).forEach((li, k) => { li.classList.toggle("is-on", k === cur); li.classList.toggle("is-done", k < cur || stepOk(k)); });
    $(".fs-bar i", head).style.transform = `scaleX(${((cur + 1) / 3).toFixed(3)})`;
    if (focus) { const first = panes[cur].querySelector("input:not([type=checkbox]), select, textarea, button[role=radio]"); if (first) first.focus({ preventScroll: true }); }
  }
  const stepOk = (i) => STEPS[i].fields.every((n) => !RULES[n] || RULES[n][0](val(n)));
  function next(i) {
    const ok = STEPS[i].fields.map(check).every(Boolean);
    if (!ok) { const bad = panes[i].querySelector(".has-err input, .has-err select, .has-err button"); if (bad) bad.focus(); return; }
    show(i + 1, true);
    const top = head.getBoundingClientRect().top;
    if (top < 60 || top > window.innerHeight * 0.6) window.scrollBy({ top: top - 90, behavior: reduce ? "auto" : "smooth" });
  }
  form.addEventListener("click", (e) => {
    const n = e.target.closest("[data-next]"); if (n) { next(+n.dataset.next); return; }
    const g = e.target.closest("[data-goto]"); if (g) show(+g.dataset.goto, true);
  });
  head.addEventListener("click", (e) => {
    const g = e.target.closest("[data-goto]"); if (!g) return;
    const to = +g.dataset.goto;
    // jumping forward only past steps that are already complete
    for (let k = 0; k < to; k++) if (!stepOk(k)) { show(k, true); STEPS[k].fields.forEach(check); return; }
    show(to, true);
  });
  // Enter in a text field moves on instead of submitting early
  form.addEventListener("keydown", (e) => { if (e.key === "Enter" && cur < 2 && e.target.tagName === "INPUT") { e.preventDefault(); next(cur); } });
  // if the final submit finds a problem in an earlier step, open that step
  form.addEventListener("submit", () => { for (let k = 0; k < 2; k++) if (!stepOk(k)) { show(k); STEPS[k].fields.forEach(check); return; } }, true);
  form.addEventListener("change", () => $$(".fs-steps li", head).forEach((li, k) => li.classList.toggle("is-done", k < cur || stepOk(k))));
  show(0);

  // other parts of the page (journeys, search, the job finder) pre-fill the form, then open the first step still missing something
  window.HAUSE_FORM = {
    focusNext() { let k = 0; while (k < 2 && stepOk(k)) k++; show(k, true); },
    show
  };
})();
