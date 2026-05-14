import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 min-h-screen bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 border-l-4 border-accent pl-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map(i => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="h-64 bg-white/10"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Project Name {i}</h3>
                <p className="text-gray-400 mb-4">A brief description of the amazing project and the technologies used.</p>
                <div className="flex gap-4">
                  <span className="text-accent text-sm font-semibold">React</span>
                  <span className="text-accent text-sm font-semibold">Tailwind</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
