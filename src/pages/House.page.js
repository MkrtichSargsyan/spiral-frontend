import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import re4 from '../images/realEstate/re4.jpg';
import { fetchHouseById } from '../store/actions';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import bedroomIcon from '../images/houseIcons/bedroom.png';
import bathroomIcon from '../images/houseIcons/bathroom.png';
import acresIcon from '../images/houseIcons/acres.png';
import sqftIcon from '../images/houseIcons/sqft.png';
import houseIcon from '../images/house_icon.png';

function HousePage() {
  const dispatch = useDispatch();

  const houseId = useSelector((state) => state.housesReducer.choosedHouseId);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchHouseById(`http://localhost:3000/houses/${houseId}`));
  }, [dispatch, houseId]);

  const house = useSelector((state) => state.housesReducer.choosedHouse);
  console.log(house);

  return (
    <>
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
        {house && (
          <div className="text-center z-40 w-full flex flex-col items-center">
            <h1 className="text-6xl text-white w-2/5 mb-3 font-caramel mt-10">
              {house && house.address}
            </h1>
          </div>
        )}
        <div className="w-full h-full bg-black absolute z-10 opacity-75"></div>
      </section>
      {house ? (
        <>
          <section className="bg-gray-300 flex justify-center">
            <Carousel
              interval={1500}
              autoPlay
              infiniteLoop
              className="w-2/3 -mt-28 z-10"
            >
              {house.pictures.map((pic, i) => (
                <div key={i}>
                  <img src={pic} alt="home_pic" />
                </div>
              ))}
            </Carousel>
          </section>
          <section className="py-10 bg-gray-300 flex justify-center">
            <div className="w-2/3 flex bg-white">
              <article className="w-3/4 pl-6 pt-10 flex flex-col justify-center border-r-2 pr-4">
                <div className="flex items-center w-10 h-10 mb-4">
                  <img
                    src={houseIcon}
                    alt="house_icon"
                    className="w-full mr-3"
                  />
                  <span className="text-2xl text-gray-600 font-bold">
                    ${house.price}
                  </span>
                </div>
                <p>{house.description}</p>

                <h3 className="text-gray-500 mt-8">FEATURES</h3>
                <ol
                  type="i"
                  className="flex flex-wrap justify-around my-4"
                >
                  {house.features.map((feature) => (
                    <li className="w-1/2 list-item list-disc list-inside mb-2 text-lg text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ol>
              </article>
              {/* aside */}
              <aside className="w-1/4 flex flex-col py-10 pl-4">
                <div className="flex items-center py-5">
                  <img
                    src={bedroomIcon}
                    alt="bedroomIcon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>{house.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center py-5">
                  <img
                    src={bathroomIcon}
                    alt="bathroomIcon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>{house.bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center py-5">
                  <img src={sqftIcon} alt="sqft" className="w-5 h-5 mr-3" />
                  <span>{house.sqft} sqft</span>
                </div>
                <div className="flex items-center py-5">
                  <img
                    src={acresIcon}
                    alt="acresIcon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>{house.acres} acres</span>
                </div>
              </aside>
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HousePage;
