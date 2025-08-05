import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback,
  rootMargin = '50px',
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <Box ref={ref}>
      {isVisible ? children : fallback}
    </Box>
  );
};

export default LazySection;