import React, { useState } from 'react'

export default function ContactForm({ endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT }) {
  const [status, setStatus] = useState('idle')
  const onSubmit = async (e) => {
    e.preventDefault()
    if (!endpoint) { setStatus('missing'); return }
    setStatus('submitting')
    const form = new FormData(e.currentTarget)
    try {
      const resp = await fetch(endpoint, { method:'POST', headers:{'Accept':'application/json'}, body: form })
      if (resp.ok) { setStatus('success'); e.currentTarget.reset() } else { setStatus('error') }
    } catch { setStatus('error') }
  }
  return (
    <form onSubmit={onSubmit} className="card" style={{maxWidth:560}}>
      <label>Name<br/><input name="name" required placeholder="Your name" style={{width:'100%'}}/></label><br/>
      <label>Email<br/><input type="email" name="email" required placeholder="you@example.com" style={{width:'100%'}}/></label><br/>
      <label>Message<br/><textarea name="message" required rows={6} placeholder="How can I help?" style={{width:'100%'}}/></label><br/>
      <button className="btn" disabled={status==='submitting'}>{status==='submitting' ? 'Sending…' : 'Send'}</button>
      {status==='success' && <p style={{marginTop:'.5rem', color:'var(--teal_300)'}}>Thanks! I’ll get back to you shortly.</p>}
      {status==='error' && <p style={{marginTop:'.5rem', color:'var(--yellow_400)'}}>Something went wrong. Try again?</p>}
      {status==='missing' && <p style={{marginTop:'.5rem', color:'var(--yellow_400)'}}><strong>Missing endpoint.</strong> Set VITE_FORMSPREE_ENDPOINT.</p>}
    </form>
  )
}
