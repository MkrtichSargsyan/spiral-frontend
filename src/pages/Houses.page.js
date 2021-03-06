import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HousesList from '../components/house_components/HousesList';
import Loader from '../components/Loader';
import re2 from '../images/realEstate/re2.jpeg';
import { fetchHouses } from '../store/actions';
import baseUrl from '../endpoints';

function HousesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses(`${baseUrl}/houses`));
  }, [dispatch]);

  const houses = useSelector((state) => state.housesReducer.houses);
  const loading = useSelector((state) => state.housesReducer.loading);

  return (
    <>
      <section
        className="w-full relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
        style={{
          height: '80vh',
          transition: 'all 2s ease-in-out',
          backgroundImage: `url(${re2})`,
        }}
      >
        <div className="text-center z-40 w-full flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl text-white mb-3 font-caramel">
            Homes for Sale
          </h1>
        </div>
        <div className="w-full h-full bg-black absolute z-10 opacity-75" />
      </section>

      <section className="md:p-20 bg-gray-300">
        {loading ? <Loader /> : <HousesList allHouses={houses} />}
      </section>
    </>
  );
}

export default HousesPage;
