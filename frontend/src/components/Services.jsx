import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiLayout, FiLayers } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: 'Landing Pages',
      description: 'High-impact single pages designed to grab attention and turn visitors into leads or customers.',
      features: ['Mobile responsive', 'Fast loading', 'Clean modern design', 'Contact / CTA ready'],
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: 'Brand Showcase Sites',
      description: 'Beautiful, minimal sites that tell your brand story and put your products in the spotlight.',
      features: ['Product/service display', 'WhatsApp & email inquiry', 'Brand-matched design', 'No backend needed'],
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: 'Multi-Section Sites',
      description: 'Scrollable single-page sites with multiple sections — ideal for small businesses and personal brands.',
      features: ['Multiple content sections', 'Smooth scroll navigation', 'Fully responsive', 'Easy to update'],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
            What I Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Frontend-focused web solutions for small businesses, brands, and individuals — clean, fast, and built to impress.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 flex flex-col gap-5 shadow-lg hover:border-blue-500/40 hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400">
                {service.icon}
              </div>

              {/* Title & description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Feature list */}
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center w-full py-2.5 rounded-lg border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all text-sm font-medium"
              >
                Let's Talk
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;