import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaYoutube } from "react-icons/fa";
import myfoto from "../assets/myfoto.jpg";
import foto from "../assets/foto.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-50 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 md:pt-28 overflow-hidden"
    >
      {/* Background Blur Circles */}
      <div className="absolute top-10 right-5 w-36 h-36 sm:w-44 sm:h-44 md:w-72 md:h-72 bg-green-300/30 blur-[90px] md:blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 left-5 w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-300/30 blur-[120px] md:blur-[180px] rounded-full"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-4 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm 👋
            <br />
            <span className="text-2xl md:text-4xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              Mohammad Juma Qasimi
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <strong className="text-2xl text-green-400">
              Front-End Developer
            </strong>{" "}
            creating{" "}
            <span className="text-green-500 font-semibold">modern</span>,{" "}
            <span className="text-teal-500 font-semibold">elegant</span>,{" "}
            <span className="text-blue-500 font-semibold">responsive</span>{" "}
            interfaces using JavaScript, React & Tailwind CSS, and{" "}
            <span className="text-blue-500 font-semibold">Python</span> for
            AI-enhanced user experiences.
          </p>

          <div className="flex sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition"
            >
              Contact <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 sm:px-8 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-md"
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
          className="relative w-[70%] sm:w-56 md:w-72 lg:w-80 rounded overflow-hidden shadow-2xl bg-white/30 backdrop-blur-xl border border-white/30 flex-shrink-0"
        >
          <img
            src={foto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-400/20 to-purple-500/20"></div>
        </motion.div>
      </div>

      {/* Social Icons */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 z-40">
        {/* Mobile */}
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg px-5 py-3 rounded-full flex items-center gap-5 border border-gray-200">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/JumaQasimiM"
            className="text-lg sm:text-xl text-gray-700 hover:text-green-500"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/mohammad-qasimi/"
            className="text-lg sm:text-xl text-gray-700 hover:text-blue-500"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-lg sm:text-xl text-gray-700 hover:text-red-500"
          >
            <FaYoutube />
          </motion.a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-col items-center gap-5 text-3xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/JumaQasimiM"
            className="hover:text-green-500"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/mohammad-qasimi/"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-red-500"
          >
            <FaYoutube />
          </motion.a>
          <div className="w-[2px] h-16 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};
