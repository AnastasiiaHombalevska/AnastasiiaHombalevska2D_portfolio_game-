import { build, defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  base: "./",
  build: {
    minify: "terser"
  }
})