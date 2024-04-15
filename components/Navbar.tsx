"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Function to toggle the menu's open/close state
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  // Function to close the menu, intended for link navigation
  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const targetScrollY = 16; // Change this to your specific scroll point
      setNavbarScrolled(window.scrollY > targetScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-root-container fixed inset-x-0 top-0 z-10 justify-center items-center transition-all duration-300 w-full`}>
      <div className={`navbar-container transition-all duration-300 mx-auto flex h-16 lg:h-20 px-10 ${navbarScrolled ? 'max-w-5xl' : 'max-w-7xl'} ${navbarScrolled ? 'shadow-md bg-blue-800' : 'bg-blue-800'}`}>
        <div className='desktop-container flex justify-between w-full items-center h-full'>
          <Link href="/" className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-purple-400">
            Fraser Hacks 
          </Link>

          

          <div className="relative lg:hidden">
          <button onClick={toggleMenu} className="text-lg">
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <div className={`absolute right-0 mt-2 bg-blue-800 shadow-md z-30 transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="flex flex-col items-start p-4">
              <NavbarLinks closeMobileMenu={closeMenu} />
            </div>
          </div>
        </div>

        <div className={`hidden lg:flex space-x-4 lg:space-x-8`}>
          <NavbarLinks closeMobileMenu={closeMenu} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;

