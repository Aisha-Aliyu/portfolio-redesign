"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineering Student",
    company: "Bayero University Kano",
    period: "2020 — Present",
    details: [
      "Currently in final year with a focus on Game Development & AI",
      "Built multiple full-stack web applications and Unreal Engine projects",
      "Active contributor to open-source and hackathons"
    ]
  },
  {
    title: "Frontend Development Intern",
    company: "NITDA",
    period: "2023",
    details: [
      "Worked on blockchain and product design fundamentals",
      "Improved UI/UX for internal tools using React and Tailwind",
      "Collaborated in an agile team with regular sprints"
    ]
  },
  {
    title: "Personal Projects",
    company: "Self",
    period: "Ongoing",
    details: [
      "Developed multiple open-source applications using React, Next.js & TypeScript",
      "Created multiplayer car racing game 'Street Kings: Drift Wars' for PS5",
      "Building AI tools like Buddy App and ClipForge"
    ]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
  id="experience"
  className="py-20 bg-[#1e1e2f] text-white relative overflow-hidden"
>
  {/* Optional gradient overlay for subtle glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="timeline-line" />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg"
        >
          Experience 💼
        </motion.h2>

        <div className="space-y-8 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative ml-10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[34px] top-5 w-5 h-5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full ring-4 ring-black shadow-lg group-hover:scale-110 transition-transform" />

              <div
                onClick={() => toggleExpand(index)}
                className="cursor-pointer bg-gray-800/60 backdrop-blur-md p-5 rounded-xl border border-gray-700 group-hover:border-purple-500 transition-all hover:translate-y-[-4px] relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-500 to-pink-500 blur-2xl transition-opacity"></div>

                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 group-hover:text-purple-400 drop-shadow cursor-pointer"
                  >
                    <ExpandMoreIcon fontSize="large" />
                  </motion.div>
                </div>

                <AnimatePresence>
                    {expandedIndex === index && exp.details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 glow-border"
                    >
                      <div className="relative z-10 p-4 text-gray-300">
                        <ul className="list-disc list-inside space-y-2">
                          {exp.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}