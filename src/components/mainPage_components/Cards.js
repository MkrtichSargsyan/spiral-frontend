import React from 'react';
import homeIcon from '../../images/homeIcon.jpeg';
import agentIcon from '../../images/agentIcon.jpeg';
import Card from './Card';

function Cards() {
  return (
    <div className="px-6 top-80 w-full flex flex-col md:flex-row md:w-10/12 lg:w-5/6 xl:w-3/5">
      <Card
        icon={homeIcon}
        iconName="homeIcon"
        title="Find a Home"
        description="We not only help to find you the perfect house for whatever stage of
                    life you’re in, we help to find you the perfect home for building
                    lasting memories."
        buttonText="VIEW PROPERTIES"
        link="/houses"
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
        link="/agents"
        color="bg-blue-700"
        colorHover="bg-blue-500"
      />
    </div>
  );
}

export default Cards;
