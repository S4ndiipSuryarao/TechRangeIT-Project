
import React from 'react';
import ExpertiseIcon from './icons/ExpertiseIcon';
import InnovationIcon from './icons/InnovationIcon';
import ClientCentricIcon from './icons/ClientCentricIcon';

const reasons = [
    {
        icon: <ExpertiseIcon />,
        title: 'Proven Expertise',
        description: 'Our team comprises certified professionals with years of experience in diverse technology stacks and industries.'
    },
    {
        icon: <InnovationIcon />,
        title: 'Commitment to Innovation',
        description: 'We stay ahead of the curve, constantly exploring and implementing emerging technologies to give you a competitive edge.'
    },
    {
        icon: <ClientCentricIcon />,
        title: 'Client-Centric Approach',
        description: 'Your success is our priority. We foster transparent communication and build long-term partnerships based on trust.'
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="bg-black/20 p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
                     <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 animate-child delay-2 lg-mask-fade-right">
                            <img 
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Business meeting" 
                                className="rounded-lg shadow-xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-sm font-bold uppercase text-accent-teal mb-2 animate-child delay-1">Our Advantage</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-child delay-2">Why Businesses Trust TechRange IT</h3>
                            <div className="space-y-8">
                                {reasons.map((reason, index) => (
                                    <div key={index} className={`flex items-start gap-5 animate-child delay-${index+3}`}>
                                        <div className="flex-shrink-0 text-accent-teal bg-accent-teal/10 p-4 rounded-full">
                                            {reason.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                                            <p className="text-gray-300">{reason.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;