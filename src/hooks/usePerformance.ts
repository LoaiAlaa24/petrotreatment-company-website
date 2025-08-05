import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Monitor Core Web Vitals in production
    if (process.env.NODE_ENV === 'production') {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
            }
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          }
        });
        
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
        
        return () => observer.disconnect();
      }
    }
  }, []);

  // Preload critical resources
  const preloadResource = (href: string, as: string, type?: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  };

  // Prefetch next page resources
  const prefetchResource = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };

  return { preloadResource, prefetchResource };
};

export default usePerformance;