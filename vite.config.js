import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/workspace_cszyrowska/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'docs',  // Outputs the build to the 'docs' directory for GitHub Pages
  }
})
