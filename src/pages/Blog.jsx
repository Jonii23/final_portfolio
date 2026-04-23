import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load .md files as raw text
    const importPosts = import.meta.glob("../posts/*.md", {
      query: "?raw",
      import: "default"
    });

    Promise.all(
      Object.keys(importPosts).map(async (path) => {
        const content = await importPosts[path]();
        return {
          slug: path.split("/").pop().replace(".md", ""),
          content,
        };
      })
    ).then(setPosts);
  }, []);

  return (
    <section style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '7rem 1.5rem 4rem 1.5rem'
    }}>
      <div className="section-header">
        <h1 className="section-title"></h1>
        <div className="divider"></div>
      </div>

      {posts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'white',
          borderRadius: '1rem',
          border: '1px solid var(--border)',
          marginTop: '3rem'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#94a3b8'
          }}>
            
          </p>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--navy)',
                marginBottom: '0.5rem',
                textTransform: 'capitalize'
              }}>
                {post.slug.replace(/-/g, " ")}
              </h2>
              <p style={{
                color: 'var(--accent)',
                fontWeight: '500'
              }}>
              
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}