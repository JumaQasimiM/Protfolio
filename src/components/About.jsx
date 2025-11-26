import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGraduationCap,
  FaBriefcase,
  FaLanguage,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandPython } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import myfoto from "../assets/myfoto.jpg";

export const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  // Educations
  const education = [
    {
      year: "2017 – 2021",
      title: "Bachelor of Computer Science",
      institute: "Polytechnic University Kabul, Afghanistan",
      icon: <FaGraduationCap className="text-blue-500" />,
      details: (
        <>
          <p>
            <strong>Field of Study:</strong> Computer Engineering & Informatics,
            Information Sciences
          </p>
          <p>
            <strong>Degree:</strong> Bachelor (Title: Attendance System),
            recognized in Germany
          </p>
          <p>
            <strong>Project:</strong> Developed an application using Python,
            Django, and MySQL. Focused on Machine Learning integration.
          </p>
        </>
      ),
    },
    {
      year: "2003 – 2015",
      title: "School & High School",
      institute: "Kabul, Afghanistan",
      icon: <FaGraduationCap className="text-green-500" />,
    },
    {
      year: "2018 - 2019",
      title: "Full-Stack Development Training – Quality Course",
      institute: "Synapse Technologies, kabul, Afghanistan",
      icon: <FaGraduationCap className="text-green-500" />,
    },

    {
      year: "03/2025 – 07/2025",
      title: "Job-Oriented Language Course (B2)",
      institute: "Volkshochschule Heilbronn, Germany",
      icon: <FaGraduationCap className="text-green-500" />,
    },
  ];

  //  Experince
  const experience = [
    // Practical / Academic Project
    {
      year: "2020 – 2021",
      title: "Bachelor Project: Attendance System",
      company: "Polytechnic University Kabul, Afghanistan",
      icon: <FaBriefcase className="text-blue-500" />,
      details: (
        <>
          <p>Full-Stack Development: Frontend + Backend</p>
          <p>Technologies: Python, Django, MySQL, OpenCV, FaceNet</p>
          <p>Focus: Machine Learning integration with face recognition</p>
        </>
      ),
    },

    // Personal / Practice Projects
    {
      year: "2024 – Present",
      title: "React Shop",
      company: "Personal Project",
      icon: <FaBriefcase className="text-green-500" />,
      details: (
        <>
          <h5 className="text-teal-700 font-semibold">Personal Project</h5>
          <p>A responsive E-commerce website using React and TailwindCSS</p>
          <p>Technologies: React, TailwindCSS, SwiperJS, REST API</p>
          <p>
            Live Demo:{" "}
            <a
              href="https://jumaqasimim.github.io/Tailwindshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Shop
            </a>
          </p>
        </>
      ),
    },
    {
      year: "2025 – 06/2025",
      title: "JavaScript InfoPlus24",
      company: "Practice Project",
      icon: <FaBriefcase className="text-yellow-500" />,
      details: (
        <>
          <h5 className="text-teal-700 font-semibold">Personal Project</h5>
          <p>A news website built with vanilla JavaScript</p>
          <p>Technologies: JavaScript, HTML, TailwindCSS, REST API</p>
          <p>
            Live Demo:{" "}
            <a
              href="https://jumaqasimim.github.io/InfoPlus24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              InfoPlus24
            </a>
          </p>
        </>
      ),
    },
    {
      year: "2025 – Present",
      title: "React CodeManager",
      company: "Personal Project",
      icon: <FaBriefcase className="text-purple-500" />,
      details: (
        <>
          <h5 className="text-teal-700 font-semibold">Personal Project</h5>
          <p>A CodeManager dashboard to save codes, styles, and links</p>
          <p>Technologies: React, TailwindCSS, HTML5</p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/JumaQasimiM/CodeManager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              CodeManager
            </a>
          </p>
        </>
      ),
    },
  ];

  const skills = [
    {
      name: "Python",
      icon: <TbBrandPython className="text-blue-700 " />,
    },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssLine className="text-sky-700" />,
    },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-gary-600" /> },
  ];

  const languages = ["Deutsch", "English", "Persisch (Mother Language)"];
  const tabs = ["education", "experience", "skills", "languages"];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gray-50 font-poppins"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 mb-12 sm:mb-16 border-b-2 border-gray-200 pb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          About Me
        </h2>
        <span className="hidden md:block text-blue-400 text-lg md:text-xl">
          (01)
        </span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[full] sm:w-48 md:w-60 lg:w-72 xl:w-80 overflow-hidden shadow-2xl bg-gradient-to-tr from-blue-100 to-blue-50 border border-white/30 flex-shrink-0 mx-auto md:mx-0"
        >
          <img
            src={myfoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text & Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-4 sm:gap-6"
        >
          {/* Introduction */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-600">
              Mohammad Juma Qasimi
            </span>
            , a passionate Front-End Developer creating modern, elegant, and
            fully responsive interfaces using{" "}
            <span className="text-sky-500 font-semibold">React</span>,{" "}
            <span className="text-teal-500 font-semibold">TailwindCSS</span>,
            and <span className="text-sky-500 font-semibold">Python</span>, with
            a growing passion for AI technologies.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-gray-300 mb-4 sm:mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base rounded-lg transition-all ${
                  activeTab === tab
                    ? "text-white bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg"
                    : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {/* Education */}
            {activeTab === "education" &&
              education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-6"
                >
                  <span className="absolute -left-[16px] top-2 w-8 h-8 flex items-center justify-center bg-white border-2 border-blue-400 rounded-full shadow">
                    {edu.icon}
                  </span>
                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {edu.title}
                      </h3>
                      <span className="text-sm text-blue-500 font-semibold">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">
                      {edu.institute}
                    </p>
                    {edu.details && (
                      <div className="text-gray-600 text-sm space-y-1">
                        {edu.details}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

            {/* Experience */}

            {activeTab === "experience" &&
              experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-6"
                >
                  <span className="absolute -left-[16px] top-2 w-8 h-8 flex items-center justify-center bg-white border-2 border-blue-400 rounded-full shadow">
                    {exp.icon}
                  </span>
                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-blue-500 font-semibold">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">
                      {exp.institute}
                    </p>
                    {exp.details && (
                      <div className="text-gray-600 text-sm space-y-1">
                        {exp.details}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

            {/* Skills */}
            {activeTab === "skills" && (
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white shadow rounded-lg border border-gray-200 hover:scale-105 transition text-sm sm:text-base"
                  >
                    {skill.icon && skill.icon}
                    <span className="text-gray-800 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Languages */}
            {activeTab === "languages" && (
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white shadow rounded-lg border border-gray-200 hover:scale-105 transition text-sm sm:text-base"
                  >
                    <FaLanguage className="text-purple-500" />
                    <span className="text-gray-800 font-medium">{lang}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
