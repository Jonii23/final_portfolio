import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = {
    "Frontend Development": ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    "Backend Development": ["Java","Node.js", "Express", "REST APIs"],
    "Database Tools": ["MySQL", "PostgreSQL","MangoDB"],
    "Developer Tools": ["Python","Git & GitHub", "Linux"],
  };

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '7rem 1.5rem 4rem 1.5rem'
    }}>

      {/* PAGE HEADER */}
      <div className="section-header">
        <h1 className="section-title">Skills</h1>
        <p className="section-sub">Technologies and tools I work with</p>
        <div className="divider"></div>
      </div>

      {/* SKILL GROUPS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        marginTop: '3rem'
      }}>
        {Object.entries(categories).map(([group, skills], index) => (
          <div key={group} className="card">
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--navy)',
              marginBottom: '1.5rem'
            }}>
              {group}
            </h2>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + i) * 0.03 }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--accent)',
                    color: 'white',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    fontWeight: '500',
                    cursor: 'default'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}