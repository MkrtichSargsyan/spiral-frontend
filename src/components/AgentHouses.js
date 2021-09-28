import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import houseIcon from '../images/house_icon.png';

import VanillaTilt from 'vanilla-tilt';
import Tilt from '../ui_kits/Tilt';

function AgentHouses() {
  const agentHousesList = useSelector(
    (state) => state.agentsReducer.agentHouses
  );

  const options = {
    scale: 1,
    speed: 400,
    glare: true,
    'max-glare': 1,
  };

  return (
    <div className="border-1 border-black flex w-full flex-wrap">
      {agentHousesList.map((house) => (
        <article className="w-1/3 p-3 mb-10" key={house.id} data-tilt>
          <Tilt options={options}>
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
          </Tilt>
        </article>
      ))}
    </div>
  );
}

export default AgentHouses;
