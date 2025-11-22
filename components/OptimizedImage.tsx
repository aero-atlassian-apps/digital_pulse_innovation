import React, { useState, useEffect, useRef } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'skeleton';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<Props> = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false, 
  placeholder = 'skeleton',
  blurDataURL 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(false);
  };

  const renderPlaceholder = () => {
    if (placeholder === 'blur' && blurDataURL) {
      return (
        <div 
          className="w-full h-full bg-cover bg-center animate-pulse" 
          style={{ backgroundImage: `url(${blurDataURL})` }}
          aria-hidden="true" 
        />
      );
    }
    
    return (
      <div className="w-full h-full bg-slate-200 animate-pulse" aria-hidden="true" />
    );
  };

  return (
    <div ref={containerRef} className={className || ''}>
      {!isLoaded && !error && renderPlaceholder()}
      {isIntersecting && !error && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} ${placeholder === 'blur' && !isLoaded && blurDataURL ? 'blur-sm' : ''}`}
        />
      )}
      {error && (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
