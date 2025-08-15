import React from 'react'
import data from '../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" style={{padding:'2rem 0'}}>
      <h2>Projects</h2>
      <div className="grid">
        {data.map((p) => (
          <article key={p.title} className="card">
            <h3 style={{margin:'0 0 .25rem 0'}}>{p.title}</h3>
            <small style={{color:'var(--gray_600)'}}>{p.tech.join(' · ')}</small>
            <p>{p.blurb}</p>
            <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
              {p.tags?.map(t => <span key={t} style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>{t}</span>)}
            </div>
            <a className="btn" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  )
}
