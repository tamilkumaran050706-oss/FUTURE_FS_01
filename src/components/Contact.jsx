import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 min-h-screen flex items-center bg-[#111a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a 
          href="mailto:contact@example.com" 
          className="inline-block bg-accent hover:bg-accent/80 text-primary font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
