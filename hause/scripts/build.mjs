// Bundles the 3D stage (src/stage, ES modules + three.js) into one file the page loads: public/assets/stage.js.
// Usage: node scripts/build.mjs [--watch]
import { build, context } from "esbuild";
import { statSync } from "node:fs";

const options = {
  entryPoints: ["src/stage/main.js"],
  outfile: "public/assets/stage.js",
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
  const ctx = await context({ ...options, plugins: [{ name: "report", setup(b) { b.onEnd((r) => { if (!r.errors.length) report(); }); } }] });
  await ctx.watch();
  console.log("watching src/stage …");
} else {
  await build(options);
  report();
}
