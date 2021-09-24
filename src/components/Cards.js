import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.jpeg';
import agentIcon from '../images/agentIcon.jpeg';
import AnimButton from '../ui_kits/AnimButton';
import Card from './Card';

function Cards() {
  return (
    <div className="z-50 w-3/5 bg-gray-100 flex absolute -bottom-52">
      <Card
        icon={homeIcon}
        iconName="homeIcon"
        title="Find a Home"
        description="We not only help to find you the perfect house for whatever stage of
                    life you’re in, we help to find you the perfect home for building
                    lasting memories."
        buttonText="VIEW PROPERTIES"
        link="/"
        color="bg-green-700"
        colorHover="bg-green-500"
      />
      <Card
        icon={agentIcon}
        iconName="agentIcon"
        title="Our Agents"
        description="Our large team of agents is among the most experienced and 
                      knowledgeable in the area and are ready to put our expertise to work for you."
        buttonText="MEET THE TEAM"
        link="/"
        color="bg-blue-700"
        colorHover="bg-blue-500"
      />
    </div>
  );
}

export default Cards;
