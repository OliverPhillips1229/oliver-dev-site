import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <main className="container" style={{padding:'2rem 0', maxWidth: '600px', margin: '0 auto'}}>
      <h2 style={{marginBottom: '1rem'}}>Contact</h2>
      <p style={{marginBottom: '2rem'}}>Use the form below or email <a href="mailto:oliver@oliverlevine.dev">oliver@oliverlevine.dev</a>.</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="card" style={{width: '100%', maxWidth: '560px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
