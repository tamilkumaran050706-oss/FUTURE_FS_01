import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import AmbientBackground from './components/AmbientBackground';
import './App.css';

function App() {
  return (
    <div className="App relative overflow-x-hidden">
      <AmbientBackground />
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
