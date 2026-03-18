import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../admin/admin.css";

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: new Date().toISOString().split('T')[0],
    excerpt: "",
    content: ""
  });

  // Auto-generate slug from title
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    setForm({ ...form, title, slug });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      alert("Please fill in title, slug, and content");
      return;
    }

    // Get existing posts
    const posts = JSON.parse(localStorage.getItem("blog-posts") || "[]");
    
    // Check if slug already exists
    if (posts.some(p => p.slug === form.slug)) {
      alert("A post with this slug already exists!");
      return;
    }

    // Add new post
    const newPost = {
      ...form,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    posts.unshift(newPost);
    localStorage.setItem("blog-posts", JSON.stringify(posts));

    alert("Post created successfully!");
    navigate("/admin/dashboard");
  };

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
            ✍️ Create New Post
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
                onChange={handleTitleChange}
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
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1', marginTop: '0.5rem' }}>
                Tip: You can use Markdown syntax like **bold**, *italic*, # headings, etc.
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" className="login-btn" style={{ flex: 1 }}>
                📝 Publish Post
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