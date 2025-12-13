import { useState } from 'react';
import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';
import { DietIcon } from './MenuComponents';

// Flip Card Container Component
const FlipCardContainer = ({ 
  children, 
  isFlipped, 
  onClick 
}: { 
  children: React.ReactNode; 
  isFlipped: boolean; 
  onClick: () => void;
}) => (
  <div 
    className="relative cursor-pointer perspective-[1000px]" 
    onClick={onClick}
    style={{ minHeight: '280px' }}
  >
    <div 
      className="relative w-full h-full transition-transform duration-500 ease-out"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}
    >
      {children}
    </div>
  </div>
);

// Card Face Base Styles
const cardFaceStyles = "absolute inset-0 w-full h-full rounded-xl overflow-hidden border border-gold/30 shadow-lg";

// Front Face Component
const CardFront = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={`${cardFaceStyles} bg-midnight/80 backdrop-blur-sm`}
    style={{ backfaceVisibility: 'hidden' }}
  >
    {children}
  </div>
);

// Back Face Component
const CardBack = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={`${cardFaceStyles} bg-gradient-to-br from-midnight via-midnight-deep to-midnight`}
    style={{ 
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)'
    }}
  >
    {children}
  </div>
);

// Flip Food Card Component
export const FlipFoodCard = ({ item }: { item: MenuItem }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <FlipCardContainer isFlipped={isFlipped} onClick={handleFlip}>
      {/* Front Side */}
      <CardFront>
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <img 
              src={item.image || PLACEHOLDER_IMAGE} 
              alt={item.title}
              className="w-full h-36 object-cover"
              loading="lazy"
            />
            {item.smallText && (
              <div className="absolute top-2 left-2 bg-gold text-midnight text-[10px] font-bold px-2 py-0.5 rounded">
                {item.smallText}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="font-serif font-bold text-gold text-sm leading-tight mb-1">
              {item.title}
            </h3>
            
            {/* Bottom: Diet icon + Price */}
            <div className="flex justify-between items-center pt-2 mt-auto border-t border-dashed border-gold/30">
              <DietIcon type={item.dietType} />
              <span className="font-bold text-sm text-cream">{item.price}</span>
            </div>
            
            {/* Flip hint */}
            <div className="flex items-center justify-center mt-2 gap-1 text-[10px] text-gold/60">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Tap for details</span>
            </div>
          </div>
        </div>
      </CardFront>
      
      {/* Back Side */}
      <CardBack>
        <div className="flex flex-col h-full p-4 justify-between">
          {/* Decorative top line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0 mx-auto mb-3" />
          
          {/* Title */}
          <h3 className="font-script text-xl text-gold text-center leading-tight mb-2">
            {item.title}
          </h3>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="w-8 h-px bg-gold/30" />
          </div>
          
          {/* Description */}
          <div className="flex-grow flex items-center">
            <p className="text-xs text-cream/80 leading-relaxed text-center italic">
              {item.description || "A delightful creation from our kitchen, crafted with the finest ingredients and prepared with love."}
            </p>
          </div>
          
          {/* Bottom: Diet + Price */}
          <div className="flex justify-between items-center pt-3 mt-3 border-t border-gold/20">
            <DietIcon type={item.dietType} />
            <span className="font-bold text-lg text-gold">{item.price}</span>
          </div>
          
          {/* Flip back hint */}
          <div className="flex items-center justify-center mt-2 gap-1 text-[10px] text-cream/40">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Tap to flip back</span>
          </div>
        </div>
      </CardBack>
    </FlipCardContainer>
  );
};

// Flip Drink Card Component
export const FlipDrinkCard = ({ item }: { item: MenuItem }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <FlipCardContainer isFlipped={isFlipped} onClick={handleFlip}>
      {/* Front Side */}
      <CardFront>
        <div className="flex flex-col h-full">
          {/* Image */}
          <img 
            src={item.image || PLACEHOLDER_IMAGE} 
            alt={item.title}
            className="w-full h-40 object-cover"
            loading="lazy"
          />
          
          {/* Content */}
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="font-serif font-bold text-gold text-sm leading-tight mb-2">
              {item.title}
            </h3>
            
            {/* Price row */}
            <div className="flex justify-between items-center pt-2 mt-auto border-t border-dotted border-gold/30">
              <span className="font-bold text-sm text-cream">{item.price}</span>
            </div>
            
            {/* Flip hint */}
            <div className="flex items-center justify-center mt-2 gap-1 text-[10px] text-gold/60">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Tap for details</span>
            </div>
          </div>
        </div>
      </CardFront>
      
      {/* Back Side */}
      <CardBack>
        <div className="flex flex-col h-full p-4 justify-between">
          {/* Decorative top line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0 mx-auto mb-3" />
          
          {/* Title */}
          <h3 className="font-script text-xl text-gold text-center leading-tight mb-2">
            {item.title}
          </h3>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="w-8 h-px bg-gold/30" />
          </div>
          
          {/* Description */}
          <div className="flex-grow flex items-center">
            <p className="text-xs text-cream/80 leading-relaxed text-center italic">
              {item.description || "A refreshing beverage crafted to perfection, bringing you the finest flavors in every sip."}
            </p>
          </div>
          
          {/* Bottom: Price */}
          <div className="flex justify-center items-center pt-3 mt-3 border-t border-gold/20">
            <span className="font-bold text-lg text-gold">{item.price}</span>
          </div>
          
          {/* Flip back hint */}
          <div className="flex items-center justify-center mt-2 gap-1 text-[10px] text-cream/40">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Tap to flip back</span>
          </div>
        </div>
      </CardBack>
    </FlipCardContainer>
  );
};
