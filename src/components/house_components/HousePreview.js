import React from 'react';
import Tilt from '../../ui_kits/Tilt';

import houseIcon from '../../images/house_icon.png';
import bedroom from '../../images/houseIcons/bedroom.png';
import bathroom from '../../images/houseIcons/bathroom.png';

function HousePreview({ pictures, price, address, bedrooms, bathrooms }) {
  const options = {
    scale: 1.05,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
  };

  return (
    <article className="w-1/3 p-3 mb-10 cursor-pointer" data-tilt>
      <Tilt options={options}>
        <div className=" rounded flex flex-col items-center">
          <img
            className="rounded shadow-2xl"
            src={pictures[Math.floor(Math.random() * pictures.length)]}
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
                <p className="font-bold">{price}</p>
              </div>
              <p className="w-2/3">{address}</p>
            </div>
            <div className="bg-gray-100 w-full px-8 py-2 rounded-lg flex justify-around">
              <div className="flex">
                <img src={bedroom} alt="bedroom" className="w-5 h-5 mr-3" />
                <span>{bedrooms} bd</span>
              </div>
              <div className="flex">
                <img src={bathroom} alt="bathroom" className="w-5 h-5 mr-3" />
                <span>{bathrooms} ba</span>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </article>
  );
}

export default HousePreview;
