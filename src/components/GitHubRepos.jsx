import React, { useEffect, useState } from "react";

export default function GitHubRepos({ username = "Jonii23", max = 6 }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated`
        );

        if (!response.ok) throw new Error("GitHub API Error");

        const data = await response.json();

        setRepos(
          data
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, max)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username, max]);

  if (loading) return <p className="text-center">Loading repositories...</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <div key={repo.id} className="card">
          <h3 className="font-bold text-lg text-navy mb-1">{repo.name}</h3>

          <p className="text-sm text-gray-600 mb-3">
            {repo.description || "No description available"}
          </p>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline text-sm"
          >
            View Repo →
          </a>
        </div>
      ))}
    </div>
  );
}
