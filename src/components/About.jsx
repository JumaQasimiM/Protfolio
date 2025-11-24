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
import myfoto from "../assets/myfoto.jpg";

export const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      year: "2015 - 2019",
      title: "Bachelor of Computer Science",
      institute: "University of XYZ",
      icon: <FaGraduationCap className="text-blue-500" />,
    },
    {
      year: "2020 - 2021",
      title: "Frontend Development Bootcamp",
      institute: "ABC Coding Academy",
      icon: <FaGraduationCap className="text-green-500" />,
    },
  ];

  const experience = [
    {
      year: "2019 - 2020",
      title: "Junior Front-End Developer",
      company: "Tech Solutions Ltd",
      icon: <FaBriefcase className="text-yellow-500" />,
    },
    {
      year: "2021 - Present",
      title: "Front-End Developer",
      company: "Creative Web Agency",
      icon: <FaBriefcase className="text-red-500" />,
    },
  ];

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "TailwindCSS", icon: null },
    { name: "Git & GitHub", icon: null },
  ];

  const languages = ["Deutsch", "English", "Persisch"];
  const tabs = ["education", "experience", "skills", "languages"];

  return (
    <section id="about" className="relative py-24 bg-gray-50 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border-b-2 pb-5">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Me
        </h2>
        <span className="text-blue-400 text-2xl ">(01)</span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-100 rounded overflow-hidden shadow-2xl bg-gradient-to-tr from-blue-100 to-blue-50 border border-white/30"
        >
          <img
            src={myfoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text & Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Introduction */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-600">
              Mohammad Juma Qasimi
            </span>
            , a passionate Front-End Developer crafting modern, elegant, and
            fully responsive interfaces using{" "}
            <span className="text-sky-500 font-semibold">React</span> ,{" "}
            <span className="text-teal-500 font-semibold">TailwindCSS</span> and{" "}
            <span className="text-sky-500 font-semibold">Python</span>
            with a growing passion for AI technologies.
          </p>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-300 mb-6 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 font-semibold text-lg transition-all ${
                  activeTab === tab
                    ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:rounded-full"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-5">
            {/* Education */}
            {activeTab === "education" &&
              education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-lg border border-gray-200"
                >
                  <div className="text-3xl">{edu.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {edu.title}
                    </h3>
                    <p className="text-gray-700">{edu.institute}</p>
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                  </div>
                </motion.div>
              ))}

            {/* Experience */}
            {activeTab === "experience" &&
              experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-lg border border-gray-200"
                >
                  <div className="text-3xl">{exp.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700">{exp.company}</p>
                    <span className="text-gray-400 text-sm">{exp.year}</span>
                  </div>
                </motion.div>
              ))}

            {/* Skills */}
            {activeTab === "skills" && (
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-lg border border-gray-200 hover:scale-105 transition"
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
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-lg border border-gray-200 hover:scale-105 transition"
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
