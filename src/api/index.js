import axios from 'axios';
import authUser from '../utils/user.util';

export const authUserHeader = () => {
  const user = authUser();

  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`,
    };
  }
  return {};
};

export const client = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

export default ({ method, url, data }) => client({
  url,
  method,
  data,
});
