import React, { useState } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import Link from 'next/link';
import { Link as RouterLink } from 'react-router-dom';
 const navLinks = [
 { name: 'Home', href: '/', id: 'home-page' },
 { name: 'About Us', href: '/about', id: 'about-page' },
 { name: 'Services', href: '/services', id: 'services-page' },
 { name: 'Our Process', href: '/process', id: 'process-page' },
 { name: 'Why Choose Us', href: '/why-choose-us', id: 'why-choose-us-page' },
 { name: 'Contact Us', href: '/contact', id: 'contact-page' },
 ];

 import { useScrollSpy } from './hooks/useScrollSpy';

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isScrolled } = useScrollSpy([], {}); // Call the hook and destructure isScrolled
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md backdrop-saturate-150 shadow-md' : 'bg-gradient-to-b from-black/40 to-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl sm:text-3xl font-bold transition-colors duration-300 text-white">
 Tech<span className="text-accent-teal">Range</span> IT 
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <RouterLink
 key={link.name}
 to={link.href}
 className={`font-medium transition-colors duration-300 hover:text-accent-teal ${
 'text-gray-200' // Basic styling for now
 }`}
                >
                  {link.name}
                </RouterLink>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-colors duration-300 text-white"
              >
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
