import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * OptimizedImage component that:
 * - Automatically uses WebP format when available with fallback
 * - Implements lazy loading by default
 * - Shows loading placeholder
 * - Handles errors gracefully
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate WebP source path
  const getWebPSrc = (originalSrc: string): string => {
    if (originalSrc.startsWith('http')) return originalSrc;
    const ext = originalSrc.match(/\.(jpg|jpeg|png)$/i);
    return ext ? originalSrc.replace(ext[0], '.webp') : originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const fallbackSrc = src;

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);

    // Try to load WebP first
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(webpSrc);
      setIsLoading(false);
    };

    img.onerror = () => {
      // Fallback to original format
      const fallbackImg = new Image();
      fallbackImg.onload = () => {
        setImageSrc(fallbackSrc);
        setIsLoading(false);
      };
      fallbackImg.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      fallbackImg.src = fallbackSrc;
    };

    img.src = webpSrc;
  }, [src, webpSrc, fallbackSrc]);

  if (hasError) {
    return (
      <div className={`${className} bg-midnight/40 flex items-center justify-center`}>
        <span className="text-xs text-cream/50">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-midnight/40 animate-pulse`} />
      )}
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={imageSrc || fallbackSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'hidden' : ''}`}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoading(false)}
        />
      </picture>
    </>
  );
};

export default OptimizedImage;
