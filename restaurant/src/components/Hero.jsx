import React from 'react';
import Logo from "../img/Logo.png";
import Background from "../img/Navbar.png";

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className="flex flex-col justify-center items-center space-y-4 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] w-screen mx-12 h-full">
        <img src={Logo} alt="Logo" className='w-32 pt-12' />
        <h3 className='text-2xl font-Berkshire text-white'>Willkommen bei</h3>
        <h1 className='text-5xl font-Berkshire text-white'>Kebap Kingdom</h1>
        <h4 className='text-2xl font-Berkshire text-white text-center'>
          Tauchen sie ein in die Welt der köstlichen Heldentaten - probieren sie unsere einzigartigen Kebaps
        </h4>
        <div className="flex space-x-12">
          <button className='flex justify-center w-32 bg-white bg-opacity-45 font-Berkshire text-white text-xl px-6 py-2 rounded-full hover:bg-black transition-all duration-300'>Reservieren</button>
          <button className='flex justify-center w-32 bg-white bg-opacity-45 font-Berkshire text-white text-xl px-6 py-2 rounded-full hover:bg-black transition-all duration-300'>Gutscheine</button>
        </div>
        <div className='flex w-screen justify-between items-center pt-6'>
          <h1 className='text-4xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] font-Berkshire pl-6'>unsere Angebote</h1>
          <div 
            className='relative flex w-[40%] h-8 bg-cover bg-center'
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
        </div>
        <div className="flex w-full overflow-x-auto space-x-6 h-64 items-center px-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-none flex-col justify-center items-center p-6 bg-fuchsia-50 rounded-2xl w-64 h-48">
              <div className="flex">
                <img src={Logo} alt={`Menü${index + 1}`} className='w-16 h-16' />
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <h3>Menü Combo {index + 1}</h3>
                <h3>Döner, Pommes Getränk</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
