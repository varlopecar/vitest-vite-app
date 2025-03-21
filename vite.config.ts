import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/vitest-vite-app/",
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: "dist",
  },
});
