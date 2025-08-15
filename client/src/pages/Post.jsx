import React from 'react'
import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'

const modules = import.meta.glob('../posts/*.mdx', { eager: true })
const components = {
  h1: (props) => <h1 style={{color:'var(--teal_300)'}} {...props} />,
  pre: (props) => <pre style={{background:'rgba(255,255,255,.05)', padding:'1rem', borderRadius:8, overflow:'auto'}} {...props} />,
  code: (props) => <code style={{fontFamily:'var(--font-mono)'}} {...props} />,
  a: (props) => <a {...props} target="_blank" rel="noreferrer" />,
}

export default function Post() {
  const { slug } = useParams()
  const matchKey = Object.keys(modules).find(k => k.endsWith(`${slug}.mdx`))
  const Mod = matchKey ? modules[matchKey].default : null
  const meta = matchKey ? (modules[matchKey].meta || {}) : {}
  if (!Mod) return <main className="container"><p>Post not found.</p></main>
  return (
    <main className="container" style={{padding:'2rem 0'}}>
      <article className="prose">
        <h1 style={{marginBottom:'.25rem'}}>{meta.title}</h1>
        <small style={{color:'var(--gray_600)'}}>{meta.date} · {meta.tags?.join(' • ')}</small>
        <div style={{height:'1rem'}} />
        <MDXProvider components={components}>
          <Mod />
        </MDXProvider>
      </article>
    </main>
  )
}
