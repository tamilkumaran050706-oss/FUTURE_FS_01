import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: 'M12 2L2 5l1.6 12.6L12 22l8.4-4.4L22 5L12 2zm6 15.5l-6 3.3-6-3.3V6.3l6-2 6 2v11.2zM12 7l-4 1.3v3.4l4 1.3 4-1.3V8.3L12 7z' },
        { name: 'CSS3', icon: 'M12 2L2 5l1.6 12.6L12 22l8.4-4.4L22 5L12 2zm6 15.5l-6 3.3-6-3.3V6.3l6-2 6 2v11.2z' },
        { name: 'JavaScript', icon: 'M3 3h18v18H3V3zm15.4 15.4c-.4.5-1.1.9-2.1 1.1s-2.1.3-3.2.1v-2.3c.5.1 1 .2 1.4.2s.8-.1 1-.3.3-.4.3-.7v-5.4h2.6v5.4c0 .8-.2 1.4-.6 1.9zm-4.7-1.1c-.5.6-1.3 1-2.4 1.2-1.1.2-2.1.2-3.1 0-.8-.1-1.4-.4-1.9-.8s-.8-1-1-1.6l2.1-1.3c.1.4.3.7.6.9s.6.3 1 .3.7-.1.9-.3.3-.4.3-.7c0-.2-.1-.5-.2-.6s-.4-.3-.8-.5-1-.4-1.6-.7-1.1-.6-1.5-1-.6-.9-.6-1.5c0-.7.3-1.4.8-1.9.6-.5 1.4-.8 2.3-1 .9-.2 1.7-.1 2.5.1.7.1 1.2.4 1.7.8.5.4.8.9 1 1.5l-2 1.2c-.1-.3-.3-.6-.5-.7-.2-.2-.5-.3-.9-.3-.4 0-.7.1-.9.2s-.3.3-.3.6c0 .2.1.4.2.5.1.1.4.3.8.4.4.2.9.4 1.5.6.6.2 1.1.5 1.5.9.4.4.6.9.6 1.6-.1.8-.4 1.4-1 1.9z' },
        { name: 'React', icon: 'M12 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-11c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z' },
        { name: 'Tailwind CSS', icon: 'M12 7.5c-2.3 0-3.7 1.1-4.5 3.4 1.1-1.1 2.2-1.5 3.4-1.1 1.1.4 1.5 1.5 1.1 3.4-.4 1.9-1.5 3.4-3.4 4.5 1.1 1.1 2.2 1.5 3.4 1.1 1.1-.4 1.5-1.5 1.1-3.4.4-1.9 1.5-3.4 3.4-4.5-1.1-1.1-2.2-1.5-3.4-1.1-1.1.4-1.5 1.5-1.1 3.4.4 1.1 1.5 1.5 3.4 1.1 2.3 0 3.7-1.1 4.5-3.4-1.1 1.1-2.2 1.5-3.4 1.1-.4-.2-.8-.2-1.1-.2z' },
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git', icon: 'M22.6 11.5L12.5 1.4c-.5-.5-1.3-.5-1.8 0L9.1 3c-.1-.1-.2-.2-.3-.2l-.6-.6c-.5-.5-1.3-.5-1.8 0L1.4 7.2c-.5.5-.5 1.3 0 1.8l10.1 10.1c.5.5 1.3.5 1.8 0l1.6-1.6c.1.1.2.2.3.2l.6.6c.5.5 1.3.5 1.8 0l5-5c.5-.5.5-1.3 0-1.8z M12.5 15c-.6.6-1.5.6-2.1 0L4.3 8.9c-.6-.6-.6-1.5 0-2.1l2.1-2.1c.6-.6 1.5-.6 2.1 0l6.1 6.1c.6.6.6 1.5 0 2.1l-2.1 2.1z' },
        { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z' },
        { name: 'VS Code', icon: 'M23.5 15.4l-3.2-2.5 3.2-2.5c.3-.2.4-.6.2-.9l-1.5-2.5c-.2-.3-.6-.4-.9-.2l-5.1 2.6V6.1c0-.4-.3-.7-.7-.7H13c-.4 0-.7.3-.7.7v3.3l-5.1-2.6c-.3-.2-.7-.1-.9.2L4.8 9.5c-.2.3-.1.7.2.9l3.2 2.5-3.2 2.5c-.3.2-.4.6-.2.9l1.5 2.5c.2.3.6.4.9.2l5.1-2.6v3.3c0 .4.3.7.7.7h2.5c.4 0 .7-.3.7-.7v-3.3l5.1 2.6c.3.2.7.1.9-.2l1.5-2.5c.2-.3.1-.7-.2-.9z' },
      ]
    },
    {
      title: 'Currently Learning',
      skills: [
        { name: 'Node.js', icon: 'M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8 13.5l-8 4.4-8-4.4v-7.1l8-4.4 8 4.4v7.1z M12 6.5l-5 2.7v5.6l5 2.7 5-2.7V9.2l-5-2.7z' },
        { name: 'Express.js', icon: 'M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8 13.5l-8 4.4-8-4.4v-7.1l8-4.4 8 4.4v7.1z' },
        { name: 'MySQL', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sky-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1.5 bg-sky-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Technologies I work with to build modern, scalable, and user-centric web applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="text-sky-400">#</span>
                {category.title}
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)", boxShadow: "0 10px 30px rgba(56, 189, 248, 0.1)" }}
                    className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-300">
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-10 h-10 fill-current" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={skill.icon} />
                        </svg>
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Subtle Bottom Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-sky-400 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
