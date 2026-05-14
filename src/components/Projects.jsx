import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern responsive developer portfolio built using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/tamilkumaran050706-oss/FUTURE_FS_01",
      demo: "#",
      image: "bg-gradient-to-br from-sky-500/20 to-blue-600/20"
    },
    {
      title: "Weather App",
      description: "Weather forecasting application using API integration and responsive UI.",
      tech: ["React", "API", "CSS"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-blue-500/20 to-indigo-600/20"
    },
    {
      title: "Todo App",
      description: "Task management app with interactive UI and local storage functionality.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20"
    },
    {
      title: "Internship Project",
      description: "Professional internship task project demonstrating frontend development skills.",
      tech: ["React", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sky-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Projects</h2>
          <div className="w-24 h-1.5 bg-sky-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Some of my recent work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-sky-400/30 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)]"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-64 w-full ${project.image} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <h3 className="text-3xl font-black text-white/10 group-hover:text-sky-400/20 transition-colors duration-500 select-none text-center px-4">
                  {project.title}
                </h3>
                
                {/* Floating Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-sky-400/10 via-transparent to-blue-400/10"></div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-sky-400/10 text-sky-400 text-xs font-bold rounded-full border border-sky-400/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 font-light min-h-[60px]">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white font-bold transition-all duration-300 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 font-bold transition-all duration-300 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:scale-110 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 22 3 22 10"/><line x1="10" y1="14" x2="22" y2="2"/></svg>
                    <span>Live Demo</span>
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
