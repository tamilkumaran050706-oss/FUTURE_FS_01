import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary pt-20">
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-accent">Tamil Kumaran</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A Full Stack Developer building modern web applications with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default Hero;
