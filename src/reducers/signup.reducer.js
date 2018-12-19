import userConstants from '../constants/signup.constants';

export const initialState = {
  success: false,
  status: 'error',
  visible: false,
  message: '',
};

function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { };
    case userConstants.REGISTER_SUCCESS:
      return { success: true,
        status: 'success',
        visible: true,
        message: 'You have been successfully registered, kindly check your email to verify your account' };
    case userConstants.REGISTER_FAILURE:
      return { success: false, status: 'error', visible: true, message: action.user };
    default:
      return state;
  }
}

export default registration;
