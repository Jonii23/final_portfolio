import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/final_portfolio/", // important for GitHub Pages
  server: {
    port: 5173,
    host: true
  }
})