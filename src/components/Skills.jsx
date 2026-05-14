import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design"],
      color: "from-sky-400 to-blue-500",
      glow: "rgba(56,189,248,0.15)"
    },
    {
      title: "Backend & Core",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      skills: ["Node.js", "Express.js", "REST APIs", "Data Structures", "Algorithms"],
      color: "from-violet-400 to-purple-500",
      glow: "rgba(139,92,246,0.15)"
    },
    {
      title: "Tools & DevOps",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      skills: ["Git & GitHub", "Vite", "NPM / Yarn", "Postman", "Chrome DevTools"],
      color: "from-emerald-400 to-teal-500",
      glow: "rgba(52,211,153,0.15)"
    }
  ];

  const containerV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemV = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
  const skillV = { hidden: { opacity: 0, x: -10 }, visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.3 } }) };

  const onMove = useCallback((e) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width) * 100}%`);
    c.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  return (
    <section id="skills" className="relative py-28 bg-[#020617] overflow-hidden section-separator">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20 text-center">
          <span className="text-violet-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Expertise</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">Stack</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div variants={containerV} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={itemV} whileHover={{ y: -8 }} onMouseMove={onMove}
              className="group relative p-9 rounded-3xl glass-premium card-spotlight glow-border transition-all duration-500"
              style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}>
              <div className="mb-8 p-4 rounded-2xl w-fit relative" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.5))' }}>
                <div className="text-slate-400 group-hover:text-sky-400 transition-colors duration-300">{cat.icon}</div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ background: cat.glow }} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-7 group-hover:text-sky-400 transition-colors duration-300">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <motion.li key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={skillV} className="flex items-center gap-3 text-slate-400 group/item cursor-default">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color} group-hover/item:scale-[2] transition-transform duration-300`} />
                    <span className="text-sm font-medium group-hover/item:text-slate-200 transition-colors duration-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none rounded-3xl" />
              <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(90deg, transparent, ${cat.glow}, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
