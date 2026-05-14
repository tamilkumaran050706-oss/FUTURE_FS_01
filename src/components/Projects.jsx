import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern responsive developer portfolio built using React and Tailwind CSS with premium animations and glassmorphism design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/tamilkumaran050706-oss/FUTURE_FS_01",
      demo: "#",
      gradient: "from-sky-500/30 to-blue-600/30",
      accent: "sky"
    },
    {
      title: "Weather App",
      description: "Weather forecasting application using real-time API integration with responsive UI and dynamic data visualization.",
      tech: ["React", "API", "CSS"],
      github: "#",
      demo: "#",
      gradient: "from-violet-500/30 to-purple-600/30",
      accent: "violet"
    },
    {
      title: "Todo App",
      description: "Task management app with interactive UI, local storage persistence, and smooth micro-interactions.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "#",
      demo: "#",
      gradient: "from-emerald-500/30 to-teal-600/30",
      accent: "emerald"
    },
    {
      title: "Internship Project",
      description: "Professional internship project demonstrating frontend development skills with production-ready code quality.",
      tech: ["React", "Tailwind CSS"],
      github: "#",
      demo: "#",
      gradient: "from-amber-500/30 to-orange-600/30",
      accent: "amber"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="relative py-28 bg-[#020617] overflow-hidden section-separator">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[130px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[130px] -ml-32 -mb-32 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Portfolio</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">Projects</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_rgba(56,189,248,0.08)]"
            >
              {/* Project Preview Area */}
              <div className={`h-56 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors duration-500"></div>
                
                {/* Project Number */}
                <div className="absolute top-6 left-8 text-white/5 font-display text-8xl font-bold select-none group-hover:text-white/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Project Title Watermark */}
                <div className="absolute bottom-6 right-8">
                  <span className="text-white/10 font-display text-2xl font-bold group-hover:text-white/20 transition-colors duration-500">{project.title}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-sky-400/10 via-transparent to-violet-500/10"></div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-bold rounded-full bg-white/5 text-slate-400 border border-white/5 group-hover:border-sky-400/20 group-hover:text-sky-400 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center gap-8">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-white text-sm font-bold transition-all duration-300 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span className="tracking-wider uppercase">Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sky-400 hover:text-violet-400 text-sm font-bold transition-all duration-300 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 22 3 22 10"/><line x1="10" y1="14" x2="22" y2="2"/></svg>
                    <span className="tracking-wider uppercase">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
