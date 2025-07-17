import React, { useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Hero from '../components/Hero';
import Services from '../components/Services';
import OurProcess from '../components/OurProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import { AIChatWidgetRef } from '../components/AIChatWidget'; // Assuming AIChatWidgetRef is defined here or needs to be imported

const HomePage: React.FC = () => {
    const chatWidgetRef = useRef<AIChatWidgetRef>(null); // Assuming AIChatWidgetRef is relevant for HomePage as well

    const handleServiceInquiry = (serviceTitle: string) => {
        // This logic might need to be handled differently if the chat widget is not on the home page,
        // or if it's a global component. For now, keeping the original logic.
        chatWidgetRef.current?.openWithPrompt(`Tell me more about your ${serviceTitle} services.`);
    };

    return (
        <>
            <AnimatedSection id="home" startVisible>
                <Hero />
            </AnimatedSection>
            <AnimatedSection id="services">
                <Services onServiceInquiry={handleServiceInquiry} />
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