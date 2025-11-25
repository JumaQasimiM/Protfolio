import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Left Side */}
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          © {new Date().getFullYear()} Portfolio Site —{" "}
          <span className="font-semibold text-white">Mohammad Juma Qasimi</span>
        </p>

        {/* Right Side / Social Icons */}
        <div className="flex gap-6">
          <motion.a
            href="https://github.com/JumaQasimiM"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -2 }}
            className="text-gray-300 hover:text-white transition-colors text-xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohammad-qasimi/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -2 }}
            className="text-gray-300 hover:text-white transition-colors text-xl"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>

      {/* Optional: Small bottom line */}
      <motion.div
        className="h-1 w-24 bg-blue-600 mx-auto mt-6 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </footer>
  );
};
