/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AgentHouses from '../components/agent_components/AgentHouses';
import re4 from '../images/realEstate/re4.jpg';
import { chooseAgent, fetchAgentHouses } from '../store/actions';
import baseUrl from '../endpoints';

function AgentPage(props) {
  const dispatch = useDispatch();
  const {
    id, name, title, photo, number,
  } = props.location.state;

  useEffect(() => {
    dispatch(chooseAgent(props.location.state));
    dispatch(fetchAgentHouses(`${baseUrl}/agents/${id}/houses`));
    window.scrollTo(0, 0);
  }, [dispatch, id, props.location.state]);

  return (
    <>
      <section
        className="relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
        style={{
          height: '110vh',
          width: '100%',
          transition: 'all 2s ease-in-out',
          backgroundSize: 'cover',
          backgroundImage: `url(${re4})`,
        }}
      >
        <div>
          <div className="px-3 md:px-0 text-center z-40 mt-40 flex justify-center md:w-max">
            <img
              src={photo}
              alt="agent_photo"
              className="w-40 h-40 rounded-full mr-4 md:mr-12"
            />
            <div className="flex flex-col md:items-start justify-center">
              <h1 className="text-5xl text-white capitalize mb-2 italic">
                {name}
              </h1>
              <h2 className="text-gray-500 text-3xl italic">{title}</h2>
            </div>
          </div>
          <p className="text-center mt-10 text-4xl text-white z-40 font-bold">
            {number}
          </p>
        </div>
        <div className="w-full h-full bg-black absolute z-10 opacity-70" />
      </section>
      <section className="bg-gray-300 p-8 md:p-14">
        <h3 className="text-2xl md:text-4xl w-max text-gray-900 pb-2 border-b-2 border-blue-900 mb-20">
          {name}
          's Listings
        </h3>
        <AgentHouses />
      </section>
    </>
  );
}

AgentPage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

AgentPage.defaultProps = {
  id: 0,
  name: '',
  photo: '',
  number: '',
};

export default AgentPage;
