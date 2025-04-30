import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApi } from '../context/ApiContext';
import axios from 'axios';
import { FiSend, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const { baseUrl } = useApi();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(baseUrl + "/contact", data);
      if (response.data.success) {
        setData({
          name: "",
          email: "",
          message: "",
        });
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error" + error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to connect? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-3 px-1 bg-gray-800/70 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-3 px-1 bg-gray-800/70 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  rows="5"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-4 -top-3 px-1 bg-gray-800/70 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 transition-all rounded-lg text-white font-semibold flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <FiMail className="mr-3 text-blue-400" />
                Email Me
              </h3>
              <a
                href="mailto:arshagarwal08@gmail.com"
                className="text-xl text-blue-400 hover:underline break-all"
              >
                arshagarwal08@gmail.com
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Find Me Online</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all"
                >
                  <FiGithub className="mr-2" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg text-white transition-all"
                >
                  <FiLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-yellow-600/90 hover:bg-yellow-600 rounded-lg text-white transition-all"
                >
                  <SiLeetcode className="mr-2" /> LeetCode
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300">
                Whether you have a project idea, need consultation, or just want to connect,
                I'm always open to interesting conversations and collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;