import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/tamilkumaran050706-oss',
      icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/tamil-kumaran-11181432a/',
      icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' 
    },
    { 
      name: 'Email', 
      href: 'mailto:tamil.kumaran050706@gmail.com',
      icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' 
    },
  ];

  const containerV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
  };

  const itemV = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <footer className="relative bg-transparent pt-20 pb-10 overflow-hidden">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 w-full gradient-line" />

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-neon-lime/3 via-bright-lime/2 to-neon-lime/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-2 tracking-tight">
              TAMIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-bright-lime">KUMARAN</span>
            </h2>
            <p className="text-gray-muted/40 text-[10px] font-bold tracking-[0.4em] uppercase">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemV}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-muted hover:text-neon-lime font-semibold transition-all duration-300 cursor-pointer text-xs tracking-wider uppercase relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-lime group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Links */}
          <motion.div
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-5 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                variants={itemV}
                whileHover={{ y: -4, scale: 1.1, boxShadow: "0 0 20px rgba(198,255,0,0.2)" }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target={social.name !== 'Email' ? "_blank" : undefined}
                rel={social.name !== 'Email' ? "noreferrer" : undefined}
                className="group w-11 h-11 flex items-center justify-center bg-charcoal border border-dark-border rounded-xl transition-all duration-300 hover:border-neon-lime/30 hover:bg-neon-lime/5"
                aria-label={social.name}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-none stroke-current text-gray-muted group-hover:text-neon-lime transition-colors duration-300" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full gradient-line mb-8" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between w-full gap-4"
          >
            <p className="text-gray-muted/40 text-xs font-medium">
              &copy; {currentYear} Tamil Kumaran. All rights reserved.
            </p>
            <p className="text-gray-muted/30 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse"></span>
              Designed & Built with Passion
            </p>
          </motion.div>
        </div>
      </div>

      {/* Back to top */}
      <Link to="hero" smooth={true} duration={800}>
        <motion.button
          whileHover={{ y: -3, boxShadow: "0 0 20px rgba(198,255,0,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-xl bg-charcoal/80 border border-dark-border flex items-center justify-center text-gray-muted hover:text-neon-lime hover:border-neon-lime/30 transition-all duration-300 cursor-pointer z-40 backdrop-blur-xl"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </motion.button>
      </Link>
    </footer>
  );
};

export default Footer;
