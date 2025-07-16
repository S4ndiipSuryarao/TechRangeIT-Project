import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import OurProcess from './components/OurProcess';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import AIChatWidget, { AIChatWidgetRef } from './components/AIChatWidget';

const App: React.FC = () => {
    const chatWidgetRef = useRef<AIChatWidgetRef>(null);

    const handleServiceInquiry = (serviceTitle: string) => {
        chatWidgetRef.current?.openWithPrompt(`Tell me more about your ${serviceTitle} services.`);
    };

    return (
        <div className="relative">
            <CanvasBackground />
            <Header />
            <main className="relative z-10">
                <AnimatedSection id="home" startVisible>
                    <Hero />
                </AnimatedSection>
                <AnimatedSection id="about">
                    <AboutUs />
                </AnimatedSection>
                <AnimatedSection id="services">
                    <Services onServiceInquiry={handleServiceInquiry} />
                </AnimatedSection>
                <AnimatedSection id="process">
                    <OurProcess />
                </AnimatedSection>
                <AnimatedSection>
                    <WhyChooseUs />
                </AnimatedSection>
                <AnimatedSection id="contact">
                    <ContactUs />
                </AnimatedSection>
            </main>
            <Footer />
            <AIChatWidget ref={chatWidgetRef} />
        </div>
    );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);