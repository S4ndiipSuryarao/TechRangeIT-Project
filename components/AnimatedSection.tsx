import React, { ReactNode, HTMLAttributes } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startVisible?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, startVisible = false, ...rest }) => {
  const [sectionRef, isVisible] = useIntersectionObserver(
    {
      root: null,
      rootMargin: '0px',
      // A lower threshold makes the animation trigger sooner, feeling more reactive.
      threshold: 0.1,
    },
    startVisible
  );

  return (
    <div
      ref={sectionRef}
      className={`section-animate ${isVisible ? 'section-visible' : ''} ${className || ''}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
