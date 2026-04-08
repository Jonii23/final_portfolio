import React from "react";
import { motion } from "framer-motion";
import CertificationManager from "../components/Certifications/CertificationManager";

export default function About() {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",   // ✅ center horizontally
        padding: "7rem 1.5rem 4rem",
        textAlign: "left"
      }}
    >
      <div className="section-header">
        <h1 className="section-title">About Me</h1>
        <p className="section-sub">Developer • Peer Tutor • Problem Solver</p>

        {/* divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg,#0f172a,#3b82f6)",
            borderRadius: "999px",
            margin: "1rem 0 2rem 0"
          }}
        />
      </div>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.75",
          color: "#475569",
          marginBottom: "4rem"
        }}
      >
        <p style={{ marginBottom: "1rem" }}>
          I am{" "}
          <span style={{ fontWeight: "600", color: "var(--navy)" }}>
            Thandolwethu Joni
          </span>
          , a Junior Software Developer and Peer Tutor at WeThinkCode_.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          I enjoy building fast, clean, and interactive web applications.
        </p>

        <p
          style={{
            marginBottom: "0.5rem",
            fontWeight: "600",
            color: "var(--navy)"
          }}
        >
          I focus on:
        </p>

        <ul
          style={{
            listStyle: "disc",
            marginLeft: "1.5rem",
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem"
          }}
        >
          <li>React & Front-End UI</li>
          <li>Node.js & REST API development</li>
          <li>Python MongoDB, MySQL & PostgreSQL databases</li>
        </ul>
      </motion.div>

      {/* CERTIFICATIONS */}
      <div style={{ marginTop: "5rem", marginBottom: "2.5rem" }}>
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: "1.875rem" }}>
            Certifications
          </h2>

          {/* divider */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg,#0f172a,#3b82f6)",
              borderRadius: "1099px",
              marginTop: "1rem"
            }}
          />
        </div>
      </div>

      <CertificationManager />
    </section>
  );
}