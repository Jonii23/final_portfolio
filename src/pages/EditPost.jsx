import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../admin/admin.css";

export default function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: "",
    excerpt: "",
    content: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load post data
    const posts = JSON.parse(localStorage.getItem("blog-posts") || "[]");
    const post = posts.find(p => p.slug === slug);
    
    if (post) {
      setForm({
        title: post.title || "",
        slug: post.slug || "",
        date: post.date || "",
        excerpt: post.excerpt || "",
        content: post.content || ""
      });
    } else {
      alert("Post not found!");
      navigate("/admin/dashboard");
    }
    setLoading(false);
  }, [slug, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      alert("Please fill in title, slug, and content");
      return;
    }

    // Get existing posts
    const posts = JSON.parse(localStorage.getItem("blog-posts") || "[]");
    
    // Check if new slug conflicts with another post
    if (form.slug !== slug && posts.some(p => p.slug === form.slug)) {
      alert("A post with this slug already exists!");
      return;
    }

    // Update post
    const updatedPosts = posts.map(p => 
      p.slug === slug ? { ...p, ...form, updatedAt: new Date().toISOString() } : p
    );

    localStorage.setItem("blog-posts", JSON.stringify(updatedPosts));

    alert("Post updated successfully!");
    navigate("/admin/dashboard");
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>
            ✏️ Edit Post
          </h1>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="help-btn"
            style={{ width: 'auto', padding: '0.75rem 1.5rem' }}
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="dashboard-card" style={{
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(14px)',
          color: 'white'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Title */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Post Title *
              </label>
              <input
                type="text"
                placeholder="Enter post title"
                className="admin-login-input"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                URL Slug *
              </label>
              <input
                type="text"
                placeholder="post-url-slug"
                className="admin-login-input"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                required
              />
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1', marginTop: '0.5rem' }}>
                URL: /blog/{form.slug || 'post-slug'}
              </p>
            </div>

            {/* Date */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Publish Date
              </label>
              <input
                type="date"
                className="admin-login-input"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>

            {/* Excerpt */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Excerpt (Short Description)
              </label>
              <textarea
                placeholder="Brief summary of the post..."
                className="admin-login-input"
                rows="3"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                style={{ minHeight: '80px', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>

            {/* Content */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Post Content * (Markdown supported)
              </label>
              <textarea
                placeholder="Write your post content here... Markdown is supported!"
                className="admin-login-input"
                rows="15"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                style={{ minHeight: '400px', resize: 'vertical', fontFamily: 'monospace' }}
                required
              />
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" className="login-btn" style={{ flex: 1 }}>
                💾 Save Changes
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="help-btn"
                style={{ flex: 1 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}