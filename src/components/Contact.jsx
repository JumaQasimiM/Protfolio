import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-24 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-0">
        {/* Animated Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight border-b pb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-medium text-sm sm:text-base">
            Scroll down to explore
          </span> */}
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-8"
          >
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              <motion.a
                href="mailto:jums82db@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 shadow-lg text-white transition-all"
              >
                <FaEnvelope className="text-2xl" />
                <span className="font-medium text-lg">jums82db@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:+4915214795072"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 shadow-lg text-white transition-all"
              >
                <FaPhone className="text-2xl" />
                <span className="font-medium text-lg">+49 15214795072</span>
              </motion.a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 font-semibold">or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 flex-wrap">
              {[
                {
                  icon: <FaGithub />,
                  url: "https://github.com/JumaQasimiM",
                  bg: "bg-gray-900",
                  hover: "hover:bg-gray-800",
                  color: "text-white",
                },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/mohammad-qasimi/",
                  bg: "bg-blue-700",
                  hover: "hover:bg-blue-600",
                  color: "text-white",
                },
                {
                  icon: <FaFacebook />,
                  url: "https://facebook.com/m juma qasimi",
                  bg: "bg-blue-600",
                  hover: "hover:bg-blue-500",
                  color: "text-white",
                },
                {
                  icon: <FaYoutube />,
                  url: "https://www.youtube.com/@programingskill",
                  bg: "bg-red-500",
                  hover: "hover:bg-red-400",
                  color: "text-white",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  className={`p-4 rounded-xl shadow-lg transition-all ${social.bg} ${social.hover} ${social.color} flex items-center justify-center`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
