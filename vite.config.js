import { build, defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  base: "./AnastasiiaHombalevska-2D-portfolio-game",
  build: {
    minify: "terser"
  }
})