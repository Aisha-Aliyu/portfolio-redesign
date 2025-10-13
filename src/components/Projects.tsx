"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Aisha-Aliyu/repos?sort=updated");
        const data = await res.json();

        // Filter out forks & optionally choose top 6
        const filtered = data
          .filter((repo: Repo) => !repo.fork)
          .slice(0, 6);

        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="min-h-screen flex justify-center items-center bg-[#1e1e2f] text-white">
        <p className="text-lg">🚀 Loading your projects...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-[#1e1e2f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          💻 My Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-lg p-6 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 text-sm">
                <span className="bg-indigo-500/30 px-3 py-1 rounded-full">
                  {repo.language || "N/A"}
                </span>
                <span>⭐ {repo.stargazers_count}</span>
              </div>

              <div className="mt-5 flex space-x-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 transition"
                >
                  GitHub
                </a>
                {repo.homepage && repo.homepage !== "" && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white text-black font-semibold py-2 rounded-full hover:bg-gray-200 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}