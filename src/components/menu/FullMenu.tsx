import { menuSections } from '@/data/menuData';
import { 
  BannerHeader,
  SectionHeader, 
  FoodCard, 
  FullWidthCard, 
  DrinkCard, 
  ListCard,
  AddOnBox, 
  Footnote 
} from './MenuComponents';

// Sections that should use drink cards (with images, 2-col grid)
const drinkCardSections = ['iced-tea', 'premium-shakes', 'thick-shakes'];

// Sections that should use list cards (compact, no images)
const listCardSections = ['coolers', 'coffee', 'hot-beverages', 'cold-coffee'];

// Sections that have platters (full width cards)
const platterTitles = ['Veg Platter', 'Non Veg Platter', 'Continental Platter Veg', 'Continental Platter Non Veg', 'Non Veg Hummus Platter', 'Veg Hummus Platter'];

// Sections that get subsection headers (brown with diagonal cut)
const subsectionHeaders = ['appetizers', 'burgers', 'desserts'];

const FullMenu = () => {
  return (
    <div className="bg-[#FFFBF2] py-6">
      <div className="max-w-2xl mx-auto">
        {menuSections.map((section) => {
          const isDrinkCardSection = drinkCardSections.includes(section.id);
          const isListCardSection = listCardSections.includes(section.id);
          const isSubsection = subsectionHeaders.includes(section.id);
          
          return (
            <section 
              key={section.id} 
              id={section.id}
              className="mb-8 scroll-mt-32"
            >
              {/* Header - Orange for main sections, Brown diagonal for subsections */}
              {isSubsection ? (
                <BannerHeader title={section.title} subtitle={section.subtitle} />
              ) : (
                <SectionHeader title={section.title} subtitle={section.subtitle} />
              )}
              
              {/* Cards Grid */}
              {isListCardSection ? (
                // List layout for drinks
                <div className="px-4">
                  {section.items.map((item) => (
                    <ListCard key={item.title} item={item} />
                  ))}
                </div>
              ) : (
                // Grid layout for food/drinks with images
                <div className="grid grid-cols-2 gap-4 px-4">
                  {section.items.map((item) => {
                    const isPlatter = platterTitles.includes(item.title);
                    
                    if (isDrinkCardSection) {
                      return <DrinkCard key={item.title} item={item} />;
                    }
                    
                    if (isPlatter) {
                      return <FullWidthCard key={item.title} item={item} />;
                    }
                    
                    return <FoodCard key={item.title} item={item} />;
                  })}
                </div>
              )}
              
              {section.addOns && <AddOnBox addOns={section.addOns} />}
              
              {section.footnote && <Footnote text={section.footnote} />}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default FullMenu;
