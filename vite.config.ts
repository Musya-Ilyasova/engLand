import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // For GitHub Pages project site: https://musya-ilyasova.github.io/engLand/
  base: command === 'build' ? '/engLand/' : '/',
  plugins: [react(), tailwindcss()],
}))
