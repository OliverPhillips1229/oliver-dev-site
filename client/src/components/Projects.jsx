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

      <h3 style={{marginTop:'2.5rem'}}>Most Recent GitHub Repositories</h3>
      <div className="grid">
        <article className="card">
          <h3>react-jukebox-front-end-lab</h3>
          <small style={{color:'var(--gray_600)'}}>React · Front-End</small>
          <p>Front-end for a React Jukebox app.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Front-End</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/react-jukebox-front-end-lab" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>react-pets-front-end</h3>
          <small style={{color:'var(--gray_600)'}}>React · Front-End</small>
          <p>Front-end for a React Pets app.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Front-End</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/react-pets-front-end" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>express-api-pets-back-end</h3>
          <small style={{color:'var(--gray_600)'}}>Express · API · Back-End</small>
          <p>Back-end API for Pets app using Express.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Express</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>API</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Back-End</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/express-api-pets-back-end" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>express-api-jukebox-back-end-lab</h3>
          <small style={{color:'var(--gray_600)'}}>Express · API · Back-End</small>
          <p>Back-end API for Jukebox app using Express.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Express</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>API</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Back-End</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/express-api-jukebox-back-end-lab" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>react-router-dom-lab</h3>
          <small style={{color:'var(--gray_600)'}}>React · Router</small>
          <p>Lab for learning React Router DOM.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Router</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/react-router-dom-lab" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>react-router-dom</h3>
          <small style={{color:'var(--gray_600)'}}>React · Router</small>
          <p>React Router DOM examples and practice.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Router</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/react-router-dom" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>styling-in-react</h3>
          <small style={{color:'var(--gray_600)'}}>React · Styling</small>
          <p>Examples of styling techniques in React.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Styling</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/styling-in-react" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>fetching-data-in-react</h3>
          <small style={{color:'var(--gray_600)'}}>React · Data</small>
          <p>Lab for fetching data in React apps.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Data</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/fetching-data-in-react" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
        <article className="card">
          <h3>controlled-forms-in-react-lab</h3>
          <small style={{color:'var(--gray_600)'}}>React · Forms</small>
          <p>Lab for building controlled forms in React.</p>
          <div style={{display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem'}}>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>React</span>
            <span style={{fontSize:12, opacity:.8, border:'1px solid rgba(255,255,255,.12)', padding:'.15rem .4rem', borderRadius:6}}>Forms</span>
          </div>
          <a className="btn" href="https://github.com/OliverPhillips1229/controlled-forms-in-react-lab" target="_blank" rel="noopener noreferrer">View Repo</a>
        </article>
      </div>
    </section>
  )
}
