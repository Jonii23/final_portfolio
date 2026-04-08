import React, { useState, useEffect } from "react";
import certificationsData from "../../data/certifications.json";

export default function CertificationManager() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    setCerts(certificationsData);
  }, []);

  return (
    <div>
      {/* DIVIDER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "3rem 0",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "2px",
            background:
              "linear-gradient(to right, transparent, var(--accent), transparent)",
          }}
        ></div>

        <span
          style={{
            color: "var(--navy)",
            fontWeight: "600",
            fontSize: "1.125rem",
          }}
        >
          My Certifications
        </span>

        <div
          style={{
            flex: 1,
            height: "2px",
            background:
              "linear-gradient(to right, transparent, var(--accent), transparent)",
          }}
        ></div>
      </div>

      {/* LIST */}
      {certs.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            background: "white",
            borderRadius: "1.5rem",
            border: "2px dashed var(--border)",
            color: "#94a3b8",
          }}
        >
          <p style={{ fontSize: "1.125rem" }}>
            No certifications yet. 🎓
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {certs.map((c) => (
            <div
              key={c.id}
              className="card"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    "linear-gradient(to right, var(--navy), var(--accent))",
                }}
              ></div>

              <div style={{ paddingTop: "0.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--navy)",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748b",
                    marginBottom: "0.75rem",
                  }}
                >
                  📅 Completed: {c.date}
                </p>

                {/* VERIFY */}
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      display: "inline-block",
                      marginRight: "0.5rem",
                      fontSize: "0.8rem",
                      padding: "0.4rem 0.7rem",
                    }}
                  >
                    Verify
                  </a>
                )}

                {/* VIEW CERTIFICATE */}
                {c.file && (
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      display: "inline-block",
                      marginRight: "0.5rem",
                      fontSize: "0.8rem",
                      padding: "0.4rem 0.7rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}