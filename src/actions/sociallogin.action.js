import axios from 'axios';
import { SOCIAL_LOGIN_SUCCESS } from '../constants';

export const socialSuccess = userData => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload: userData,
});

const SocialAuthAct = socialData => dispatch => (
  axios.post(`${process.env.REACT_APP_URL}social_auth/`, socialData)
    .then(response => dispatch(socialSuccess(response.data)),
    )
);

export default SocialAuthAct;
