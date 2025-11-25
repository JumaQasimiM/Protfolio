import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "hero" },
    { name: "About", icon: <FaUser />, href: "about" },
    { name: "Projects", icon: <FaProjectDiagram />, href: "projects" },
    { name: "Blog", icon: <FaBlog />, href: "blog" },
    { name: "Contact", icon: <FaEnvelope />, href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-[95%] md:w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/80 shadow-lg border-b border-gray-200/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between border border-amber-700"> */}
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-sky-500 text-transparent bg-clip-text cursor-pointer"
        >
          mJuma.dev
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <button
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </button>
              <span className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-600 to-sky-400 w-0 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <span
              className={`block h-1 w-full bg-gray-900 rounded transition-all ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-gray-900 rounded transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-gray-900 rounded transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/40 p-6 flex flex-col gap-6 text-gray-800 font-medium"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-3 text-lg hover:text-blue-600 transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
