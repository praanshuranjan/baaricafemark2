import { useState, useEffect, useRef } from 'react';

interface GateIntroProps {
  onComplete: () => void;
}

const GateIntro = ({ onComplete }: GateIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const starsContainerRef = useRef<HTMLDivElement>(null);

  // Create stars on mount
  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const container = starsContainerRef.current;
    const starCount = 120;
    
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

  useEffect(() => {
    // Start opening animation after a brief pause
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1200);

    // Complete and remove overlay
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-opacity duration-700 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ perspective: '2000px' }}
    >
      {/* Starry Background behind gates */}
      <div className="absolute inset-0 bg-midnight-deep constellation-bg">
        <div ref={starsContainerRef} className="absolute inset-0 overflow-hidden" />
      </div>

      {/* Gate Container */}
      <div className="relative w-full h-full flex">
        {/* Left Door */}
        <div 
          className={`gate-door gate-door-left w-1/2 h-full ${isOpening ? 'gate-open-left' : ''}`}
          style={{ transformOrigin: 'left center' }}
        >
          <div className="relative w-full h-full wood-texture">
            {/* Wood Panels */}
            <div className="absolute inset-4 md:inset-8 flex flex-col gap-2 md:gap-4">
              <div className="flex-1 wood-panel rounded-t-lg" />
              <div className="flex-1 wood-panel" />
              <div className="flex-1 wood-panel rounded-b-lg" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute inset-2 md:inset-6 border-2 border-gold/40 rounded-lg pointer-events-none" />
            
            {/* Hinges */}
            <div className="absolute left-0 top-[15%] w-4 md:w-6 h-10 md:h-14 gate-hinge" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 md:w-6 h-10 md:h-14 gate-hinge" />
            <div className="absolute left-0 bottom-[15%] w-4 md:w-6 h-10 md:h-14 gate-hinge" />
            
            {/* "Baari" text above handle */}
            <div className="absolute right-4 md:right-8 top-[38%] -translate-y-1/2">
              <h2 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold drop-shadow-lg writing-vertical">
                Baari
              </h2>
            </div>
            
            {/* Handle - Right side of left door */}
            <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2">
              <div className="gate-handle w-3 md:w-4 h-16 md:h-24 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Door */}
        <div 
          className={`gate-door gate-door-right w-1/2 h-full ${isOpening ? 'gate-open-right' : ''}`}
          style={{ transformOrigin: 'right center' }}
        >
          <div className="relative w-full h-full wood-texture">
            {/* Wood Panels */}
            <div className="absolute inset-4 md:inset-8 flex flex-col gap-2 md:gap-4">
              <div className="flex-1 wood-panel rounded-t-lg" />
              <div className="flex-1 wood-panel" />
              <div className="flex-1 wood-panel rounded-b-lg" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute inset-2 md:inset-6 border-2 border-gold/40 rounded-lg pointer-events-none" />
            
            {/* Hinges */}
            <div className="absolute right-0 top-[15%] w-4 md:w-6 h-10 md:h-14 gate-hinge" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 md:w-6 h-10 md:h-14 gate-hinge" />
            <div className="absolute right-0 bottom-[15%] w-4 md:w-6 h-10 md:h-14 gate-hinge" />
            
            {/* "Café" text above handle */}
            <div className="absolute left-4 md:left-8 top-[38%] -translate-y-1/2">
              <h2 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold drop-shadow-lg writing-vertical">
                Café
              </h2>
            </div>
            
            {/* Handle - Left side of right door */}
            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2">
              <div className="gate-handle w-3 md:w-4 h-16 md:h-24 rounded-full" />
            </div>
          </div>
        </div>

        {/* Decorative top arch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-48 h-8 md:h-12">
          <div className="w-full h-full gate-arch rounded-b-full" />
        </div>
      </div>

      {/* Skip button */}
      <button 
        onClick={() => {
          setIsComplete(true);
          onComplete();
        }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 font-serif text-gold-light/60 hover:text-gold text-xs tracking-widest uppercase transition-colors z-10"
      >
        Skip
      </button>
    </div>
  );
};

export default GateIntro;
