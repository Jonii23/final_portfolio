import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { startLanding3D } from "../components/Landing/three-landing";
import "./admin.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Start 3D background
  useEffect(() => {
    startLanding3D();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(password);

    if (result.ok) {
      navigate("/admin/dashboard");
    } else {
      setError(result.error || "Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="admin-login-wrapper">
      {/* 3D Canvas */}
      <canvas id="canvas3d" style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1 
      }}></canvas>

      {/* Login Card */}
      <div className="admin-login-card">
        <h1 className="admin-title" style={{ color: 'white', marginBottom: '0.5rem' }}>
          Admin Login
        </h1>
        <p className="admin-sub" style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
          Enter your password to access the dashboard
        </p>

        {error && (
          <div style={{
            padding: '0.75rem',
            background: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.5)',
            borderRadius: '0.5rem',
            color: '#fca5a5',
            marginBottom: '1rem',
            fontSize: '0.875rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <input
              type="password"
              placeholder="Enter password"
              className="admin-login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            />
          </div>

          <button type="submit" className="login-btn">
             Login to Dashboard
          </button>

          <button 
            type="button" 
            className="help-btn"
            onClick={() => alert("Contact the administrator for access")}
          >
            Need Help?
          </button>
        </form>
      </div>
    </div>
  );
}