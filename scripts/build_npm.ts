import { build, emptyDir } from "https://deno.land/x/dnt@0.31.0/mod.ts";
import pkg from "../package.json" assert { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  test: false,
  shims: {
    undici: true,
    deno: true,
  },
  package: {
    // package.json properties
    name: "@capgo/logsnag",
    version: pkg.version,
    description: "LogSnag Client",
    license: "MIT",
    author: "Shayan",
    shims: {
      custom: [{
        package: {
          name: "node-fetch",
          version: "~3.1.0",
        },
        globalNames: [{
          name: "fetch",
          exportName: "default",
        }, {
          name: "RequestInit",
          typeOnly: true,
        }],
      }],
    },
    repository: {
        type: "git",
        url: "git+https://github.com/LogSnag/logsnag.js.git",
    },
    bugs: {
        url: "https://github.com/LogSnag/logsnag/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");