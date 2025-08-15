import React, { useEffect, useState } from 'react'

/**
 * Config:
 *  - Set VITE_GITHUB_USER to your GitHub username (required).
 *  - Optional: VITE_GITHUB_TOKEN for higher rate limits.
 */
export default function ProjectsGitHub() {
  const user = import.meta.env.VITE_GITHUB_USER
  const token = import.meta.env.VITE_GITHUB_TOKEN
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!user) { setError('Missing VITE_GITHUB_USER'); setLoading(false); return }
      try {
        const headers = token ? { Authorization: `token ${token}` } : {}
        const resp = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=12`, { headers })
        if (!resp.ok) throw new Error('GitHub API error')
        const data = await resp.json()
        const filtered = data.filter(r => !r.fork && !r.private)
        setRepos(filtered)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user, token])

  return (
    <section style={{padding:'2rem 0'}}>
      <h2>Latest on GitHub</h2>
      {loading && <p>Loading…</p>}
      {error && <p style={{color:'var(--yellow_400)'}}>GitHub: {error}</p>}
      <div className="grid">
        {repos.map(r => (
          <article key={r.id} className="card">
            <h3 style={{margin:'0 0 .25rem 0'}}>{r.name}</h3>
            <small style={{color:'var(--gray_600)'}}>{r.language || '—'}</small>
            <p>{r.description || 'No description provided.'}</p>
            <a className="btn" href={r.homepage || r.html_url} target="_blank" rel="noreferrer">Open</a>
          </article>
        ))}
      </div>
    </section>
  )
}
