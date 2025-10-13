"use client";
import { motion } from "framer-motion";
import React from "react";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3",
      "Tailwind CSS", "MUI", "Styled Components", "Responsive Design",
      "Accessibility (WCAG)", "Performance Optimization (Core Web Vitals)", "SSR/SSG"
    ]
  },
  {
    title: "State & Testing",
    skills: [
      "Redux", "Recoil", "Context API", "Jest", "React Testing Library",
      "Cypress", "Unit & E2E Testing"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js", "Express", "Python", "Django", "REST", "GraphQL",
      "Firebase", "PostgreSQL", "MongoDB", "Supabase"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Docker", "CI/CD (GitHub Actions)", "Vercel", "Netlify", "Firebase Hosting"
    ]
  },
  {
    title: "Game & Immersive",
    skills: ["Unreal Engine 5", "Unity", "AR/VR", "3D Animation"]
  },
  {
    title: "Tools",
    skills: ["Git/GitHub", "Figma", "VS Code", "Jira", "Trello", "Docker"]
  },
  {
    title: "Photography",
    skills: ["Storytelling", "Lighting", "Composition", "Editing", "Portrait", "Landscape"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills ⚡
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="bg-gray-700/50 px-3 py-1 rounded-full text-sm hover:bg-purple-500/70 hover:scale-105 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}