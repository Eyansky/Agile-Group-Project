import { loginStart, loginSuccess, loginFailed } from '../login.action';

const expectedAction = {
  type: 'LOGIN_FAILED',
  payload: {},
};

const Action = {
  type: 'LOGIN_SUCCESS',
  payload: {},
};

describe('actions', () => {
  it('it should test actions', () => {
    const expectAction = {
      type: 'LOGIN_START',
    };
    expect(loginStart()).toEqual(expectAction);
    expect(loginFailed(expectedAction.payload)).toEqual(expectedAction);
    expect(loginSuccess(Action.payload)).toEqual(Action);
  });
});
