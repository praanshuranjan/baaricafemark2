import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import StarryBackground from '@/components/StarryBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FullMenu from '@/components/menu/FullMenu';
import Footer from '@/components/Footer';
import GateIntro from '@/components/GateIntro';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleGateComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Baari Café Menu | Champa Gali, South Delhi</title>
        <meta name="description" content="Explore the full menu at Baari Café in Champa Gali. Italian, Continental, Chinese cuisine with coffees, shakes, and more. Sip slow, dream deep." />
      </Helmet>
      
      {/* Gate Intro Animation */}
      <GateIntro onComplete={handleGateComplete} />
      
      <div className="relative min-h-screen bg-midnight overflow-hidden">
        {/* Animated Starry Background */}
        <StarryBackground />
        
        {/* Main Content */}
        <div className={`relative z-10 transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Header />
          <main className="pt-24">
            <HeroSection />
            <FullMenu />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
