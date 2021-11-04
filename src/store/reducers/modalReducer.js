import * as types from '../types';

const initialState = {
  loginIsOpen: false,
  registerIsOpen: false,
  applyIsOpen: false,
  flashIsOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        [action.payload]: true,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        loginIsOpen: false,
        registerIsOpen: false,
        applyIsOpen: false,
        flashIsOpen: false,
      };
    default:
      return { ...state };
  }
};

export default modalReducer;
