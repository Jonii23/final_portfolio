import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: 'var(--navy)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        {/* Logo */}
        <Link to="/" style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: 'white',
          textDecoration: 'none',
          letterSpacing: '0.05em'
        }}>
          Thandolwethu Joni
        </Link>

        {/* Desktop Nav */}
        <div style={{
          display: 'none',
          gap: '2rem',
          '@media (min-width: 768px)': {
            display: 'flex'
          }
        }} className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div style={{
          display: 'none',
          gap: '0.75rem'
        }} className="desktop-cta">
          <a 
            href="/CURRICULUM VITAE OF THANDOLWETHU JONI-1.pdf" 
            download 
            className="btn-outline"
            style={{
              borderColor: 'white',
              color: 'white'
            }}
          >
            Resume
          </a>
          <Link 
            to="/contact" 
            className="btn-primary"
            style={{
              background: 'white',
              color: 'var(--navy)'
            }}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: 'var(--navy)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '1rem 1.5rem'
        }} className="mobile-menu">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                color: '#e5e7eb',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {l.label}
            </Link>
          ))}

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            paddingTop: '1rem'
          }}>
            <a 
              href="/Thandolwethu_Joni_CV.pdf" 
              download 
              className="btn-outline"
              style={{
                flex: 1,
                textAlign: 'center',
                borderColor: 'white',
                color: 'white'
              }}
            >
              Resume
            </a>
            <Link 
              to="/contact" 
              className="btn-primary"
              style={{
                flex: 1,
                textAlign: 'center',
                background: 'white',
                color: 'var(--navy)'
              }}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav,
          .desktop-cta {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}