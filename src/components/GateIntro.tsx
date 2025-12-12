import { useState, useEffect } from 'react';

interface GateIntroProps {
  onComplete: () => void;
}

const GateIntro = ({ onComplete }: GateIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start opening animation after a brief pause
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 800);

    // Complete and remove overlay
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ perspective: '1500px' }}
    >
      {/* Background behind gates */}
      <div className="absolute inset-0 bg-midnight-deep" />

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
            
            {/* Handle - Left side of right door */}
            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2">
              <div className="gate-handle w-3 md:w-4 h-16 md:h-24 rounded-full" />
            </div>
          </div>
        </div>


      </div>

      {/* Skip button */}
      <button 
        onClick={() => {
          setIsComplete(true);
          onComplete();
        }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 font-serif text-gold-light/60 hover:text-gold text-xs tracking-widest uppercase transition-colors"
      >
        Skip
      </button>
    </div>
  );
};

export default GateIntro;
