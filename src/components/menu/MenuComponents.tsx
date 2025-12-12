import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';

// Diet Icon Component - JugMug Style (Always show label)
export const DietIcon = ({ type, showLabel = true }: { type?: DietType; showLabel?: boolean }) => {
  if (!type) return null;
  
  const configs = {
    veg: { border: 'border-[#228B22]', bg: 'bg-[#228B22]', textColor: 'text-[#228B22]', label: 'Vegetarian' },
    'non-veg': { border: 'border-[#A52A2A]', bg: 'bg-[#A52A2A]', textColor: 'text-[#A52A2A]', label: 'Contains Chicken' },
    egg: { border: 'border-[#A52A2A]', bg: 'bg-[#A52A2A]', textColor: 'text-[#A52A2A]', label: 'Contains Egg' },
  };

  const config = configs[type];

  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-3.5 h-3.5 border ${config.border} flex items-center justify-center p-0.5`}>
        {type === 'non-veg' ? (
          <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[5px] border-l-transparent border-r-transparent border-b-[#A52A2A]" />
        ) : (
          <div className={`w-2 h-2 rounded-full ${config.bg}`} />
        )}
      </div>
      {showLabel && <span className={`text-[11px] font-semibold ${config.textColor}`}>{config.label}</span>}
    </div>
  );
};

// Section Header (Orange background)
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="bg-[#D2691E] text-white py-3 px-5 mb-5">
    <h2 className="font-slab text-xl md:text-2xl uppercase leading-tight">{title}</h2>
    {subtitle && (
      <p className="text-sm opacity-95 mt-1">{subtitle}</p>
    )}
  </div>
);

// Banner Header (Brown background with diagonal cut) - for subsections
export const BannerHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div 
    className="bg-[#5C3019] text-white py-3 px-5 mb-5"
    style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0 100%)' }}
  >
    <h3 className="font-slab text-lg md:text-xl uppercase tracking-wide">{title}</h3>
    {subtitle && (
      <p className="text-xs opacity-90 mt-1">{subtitle}</p>
    )}
  </div>
);

// Promotional Banner (Full width brown, centered text)
export const PromoBanner = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="bg-[#5C3019] text-white py-5 px-5 mb-5 text-center">
    <h3 className="font-slab text-2xl md:text-3xl leading-tight mb-2" dangerouslySetInnerHTML={{ __html: title }} />
    {subtitle && (
      <p className="text-sm opacity-95">{subtitle}</p>
    )}
  </div>
);

// Add-Ons Box Component
export const AddOnBox = ({ addOns }: { addOns: { name: string; price: string }[] }) => (
  <div className="bg-white border border-[#E0E0E0] rounded-xl p-4 mx-4 mt-4">
    <h4 className="font-slab text-sm text-[#5C3019] uppercase tracking-wider mb-3">Add-Ons</h4>
    <div className="flex flex-wrap gap-4">
      {addOns.map((addon) => (
        <span key={addon.name} className="text-sm text-[#3E2723]">
          {addon.name} <span className="font-bold">{addon.price}</span>
        </span>
      ))}
    </div>
  </div>
);

// Food Card Component - JugMug Style (WHITE background)
export const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E0E0E0]">
    {/* Image at top */}
    <div className="relative">
      <img 
        src={PLACEHOLDER_IMAGE} 
        alt={item.title}
        className="w-full h-36 object-cover"
        loading="lazy"
      />
      {item.smallText && (
        <div className="absolute top-2 left-2 bg-[#5C3019] text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {item.smallText}
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-3">
      {/* Title */}
      <h3 className="font-body font-bold text-[#D2691E] text-sm leading-tight mb-1">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-[11px] text-[#555] leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>
      )}
      
      {/* Bottom: Diet icon + Price */}
      <div className="flex justify-between items-center pt-2 border-t border-dashed border-[#DDD]">
        <DietIcon type={item.dietType} />
        <span className="font-bold text-sm text-[#333]">{item.price}</span>
      </div>
    </div>
  </div>
);

// Full Width Card for Platters/Featured Items - JugMug Style
export const FullWidthCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E0E0E0] col-span-full">
    {/* Large Image */}
    <img 
      src={PLACEHOLDER_IMAGE} 
      alt={item.title}
      className="w-full h-52 object-cover"
      loading="lazy"
    />
    
    {/* Content - Centered */}
    <div className="p-4 text-center">
      {/* Title */}
      <h3 className="font-body font-bold text-[#D2691E] text-xl mb-2">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-sm text-[#444] mb-3 leading-relaxed">
          {item.description}
        </p>
      )}
      
      {/* Ingredients as small text */}
      {item.smallText && (
        <p className="text-xs text-[#666] italic mb-4">
          {item.smallText}
        </p>
      )}
      
      {/* Bottom: Price + Diet indicator centered */}
      <div className="flex justify-center items-center gap-5 pt-3 border-t border-[#E0E0E0]">
        <span className="font-bold text-lg text-[#333]">{item.price}</span>
        <DietIcon type={item.dietType} />
      </div>
    </div>
  </div>
);

// Drink Card Component - JugMug Style with options
export const DrinkCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E0E0E0]">
    {/* Image */}
    <img 
      src={PLACEHOLDER_IMAGE} 
      alt={item.title}
      className="w-full h-44 object-cover"
      loading="lazy"
    />
    
    {/* Content */}
    <div className="p-3">
      <h3 className="font-body font-bold text-[#D2691E] text-sm leading-tight mb-2">
        {item.title}
      </h3>
      
      {item.description && (
        <p className="text-[11px] text-[#555] leading-relaxed mb-3">
          {item.description}
        </p>
      )}
      
      {/* Price row with options text */}
      <div className="flex justify-between items-center pt-2 border-t border-dotted border-[#CCC]">
        <span className="font-bold text-sm text-[#333]">{item.price}</span>
        <span className="text-[10px] text-[#666]">Still / Sparkling</span>
      </div>
    </div>
  </div>
);

// Simple List Card - For drinks without images
export const ListCard = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border border-[#E0E0E0] mb-2 shadow-sm">
    <div className="flex items-center gap-3">
      <DietIcon type={item.dietType} showLabel={false} />
      <div>
        <h4 className="font-body font-semibold text-sm text-[#D2691E]">{item.title}</h4>
        {item.description && (
          <p className="text-[11px] text-[#555]">{item.description}</p>
        )}
      </div>
    </div>
    <span className="font-bold text-sm text-[#333]">{item.price}</span>
  </div>
);

// Footnote Component
export const Footnote = ({ text }: { text: string }) => (
  <p className="text-xs text-[#555] italic mt-4 mx-4 pt-3 border-t border-[#E0E0E0]">
    * {text}
  </p>
);
