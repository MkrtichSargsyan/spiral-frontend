import * as types from '../types';

const initialState = {
  user: null,
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        user: action.user,
      };
    case types.SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
