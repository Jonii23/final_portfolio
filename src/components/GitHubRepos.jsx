import React, { useEffect, useState } from "react";

export default function GitHubRepos({ username = "Jonii23", max = 6 }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        
        if (!response.ok) throw new Error("GitHub API Error");
        
        const data = await response.json();
        
        // Sort by updated date and get the most recent ones
        const sortedRepos = data
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, max);
        
        setRepos(sortedRepos);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load repositories");
      } finally {
        setLoading(false);
      }
    }
    
    fetchRepos();
  }, [username, max]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "#dc2626" }}>
        <p>{error}</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>No repositories found</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '1rem'
    }}>
      {repos.map((repo) => (
        <div key={repo.id} className="card">
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: 'var(--navy)',
            marginBottom: '0.5rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {repo.name}
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: '#64748b',
            marginBottom: '1rem',
            lineHeight: '1.5',
            minHeight: '3rem'
          }}>
            {repo.description || "No description available"}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              View Repository →
            </a>
            {repo.language && (
              <span style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem',
                background: '#f1f5f9',
                borderRadius: '4px',
                color: '#475569'
              }}>
                {repo.language}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}