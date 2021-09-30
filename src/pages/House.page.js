import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import re4 from '../images/realEstate/re4.jpg';
import { fetchHouseById } from '../store/actions';

function HousePage() {
  const dispatch = useDispatch();

  const houseId = useSelector((state) => state.housesReducer.choosedHouseId);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchHouseById(`http://localhost:3000/houses/${houseId}`));
  }, [dispatch, houseId]);

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
        <div className="text-center z-40 w-full flex flex-col items-center">
          <h1 className="text-6xl text-white mb-3 font-caramel">Our Agents</h1>
        </div>
        <div className="w-full h-full bg-black absolute z-10 opacity-75"></div>
      </section>
      <section className="p-20 bg-gray-300">
        d{/* {loading ? <Loader /> : <AgentsList allAgents={agents} />} */}
      </section>
    </>
  );
}

export default HousePage;
