import { signUpError, signUpSuccess } from '../signup.actions';
import userConstants from '../../constants/signup.constants';


describe('Signup action creators', () => {
  it('Should dispatch type REGISTER_FAILURE', () => {
    expect(signUpError({}).type).toEqual(userConstants.REGISTER_FAILURE);
  });
  it('Should dispatch type REGISTER_SUCCESS', () => {
    expect(signUpSuccess({}).type).toEqual(userConstants.REGISTER_SUCCESS);
  });
});

it('should create register success action', () => {
  const user = 'create register success';
  const success = userConstants.REGISTER_SUCCESS;
  const expectedActionSuccess = {
    user,
    type: success,
  };
  expect(signUpSuccess(user)).toEqual(expectedActionSuccess);
});
it('should create register failure action', () => {
  const user = 'create register failure';
  const expectedActionFailure = {
    user,
    type: userConstants.REGISTER_FAILURE,
  };
  expect(signUpError(user)).toEqual(expectedActionFailure);
});
