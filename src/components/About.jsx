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
  FaGitAlt,
} from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import myfoto from "../assets/myfoto.jpg";

export const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      year: "2017 – 2021",
      title: "Bachelor of Computer Science",
      institute: "Polytechnic University Kabul, Afghanistan",
      icon: <FaGraduationCap className="text-blue-500" />,
      details: (
        <>
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            <span className="font-semibold">Field:</span> Computer Engineering &
            Info Sciences
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            <span className="font-semibold ">Degree:</span> Bachelor (recognized
            in Germany)
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <span className="font-semibold ">Project:</span> ML app using
            Python, Django & MySQL
          </p>
        </>
      ),
    },
    {
      year: "2003 – 2015",
      title: "School & High School",
      institute: "Jaghori, Ghazni, Afghanistan",
      icon: <FaGraduationCap className="text-green-500" />,
    },
    {
      year: "2018 - 2019",
      title: "Full-Stack Development Training",
      institute: "Synapse Technologies, Kabul",
      icon: <FaGraduationCap className="text-sky-500" />,
    },
    {
      year: "03/2025 – 07/2025",
      title: "Job-Oriented Language Course (B2)",
      institute: "Volkshochschule Heilbronn, Germany",
      icon: <FaGraduationCap className="text-green-500" />,
    },
  ];

  const experience = [
    {
      year: "2020 – 2021",
      title: "Bachelor Project: Attendance System",
      institute: "Polytechnic University Kabul",
      icon: <FaBriefcase className="text-blue-500" />,
      details: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>AI-based Face Recognition Attendance System</li>
          <li>Python, Django, MySQL, OpenCV, FaceNet</li>
          <li>Realtime ML verification & logging</li>
        </ul>
      ),
    },
    {
      year: "2024 – Present",
      title: " Shop.",
      institute: "Personal Project",
      icon: <FaBriefcase className="text-green-500" />,
      details: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Responsive E-commerce website using React + TailwindCSS</li>
          <li>REST API, SwiperJS, Clean UI</li>
          <li>
            <a
              href="https://jumaqasimim.github.io/Tailwindshop/"
              target="_blank"
              className="text-blue-500 underline"
            >
              Shop
            </a>
          </li>
        </ul>
      ),
    },
    {
      year: "2025 – Present",
      title: " CodeManager Dashboard",
      institute: "Personal Project",
      icon: <FaBriefcase className="text-purple-500" />,
      details: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Stores and manages code snippets</li>
          <li>React + TailwindCSS</li>
          <li>
            <a
              href="https://github.com/JumaQasimiM/CodeManager"
              target="_blank"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      ),
    },
    {
      year: "2025 – 06/2025",
      title: "InfoPlus24.",
      institute: "Personal Project",
      icon: <FaBriefcase className="text-yellow-500" />,
      details: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li> News website with Vanilla JavaScript</li>
          <li>TailwindCSS, REST API</li>
          <li>
            <a
              href="https://jumaqasimim.github.io/InfoPlus24/"
              target="_blank"
              className="text-blue-500 underline"
            >
              InfoPlus24
            </a>
          </li>
        </ul>
      ),
    },
  ];

  const skills = [
    { name: "Python", icon: <TbBrandPython className="text-blue-700" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssLine className="text-sky-700" />,
    },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-gray-700" /> },
  ];

  const languages = ["Deutsch", "English", "Persisch (Mother Language)"];
  const tabs = ["education", "experience", "skills", "languages"];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-0">
        {/* Animated Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight border-b pb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mx-auto md:mx-0 w-64 h-64 rounded-3xl overflow-hidden shadow-xl border border-blue-200"
        >
          <img
            src={myfoto}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1"
        >
          <p className="text-gray-700 text-lg mb-6">
            I'm{" "}
            <span className="font-semibold text-blue-600">
              Mohammad Juma Qasimi
            </span>
            , a Front-End Developer specializing in{" "}
            <span className="text-blue-500 font-semibold">React</span> and{" "}
            <span className="text-teal-500 font-semibold">TailwindCSS</span>. I
            also develop Python tools and AI projects.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {/* Education */}
            {activeTab === "education" &&
              education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start bg-white p-5 rounded-xl shadow border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-2xl mt-1">{edu.icon}</div>
                  <div className="flex-1">
                    {/* Flex-col for mobile, flex-row for md */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                      <h3 className="font-semibold text-lg">{edu.title}</h3>
                      <span className="text-blue-500 font-medium mt-1 md:mt-0">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium">{edu.institute}</p>
                    {edu.details && (
                      <div className="text-gray-600 text-sm mt-1">
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
                  className="flex gap-4 items-start bg-white p-5 rounded-xl shadow border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-2xl mt-1">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <span className="text-blue-500 font-medium mt-1 md:mt-0">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium">{exp.institute}</p>
                    {exp.details && (
                      <div className="text-gray-600 text-sm mt-1">
                        {exp.details}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

            {activeTab === "skills" && (
              <motion.div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-lg border hover:scale-105 transition"
                  >
                    {skill.icon}{" "}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "languages" && (
              <motion.div className="flex flex-wrap gap-3">
                {languages.map((lang, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-lg border hover:scale-105 transition"
                  >
                    <FaLanguage className="text-purple-500" />{" "}
                    <span className="font-medium">{lang}</span>
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
