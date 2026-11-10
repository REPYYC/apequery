/* HAUSE.ca — the network as a constellation, and the live match preview beside the request form.
   Both read the page itself (the directory under #netGrid and the request form). No dependencies. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------------------------------------------------------- data */
  const groups = $$("#netGrid .net__group").map((g) => {
    const h = $("h3", g);
    return {
      key: g.dataset.group,
      name: h ? h.firstChild.textContent.trim() : g.dataset.group,
      sites: $$("li", g).map((li) => {
        const a = $("a", li);
        const d = (a ? a.textContent : ($(".site", li) || li).firstChild.textContent).trim();
        return { d, live: !!a, href: a ? a.href : null, title: (a || $(".site", li) || li).getAttribute("title") || "" };
      })
    };
  });
  if (!groups.length) return;

  /* ------------------------------------------------------- constellation */
  const tools = $("#network .net__tools");
  const wrap = document.createElement("figure");
  wrap.className = "netmap";
  wrap.innerHTML = `<canvas aria-hidden="true"></canvas>
    <div class="netmap__tip" hidden></div>
    <figcaption class="netmap__cap"><b>The network, live.</b><span>Every dot is a HAUSE site. Lit dots are live, rings are in build. The pulses are requests finding their specialist.</span></figcaption>
    <ul class="netmap__keys" aria-label="Highlight a category">${groups.map((g, i) => `<li><button type="button" data-g="${i}" aria-pressed="false"><i></i>${esc(g.name)}<small>${g.sites.filter((s) => s.live).length}</small></button></li>`).join("")}</ul>`;
  if (tools) tools.parentNode.insertBefore(wrap, tools);
  const cv = $("canvas", wrap), ctx = cv.getContext("2d"), tip = $(".netmap__tip", wrap);
  let W = 0, H = 0, dpr = 1, nodes = [], hubs = [], packets = [], focusG = -1, hover = null, query = "", visible = false, raf = 0, t0 = performance.now();
  const EMBER = [244, 189, 126], CREAM = [236, 230, 218];

  function layout() {
    const r = wrap.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(300, r.width); H = Math.round(clamp(W * 0.5, 360, 560));
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.height = H + "px";
    const cx = W / 2, cy = H / 2, R = Math.min(W * 0.4, H * 0.41);
    nodes = []; hubs = [];
    let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const total = groups.reduce((n, g) => n + g.sites.length, 0);
    let acc = 0;
    groups.forEach((g, gi) => {
      // each category gets an arc of the ring in proportion to its size
      const span = (g.sites.length / total) * Math.PI * 2, mid = -Math.PI / 2 + acc + span / 2; acc += span;
      const hx = cx + Math.cos(mid) * R * 0.62 * (W / H > 1.6 ? 1.35 : 1), hy = cy + Math.sin(mid) * R * 0.62;
      hubs.push({ x: hx, y: hy, a: mid, gi });
      g.sites.forEach((s, i) => {
        const k = (i + 0.5) / g.sites.length;
        const ang = mid - span / 2 + span * k + (rnd() - 0.5) * 0.05;
        const rr = R * (0.8 + rnd() * 0.24 + (i % 3) * 0.05);
        const x = cx + Math.cos(ang) * rr * (W / H > 1.6 ? 1.35 : 1), y = cy + Math.sin(ang) * rr;
        nodes.push({ x, y, s, gi, hub: gi, ph: rnd() * 6.28, sz: s.live ? 2.2 + rnd() * 1.4 : 1.8 });
      });
    });
  }
  function rgba(c, a) { return `rgba(${c[0]},${c[1]},${c[2]},${a})`; }
  function match(n) { return !query || n.s.d.includes(query) || n.s.title.toLowerCase().includes(query) || groups[n.gi].name.toLowerCase().includes(query); }
  function draw(now) {
    const t = (now - t0) / 1000;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    // faint rings
    ctx.strokeStyle = "rgba(236,230,218,0.05)"; ctx.lineWidth = 1;
    [0.3, 0.62, 0.9].forEach((k) => { ctx.beginPath(); ctx.ellipse(cx, cy, Math.min(W * 0.4, H * 0.41) * k * (W / H > 1.6 ? 1.35 : 1), Math.min(W * 0.4, H * 0.41) * k, 0, 0, 6.283); ctx.stroke(); });
    // spokes: centre to category hubs, hubs to their sites
    hubs.forEach((h) => {
      const on = focusG < 0 || focusG === h.gi;
      ctx.strokeStyle = rgba(EMBER, on ? 0.16 : 0.04); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(h.x, h.y); ctx.stroke();
    });
    ctx.lineWidth = 0.6;
    nodes.forEach((n) => {
      const on = (focusG < 0 || focusG === n.gi) && match(n);
      if (!on && focusG < 0 && !query) return;
      const h = hubs[n.hub];
      ctx.strokeStyle = rgba(n.s.live ? EMBER : CREAM, on ? (focusG >= 0 || query ? 0.22 : 0.07) : 0.025);
      ctx.beginPath(); ctx.moveTo(h.x, h.y); ctx.lineTo(n.x, n.y); ctx.stroke();
    });
    // packets: a request leaves the centre, passes its category hub and lands on a live site
    if (!reduce && visible) {
      if (packets.length < 14 && Math.random() < 0.12) {
        const pool = nodes.filter((n) => n.s.live && (focusG < 0 || n.gi === focusG) && match(n));
        if (pool.length) packets.push({ n: pool[(Math.random() * pool.length) | 0], k: 0, sp: 0.5 + Math.random() * 0.4 });
      }
      packets = packets.filter((p) => p.k < 1.25);
      packets.forEach((p) => {
        p.k += p.sp / 60;
        const h = hubs[p.n.hub], k = Math.min(1, p.k);
        const x = k < 0.5 ? cx + (h.x - cx) * (k * 2) : h.x + (p.n.x - h.x) * ((k - 0.5) * 2);
        const y = k < 0.5 ? cy + (h.y - cy) * (k * 2) : h.y + (p.n.y - h.y) * ((k - 0.5) * 2);
        const g = ctx.createRadialGradient(x, y, 0, x, y, 7); g.addColorStop(0, rgba(EMBER, 0.95)); g.addColorStop(1, rgba(EMBER, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 7, 0, 6.283); ctx.fill();
        if (p.k >= 1) p.n.flash = 1;
      });
    }
    // sites
    nodes.forEach((n) => {
      const on = (focusG < 0 || focusG === n.gi) && match(n);
      const tw = reduce ? 1 : 0.75 + 0.25 * Math.sin(t * 1.6 + n.ph);
      const fl = n.flash || 0; if (fl) n.flash = Math.max(0, fl - 0.03);
      const a = on ? 1 : 0.16, r = n.sz * (hover === n ? 1.9 : 1) + fl * 3;
      if (n.s.live) {
        if (on) { const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4.5); g.addColorStop(0, rgba(EMBER, 0.32 * tw * a + fl * 0.4)); g.addColorStop(1, rgba(EMBER, 0)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(n.x, n.y, r * 4.5, 0, 6.283); ctx.fill(); }
        ctx.fillStyle = rgba(fl > 0.05 ? [255, 236, 210] : EMBER, a * tw); ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 6.283); ctx.fill();
      } else {
        ctx.strokeStyle = rgba(CREAM, 0.45 * a); ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 6.283); ctx.stroke();
      }
    });
    // category hubs and the centre
    hubs.forEach((h) => { const on = focusG < 0 || focusG === h.gi; ctx.fillStyle = rgba(CREAM, on ? 0.7 : 0.2); ctx.beginPath(); ctx.arc(h.x, h.y, 2.4, 0, 6.283); ctx.fill(); });
    const pulse = reduce ? 0 : (t % 2.4) / 2.4;
    ctx.strokeStyle = rgba(EMBER, 0.5 * (1 - pulse)); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(cx, cy, 16 + pulse * 40, 0, 6.283); ctx.stroke();
    ctx.fillStyle = "#0e1017"; ctx.strokeStyle = rgba(EMBER, 0.8); ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(cx, cy, 17, 0, 6.283); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = "#ece6da"; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(cx - 7, cy + 7); ctx.lineTo(cx, cy - 7); ctx.lineTo(cx + 7, cy + 7); ctx.stroke();
    ctx.fillStyle = "#f4bd7e"; ctx.fillRect(cx - 1.6, cy + 1.6, 3.2, 3.2);
    // the hovered or highlighted category's name near its hub
    const lg = hover ? hover.gi : focusG;
    if (lg >= 0) { const h = hubs[lg]; ctx.font = "500 11px ui-monospace, Menlo, monospace"; ctx.fillStyle = rgba(CREAM, 0.85); ctx.textAlign = h.x < cx ? "right" : "left"; ctx.fillText(groups[lg].name.toUpperCase(), h.x + (h.x < cx ? -8 : 8), h.y - 6); }
    if (visible && !reduce) raf = requestAnimationFrame(draw);
  }
  function kick() { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
  layout(); kick();
  window.addEventListener("resize", () => { layout(); kick(); });
  if ("IntersectionObserver" in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) kick(); }, { rootMargin: "100px" }).observe(wrap);
  else visible = true;

  function nearest(e) {
    const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    let best = null, bd = 18 * 18;
    nodes.forEach((n) => { const d = (n.x - x) ** 2 + (n.y - y) ** 2; if (d < bd && (focusG < 0 || n.gi === focusG)) { bd = d; best = n; } });
    return best;
  }
  cv.addEventListener("pointermove", (e) => {
    const n = nearest(e);
    if (n !== hover) { hover = n; cv.style.cursor = n && n.s.live ? "pointer" : "default"; if (reduce || !visible) kick(); }
    if (!n) { tip.hidden = true; return; }
    tip.hidden = false;
    tip.innerHTML = `<b>${esc(n.s.d)}</b><span>${esc(groups[n.gi].name)}${n.s.title && n.s.title !== "In build" ? " · " + esc(n.s.title) : ""}</span><em>${n.s.live ? "Live · open ↗" : "In build"}</em>`;
    const r = cv.getBoundingClientRect();
    tip.style.transform = `translate(${Math.round(clamp(e.clientX - r.left + 14, 8, W - 240))}px, ${Math.round(clamp(e.clientY - r.top + 14, 8, H - 70))}px)`;
  });
  cv.addEventListener("pointerleave", () => { hover = null; tip.hidden = true; });
  cv.addEventListener("click", (e) => { const n = nearest(e); if (n && n.s.live) window.open(n.s.href, "_blank", "noopener"); });
  wrap.addEventListener("click", (e) => {
    const b = e.target.closest("[data-g]"); if (!b) return;
    const g = +b.dataset.g; focusG = focusG === g ? -1 : g;
    $$("[data-g]", wrap).forEach((x) => x.setAttribute("aria-pressed", String(+x.dataset.g === focusG)));
    wrap.classList.toggle("has-focus", focusG >= 0); kick();
  });
  const find = $("#netFind");
  if (find) find.addEventListener("input", () => { query = find.value.trim().toLowerCase(); kick(); });

  /* -------------------------------------------------------- match preview */
  const form = $("#leadForm"), panel = $(".req__panel");
  if (!form || !panel) return;
  const CAT2GROUP = { electrical: ["electrical"], plumbing: ["plumbing", "water"], sewer: ["sewer"], hvac: ["hvac"], "water-heaters": ["water"], roofing: ["roof"], "windows-doors": ["windows", "roof"], solar: ["energy"], radon: ["radon"], asbestos: ["asbestos", "restoration"], foundation: ["foundation"], installation: ["verbs"], upgrades: ["reno", "verbs"], removal: ["verbs", "reno"], replacement: ["verbs"], maintenance: ["verbs", "home"], inspection: ["inspection"], painting: ["reno"], cleaning: ["cleaning", "restoration"], moving: ["home"], other: [] };
  const card = document.createElement("aside");
  card.className = "match"; card.setAttribute("aria-live", "polite");
  panel.insertBefore(card, form);
  const fields = ["name", "phone", "email", "city", "property", "category", "urgency"];
  function renderMatch() {
    const v = (id) => { const el = $("#f-" + id); return el ? el.value.trim() : ""; };
    const done = fields.filter((f) => v(f)).length;
    const catEl = $("#f-category"), cat = v("category"), city = v("city"), urg = $("#f-urgency");
    const catName = cat && catEl.selectedOptions[0] ? catEl.selectedOptions[0].textContent : "";
    const sites = (CAT2GROUP[cat] || []).flatMap((k) => (groups.find((g) => g.key === k) || { sites: [] }).sites).filter((s) => s.live);
    const urgText = urg && urg.value && urg.selectedOptions[0] ? urg.selectedOptions[0].textContent : "";
    card.innerHTML = `<div class="match__top"><span class="match__dot${cat && city ? " is-on" : ""}"></span><b>${cat && city ? "Your match" : "Your request"}</b><span class="match__n">${done} / ${fields.length}</span></div>
      <div class="match__bar"><i style="transform:scaleX(${(done / fields.length).toFixed(3)})"></i></div>
      <p class="match__what">${catName ? `<strong>${esc(catName)}</strong>` : "Pick a category"}${city ? ` in <strong>${esc(city)}</strong>` : ""}${urgText ? ` · ${esc(urgText)}` : ""}</p>
      <ul class="match__checks">${["Licensed for the trade", "Insured to $2 million", "Workers' comp in good standing", "Rated 4.5★ or higher"].map((c, i) => `<li class="${cat && city ? "is-on" : ""}" style="--i:${i}">${c}</li>`).join("")}</ul>
      ${sites.length ? `<p class="match__sites"><span>${sites.length} specialist site${sites.length > 1 ? "s" : ""} in this category</span>${sites.slice(0, 4).map((s) => `<a href="${s.href}" rel="noopener">${esc(s.d)}</a>`).join("")}</p>` : ""}`;
  }
  form.addEventListener("input", renderMatch);
  form.addEventListener("change", renderMatch);
  // links elsewhere on the page pre-select the category without an input event
  document.addEventListener("click", (e) => { if (e.target.closest("[data-cat]")) setTimeout(renderMatch, 0); });
  renderMatch();
})();
