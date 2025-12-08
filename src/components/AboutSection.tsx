import ownersImage from '@/assets/owners-couple.jpg';
import pastryImage from '@/assets/pastry-closeup.jpg';
import teamImage from '@/assets/cafe-team.jpg';

const AboutSection = () => {
  return (
    <div className="relative">
      <h3 className="font-script text-3xl md:text-4xl text-card-foreground mb-6">
        Our dream, poured daily.
      </h3>
      
      <p className="font-serif text-card-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
        Tucked away in Champa Gali, Baari Cafe is your cozy, starry-night escape. 
        We blend high-end aesthetics with affordable Italian and Continental comfort.
      </p>
      
      <a 
        href="#our-story" 
        className="inline-block font-serif text-sm text-gold-dark hover:text-gold transition-colors duration-300 underline underline-offset-4"
      >
        Explore our story.
      </a>

      {/* Blob Images Layout */}
      <div className="relative mt-8 h-80 md:h-96">
        {/* Hand-drawn connecting line SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M80,80 Q120,100 140,140 Q160,180 180,200 Q200,220 220,250"
            fill="none"
            stroke="hsl(25 30% 35%)"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          />
        </svg>

        {/* Owners Image - Top Left */}
        <div 
          className="absolute top-0 left-0 w-36 h-36 md:w-44 md:h-44 overflow-hidden blob-mask-2 shadow-lg z-20 animate-scale-in"
          style={{ animationDelay: '0.2s' }}
        >
          <img 
            src={ownersImage} 
            alt="Cafe owners" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Pastry Image - Top Right */}
        <div 
          className="absolute top-8 right-4 md:right-8 w-32 h-32 md:w-40 md:h-40 overflow-hidden blob-mask-3 shadow-lg z-20 animate-scale-in"
          style={{ animationDelay: '0.4s' }}
        >
          <img 
            src={pastryImage} 
            alt="Delicious pastry" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Team Image - Bottom Center */}
        <div 
          className="absolute bottom-0 left-8 md:left-12 w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full shadow-lg z-20 animate-scale-in"
          style={{ animationDelay: '0.6s' }}
        >
          <img 
            src={teamImage} 
            alt="Our team" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
