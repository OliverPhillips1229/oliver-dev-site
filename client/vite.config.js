import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  base: '/',              // for a custom domain (oliverlevine.dev)
  build: { outDir: 'docs' }  // write build output to repo root /docs
})

