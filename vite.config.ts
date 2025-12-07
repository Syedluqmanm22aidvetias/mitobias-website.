import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'mitobias-website' with your actual GitHub repository name
  base: '/mitobias-website/', 
})