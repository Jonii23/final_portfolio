import React from "react";
import GitHubRepos from "../components/GitHubRepos";

export default function Projects() {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '7rem 1.5rem 4rem 1.5rem'
    }}>

      <div className="section-header">
        <h1 className="section-title">Projects</h1>
        <p className="section-sub">A selection of my best work and recent GitHub contributions</p>
        <div className="divider"></div>
      </div>

      {/* FEATURED PROJECTS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '5rem',
        marginTop: '3rem'
      }}>
        <div className="card">
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--navy)',
            marginBottom: '0.5rem'
          }}>
            Portfolio with Chatbot
          </h2>
          <p style={{
            color: '#64748b',
            marginBottom: '1rem',
            lineHeight: '1.6'
          }}>
            This website: built with React, Tailwind, GitHub API integration, context API chat, and markdown blogging.
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#94a3b8'
          }}>
            React • Tailwind • GitHub API • Context API
          </p>
        </div>

        <div className="card">
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--navy)',
            marginBottom: '0.5rem'
          }}>
            Peer Tutor Dashboard
          </h2>
          <p style={{
            color: '#64748b',
            marginBottom: '1rem',
            lineHeight: '1.6'
          }}>
            A dashboard for tracking students, scheduling sessions, and logging progress.
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#94a3b8'
          }}>
            React • Node.js • MySQL
          </p>
        </div>
      </div>

      {/* GITHUB SECTION */}
      <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: '1.875rem' }}>Latest GitHub Work</h2>
          <div className="divider"></div>
        </div>
      </div>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 4rem auto'
      }}>
        <GitHubRepos username="Jonii23" max={8} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <a
          href="https://github.com/Jonii23"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View All Repositories →
        </a>
      </div>
    </section>
  );
}