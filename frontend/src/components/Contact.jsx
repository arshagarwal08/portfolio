import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_TO_ME = import.meta.env.VITE_EMAILJS_TEMPLATE1_ID;
const TEMPLATE_TO_THEM = import.meta.env.VITE_EMAILJS_TEMPLATE2_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Template 1 — notify you
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_TO_ME,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        PUBLIC_KEY
      );

      // Template 2 — auto reply to sender
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_TO_THEM,
        {
          to_name: data.name,
          reply_to: data.email,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
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
            Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
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
                  placeholder=" "
                  className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
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
                  placeholder=" "
                  className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
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
                  placeholder=" "
                  className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                />
                <label className="absolute left-4 -top-3 px-1 bg-gray-800/70 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400">
                  Your Message
                </label>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-400 text-sm text-center"
                >
                  Message sent! I'll get back to you within 24 hours.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 transition-all rounded-lg text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right side info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FiMail className="text-blue-400" />
                Email Me
              </h3>
              <a
                href="mailto:arshagarwal08@gmail.com"
                className="text-blue-400 hover:underline break-all"
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
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all text-sm"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg text-white transition-all text-sm"
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/arshagarwal08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-600/90 hover:bg-yellow-600 rounded-lg text-white transition-all text-sm"
                >
                  <SiLeetcode /> LeetCode
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Let's Build Something</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you need a landing page, a brand site, or something custom — I'm open to projects of all sizes. Let's talk.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;