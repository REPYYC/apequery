// Bundles the 3D stage (src/stage, ES modules + three.js) into one file the page loads: public/assets/stage.js.
// Usage: node scripts/build.mjs [--watch] [--out <file>] [--only <set>] [--sets a,b,...]
//   --out <file>   write the bundle somewhere else (a scratch copy while developing)
//   --only <set>   development: bundle one close-up set (plus the panel) and leave the others out, so a set that is
//                  being worked on cannot break, or be broken by, the others
//   --sets a,b     bundle only these close-up sets (the panel is always in): ship the reviewed ones while others are in work
import { build, context } from "esbuild";
import { statSync } from "node:fs";

const arg = (name) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : null; };
const only = arg("--only");
const include = arg("--sets") ? arg("--sets").split(",") : only ? [only] : null;
const SETS = ["attic", "sewer", "radon", "restore", "cycle"];
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const onlySet = {
  name: "only-set",
  setup(b) {
    b.onResolve({ filter: /^\.\/(attic|sewer|radon|restore|cycle)\.js$/ }, (a) => {
      const set = a.path.slice(2, -3);
      return include.includes(set) ? null : { path: set, namespace: "left-out" };
    });
    b.onLoad({ filter: /.*/, namespace: "left-out" }, (a) => ({ contents: `export const create${cap(a.path)}Set = null;`, loader: "js" }));
  }
};
if (only && !SETS.includes(only) && only !== "panel") throw new Error(`--only takes one of: panel, ${SETS.join(", ")}`);

const options = {
  entryPoints: ["src/stage/main.js"],
  outfile: arg("--out") || "public/assets/stage.js",
  plugins: include ? [onlySet] : [],
  bundle: true,
  format: "iife",
  minify: true,
  target: ["es2020"],
  legalComments: "none",
  banner: { js: "/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */" },
  logLevel: "warning"
};
const report = () => console.log(`${options.outfile} ${Math.round(statSync(options.outfile).size / 1024)} KB`);

if (process.argv.includes("--watch")) {
  const ctx = await context({ ...options, plugins: [...options.plugins, { name: "report", setup(b) { b.onEnd((r) => { if (!r.errors.length) report(); }); } }] });
  await ctx.watch();
  console.log("watching src/stage …");
} else {
  await build(options);
  report();
}
