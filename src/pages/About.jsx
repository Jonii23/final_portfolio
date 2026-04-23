import React from "react";
import { motion } from "framer-motion";
import CertificationManager from "../components/Certifications/CertificationManager";

export default function About() {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "7rem 1rem 4rem",
        textAlign: "left",
      }}
    >
      <div className="section-header" style={{ padding: "0 0.5rem" }}>
        <h1 className="section-title" style={{ textAlign: "center",fontSize: "clamp(1.8rem, 5vw, 2.4rem)" }}>
          About Me
        </h1>
        <p className="section-sub" style={{ textAlign: "center",fontSize: "clamp(0.9rem, 4vw, 1rem)" }}>
          Developer • Peer Tutor • Problem Solver
        </p>
        <div
          style={{
            width: "55%",
            height: "4px",
            background: "linear-gradient(90deg,#0f172a,#3b82f6)",
            borderRadius: "999px",
            margin: "1rem 0 2rem 0",
            marginLeft: "12rem"
          }}
        />
      </div>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "clamp(1rem, 4vw, 1.125rem)",
          lineHeight: "1.75",
          color: "#475569",
          marginBottom: "4rem",
          padding: "0 0.5rem",
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
            color: "var(--navy)",
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
            gap: "0.25rem",
          }}
        >
          <li>React & Front-End UI</li>
          <li>Node.js & REST API development</li>
          <li>Python, MongoDB, MySQL & PostgreSQL databases</li>
        </ul>
      </motion.div>

      {/* CERTIFICATIONS */}
      <div style={{ marginTop: "5rem", marginBottom: "2.5rem", padding: "0 0.5rem" }}>
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 5vw, 1.875rem)" }}>
            Certifications
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg,#0f172a,#3b82f6)",
              borderRadius: "1099px",
              marginTop: "1rem",
            }}
          />
        </div>
      </div>
      <div style={{ padding: "0 0.5rem" }}>
        <CertificationManager />
      </div>
    </section>
  );
}