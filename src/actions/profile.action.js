import { GET_PROFILE, UPDATE_USER_PROFILE, LOAD_USER_ARTICLES } from '../constants';
import api from '../api';

export const getProfileAction = username => ({
  type: GET_PROFILE,
  payload: api({
    url: `/profiles/${username}/`,
    method: 'GET',
  }),
});

export const updateUserProfileAction = userData => ({
  type: UPDATE_USER_PROFILE,
  payload: api({
    url: '/user/',
    method: 'PUT',
    data: { user: userData },
  }),
});

export const userArticlesAction = username => ({
  type: LOAD_USER_ARTICLES,
  payload: api({
    url: `/article?author=${username}`,
    method: 'GET',
  }),
});
