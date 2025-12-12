import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';

// Diet Icon Component
export const DietIcon = ({ type }: { type?: DietType }) => {
  if (!type) return null;
  
  const iconStyles = {
    veg: 'border-success bg-success',
    'non-veg': 'border-danger bg-danger',
    egg: 'border-warning bg-warning',
  };

  const innerStyles = {
    veg: 'bg-success rounded-full',
    'non-veg': 'w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-danger',
    egg: 'bg-warning rounded-full',
  };

  return (
    <div className={`w-4 h-4 border-2 flex items-center justify-center ${iconStyles[type]}`}>
      <div className={type === 'non-veg' ? innerStyles[type] : `w-2 h-2 ${innerStyles[type]}`} />
    </div>
  );
};

// Section Header Component
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="font-script text-3xl md:text-4xl text-gold mb-2">{title}</h2>
    {subtitle && (
      <p className="text-cream/70 font-serif text-sm italic">{subtitle}</p>
    )}
    <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mt-3" />
  </div>
);

// Add-Ons Box Component
export const AddOnBox = ({ addOns }: { addOns: { name: string; price: string }[] }) => (
  <div className="bg-midnight-light/50 border border-gold/20 rounded-lg p-4 mt-6">
    <h4 className="text-gold font-serif text-sm uppercase tracking-wider mb-3">Add-Ons</h4>
    <div className="flex flex-wrap gap-4">
      {addOns.map((addon) => (
        <span key={addon.name} className="text-cream/80 text-sm">
          {addon.name} <span className="text-gold">{addon.price}</span>
        </span>
      ))}
    </div>
  </div>
);

// Food Card Component
export const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-midnight-light/30 border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300">
    <div className="relative h-40 overflow-hidden">
      <img 
        src={PLACEHOLDER_IMAGE} 
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {item.dietType && (
        <div className="absolute top-3 right-3 bg-midnight/80 p-1 rounded">
          <DietIcon type={item.dietType} />
        </div>
      )}
      {item.smallText && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight to-transparent p-2">
          <span className="text-gold text-xs font-serif">{item.smallText}</span>
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="font-serif text-cream text-lg leading-tight">{item.title}</h3>
        <span className="text-gold font-serif font-semibold whitespace-nowrap">{item.price}</span>
      </div>
      {item.description && (
        <p className="text-cream/60 text-sm font-serif leading-relaxed">{item.description}</p>
      )}
    </div>
  </div>
);

// Full Width Card for Platters
export const FullWidthCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-midnight-light/30 border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 col-span-full">
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-48 h-40 md:h-auto overflow-hidden shrink-0">
        <img 
          src={PLACEHOLDER_IMAGE} 
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {item.dietType && (
          <div className="absolute top-3 right-3 bg-midnight/80 p-1 rounded">
            <DietIcon type={item.dietType} />
          </div>
        )}
      </div>
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-serif text-cream text-xl">{item.title}</h3>
          <span className="text-gold font-serif font-semibold text-lg whitespace-nowrap">{item.price}</span>
        </div>
        {item.description && (
          <p className="text-cream/60 text-sm font-serif leading-relaxed mb-2">{item.description}</p>
        )}
        {item.smallText && (
          <p className="text-gold/70 text-xs font-serif italic">{item.smallText}</p>
        )}
      </div>
    </div>
  </div>
);

// Drink Card Component
export const DrinkCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-midnight-light/20 border border-gold/10 rounded-lg p-4 hover:border-gold/30 transition-all duration-300">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-serif text-cream">{item.title}</h3>
        {item.description && (
          <p className="text-cream/50 text-xs mt-1">{item.description}</p>
        )}
      </div>
      <span className="text-gold font-serif font-semibold">{item.price}</span>
    </div>
  </div>
);

// Footnote Component
export const Footnote = ({ text }: { text: string }) => (
  <p className="text-cream/50 text-xs font-serif italic mt-6 border-t border-gold/10 pt-4">
    * {text}
  </p>
);
