import React, { useState, useEffect, useCallback } from 'react';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-700"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default MouseGlow;
