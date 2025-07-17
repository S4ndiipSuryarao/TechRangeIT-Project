import React, { useState } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useScrollSpy } from './hooks/useScrollSpy';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '/about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Process', href: '#process', id: 'process' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const { activeSection, isScrolled } = useScrollSpy(
    navLinks.map(link => link.id),
    { rootMargin: "-40% 0px -60% 0px" }
  );

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
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-accent-teal ${
                    activeSection === link.id ? 'text-accent-teal' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
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

      <MobileMenu
        isOpen={isMenuOpen}
        links={navLinks}
        activeSection={activeSection}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
