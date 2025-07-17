import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutUs from '@/components/AboutUs';
import AboutUsPageHero from '@/components/AboutUsPageHero'; // Assuming this is your custom hero component for About Us

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <AboutUsPageHero /> {/* Custom Hero section for the About Us page */}
      <AboutUs /> {/* Original About Us section */}

      {/* New Section: Our Values */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>We are driven by a commitment to excellence, integrity, and innovation. Our values shape every project we undertake and every interaction we have.</p>
              <p><strong>Excellence:</strong> We strive for the highest quality in everything we do, from code to client service.</p>
              <p><strong>Integrity:</strong> We operate with transparency and honesty, building trust with our clients and partners.</p>
              <p><strong>Innovation:</strong> We embrace new technologies and creative thinking to solve complex challenges.</p>
            </div>
            <div>
              {/* Placeholder for a relevant image showcasing values or team */}
              {/* Replace the div below with an img or Next.js Image component */}
              <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-gray-500 text-sm rounded-lg">
                Placeholder for Image 1 (e.g., Team collaboration, icon representing values)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Our Milestones */}
      <section className="py-16 bg-black text-gray-300">
         <div className="container mx-auto px-6 sm:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-10">Our Milestones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               {/* Placeholder for a relevant image showcasing history or growth */}
               {/* Replace the div below with an img or Next.js Image component */}
               <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-gray-500 text-sm rounded-lg">
                  Placeholder for Image 2 (e.g., timeline graphic, office photo)
               </div>
               <div className="space-y-6 text-lg leading-relaxed">
                  <p>Founded in [Year], TechRange IT has grown from a small team to a leading provider of IT solutions. We've proudly partnered with numerous clients to achieve their digital goals.</p>
                  <p>Highlights include: [Specific Milestone 1], [Specific Milestone 2], and expanding our services to include [New Service].</p>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};
export default AboutUsPage;
