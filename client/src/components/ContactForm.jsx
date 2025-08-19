import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpwlgdlb");
  if (state.succeeded) {
    return <p style={{color: 'var(--teal_300)', fontWeight: 600, textAlign: 'center', margin: '2rem 0'}}>Thanks for reaching out!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="card" style={{maxWidth: 560, margin: '0 auto', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
      <label htmlFor="name" style={{fontWeight: 600, marginBottom: 8, display: 'block'}}>Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        style={{width: '100%', padding: '0.7rem', marginBottom: '1rem', borderRadius: 6, border: '1px solid #234', background: 'var(--brand-bg)', color: 'var(--brand-fg)', fontFamily: 'var(--font-mono)'}}
      />
      <label htmlFor="email" style={{fontWeight: 600, marginBottom: 8, display: 'block'}}>Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        style={{width: '100%', padding: '0.7rem', marginBottom: '1rem', borderRadius: 6, border: '1px solid #234', background: 'var(--brand-bg)', color: 'var(--brand-fg)', fontFamily: 'var(--font-mono)'}}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" style={{fontWeight: 600, marginBottom: 8, display: 'block'}}>Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        style={{width: '100%', padding: '0.7rem', marginBottom: '1rem', borderRadius: 6, border: '1px solid #234', background: 'var(--brand-bg)', color: 'var(--brand-fg)', fontFamily: 'var(--font-mono)'}}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="btn" style={{width: '100%', padding: '0.8rem', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.5rem'}}>
        {state.submitting ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}

export default ContactForm;
