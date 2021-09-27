import * as types from '../store/types';

import axios from 'axios';

export const fetchAgents = (url) => {
  return async (dispatch) => {
    dispatch(fetchAgentsStart());

    try {
      const response = await axios.get(url);
      dispatch(fetchAgentsSuccess(response.data));
    } catch (e) {
      dispatch(fetchAgentsError(e));
    }
  };
};

const fetchAgentsStart = () => {
  return {
    type: types.FETCH_AGENTS_START,
  };
};

const fetchAgentsSuccess = (agentsList) => {
  return {
    type: types.FETCH_AGENTS_SUCCESS,
    agentsList,
  };
};

const fetchAgentsError = (e) => {
  return {
    type: types.FETCH_AGENTS_ERROR,
    error: e,
  };
};

// choose agent

export const chooseAgent = (choosedAgent) => {
  return {
    type: types.CHOOSE_AGENT,
    choosedAgent,
  };
};

// fetch agent houses

export const fetchAgentHouses = (url) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      dispatch(fetchAgentHousesSuccess(response.data));
    } catch (e) {
      console.log('show error');
    }
  };
};

const fetchAgentHousesSuccess = (agentHousesList) => {
  return {
    type: types.FETCH_AGENTS_HOUSES_SUCCESS,
    agentHousesList,
  };
};
