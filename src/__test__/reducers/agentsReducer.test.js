import agentsReducer from '../../store/reducers/agentsReducer';
import * as types from '../../store/types';

describe('agentsReducer', () => {
  const initialState = {
    agents: [],
    loading: false,
    error: null,
    choosedAgent: null,
    agentHouses: [],
  };

  it('should return initialState', () => {
    const result = agentsReducer(
      {
        agents: [],
        loading: false,
        error: null,
        choosedAgent: null,
        agentHouses: [],
      },
      {},
    );
    expect(result).toEqual(initialState);
  });

  it('It expect to FETCH_AGENTS_START', () => {
    expect(
      agentsReducer(initialState, { type: types.FETCH_AGENTS_START }),
    ).toEqual({ ...initialState, loading: true });
  });
});
