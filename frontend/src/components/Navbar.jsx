import React, { useState, useEffect, useRef } from 'react';
import { IoMdClose } from "react-icons/io";
import { LuAlignJustify } from "react-icons/lu";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const isScrolling = useRef(false);

  const navItems = ['home', 'about', 'services', 'work', 'projects', 'skills', 'contact'];

  useEffect(() => {
    const header = document.querySelector('header');
    setNavbarHeight(header?.offsetHeight || 80);
    
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      const scrollPosition = window.scrollY + navbarHeight;
      
      for (const section of navItems) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  const scrollToSection = (id) => {
    isScrolling.current = true;
    const section = document.getElementById(id);
    if (section) {
      const currentNavbarHeight = document.querySelector('header')?.offsetHeight || navbarHeight;
      const sectionPosition = section.offsetTop - currentNavbarHeight;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setIsOpen(false);
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Arsh Agarwal
        </motion.button>

        <div className="hidden lg:flex gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeSection === item
                  ? 'text-white bg-gray-700/50'
                  : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoMdClose size={24} /> : <LuAlignJustify size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute w-full bg-gray-800/95 backdrop-blur-md"
          >
            <ul className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all ${
                      activeSection === item
                        ? 'text-white bg-gray-700'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;