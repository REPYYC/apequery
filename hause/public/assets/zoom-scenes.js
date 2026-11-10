/* HAUSE.ca — Act II scenes. Six technical drawings, each a camera path of viewBox keyframes with hotspots that lead to the specialist sites. All SVG, no images. */
(() => {
  "use strict";
  const C = { ink: "#0a1626", ink2: "#0f1d33", cream: "#ece6da", cream2: "rgba(236,230,218,.62)", cream3: "rgba(236,230,218,.3)", ember: "#f4bd7e", copper: "#d98a4e", power: "#ffc46b", water: "#4fa6ff", air: "#8ff0c8", radon: "#d98cff", heat: "#ff9b3d", sewer: "#c9a26a", fire: "#ff6b4f", soil: "#2a2117", soil2: "#3b2e1f", steel: "#9aa6b2", steel2: "#5c6670", pink: "#e9a0aa", blue2: "#8fa6b8", green: "#8fd3a6" };
  const hot = (id, x, y, step) => `<g class="hs" data-hs="${id}" data-step="${step}" transform="translate(${x},${y})"><circle class="hs__halo" r="22"/><circle class="hs__ring" r="11"/><circle class="hs__dot" r="4.5"/></g>`;
  const T = (x, y, s, size = 12, fill = C.cream2, extra = "") => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${extra}>${s}</text>`;
  const defs = (id) => `<defs>
    <filter id="${id}-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="${id}-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="10"/></filter>
    <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1a30"/><stop offset="1" stop-color="#070d1a"/></linearGradient>
    <linearGradient id="${id}-soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2e1f"/><stop offset="1" stop-color="#1c150e"/></linearGradient>
    <linearGradient id="${id}-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a414d"/><stop offset=".5" stop-color="#596270"/><stop offset="1" stop-color="#2d333c"/></linearGradient>
    <linearGradient id="${id}-copper" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b8743e"/><stop offset=".5" stop-color="#f1b47f"/><stop offset="1" stop-color="#9c5c2c"/></linearGradient>
    <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1326"/><stop offset="1" stop-color="#1b2a4a"/></linearGradient>
    <radialGradient id="${id}-fire" cx=".5" cy=".9" r=".7"><stop offset="0" stop-color="#fff2b0"/><stop offset=".35" stop-color="#ff9b3d"/><stop offset=".75" stop-color="#ff5a2c" stop-opacity=".8"/><stop offset="1" stop-color="#ff5a2c" stop-opacity="0"/></radialGradient>
    <pattern id="${id}-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(143,166,184,.07)"/></pattern>
    <pattern id="${id}-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="rgba(236,230,218,.18)" stroke-width="1.2"/></pattern>
    <pattern id="${id}-batt" width="18" height="14" patternUnits="userSpaceOnUse"><path d="M0 7q4.5-6 9 0t9 0" fill="none" stroke="rgba(233,150,160,.5)" stroke-width="1.2"/></pattern>
    <pattern id="${id}-gravel" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="4" cy="5" r="2.2" fill="rgba(236,230,218,.22)"/><circle cx="12" cy="11" r="1.8" fill="rgba(236,230,218,.16)"/><circle cx="11" cy="3" r="1.3" fill="rgba(236,230,218,.12)"/></pattern>
  </defs>`;
  const bg = (id, w, h) => `<rect width="${w}" height="${h}" fill="url(#${id}-bg)"/><rect width="${w}" height="${h}" fill="url(#${id}-grid)"/>`;
  const sites = (arr) => arr;

  /* ------------------------------------------------------------- 1 · PANEL */
  function panel() {
    const id = "p";
    let s = "";
    // breakers: two columns of 14. Left column odd slots, right column even.
    const L = [["15", "Kitchen plugs", "lo"], ["15", "Kitchen plugs", "lo"], ["20", "Bath GFCI", "mid"], ["15", "Bedrooms AFCI", "lo"], ["15", "Living room", "lo"], ["15", "Lights", "lo"], ["20", "Furnace", "mid"], ["15", "Fridge", "lo"], ["40", "Range", "big"], ["", "", "sp"], ["30", "Dryer", "big"], ["", "", "sp"], ["15", "Garage", "lo"], ["", "", "empty"]];
    const R = [["15", "Basement", "lo"], ["15", "Basement", "lo"], ["20", "Laundry", "mid"], ["15", "Bath fan", "lo"], ["15", "Outdoor", "lo"], ["20", "Microwave", "mid"], ["20", "Dishwasher", "mid"], ["30", "Water heater", "big"], ["", "", "sp"], ["50", "EV charger", "big"], ["", "", "sp"], ["60", "Hot tub GFCI", "big"], ["", "", "sp"], ["30", "A/C", "big"]];
    const brk = (col, i, [a, name, kind]) => {
      const x = col === 0 ? 690 : 795, y = 232 + i * 26;
      if (kind === "sp") return "";
      const h = kind === "big" ? 48 : 22;
      const key = name.toLowerCase().replace(/[^a-z]+/g, "-");
      return `<g class="brk brk--${kind}" data-brk="${key}"><rect x="${x}" y="${y}" width="75" height="${h}" rx="2" fill="#1a2030" stroke="rgba(236,230,218,.28)"/>${kind === "empty" ? `<rect x="${x + 6}" y="${y + 6}" width="63" height="10" fill="none" stroke="rgba(236,230,218,.15)" stroke-dasharray="3 3"/>` : `<rect class="brk__toggle" x="${col === 0 ? x + 52 : x + 8}" y="${y + 5}" width="15" height="${h - 10}" rx="1.5" fill="#3a4252"/><text x="${col === 0 ? x + 8 : x + 30}" y="${y + (kind === "big" ? 20 : 15)}" font-size="9" fill="${C.cream}" font-weight="600">${a} A</text><text x="${col === 0 ? x + 8 : x + 30}" y="${y + (kind === "big" ? 36 : 15)}" font-size="${kind === "big" ? 7 : 0}" fill="${C.cream2}">${kind === "big" ? name : ""}</text>`}</g>`;
    };
    s += defs(id) + bg(id, 1200, 800);
    // exterior wall + ground
    s += `<rect x="0" y="0" width="300" height="800" fill="#121a2b"/><rect x="296" y="0" width="8" height="800" fill="#1d2740"/><rect x="0" y="700" width="300" height="100" fill="url(#${id}-soil)"/><rect x="304" y="700" width="896" height="100" fill="#0b1220"/><line x1="304" y1="700" x2="1200" y2="700" stroke="rgba(236,230,218,.25)"/>`;
    s += T(28, 40, "OUTSIDE", 10, C.cream3, 'letter-spacing="3"') + T(330, 40, "BASEMENT", 10, C.cream3, 'letter-spacing="3"');
    // service drop + mast + weatherhead
    s += `<path class="flow flow--power" d="M-20 28 C 60 40, 120 50, 168 62" fill="none" stroke="${C.power}" stroke-width="2.5"/><path d="M-20 36 C 60 48, 120 58, 168 70" fill="none" stroke="rgba(255,196,107,.45)" stroke-width="2"/>`;
    s += `<rect x="163" y="60" width="14" height="110" fill="url(#${id}-metal)"/><path d="M152 62 h36 l-10 -14 h-16z" fill="#3a414d" stroke="rgba(236,230,218,.3)"/>`;
    // meter
    s += `<rect x="128" y="168" width="84" height="40" rx="3" fill="#2a3140" stroke="rgba(236,230,218,.3)"/><circle cx="170" cy="212" r="42" fill="#1b2232" stroke="rgba(236,230,218,.45)" stroke-width="2"/><circle cx="170" cy="212" r="33" fill="#e8e1d2"/><rect x="150" y="204" width="40" height="12" fill="#1b2232"/>${T(153, 214, "0 4 8 1 7", 9, C.cream, 'font-weight="600" letter-spacing="1"')}<circle class="meter__disc" cx="170" cy="226" r="5" fill="none" stroke="#1b2232" stroke-width="2" stroke-dasharray="4 4"/><rect x="128" y="250" width="84" height="26" rx="3" fill="#2a3140" stroke="rgba(236,230,218,.3)"/>`;
    s += T(110, 300, "Smart meter · 200 A socket", 10, C.cream2) + T(110, 316, "Utility side ends here", 9, C.cream3);
    // service entrance into the panel
    s += `<path class="flow flow--power" d="M212 262 H250 V96 H780 V156" fill="none" stroke="${C.power}" stroke-width="4"/><path d="M212 268 H256 V102 H786 V156" fill="none" stroke="rgba(255,196,107,.35)" stroke-width="4"/><path d="M212 274 H262 V108 H792 V156" fill="none" stroke="rgba(236,230,218,.35)" stroke-width="3"/>`;
    s += T(420, 86, "3 × 4/0 Al service entrance · 200 A", 10, C.cream2);
    // panel enclosure
    s += `<rect x="652" y="132" width="256" height="536" rx="4" fill="#161c29" stroke="rgba(236,230,218,.35)" stroke-width="2"/><rect x="660" y="140" width="240" height="520" rx="2" fill="#10151f" stroke="rgba(236,230,218,.15)"/>`;
    // open door hint
    s += `<path d="M652 132 L600 150 L600 650 L652 668 Z" fill="rgba(22,28,41,.6)" stroke="rgba(236,230,218,.2)"/>`;
    // main breaker
    s += `<g class="brk brk--main" data-brk="main"><rect x="732" y="158" width="96" height="56" rx="3" fill="#1a2030" stroke="${C.ember}" stroke-width="1.5"/><rect class="brk__toggle" x="772" y="166" width="16" height="40" rx="2" fill="#3a4252"/><text x="742" y="180" font-size="12" fill="${C.cream}" font-weight="600">200 A</text><text x="742" y="196" font-size="7" fill="${C.cream2}">MAIN</text><text x="742" y="206" font-size="7" fill="${C.cream2}">2-pole</text></g>`;
    // bus bars
    s += `<rect x="771" y="214" width="7" height="396" fill="url(#${id}-copper)"/><rect x="782" y="214" width="7" height="396" fill="url(#${id}-copper)"/>`;
    for (let i = 0; i < 14; i++) { const y = 232 + i * 26 + 10; s += `<rect x="765" y="${y}" width="6" height="4" fill="#f1b47f"/><rect x="789" y="${y}" width="6" height="4" fill="#f1b47f"/>`; }
    // neutral and ground bars
    s += `<rect x="668" y="230" width="12" height="380" fill="#b9bfc8"/><rect x="880" y="230" width="12" height="380" fill="#b9bfc8"/>`;
    for (let i = 0; i < 24; i++) { const y = 238 + i * 15.5; s += `<circle cx="674" cy="${y}" r="1.6" fill="#1a2030"/><circle cx="886" cy="${y}" r="1.6" fill="#1a2030"/>`; }
    s += T(664, 224, "N", 7, C.cream2) + T(880, 224, "G", 7, C.cream2);
    // breakers
    L.forEach((b, i) => { s += brk(0, i, b); }); R.forEach((b, i) => { s += brk(1, i, b); });
    // ground electrode + bonding
    s += `<path d="M886 610 V690 H960" fill="none" stroke="#8fd3a6" stroke-width="2"/><path d="M960 684 v12 M968 686 v8 M976 688 v4" stroke="#8fd3a6" stroke-width="2"/>${T(900, 676, "Bond · ground rod", 8, C.cream3)}`;
    // branch circuits leaving to the right (EV and spa and a plug circuit)
    s += `<path class="flow flow--power" d="M870 476 H1000 V300 H1180" fill="none" stroke="${C.power}" stroke-width="2.5" data-run="ev-charger"/><path class="flow flow--power" d="M870 528 H1020 V640 H1180" fill="none" stroke="${C.power}" stroke-width="2.5" data-run="hot-tub-gfci"/><path class="flow flow--power flow--thin" d="M870 258 H1010 V470 H1012" fill="none" stroke="${C.power}" stroke-width="1.8"/>`;
    s += T(1100, 292, "6/3 → EV charger", 8, C.cream2) + T(1100, 632, "6/3 → hot tub", 8, C.cream2);
    // receptacle box with aluminum pigtail
    s += `<rect x="1004" y="436" width="72" height="88" rx="2" fill="#1a2030" stroke="rgba(236,230,218,.35)"/><rect x="1024" y="446" width="32" height="68" rx="3" fill="#e7e2d8"/><rect x="1032" y="456" width="5" height="10" fill="#333"/><rect x="1043" y="456" width="5" height="10" fill="#333"/><rect x="1032" y="490" width="5" height="10" fill="#333"/><rect x="1043" y="490" width="5" height="10" fill="#333"/><circle cx="1040" cy="480" r="2.5" fill="#333"/>`;
    s += `<path d="M1012 470 C 1012 450, 1016 446, 1024 446" fill="none" stroke="#c9ced4" stroke-width="2.4"/><path d="M1012 470 C 1012 452, 1030 440, 1050 440" fill="none" stroke="#c9ced4" stroke-width="2.4"/><circle cx="1050" cy="440" r="4.5" fill="#8d5cff"/><path d="M1054 440 C 1062 440, 1066 450, 1056 452" fill="none" stroke="#e08a4a" stroke-width="2.4"/>`;
    s += T(1086, 448, "Aluminum branch wire (1965–78)", 8, C.cream2) + T(1086, 460, "Rated connector + copper pigtail", 8, C.cream3) + T(1086, 472, "CO/ALR device or AlumiConn", 8, C.cream3);
    // capacity gauge (top right)
    s += `<g id="pGauge" transform="translate(1060,200)"><path d="M-70 0 A70 70 0 0 1 70 0" fill="none" stroke="rgba(236,230,218,.18)" stroke-width="10" stroke-linecap="round"/><path id="pGaugeArc" d="M-70 0 A70 70 0 0 1 70 0" fill="none" stroke="${C.ember}" stroke-width="10" stroke-linecap="round" stroke-dasharray="220" stroke-dashoffset="150"/><text id="pGaugeN" x="0" y="-8" text-anchor="middle" font-size="26" font-weight="600" fill="${C.cream}">62 A</text><text id="pGaugeS" x="0" y="12" text-anchor="middle" font-size="9" fill="${C.cream2}">of a 100 A service</text><text x="-70" y="22" text-anchor="middle" font-size="8" fill="${C.cream3}">0</text><text x="70" y="22" text-anchor="middle" font-size="8" fill="${C.cream3}">100%</text></g>`;
    s += T(996, 260, "Calculated demand", 9, C.cream3, 'letter-spacing="2"');
    // hotspots
    s += hot("meter", 170, 212, 1) + hot("main", 780, 186, 2) + hot("bus", 780, 420, 3) + hot("branch", 727, 268, 3) + hot("range", 727, 464, 4) + hot("ev", 832, 490, 4) + hot("spa", 832, 542, 4) + hot("alu", 1050, 440, 5) + hot("afci", 727, 322, 5) + hot("load", 1060, 190, 6);
    return s;
  }

  /* ------------------------------------------------------------- 2 · ATTIC */
  function attic() {
    const id = "a";
    let s = defs(id) + `<rect width="1200" height="800" fill="url(#${id}-sky)"/><rect width="1200" height="800" fill="url(#${id}-grid)"/>`;
    // sun + hail
    s += `<circle cx="1060" cy="90" r="34" fill="${C.ember}" opacity=".9" filter="url(#${id}-glow)"/>`;
    for (let i = 0; i < 26; i++) { const x = 300 + ((i * 137) % 520), y = 40 + ((i * 71) % 230); s += `<circle class="hail" style="--d:${(i % 7) * 0.25}s" cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="rgba(236,230,218,.8)"/>`; }
    // roof slope: eave (80,560) → ridge (820,180) → right slope to (1120,340)
    const roofL = "M80 560 L820 180", roofR = "M820 180 L1120 340";
    s += `<path d="M80 560 L820 180 L1120 340 L1120 800 L80 800 Z" fill="#0d1526"/>`;
    // ceiling joists + insulation on attic floor y=560
    s += `<rect x="260" y="560" width="760" height="72" fill="url(#${id}-batt)"/><rect x="260" y="560" width="760" height="72" fill="rgba(233,150,160,.12)"/>`;
    for (let x = 260; x <= 1020; x += 76) s += `<rect x="${x}" y="556" width="6" height="80" fill="#3a3028"/>`;
    s += `<rect x="260" y="632" width="760" height="6" fill="#2a2420"/>`;
    s += T(540, 606, "R-50 · about 400 mm of blown or batt insulation", 10, C.cream);
    // vermiculite patch (older)
    s += `<rect x="760" y="566" width="200" height="60" fill="#5a4a2a" opacity=".9"/><rect x="760" y="566" width="200" height="60" fill="url(#${id}-gravel)"/>${T(770, 650, "Vermiculite (pre-1990) · may contain asbestos", 9, C.pink)}`;
    // rafters along slope (hatched band under the deck)
    s += `<path d="M80 560 L820 180 L832 194 L92 574 Z" fill="url(#${id}-hatch)"/><path d="M820 180 L1120 340 L1114 356 L826 196 Z" fill="url(#${id}-hatch)"/>`;
    // deck, underlayment, shingles layers (offset outward from slope normal)
    const layer = (off, w, col) => `<path d="M${80 - off * 0.46} ${560 - off * 0.89} L${820 - off * 0.46} ${180 - off * 0.89}" fill="none" stroke="${col}" stroke-width="${w}"/>`;
    s += layer(10, 8, "#3a3028") + layer(18, 4, "#1d2740") + layer(26, 10, "#2f2a2a");
    // shingle tabs
    for (let i = 0; i < 24; i++) { const t = i / 24, x = 80 + (820 - 80) * t - 12, y = 560 - 380 * t - 23; s += `<line x1="${x}" y1="${y}" x2="${x + 4}" y2="${y + 8}" stroke="rgba(236,230,218,.35)" stroke-width="1.5"/>`; }
    // right slope layers
    s += `<path d="M820 180 L1120 340" stroke="#2f2a2a" stroke-width="10" transform="translate(5,-26)"/><path d="M820 180 L1120 340" stroke="#3a3028" stroke-width="8" transform="translate(2,-12)"/>`;
    // hail dents on shingles
    for (let i = 0; i < 9; i++) { const t = 0.42 + i * 0.045, x = 80 + 740 * t, y = 560 - 380 * t - 26; s += `<ellipse cx="${x}" cy="${y}" rx="5" ry="3" fill="none" stroke="${C.ember}" stroke-width="1.2" opacity=".9"/>`; }
    s += T(420, 300, "Hail bruising · granule loss", 9, C.ember);
    // ridge vent
    s += `<rect x="796" y="150" width="56" height="12" rx="3" fill="#3a414d" stroke="rgba(236,230,218,.3)"/><path class="air air--out" d="M824 176 V120" stroke="${C.air}" stroke-width="2" fill="none"/>${T(850, 140, "Ridge vent · warm air out", 9, C.air)}`;
    // soffit + eave: fascia, soffit vent, baffle, ice dam
    s += `<rect x="40" y="556" width="60" height="16" fill="#3a414d"/><rect x="60" y="572" width="200" height="12" fill="#2a3140"/>`;
    for (let x = 80; x < 240; x += 14) s += `<rect x="${x}" y="576" width="8" height="4" fill="#0d1526"/>`;
    s += `<path class="air air--in" d="M120 600 V560 L210 520" stroke="${C.air}" stroke-width="2" fill="none"/>${T(60, 624, "Soffit vent · cold air in", 9, C.air)}`;
    s += `<path d="M190 520 L300 462" stroke="#8fa6b8" stroke-width="3" opacity=".7"/>${T(238, 456, "Baffle keeps the channel open", 8, C.cream3)}`;
    // ice dam at the eave + icicles + meltwater creeping under shingles
    s += `<path d="M30 548 C 40 520, 70 512, 110 530 L 130 544 L 60 572 Z" fill="#9fd4ff" opacity=".85"/><path d="M44 572 v26 M62 574 v40 M80 576 v18" stroke="#bfe5ff" stroke-width="4" stroke-linecap="round"/><path class="flow flow--water" d="M130 536 L190 506" stroke="${C.water}" stroke-width="2" fill="none"/>${T(130, 598, "Ice dam · meltwater backs up under the shingles", 9, C.water)}`;
    // attic rain: frost on nail tips under the deck, droplets
    for (let i = 0; i < 12; i++) { const t = 0.5 + i * 0.03, x = 80 + 740 * t + 6, y = 560 - 380 * t + 12; s += `<circle cx="${x}" cy="${y}" r="2.2" fill="#dff3ff"/><circle class="drip" style="--d:${(i % 5) * 0.6}s" cx="${x}" cy="${y + 6}" r="1.8" fill="${C.water}"/>`; }
    s += T(560, 420, "Attic rain · frost on the nails thaws and drips", 9, "#dff3ff");
    // bath fan duct venting into attic (wrong) and a roof cap (right)
    s += `<rect x="500" y="636" width="34" height="14" fill="#3a414d"/><path d="M517 636 C 517 600, 560 590, 580 540 C 592 512, 610 500, 630 496" fill="none" stroke="#9aa6b2" stroke-width="10" stroke-linecap="round" stroke-dasharray="6 5"/><path class="air air--out" d="M632 496 L660 470 M632 496 L664 494 M632 496 L648 520" stroke="${C.air}" stroke-width="2" fill="none"/>${T(560, 470, "Bath fan dumping moist air into the attic", 9, C.pink)}`;
    s += `<rect x="930" y="222" width="28" height="18" fill="#3a414d" transform="rotate(28 944 231)"/>${T(960, 262, "Roof cap · where that duct should end", 8, C.cream3)}`;
    // solar panel on right slope
    s += `<g transform="translate(900,220) rotate(28)"><rect x="0" y="-40" width="200" height="90" rx="3" fill="#15223d" stroke="#8fa6b8" stroke-width="2"/>${Array.from({ length: 4 }, (_, i) => `<line x1="${50 * (i + 1)}" y1="-40" x2="${50 * (i + 1)}" y2="50" stroke="rgba(143,166,184,.5)"/>`).join("")}<line x1="0" y1="5" x2="200" y2="5" stroke="rgba(143,166,184,.5)"/></g>`;
    s += `<path class="flow flow--power" d="M1010 300 L1030 420 L1100 420" fill="none" stroke="${C.power}" stroke-width="2"/>${T(1030, 450, "Solar · to the panel", 9, C.power)}`;
    // wall + window below the eave (left)
    s += `<rect x="150" y="584" width="110" height="216" fill="#121a2b"/>`;
    for (let y = 590; y < 800; y += 12) s += `<line x1="150" y1="${y}" x2="260" y2="${y}" stroke="rgba(236,230,218,.08)"/>`;
    s += `<rect x="166" y="630" width="78" height="110" fill="#1a2448" stroke="#0f0f10" stroke-width="6"/><line x1="205" y1="630" x2="205" y2="740" stroke="#0f0f10" stroke-width="4"/><rect x="160" y="740" width="90" height="8" fill="#15130f"/>`;
    s += `<path d="M166 740 C 180 720, 190 716, 200 712" fill="none" stroke="${C.water}" stroke-width="1.5"/>${T(60, 775, "Window · seal, glass, frame", 9, C.cream2)}`;
    // hotspots
    s += hot("roof", 450, 340, 0) + hot("ice", 90, 540, 1) + hot("rain", 640, 352, 2) + hot("ins", 640, 596, 3) + hot("fan", 600, 540, 3) + hot("verm", 860, 596, 4) + hot("solar", 1000, 300, 5) + hot("win", 205, 685, 6);
    return s;
  }

  /* ------------------------------------------------------------- 3 · SEWER */
  function sewer() {
    const id = "s";
    let s = defs(id) + `<rect width="1600" height="800" fill="url(#${id}-sky)"/><rect y="240" width="1600" height="560" fill="url(#${id}-soil)"/><rect width="1600" height="800" fill="url(#${id}-grid)"/>`;
    s += `<line x1="0" y1="240" x2="1600" y2="240" stroke="#8fd3a6" stroke-width="3"/>`;
    for (let x = 0; x < 1600; x += 9) s += `<line x1="${x}" y1="240" x2="${x + 3}" y2="232" stroke="#8fd3a6" stroke-width="1.5"/>`;
    // house (left): walls, floor, footing, weeping tile, sump, floor drain
    s += `<path d="M30 240 L60 240 L60 60 L420 60 L420 240 L450 240" fill="none" stroke="rgba(236,230,218,.3)"/><rect x="60" y="60" width="360" height="180" fill="#0d1526"/><rect x="60" y="240" width="360" height="330" fill="#0b1220" stroke="rgba(236,230,218,.35)" stroke-width="3"/>`;
    s += `<rect x="40" y="570" width="60" height="22" fill="#3a414d"/><rect x="400" y="570" width="60" height="22" fill="#3a414d"/><rect x="60" y="570" width="360" height="12" fill="#2a3140"/>`;
    s += `<circle cx="52" cy="602" r="9" fill="none" stroke="${C.sewer}" stroke-width="3" stroke-dasharray="3 3"/><circle cx="448" cy="602" r="9" fill="none" stroke="${C.sewer}" stroke-width="3" stroke-dasharray="3 3"/>${T(470, 626, "Weeping tile at the footing", 9, C.sewer)}`;
    s += `<rect x="100" y="520" width="60" height="52" fill="#101826" stroke="rgba(236,230,218,.3)"/><rect x="112" y="540" width="22" height="30" rx="4" fill="#3a414d"/><path class="flow flow--water" d="M123 540 V480 H60" fill="none" stroke="${C.water}" stroke-width="3"/>${T(96, 508, "Sump", 9, C.cream2)}`;
    s += `<circle cx="300" cy="570" r="8" fill="#1a2030" stroke="rgba(236,230,218,.4)" stroke-width="2"/>${T(276, 556, "Floor drain", 8, C.cream2)}`;
    s += T(90, 100, "MAIN FLOOR", 10, C.cream3, 'letter-spacing="3"') + T(90, 280, "BASEMENT", 10, C.cream3, 'letter-spacing="3"');
    // building drain under the slab to the wall; cleanout riser
    s += `<path d="M300 578 V600 H424" fill="none" stroke="${C.sewer}" stroke-width="10"/>`;
    s += `<path d="M444 598 V250" stroke="${C.sewer}" stroke-width="12"/><rect x="432" y="236" width="24" height="12" rx="2" fill="#3a414d" stroke="rgba(236,230,218,.4)"/>${T(462, 300, "Cleanout · where the camera and cable go in", 9, C.cream2)}`;
    // lateral: clay tile segments from 424 to 1000, then PVC/liner zone to 1250, bursting zone to 1420, lane main at 1480
    const lat = (x0, y0, x1, y1, col = "#6b5a46", w = 26) => `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${col}" stroke-width="${w}" stroke-linecap="butt"/><line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="#0b0f18" stroke-width="${w - 10}"/>`;
    // slope: y from 600 at x=424 to 690 at x=1420
    const yAt = (x) => 600 + (x - 424) * (90 / 996);
    // old clay segments with joints
    for (let x = 424; x < 1000; x += 72) { const x1 = Math.min(1000, x + 72); s += lat(x, yAt(x), x1, yAt(x1)); s += `<line x1="${x1}" y1="${yAt(x1) - 15}" x2="${x1}" y2="${yAt(x1) + 15}" stroke="rgba(236,230,218,.35)" stroke-width="2"/>`; }
    // offset joint at 760 and belly 900..1000
    s += `<rect x="754" y="${yAt(760) - 20}" width="12" height="40" fill="#0b0f18"/><line x1="760" y1="${yAt(760) - 14}" x2="760" y2="${yAt(760) + 14}" stroke="${C.ember}" stroke-width="3"/>${T(700, yAt(760) + 52, "Offset joint", 9, C.ember)}`;
    s += `<path d="M900 ${yAt(900)} Q 950 ${yAt(950) + 22} 1000 ${yAt(1000)}" fill="none" stroke="#6b5a46" stroke-width="26"/><path d="M900 ${yAt(900)} Q 950 ${yAt(950) + 22} 1000 ${yAt(1000)}" fill="none" stroke="#0b0f18" stroke-width="16"/><path d="M904 ${yAt(904) + 4} Q 950 ${yAt(950) + 26} 996 ${yAt(996) + 4}" fill="none" stroke="rgba(79,166,255,.5)" stroke-width="6"/>${T(900, yAt(950) + 60, "Belly · standing water", 9, C.water)}`;
    // sewage flow dashes inside the clay run
    s += `<path class="flow flow--sewer" d="M424 600 L1000 ${yAt(1000)}" fill="none" stroke="rgba(201,162,106,.55)" stroke-width="4"/>`;
    // tree + roots into the joint at 680
    s += `<rect x="668" y="110" width="24" height="132" fill="#3a2a1a"/><circle cx="680" cy="90" r="64" fill="#1f3b2a"/><circle cx="640" cy="120" r="42" fill="#244a33"/><circle cx="722" cy="118" r="44" fill="#244a33"/>`;
    s += `<path class="root" d="M680 242 C 676 330, 700 400, 690 470 C 686 520, 700 560, 712 ${yAt(712) - 12} M684 300 C 640 340, 650 420, 640 470 M690 360 C 740 400, 740 460, 730 ${yAt(730) - 14}" fill="none" stroke="#b08a5c" stroke-width="4" stroke-linecap="round"/><path class="root" d="M712 ${yAt(712) - 12} C 700 ${yAt(712)} 690 ${yAt(712) + 6} 684 ${yAt(712) + 10} M712 ${yAt(712) - 12} C 724 ${yAt(712) + 2} 740 ${yAt(712) + 6} 756 ${yAt(712) + 2}" fill="none" stroke="#d8b07a" stroke-width="2.5"/>${T(560, 520, "Roots find the joint, then the water", 9, C.sewer)}`;
    // camera crawler at 560 with cone + cable back to cleanout
    s += `<path d="M444 300 C 444 480, 480 ${yAt(470) - 2}, 560 ${yAt(560) - 2}" fill="none" stroke="#dcd3c3" stroke-width="2" stroke-dasharray="4 4"/><rect x="552" y="${yAt(560) - 9}" width="28" height="14" rx="3" fill="#e7e2d8"/><circle cx="584" cy="${yAt(560) - 2}" r="4" fill="${C.ember}" filter="url(#${id}-glow)"/><path d="M584 ${yAt(560) - 2} L660 ${yAt(660) - 24} L660 ${yAt(660) + 20} Z" fill="rgba(244,189,126,.18)"/>${T(500, yAt(560) + 44, "Camera head · records the line", 9, C.ember)}`;
    // jet nozzle at 840 spraying backward
    s += `<path d="M444 300 C 460 540, 700 ${yAt(760) + 8}, 836 ${yAt(836) + 2}" fill="none" stroke="#8fa6b8" stroke-width="1.5" opacity=".6"/><path d="M836 ${yAt(836) - 6} l18 6 l-18 6 z" fill="#c9d3dc"/><g class="spray">${[-30, -18, -6, 6, 18, 30].map((a) => `<line x1="838" y1="${yAt(838)}" x2="${838 - 40 * Math.cos((a * Math.PI) / 180)}" y2="${yAt(838) - 40 * Math.sin((a * Math.PI) / 180)}" stroke="${C.water}" stroke-width="2" stroke-linecap="round"/>`).join("")}</g>${T(790, yAt(840) - 40, "Jet nozzle · 4,000 psi, pulls itself up the line", 9, C.water)}`;
    // liner zone 1000..1250 (CIPP) and bursting 1250..1420
    s += lat(1000, yAt(1000), 1250, yAt(1250)) + `<line x1="1000" y1="${yAt(1000)}" x2="1250" y2="${yAt(1250)}" stroke="rgba(143,240,200,.55)" stroke-width="12"/><line class="cure" x1="1000" y1="${yAt(1000)}" x2="1250" y2="${yAt(1250)}" stroke="${C.air}" stroke-width="6"/>${T(1010, yAt(1010) - 40, "CIPP liner · a new pipe cured inside the old one", 9, C.air)}`;
    s += lat(1250, yAt(1250), 1420, yAt(1420), "#4b4035") + `<line x1="1252" y1="${yAt(1252)}" x2="1340" y2="${yAt(1340)}" stroke="${C.water}" stroke-width="14"/><path d="M1340 ${yAt(1340) - 16} L1384 ${yAt(1384)} L1340 ${yAt(1340) + 16} Z" fill="#dcd3c3"/>${[0, 1, 2, 3].map((i) => `<path d="M${1388 + i * 8} ${yAt(1388) - 22 + i * 3} l6 -10 M${1386 + i * 8} ${yAt(1386) + 20 - i * 2} l5 10" stroke="#6b5a46" stroke-width="3"/>`).join("")}${T(1240, yAt(1300) + 50, "Pipe bursting · head splits the old pipe, pulls HDPE behind", 9, C.water)}`;
    // open trench with new PVC at 1050..1150
    s += `<path d="M1040 240 L1060 ${yAt(1100) - 30} L1140 ${yAt(1100) - 30} L1160 240" fill="#1c150e" stroke="rgba(236,230,218,.25)"/><rect x="1072" y="${yAt(1100) - 30}" width="56" height="22" fill="url(#${id}-gravel)"/><path d="M1020 232 L1050 200 L1100 196 L1150 204 L1180 232" fill="#3b2e1f"/>${T(1050, 270, "Open-cut", 8, C.cream2)}`;
    // lane main
    s += `<rect x="1380" y="640" width="220" height="40" fill="#4b4035"/><rect x="1380" y="652" width="220" height="16" fill="#0b0f18"/><path class="flow flow--sewer" d="M1380 660 H1600" stroke="rgba(201,162,106,.6)" stroke-width="4" fill="none"/>${T(1400, 626, "Lane sewer main · the city's side", 9, C.cream2)}`;
    s += `<path d="M1420 ${yAt(1420)} L1480 668" stroke="#6b5a46" stroke-width="20"/><path d="M1420 ${yAt(1420)} L1480 668" stroke="#0b0f18" stroke-width="10"/>${T(1300, 760, "Property line", 8, C.cream3)}<line x1="1380" y1="240" x2="1380" y2="800" stroke="rgba(236,230,218,.2)" stroke-dasharray="6 6"/>`;
    // water service line (copper / Poly-B) and curb stop
    s += `<path class="flow flow--water" d="M60 470 H1120" fill="none" stroke="${C.water}" stroke-width="5"/><rect x="40" y="458" width="26" height="24" fill="#3a414d" stroke="rgba(236,230,218,.4)"/>${T(70, 456, "Main shut-off · 20 mm copper (or grey Poly-B, 1978–97)", 9, C.water)}<path d="M980 470 V250" stroke="#9aa6b2" stroke-width="4"/><rect x="968" y="236" width="24" height="12" fill="#3a414d"/>${T(996, 258, "Curb stop", 8, C.cream2)}<path d="M1120 470 L1180 520 H1600" fill="none" stroke="${C.water}" stroke-width="8"/>${T(1200, 508, "City water main", 9, C.water)}`;
    s += `<path d="M330 470 l8 -14 l8 14 l8 -14 l8 14" fill="none" stroke="#dff3ff" stroke-width="2"/>${T(290, 500, "Frozen service · heat-trace or thaw", 8, "#dff3ff")}`;
    // hotspots
    s += hot("hub", 300, 420, 0) + hot("cam", 584, yAt(560) - 2, 1) + hot("roots", 712, yAt(712) - 12, 2) + hot("jet", 838, yAt(838), 3) + hot("liner", 1125, yAt(1125), 4) + hot("burst", 1340, yAt(1340), 4) + hot("trench", 1100, 330, 5) + hot("main", 1490, 660, 5) + hot("water", 500, 470, 6) + hot("tile", 448, 602, 6);
    return s;
  }

  /* ------------------------------------------------------------- 4 · RADON */
  function radon() {
    const id = "r";
    let s = defs(id) + `<rect width="1200" height="900" fill="url(#${id}-sky)"/><rect y="560" width="1200" height="340" fill="url(#${id}-soil)"/><rect width="1200" height="900" fill="url(#${id}-grid)"/>`;
    s += `<line x1="0" y1="560" x2="1200" y2="560" stroke="#8fd3a6" stroke-width="3"/>`;
    // house section
    s += `<path d="M250 260 L600 60 L950 260" fill="none" stroke="rgba(236,230,218,.5)" stroke-width="6"/><path d="M250 260 L600 60 L950 260 L950 560 L250 560 Z" fill="#0d1526" stroke="rgba(236,230,218,.3)"/><rect x="250" y="560" width="700" height="200" fill="#0b1220" stroke="rgba(236,230,218,.35)" stroke-width="3"/>`;
    s += `<rect x="236" y="760" width="728" height="14" fill="#2a3140"/><rect x="226" y="774" width="48" height="22" fill="#3a414d"/><rect x="926" y="774" width="48" height="22" fill="#3a414d"/><rect x="250" y="774" width="700" height="26" fill="url(#${id}-gravel)"/>`;
    s += `<line x1="250" y1="360" x2="950" y2="360" stroke="rgba(236,230,218,.2)"/>${T(270, 300, "UPPER FLOOR", 10, C.cream3, 'letter-spacing="3"')}${T(270, 400, "MAIN FLOOR", 10, C.cream3, 'letter-spacing="3"')}${T(270, 600, "BASEMENT", 10, C.cream3, 'letter-spacing="3"')}${T(270, 840, "SOIL · uranium → radium → radon gas", 10, C.radon, 'letter-spacing="2"')}`;
    // soil gas particles (drift upward); concentrated under the slab and through the crack at x=420 and wall joint at 250
    for (let i = 0; i < 70; i++) { const x = 20 + ((i * 97) % 1160), y = 580 + ((i * 53) % 300); s += `<circle class="gas" style="--d:${((i * 7) % 11) * 0.35}s;--t:${5 + (i % 5)}s" cx="${x}" cy="${y}" r="${1.6 + (i % 3) * 0.6}" fill="${C.radon}"/>`; }
    s += `<path d="M420 774 L424 760 L428 774" fill="#0b1220"/><path d="M418 776 l5 -18 l5 18" fill="none" stroke="${C.radon}" stroke-width="2"/>`;
    for (let i = 0; i < 12; i++) s += `<circle class="gas gas--in" style="--d:${i * 0.5}s;--t:6s" cx="${423 + (i % 3) * 3}" cy="${756}" r="1.8" fill="${C.radon}"/>`;
    for (let i = 0; i < 10; i++) s += `<circle class="gas gas--in" style="--d:${i * 0.6}s;--t:7s" cx="${254 + (i % 2) * 3}" cy="${740}" r="1.8" fill="${C.radon}"/>`;
    s += T(300, 740, "Slab crack · wall-to-floor joint · sump", 9, C.radon);
    // sealed sump lid
    s += `<rect x="300" y="700" width="70" height="60" fill="#101826" stroke="rgba(236,230,218,.3)"/><rect x="292" y="694" width="86" height="8" rx="2" fill="#3a414d" stroke="${C.air}"/>${T(300, 686, "Sealed sump lid", 8, C.air)}`;
    // monitor on wall
    s += `<rect x="470" y="600" width="130" height="64" rx="4" fill="#1a2030" stroke="rgba(236,230,218,.4)"/><rect x="480" y="608" width="110" height="34" fill="#0a1626"/><text id="rNum" x="535" y="633" text-anchor="middle" font-size="22" font-weight="600" fill="${C.ember}">412</text><text x="535" y="656" text-anchor="middle" font-size="8" fill="${C.cream2}">Bq/m³ · long-term average</text>${T(610, 614, "Guideline 200 Bq/m³", 8, C.cream3)}${T(610, 626, "Health Canada", 8, C.cream3)}`;
    // test puck on a shelf
    s += `<rect x="660" y="680" width="90" height="4" fill="#3a3028"/><circle cx="690" cy="672" r="10" fill="#e7e2d8"/><circle cx="690" cy="672" r="4" fill="#1a2030"/>${T(708, 676, "Alpha-track · 91 days", 8, C.cream2)}`;
    // suction pit, riser, manometer, fan, stack
    s += `<ellipse cx="820" cy="792" rx="46" ry="16" fill="#0b0f18" stroke="${C.radon}" stroke-width="2"/>${T(760, 828, "Suction pit · 10–20 L of gravel", 9, C.radon)}`;
    s += `<rect x="809" y="110" width="22" height="690" fill="#e7e2d8" stroke="rgba(0,0,0,.35)"/><path class="flow flow--radon" d="M820 790 V120" stroke="${C.radon}" stroke-width="6" fill="none"/>`;
    s += `<rect x="844" y="630" width="12" height="60" fill="#1a2030" stroke="rgba(236,230,218,.35)"/><rect x="846" y="662" width="8" height="26" fill="${C.water}"/>${T(862, 660, "U-tube manometer", 8, C.cream2)}${T(862, 672, "shows the fan is pulling", 8, C.cream3)}`;
    s += `<rect x="796" y="190" width="48" height="70" rx="6" fill="url(#${id}-metal)" stroke="rgba(236,230,218,.4)"/><circle class="fan" cx="820" cy="225" r="16" fill="none" stroke="${C.cream}" stroke-width="3" stroke-dasharray="8 10"/>${T(852, 220, "Inline fan · 50–90 W", 9, C.cream)}${T(852, 234, "in the attic or outside", 8, C.cream3)}`;
    s += `<rect x="809" y="40" width="22" height="72" fill="#e7e2d8"/><path d="M800 40 h40 l-8 -10 h-24 z" fill="#3a414d"/>`;
    for (let i = 0; i < 14; i++) s += `<circle class="plume" style="--d:${i * 0.35}s" cx="${820 + ((i % 5) - 2) * 4}" cy="28" r="2" fill="${C.radon}"/>`;
    s += T(846, 40, "Exhaust above the eave, away from windows", 9, C.cream2);
    // hotspots
    s += hot("soil", 600, 830, 0) + hot("test", 535, 622, 1) + hot("pit", 820, 792, 2) + hot("fan", 820, 225, 3) + hot("stack", 820, 40, 3) + hot("after", 535, 622, 4);
    return s;
  }

  /* ------------------------------------------------------- 5 · RESTORATION */
  function restore() {
    const id = "d";
    let s = defs(id) + bg(id, 1200, 800);
    // room shell
    s += `<rect x="80" y="160" width="1040" height="480" fill="#121a2b" stroke="rgba(236,230,218,.35)" stroke-width="3"/><rect x="80" y="640" width="1040" height="40" fill="#1d2740"/><rect x="80" y="130" width="1040" height="30" fill="#0f1626"/>`;
    for (let x = 90; x < 1120; x += 90) for (let y = 644; y < 676; y += 16) s += `<rect x="${x}" y="${y}" width="86" height="14" fill="none" stroke="rgba(236,230,218,.08)"/>`;
    s += T(100, 150, "BASEMENT · LAUNDRY", 10, C.cream3, 'letter-spacing="3"') + T(760, 150, "KITCHEN ABOVE", 10, C.cream3, 'letter-spacing="3"');
    // washer + burst supply line
    s += `<rect x="150" y="520" width="110" height="120" rx="4" fill="#2a3140" stroke="rgba(236,230,218,.3)"/><circle cx="205" cy="585" r="34" fill="#0a1626" stroke="#8fa6b8" stroke-width="3"/><rect x="150" y="520" width="110" height="18" fill="#3a414d"/>`;
    s += `<path d="M160 520 V300 H300" fill="none" stroke="${C.water}" stroke-width="5"/><path d="M296 292 l10 -14 M304 300 l14 -8" stroke="#dff3ff" stroke-width="3"/>`;
    for (let i = 0; i < 16; i++) s += `<circle class="spray-dot" style="--d:${i * 0.09}s;--a:${-50 + i * 7}deg" cx="306" cy="298" r="${2 + (i % 3)}" fill="${C.water}"/>`;
    s += T(320, 280, "Burst supply line · 20 L a minute", 9, C.water) + T(320, 294, "Shut-off first, then power to the area", 8, C.cream3);
    // water pool (height driven by JS) and tide line
    s += `<rect id="dWater" x="83" y="640" width="1034" height="0" fill="rgba(79,166,255,.28)"/><line id="dTide" x1="83" y1="640" x2="1117" y2="640" stroke="rgba(79,166,255,.9)" stroke-width="2" stroke-dasharray="6 4"/>${T(600, 610, "Water line · drywall wicks 30 cm above it", 9, C.water, 'id="dTideT"')}`;
    // floor drain with sewage backup
    s += `<circle cx="600" cy="640" r="12" fill="#1a2030" stroke="rgba(236,230,218,.4)" stroke-width="2"/><path d="M600 652 V720" stroke="${C.sewer}" stroke-width="10"/>`;
    for (let i = 0; i < 10; i++) s += `<circle class="bubble" style="--d:${i * 0.4}s" cx="${600 + ((i % 5) - 2) * 10}" cy="636" r="${3 + (i % 3)}" fill="rgba(201,162,106,.8)"/>`;
    s += `<ellipse cx="600" cy="640" rx="90" ry="14" fill="rgba(120,90,50,.55)"/>${T(500, 700, "Floor drain backs up · category 3 water", 9, C.sewer)}${T(500, 714, "Everything porous it touched goes", 8, C.cream3)}`;
    // fire + smoke on the right (kitchen stairwell), soot
    s += `<rect x="900" y="440" width="140" height="200" fill="#2a3140" stroke="rgba(236,230,218,.3)"/><rect x="900" y="440" width="140" height="22" fill="#3a414d"/>`;
    s += `<g class="flame"><ellipse cx="970" cy="400" rx="46" ry="70" fill="url(#${id}-fire)"/><ellipse cx="950" cy="420" rx="22" ry="40" fill="url(#${id}-fire)"/><ellipse cx="990" cy="418" rx="20" ry="36" fill="url(#${id}-fire)"/></g>`;
    s += `<path d="M880 160 C 900 220, 1000 230, 1120 180 L1120 160 Z" fill="rgba(20,18,16,.9)"/><rect x="80" y="160" width="1040" height="60" fill="rgba(40,36,32,.55)"/>`;
    for (let i = 0; i < 10; i++) s += `<circle class="smoke" style="--d:${i * 0.5}s" cx="${960 + ((i % 4) - 2) * 18}" cy="330" r="${10 + (i % 4) * 4}" fill="rgba(60,56,52,.5)"/>`;
    s += T(760, 250, "Smoke layer · soot settles on everything above the fire", 9, C.fire) + T(760, 264, "Protein, synthetic and wet smoke clean differently", 8, C.cream3);
    s += `<rect x="1050" y="470" width="50" height="170" fill="#121a2b"/>${Array.from({ length: 30 }, (_, i) => `<circle cx="${1055 + ((i * 37) % 40)}" cy="${476 + ((i * 29) % 160)}" r="${1 + (i % 3)}" fill="rgba(30,26,24,.9)"/>`).join("")}${T(1046, 666, "Soot on the wall", 8, C.cream3)}`;
    // mould and containment
    s += `<rect x="330" y="470" width="220" height="170" fill="#121a2b"/>${Array.from({ length: 70 }, (_, i) => `<circle class="mould" style="--d:${(i % 9) * 0.3}s" cx="${340 + ((i * 53) % 200)}" cy="${560 + ((i * 31) % 76)}" r="${1.2 + (i % 4)}" fill="${i % 3 ? "#5f7a4a" : "#2d3a24"}"/>`).join("")}`;
    s += T(336, 462, "Mould after 48–72 h in wet drywall", 9, "#9bc27d");
    s += `<path d="M760 160 V640" stroke="rgba(236,230,218,.55)" stroke-width="3" stroke-dasharray="10 6"/><rect x="756" y="300" width="8" height="140" fill="${C.ember}"/>${T(772, 320, "Poly containment", 8, C.cream2)}${T(772, 332, "+ negative air", 8, C.cream2)}<rect x="660" y="580" width="80" height="60" rx="4" fill="#2a3140" stroke="rgba(236,230,218,.3)"/><circle class="fan" cx="700" cy="610" r="18" fill="none" stroke="${C.cream}" stroke-width="3" stroke-dasharray="7 9"/>${T(656, 572, "HEPA air scrubber", 8, C.cream2)}`;
    // asbestos: popcorn ceiling + 9×9 vinyl tiles
    s += `<rect x="500" y="160" width="400" height="30" fill="#2a2824"/>${Array.from({ length: 160 }, (_, i) => `<circle cx="${502 + ((i * 41) % 396)}" cy="${163 + ((i * 17) % 24)}" r="${1 + (i % 3) * 0.6}" fill="rgba(236,230,218,.35)"/>`).join("")}${T(506, 212, "Textured ceiling (pre-1990) · 9×9 floor tile · pipe wrap · vermiculite", 9, C.pink)}${T(506, 226, "Test before you tear anything out", 8, C.cream3)}`;
    s += `<rect x="340" y="645" width="200" height="30" fill="#3a3028"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${342 + i * 25}" y="647" width="23" height="26" fill="none" stroke="rgba(236,230,218,.25)"/>`).join("")}`;
    // air movers + dehumidifier (rebuild)
    s += `<g class="dry"><path d="M420 630 l30 -16 v14 l-30 16z" fill="#8fa6b8"/><rect x="450" y="612" width="36" height="28" rx="4" fill="#2a3140" stroke="rgba(236,230,218,.3)"/><rect x="520" y="590" width="40" height="50" rx="4" fill="#2a3140" stroke="rgba(236,230,218,.3)"/><rect x="528" y="598" width="24" height="10" fill="${C.air}"/>${T(420, 604, "Air movers · dehumidifier · 3 to 5 days", 8, C.air)}</g>`;
    // timeline ribbon
    s += `<g transform="translate(120,740)"><line x1="0" y1="0" x2="960" y2="0" stroke="rgba(236,230,218,.25)"/>${[["0 h", 0], ["24 h", 180], ["72 h", 360], ["2 wks", 600], ["6 wks", 900]].map(([l, x]) => `<line x1="${x}" y1="-6" x2="${x}" y2="6" stroke="${C.cream2}"/><text x="${x}" y="24" text-anchor="middle" font-size="10" fill="${C.cream2}">${l}</text>`).join("")}<circle id="dMark" cx="0" cy="0" r="7" fill="${C.ember}" filter="url(#${id}-glow)"/></g>`;
    // hotspots
    s += hot("water", 306, 298, 0) + hot("sewage", 600, 640, 1) + hot("fire", 970, 400, 2) + hot("mould", 440, 560, 3) + hot("asb", 700, 175, 4) + hot("rebuild", 520, 590, 5);
    return s;
  }

  /* ------------------------------------------------------------- 6 · CYCLE */
  function cycle() {
    const id = "c";
    let s = defs(id) + bg(id, 1200, 800);
    s += `<rect x="60" y="120" width="1080" height="520" fill="#121a2b" stroke="rgba(236,230,218,.35)" stroke-width="3"/><rect x="60" y="640" width="1080" height="30" fill="#1d2740"/>`;
    s += T(80, 150, "MECHANICAL ROOM", 10, C.cream3, 'letter-spacing="3"');
    // plenum + ducts
    s += `<rect x="470" y="150" width="200" height="110" fill="#3a414d" stroke="rgba(236,230,218,.3)"/><rect x="670" y="170" width="440" height="50" fill="#3a414d" stroke="rgba(236,230,218,.3)"/><rect x="140" y="170" width="330" height="50" fill="#3a414d" stroke="rgba(236,230,218,.3)"/>`;
    s += `<path class="flow flow--air" d="M560 160 H1100 M560 160 H160" stroke="${C.air}" stroke-width="2" fill="none" transform="translate(0,35)"/>`;
    // old furnace (ghosts at step 4), new furnace (appears at step 3)
    s += `<g class="furnace furnace--old"><rect x="480" y="260" width="180" height="380" rx="4" fill="url(#${id}-metal)" stroke="rgba(236,230,218,.35)"/><rect x="500" y="290" width="140" height="80" fill="#1a2030"/><rect x="500" y="400" width="140" height="180" fill="#1a2030"/><g class="burner">${[0, 1, 2, 3].map((i) => `<ellipse cx="${530 + i * 28}" cy="560" rx="9" ry="16" fill="url(#${id}-fire)"/>`).join("")}</g><rect x="500" y="380" width="140" height="14" fill="#2a3140"/><rect class="filter" x="470" y="470" width="12" height="100" fill="${C.ember}"/><text x="520" y="330" font-size="9" fill="${C.cream2}">80% AFUE · 2001</text><text x="520" y="344" font-size="8" fill="${C.cream3}">Serial · tag · tune-up log</text></g>`;
    s += `<g class="furnace furnace--new"><rect x="480" y="260" width="180" height="380" rx="4" fill="#1b2232" stroke="${C.ember}" stroke-width="1.5"/><rect x="500" y="290" width="140" height="80" fill="#0a1626"/><text x="520" y="330" font-size="9" fill="${C.ember}">96% AFUE · two-stage</text><text x="520" y="344" font-size="8" fill="${C.cream3}">Condensate · PVC venting</text><path d="M660 300 H720 V120" stroke="#e7e2d8" stroke-width="10" fill="none"/></g>`;
    s += `<text class="lbl lbl--crate" x="470" y="246" font-size="9" fill="${C.ember}">Day 0 · crated, levelled, gas and venting connected</text>`;
    // flue + gas line
    s += `<path d="M570 260 V120" stroke="#9aa6b2" stroke-width="12"/><path d="M60 600 H480" stroke="${C.heat}" stroke-width="4"/><rect x="420" y="588" width="16" height="24" fill="#3a414d"/>${T(300, 590, "Gas · shut-off and drip leg", 8, C.heat)}`;
    // water heater (old tank) and tankless (new)
    s += `<g class="wh wh--old"><rect x="760" y="330" width="110" height="310" rx="18" fill="url(#${id}-metal)" stroke="rgba(236,230,218,.35)"/><rect x="800" y="240" width="30" height="90" fill="#9aa6b2"/><text x="772" y="400" font-size="9" fill="${C.cream2}">189 L tank</text><text x="772" y="414" font-size="8" fill="${C.cream3}">Year 12 · rust at the base</text><path d="M790 600 q10 8 20 0 q10 -8 20 0" fill="none" stroke="#b25a3a" stroke-width="3"/></g>`;
    s += `<g class="wh wh--new"><rect x="900" y="300" width="90" height="130" rx="6" fill="#1b2232" stroke="${C.ember}" stroke-width="1.5"/><text x="910" y="340" font-size="9" fill="${C.ember}">Tankless</text><text x="910" y="354" font-size="8" fill="${C.cream3}">on demand · 199k BTU</text><path d="M945 300 V120" stroke="#e7e2d8" stroke-width="8"/></g>`;
    // panel on the left wall, thermostat, outdoor heat pump
    s += `<rect x="120" y="300" width="90" height="180" fill="#161c29" stroke="rgba(236,230,218,.35)"/>${T(126, 494, "Panel", 8, C.cream3)}`;
    s += `<g class="stat"><circle cx="330" cy="330" r="22" fill="#e7e2d8"/><circle class="stat__glow" cx="330" cy="330" r="22" fill="none" stroke="${C.ember}" stroke-width="3"/><text x="330" y="334" text-anchor="middle" font-size="10" fill="#1a2030" font-weight="600">21°</text>${T(290, 372, "Smart thermostat", 8, C.cream2)}</g>`;
    s += `<g class="hp"><rect x="1150" y="470" width="40" height="150" fill="#2a3140" stroke="${C.air}"/><circle class="fan" cx="1170" cy="545" r="14" fill="none" stroke="${C.cream}" stroke-width="2.5" stroke-dasharray="6 8"/><path d="M1140 480 H1110 V300 H670" fill="none" stroke="${C.air}" stroke-width="3" stroke-dasharray="4 4"/>${T(1040, 640, "Cold-climate", 8, C.air)}${T(1040, 652, "heat pump", 8, C.air)}</g>`;
    // demolition overlay: dashed walls, dumpster, strip-out marks
    s += `<g class="demo"><rect x="60" y="120" width="1080" height="520" fill="none" stroke="${C.fire}" stroke-width="3" stroke-dasharray="14 10"/><path d="M60 640 L1140 120 M60 120 L1140 640" stroke="rgba(255,107,79,.35)" stroke-width="2"/><rect x="60" y="690" width="260" height="60" fill="#2a3140" stroke="rgba(236,230,218,.4)"/><text x="80" y="726" font-size="12" fill="${C.cream}" font-weight="600">BIN · 20 yd³</text>${T(400, 110, "Strip-out for a legal suite: permits, asbestos test, selective demolition, disposal", 9, C.fire)}</g>`;
    // dolly out (remove)
    s += `<g class="dolly"><rect x="640" y="440" width="12" height="200" fill="#9aa6b2"/><circle cx="650" cy="650" r="12" fill="#1a2030" stroke="#9aa6b2" stroke-width="3"/><path d="M652 640 L700 640" stroke="#9aa6b2" stroke-width="6"/>${T(560, 110, "Out the door: disconnect, cap, haul, recycle", 9, C.cream2)}</g>`;
    // timeline ribbon with years
    s += `<g transform="translate(120,720)"><line x1="0" y1="0" x2="960" y2="0" stroke="rgba(236,230,218,.25)"/>${[0, 5, 10, 15, 20, 25].map((y) => `<line x1="${y * 38.4}" y1="-6" x2="${y * 38.4}" y2="6" stroke="${C.cream2}"/><text x="${y * 38.4}" y="26" text-anchor="middle" font-size="10" fill="${C.cream2}">Yr ${y}</text>`).join("")}<circle id="cMark" cx="0" cy="0" r="7" fill="${C.ember}" filter="url(#${id}-glow)"/><text id="cYear" x="0" y="-16" text-anchor="middle" font-size="12" font-weight="600" fill="${C.ember}">Year 0</text></g>`;
    // hotspots
    s += hot("install", 570, 440, 0) + hot("maintain", 476, 520, 1) + hot("upgrade", 330, 330, 2) + hot("hpump", 1170, 545, 2) + hot("replace", 945, 365, 3) + hot("remove", 815, 480, 4) + hot("demo", 190, 720, 5);
    return s;
  }

  /* ------------------------------------------------------------ registry */
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  window.HAUSE_SCENES = {
    "z-panel": { draw: panel, view: [1200, 800], cuts: [0.12, 0.3, 0.46, 0.62, 0.78, 0.9],
      keys: [[0, [0, 0, 1200, 800]], [0.14, [40, 40, 440, 300]], [0.31, [672, 130, 220, 150]], [0.47, [630, 120, 320, 440]], [0.63, [640, 420, 300, 200]], [0.79, [930, 400, 250, 170]], [0.91, [600, 90, 440, 620]]],
      hots: {
        meter: ["Meter and mast", ["calgaryelectricians.ca", "electricalinspections.ca"]],
        main: ["200 A main breaker", ["200amppanel.ca", "electricalpanelupgrade.ca", "electricalpanels.ca", "electricalpanelreplacement.ca", "houstonpanelupgrade.com", "100amppanel.ca"]],
        bus: ["Bus bars and lugs", ["breakerpanel.ca"]],
        branch: ["Branch circuits", ["housewiring.ca", "electricalwiring.ca", "basementwiring.ca", "electricalrepair.ca"]],
        range: ["40 A range circuit", ["installing.ca", "kitchenappliances.ca"]],
        ev: ["50 A EV charger", ["evchargerinstallation.ca", "texasevinstallers.com"]],
        spa: ["60 A hot tub GFCI", ["hottubwiring.ca"]],
        alu: ["Aluminum pigtail", ["aluminumwiring.ca", "aluminumwiring.com"]],
        afci: ["AFCI and GFCI protection", ["electricalinspections.ca"]],
        load: ["Service capacity", ["200amppanel.ca", "breakerpanel.ca"]]
      },
      onProgress(svg, ap, step) { svg.classList.toggle("is-loadmode", step === 6); }
    },
    "z-attic": { draw: attic, view: [1200, 800], cuts: [0.12, 0.27, 0.42, 0.57, 0.7, 0.85],
      keys: [[0, [0, 0, 1200, 800]], [0.14, [0, 440, 420, 280]], [0.29, [430, 240, 400, 266]], [0.44, [400, 440, 440, 294]], [0.59, [700, 480, 360, 240]], [0.72, [800, 150, 400, 266]], [0.87, [40, 560, 360, 240]]],
      hots: {
        roof: ["Shingles after hail", ["calgaryroofers.ca", "roofingcostcalculator.ca", "roofingcalculator.ca", "calgaryroofreplacement.com", "stormrepair.ca"]],
        ice: ["Ice dam at the eave", ["roofinsulation.ca", "calgaryatticrain.ca", "soffitrepair.ca"]],
        rain: ["Attic rain", ["calgaryatticrain.ca", "atticfrost.com", "roofventilation.ca"]],
        ins: ["Insulation and air sealing", ["roofinsulation.ca", "calgaryatticinsulation.com", "calgarysprayfoaminsulation.ca", "insulationinstallation.ca"]],
        fan: ["Bath fan venting", ["roofventilation.ca", "calgaryductcleaning.ca"]],
        verm: ["Vermiculite", ["whatisasbestos.ca", "asbestostest.ca", "asbestossampling.ca", "asbestosinspectors.ca"]],
        solar: ["Solar array", ["solarinstaller.ca", "solarpanelscalculator.com", "solarforhouses.com", "electricbill.ca"]],
        win: ["Windows and siding", ["replacewindows.ca", "windowquotes.ca", "windowinstallers.ca", "buywindows.ca", "getwindows.ca", "modernwindows.ca", "freshwindows.ca", "vinylsidinginstallers.ca", "compositedecking.ca"]]
      }
    },
    "z-sewer": { draw: sewer, view: [1600, 800], cuts: [0.12, 0.27, 0.41, 0.55, 0.69, 0.84],
      keys: [[0, [0, 0, 1600, 800]], [0.14, [400, 470, 480, 240]], [0.29, [540, 400, 360, 240]], [0.43, [720, 520, 320, 200]], [0.57, [960, 540, 480, 240]], [0.71, [980, 180, 640, 560]], [0.86, [0, 380, 600, 300]]],
      hots: {
        hub: ["One sewer line, every angle", ["sewers.ca", "sewerexperts.ca", "calgarysewers.ca", "calgarysewers.com", "calgarysewer.ca", "calgarysewer.com", "calgarysewerline.ca"]],
        cam: ["Camera inspection", ["sewerscope.ca", "sewerinspector.ca", "sewerinspectors.ca"]],
        roots: ["Root intrusion", ["sewerroots.ca", "rootremoval.ca", "drainaugering.ca", "draincleaner.ca"]],
        jet: ["Hydro jetting and cleaning", ["sewerjetting.ca", "hydrojetting.ca", "pipecleaning.ca", "sewercleaners.ca"]],
        liner: ["CIPP relining", ["sewerrelining.ca", "trenchlesssewer.ca", "trenchlesssewerrepair.ca"]],
        burst: ["Pipe bursting", ["pipebursting.ca", "trenchlesssewer.ca"]],
        trench: ["Open-cut replacement", ["sewerreplacement.ca", "sewerreplacements.ca", "calgarysewerreplacement.ca", "calgarysewerreplacement.com", "sewerquotes.com"]],
        main: ["New connection to the main", ["newsewerline.ca", "newsewerlines.com", "sewerinstall.com", "commercialsewer.ca"]],
        water: ["Water service line", ["watermainreplacement.ca", "burstpipe.ca", "burstpipes.ca", "polybutylene.ca", "watermeter.ca"]],
        tile: ["Weeping tile and sump", ["weepingtilerepair.ca", "sumpumpfailure.ca", "crackedfoundations.ca"]]
      }
    },
    "z-radon": { draw: radon, view: [1200, 900], cuts: [0.14, 0.34, 0.54, 0.74],
      keys: [[0, [0, 0, 1200, 900]], [0.16, [240, 540, 460, 300]], [0.36, [660, 620, 340, 240]], [0.56, [660, 0, 360, 300]], [0.76, [240, 540, 460, 300]]],
      hots: {
        soil: ["Where radon comes from", ["whatisradon.ca", "radonmap.ca", "radonlab.ca", "howtostopradon.com"]],
        test: ["Test for three months", ["radondetectors.ca", "radonkits.ca", "radontester.ca", "radonrisk.ca", "radonlevels.ca", "radonmonitoring.ca", "radoninspectors.ca", "radonspecialists.ca", "calgaryradoninspection.ca"]],
        pit: ["Sub-slab suction", ["radonsystem.ca", "radonmitigator.ca", "radonabatement.ca", "basementradon.ca"]],
        fan: ["The fan", ["radonfan.ca", "radonventilation.ca"]],
        stack: ["Exhaust stack", ["radonventilation.ca", "radonsystem.ca"]],
        after: ["Retest, then relax", ["calgaryradon.ca", "edmontonradon.com", "edmontonradon.ca", "airdrieradon.ca", "cochraneradon.ca", "okotoksradon.com", "albertaradon.ca", "radonhome.ca"]]
      },
      onProgress(svg, ap, step) {
        const n = svg.querySelector("#rNum"); if (!n) return;
        const v = step < 4 ? 412 : Math.round(412 - 367 * smooth(0.76, 0.98, ap));
        n.textContent = String(v); n.setAttribute("fill", v > 200 ? "#f4bd7e" : "#8fd3a6");
      }
    },
    "z-restore": { draw: restore, view: [1200, 800], cuts: [0.14, 0.28, 0.43, 0.58, 0.72, 0.86],
      keys: [[0, [0, 0, 1200, 800]], [0.14, [120, 200, 460, 306]], [0.3, [440, 520, 360, 240]], [0.45, [740, 140, 440, 300]], [0.6, [300, 420, 500, 334]], [0.74, [460, 120, 480, 320]], [0.88, [0, 0, 1200, 800]]],
      hots: {
        water: ["Water, hour zero", ["burstpipe.ca", "burstpipes.ca", "disastercleanup.ca", "basementcleanup.ca", "irvingwaterdamage.com", "texasfloodcleanup.com"]],
        sewage: ["Sewage backup", ["sewagecleanup.ca", "basementrestoration.ca", "sewers.ca"]],
        fire: ["Fire and smoke", ["firerestoration.ca", "smokedamage.ca", "smokeremoval.ca", "smokerestoration.ca", "firesprinklers.ca"]],
        mould: ["Mould and hazmat", ["calgarymoldremediation.ca", "remediationservices.ca", "hazardremoval.ca", "hazmatcleaning.ca", "hazmatcleanup.ca", "chemicalcleanup.ca", "toxiccleanup.ca", "industrialcleanup.ca", "industrialrestoration.ca"]],
        asb: ["Asbestos before demolition", ["whatisasbestos.ca", "asbestostest.ca", "asbestossampling.ca", "asbestostesting.ca", "asbestosinspectors.ca", "asbestoskit.ca", "calgaryasbestos.ca", "calgaryasbestosremoval.ca", "asbestosis.ca"]],
        rebuild: ["Dry, clean, rebuild", ["luxurycleaners.ca", "cleaninghouses.ca", "calgarymaids.ca", "calgaryhomepainting.ca", "calgaryfloors.ca", "trimwork.ca", "homeremodel.ca"]]
      },
      onProgress(svg, ap, step) {
        const w = svg.querySelector("#dWater"), t = svg.querySelector("#dTide"), tt = svg.querySelector("#dTideT"), m = svg.querySelector("#dMark");
        if (!w) return;
        const lvl = 110 * smooth(0.02, 0.26, ap) * (1 - 0.85 * smooth(0.74, 0.92, ap));
        w.setAttribute("y", String(640 - lvl)); w.setAttribute("height", String(lvl)); t.setAttribute("y1", String(640 - lvl)); t.setAttribute("y2", String(640 - lvl)); if (tt) tt.setAttribute("y", String(628 - lvl));
        if (m) m.setAttribute("cx", String(Math.min(900, 960 * smooth(0, 1, ap))));
        svg.dataset.phase = String(step);
      }
    },
    "z-cycle": { draw: cycle, view: [1200, 800], cuts: [0.16, 0.32, 0.49, 0.66, 0.83],
      keys: [[0, [0, 0, 1200, 800]], [0.18, [400, 230, 360, 440]], [0.34, [240, 240, 1000, 440]], [0.5, [700, 220, 380, 440]], [0.68, [400, 100, 500, 600]], [0.85, [0, 0, 1200, 800]]],
      hots: {
        install: ["Install, day 0", ["installing.ca", "calgaryhvacinstallation.ca", "calgaryplumbinginstallation.com", "installwaterheaters.com"]],
        maintain: ["Maintain, years 1 to 12", ["maintaining.ca", "furnaceservice.ca", "fixmyfurnace.ca", "calgaryductcleaning.ca", "calgaryhousemaintenance.ca", "calgaryhomerepair.ca", "repairservice.ca"]],
        upgrade: ["Upgrade, year 12", ["upgrading.ca", "electricbill.ca", "solarinstaller.ca"]],
        hpump: ["Cold-climate heat pump", ["upgrading.ca", "calgaryhvacinstallation.ca", "replacefurnace.ca"]],
        replace: ["Replace, year 18", ["replacing.ca", "hotwatertank.ca", "tanklessinstallation.ca", "installwaterheaters.com", "replaceyourhwt.ca", "replaceyourtank.ca", "thehwt.com", "replacefurnace.ca", "replaceyourfurnace.com", "replacemyfurnace.ca", "calgaryfurnacereplacement.com"]],
        remove: ["Remove, year 22", ["removing.ca", "junkhaulers.ca", "junkremovers.ca", "appliancerepairer.ca"]],
        demo: ["Demolish and remodel, year 25", ["demolishing.ca", "homeremodel.ca", "renovatecalgary.com", "bathroomrenovationcost.ca", "calgaryexcavators.com"]]
      },
      onProgress(svg, ap, step) {
        const yr = [0, 12 * smooth(0.16, 0.32, ap), 12 + 6 * smooth(0.32, 0.49, ap), 18 + 4 * smooth(0.49, 0.66, ap), 22 + 3 * smooth(0.66, 0.83, ap), 25][Math.min(step, 5)];
        const y = step === 0 ? 0 : step === 1 ? 1 + 11 * smooth(0.16, 0.32, ap) : step === 2 ? 12 + 6 * smooth(0.32, 0.49, ap) : step === 3 ? 18 + 4 * smooth(0.49, 0.66, ap) : step === 4 ? 22 + 3 * smooth(0.66, 0.83, ap) : 25;
        const m = svg.querySelector("#cMark"), t = svg.querySelector("#cYear"); if (!m) return; void yr;
        m.setAttribute("cx", String(y * 38.4)); t.setAttribute("x", String(y * 38.4)); t.textContent = `Year ${Math.round(y)}`;
      }
    }
  };
})();
