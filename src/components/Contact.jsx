import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const contactLinks = [
    { label: 'Email', value: 'tamil.kumaran050706@gmail.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', href: 'mailto:tamil.kumaran050706@gmail.com' },
    { label: 'LinkedIn', value: 'Tamil Kumaran', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', href: 'https://www.linkedin.com/in/tamil-kumaran-11181432a/' },
    { label: 'GitHub', value: 'tamilkumaran050706-oss', icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2', href: 'https://github.com/tamilkumaran050706-oss' }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        const errorMsg = data.errors ? data.errors.map(err => err.message).join(', ') : data.message;
        setStatus({ loading: false, success: false, error: errorMsg || 'Failed to send message' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Network error. Please make sure the backend is running.' });
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-lime/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }} 
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }} 
          className="mb-20 text-center"
        >
          <span className="text-neon-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Contact</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-bright-lime">Touch</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-neon-lime to-bright-lime mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }} 
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} 
            className="flex-1 space-y-8"
          >
            <div className="mb-10">
              <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">
                Let's build something <span className="text-neon-lime">extraordinary</span>.
              </h3>
              <p className="text-gray-muted text-lg leading-relaxed">
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 p-5 rounded-2xl glass-premium card-spotlight group transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,255,0,0.05)]"
                  style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-neon-lime/10 text-neon-lime group-hover:bg-neon-lime group-hover:text-black-deep transition-all duration-300 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(198,255,0,0.3)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-muted text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-sm truncate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-[1.3] p-8 lg:p-10 rounded-3xl glass-premium relative overflow-hidden animated-border"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon-lime/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-bright-lime/5 blur-[60px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-gray-muted text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-neon-lime transition-colors duration-300">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-[var(--glass-bg)] border border-dark-border rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-800 focus:outline-none focus:border-neon-lime/50 glow-focus transition-all duration-300" />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-gray-muted text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-neon-lime transition-colors duration-300">Email</label>
                  <input type="email" id="email" placeholder="Your email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-[var(--glass-bg)] border border-dark-border rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-800 focus:outline-none focus:border-neon-lime/50 glow-focus transition-all duration-300" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label htmlFor="subject" className="text-gray-muted text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-neon-lime transition-colors duration-300">Subject</label>
                <input type="text" id="subject" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} required
                  className="w-full bg-[var(--glass-bg)] border border-dark-border rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-800 focus:outline-none focus:border-neon-lime/50 glow-focus transition-all duration-300" />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="message" className="text-gray-muted text-[10px] font-bold uppercase tracking-widest ml-1 group-focus-within:text-neon-lime transition-colors duration-300">Message</label>
                <textarea id="message" rows="4" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required
                  className="w-full bg-[var(--glass-bg)] border border-dark-border rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-slate-800 focus:outline-none focus:border-neon-lime/50 glow-focus transition-all duration-300 resize-none" />
              </div>

              <AnimatePresence>
                {status.success && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 rounded-xl bg-neon-lime/10 border border-neon-lime/20 text-neon-lime text-sm font-bold text-center">
                    Message sent successfully!
                  </motion.div>
                )}
                {status.error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold text-center">
                    {status.error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status.loading}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(198,255,0,0.25)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 bg-gradient-to-r from-neon-lime to-bright-lime text-black-deep font-bold rounded-xl transition-all duration-300 text-sm tracking-wider uppercase flex items-center justify-center gap-3 relative overflow-hidden group ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status.loading ? 'Sending...' : 'Send Message'}
                  {!status.loading && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-bright-lime to-neon-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
