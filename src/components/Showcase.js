import React, { useEffect, useState } from 'react';
import re1 from '../images/realEstate/re1.jpg';
import re2 from '../images/realEstate/re2.jpeg';
import re3 from '../images/realEstate/re3.jpg';
import re4 from '../images/realEstate/re4.jpg';

function Showcase() {
  const bgImages = [re1, re2, re3, re4];
  let [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    console.log(currentBg);

    const interval = setInterval(() => {
      if (currentBg === bgImages.length) {
        setCurrentBg(0);
      } else {
        setCurrentBg(currentBg++);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <section
      className="showcase relative bg-no-repeat bg-cover flex justify-center items-center"
      style={{
        height: '120vh',
        width: '100%',
        transition: 'all 2s ease-in-out',
        backgroundSize: 'cover',
        backgroundImage: `url(${bgImages[currentBg]})`,
      }}
    >
      <div className="text-center z-40 -mt-10 w-full">
        <h1 className="text-5xl text-white mb-3 font-caramel">Find your dream home in</h1>
        <h2 className="text-6xl text-white mb-10 font-caramel">Yerevan</h2>
        <input type="text" className='w-1/3 h-16 pl-4' placeholder='Search by address'/>
      </div>

      <div className="w-full h-full bg-black absolute z-10 opacity-90"></div>
    </section>
  );
}

export default Showcase;
