import React, { useEffect } from 'react';
import re4 from '../images/realEstate/re4.jpg';

function AgentPage(props) {
  const { name, title, photo, number } = props.location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  console.log(name);
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
      <div>
        <div className="text-center z-40 mt-40 flex justify-center w-max bright">
          <img
            src={photo}
            alt="agent_photo"
            className="w-40 h-40 rounded-full mr-12"
          />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-5xl text-white capitalize mb-2 italic">
              {name}
            </h1>
            <h2 className="text-gray-400 text-3xl italic">{title}</h2>
          </div>
        </div>
        <p className="text-center mt-10 text-4xl text-white z-40 font-bold">
          {number}
        </p>
      </div>
      <div className="w-full h-full bg-black absolute z-10 opacity-70"></div>
    </section>
  );
}

export default AgentPage;
