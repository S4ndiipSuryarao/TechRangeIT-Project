
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  links: { name: string; href: string; id: string }[];
  activeSection: string;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links, activeSection, onClose }) => {
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ease-in-out md:hidden ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <nav className="flex flex-col items-center space-y-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleMenuClick(e, link.href)}
              className={`text-3xl font-bold transition-colors duration-300 hover:text-accent-teal ${
                activeSection === link.id ? 'text-accent-teal' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;