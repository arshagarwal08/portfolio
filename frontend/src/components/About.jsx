import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaCode } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <SiReact className="w-8 h-8" />, tech: 'React, Tailwind' },
    { name: 'Backend', icon: <SiNodedotjs className="w-8 h-8" />, tech: 'Node.js, Express, APIs' },
    { name: 'Database', icon: <SiMongodb className="w-8 h-8" />, tech: 'MongoDB, MySQL' },
    { name: 'Languages', icon: <FaCode className="w-8 h-8" />, tech: 'JAVA, JavaScript, Python' },
  ];

  const timeline = [
    { year: '2023 August', event: 'Started coding with Java' },
    { year: '2024', event: 'Mastered DSA fundamentals' },
    { year: '2024 December', event: 'Started web development' },
    { year: '2025 March', event: 'Built first MERN stack app' },
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMCA2MEMxMy40MzEgNjAgMCA0Ni41NjkgMCAzMEMwIDEzLjQzMSAxMy40MzEgMCAzMCAwYzE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMCAwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzB6bTAtNTguMjVjLTE1LjU5MiAwLTI4LjI1IDEyLjY1OC0yOC4yNSAyOC4yNSAwIDE1LjU5MiAxMi42NTggMjguMjUgMjguMjUgMjguMjUgMTUuNTkyIDAgMjguMjUtMTIuNjU4IDI4LjI1LTI4LjI1IDAtMTUuNTkyLTEyLjY1OC0yOC4yNS0yOC4yNS0yOC4yNXoiIGZpbGw9IiMwMDAiIG9wYWNpdHk9Ii4yNSIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack developer specializing in modern web technologies with a passion for solving complex problems through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Who Am I?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm <span className="text-blue-400">Arsh</span>, a developer who thrives at the intersection of creativity and logic. With expertise in both frontend aesthetics and backend architecture, I build seamless digital experiences.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me solving DSA challenges, or exploring new tech stacks to expand my toolkit.
              </p>
            </motion.div>

            {/* Skills cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/70 hover:bg-gray-800/90 p-4 rounded-lg border border-gray-700 transition-all cursor-default"
                >
                  <div className="text-blue-400 mb-2">{skill.icon}</div>
                  <h4 className="font-medium text-white">{skill.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{skill.tech}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <div>
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-4 h-4 bg-emerald-500 rounded-full mr-3"></span>
                My Journey
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-5 top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-blue-200"></div>
                    <div className="text-blue-300 font-medium">{item.year}</div>
                    <p className="text-gray-300 mt-1">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Let's Work Together</h4>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind or just want to connect, I'm always open to new opportunities and conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg text-center transition-all flex items-center justify-center"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg text-center transition-all flex items-center justify-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1NQcUY3f8JqjVfJcAdaR6RsziFGpqStfU/view?usp=drive_link"
                download
                className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;