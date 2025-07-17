import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import OurProcess from '@/components/OurProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactUs from '@/components/ContactUs';
import CanvasBackground from '@/components/CanvasBackground'; // Assuming CanvasBackground is still desired on the homepage

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="relative">
        <CanvasBackground /> {/* Include CanvasBackground if it's part of the homepage */}
        {/* Header will be in Layout */}
        <main className="relative z-10">
          <Hero />
          <AboutUs />
          <Services onServiceInquiry={(serviceTitle) => {
            // Placeholder for handling service inquiry, perhaps opening a modal or navigating
            console.log(`Service inquiry for: ${serviceTitle}`);
          }} />
          <OurProcess />
          <WhyChooseUs />
          <ContactUs />
        </main>
        {/* Footer will be in Layout */}
      </div>
    </Layout>
  );
};

export default Home;