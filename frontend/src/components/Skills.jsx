import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiExpress, SiJavascript, SiVercel
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

const Skills = () => {
  const categories = [
    {
      label: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact className="text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Pure CSS', icon: <FiCode className="text-pink-400" /> },
      ],
    },
    {
      label: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'Java', icon: <FaJava className="text-red-400" /> },
      ],
    },
    {
      label: 'Tools & Workflow',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'Vercel', icon: <SiVercel className="text-white" /> },
        { name: 'EmailJS', icon: <FiCode className="text-blue-300" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build fast, clean websites.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-800/60 border border-gray-700 rounded-xl hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-200 cursor-default"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;