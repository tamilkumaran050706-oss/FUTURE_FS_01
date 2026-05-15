import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/tamilkumaran050706-oss',
      icon: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>,
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/tamil-kumaran-11181432a/',
      icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>,
    },
    { 
      name: 'Email', 
      href: 'mailto:tamil.kumaran050706@gmail.com',
      icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    },
  ];

  // Word-by-word animation for heading
  const headingLine1 = "Crafting";
  const headingLine2 = "Experiences";

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.4 + i * 0.12,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.8 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-transparent overflow-hidden"
    >
      {/* Dynamic Background Blobs with Parallax */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-neon-lime/10 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-bright-lime/5 rounded-full blur-[140px] animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-lime/5 rounded-full blur-[100px]"></div>
        {/* Extra ambient orbs */}
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-bright-lime/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 15, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-neon-lime/5 rounded-full blur-[100px]"
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(198,255,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full py-32"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <div className="flex flex-col items-center w-full">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full glass-premium glow-border"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-lime"></span>
              </span>
              <span className="text-gray-muted text-xs font-bold tracking-[0.2em] uppercase">
                Open to Work
              </span>
            </motion.div>

            {/* Main Heading — Cinematic Word Reveal */}
            <div className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]" style={{ perspective: '1000px' }}>
              <div className="overflow-hidden">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block"
                >
                  {headingLine1}{' '}
                </motion.span>
                <motion.span
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-lime via-bright-lime to-neon-lime animate-gradient-x"
                >
                  Digital
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block"
                >
                  {headingLine2}
                </motion.span>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="text-lg sm:text-xl text-gray-muted mb-12 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              Hi, I'm <span className="text-white font-bold">Tamil Kumaran</span> — a Full Stack Developer building modern, performant web applications with clean code and pixel-perfect design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button 
                  whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(198,255,0,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  className="group px-10 py-4 bg-gradient-to-r from-neon-lime to-bright-lime text-black-deep font-bold rounded-full transition-all duration-300 cursor-pointer text-base tracking-tight flex items-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-bright-lime to-neon-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button 
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(21,21,23,0.8)" }}
                  whileTap={{ scale: 0.96 }}
                  className="px-10 py-4 glass-premium text-white font-bold rounded-full transition-all duration-300 cursor-pointer text-base tracking-tight hover:shadow-[0_0_30px_rgba(198,255,0,0.15)]"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links — Staggered Spring */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 justify-center"
            >
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  variants={socialVariants}
                  whileHover={{ y: -4, scale: 1.15, boxShadow: "0 0 20px rgba(198,255,0,0.2)" }}
                  href={social.href}
                  target={social.name !== 'Email' ? "_blank" : undefined}
                  rel={social.name !== 'Email' ? "noreferrer" : undefined}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--glass-bg)] border border-dark-border text-gray-muted hover:text-neon-lime hover:border-neon-lime/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-gray-muted/40 text-[10px] font-bold uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-dark-border flex justify-center pt-2 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-neon-lime"
          ></motion.div>
          {/* Subtle glow trail */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-neon-lime/10 blur-md rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
