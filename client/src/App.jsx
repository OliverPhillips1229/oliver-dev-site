import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './styles/base.css'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import ProjectsGitHub from './components/ProjectsGitHub.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'

import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div style={{display:'flex', alignItems:'center', marginTop:'2rem', marginBottom:'2rem', justifyContent:'center', gap:'2rem'}}>
        <img src="/assets/logo.svg" alt="{O} logo" style={{width:'202px', height:'202px', flexShrink:0}} />
        <div style={{textAlign:'left'}}>
          <h1 className="brand-badge" style={{fontSize:'2.5rem', marginBottom:'0.5rem'}}>{'{O}'} Oliver.dev</h1>
          <p style={{maxWidth:'56ch', lineHeight:1.6, margin:'0'}}>
            Full-Stack. Full-Creative. Full-Speed. I design and build web apps with clean code,
            fast performance, and thoughtful UX.
          </p>
          <div style={{marginTop:'1rem'}}>
            <a className="btn" href="#projects">See Projects</a>
            <Link className="btn secondary" style={{marginLeft:'.75rem'}} to="/blog">Blog</Link>
          </div>
        </div>
      </div>
      <main className="container">
        {/* Removed duplicate intro paragraph and buttons */}
        <Projects />
        <ProjectsGitHub />
        <section id="contact" style={{padding:'2rem 0'}}>
          <h2>Contact</h2>
          <p>Use the form below or email <a href="mailto:oliver@oliverlevine.dev">oliver@oliverlevine.dev</a>.</p>
          <div style={{marginTop:'1rem'}}>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
