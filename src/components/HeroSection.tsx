import heroImage from '@/assets/hero-cafe.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative px-4 md:px-8 pb-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          {/* Hero Image - Compact banner */}
          <img
            src={heroImage}
            alt="Cozy outdoor cafe courtyard at twilight with string lights and swing chairs"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep/70 via-midnight/50 to-midnight-deep/70" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-gold drop-shadow-lg">
              Sip slow, dream deep.
            </h2>
          </div>

          {/* Decorative Frame */}
          <div className="absolute inset-2 border border-gold/20 rounded-lg pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
