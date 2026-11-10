# HAUSE.ca

The front door of the HAUSE home-service network: one scrolling story over a real-time 3D house that leads to one request
form. Static site, deployed as Cloudflare Workers static assets (`wrangler.jsonc`, worker name `hause-ca`).

## Layout

```
public/                     everything that is served
  index.html                the page (head, story chapters, lower sections, request form)
  404.html, robots.txt, sitemap.xml
  assets/
    hause.css / hause.js    base styles, the scroll director that drives the 3D stage, page interactions, lead form
    zoom.css / zoom.js      Act II: the six close-up chapters, their pins, the panel load check, the job finder
    zoom-scenes.js          Act II SVG drawings and step timing (the fallback when WebGL is unavailable)
    platform.css / .js      search palette (Cmd/Ctrl K or /), "Watch the film" autoplay, J / K chapter keys
    netmap.js               the network constellation and the live match card beside the request form
    stage.js                the 3D stage, BUILT from src/stage (do not edit by hand)
  data/jobs.json            637 named jobs (search, job finder)
  media/                    LQIP and poster images
src/stage/                  3D stage source (ES modules + three.js 0.186.1)
  main.js                   boot, state (S / target / KEYS), camera, frame loop, quality governor, public API
  post.js                   post chain: MSAA → ambient occlusion → depth of field → bloom → output → grade
  house.js, interior.js, world.js, sky.js, systems.js, underground.js, thermal.js, materials.js, textures.js, optimize.js
  sets/                     Act II close-up sets
    index.js                set registry and contract, shared work light
    kit.js                  shared parts kit (materials, primitives, labels, flows, particles, bake)
    panel.js, attic.js, sewer.js, radon.js, restore.js, cycle.js
scripts/
  build.mjs                 bundles src/stage → public/assets/stage.js
  render-network.mjs        regenerates the network directory block in index.html from data/network.json
data/network.json           the 272 sites by category, live or in build
```

## Commands

```
npm install
npm run build                 # stage bundle → public/assets/stage.js
npm run watch                 # rebuild on change
node scripts/build.mjs --only panel --out /tmp/stage.js   # one close-up set only, to a scratch file
npm run network               # refresh the directory block after editing data/network.json
npx wrangler deploy           # publish (needs Cloudflare credentials)
```

Preview locally with any static server from `public/`, e.g. `python3 -m http.server 8080 -d public`.

## How the page and the stage talk

`window.HAUSE_STAGE` (from stage.js) exposes `set(state)`, `settle()`, `pause()/resume()`, `projectAnchors()`,
`zoomSets`, `zoomShots(name)`, `zoomInput(name, data)`, `prebuildZoom()` and callbacks `onFrame`, `onPick`, `onThermal`.
`hause.js` measures which chapter is in the middle of the screen and its progress (0–1), then sets the stage state for
it. Act II chapters use the close-up set of the same name: each step has a camera shot defined in the set file, and the
hotspot pins follow the set's anchors. Without WebGL, or with `window.HAUSE_FLAT = true`, Act II falls back to the SVG
drawings.

Debug switches (set before the page scripts run): `window.HAUSE_QUALITY = 0 | 1 | 2` fixes the quality tier,
`window.HAUSE_DEBUG = true` exposes `HAUSE_STAGE.debug`, `window.HAUSE_PREVIEW = true` disables lead submission.

## Lead form

Posts to the HAUSE leads worker (`LEAD_ENDPOINT` at the top of `assets/hause.js`) with brand `HAUSE`. Honeypot field
`website`; consent is required.
