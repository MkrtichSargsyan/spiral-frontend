import React, { useEffect, useState } from 'react';
import re1 from '../images/realEstate/re1.jpg';
import re2 from '../images/realEstate/re2.jpeg';
import re3 from '../images/realEstate/re3.jpg';
import re4 from '../images/realEstate/re4.jpg';

function Showcase() {
  const bgImages = [re1, re2,re3,re4];
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
    <div
      className="showcase relative bg-no-repeat bg-cover"
      style={{
        height: '120vh',
        width: '100%',
        transition: 'all 1.5s ease-in-out',
        backgroundSize: 'cover',
        backgroundImage: `url(${bgImages[currentBg]})`,
      }}
    >
      <div className="w-full h-full bg-black absolute z-10 opacity-90"></div>
    </div>
  );
}

export default Showcase;
