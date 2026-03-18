import React from "react";
import { motion } from "framer-motion";
import CertificationManager from "../components/Certifications/CertificationManager";

export default function About() {
  return (
    <section style={{
      maxWidth: '1000px',
      margin: '1150 auto',
      padding: '7rem 1.5rem 4rem 1.5rem'
    }}>

      <div className="section-header">
        <h1 className="section-title">About Me</h1>
        <p className="section-sub">Developer • Peer Tutor • Problem Solver</p>
        <div className="divider"></div>
      </div>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '1.125rem',
          lineHeight: '1.75',
          color: '#475569',
          marginBottom: '4rem'
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          I am <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Thandolwethu Joni</span>, a
          Junior Software Developer and Peer Tutor at WeThinkCode_.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          I enjoy building fast, clean, and interactive web applications.
        </p>

        <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--navy)' }}>
          I focus on:
        </p>
        <ul style={{
          listStyle: 'disc',
          marginLeft: '1.5rem',
          marginTop: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem'
        }}>
          <li>React & Front-End UI</li>
          <li>Node.js & REST API development</li>
          <li>Python MangoDB, MySQL & PostgreSQL databases</li>
        </ul>
      </motion.div>

      {/* CERTIFICATIONS */}
      <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: '1.875rem' }}>Certifications</h2>
          <div className="divider"></div>
        </div>
      </div>

      <CertificationManager />
    </section>
  );
}