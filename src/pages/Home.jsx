import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Intro Text */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
          Hello, I'm <span className="text-blue-600">Mohammad Juma Qasimi</span>
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
          Front-End Developer • React Specialist • UI/UX Enthusiast
        </p>

        {/* Icons */}
        <div className="flex gap-6 mt-6 justify-center text-3xl text-gray-700">
          <a className="hover:text-blue-600 transition" href="#">
            <FaGithub />
          </a>
          <a className="hover:text-blue-600 transition" href="#">
            <FaLinkedin />
          </a>
          <a className="hover:text-blue-600 transition" href="#">
            <FaFacebook />
          </a>
        </div>

        {/* Button */}
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          View My Work
        </button>
      </motion.div>
    </section>
  );
};
