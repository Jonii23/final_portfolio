import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--navy)",
        color: "white",
        padding: "2rem 1rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/Jonii23"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/olwethujoni"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jonithandolwethu05@gmail.com"
            style={{ color: "white", transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Quick Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "0.875rem" }}>
            Home
          </Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "0.875rem" }}>
            About
          </Link>
          <Link to="/projects" style={{ color: "white", textDecoration: "none", fontSize: "0.875rem" }}>
            Projects
          </Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "0.875rem" }}>
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.75rem", opacity: 0.7, margin: 0 }}>
          © {currentYear} Thandolwethu Joni. Made with <Heart size={12} style={{ display: "inline", color: "#ef4444" }} /> using React
        </p>
      </div>
    </footer>
  );
}