import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  'const Portfolio = {',
  '  name: "Priyanshu",',
  '  role: "Full Stack Developer", "UI & UX',
  '  skills: ["React", "Node.js", "Express", "MongoDB", "Github", "GIT", "UI/UX", "GSAP", "Framer motion"]',
  '  passion: "Creating amazing web experiences"',
  '};',
];

export function CodeScreen() {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!codeRef.current) return;
      
      const { left, top, width, height } = codeRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Limit the rotation to a smaller range
      const rotateX = (y - 0.5) * 15; // Reduced from 30 to 15
      const rotateY = (x - 0.5) * 15; // Reduced from 30 to 15
      
      codeRef.current.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={codeRef}
      className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border shadow-xl transition-transform duration-200 ease-out"
    >
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="font-mono text-sm md:text-base mb-2"
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}