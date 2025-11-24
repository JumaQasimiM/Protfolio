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
    <section id="contact" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-between md:flex-row items-start gap-16 border-b-2 mb-20 pb-5">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact Me
        </h2>
        <span className="text-sky-400 text-2xl"> ( 03 ) </span>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h3>

            <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
              <FaEnvelope className="text-2xl text-red-500" />
              <span>jums82db@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-green-500 transition">
              <FaPhone className="text-2xl text-green-500" />
              <span>+49 15214795072</span>
            </div>

            <div className="flex items-center gap-4 my-5">
              {/* Left line */}
              <div className="flex-1 h-px bg-gray-300"></div>

              {/* Center text */}
              <span className="text-gray-500 font-medium">or</span>

              {/* Right line */}
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl text-gray-700 justify-start">
              {[
                {
                  icon: <FaGithub />,
                  url: "https://github.com/JumaQasimiM",
                  color: "text-gray-800 hover:text-gray-900",
                },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/mohammad-qasimi/",
                  color: "text-blue-600 hover:text-blue-700",
                },
                {
                  icon: <FaFacebook />,
                  url: "https://facebook.com/m juma qasimi",
                  color: "text-blue-700 hover:text-blue-800",
                },

                {
                  icon: <FaYoutube />,
                  url: "https://www.youtube.com/Programingskill",
                  color: "text-red-500 hover:text-red-600",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
                  className={`p-3 rounded-full bg-white/70 backdrop-blur-md shadow ${social.color} transition-all`}
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
