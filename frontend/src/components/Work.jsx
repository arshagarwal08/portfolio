import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Work = () => {
  const works = [
    {
      title: 'Kaya Comfort',
      type: 'Brand Showcase Site',
      description:
        'A B2B brand website for a premium textile company supplying towels, bedsheets, and pillows to hotels across Uttarakhand. Focused on clean presentation and direct inquiry via WhatsApp and email.',
      tech: ['Next.js', 'Pure CSS', 'EmailJS'],
      liveUrl: 'https://kaya-comfort.vercel.app',
      imageUrl: 'https://placehold.co/600x340/1f2937/60a5fa?text=Kaya+Comfort',
      status: 'In Progress',
    },
    {
      title: 'Hotel Demo Site',
      type: 'Landing Page',
      description:
        'A premium hotel landing page built as a demo showcasing what a hospitality brand website can look like — elegant design, smooth sections, and a strong visual identity.',
      tech: ['Next.js', 'Pure CSS'],
      liveUrl: '#',
      imageUrl: 'https://placehold.co/600x340/1f2937/60a5fa?text=Hotel+Demo',
      status: 'Coming Soon',
    },
  ];

  return (
    <section
      id="work"
      className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

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
            My Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Client projects and demo sites — real builds that showcase what I can deliver.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/40 hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border ${
                    work.status === 'Live'
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                      : work.status === 'In Progress'
                      ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                      : 'bg-gray-500/20 border-gray-500/40 text-gray-400'
                  }`}
                >
                  {work.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Type tag */}
                <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">
                  {work.type}
                </span>

                {/* Title & description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{work.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{work.description}</p>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {work.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700/80 border border-gray-600 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    work.liveUrl === '#'
                      ? 'border-gray-600 text-gray-500 cursor-not-allowed'
                      : 'border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400'
                  }`}
                  onClick={(e) => work.liveUrl === '#' && e.preventDefault()}
                >
                  <FiExternalLink size={15} />
                  {work.liveUrl === '#' ? 'Coming Soon' : 'View Live Site'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;