import reducer from '../updateUserProfile.reducer';

const initialState = {
  userProfile: {},
  errors: {},
  loading: false,
  success: false,
};

describe('profile update reducer', () => {
  it('it should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle dispatch of  action', () => {
    expect(reducer(initialState, {
      type: 'UPDATE_USER_PROFILE_PENDING',
      userProfile: {},
      errors: {},
      loading: true,
      success: false,
    })).toEqual({
      userProfile: {},
      errors: {},
      loading: true,
      success: false,
    });
  });
  // it('it should handle dispatch of LOGIN_SUCCESS action', () => {
  //   expect(reducer(initialState, { type: 'LOGIN_SUCCESS' }).loginSucceful).toEqual(true);
  // });
  // it('it should handle dispatch of LOGIN_FAILED action', () => {
  //   expect(reducer(initialState, { type: 'LOGIN_FAILED' }).loginFailed).toEqual(true);
  // });
});
