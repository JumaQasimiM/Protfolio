import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaJsSquare, FaDatabase } from "react-icons/fa";

export const Blog = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  const posts = {
    javascript: [
      {
        title: "Mastering Async/Await",
        description:
          "Learn how to handle asynchronous code efficiently in JavaScript.",
      },
      {
        title: "JavaScript ES6 Features",
        description: "A deep dive into modern JavaScript ES6+ features.",
      },
    ],
    react: [
      {
        title: "React Hooks in Depth",
        description: "Everything you need to know about React hooks.",
      },
      {
        title: "Building Reusable Components",
        description:
          "Techniques for creating scalable and reusable React components.",
      },
    ],
    python: [
      {
        title: "Python for Web Development",
        description:
          "Using Python frameworks like Flask and Django for web apps.",
      },
      {
        title: "Data Analysis with Python",
        description:
          "Learn to analyze data efficiently using Python libraries.",
      },
    ],
    django: [
      {
        title: "Django REST Framework",
        description: "Creating REST APIs with Django for modern web apps.",
      },
      {
        title: "Authentication in Django",
        description:
          "Secure your Django application using built-in auth features.",
      },
    ],
  };

  const tabs = [
    {
      name: "JavaScript",
      key: "javascript",
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    {
      name: "React",
      key: "react",
      icon: <FaReact className="text-blue-500" />,
    },
    {
      name: "Python",
      key: "python",
      icon: <FaPython className="text-green-500" />,
    },
    {
      name: "Django",
      key: "django",
      icon: <FaDatabase className="text-gray-700" />,
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Blog
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts[activeTab].map((post, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              }}
              className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700">{post.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
