import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaYoutube } from "react-icons/fa";
import myfoto from "../assets/myfoto.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen flex flex-col justify-center px-6">
      {/* Background Blur Circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-300/30 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300/30 blur-[180px] rounded-full animate-bounce"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm 👋
            <br />
            <span className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              Mohammad Juma Qasimi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Front-End Developer crafting{" "}
            <span className="text-green-500 font-semibold">modern</span>,{" "}
            <span className="text-teal-500 font-semibold">elegant</span>, and{" "}
            <span className="text-blue-500 font-semibold">responsive</span>
            interfaces using JavaScript, React & Tailwind CSS,{" "}
            <span className="text-blue-500 font-semibold">Python</span> ,
            dedicated to building intelligent, AI-enhanced user experiences.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition"
            >
              Contact <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              href="#projects"
              className="px-8 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-md"
            >
              See Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-100 md:h-120 rounded overflow-hidden shadow-2xl bg-white/30 backdrop-blur-xl border border-white/30 flex-shrink-0"
        >
          <img
            src={myfoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-400/20 to-purple-500/20 rounded-3xl pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Social Icons Vertical Bar */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-6 z-20">
        <motion.a
          whileHover={{ scale: 1.3 }}
          href="#"
          className="text-gray-900 hover:text-green-500 transition text-3xl"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          href="#"
          className="text-gray-900 hover:text-blue-500 transition text-3xl"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          href="#"
          className="text-gray-900 hover:text-red-500 transition text-3xl"
        >
          <FaYoutube />
        </motion.a>
        <div className="w-[2px] h-24 bg-gray-300 mt-2"></div>
      </div>
    </section>
  );
};
