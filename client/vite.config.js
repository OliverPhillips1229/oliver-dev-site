import { defineConfig } from 'vite'
export default defineConfig({
  base: '/',                  // custom domain root
  build: { outDir: '../docs' } // place build at repo root/docs
})
