import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import AboutUs from '../components/AboutUs';

const AboutPage: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <AboutUs />
    </AnimatedSection>
  );
};

export default AboutPage;