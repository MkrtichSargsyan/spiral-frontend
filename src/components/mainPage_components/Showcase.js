import React from 'react';
import MyInput from '../../ui_kits/MyInput';
import Cards from './Cards';

function Showcase() {
  return (
    <section className="showcase md:h-screen flex justify-center flex-col items-center relative">
      <div className="text-center z-40 top-60 w-full flex flex-col items-center">
        <h1 className="text-3xl italic text-gray-300 mb-1 font-serif">
          Find your dream home in
        </h1>
        <h2 className="text-4xl italic text-gray-300 mb-6 font-serif">
          London
        </h2>
        <div className="w-1/2 md:px-0 md:w-1/3 h-12 lg:h-16">
          <MyInput />
        </div>
      </div>

      <div className="w-full h-full bg-black absolute z-10 opacity-75" />

      <Cards />
    </section>
  );
}

export default Showcase;
