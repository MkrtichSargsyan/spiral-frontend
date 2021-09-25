import React from 'react';
import re3 from '../images/realEstate/re3.jpg';

function AboutUsPage() {
  return (
    <section
      className="relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
      style={{
        height: '80vh',
        width: '100%',
        transition: 'all 2s ease-in-out',
        backgroundSize: 'cover',
        backgroundImage: `url(${re3})`,
      }}
    >
      <div className="w-full h-full bg-black absolute z-10 opacity-90"></div>
    </section>
  );
}

export default AboutUsPage;
