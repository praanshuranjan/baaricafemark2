import { Helmet } from 'react-helmet-async';
import StarryBackground from '@/components/StarryBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FullMenu from '@/components/menu/FullMenu';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Baari Café Menu | Champa Gali, South Delhi</title>
        <meta name="description" content="Explore the full menu at Baari Café in Champa Gali. Italian, Continental, Chinese cuisine with coffees, shakes, and more. Sip slow, dream deep." />
      </Helmet>
      
      <div className="relative min-h-screen bg-midnight overflow-hidden">
        {/* Animated Starry Background */}
        <StarryBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <main className="pt-32 lg:pt-40 xl:pt-48">
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
