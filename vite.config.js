import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tulza.github.io/vite-react-tail-deploy",
  plugins: [react()],
});
