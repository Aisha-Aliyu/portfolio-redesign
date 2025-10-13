import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <SkillsSection />
    </main>
  );
}