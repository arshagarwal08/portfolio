import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useApi } from '../context/ApiContext';
import axios from 'axios';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython } from 'react-icons/si';

const Projects = () => {
  const { baseUrl } = useApi();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(baseUrl + "/project");
        if (response.data.success) {
          setProjects(response.data.data);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Some error occurred");
      }
    };

    fetchProjects();
  }, [baseUrl]);

  const techIcons = {
    'React': <SiReact className="text-blue-400" />,
    'Node.js': <SiNodedotjs className="text-green-500" />,
    'MongoDB': <SiMongodb className="text-green-600" />,
    'JavaScript': <SiJavascript className="text-yellow-400" />,
    'Python': <SiPython className="text-blue-500" />
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of my work showcasing problem-solving and technical skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setFeaturedProject(project)}
            >
              <ProjectCard 
                {...project} 
                className="cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/20"
              />
            </motion.div>
          ))}
        </motion.div>

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h4 className="text-xl text-gray-400">No projects to display yet</h4>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;