import { Helmet } from 'react-helmet-async';
import StarryBackground from '@/components/StarryBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Baari Café | Champa Gali, South Delhi</title>
        <meta name="description" content="Baari Café - Your cozy, starry-night escape in Champa Gali. Experience high-end bohemian aesthetics with affordable Italian and Continental cuisine." />
      </Helmet>
      
      <div className="relative min-h-screen bg-midnight overflow-hidden">
        {/* Animated Starry Background */}
        <StarryBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <ContentSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
