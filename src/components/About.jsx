import React from 'react';
import profileImg from '../assets/profile.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Projects Built', value: '10+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '💻' },
    { label: 'Frontend Focus', value: 'React', icon: '🎨' },
    { label: 'Continuous', value: 'Learner', icon: '📚' },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 text-center lg:text-left"
        >
          <span className="text-sky-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get to know me</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">About Me</h2>
          <div className="w-20 h-1.5 bg-sky-400 mt-6 rounded-full mx-auto lg:mx-0"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative group w-full max-w-md lg:max-w-none"
          >
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
              <img 
                src={profileImg} 
                alt="Tamil Kumaran" 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-sky-400/50 rounded-tl-3xl group-hover:-top-4 group-hover:-left-4 transition-all duration-300"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-sky-400/50 rounded-br-3xl group-hover:-bottom-4 group-hover:-right-4 transition-all duration-300"></div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-10 left-10 z-20 bg-[#1e293b] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl hidden sm:block"
            >
              <div className="text-sky-400 font-black text-3xl mb-1">Developer</div>
              <div className="text-gray-400 text-xs font-bold tracking-widest uppercase">Focus & Growth</div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.2] text-center lg:text-left"
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 font-light">
              I’m <span className="text-white font-bold">Tamil Kumaran</span>, a passionate Full Stack Web Developer focused on building modern, responsive, and user-friendly web applications.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              I enjoy working with <span className="text-sky-400 font-medium">React</span>, <span className="text-sky-400 font-medium">JavaScript</span>, and <span className="text-sky-400 font-medium">Tailwind CSS</span> to create clean and interactive user experiences.
            </p>

            <p className="text-gray-400 leading-relaxed mb-12 text-lg">
              Currently, I am improving my frontend and backend development skills by building real-world projects and continuously learning modern technologies. My goal is to become a professional software developer and contribute to impactful digital solutions.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)" }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 group text-left"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-white font-bold text-xl mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-transparent border-2 border-sky-400 text-sky-400 font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:text-[#0f172a]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </span>
              <div className="absolute inset-0 bg-sky-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
