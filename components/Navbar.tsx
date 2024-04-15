"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
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
    <div className={`navbar-root-container fixed inset-x-0 top-0 z-10 justify-center items-center transition-all duration-300 w-full  `}>
    <div
      className={`navbar-container transition-all duration-300 mx-auto flex  h-16 lg:h-20 px-10 ${navbarScrolled ? 'max-w-5xl' : 'max-w-7xl'} ${navbarScrolled ? 'shadow-md bg-blue-800' : 'bg-blue-800'}`}
    >
        <div className='desktop-container flex justify-between w-full items-center h-full'>
          <Link href="/"className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-purple-400">
       
              Fraser Hacks
       
          </Link>
  
          <div className={`hidden lg:flex space-x-4 lg:space-x-8 ${navbarScrolled ? 'px-2 lg:px-4 max-w-4xl' : 'px-4 lg:px-8 max-w-6xl'} `}>
            <NavbarLinks closeMobileMenu={handleClick} />
          </div>
  
          <div className="lg:hidden">
            <button onClick={handleClick} className="text-lg">
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
  
      <div className={`lg:hidden w-full ${menuOpen ? 'block' : 'hidden'}`}>
        <NavbarLinks closeMobileMenu={handleClick} />
      </div>
    </div>
  );
  
  
}

export default Navbar;
