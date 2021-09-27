import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function AgentHouses() {
  const agentHousesList = useSelector(
    (state) => state.agentsReducer.agentHouses
  );
  console.log(agentHousesList);

  return <div>
    
  </div>;
}

export default AgentHouses;
