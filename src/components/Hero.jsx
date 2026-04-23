import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "8rem",
        paddingBottom: "5rem",
        textAlign: "center",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
  src="/hero-bg.jpeg"  // ← Remove "public/" from path
  alt="Background"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  }}
/>
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            color: "dark grey",
          }}
        >
          Thandolwethu Joni
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "1rem",
            fontSize: "clamp(1rem, 4vw, 1.25rem)",
            color: "dark grey",
          }}
        >
          Junior Software Developer • Peer Tutor • Problem Solver
        </motion.p>

        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/projects"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              color: "white",
              background: "var(--navy)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--navy-dark)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--navy)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            View Portfolio
          </Link>

          <Link
            to="/contact"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              border: "2px solid white",
              color: "white",
              background: "transparent",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "var(--navy)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "white";
            }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}