import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiZap, FiSmartphone, FiMessageSquare, FiPackage } from 'react-icons/fi';

const About = () => {
  const stats = [
    { value: '2+', label: 'Client Projects' },
    { value: '3+', label: 'Demo Sites' },
    { value: '100%', label: 'Frontend Focused' },
    { value: '∞', label: 'cups of coffee', },
  ];

  const values = [
    {
      icon: <FiZap className="w-5 h-5" />,
      title: 'Fast Delivery',
      desc: 'Clean, functional sites delivered quickly without cutting corners on quality.',
    },
    {
      icon: <FiSmartphone className="w-5 h-5" />,
      title: 'Mobile First',
      desc: 'Every site looks and works great on all screen sizes, from phone to desktop.',
    },
    {
      icon: <FiMessageSquare className="w-5 h-5" />,
      title: 'Direct Communication',
      desc: 'No middlemen. You work directly with me from brief to final delivery.',
    },
    {
      icon: <FiPackage className="w-5 h-5" />,
      title: 'No Bloat',
      desc: 'Only what your business needs — no unnecessary features or complexity.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMCA2MEMxMy40MzEgNjAgMCA0Ni41NjkgMCAzMEMwIDEzLjQzMSAxMy40MzEgMCAzMCAwYzE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMCAwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzB6bTAtNTguMjVjLTE1LjU5MiAwLTI4LjI1IDEyLjY1OC0yOC4yNSAyOC4yNSAwIDE1LjU5MiAxMi42NTggMjguMjUgMjguMjUgMjguMjUgMTUuNTkyIDAgMjguMjUtMTIuNjU4IDI4LjI1LTI4LjI1IDAtMTUuNTkyLTEyLjY1OC0yOC4yNS0yOC4yNS0yOC4yNXoiIGZpbGw9IiMwMDAiIG9wYWNpdHk9Ii4yNSIvPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
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
            A little about who I am and how I work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Who I am */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-4 h-4 bg-blue-500 rounded-full" />
                Who Am I?
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm <span className="text-blue-400 font-medium">Arsh</span>, a frontend developer and
                BTech graduate based in Uttarakhand. I specialize in building clean, fast websites
                for small businesses and brands — from landing pages to full brand showcase sites.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I've worked on real client projects and built demo sites across different niches.
                When I'm not building for clients, I'm upskilling myself in every field.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/30 to-emerald-600/30 p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Let's Work Together</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Have a business that needs a website? Let's talk about what you need and I'll build it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg text-center transition-all text-sm font-medium"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg text-center transition-all flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + Value props */}
          <div className="flex flex-col gap-8">

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Value props */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-4 h-4 bg-emerald-500 rounded-full" />
                Why Work With Me?
              </h3>
              <div className="space-y-5">
                {values.map((val, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                      {val.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{val.title}</div>
                      <div className="text-gray-400 text-sm mt-0.5 leading-relaxed">{val.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
