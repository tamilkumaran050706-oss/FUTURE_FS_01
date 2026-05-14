import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpeg';
import { motion, useInView } from 'framer-motion';

// Animated counter hook
const useCounter = (end, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  const isNumber = !isNaN(parseInt(end));
  
  useEffect(() => {
    if (!inView || !isNumber) return;
    const target = parseInt(end);
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView, isNumber]);

  if (!isNumber) return end;
  return count + (end.toString().includes('+') ? '+' : '');
};

const StatCard = ({ stat, idx }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const displayValue = useCounter(stat.value, 1500, isInView);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * idx, duration: 0.4 }}
      whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.25)" }}
      className="p-5 rounded-2xl glass-premium text-center group cursor-default card-spotlight glow-border"
    >
      <div className="font-display text-2xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300 mb-1">{displayValue}</div>
      <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: '15+', label: 'Technologies' },
    { value: 'React', label: 'Frontend Focus' },
    { value: '∞', label: 'Curiosity' },
  ];

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

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
            {/* Animated gradient border ring */}
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] border-2 border-transparent group-hover:border-transparent transition-all duration-700" style={{ background: 'linear-gradient(#020617, #020617) padding-box' }}>
              {/* Animated border glow */}
              <div className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(56,189,248,0.4), rgba(139,92,246,0.4), rgba(56,189,248,0.1), rgba(139,92,246,0.4), rgba(56,189,248,0.4))',
                  animation: 'border-rotate 4s linear infinite',
                }}
              />
              <img 
                src={profileImg} 
                alt="Tamil Kumaran" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 rounded-3xl"></div>
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
            </div>

            {/* Decorative Corners */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-sky-400/20 rounded-tl-2xl group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-violet-500/20 rounded-br-2xl group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500"></div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 left-8 z-20 glass-premium p-5 rounded-2xl hidden sm:block animate-float-gentle"
            >
              <div className="text-sky-400 font-display font-bold text-2xl">Developer</div>
              <div className="text-slate-400 text-xs font-bold tracking-widest uppercase">Focused & Growing</div>
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
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-7"
            >
              <motion.p variants={paragraphVariants} className="text-xl text-slate-300 leading-relaxed">
                I'm <span className="text-white font-bold">Tamil Kumaran</span>, a passionate Full Stack Web Developer focused on building modern, responsive, and user-friendly web applications.
              </motion.p>
              
              <motion.p variants={paragraphVariants} className="text-slate-400 leading-relaxed text-lg">
                I enjoy working with <span className="text-sky-400 font-semibold">React</span>, <span className="text-sky-400 font-semibold">JavaScript</span>, and <span className="text-sky-400 font-semibold">Tailwind CSS</span> to create clean and interactive user experiences.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-slate-400 leading-relaxed text-lg">
                Currently improving my frontend and backend skills by building real-world projects and continuously learning modern technologies. My goal is to become a professional software developer and contribute to impactful digital solutions.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 mb-12">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} idx={idx} />
              ))}
            </div>

            {/* Resume Button */}
            <motion.button 
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(139, 92, 246, 0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-4 bg-transparent border-2 border-violet-500/30 text-violet-400 font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-violet-400"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-400"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
