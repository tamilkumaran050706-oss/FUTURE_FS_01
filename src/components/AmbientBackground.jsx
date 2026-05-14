import React from 'react';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Gradient Mesh — Drifting Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left sky blob */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full animate-float opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-right violet blob */}
        <div
          className="absolute -bottom-48 -right-48 w-[800px] h-[800px] rounded-full animate-float-slow opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Center mixed blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-float-gentle opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
