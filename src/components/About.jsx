import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-accent pl-4">About Me</h2>
        <div className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          <p className="mb-4">
            I am a dedicated full stack developer with a strong foundation in modern web technologies. 
            I love creating intuitive and performance-driven user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
