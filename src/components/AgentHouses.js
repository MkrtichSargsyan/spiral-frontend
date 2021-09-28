import React from 'react';
import { useSelector } from 'react-redux';
import houseIcon from '../images/house_icon.png';

import Tilt from '../ui_kits/Tilt';

import bedroom from '../images/houseIcons/bedroom.png';
import bathroom from '../images/houseIcons/bathroom.png';

function AgentHouses() {
  const agentHousesList = useSelector(
    (state) => state.agentsReducer.agentHouses
  );
  console.log(agentHousesList[0]);

  const options = {
    scale: 1.05,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
  };

  return (
    <div className="border-1 border-black flex w-full flex-wrap">
      {agentHousesList.map((house) => (
        <article
          className="w-1/3 p-3 mb-10 cursor-pointer"
          key={house.id}
          data-tilt
        >
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
              <div className="bg-white w-11/12 h-44 -mt-24 rounded-lg">
                <div className="pb-3 border-b-2 p-8 ">
                  <div className="flex items-center mb-5">
                    <img
                      src={houseIcon}
                      alt="house_icon"
                      className="w-10 h-10 mr-3"
                    />
                    <p className="font-bold">{house.price}</p>
                  </div>
                  <p className="w-2/3">{house.address}</p>
                </div>
                <div className="bg-gray-100 w-full px-8 py-2 rounded-lg flex justify-around">
                  <div className='flex'>
                    <img src={bedroom} alt="bedroom" className='w-5 h-5 mr-3'/>
                    <span>{house.bedrooms} bd</span>
                  </div>
                  <div className='flex'>
                    <img src={bathroom} alt="bathroom" className='w-5 h-5 mr-3'/>
                    <span>{house.bathrooms} ba</span>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </article>
      ))}
    </div>
  );
}

export default AgentHouses;
