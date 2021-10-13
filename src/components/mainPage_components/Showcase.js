/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import re1 from '../../images/realEstate/re1.jpg';
import re2 from '../../images/realEstate/re2.jpeg';
import re3 from '../../images/realEstate/re3.jpg';
import re4 from '../../images/realEstate/re4.jpg';
import MyInput from '../../ui_kits/MyInput';
import Cards from './Cards';

function Showcase() {
  const bgImages = [re1, re2, re3, re4];
  let [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentBg === bgImages.length) {
        setCurrentBg(0);
      } else {
        setCurrentBg(currentBg++);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <section
      className="md:h-screen md:bg-cover showcase bg-no-repeat flex justify-center flex-col items-center relative"
      style={{
        width: '100%',
        transition: 'all 1s ease-in-out',
        backgroundImage: `url(${bgImages[currentBg]})`,
      }}
    >
      <div className="text-center z-40 top-60 w-full flex flex-col items-center">
        <h1 className="text-3xl italic text-gray-300 mb-1 font-serif">
          Find your dream home in
        </h1>
        <h2 className="text-4xl italic text-gray-300 mb-6 font-serif">Yerevan</h2>
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
