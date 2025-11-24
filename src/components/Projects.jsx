import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project images
import djangoProjectImage from "../assets/django.png";
import javaScriptProjectImage from "../assets/javaScript.png";
import reactProjectImage from "../assets/react.png";
import tailwindProjectImage from "../assets/tailwind.png";

const projects = [
  {
    title: "React Portfolio",
    category: "React",
    description: "A responsive portfolio website using React and Tailwind.",
    image: reactProjectImage,
    github: "#",
    demo: "#",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "JavaScript Game",
    category: "JavaScript",
    description: "A browser-based game built with vanilla JavaScript.",
    image: javaScriptProjectImage,
    github: "#",
    demo: "#",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Django Blog",
    category: "Django",
    description: "A full-featured blog built with Django and PostgreSQL.",
    image: djangoProjectImage,
    github: "#",
    demo: "#",
    tech: ["Django", "Python", "Bootstrap"],
  },
  {
    title: "Python Data Script",
    category: "Python",
    description: "A data processing script written in Python.",
    image: tailwindProjectImage,
    github: "#",
    demo: "#",
    tech: ["Python", "Pandas", "NumPy"],
  },
];

const categories = ["All", "JavaScript", "React", "Python", "Django"];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-between md:flex-row items-start gap-16 border-b-2 mb-20 pb-5">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Projects
        </h2>
        <span className="text-blue-400 text-2xl ">(02)</span>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              onClick={() => setActiveTab(cat)}
              whileHover={{ scale: 1.1 }}
              className={`cursor-pointer py-2 px-6 rounded-full font-semibold transition-all ${
                activeTab === cat
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              {cat}
            </motion.div>
          ))}
        </div>

        {/* Projects Grid with animation */}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded overflow-hidden shadow-xl cursor-pointer bg-white"
                whileHover={{ scale: 1.05 }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/70 text-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/20 px-2 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon Links */}
                  <div className="flex gap-4 text-2xl mt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      className="hover:text-gray-200 transition"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: -10 }}
                      className="hover:text-blue-400 transition"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
