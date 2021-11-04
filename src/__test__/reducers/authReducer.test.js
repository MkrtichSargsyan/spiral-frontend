import authReducer from '../../store/reducers/authReducer';
import * as types from '../../store/types';

describe('authReducer', () => {
  const initialState = {
    user: null,
    token: '',
  };

  it('should return initialState', () => {
    const result = authReducer(
      {
        user: null,
        token: '',
      },
      {},
    );
    expect(result).toEqual(initialState);
  });

  it('It expect to get the user', () => {
    expect(
      authReducer(initialState, { type: types.SAVE_USER, user: 'mike' }),
    ).toEqual({ ...initialState, user: 'mike' });
  });

  it('It expect to get the token', () => {
    expect(
      authReducer(initialState, { type: types.SAVE_TOKEN, token: 'mike' }),
    ).toEqual({ ...initialState, token: 'mike' });
  });
});
