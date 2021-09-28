import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import houseIcon from '../images/house_icon.png';

import VanillaTilt from 'vanilla-tilt';

function AgentHouses() {
  const agentHousesList = useSelector(
    (state) => state.agentsReducer.agentHouses
  );
  console.log(agentHousesList);

  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      scale: 1.2,
      speed: 1000,
      max: 30,
    });
  }, []);

  return (
    <div className="border-1 border-black flex w-full flex-wrap">
      {agentHousesList.map((house) => (
        <article
          ref={tilt}
          className="w-1/3 p-3 mb-10"
          key={house.id}
          data-tilt
        >
          <div className=" rounded flex flex-col items-center">
            <img
              className="rounded shadow-2xl"
              src={
                house.pictures[
                  Math.floor(Math.random() * house.pictures.length)
                ]
              }
              alt="agent_house"
            />
            <div className="bg-white w-4/5 h-44 -mt-24 p-8 rounded-lg">
              <div className="flex items-center mb-5">
                <img
                  src={houseIcon}
                  alt="house_icon"
                  className="w-10 h-10 mr-3"
                />
                <p className="font-bold">{house.price}</p>
              </div>
              <p className="w-2/3">{house.address}</p>
              <div className="bg-gray-900 w-full h-10"></div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default AgentHouses;
