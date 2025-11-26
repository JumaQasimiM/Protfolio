import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ReactPortfolioImage from "../assets/portfolio.png";
import javaScriptProjectImage from "../assets/info24.png";
import reactProjectImage from "../assets/react.png";
import CodeManagerImage from "../assets/codemanager.png";

const projects = [
  {
    title: "React Shop",
    category: "React",
    description: "A responsive E-C website using React and Tailwind.",
    image: reactProjectImage,
    github: "https://github.com/JumaQasimiM/Tailwindshop",
    demo: "https://jumaqasimim.github.io/Tailwindshop/",
    tech: ["React", "TailwindCSS", "Swiperjs"],
  },
  {
    title: "JavaScript InfoPlus24",
    category: "JavaScript",
    description: "A News site built with vanilla JavaScript.",
    image: javaScriptProjectImage,
    github: "https://github.com/JumaQasimiM/InfoPlus24",
    demo: "https://jumaqasimim.github.io/InfoPlus24/",
    tech: ["JavaScript", "HTML", "TailwindCSS"],
  },
  {
    title: "React Portfolio",
    category: "React",
    description: "A full-responsive Portfolio built with React & TailwindCSS.",
    image: ReactPortfolioImage,
    github: "#",
    demo: "https://mh-jumaqasimi.netlify.app",
    tech: ["React", "TailwindCSS", "framer-motion"],
  },
  {
    title: "React CodeManager",
    category: "React",
    description: "A CodeManager Dashboard to save codes, styles, links.",
    image: CodeManagerImage,
    github: "https://github.com/JumaQasimiM/CodeManager",
    demo: "#",
    tech: ["React", "TailwindCSS", "HTML5"],
  },
];

const categories = ["All", "JavaScript", "React", "Tailwind"];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="pt-5 md:py-24 px-6 sm:px-12 bg-gray-50 font-poppins"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-10 md:mb-20 border-b-2 border-gray-200 pb-5">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
          Projects
        </h2>
        <span className="hidden md:block text-blue-400 text-2xl md:text-3xl">
          (02)
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveTab(cat)}
            whileHover={{ scale: 1.1 }}
            className={`py-2 px-6 rounded-full font-semibold transition-all ${
              activeTab === cat
                ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="relative overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() =>
                !isDesktop &&
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isDesktop ? 0 : activeIndex === index ? 1 : 0,
                }}
                whileHover={isDesktop ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80 text-white p-6 flex flex-col justify-between"
              >
                {/* Top: Title + Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        className="bg-white/20 px-2 py-1 rounded-lg font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-800/80 hover:bg-gray-700 rounded-lg flex items-center gap-2 font-medium transition"
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-blue-600/90 hover:bg-blue-500 rounded-lg flex items-center gap-2 font-medium transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
