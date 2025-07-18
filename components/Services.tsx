import React from 'react';
import CodeIcon from './icons/CodeIcon';
import CloudIcon from './icons/CloudIcon';
import DataIcon from './icons/DataIcon';
import SecurityIcon from './icons/SecurityIcon';
import MobileIcon from './icons/MobileIcon';
import SupportIcon from './icons/SupportIcon';

const services = [
  {
    icon: <CodeIcon />,
    title: 'Application Development',
    description: 'Custom web and software solutions tailored to your business needs, built with the latest technologies for scalability and performance.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud Solutions',
    description: 'Leverage the power of the cloud with our expert services in migration, management, and optimization on platforms like AWS, Azure, and GCP.',
  },
  {
    icon: <DataIcon />,
    title: 'Data & Analytics',
    description: 'Turn your data into actionable insights with our business intelligence, data warehousing, and predictive analytics services.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security services, including threat analysis, risk management, and compliance.',
  },
  {
    icon: <MobileIcon />,
    title: 'Mobile App Development',
    description: 'Engage your customers with intuitive and powerful native or cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: <SupportIcon />,
    title: 'IT Support & Managed Services',
    description: 'Ensure your IT infrastructure is reliable and efficient with our proactive monitoring, maintenance, and 24/7 support.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number; }> = ({ icon, title, description, delay }) => (
  <div className={`group [perspective:1000px] animate-child delay-${delay}`}>
    <button
      className="w-full h-full bg-white/10 p-6 md:p-8 rounded-lg shadow-lg text-left transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)] border-t-4 border-accent-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-accent-teal"
    >
      <div className="inline-block text-accent-teal bg-accent-teal/10 p-4 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </button>
  </div>
);

const Services: React.FC<{ onServiceInquiry?: (title: string) => void }> = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase text-accent-teal mb-2 animate-child delay-1">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white animate-child delay-2">Our Premier Services</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index + 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
