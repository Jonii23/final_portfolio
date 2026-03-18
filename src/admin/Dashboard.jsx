import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { startLanding3D } from "../components/Landing/three-landing";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const LS_POSTS = "blog-posts";
const LS_QUALS = "admin_qualifications_v1";

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [quals, setQuals] = useState([]);
  const [qualForm, setQualForm] = useState({ id: "", title: "", issuer: "", date: "", notes: "" });

  // 3D background
  useEffect(() => {
    startLanding3D();
  }, []);

  // LOAD
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem(LS_POSTS) || "[]"));
    setQuals(JSON.parse(localStorage.getItem(LS_QUALS) || "[]"));
  }, []);

  // SAVE Qualifications
  useEffect(() => {
    localStorage.setItem(LS_QUALS, JSON.stringify(quals));
  }, [quals]);

  // DELETE POST
  const deletePost = (slug) => {
    if (!window.confirm("Delete this post?")) return;
    const updated = posts.filter((p) => p.slug !== slug);
    localStorage.setItem(LS_POSTS, JSON.stringify(updated));
    setPosts(updated);
  };

  // QUALIFICATIONS CRUD
  const saveQual = (e) => {
    e.preventDefault();
    if (!qualForm.title.trim() || !qualForm.issuer.trim()) return;

    if (qualForm.id) {
      setQuals((prev) => prev.map((q) => (q.id === qualForm.id ? qualForm : q)));
    } else {
      setQuals((prev) => [
        { ...qualForm, id: uid(), createdAt: new Date().toISOString() },
        ...prev,
      ]);
    }

    setQualForm({ id: "", title: "", issuer: "", date: "", notes: "" });
  };

  const editQual = (q) => setQualForm(q);
  const deleteQual = (id) => {
    if (!window.confirm("Delete qualification?")) return;
    setQuals((prev) => prev.filter((q) => q.id !== id));
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

      <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: '1100px', padding: '2rem 1rem' }}>
        {/* HEADER */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h1 className="admin-title" style={{ color: 'white', margin: 0, fontSize: '2.5rem' }}>
            Admin Dashboard
          </h1>
          <button onClick={logout} className="login-btn" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
            Logout
          </button>
        </div>

        {/* POSTS SECTION */}
        <div className="dashboard-card" style={{
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(14px)',
          color: 'white',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h2 className="dashboard-title" style={{ color: 'white', margin: 0 }}>Blog Posts</h2>
            <button 
              onClick={() => navigate('/admin/create')}
              className="login-btn" 
              style={{ 
                width: 'auto', 
                padding: '0.75rem 1.5rem'
              }}
            >
              ➕ Create New Post
            </button>
          </div>

          {/* POSTS LIST */}
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#cbd5e1' }}>
              <p style={{ fontSize: '1.125rem' }}>No posts yet. Create your first blog post! ✍️</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {posts.map((p) => (
                <div key={p.slug} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                      Slug: {p.slug} • {new Date(p.date).toLocaleDateString()}
                    </p>
                    <p style={{ marginTop: '0.5rem', color: '#e2e8f0' }}>
                      {p.excerpt || p.content?.slice(0, 150)}...
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      onClick={() => navigate(`/admin/edit/${p.slug}`)}
                      className="btn-edit"
                    >
                      ✏️ Edit
                    </button>
                    <button 
                      onClick={() => deletePost(p.slug)} 
                      className="btn-delete"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* QUALIFICATIONS SECTION */}
        <div className="dashboard-card" style={{
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(14px)',
          color: 'white'
        }}>
          <h2 className="dashboard-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Qualifications
          </h2>
          <div className="divider-admin"></div>

          {/* FORM */}
          <form onSubmit={saveQual} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <input
              placeholder="Title (e.g., AWS Certified Developer)"
              className="admin-login-input"
              value={qualForm.title}
              onChange={(e) => setQualForm((s) => ({ ...s, title: e.target.value }))}
            />

            <input
              placeholder="Issuer (e.g., Amazon Web Services)"
              className="admin-login-input"
              value={qualForm.issuer}
              onChange={(e) => setQualForm((s) => ({ ...s, issuer: e.target.value }))}
            />

            <input
              placeholder="Date (e.g., January 2025)"
              className="admin-login-input"
              value={qualForm.date}
              onChange={(e) => setQualForm((s) => ({ ...s, date: e.target.value }))}
            />

            <textarea
              placeholder="Notes (optional)"
              className="admin-login-input"
              rows="4"
              value={qualForm.notes}
              onChange={(e) => setQualForm((s) => ({ ...s, notes: e.target.value }))}
              style={{ minHeight: '100px', resize: 'vertical', fontFamily: 'inherit' }}
            ></textarea>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="login-btn" type="submit" style={{ flex: 1 }}>
                {qualForm.id ? "💾 Update" : "➕ Add Qualification"}
              </button>
              <button
                type="button"
                className="help-btn"
                onClick={() => setQualForm({ id: "", title: "", issuer: "", date: "", notes: "" })}
                style={{ flex: 1 }}
              >
                Clear
              </button>
            </div>
          </form>

          {/* QUAL LIST */}
          <div style={{ display: 'grid', gap: '1rem' }}>
            {quals.map((q) => (
              <div key={q.id} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>{q.title}</p>
                  <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                    {q.issuer} • {q.date}
                  </p>
                  {q.notes && (
                    <p style={{ marginTop: '0.5rem', color: '#e2e8f0' }}>
                      {q.notes.slice(0, 150)}
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button className="btn-edit" onClick={() => editQual(q)}>✏️ Edit</button>
                  <button className="btn-delete" onClick={() => deleteQual(q.id)}>🗑️ Delete</button>
                </div>
              </div>
            ))}
            {quals.length === 0 && (
              <p style={{ textAlign: 'center', color: '#cbd5e1', padding: '2rem' }}>
                No qualifications yet. Add your first one! 🎓
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}