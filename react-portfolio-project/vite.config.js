import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is required for rendering on github pages 
export default defineConfig({
  base: "/personal-portfolio-project/", 
  plugins: [react()],
});
