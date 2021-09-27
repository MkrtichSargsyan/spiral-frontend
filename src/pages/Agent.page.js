import React, { useEffect } from 'react';
import re4 from '../images/realEstate/re4.jpg';

function AgentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
      style={{
        height: '80vh',
        width: '100%',
        transition: 'all 2s ease-in-out',
        backgroundSize: 'cover',
        backgroundImage: `url(${re4})`,
      }}
    >
      <div className="w-full h-full bg-black absolute z-10 opacity-90"></div>
    </section>
  );
}

export default AgentPage;
