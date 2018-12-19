import axios from 'axios';

export const RESET_PASSWORD = 'SIGNUP_ERROR';

export const resetPassword = input => ({
  type: RESET_PASSWORD,
  input,
});
// eslint-disable-next-line no-unused-vars
const sendEmail = input => dispatch => axios.post(`${process.env.REACT_APP_URL}users/forget/`, input);
export default sendEmail;
