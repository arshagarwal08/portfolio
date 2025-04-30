import React from 'react';
import { motion } from 'framer-motion';
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/in/arshagarwal08",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/arshagarwal08",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <CgMail size={20} />,
      href: "mailto:arshagarwal08@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: <SiLeetcode size={20} />,
      href: "https://leetcode.com/arshagarwal08",
      label: "LeetCode",
      color: "hover:text-yellow-400"
    },
    {
      icon: <SiGeeksforgeeks size={20} />,
      href: "https://auth.geeksforgeeks.org/user/arshagapp37",
      label: "GeeksforGeeks",
      color: "hover:text-green-400"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-400 pt-12 pb-8 px-4 border-t border-transparent">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500"></div>
      
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-8">
          
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${link.color} transition-all hover:shadow-lg`}
                aria-label={link.label}
                whileHover={{ y: -5 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500"
          >
            &copy; {new Date().getFullYear()} Arsh Agarwal. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-xs text-gray-600 mt-2"
          >
            Built with React and Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;