"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e1e2f, #312e81);
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

export default function Hero() {
  return (
    <HeroContainer id="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Hi 👋, I’m <span className="text-yellow-300">Aisha Aliyu</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-lg md:text-2xl max-w-2xl"
      >
        A Software Engineer & Game Developer crafting modern web experiences 🚀
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8 inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition"
      >
        View My Work
      </motion.a>
    </HeroContainer>
  );
}