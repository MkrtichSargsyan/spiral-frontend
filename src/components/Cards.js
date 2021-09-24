import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.jpeg';
import agentIcon from '../images/agentIcon.jpeg';

function Cards() {
  return (
    <div className="z-50 w-2/3 bg-red-400 flex absolute -bottom-28">
      <article className="flex flex-col border-2 items-center">
        <div className="w-20 h-20 ">
          <img
            src={homeIcon}
            alt="homeIcon"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2>Find a Home</h2>
        <p>
          We not only help to find you the perfect house for whatever stage of
          life you’re in, we help to find you the perfect home for building
          lasting memories.
        </p>
        <div>
          <Link to="/">VIEW PROPERTIES</Link>
        </div>
      </article>
      <article className="flex flex-col border-2">
        <img src="" alt="" />
        <h2>Find a Home</h2>
        <p>
          We not only help to find you the perfect house for whatever stage of
          life you’re in, we help to find you the perfect home for building
          lasting memories.
        </p>
        <div>
          <Link to="/">VIEW PROPERTIES</Link>
        </div>
      </article>
    </div>
  );
}

export default Cards;
