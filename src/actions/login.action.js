import axios from 'axios';

export const loginStart = () => ({
  type: 'LOGIN_START',
});


export const loginSuccess = response => ({
  type: 'LOGIN_SUCCESS',
  payload: response,
});

export const loginFailed = error => ({
  type: 'LOGIN_FAILED',
  payload: error,
});


// dispatch apropriate action for login
const loginUser = (loginData, props) => {
  const url = `${process.env.REACT_APP_URL}users/login/`;
  return (dispatch) => {
    dispatch(loginStart());
    return axios.post(url,
      { user: { email: loginData.email, password: loginData.password } }).then(
      (response) => {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch(loginSuccess(response));
        props.history.push('/');
      },
      (err) => {
        dispatch(loginFailed(err.response));
        props.history.push('/login');
        setTimeout(() => {
          window.location.reload(1);
        }, 5000);
      },
    );
  };
};
export default loginUser;
