"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 backdrop-blur-lg transition-all ${
        scrolled ? "bg-gradient-to-r from-indigo-600/80 to-purple-600/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
       <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Link
    href="/"
    className="text-2xl font-extrabold tracking-tight text-white hover:text-yellow-400 transition-colors logo-glow"
  >
    <span className="text-yellow-400">A</span>isha.dev
  </Link>
</motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-yellow-300 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gradient-to-r from-indigo-600/90 to-purple-600/90 px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setNavOpen(false)}
              className="block text-white py-2 text-lg font-medium hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}