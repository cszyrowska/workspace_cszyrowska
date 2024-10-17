import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/workspace_cszyrowska/', // Replace 'your-repository-name' with your actual GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist'  // Ensures the build outputs to the 'dist' directory
  }
})
