import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
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

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-[#020617] overflow-hidden"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[140px] animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-[1.4] text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full glass"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">
                Open to Work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]"
            >
              Crafting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400 animate-gradient-x">
                Digital
              </span>
              <br />
              Experiences
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-400 mb-12 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Hi, I'm <span className="text-white font-bold">Tamil Kumaran</span> — a Full Stack Developer building modern, performant web applications with clean code and pixel-perfect design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-5 mb-14"
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button 
                  whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(56,189,248,0.25)" }}
                  whileTap={{ scale: 0.96 }}
                  className="group px-10 py-4 bg-sky-400 text-slate-950 font-bold rounded-full transition-all duration-300 cursor-pointer text-base tracking-tight flex items-center gap-3"
                >
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button 
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
                  whileTap={{ scale: 0.96 }}
                  className="px-10 py-4 glass text-white font-bold rounded-full transition-all duration-300 cursor-pointer text-base tracking-tight"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -4, scale: 1.1 }}
                  href={social.href}
                  target={social.name !== 'Email' ? "_blank" : undefined}
                  rel={social.name !== 'Email' ? "noreferrer" : undefined}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="flex-1 relative hidden lg:flex items-center justify-center"
          >
            {/* Glow Ring */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-r from-sky-400/20 to-violet-500/20 blur-[60px] animate-float-slow"></div>
            
            {/* Profile Image */}
            <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(56,189,248,0.15)] z-10">
              <img 
                src={profileImg} 
                alt="Tamil Kumaran" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Orbit Dots */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5 z-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-400/60"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-violet-500/60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-sky-400"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
