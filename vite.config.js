import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import path from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@Components": path.resolve(import.meta.dirname, "./src/Components"),
      "@Services": path.resolve(import.meta.dirname, "./src/Services"),
      "@Styles": path.resolve(import.meta.dirname, "./src/Styles"),
      "@src": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
