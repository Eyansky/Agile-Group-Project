import { GET_PROFILE } from '../constants';
import initialState from './initialState';

const profileReducer = (state = initialState.userProfile, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${GET_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case `${GET_PROFILE}_FULFILLED`:
      return {
        ...state,
        profile: payload.data.profile,
        loading: false,
        success: true,
      };
    case `${GET_PROFILE}_REJECTED`:
      return {
        ...state,
        loading: false,
        errors: payload.response.data.profile,
        success: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
