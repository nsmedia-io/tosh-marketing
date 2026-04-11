import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), vike({ prerender: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
