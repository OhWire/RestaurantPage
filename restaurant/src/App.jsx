import React from 'react';
import "./App.css";
import Hero from './components/Hero';
import Navbar from './components/Navbar'; 
import Speisekarte from './components/Speisekarte';

const App = () => {
  return (
    <div className='flex flex-col w-full h-full '>
      <div className="flex flex-col w-full h-full bg-gradient-to-b from-red-400 to-blue-400">
        <section className='sticky top-0 z-50'>
          <Navbar />
        </section>
        <section id='home' className='flex-1 ' >
          <Hero />
        </section>
      </div>
      <div className="flex flex-col w-full h-full bg-gradient-to-b from-blue-400 to-red-400">
        <section id='Speisekarte' className=''>
          <Speisekarte/>
        </section>
      </div>
    </div>
  );
}

export default App;
