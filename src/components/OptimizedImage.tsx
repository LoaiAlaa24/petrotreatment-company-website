import React, { useState, useRef, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  style?: React.CSSProperties;
  sx?: any;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  style,
  sx,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        ...sx,
      }}
    >
      {isVisible && (
        <>
          {isLoading && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={height || 200}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
          )}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out',
              ...style,
            }}
          />
          {isError && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: height || 200,
                backgroundColor: 'grey.100',
                color: 'grey.500',
                fontSize: '0.875rem',
              }}
            >
              Failed to load image
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default OptimizedImage;