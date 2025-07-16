import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = (
  options: IntersectionObserverOptions,
  startVisible: boolean = false
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(startVisible);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startVisible) {
        setIsVisible(true);
        return;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [startVisible, options]); 

  return [elementRef, isVisible];
};
