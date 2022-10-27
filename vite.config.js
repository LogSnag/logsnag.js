import { defineConfig } from 'vite'
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: 'build',
    lib: {
    name: "LogSnag",
    entry: resolve(__dirname, "src/main.ts"),
      formats: ["umd"],
      fileName: (format) => `js/${process.env.npm_package_version}/ls.js`,
    },
  },
})