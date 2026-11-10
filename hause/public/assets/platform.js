/* HAUSE.ca — platform layer: universal search (⌘K, Ctrl K or /), the self-playing film of the story, and keyboard
   chapter navigation (J / K). Reads everything it searches from the page itself, plus data/jobs.json. No dependencies. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const norm = (s) => (s || "").toLowerCase().normalize("NFKD").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const typing = (e) => { const t = e.target; return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)); };

  /* ------------------------------------------------------------ scrolling */
  // scroll position of a section, optionally at a fraction of its pinned scroll range
  function sectionY(el, frac = 0) {
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = Math.max(0, el.offsetHeight - window.innerHeight);
    return Math.round(top + range * frac);
  }
  function go(y) { stopFilm(); window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" }); }

  /* ------------------------------------------------------------- the index */
  const SCENES = window.HAUSE_SCENES || {};
  let items = null, jobs = null, jobsLoading = false;
  function build() {
    if (items) return items;
    items = [];
    const chapterName = {};
    $$("#chapters a").forEach((a) => { chapterName[a.dataset.ch] = a.textContent.trim(); });
    // chapters of the story
    $$("[data-scene]").forEach((el) => {
      const name = el.dataset.scene, title = $(".side__title, h1, h2", el);
      const label = chapterName[name] || name;
      items.push({ kind: "Chapter", title: label, sub: title ? title.getAttribute("aria-label") || title.textContent.trim() : "", q: norm(label + " " + (title ? title.textContent : "") + " " + el.textContent.slice(0, 600)), run: () => go(sectionY(el, 0.02)), boost: 3 });
      // every step of the Act II close-ups is its own result and lands on that step
      const cfg = SCENES[name];
      if (cfg) $$(".sys-steps > li", el).forEach((li, i) => {
        const b = $("b", li), p = $("p", li); if (!b) return;
        const a = i ? cfg.cuts[i - 1] : 0, z = i < cfg.cuts.length ? cfg.cuts[i] : 1;
        items.push({ kind: label, title: b.textContent.trim(), sub: p ? p.textContent.trim().slice(0, 110) + "…" : "", q: norm(b.textContent + " " + (p ? p.textContent : "") + " " + label), run: () => go(sectionY(el, a + (z - a) * 0.45)), boost: 2 });
      });
    });
    // other sections of the page
    $$("main > section[id], section.sec[id]").forEach((el) => {
      if (el.dataset.scene) return;
      const h = $("h2, h1", el); if (!h) return;
      const t = h.getAttribute("aria-label") || h.textContent.trim();
      items.push({ kind: "Section", title: t, sub: "", q: norm(t + " " + el.id + " " + el.textContent.slice(0, 400)), run: () => go(sectionY(el)), boost: 1 });
    });
    // every site in the network, live or in build
    $$("#netGrid .net__group").forEach((g) => {
      const group = ($("h3", g) || {}).firstChild ? $("h3", g).firstChild.textContent.trim() : "";
      $$("li", g).forEach((li) => {
        const a = $("a", li), soon = li.classList.contains("is-soon");
        const d = (a ? a.textContent : ($(".site", li) || li).firstChild.textContent).trim();
        const title = (a || $(".site", li) || li).getAttribute("title") || "";
        items.push({ kind: soon ? "Site · in build" : "Site", title: d, sub: [group, title !== "In build" ? title : ""].filter(Boolean).join(" · "), q: norm(d.replace(/\.(ca|com)$/, "") + " " + d + " " + group + " " + title), href: a ? a.href : null, run: () => (a ? window.open(a.href, "_blank", "noopener") : go(sectionY($("#network")))), boost: soon ? 0 : 1 });
      });
    });
    // journeys: guided paths for a situation
    const JR = window.HAUSE_JOURNEYS;
    if (JR) JR.list.forEach((k) => { const j = JR.get(k); items.push({ kind: "Journey", title: j.label, sub: j.lede, q: norm(j.label + " " + j.lede + " " + j.stops.map((s) => s[2]).join(" ")), run: () => { close(); JR.start(k); }, boost: 4 }); });
    // service categories: pre-select the request form
    $$("#f-category option").forEach((o) => {
      if (!o.value) return;
      items.push({ kind: "Request", title: o.textContent.trim(), sub: "Get matched with a vetted pro", q: norm(o.textContent + " request quote pro " + o.value), run: () => request(o.value), boost: 1 });
    });
    return items;
  }
  function request(cat, job) {
    const sel = $("#f-category"); if (sel && cat) { sel.value = cat; sel.dispatchEvent(new Event("change", { bubbles: true })); }
    const msg = $("#f-message"); if (msg && job && !msg.value) msg.value = `Job: ${job}.`;
    go(sectionY($("#request")));
    setTimeout(() => { const n = $("#f-name") || $("#request input"); if (n) n.focus({ preventScroll: true }); }, reduce ? 50 : 900);
  }
  const JOBCAT = { electrical: "electrical", lighting: "electrical", hvac: "hvac", comfort: "hvac", water: "plumbing", bathroom: "plumbing", utilities: "plumbing", mechanical: "hvac", materials: "asbestos", "air-safety": "radon", exterior: "roofing", openings: "windows-doors", windows: "windows-doors", surfaces: "painting", floors: "painting", walls: "painting", remodelling: "upgrades" };
  const VERBNAME = { installing: "Install", maintaining: "Maintain", removing: "Remove", replacing: "Replace", upgrading: "Upgrade" };
  const VERBCAT = { installing: "installation", maintaining: "maintenance", removing: "removal", replacing: "replacement", upgrading: "upgrades" };
  function loadJobs() {
    if (jobs || jobsLoading) return; jobsLoading = true;
    fetch("data/jobs.json").then((r) => r.json()).then((list) => {
      jobs = list.map((j) => ({ kind: `Job · ${VERBNAME[j.v] || "Home"}`, title: j.n, sub: j.d, q: norm(j.n + " " + j.t + " " + j.d), run: () => request(JOBCAT[j.g] || VERBCAT[j.v] || "other", j.n), boost: 0 }));
      if (open) render();
    }).catch(() => { jobs = []; });
  }

  /* ---------------------------------------------------------------- search */
  function search(qs) {
    const words = norm(qs).split(" ").filter(Boolean);
    const all = build().concat(jobs || []);
    if (!words.length) return null;
    const out = [];
    all.forEach((it) => {
      const t = norm(it.title); let s = 0;
      for (const w of words) {
        if (t === w) s += 12; else if (t.startsWith(w)) s += 8; else if (t.includes(" " + w)) s += 6; else if (t.includes(w)) s += 4; else if (it.q.includes(w)) s += 1.5; else { s = 0; break; }
      }
      if (s > 0) out.push([s + it.boost * 0.6, it]);
    });
    return out.sort((a, b) => b[0] - a[0]).slice(0, 40).map((x) => x[1]);
  }

  /* --------------------------------------------------------------- palette */
  const pal = document.createElement("div");
  pal.className = "pal"; pal.hidden = true;
  pal.innerHTML = `<div class="pal__scrim" data-close></div>
    <div class="pal__box" role="dialog" aria-modal="true" aria-label="Search HAUSE">
      <div class="pal__in"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>
        <input id="palQ" type="search" placeholder="Search 637 jobs, 272 sites, every chapter…" autocomplete="off" spellcheck="false" aria-controls="palList" aria-autocomplete="list">
        <kbd>esc</kbd></div>
      <ul class="pal__list" id="palList" role="listbox"></ul>
      <div class="pal__foot"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>↵</kbd> open</span><span><kbd>J</kbd><kbd>K</kbd> chapters</span><span class="pal__film"><button type="button" data-film>▶ Watch the film</button></span></div>
    </div>`;
  document.body.appendChild(pal);
  const qIn = $("#palQ", pal), list = $("#palList", pal);
  let open = false, sel = 0, shown = [], lastFocus = null;
  const START = [
    ["Watch the film", "The whole house, start to finish, hands off", () => film()],
    ["Buying a home", "Journey · six checks before you firm up", () => window.HAUSE_JOURNEYS && window.HAUSE_JOURNEYS.start("buying")],
    ["Something's wrong now", "Journey · the first ten minutes, then one request", () => window.HAUSE_JOURNEYS && window.HAUSE_JOURNEYS.start("urgent")],
    ["Get matched with a vetted pro", "Request form", () => request("")],
    ["Open the panel", "Act II · the 200 A service", () => go(sectionY($("#z-panel"), 0.02))],
    ["The one you cannot see", "Act II · radon", () => go(sectionY($("#z-radon"), 0.02))],
    ["Browse the network", "272 sites in 18 categories", () => go(sectionY($("#network")))]
  ].map(([title, sub, run]) => ({ kind: "Go", title, sub, run }));
  function render() {
    const res = search(qIn.value);
    shown = res === null ? START : res;
    sel = clamp(sel, 0, Math.max(0, shown.length - 1));
    list.innerHTML = shown.length ? shown.map((it, i) => `<li role="option" id="pal-${i}" aria-selected="${i === sel}" data-i="${i}"><span class="pal__k">${esc(it.kind)}</span><b>${esc(it.title)}</b>${it.sub ? `<small>${esc(it.sub)}</small>` : ""}${it.href ? '<em aria-hidden="true">↗</em>' : ""}</li>`).join("")
      : `<li class="pal__none">Nothing matches “${esc(qIn.value)}” yet. Describe it on the request form and the intake team will route it. <button type="button" data-req>Request ↗</button></li>`;
    qIn.setAttribute("aria-activedescendant", shown.length ? "pal-" + sel : "");
  }
  function move(d) { sel = clamp(sel + d, 0, shown.length - 1); $$("li", list).forEach((li, i) => li.setAttribute("aria-selected", String(i === sel))); const li = $(`#pal-${sel}`, list); if (li) li.scrollIntoView({ block: "nearest" }); qIn.setAttribute("aria-activedescendant", "pal-" + sel); }
  function choose(i) { const it = shown[i]; if (!it) return; close(); it.run(); }
  function show(q = "") {
    if (open) return; open = true; lastFocus = document.activeElement;
    pal.hidden = false; document.documentElement.classList.add("pal-open");
    qIn.value = q; sel = 0; loadJobs(); render();
    requestAnimationFrame(() => { pal.classList.add("is-on"); qIn.focus(); });
  }
  function close() {
    if (!open) return; open = false; pal.classList.remove("is-on"); document.documentElement.classList.remove("pal-open");
    setTimeout(() => { if (!open) pal.hidden = true; }, 220);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  qIn.addEventListener("input", () => { sel = 0; render(); });
  qIn.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
    else if (e.key === "Enter") { e.preventDefault(); choose(sel); }
    else if (e.key === "Escape") { e.preventDefault(); close(); }
  });
  pal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return close();
    if (e.target.closest("[data-film]")) { close(); return film(); }
    if (e.target.closest("[data-req]")) { const q = qIn.value; close(); return request("other", q); }
    const li = e.target.closest("li[data-i]"); if (li) choose(+li.dataset.i);
  });
  pal.addEventListener("mousemove", (e) => { const li = e.target.closest("li[data-i]"); if (li && +li.dataset.i !== sel) { sel = +li.dataset.i - 0; move(0); } });
  // keep keyboard focus inside the dialog
  pal.addEventListener("keydown", (e) => { if (e.key === "Tab") { const f = $$("input, button", pal); const i = f.indexOf(document.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); } });

  // the search button in the bar
  const barBtn = document.createElement("button");
  barBtn.type = "button"; barBtn.className = "bar__search";
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  barBtn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg><span>Search</span><kbd>${mac ? "⌘" : "Ctrl"} K</kbd>`;
  barBtn.setAttribute("aria-label", "Search jobs, sites and chapters");
  barBtn.addEventListener("click", () => show());
  const barCta = $(".bar .btn--sm"); if (barCta) barCta.parentNode.insertBefore(barBtn, barCta);

  /* ------------------------------------------------------------- the film */
  // Scrolls the whole story by itself at a reading pace, slowing down while a chapter's steps change. Any wheel, touch,
  // key or click hands control back.
  const filmUI = document.createElement("div");
  filmUI.className = "film"; filmUI.hidden = true;
  filmUI.innerHTML = `<button type="button" class="film__stop" aria-label="Stop the film"><i></i></button><div class="film__t"><b id="filmCh">The house</b><span>Playing · any key or scroll takes over</span></div><div class="film__bar"><i id="filmBar"></i></div>`;
  document.body.appendChild(filmUI);
  const filmCh = $("#filmCh", filmUI), filmBar = $("#filmBar", filmUI);
  let playing = false, raf = 0, last = 0, pos = 0, endY = 0, startY = 0, quietUntil = 0;
  function film() {
    const story = $("#story"); if (!story) return;
    stopFilm();
    startY = window.scrollY > sectionY(story) + 200 && window.scrollY < sectionY(story) + story.offsetHeight - window.innerHeight * 2 ? window.scrollY : 0;
    endY = sectionY(story) + story.offsetHeight - window.innerHeight;
    if (startY === 0) window.scrollTo(0, 0);
    pos = startY; playing = true; last = performance.now(); quietUntil = last + 400;
    filmUI.hidden = false; requestAnimationFrame(() => filmUI.classList.add("is-on"));
    document.documentElement.classList.add("is-film");
    raf = requestAnimationFrame(tick);
  }
  function tick(now) {
    if (!playing) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const vh = window.innerHeight;
    // pace: about half a screen a second, slower inside the stepped chapters so each step is on screen for a while
    const active = $$("[data-scene]").find((el) => { const r = el.getBoundingClientRect(); return r.top <= vh * 0.5 && r.bottom > vh * 0.5; });
    const stepped = active && (active.dataset.flat || /^(tour|systems|underground)$/.test(active.dataset.scene));
    const speed = vh * (stepped ? 0.34 : active && active.dataset.scene === "hero" ? 0.3 : 0.5);
    pos = Math.min(endY, pos + speed * dt);
    window.scrollTo(0, Math.round(pos));
    if (active) { const a = $(`#chapters a[data-ch="${active.dataset.scene}"]`); if (a && filmCh.textContent !== a.textContent) filmCh.textContent = a.textContent; }
    filmBar.style.transform = `scaleX(${clamp((pos - startY) / Math.max(1, endY - startY), 0, 1).toFixed(4)})`;
    if (pos >= endY) { stopFilm(); return; }
    raf = requestAnimationFrame(tick);
  }
  function stopFilm() {
    if (!playing) return; playing = false; cancelAnimationFrame(raf);
    filmUI.classList.remove("is-on"); document.documentElement.classList.remove("is-film");
    setTimeout(() => { if (!playing) filmUI.hidden = true; }, 300);
  }
  const takeOver = (e) => { if (playing && performance.now() > quietUntil && !(e.target && e.target.closest && e.target.closest(".film"))) stopFilm(); };
  ["wheel", "touchstart", "pointerdown"].forEach((t) => window.addEventListener(t, takeOver, { passive: true }));
  $(".film__stop", filmUI).addEventListener("click", stopFilm);
  // a "watch the film" button beside the hero's calls to action
  const heroGhost = $(".hero .btn--ghost, #top .btn--ghost");
  if (heroGhost) {
    const b = document.createElement("button"); b.type = "button"; b.className = "btn btn--ghost btn--film";
    b.innerHTML = `<span class="film__ico" aria-hidden="true"></span>Watch the film`;
    b.addEventListener("click", film);
    heroGhost.parentNode.insertBefore(b, heroGhost.nextSibling);
  }

  /* ------------------------------------------------------ reading progress */
  const readbar = document.createElement("div"); readbar.className = "readbar"; readbar.setAttribute("aria-hidden", "true");
  document.body.appendChild(readbar);
  let rbTick = false;
  const rb = () => { rbTick = false; const max = document.documentElement.scrollHeight - window.innerHeight; readbar.style.transform = `scaleX(${max > 0 ? (window.scrollY / max).toFixed(4) : 0})`; };
  window.addEventListener("scroll", () => { if (!rbTick) { rbTick = true; requestAnimationFrame(rb); } }, { passive: true });
  rb();

  /* ------------------------------------------------------------- keyboard */
  function chapterJump(d) {
    const els = $$("#chapters a").map((a) => document.getElementById(a.getAttribute("href").slice(1)) || (a.dataset.ch === "hero" ? document.body : null)).filter(Boolean);
    const y = window.scrollY + window.innerHeight * 0.5;
    let i = els.findIndex((el) => { const t = sectionY(el), b = t + el.offsetHeight; return y >= t && y < b; });
    if (i < 0) i = d > 0 ? -1 : els.length;
    const n = clamp(i + d, 0, els.length - 1);
    go(n === 0 ? 0 : sectionY(els[n], 0.02));
  }
  document.addEventListener("keydown", (e) => {
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); open ? close() : show(); return; }
    if (open || typing(e) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (playing) { if (e.key !== "Shift") stopFilm(); if (e.key === "Escape") return; }
    if (e.key === "/") { e.preventDefault(); show(); }
    else if (e.key === "j" || e.key === "J") chapterJump(1);
    else if (e.key === "k" || e.key === "K") chapterJump(-1);
  });
  window.HAUSE_PLATFORM = { search: show, film, stopFilm };
})();
