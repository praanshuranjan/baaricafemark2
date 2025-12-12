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

// Sections that get banner headers (brown background)
const bannerSections = ['appetizers', 'pizza', 'burgers', 'desserts', 'coffee'];

const FullMenu = () => {
  return (
    <div className="bg-warm-cream py-8">
      <div className="max-w-4xl mx-auto">
        {menuSections.map((section) => {
          const isDrinkCardSection = drinkCardSections.includes(section.id);
          const isListCardSection = listCardSections.includes(section.id);
          const isBannerSection = bannerSections.includes(section.id);
          
          return (
            <section 
              key={section.id} 
              id={section.id}
              className="mb-10 scroll-mt-24"
            >
              {/* Header - Banner style or simple */}
              {isBannerSection ? (
                <BannerHeader title={section.title} subtitle={section.subtitle} />
              ) : (
                <SectionHeader title={section.title} subtitle={section.subtitle} />
              )}
              
              {/* Cards Grid */}
              {isListCardSection ? (
                // List layout for drinks
                <div className="px-2.5 mt-4">
                  {section.items.map((item) => (
                    <ListCard key={item.title} item={item} />
                  ))}
                </div>
              ) : (
                // Grid layout for food/drinks with images
                <div className={`grid gap-3 px-2.5 ${
                  isBannerSection ? 'mt-0 bg-warm-cream rounded-b-2xl py-4' : 'mt-4'
                } ${
                  isDrinkCardSection 
                    ? 'grid-cols-2 md:grid-cols-3' 
                    : 'grid-cols-2 md:grid-cols-3'
                }`}>
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
