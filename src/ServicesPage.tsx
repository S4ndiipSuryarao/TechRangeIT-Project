import React, { PropsWithChildren } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Services from '../components/Services';

const ServicesPage: React.FC<PropsWithChildren> = () => (
    <AnimatedSection id="services">
        <Services />
    </AnimatedSection>
);

export default ServicesPage;