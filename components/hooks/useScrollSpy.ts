import { useState, useEffect } from 'react';

export const useScrollSpy = (elementIds: string[], options: IntersectionObserverInit) => {
    const [activeSection, setActiveSection] = useState<string>(elementIds[0] || '');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          options
        );
    
        const elements = elementIds.map(id => document.getElementById(id));
    
        elements.forEach((element) => {
          if (element) {
            observer.observe(element);
          }
        });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          elements.forEach((element) => {
            if (element) {
              observer.unobserve(element);
            }
          });
        };
      }, [elementIds, options]);

      return { activeSection, isScrolled };
};
