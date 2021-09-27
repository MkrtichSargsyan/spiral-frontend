/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AgentsList from '../components/AgentsList';
import Loader from '../components/Loader';
import re2 from '../images/realEstate/re2.jpeg';
import { fetchAgents } from '../store/actions';

function AgentsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchAgents('http://localhost:3000/agents'));
  }, [dispatch]);

  const agents = useSelector((state) => state.agentsReducer.agents);
  const loading = useSelector((state) => state.agentsReducer.loading);

  return (
    <>
      <section
        className="relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
        style={{
          height: '80vh',
          width: '100%',
          transition: 'all 2s ease-in-out',
          backgroundSize: 'cover',
          backgroundImage: `url(${re2})`,
        }}
      >
        <div className="text-center z-40 w-full flex flex-col items-center">
          <h1 className="text-6xl text-white mb-3 font-caramel">Our Agents</h1>
        </div>
        <div className="w-full h-full bg-black absolute z-10 opacity-75"></div>
      </section>
      <section className="p-20 bg-gray-300">
        {loading ? <Loader /> : <AgentsList allAgents={agents} />}
      </section>
    </>
  );
}

export default AgentsPage;
