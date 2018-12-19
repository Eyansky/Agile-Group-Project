
const initialState = {
  isloginIn: false,
  loginSucceful: false,
};

const loginSuccess = {
  isloginIn: false,
  loginSucceful: true,
  loginFailed: false,
};

const loginFail = {
  isloginIn: false,
  loginSucceful: false,
  loginFailed: true,
  errors: true,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isloginIn: true,
        loginSucceful: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...loginSuccess,
        responseData: action.payload,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        ...loginFail,
        responseData: action.payload,
      };
    default: return state;
  }
};

export default loginReducer;
