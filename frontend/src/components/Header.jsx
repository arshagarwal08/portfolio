import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { BsFileCode } from 'react-icons/bs';

const Header = () => {
  useEffect(() => {
    const particles = [];
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 8 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.opacity = '0.5';
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.zIndex = '1';
      document.getElementById('particles-container').appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-4 sm:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #111827 100%)' }}
    >
      <div id="particles-container" className="absolute inset-0" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            <span className="text-blue-400">Hi, I'm Arsh —</span>
            <br />
            <TypeAnimation
              sequence={[
                'I build landing pages.',
                1500,
                'I build brand websites.',
                1500,
                'I build for small businesses.',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            />
          </h1>

          <motion.p
            className="text-lg sm:text-xl mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Frontend developer based in Uttarakhand, helping small businesses and brands 
            get online with clean, fast, and professional websites.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#work"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-blue-600 rounded-full group hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-75 transition-all duration-500 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2">
                <BsFileCode />
                View My Work
              </span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white border-2 border-blue-400 rounded-full group hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <span className="relative z-10">Let's Connect</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Tech icons */}
        <motion.div
          className="mt-16 hidden sm:flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[FaReact, SiNextdotjs, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Header;