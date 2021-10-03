import * as types from '../types';

const initialState = {
  // isOpen: false,
  loginIsOpen: false,
  registerIsOpen: false,
  flashIsOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.OPEN_MODAL:
      console.log('sdfsdf');
      return {
        ...state,
        [action.payload]:true
      };
    case types.CLOSE_MODAL:
        return {
          ...state, 
          // isOpen: false,
          loginIsOpen:false,
          registerIsOpen:false,
          flashIsOpen:false,
        };
    default:
      return { ...state };
  }
};
