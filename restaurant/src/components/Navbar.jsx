import React, { useState } from 'react';
import Background from "../img/Navbar.png";
import Logo from "../img/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div 
      className='relative flex items-center w-screen h-16 bg-cover bg-center'
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className='flex justify-between items-center w-full px-4 md:px-8'>
        <img src={Logo} alt="Logo" className='h-10' />
        <ul className='hidden md:flex font-Berkshire text-3xl text-white w-full justify-end h-16 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] space-x-4 md:space-x-8'>
          <li className='z-20 p-4'>Home</li>
          <li className='z-20 p-4'>Menü</li>
          <li className='z-20 p-4'>About</li>
          <li className='z-20 p-4'>Kontakt</li>
          <li className='z-20 p-4'>Liefern</li>
        </ul>
        <div className='md:hidden flex flex-col items-center cursor-pointer' onClick={toggleMenu}>
          <div className='w-8 h-1 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] rounded-full bg-white mb-1'></div>
          <div className='w-8 h-1 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] rounded-full bg-white mb-1'></div>
          <div className='w-8 h-1 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] rounded-full bg-white'></div>
        </div>
      </div>
      {menuOpen && (
        <div className='flex flex-col items-center absolute top-16 left-0 w-full bg-white md:hidden'>
          <ul className='flex flex-col items-center w-full'>
            <li className='z-20 p-4' onClick={toggleMenu}>Home</li>
            <li className='z-20 p-4' onClick={toggleMenu}>Menü</li>
            <li className='z-20 p-4' onClick={toggleMenu}>About</li>
            <li className='z-20 p-4' onClick={toggleMenu}>Kontakt</li>
            <li className='z-20 p-4' onClick={toggleMenu}>Liefern</li>
          </ul>
          <img src={Logo} alt="Logo" className='h-10 mt-4' />
        </div>
      )}
    </div>
  );
}

export default Navbar;
