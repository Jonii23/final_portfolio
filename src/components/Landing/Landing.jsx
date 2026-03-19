import React, { useEffect } from "react";
import "./landing.css";
import { startLanding3D } from "./three-landing";

export default function Landing({ onEnter }) {
  useEffect(() => {
    const cleanup = startLanding3D();
    return () => { if (cleanup) cleanup(); };
  }, []);

  return (
    <div className="landing-wrapper">
      <canvas id="canvas3d"></canvas>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* 🔥 ADMIN BUTTON (NEW) */}
      <button
        className="admin-float-btn"
        onClick={() => (window.location.href = "/admin")}
      >
        Admin
      </button>

      {/* Main Content */}
      <div className="container">
        <div className="profile-section">
          <div className="avatar">TJ</div>

          <h1 className="profile-title">Thandolwethu Joni</h1>

          <p className="subtitle">
            Junior Software Developer • Peer Tutor • Problem Solver
          </p>

          <p className="description">
            Passionate about building meaningful digital experiences that solve
            real-world challenges. I combine strong technical foundations with a
            collaborative mindset, always aiming to grow, innovate, and empower
            others through technology and knowledge sharing.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={onEnter}>
              View Portfolio
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => {
                onEnter();
                window.location.href = "/contact";
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
