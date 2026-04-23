import React, { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          'https://api.github.com/users/Jonii23/repos?sort=updated'
        );
        if (!response.ok) throw new Error("GitHub API Error");
        const data = await response.json();
        setRepos(
          data
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 8)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '7rem 1.5rem 4rem 1.5rem'
    }}>
      {/* PAGE HEADER */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 className="section-title">Projects</h1>
        <p style={{
          color: '#64748b',
          marginTop: '0.5rem',
          fontSize: '1.125rem'
        }}>
          My featured work and latest GitHub contributions
        </p>
        <div  style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg,#0f172a,#3b82f6)",
              borderRadius: "1099px",
              marginTop: "1rem",
            }}></div>
      </div>

      {/* FEATURED PROJECTS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem'
      }}>
        {/* Portfolio Project */}
        <div className="card">
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, var(--navy), var(--accent))',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            
          </div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--navy)',
            marginBottom: '0.5rem'
          }}>
            Portfolio 
          </h2>
          <p style={{
            color: '#64748b',
            marginBottom: '1rem',
            lineHeight: '1.6',
            fontSize: '0.9375rem'
          }}>
            This website: built with React, Vite, GitHub API integration, and markdown blogging.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '1rem'
          }}>
            {['React', 'Vite', 'GitHub API', 'Context API'].map(tech => (
              <span key={tech} style={{
                padding: '0.25rem 0.75rem',
                background: '#f1f5f9',
                color: 'var(--navy)',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tutor Dashboard */}
        <div className="card">
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, var(--navy), var(--accent))',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            📊
          </div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--navy)',
            marginBottom: '0.5rem'
          }}>
            Peer Tutor Dashboard
          </h2>
          <p style={{
            color: '#64748b',
            marginBottom: '1rem',
            lineHeight: '1.6',
            fontSize: '0.9375rem'
          }}>
            A dashboard for tracking students, scheduling sessions, and logging progress.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '1rem'
          }}>
            {['React', 'Node.js', 'MySQL'].map(tech => (
              <span key={tech} style={{
                padding: '0.25rem 0.75rem',
                background: '#f1f5f9',
                color: 'var(--navy)',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GITHUB REPOS SECTION */}
      <div style={{
        borderTop: '2px solid var(--border)',
        paddingTop: '3rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: '700',
          color: 'var(--navy)',
          marginBottom: '0.5rem'
        }}>
          Latest from GitHub
        </h2>
        <p style={{
          color: '#64748b',
          marginBottom: '2rem'
        }}>
          Recent projects and contributions
        </p>
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

      {loading ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#94a3b8'
        }}>
          <p>Loading repositories...</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {repos.map((repo) => (
            <div key={repo.id} className="card" style={{
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📁</span>
                <h3 style={{
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  color: 'var(--navy)',
                  margin: 0
                }}>
                  {repo.name}
                </h3>
              </div>

              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                marginBottom: '1rem',
                lineHeight: '1.5',
                minHeight: '40px'
              }}>
                {repo.description || "No description available"}
              </p>

              {repo.language && (
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  background: '#f1f5f9',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--navy)',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>
                  {repo.language}
                </div>
              )}

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginTop: '0.5rem'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      )}

      {/* VIEW ALL BUTTON */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://github.com/Jonii23"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            display: 'inline-block',
            padding: '0.875rem 2rem'
          }}
        >
          View All Repositories →
        </a>
      </div>
    </section>
  );
}