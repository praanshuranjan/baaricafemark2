import { useState, useEffect } from 'react';
import StarryBackground from './StarryBackground';
import Ornament from './Ornament';

interface CurtainIntroProps {
  onComplete: () => void;
}

const CurtainIntro = ({ onComplete }: CurtainIntroProps) => {
  const [phase, setPhase] = useState<'initial' | 'revealing' | 'transitioning' | 'complete'>('initial');

  useEffect(() => {
    // Check if user has seen intro before
    const hasSeenIntro = sessionStorage.getItem('baari-intro-seen');
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    // Phase 1: Show logo with glow (0-1.5s)
    const revealTimer = setTimeout(() => {
      setPhase('revealing');
    }, 1500);

    // Phase 2: Curtains lift (1.5-3s)
    const transitionTimer = setTimeout(() => {
      setPhase('transitioning');
    }, 3000);

    // Phase 3: Logo moves to header (3-4.5s)
    const completeTimer = setTimeout(() => {
      setPhase('complete');
      sessionStorage.setItem('baari-intro-seen', 'true');
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('complete');
    sessionStorage.setItem('baari-intro-seen', 'true');
    onComplete();
  };

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-midnight">
        <StarryBackground />
      </div>

      {/* Top Curtain */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 curtain-texture transition-transform duration-1000 ease-in-out ${
          phase === 'revealing' || phase === 'transitioning' ? 'curtain-lift-up' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight/95" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-gold/20 to-gold/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/60" />
      </div>

      {/* Bottom Curtain */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 curtain-texture transition-transform duration-1000 ease-in-out ${
          phase === 'revealing' || phase === 'transitioning' ? 'curtain-lift-down' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight to-midnight/95" />
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-t from-transparent via-gold/20 to-gold/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold/60" />
      </div>

      {/* Centered Logo */}
      <div
        className={`fixed z-[101] flex flex-col items-center justify-center pointer-events-none ${
          phase === 'transitioning' ? 'logo-to-header' : 'logo-centered'
        }`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <Ornament className={`w-8 h-8 md:w-12 md:h-12 text-gold transition-all duration-500 ${
            phase === 'transitioning' ? 'scale-50 opacity-80' : ''
          }`} />
          <h1
            className={`font-script tracking-wide text-gold transition-all duration-500 ${
              phase === 'initial' ? 'text-5xl md:text-7xl lg:text-8xl animate-text-glow' : ''
            } ${
              phase === 'revealing' ? 'text-5xl md:text-7xl lg:text-8xl' : ''
            } ${
              phase === 'transitioning' ? 'text-2xl md:text-3xl' : ''
            }`}
          >
            Baari Café
          </h1>
          <Ornament className={`w-8 h-8 md:w-12 md:h-12 text-gold rotate-180 transition-all duration-500 ${
            phase === 'transitioning' ? 'scale-50 opacity-80' : ''
          }`} />
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="fixed bottom-8 right-8 z-[102] px-4 py-2 text-sm text-gold/60 hover:text-gold border border-gold/30 hover:border-gold/60 rounded-full transition-all duration-300 bg-midnight/50 backdrop-blur-sm"
      >
        Skip
      </button>
    </div>
  );
};

export default CurtainIntro;
