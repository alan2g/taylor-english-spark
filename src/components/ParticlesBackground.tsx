import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full pointer-events-none";
      
      const size = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.5 + 0.1;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${opacity}`;
      particle.style.background = `hsl(182 76% ${50 + Math.random() * 20}%)`;
      particle.style.boxShadow = `0 0 ${size * 2}px hsl(182 76% 63% / 0.5)`;
      particle.style.animation = `particle-float ${duration}s ease-in-out ${delay}s infinite`;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
