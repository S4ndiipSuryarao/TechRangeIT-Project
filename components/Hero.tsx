import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleGetStartedClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    navigate('/contact'); // Navigate to the Contact Us page
    // Optional: Add smooth scroll to top here if needed,
    // but a better approach is to handle scroll-to-top globally on route change
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-corporate-blue"
    >
      <video
        src="https://video.wixstatic.com/video/11062b_5134112f03d34ead8d02c772861b479d/1080p/mp4/file.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        Your browser does not support the video tag.

      </video>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-12 animate-child delay-1 [text-shadow:4px_4px_0_rgba(0,0,0,0.4)]">
          INNOVATE. INTEGRATE. INSPIRE.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto mb-12 animate-child delay-2 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          We deliver cutting-edge technology solutions that drive growth, efficiency, and success for your business.

        </p>
        <a
          href="/contact"
          onClick={handleGetStartedClick} // Use the new onClick handler
          className="bg-gradient-to-r from-accent-teal to-corporate-blue text-white font-bold py-3 px-6 rounded-md text-lg animate-child delay-3 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.6)', // Strong visible drop shadow
          }}
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;