import React, { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<Props> = ({ src, alt, className, width, height, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className={className || ''}>
      {!isLoaded && !error && (
        <div className="w-full h-full bg-slate-200 animate-pulse" aria-hidden="true" />
      )}
      {!error && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={isLoaded ? 'opacity-100 transition-opacity' : 'opacity-0'}
        />
      )}
      {error && (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 text-sm">Image unavailable</div>
      )}
    </div>
  );
};

export default OptimizedImage;
