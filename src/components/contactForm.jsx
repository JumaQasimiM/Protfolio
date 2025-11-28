import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CiWarning } from "react-icons/ci";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_j6y4qgd",
        "template_44gueu9",
        e.target,
        "5PHdd8XfmakRljKox"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  const inputStyle =
    "peer w-full px-4 pt-6 pb-2 rounded-2xl bg-white/40 backdrop-blur-sm border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-transparent";

  const labelStyle =
    "absolute left-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex flex-col gap-6 p-10 rounded-3xl shadow-xl bg-gradient-to-br from-white/60 via-blue-50/50 to-teal-50/50 backdrop-blur-md"
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h3>
      <p className="mb-6 text-amber-800 flex items-center gap-2">
        <CiWarning className="text-amber-400 text-3xl" /> Please send a message
        only for work inquiries or urgent situations.
      </p>

      {/* Name */}
      <div className="relative">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className={inputStyle}
          required
        />
        <label className={labelStyle}>Your Name</label>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className={inputStyle}
          required
        />
        <label className={labelStyle}>Your Email</label>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className={inputStyle + " resize-none pt-6"}
          required
        ></textarea>
        <label className={labelStyle}>Your Message</label>
      </div>

      {/* Success/Error Message */}
      {success && (
        <p
          className={`${
            success.includes("successfully") ? "text-green-500" : "text-red-500"
          } font-medium text-center`}
        >
          {success}
        </p>
      )}

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        }}
        className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-2xl shadow-lg transition-all text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
};
