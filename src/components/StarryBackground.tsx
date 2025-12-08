import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = 100;
    
    // Clear existing stars
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      
      star.style.position = 'absolute';
      star.style.borderRadius = '50%';
      star.style.backgroundColor = 'hsl(43, 60%, 75%)';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
      star.style.opacity = `${Math.random() * 0.6 + 0.4}`;
      star.style.boxShadow = `0 0 ${size * 2}px hsl(43, 60%, 75%)`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden constellation-bg"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
