import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        setIsOpen(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.06, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.15 } }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? 'glass backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-x-0 border-t-0'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top gradient line when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full gradient-line transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className={`max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group">
            <Link to="hero" smooth={true} duration={500}>
              <h1 className="text-2xl font-black text-white tracking-tighter">
                TAMIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-bright-lime group-hover:from-bright-lime group-hover:to-neon-lime transition-all duration-500">KUMARAN</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                  className="nav-link text-gray-muted hover:text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer relative group"
                >
                  {link.name}
                  <span className="nav-underline absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-lime to-bright-lime transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-2.5 bg-charcoal border border-dark-border rounded-full text-white text-sm font-bold hover:bg-neon-lime/10 hover:border-neon-lime/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(198,255,0,0.2)] cursor-pointer overflow-hidden group"
                >
                  <span className="relative z-10">Hire Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-lime/0 via-neon-lime/10 to-neon-lime/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black-deep/95 backdrop-blur-2xl border-b border-dark-border overflow-hidden"
          >
            <div className="px-6 pt-4 pb-10 space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="text-neon-lime bg-charcoal border-neon-lime"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-muted hover:text-white block px-4 py-5 text-lg font-bold transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-neon-lime hover:bg-neon-lime/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
