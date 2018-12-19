import reducer from '../socialauthreducer';

const initialState = {
  userData: {},
  isLoading: false,
  resolved: false,
  error: '',
};

describe('reducers', () => {
  it('it should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('it should return new state on dispatching SOCIAL_LOGIN action', () => {
    expect(reducer(initialState, { type: 'SOCIAL_LOGIN' }).isLoading).toEqual(true);
  });
});
