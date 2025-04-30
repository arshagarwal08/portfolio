import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaJava  } from 'react-icons/fa';
import { SiJavascript,  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming",
      icon: <FaCode className="text-blue-400" />,
      skills: [
        { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Java", level: 90, icon: <FaJava className="text-red-500" /> },
        { name: "Data Structures & Algorithms", level: 85 }
      ]
    },
    {
      name: "Frontend",
      icon: <FaCode className="text-purple-400" />,
      skills: [
        { name: "React", level: 90, icon: <SiReact className="text-blue-500" /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      name: "Backend",
      icon: <FaServer className="text-green-400" />,
      skills: [
        { name: "Node.js", level: 80, icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-400" /> }
      ]
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-red-400" />,
      skills: [
        { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-700" /> }
      ]
    },
    {
      name: "Tools",
      icon: <FaTools className="text-yellow-400" />,
      skills: [
        { name: "Git & GitHub", level: 75, icon: <SiGit className="text-orange-600" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gray-700 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        {skill.icon && (
                          <span className="mr-2">
                            {skill.icon}
                          </span>
                        )}
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (catIndex * 0.05) + (skillIndex * 0.03) }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
                      />
                    </div>
                  </div>
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