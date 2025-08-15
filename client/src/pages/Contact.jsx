import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <main className="container" style={{padding:'2rem 0'}}>
      <h2>Contact</h2>
      <p>Use the form below or email <a href="mailto:oliver@oliverlevine.dev">oliver@oliverlevine.dev</a>.</p>
      <div style={{marginTop:'1rem'}}>
        <ContactForm />
      </div>
    </main>
  );
}
