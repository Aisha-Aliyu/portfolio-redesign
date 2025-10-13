"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-10"
        >
          Got a question, proposal, or just want to say hi? My inbox is open.
        </motion.p>

        <form
          action="https://formspree.io/f/mjkbvgkn" // Replace with your Formspree form ID
          method="POST"
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://github.com/Aisha-Aliyu"
            target="_blank"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aisha-aliyu-628b41376"
            target="_blank"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aysheraleeyu1@gmail.com"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}