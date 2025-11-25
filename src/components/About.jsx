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
              education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white shadow-md border border-gray-200 hover:scale-105 transition"
                >
                  <div className="text-2xl sm:text-3xl">{edu.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                      {edu.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                      {edu.institute}
                    </p>
                    <span className="text-gray-400 text-xs sm:text-xs md:text-sm">
                      {edu.year}
                    </span>
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
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white shadow-md border border-gray-200 hover:scale-105 transition"
                >
                  <div className="text-2xl sm:text-3xl">{exp.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                      {exp.company}
                    </p>
                    <span className="text-gray-400 text-xs sm:text-xs md:text-sm">
                      {exp.year}
                    </span>
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
