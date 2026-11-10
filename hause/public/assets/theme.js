/* HAUSE.ca — theme: picks the colour palette (data-palette on <html>) and the 3D stage's matching colour grade.
   The choice comes from ?palette=<name>, then a remembered pick, then DEFAULT. Preview builds show a swatch picker. */
(() => {
  "use strict";
  const DEFAULT = "ember";
  // label, the two swatch colours, and the stage grade (shadow / highlight tint, saturation)
  const THEMES = {
    ember: { label: "Ember", bg: "#0b0f1d", acc: "#f4bd7e", look: { shadow: [0.96, 0.99, 1.05], high: [1.04, 1.0, 0.95], sat: 1.05, cool: 0 } },
    signal: { label: "Signal", bg: "#121214", acc: "#ff6a2b", look: { shadow: [1.0, 0.98, 0.96], high: [1.05, 0.99, 0.93], sat: 0.95, cool: 0.9 } },
    brass: { label: "Brass", bg: "#0f1714", acc: "#d9b766", look: { shadow: [0.9, 1.04, 0.95], high: [1.04, 1.01, 0.92], sat: 0.95, cool: 0.85 } },
    lime: { label: "Lime", bg: "#111316", acc: "#c6f24e", look: { shadow: [0.97, 1.0, 1.0], high: [1.0, 1.02, 0.96], sat: 0.9, cool: 0.92 } },
    clay: { label: "Clay", bg: "#19120f", acc: "#e2714d", look: { shadow: [1.06, 0.97, 0.9], high: [1.05, 1.0, 0.93], sat: 0.95, cool: 0.85 } }
  };
  const root = document.documentElement;
  let name = DEFAULT;
  try {
    const q = new URLSearchParams(location.search).get("palette");
    const saved = localStorage.getItem("hause-palette");
    name = THEMES[q] ? q : THEMES[saved] ? saved : DEFAULT;
  } catch (e) { /* storage blocked: use the default */ }
  function apply(n, remember) {
    if (!THEMES[n]) return;
    name = n;
    if (n === "ember") root.removeAttribute("data-palette"); else root.setAttribute("data-palette", n);
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.setAttribute("content", THEMES[n].bg);
    const S = window.HAUSE_STAGE; if (S && S.setLook) S.setLook(THEMES[n].look);
    if (remember) { try { localStorage.setItem("hause-palette", n); } catch (e) { /* ignore */ } }
    document.querySelectorAll(".swatches button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.p === n)));
    window.dispatchEvent(new CustomEvent("hause:palette", { detail: n }));
  }
  apply(name);
  window.addEventListener("hause:stage-ready", () => apply(name));
  window.HAUSE_THEME = { apply: (n) => apply(n, true), get: () => name, list: Object.keys(THEMES) };

  // swatch picker: on in preview builds or when a palette is named in the address
  const mount = () => {
    if (!(window.HAUSE_PREVIEW === true || /[?&](palette=|swatches)/.test(location.search))) return;
    const box = document.createElement("div");
    box.className = "swatches"; box.setAttribute("role", "group"); box.setAttribute("aria-label", "Colour palette");
    box.innerHTML = `<span>Palette</span>` + Object.entries(THEMES).map(([k, t]) => `<button type="button" data-p="${k}" title="${t.label}" aria-label="${t.label} palette" aria-pressed="${k === name}" style="--sw-bg:${t.bg};--sw-acc:${t.acc}"></button>`).join("");
    box.addEventListener("click", (e) => { const b = e.target.closest("[data-p]"); if (b) apply(b.dataset.p, true); });
    document.body.appendChild(box);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
