import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const postsAll = Object.entries(import.meta.glob('../posts/*.mdx', { eager: true }))
  .map(([path, mod]) => ({ slug: path.split('/').pop().replace('.mdx',''), ...(mod.meta || {}) }))
  .sort((a,b) => (new Date(b.date) - new Date(a.date)))

export default function Blog() {
  const [active, setActive] = useState('All')
  const tags = useMemo(() => {
    const set = new Set()
    postsAll.forEach(p => (p.tags || []).forEach(t => set.add(t)))
    return ['All', ...Array.from(set).sort((a,b)=>a.localeCompare(b))]
  }, [])
  const posts = useMemo(() => active === 'All' ? postsAll : postsAll.filter(p => (p.tags || []).includes(active)), [active])
  return (
    <main className="container" style={{padding:'2rem 0'}}>
      <h1>Blog</h1>
      <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', margin:'1rem 0 1.5rem 0'}}>
        {tags.map(tag => (
          <button key={tag} onClick={() => setActive(tag)} className="btn" style={{background: active===tag ? 'var(--brand-accent)' : 'rgba(255,255,255,.08)'}}>
            {tag}
          </button>
        ))}
      </div>
      <div className="grid">
        {posts.map(p => (
          <article key={p.slug} className="card">
            <h3 style={{margin:'0 0 .25rem 0'}}><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <small style={{color:'var(--gray_600)'}}>{p.date} · {p.tags?.join(' • ')}</small>
            <p>{p.excerpt}</p>
            <Link className="btn" to={`/blog/${p.slug}`}>Read</Link>
          </article>
        ))}
      </div>
    </main>
  )
}
