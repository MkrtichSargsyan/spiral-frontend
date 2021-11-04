import * as types from '../../store/types';

describe('actions', () => {
  it('should have a type of FETCH_AGENTS_SUCCESS', () => {
    expect(types.FETCH_AGENTS_SUCCESS).toEqual('FETCH_AGENTS_SUCCESS');
  });

  it('should have a type of FETCH_AGENTS_START', () => {
    expect(types.FETCH_AGENTS_START).toEqual('FETCH_AGENTS_START');
  });

  it('should have a type of FETCH_AGENTS_ERROR', () => {
    expect(types.FETCH_AGENTS_ERROR).toEqual('FETCH_AGENTS_ERROR');
  });

  it('should have a type of CHOOSE_AGENT', () => {
    expect(types.CHOOSE_AGENT).toEqual('CHOOSE_AGENT');
  });

  it('should have a type of FETCH_AGENT_HOUSES', () => {
    expect(types.FETCH_AGENT_HOUSES).toEqual('FETCH_AGENT_HOUSES');
  });

  it('should have a type of FETCH_AGENTS_HOUSES_SUCCESS', () => {
    expect(types.FETCH_AGENTS_HOUSES_SUCCESS).toEqual('FETCH_AGENTS_HOUSES_SUCCESS');
  });

  it('should have a type of FETCH_AGENT_BY_ID', () => {
    expect(types.FETCH_AGENT_BY_ID).toEqual('FETCH_AGENT_BY_ID');
  });

  it('should have a type of FETCH_HOUSES_START', () => {
    expect(types.FETCH_HOUSES_START).toEqual('FETCH_HOUSES_START');
  });

  it('should have a type of FETCH_HOUSES_SUCCESS', () => {
    expect(types.FETCH_HOUSES_SUCCESS).toEqual('FETCH_HOUSES_SUCCESS');
  });

  it('should have a type of FETCH_HOUSES_ERROR', () => {
    expect(types.FETCH_HOUSES_ERROR).toEqual('FETCH_HOUSES_ERROR');
  });

  it('should have a type of CHOOSE_HOUSE', () => {
    expect(types.CHOOSE_HOUSE).toEqual('CHOOSE_HOUSE');
  });

  it('should have a type of FETCH_HOUSE_BY_ID', () => {
    expect(types.FETCH_HOUSE_BY_ID).toEqual('FETCH_HOUSE_BY_ID');
  });

  it('should have a type of OPEN_MODAL', () => {
    expect(types.OPEN_MODAL).toEqual('OPEN_MODAL');
  });

  it('should have a type of CLOSE_MODAL', () => {
    expect(types.CLOSE_MODAL).toEqual('CLOSE_MODAL');
  });

  it('should have a type of SAVE_USER', () => {
    expect(types.SAVE_USER).toEqual('SAVE_USER');
  });

  it('should have a type of SAVE_TOKEN', () => {
    expect(types.SAVE_TOKEN).toEqual('SAVE_TOKEN');
  });
});
