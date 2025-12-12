import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';

// Diet Icon Component - JugMug Style
export const DietIcon = ({ type, showLabel = false }: { type?: DietType; showLabel?: boolean }) => {
  if (!type) return null;
  
  const configs = {
    veg: { border: 'border-[#228B22]', bg: 'bg-[#228B22]', label: 'Vegetarian' },
    'non-veg': { border: 'border-[#A52A2A]', bg: 'bg-[#A52A2A]', label: 'Contains Chicken' },
    egg: { border: 'border-[#A52A2A]', bg: 'bg-[#A52A2A]', label: 'Contains Egg' },
  };

  const config = configs[type];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 border-2 ${config.border} flex items-center justify-center`}>
        {type === 'non-veg' ? (
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#A52A2A]" />
        ) : (
          <div className={`w-2.5 h-2.5 rounded-full ${config.bg}`} />
        )}
      </div>
      {showLabel && <span className="font-sans text-sm text-[#3E2723]">{config.label}</span>}
    </div>
  );
};

// Banner Section Header - JugMug Style (Brown background with white text)
export const BannerHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="bg-chocolate text-white px-5 py-6 rounded-t-2xl mx-2.5 mb-0">
    <h2 className="font-slab text-2xl md:text-3xl mb-2 leading-tight">{title}</h2>
    {subtitle && (
      <p className="font-sans text-sm leading-relaxed opacity-95">{subtitle}</p>
    )}
  </div>
);

// Section Header Component - Simpler gold style
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 px-2.5">
    <h2 className="font-slab text-xl md:text-2xl text-chocolate uppercase tracking-wide mb-1">{title}</h2>
    {subtitle && (
      <p className="font-sans text-sm text-[#555] leading-relaxed">{subtitle}</p>
    )}
  </div>
);

// Add-Ons Box Component
export const AddOnBox = ({ addOns }: { addOns: { name: string; price: string }[] }) => (
  <div className="bg-warm-cream border border-[#E8DCC8] rounded-xl p-4 mx-2.5 mt-4">
    <h4 className="font-slab text-sm text-chocolate uppercase tracking-wider mb-3">Add-Ons</h4>
    <div className="flex flex-wrap gap-4">
      {addOns.map((addon) => (
        <span key={addon.name} className="font-sans text-sm text-[#3E2723]">
          {addon.name} <span className="font-bold">{addon.price}</span>
        </span>
      ))}
    </div>
  </div>
);

// Food Card Component - JugMug Style
export const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-warm-cream rounded-xl overflow-hidden shadow-sm border border-[#E8DCC8]">
    {/* Image at top */}
    <div className="relative h-44 overflow-hidden">
      <img 
        src={PLACEHOLDER_IMAGE} 
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {item.smallText && (
        <div className="absolute top-3 left-3 bg-chocolate text-white text-xs font-bold font-sans px-2 py-1 rounded">
          {item.smallText}
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-3">
      {/* Title */}
      <h3 className="font-body font-bold text-chocolate text-base leading-tight mb-2">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="font-sans text-xs text-[#555] leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>
      )}
      
      {/* Bottom: Diet icon + Price */}
      <div className="flex justify-between items-center pt-3 border-t border-dashed border-[#CCC]">
        <DietIcon type={item.dietType} />
        <span className="font-sans font-bold text-base text-[#3E2723]">{item.price}</span>
      </div>
    </div>
  </div>
);

// Full Width Card for Platters - JugMug Style
export const FullWidthCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-warm-cream rounded-xl overflow-hidden shadow-sm border border-[#E8DCC8] col-span-full mx-2.5">
    <div className="p-4">
      {/* Description - Large text for platters */}
      {item.description && (
        <p className="font-sans text-base leading-relaxed text-[#3E2723] mb-3">
          {item.description}
        </p>
      )}
      
      {/* Ingredients as small text */}
      {item.smallText && (
        <p className="font-sans text-sm text-[#555] italic mb-4">
          Includes: {item.smallText}
        </p>
      )}
      
      {/* Bottom: Price + Diet indicator */}
      <div className="flex justify-between items-center pt-3 border-t border-[#E8DCC8]">
        <span className="font-sans font-bold text-lg text-[#3E2723]">{item.price}</span>
        <DietIcon type={item.dietType} showLabel />
      </div>
    </div>
  </div>
);

// Drink Card Component - JugMug Style with options
export const DrinkCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-warm-cream rounded-xl overflow-hidden shadow-sm border border-[#E8DCC8]">
    {/* Image */}
    <div className="h-44 overflow-hidden">
      <img 
        src={PLACEHOLDER_IMAGE} 
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    
    {/* Content */}
    <div className="p-3">
      <h3 className="font-body font-bold text-chocolate text-sm leading-tight mb-2">
        {item.title}
      </h3>
      
      {item.description && (
        <p className="font-sans text-xs text-[#555] leading-relaxed mb-3">
          {item.description}
        </p>
      )}
      
      {/* Price row with diet icon */}
      <div className="flex justify-between items-center pt-2 border-t border-dotted border-[#CCC]">
        <div className="flex items-center gap-2">
          <DietIcon type={item.dietType} />
        </div>
        <span className="font-sans font-bold text-sm text-[#3E2723]">{item.price}</span>
      </div>
    </div>
  </div>
);

// Simple List Card - For drinks without images
export const ListCard = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-center py-3 px-4 bg-warm-cream rounded-lg border border-[#E8DCC8] mb-2">
    <div className="flex items-center gap-3">
      <DietIcon type={item.dietType} />
      <div>
        <h4 className="font-body font-semibold text-sm text-[#3E2723]">{item.title}</h4>
        {item.description && (
          <p className="font-sans text-xs text-[#555]">{item.description}</p>
        )}
      </div>
    </div>
    <span className="font-sans font-bold text-sm text-[#3E2723]">{item.price}</span>
  </div>
);

// Footnote Component
export const Footnote = ({ text }: { text: string }) => (
  <p className="font-sans text-xs text-[#555] italic mt-4 mx-2.5 pt-3 border-t border-[#E8DCC8]">
    * {text}
  </p>
);
