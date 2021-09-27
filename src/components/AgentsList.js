import React from 'react';
import { Link } from 'react-router-dom';

function AgentsList({ allAgents }) {
  console.log(allAgents[0]);
  return (
    <div className="min-h-screen -mt-44 flex flex-wrap justify-center">
      {allAgents.map((agent) => (
        <Link to={`/agents/${agent.id}`}>
          <article className="border-b-2 border-blue-800 m-3 z-10 rounded-md transform hover:scale-110 duration-1000">
            <div className="flex flex-col items-center p-8 px-16 bg-gray-50">
              <img
                src={agent.photo}
                alt="agent_photo"
                className="w-24 h-24 rounded-full mb-3 font-bold"
              />
              <h2 className="mb-1 font-bold capitalize">{agent.name}</h2>
              <h2 className="text-gray-700 italic">{agent.title}</h2>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default AgentsList;
