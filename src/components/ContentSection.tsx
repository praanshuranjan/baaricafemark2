import AboutSection from './AboutSection';
import MenuSection from './MenuSection';

const ContentSection = () => {
  return (
    <section className="relative bg-parchment paper-texture py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About */}
          <div className="md:pr-8">
            <AboutSection />
          </div>

          {/* Right Column - Menu */}
          <div className="md:pl-8 md:border-l border-gold-dark/20">
            <MenuSection />
          </div>
        </div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-border" />
    </section>
  );
};

export default ContentSection;
