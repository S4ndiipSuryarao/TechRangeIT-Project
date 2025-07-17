import React from 'react';

const AboutUsPageHero: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-corporate-blue"
      // TODO: Replace with a background image or video relevant to the About Us page
      style={{
        backgroundImage: 'url(\'https://via.placeholder.com/1920x1080\')', // Placeholder image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay if needed for text readability */}
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" aria-hidden="true"></div>

      <div className="relative z-10 px-6">
        {/* Headline for About Us */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-12 animate-child delay-1 [text-shadow:4px_4px_0_rgba(0,0,0,0.4)]">
          Our Journey and Mission
        </h1>
        {/* Subheading for About Us */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto mb-12 animate-child delay-2 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          Learn about our story, values, and the dedicated team behind TechRange IT.
        </p>
        {/* Optionally include a button if relevant for the About Us hero */}
        {/* <a href="#contact" className="bg-gradient-to-r from-accent-teal to-corporate-blue text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg shadow-md animate-child delay-3 opacity-90 hover:opacity-100">
          Get In Touch
        </a> */}
      </div>
    </section>
  );
};

export default AboutUsPageHero;