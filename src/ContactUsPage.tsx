import React from 'react';
import AnimatedSection from '../components/AnimatedSection'; // Assuming AnimatedSection is in the same directory or adjust the path
import ContactUs from '../components/ContactUs'; // Assuming ContactUs is in the same directory or adjust the path

const ContactUsPage: React.FC = () => {
  return (
    <AnimatedSection id="contact">
      <ContactUs />
    </AnimatedSection>
  );
};

export default ContactUsPage;