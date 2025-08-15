import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// Custom domain at root -> base '/'
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    mdx({
      jsxImportSource: 'react',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    })
  ]
})
