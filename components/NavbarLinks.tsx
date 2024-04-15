import React from 'react';
import Link from 'next/link';

interface NavbarLinksProps {
  closeMobileMenu: () => void;
}

function NavbarLinks({ closeMobileMenu }: NavbarLinksProps) {
  return (
    <>
       <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6"></div>
      <div className="navbar-section-link-container">
        <Link href="/" className="text-white text-lg no-underline hover:text-purple-400" onClick={closeMobileMenu}>
          Home
        </Link>
      </div>

      <div className="navbar-section-link-container">
        <Link href="/dream-space" className="text-white text-lg no-underline hover:text-purple-400" onClick={closeMobileMenu}>
          About
        </Link>
      </div>

      <div className="navbar-section-link-container">
        <Link href="/microbit" className="text-white text-lg no-underline hover:text-purple-400" onClick={closeMobileMenu}>
         FAQ
        </Link>
      </div>

      
 </>
  );
}

export default NavbarLinks;
