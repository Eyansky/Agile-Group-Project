import registration, { initialState } from '../signup.reducer';
import userConstants from '../../constants/signup.constants';

describe('Signup reducers', () => {
  it('should provide the initial state', () => {
    expect(registration(undefined, {})).toEqual(initialState);
  });

  it('should add signup to the state', () => {
    expect(registration(initialState, {})).toEqual(initialState);
  });

  it('should set signup success', () => {
    expect(registration(initialState, { type: userConstants.REGISTER_SUCCESS })
      .success).toEqual(true);
  });

  it('should set signup error', () => {
    expect(registration(initialState, { type: userConstants.REGISTER_FAILURE, payload: {} })
      .success).toEqual(false);
  });
});
