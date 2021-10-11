import React from 'react';
import PropTypes from 'prop-types';
import Tilt from '../../ui_kits/Tilt';
import { useDispatch } from 'react-redux';

import houseIcon from '../../images/house_icon.png';
import bedroom from '../../images/houseIcons/bedroom.png';
import bathroom from '../../images/houseIcons/bathroom.png';
import { Link } from 'react-router-dom';
import { chooseHouse } from '../../store/actions';

function HousePreview({ id, pictures, price, address, bedrooms, bathrooms }) {
  const dispatch = useDispatch();
  const options = {
    scale: 1.05,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
  };

  const chooseTheHouse = (id) => {
    dispatch(chooseHouse(id));
  };

  return (
    <article className="sm:w-1/2 lg:w-1/3 p-6 md:p-3 mb:6 md:mb-10 cursor-pointer" data-tilt>
      <Link onClick={() => chooseTheHouse(id)} to={`/houses/${id}`}>
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
                  <p className="font-bold">$ {price}</p>
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
      </Link>
    </article>
  );
}

HousePreview.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  pictures: PropTypes.instanceOf(Object).isRequired,
};

export default HousePreview;
