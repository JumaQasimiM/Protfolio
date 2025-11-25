import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex flex-col gap-6 p-10 rounded-xl shadow"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Send a Message
      </h3>

      {/* Name Field */}
      <div className="relative">
        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white/70 placeholder-transparent peer"
        />
        <label className="absolute left-12 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
          Your Name
        </label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white/70 placeholder-transparent peer"
        />
        <label className="absolute left-12 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-green-500 peer-focus:text-sm">
          Your Email
        </label>
      </div>

      {/* Message Field */}
      <div className="relative">
        <FaComment className="absolute left-4 top-4 text-gray-400" />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition bg-white/70 placeholder-transparent peer resize-none"
        ></textarea>
        <label className="absolute left-12 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-purple-500 peer-focus:text-sm">
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
        className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-2xl shadow-lg transition-all text-lg"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};
