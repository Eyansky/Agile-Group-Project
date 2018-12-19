import { SOCIAL_LOGIN, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAILURE } from '../constants';


const initialState = {
  userData: {},
  isLoading: false,
  resolved: false,
  error: '',
};

const SocialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resolved: true,
        userData: action.payload,
      };
    case SOCIAL_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default SocialAuthReducer;
