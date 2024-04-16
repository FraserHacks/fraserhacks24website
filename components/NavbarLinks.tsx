import React from 'react';
import Link from 'next/link';

interface NavbarLinksProps {
  closeMobileMenu: () => void;
}

function NavbarLinks({ closeMobileMenu }: NavbarLinksProps) {
  
    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu(); 
    }
  };
  return (
    <>

           <div className="navbar-section-link-container">
        <a href="#home" className="text-white text-lg no-underline hover:text-purple-400" onClick={(e) => scrollToSection(e, '#home')}>
          Home
        </a>
      </div>

      <div className="navbar-section-link-container">
        <a href="#about" className="text-white text-lg no-underline hover:text-purple-400" onClick={(e) => scrollToSection(e, '#about')}>
          About
        </a>
      </div>

      <div className="navbar-section-link-container">
        <a href="#faq" className="text-white text-lg no-underline hover:text-purple-400" onClick={(e) => scrollToSection(e, '#faq')}>
          FAQ
        </a>
      </div>
      <div className="navbar-section-link-container">
        <a href="#sponsors" className="text-white text-lg no-underline hover:text-purple-400" onClick={(e) => scrollToSection(e, '#sponsors')}>
          Sponsors
        </a>
      </div>

      
 </>
  );
}

export default NavbarLinks;
