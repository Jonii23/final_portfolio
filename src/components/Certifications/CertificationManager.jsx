import React, { useState, useEffect } from "react";
import certificationsData from "../../data/certifications.json";

export default function CertificationManager() {
  const [certs, setCerts] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setCerts(certificationsData);
  }, []);

  const [form, setForm] = useState({
    title: "",
    date: "",
    link: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      setCerts(
        certs.map((c) =>
          c.id === editing ? { ...c, ...form } : c
        )
      );
      setEditing(null);
    } else {
      setCerts([
        ...certs,
        { id: Date.now(), ...form }
      ]);
    }

    setForm({ title: "", date: "", link: "" });
  };

  const deleteCert = (id) => {
    if (window.confirm("Are you sure you want to delete this certification?")) {
      setCerts(certs.filter((c) => c.id !== id));
    }
  };

  const startEdit = (cert) => {
    setEditing(cert.id);
    setForm({
      title: cert.title,
      date: cert.date,
      link: cert.link
    });
  };

  return (
    <div>
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '2rem',
          border: '2px solid var(--border)',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          background: 'white',
          marginBottom: '3rem'
        }}
      >
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: 'var(--navy)',
          borderBottom: '2px solid var(--accent)',
          paddingBottom: '0.75rem'
        }}>
          {editing ? "✏️ Edit Certification" : "➕ Add Certification"}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            name="title"
            placeholder="Certification title"
            value={form.title}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              fontSize: '1rem',
              fontFamily: 'inherit',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--navy)';
              e.target.style.boxShadow = '0 0 0 3px rgba(30, 58, 95, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
            required
          />

          <input
            name="date"
            placeholder="Date (e.g., January 2025)"
            value={form.date}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              fontSize: '1rem',
              fontFamily: 'inherit',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--navy)';
              e.target.style.boxShadow = '0 0 0 3px rgba(30, 58, 95, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
            required
          />

          <input
            name="link"
            placeholder="Verification Link (optional)"
            value={form.link}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              fontSize: '1rem',
              fontFamily: 'inherit',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--navy)';
              e.target.style.boxShadow = '0 0 0 3px rgba(30, 58, 95, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />

          <button 
            type="submit"
            className="btn-primary" 
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.0625rem',
              marginTop: '0.5rem'
            }}
          >
            {editing ? "💾 Save Changes" : "➕ Add Certification"}
          </button>
        </div>
      </form>

      {/* DIVIDER */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '3rem 0'
      }}>
        <div style={{
          flex: 1,
          height: '2px',
          background: 'linear-gradient(to right, transparent, var(--accent), transparent)'
        }}></div>
        <span style={{
          color: 'var(--navy)',
          fontWeight: '600',
          fontSize: '1.125rem'
        }}>
          My Certifications
        </span>
        <div style={{
          flex: 1,
          height: '2px',
          background: 'linear-gradient(to right, transparent, var(--accent), transparent)'
        }}></div>
      </div>

      {/* LIST */}
      {certs.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'white',
          borderRadius: '1.5rem',
          border: '2px dashed var(--border)',
          color: '#94a3b8'
        }}>
          <p style={{ fontSize: '1.125rem' }}>
            No certifications yet. Add your first one above! 🎓
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {certs.map((c) => (
            <div 
              key={c.id} 
              className="card"
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, var(--navy), var(--accent))'
              }}></div>

              <div style={{ paddingTop: '0.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--navy)',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  {c.title}
                </h3>
                
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginBottom: '0.75rem'
                }}>
                  📅 Completed: {c.date}
                </p>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                     Verify Credential
                  </a>
                )}
              </div>

              <div style={{
                marginTop: '1.5rem',
                display: 'flex',
                gap: '0.75rem'
              }}>
                <button
                  onClick={() => startEdit(c)}
                  style={{
                    flex: 1,
                    padding: '0.625rem 1rem',
                    background: 'var(--navy)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '0.9375rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--navy-dark)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--navy)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                   Edit
                </button>

                <button
                  onClick={() => deleteCert(c.id)}
                  style={{
                    flex: 1,
                    padding: '0.625rem 1rem',
                    background: 'var(--accent)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '0.9375rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#1e3a8a';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--accent)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                   Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}