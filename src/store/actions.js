import axios from 'axios';
import * as types from './types';

const fetchAgentsStart = () => ({
  type: types.FETCH_AGENTS_START,
});

const fetchAgentsSuccess = (agentsList) => ({
  type: types.FETCH_AGENTS_SUCCESS,
  agentsList,
});

const fetchAgentsError = (e) => ({
  type: types.FETCH_AGENTS_ERROR,
  error: e,
});

export const fetchAgents = (url) => async (dispatch) => {
  dispatch(fetchAgentsStart());

  try {
    const response = await axios.get(url);
    dispatch(fetchAgentsSuccess(response.data));
  } catch (e) {
    dispatch(fetchAgentsError(e));
  }
};

// choose agent

export const chooseAgent = (choosedAgent) => ({
  type: types.CHOOSE_AGENT,
  choosedAgent,
});

// fetch agent houses

const fetchAgentByIdSuccess = (choosedAgent) => ({
  type: types.FETCH_AGENT_BY_ID,
  choosedAgent,
});

export const fetchAgentById = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    dispatch(fetchAgentByIdSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
};

const fetchAgentHousesSuccess = (agentHousesList) => ({
  type: types.FETCH_AGENTS_HOUSES_SUCCESS,
  agentHousesList,
});

export const fetchAgentHouses = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    dispatch(fetchAgentHousesSuccess(response.data));
  } catch (e) {
    // console.log('show error');
  }
};

// fetch houses

const fetchHousesStart = () => ({
  type: types.FETCH_HOUSES_START,
});

const fetchHousesSuccess = (housesList) => ({
  type: types.FETCH_HOUSES_SUCCESS,
  housesList,
});

const fetchHousesError = (e) => ({
  type: types.FETCH_HOUSES_ERROR,
  error: e,
});

export const fetchHouses = (url) => async (dispatch) => {
  dispatch(fetchHousesStart());

  try {
    const response = await axios.get(url);
    dispatch(fetchHousesSuccess(response.data));
  } catch (e) {
    dispatch(fetchHousesError(e));
  }
};

//  choose house id

export const chooseHouse = (choosedHouseId) => ({
  type: types.CHOOSE_HOUSE,
  choosedHouseId,
});

// fetch house by id

const fetchHouseByIdSuccess = (choosedHouse) => ({
  type: types.FETCH_HOUSE_BY_ID,
  choosedHouse,
});

export const fetchHouseById = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    dispatch(fetchHouseByIdSuccess(response.data));
  } catch (e) {
    // console.log(e);
  }
};

// save user

export const saveUser = (user) => ({
  type: types.SAVE_USER,
  user,
});

// save token

export const saveToken = (token) => ({
  type: types.SAVE_TOKEN,
  token,
});

// modal actions

export const openModal = (modalType) => ({
  type: types.OPEN_MODAL,
  payload: modalType,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
});
