import { UPDATE_USER_PROFILE } from '../constants';
import initialState from './initialState';

const updateUserProfileReducer = (state = initialState.updateProfile, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${UPDATE_USER_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case `${UPDATE_USER_PROFILE}_FULFILLED`:
      return {
        ...state,
        userProfile: payload.data.user,
        loading: false,
        success: true,
      };

    case `${UPDATE_USER_PROFILE}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        errors: payload.response.data.Message,
      };

    default:
      return state;
  }
};

export default updateUserProfileReducer;
