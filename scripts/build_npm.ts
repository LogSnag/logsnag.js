import { build, emptyDir } from "https://deno.land/x/dnt@0.31.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  test: false,
  shims: {
    // custom: [{
    //   package: {
    //     name: "node-fetch",
    //     version: "~3.1.0",
    //   },
    //   globalNames: [{
    //     // for the `fetch` global...
    //     name: "fetch",
    //     // use the default export of node-fetch
    //     exportName: "default",
    //   }, {
    //     name: "RequestInit",
    //     typeOnly: true, // only used in type declarations
    //   }],
    // }, {
    //   // this is what `blob: true` does internally
    //   module: "buffer", // uses node's "buffer" module
    //   globalNames: ["Blob"],
    // }, {
    //   // this is what `domException: true` does internally
    //   package: {
    //     name: "domexception",
    //     version: "^4.0.0",
    //   },
    //   typesPackage: {
    //     name: "@types/domexception",
    //     version: "^4.0.0",
    //   },
    //   globalNames: [{
    //     name: "DOMException",
    //     exportName: "default",
    //   }],
    // }],
    undici: true,
    deno: true,
  },
  package: {
    // package.json properties
    name: "@capgo/logsnag",
    version: Deno.args[0],
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