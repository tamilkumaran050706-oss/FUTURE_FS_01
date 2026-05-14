import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-sky-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <a 
            href="mailto:tamil.kumaran050706@gmail.com" 
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-sky-400 text-[#0f172a] font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>tamil.kumaran050706@gmail.com</span>
          </a>

          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/tamilkumaran050706-oss" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="font-medium">GitHub</span>
            </a>
            <div className="w-[1px] h-6 bg-white/10"></div>
            <a 
              href="https://www.linkedin.com/in/tamil-kumaran-11181432a/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Contact;
