import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '7rem 1.5rem 4rem'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 className="section-title">Resume / CV</h1>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            My professional experience and qualifications
          </p>
        </div>

        <a
          href="/CURRICULUM VITAE OF THANDOLWETHU JONI-1.pdf"
          download="/CURRICULUM VITAE OF THANDOLWETHU JONI-1.pdf"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--navy)',
            color: 'white',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--navy-dark)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--navy)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          📥 Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <iframe
          src="/CURRICULUM VITAE OF THANDOLWETHU JONI-1.pdf"
          style={{
            width: '100%',
            height: '800px',
            border: 'none'
          }}
          title="Thandolwethu Joni Resume"
        />
      </div>

      {/* Fallback for mobile */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f8fafc',
        borderRadius: '0.75rem',
        textAlign: 'center'
      }}>
        <p style={{ color: '#64748b', marginBottom: '1rem' }}>
          Can't view the PDF? Download it directly or view it in a new tab.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="/CURRICULUM VITAE OF THANDOLWETHU JONI-1.pdf"
            download
            className="btn-primary"
          >
            Download
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              borderColor: 'var(--navy)',
              color: 'var(--navy)'
            }}
          >
             Open in New Tab
          </a>
        </div>
      </div>
    </section>
  );
}