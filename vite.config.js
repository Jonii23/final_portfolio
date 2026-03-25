import { defineConfig } from "vite"; // ⚠ must import defineConfig
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "development" ? "/" : "/final_portfolio/",
  server: {
    port: 5173,
    host: true,
  },
}));