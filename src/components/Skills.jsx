import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 min-h-screen bg-[#111a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 border-l-4 border-accent pl-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'JavaScript', 'TypeScript', 'Vite', 'Git'].map(skill => (
            <div key={skill} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors text-center">
              <span className="text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
