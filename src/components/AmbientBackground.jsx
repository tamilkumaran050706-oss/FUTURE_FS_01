import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AmbientBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Create subtle parallax offsets for different blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Gradient Mesh — Drifting Blobs with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left sky blob */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full animate-float opacity-30 blur-[100px]"
          style={{
            y: y1,
            background: 'radial-gradient(circle, rgba(198,255,0,0.05) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-right violet blob */}
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-48 -right-48 w-[800px] h-[800px] rounded-full animate-float-slow opacity-30 blur-[120px]"
          style={{
            y: y2,
            background: 'radial-gradient(circle, rgba(215,255,74,0.04) 0%, transparent 70%)',
          }}
        />
        {/* Center mixed blob */}
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-float-gentle opacity-20 blur-[80px]"
          style={{
            y: y3,
            background: 'radial-gradient(circle, rgba(198,255,0,0.03) 0%, rgba(215,255,74,0.02) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(198,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
