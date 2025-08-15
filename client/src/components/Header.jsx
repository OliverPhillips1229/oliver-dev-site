import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  return (
    <header style={{background:'rgba(255,255,255,0.02)', borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'flex-end', gap:'1rem'}}>
        <nav style={{display:'flex', gap:'1rem', alignItems:'center'}}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
