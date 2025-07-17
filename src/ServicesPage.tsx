import React, { useRef, PropsWithChildren } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Services from '../components/Services';
import { AIChatWidgetRef } from '../components/AIChatWidget';

const ServicesPage: React.FC<PropsWithChildren> = () => {
    const chatWidgetRef = useRef<AIChatWidgetRef>(null);

    const handleServiceInquiry = (serviceTitle: string) => {
        chatWidgetRef.current?.openWithPrompt(`Tell me more about your ${serviceTitle} services.`);
    };

    return (
        <AnimatedSection id="services">
            <Services onServiceInquiry={handleServiceInquiry} />
        </AnimatedSection>
    );
};

export default ServicesPage;