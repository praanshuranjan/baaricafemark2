import { useState, useEffect } from 'react';
import { ListOrdered } from 'lucide-react';
import Ornament from './Ornament';
import { menuSections } from '@/data/menuData';
import { useActiveSection } from '@/hooks/useActiveSection';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const allSectionIds = menuSections.map(s => s.id);
  const activeSection = useActiveSection(allSectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Header with Logo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-midnight-deep/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <Ornament className="text-gold rotate-180 hidden sm:block w-8" />
              <h1 className="font-script text-3xl md:text-4xl lg:text-5xl text-gold tracking-wide">
                Baari Café
              </h1>
              <Ornament className="text-gold hidden sm:block w-8" />
            </div>
          </div>
        </div>
      </header>

      {/* Floating Menu Button with Popover */}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center bg-[#1a1a1a] rounded-full w-14 h-14 shadow-xl border border-zinc-700 transition-all duration-300 hover:scale-105"
            aria-label="Open menu"
          >
            <ListOrdered size={20} className="text-white" strokeWidth={1.5} />
            <span className="text-[8px] text-white mt-0.5 uppercase tracking-wider font-medium">Menu</span>
          </button>
        </PopoverTrigger>
        
        <PopoverContent 
          side="top" 
          align="end"
          sideOffset={12}
          className="w-56 p-0 bg-white rounded-2xl shadow-2xl border-0 overflow-hidden"
        >
          <div className="max-h-[50vh] overflow-y-auto">
            {menuSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-150 ${
                  activeSection === section.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                } ${index !== menuSections.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span className="text-sm font-normal">{section.title}</span>
                <span className="text-sm text-gray-400">
                  {section.items.length}
                </span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Header;
