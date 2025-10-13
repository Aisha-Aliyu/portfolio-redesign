"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  type: "education" | "work";
}

const experiences: ExperienceItem[] = [
  {
    title: "B.Sc Software Engineering",
    company: "University (Final Year)",
    date: "2019 – 2025",
    description: "Focused on full-stack development, game development, and AI projects.",
    type: "education",
  },
  {
    title: "Internship — Software Developer",
    company: "NITDA",
    date: "June – Oct 2024",
    description: "Worked on blockchain fundamentals, product design, and frontend development.",
    type: "work",
  },
  {
    title: "Game Dev Project",
    company: "Street Kings: Drift Wars",
    date: "2025",
    description: "Developed a 3D multiplayer racing game in Unreal Engine as a final year project.",
    type: "work",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-gray-700 ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white ring-4 ring-black">
                {exp.type === "education" ? <FaGraduationCap size={12} /> : <FaBriefcase size={12} />}
              </span>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company} • {exp.date}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}