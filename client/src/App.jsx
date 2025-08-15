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
import Contact from './pages/Contact.jsx'

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
    <div style={{display:'flex', alignItems:'center', marginTop:'2rem', marginBottom:'2rem', justifyContent:'center', gap:'2rem'}}>
      <img src="/assets/logo.svg" alt="{O} logo" style={{width:'202px', height:'202px', flexShrink:0}} />
      <div style={{textAlign:'left', maxWidth:'600px'}}>
        <h1 className="brand-badge" style={{fontSize:'2.5rem', marginBottom:'0.5rem'}}>{'{O}'} Oliver.dev</h1>
        <h2 style={{fontWeight:600, fontSize:'1.3rem', margin:'0 0 1rem 0'}}>About Me</h2>
        <p style={{lineHeight:1.7, margin:'0 0 1rem 0'}}>
          Hi, I'm Oliver Levine—a full-stack developer with a passion for building creative, high-performance web applications. My journey in tech started with a love for problem-solving and a curiosity for how things work under the hood.
        </p>
        <p style={{lineHeight:1.7, margin:'0 0 1rem 0'}}>
          I specialize in JavaScript, React, Node.js, and modern web technologies, but I also enjoy exploring new frameworks and tools. My projects range from CRUD apps to interactive games and data-driven dashboards.
        </p>
        <p style={{lineHeight:1.7, margin:'0 0 1rem 0'}}>
          I believe in clean code, thoughtful UX, and rapid iteration. Whether collaborating with teams or working solo, I strive to deliver solutions that are both robust and delightful to use.
        </p>
        <p style={{lineHeight:1.7, margin:'0'}}>
          Outside of coding, you'll find me learning new skills, listening to vinyl records, or experimenting with design and animation. If you'd like to connect or see more of my work, check out the Projects or Contact pages!
        </p>
      </div>
    </div>
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
