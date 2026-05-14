import React from 'react';
import profileImg from '../assets/profile.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: '15+', label: 'Technologies' },
    { value: 'React', label: 'Frontend Focus' },
    { value: '∞', label: 'Curiosity' },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#020617] overflow-hidden section-separator">
      {/* Aurora Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] -ml-64 -mb-64 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Introduction</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">Me</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-28">
          {/* Left Side: Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group w-full max-w-md lg:max-w-none"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 group-hover:border-sky-400/20 transition-all duration-700">
              <img 
                src={profileImg} 
                alt="Tamil Kumaran" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70"></div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-sky-400/30 rounded-tl-2xl group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-violet-500/30 rounded-br-2xl group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500"></div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 left-8 z-20 glass p-5 rounded-2xl hidden sm:block"
            >
              <div className="text-sky-400 font-display font-bold text-2xl">Developer</div>
              <div className="text-slate-500 text-xs font-bold tracking-widest uppercase">Focused & Growing</div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-[1.3] text-center lg:text-left"
          >
            <div className="space-y-7">
              <p className="text-xl text-slate-300 leading-relaxed">
                I'm <span className="text-white font-bold">Tamil Kumaran</span>, a passionate Full Stack Web Developer focused on building modern, responsive, and user-friendly web applications.
              </p>
              
              <p className="text-slate-400 leading-relaxed text-lg">
                I enjoy working with <span className="text-sky-400 font-semibold">React</span>, <span className="text-sky-400 font-semibold">JavaScript</span>, and <span className="text-sky-400 font-semibold">Tailwind CSS</span> to create clean and interactive user experiences.
              </p>

              <p className="text-slate-400 leading-relaxed text-lg">
                Currently improving my frontend and backend skills by building real-world projects and continuously learning modern technologies. My goal is to become a professional software developer and contribute to impactful digital solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 mb-12">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.3)" }}
                  className="p-5 rounded-2xl glass text-center group cursor-default"
                >
                  <div className="font-display text-2xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300 mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.button 
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-4 bg-transparent border-2 border-violet-500/50 text-violet-400 font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-violet-400"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </span>
              <div className="absolute inset-0 bg-violet-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
