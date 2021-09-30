import * as types from '../types';

const initialState = {
  houses: [],
  loading: false,
  error: null,
  choosedHouseId: null,
  choosedHouse:null
  // agentHouses: [],
};

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_HOUSES_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        houses: action.housesList,
      };
    case types.FETCH_HOUSES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.CHOOSE_HOUSE:
      return {
        ...state,
        choosedHouseId: action.choosedHouseId,
      };
    // fetch house by id
    case types.FETCH_HOUSE_BY_ID:
      return {
        ...state,
        choosedHouse: action.choosedHouse,
      };
    // case types.FETCH_AGENTS_HOUSES_SUCCESS:
    //   return {
    //     ...state,
    //     agentHouses: action.agentHousesList,
    //   };
    default:
      return state;
  }
};
