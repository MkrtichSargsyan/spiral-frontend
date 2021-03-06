import * as types from '../types';

const initialState = {
  agents: [],
  loading: false,
  error: null,
  choosedAgent: null,
  agentHouses: [],
};

const agentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AGENTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_AGENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        agents: action.agentsList,
      };
    case types.FETCH_AGENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.CHOOSE_AGENT:
      return {
        ...state,
        choosedAgent: action.choosedAgent,
      };
    case types.FETCH_AGENTS_HOUSES_SUCCESS:
      return {
        ...state,
        agentHouses: action.agentHousesList,
      };
    case types.FETCH_AGENT_BY_ID:
      return {
        ...state,
        choosedAgent: action.choosedAgent,
      };
    default:
      return state;
  }
};

export default agentsReducer;
