import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import Link from 'next/link'; // Import Link from next/link
;
const Footer: React.FC = () => {
    return (
        <footer className="bg-footer-bg text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Tech<span className="text-accent-teal">Range</span> IT
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Your partner in digital innovation. We build solutions that drive progress and inspire change.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><FacebookIcon /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><TwitterIcon /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-accent-teal transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-accent-teal transition-colors">Services</Link></li>
                            <li><Link href="#process" className="text-gray-400 hover:text-accent-teal transition-colors">Our Process</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-accent-teal transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                     <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="text-gray-400 hover:text-accent-teal transition-colors">Application Development</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-accent-teal transition-colors">Cloud Solutions</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-accent-teal transition-colors">Cybersecurity</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-accent-teal transition-colors">Data & Analytics</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                         <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                         <p className="text-gray-400 mb-2">123 Innovation Drive, Tech City, 54321</p>
                         <p className="text-gray-400 mb-2">contact@techrangeit.clone</p>
                         <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} TechRange IT. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;