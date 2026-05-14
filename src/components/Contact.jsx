import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactLinks = [
    { label: 'Email', value: 'tamil.kumaran050706@gmail.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', href: 'mailto:tamil.kumaran050706@gmail.com' },
    { label: 'LinkedIn', value: 'Tamil Kumaran', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', href: 'https://www.linkedin.com/in/tamil-kumaran-11181432a/' },
    { label: 'GitHub', value: 'tamilkumaran050706-oss', icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2', href: 'https://github.com/tamilkumaran050706-oss' }
  ];

  const onSpotlight = useCallback((e) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width) * 100}%`);
    c.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  return (
    <section id="contact" className="relative py-28 bg-[#020617] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20 text-center">
          <span className="text-violet-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Contact</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">Touch</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-1 space-y-8">
            <div className="mb-10">
              <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">
                Let's build something <span className="text-sky-400">extraordinary</span>.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 8 }}
                  onMouseMove={onSpotlight}
                  className="flex items-center gap-5 p-5 rounded-2xl glass-premium card-spotlight group transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.05)]"
                  style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950 transition-all duration-300 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-sm truncate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-[1.3] p-8 lg:p-10 rounded-3xl glass-premium relative overflow-hidden animated-border"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/5 blur-[60px] pointer-events-none" />

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-sky-400 transition-colors duration-300">Full Name</label>
                  <input type="text" id="name" placeholder="Your name"
                    className="w-full bg-[rgba(15,23,42,0.7)] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/50 glow-focus transition-all duration-300" />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-sky-400 transition-colors duration-300">Email</label>
                  <input type="email" id="email" placeholder="Your email"
                    className="w-full bg-[rgba(15,23,42,0.7)] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/50 glow-focus transition-all duration-300" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label htmlFor="subject" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-sky-400 transition-colors duration-300">Subject</label>
                <input type="text" id="subject" placeholder="Project inquiry"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/50 glow-focus transition-all duration-300" />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="message" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-sky-400 transition-colors duration-300">Message</label>
                <textarea id="message" rows="4" placeholder="Tell me about your project..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/50 glow-focus transition-all duration-300 resize-none" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(56,189,248,0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-bold rounded-xl transition-all duration-300 text-sm tracking-wider uppercase flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
