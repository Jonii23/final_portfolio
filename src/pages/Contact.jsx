import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send.");
          console.error(error);
        }
      );
  };

  return (
    <section 
      id="contact"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '5rem 1.5rem',
        paddingTop: '7rem' // Account for fixed navbar
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="section-title">Contact Me</h1>
        <div className="divider"></div>
        <p style={{ marginTop: '1rem', color: 'var(--body)', fontSize: '1.1rem' }}>
          Let's work together on your next project
        </p>
      </div>

      <form 
        ref={formRef} 
        onSubmit={sendEmail} 
        style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid var(--border)'
        }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            color: 'var(--navy)'
          }}>
            Your Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="John Doe"
            required
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--navy)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            color: 'var(--navy)'
          }}>
            Your Email
          </label>
          <input
            type="email"
            name="reply_to"
            placeholder="john@example.com"
            required
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--navy)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            color: 'var(--navy)'
          }}>
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="6"
            required
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              minHeight: '150px',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--navy)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary"
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          Send Message
        </button>

        {status && (
          <p style={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            background: status.includes('success') ? '#d1fae5' : '#fee2e2',
            color: status.includes('success') ? '#065f46' : '#991b1b',
            fontWeight: '500'
          }}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);