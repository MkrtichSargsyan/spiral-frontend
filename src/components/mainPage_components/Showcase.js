import React, { useEffect, useState } from 'react';
import re1 from '../../images/realEstate/re1.jpg'
import re2 from '../../images/realEstate/re2.jpeg';
import re3 from '../../images/realEstate/re3.jpg';
import re4 from '../../images/realEstate/re4.jpg';
import MyInput from '../../ui_kits/MyInput';
import Cards from '../mainPage_components/Cards';

function Showcase() {
  const bgImages = [re1, re2, re3, re4];
  let [currentBg, setCurrentBg] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentBg === bgImages.length) {
  //       setCurrentBg(0);
  //     } else {
  //       setCurrentBg(currentBg++);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });

  return (
    <section
      className="showcase bg-no-repeat bg-cover flex justify-center flex-col items-center"
      style={{
        height: '150vh',
        width: '100%',
        transition: 'all 1s ease-in-out',
        backgroundSize: 'cover',
        backgroundImage: `url(${bgImages[currentBg]})`,
      }}
    >
      <div className="text-center z-40 -mt-40 w-full flex flex-col items-center">
        <h1 className="text-5xl text-white mb-3 font-caramel">
          Find your dream home in
        </h1>
        <h2 className="text-6xl text-white mb-10 font-caramel">Yerevan</h2>
        <div className="w-1/3 h-16">
          <MyInput />
        </div>
      </div>

      <div className="w-full h-full bg-black absolute z-10 opacity-75"></div>

      <Cards />
    </section>
  );
}

export default Showcase;
