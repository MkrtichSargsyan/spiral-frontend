import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import re4 from '../images/realEstate/re4.jpg';
import { fetchAgentById, fetchHouseById } from '../store/actions';

import { openModal } from '../store/actions';
import Apply from '../modals/Apply';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import bedroomIcon from '../images/houseIcons/bedroom.png';
import bathroomIcon from '../images/houseIcons/bathroom.png';
import acresIcon from '../images/houseIcons/acres.png';
import sqftIcon from '../images/houseIcons/sqft.png';
import houseIcon from '../images/house_icon.png';

function HousePage() {
  const dispatch = useDispatch();

  const applyIsOpen = useSelector((state) => state.modalReducer.applyIsOpen);
  const houseId = useSelector((state) => state.housesReducer.choosedHouseId);

  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(fetchHouseById(`http://localhost:3000/houses/${houseId}`));
  }, [dispatch, houseId]);

  const house = useSelector((state) => state.housesReducer.choosedHouse);

  useEffect(() => {
    if (house) {
      dispatch(
        fetchAgentById(`http://localhost:3000/agents/${house.agent_id}`)
      );
    }
  }, [dispatch, house]);

  const agent = useSelector((state) => state.agentsReducer.choosedAgent);

  return (
    <>
      {applyIsOpen && <Apply />}
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
            <address className="text-5xl md:text-6xl md:mt-10 text-white md:w-2/5 mb-3 font-caramel mt-10">
              {house && house.address}
            </address>
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
              className="w-full px-4 sm:w-3/4 lg:px-0 lg:w-2/3 -mt-28 z-10"
            >
              {house.pictures.map((pic, i) => (
                <div key={i}>
                  <img src={pic} alt="home_pic" />
                </div>
              ))}
            </Carousel>
          </section>
          <section className="py-10 bg-gray-300 flex flex-col items-center">
            <div className="mx-4 md-mx-0 md:w-4/5 flex flex-col md:flex-row bg-white">
              <article className="md:w-3/4 pl-6 pt-10 flex flex-col justify-center border-b-2 md:border-r-2 pr-4">
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
                <ol type="i" className="flex flex-wrap justify-around my-4">
                  {house.features.map((feature, i) => (
                    <li
                      key={i}
                      className="w-1/2 list-item list-disc list-inside mb-2 text-lg text-gray-500"
                    >
                      {feature}
                    </li>
                  ))}
                </ol>
              </article>
              {/* aside */}
              <aside className="md:w-1/4 flex  flex-row md:flex-col md:py-10 md:pl-4 flex-wrap">
                <div className="flex items-center py-3 md:py-5 w-1/2 md:w-full justify-center md:justify-start">
                  <img
                    src={bedroomIcon}
                    alt="bedroomIcon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>{house.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center py-3 md:py-5 w-1/2 md:w-full justify-center md:justify-start">
                  <img
                    src={bathroomIcon}
                    alt="bathroomIcon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>{house.bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center py-3 md:py-5 w-1/2 md:w-full justify-center md:justify-start">
                  <img src={sqftIcon} alt="sqft" className="w-5 h-5 mr-3" />
                  <span>{house.sqft} sqft</span>
                </div>
                <div className="flex items-center py-3 md:py-5 w-1/2 md:w-full justify-center md:justify-start">
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
      {/* agent section */}

      {agent && house ? (
        <section className="bg-gray-300 pb-8 flex flex-col md:flex-row">
          <iframe
            title="myFrame"
            className="flex-1 h-96 md:h-auto"
            height="600"
            src={`https://maps.google.com/maps?q=${house.lat},${house.long}&t=k&z=11&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
          <div className="w-full md:w-1/3 bg-black opacity-90 flex flex-col items-center text-white justify-center">
            <div className="w-40 h-40 mb-4">
              <img
                src={agent.photo}
                alt="agent_photo"
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="mb-2">{agent.name}</h2>
            <p className="mb-2">{agent.title}</p>
            <p className="border-2 p-2 px-10 mb-2">{agent.number}</p>
            <button
              className="animButton"
              onClick={() =>
                dispatch(
                  openModal(
                    token && token !== 'undefined'
                      ? 'applyIsOpen'
                      : 'loginIsOpen'
                  )
                )
              }
            >
              <span>Contact agent</span>
            </button>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HousePage;
