import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import re4 from '../images/realEstate/re4.jpg';
import { fetchHouseById } from '../store/actions';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function HousePage() {
  const dispatch = useDispatch();

  const houseId = useSelector((state) => state.housesReducer.choosedHouseId);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchHouseById(`http://localhost:3000/houses/${houseId}`));
  }, [dispatch, houseId]);

  const house = useSelector((state) => state.housesReducer.choosedHouse);

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
        <section className="p-20 bg-gray-300 flex justify-center">
          <Carousel interval={1500} autoPlay infiniteLoop className='w-1/2 -mt-44 z-10'>
            {house.pictures.map((pic,i) => (
              <div key={i}>
                <img src={pic} alt='home_pic'/>
              </div>
            ))}
          </Carousel>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HousePage;
