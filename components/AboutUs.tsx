
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-black/20 p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-bold text-white mb-2 animate-child delay-1">
                <span className="text-xl md:text-2xl align-bottom">Welcome to </span>
                <span className="text-2xl md:text-3xl">Tech<span className="text-accent-teal">Range</span> IT</span>
                <span className="text-xl md:text-2xl align-bottom"> Solution's...!</span>
              </h2>
              <h3 className="text-lg font-bold text-white mb-4 animate-child delay-2">Your Partner in Digital Transformation</h3>
              <p className="text-gray-300 mb-6 animate-child delay-3">
                At TechRange IT Solutions, we are dedicated to transforming technology into powerful business solutions. With a focus on innovation, precision, and expertise, we partner with businesses to provide tailored IT solutions that drive efficiency and growth. We are more than just a staffing agency; we are architects of opportunity in the IT sector, delivering value through strategic workforce solutions and talent management.
              </p>
              <p className="text-gray-300 animate-child delay-4">
                We specialize in offering comprehensive, industry-leading services to connect exceptional IT professionals with businesses in need of expertise. Our understanding of the ever-evolving technology landscape enables us to provide highly effective, bespoke solutions that meet both organizational and individual goals. At TechRange IT Solutions, our commitment to excellence has made us a trusted partner for companies and professionals alike.
              </p>
            </div>
            <div className="md:w-1/2 animate-child delay-3 md-mask-fade-left">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our team collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;