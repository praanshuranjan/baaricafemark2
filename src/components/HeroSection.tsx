import heroImage from '@/assets/hero-cafe.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative px-4 md:px-8 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Cozy outdoor cafe courtyard at twilight with string lights and swing chairs"
            className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/80 via-midnight/30 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 
              className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold mb-4 animate-fade-in-up drop-shadow-lg"
              style={{ animationDelay: '0.2s' }}
            >
              Sip slow,<br />dream deep.
            </h2>
          </div>

          {/* Decorative Frame */}
          <div className="absolute inset-4 border border-gold/30 rounded-sm pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
