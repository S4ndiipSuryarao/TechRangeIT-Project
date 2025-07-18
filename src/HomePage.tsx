import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import OurProcess from '../components/OurProcess';
import WhyChooseUs from '../components/WhyChooseUs';
const HomePage: React.FC = () => {
    return (
        <>
            <AnimatedSection id="home" startVisible>
                <Hero />
            </AnimatedSection>
            <AnimatedSection id="about">
                <AboutUs />
            </AnimatedSection>
            <AnimatedSection id="services">
                <Services />
            </AnimatedSection>
            <AnimatedSection id="process">
                <OurProcess />
            </AnimatedSection>
            <AnimatedSection> {/* Assuming no id needed for WhyChooseUs based on index.tsx */}
                <WhyChooseUs />
            </AnimatedSection>
        </>
    );
};

export default HomePage;