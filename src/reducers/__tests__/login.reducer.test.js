import reducer from '../loginReducer';

const initialState = {
  isloginIn: false,
  loginSucceful: false,

};

describe('login reducer', () => {
  it('it should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle dispatch of LOGIN_START action', () => {
    expect(reducer(initialState, {
      type: 'LOGIN_START',
      isloginIn: true,
    })).toEqual({
      isloginIn: true,
      loginSucceful: false,
    });
  });
  it('it should handle dispatch of LOGIN_SUCCESS action', () => {
    expect(reducer(initialState, { type: 'LOGIN_SUCCESS' }).loginSucceful).toEqual(true);
  });
  it('it should handle dispatch of LOGIN_FAILED action', () => {
    expect(reducer(initialState, { type: 'LOGIN_FAILED' }).loginFailed).toEqual(true);
  });
});
