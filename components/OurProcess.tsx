import React from 'react';
import DiscoverIcon from './icons/DiscoverIcon';
import DesignIcon from './icons/DesignIcon';
import DevelopIcon from './icons/DevelopIcon';
import DeployIcon from './icons/DeployIcon';

const processSteps = [
    {
        icon: <DiscoverIcon />,
        title: 'Discover',
        description: 'We start by understanding your vision, goals, and challenges through in-depth workshops and research.'
    },
    {
        icon: <DesignIcon />,
        title: 'Design',
        description: 'Our team creates intuitive UI/UX designs and a solid architectural blueprint for your solution.'
    },
    {
        icon: <DevelopIcon />,
        title: 'Develop',
        description: 'Using agile methodologies, we build your application with clean, efficient code and regular feedback loops.'
    },
    {
        icon: <DeployIcon />,
        title: 'Deploy',
        description: 'We handle the seamless deployment and provide ongoing support to ensure optimal performance.'
    }
];

const OurProcess: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase text-accent-teal mb-2 animate-child delay-1">How We Work</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white animate-child delay-2">Our Streamlined Process</h3>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5">
                       <svg width="100%" height="100%" viewBox="0 0 1000 2" preserveAspectRatio="none" className="absolute top-0 left-0">
                           <path d="M 0 1 L 1000 1" stroke="#4a5568" strokeWidth="2" fill="none" className="process-line" />
                       </svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`relative text-center p-6 animate-child delay-${index+2}`}>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="bg-corporate-blue border-4 border-accent-teal w-24 h-24 rounded-full flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 hover:scale-110">
                                        <div className="text-accent-teal">{step.icon}</div>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;