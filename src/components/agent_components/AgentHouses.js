import React from 'react';
import { useSelector } from 'react-redux';

import HousePreview from '../house_components/HousePreview';

function AgentHouses() {
  const agentHousesList = useSelector(
    (state) => state.agentsReducer.agentHouses
  );

  return (
    <div className="border-1 border-black flex w-full flex-wrap">
      {agentHousesList.map((house) => (
        <HousePreview
          key={house.id}
          pictures={house.pictures}
          price={house.price}
          address={house.address}
          bedrooms={house.bedrooms}
          bathrooms={house.bathrooms}
        />
      ))}
    </div>
  );
}

export default AgentHouses;
