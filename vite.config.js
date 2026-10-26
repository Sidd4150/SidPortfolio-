import { defineConfig } from 'vite'
import { env } from 'node:process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: env.VERCEL === '1' ? '/' : '/SidPortfolio-/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
