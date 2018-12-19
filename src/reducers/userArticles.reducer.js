import { LOAD_USER_ARTICLES } from '../constants';
import initialState from './initialState';

const userArticlesReducer = (state = initialState.userArticles, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${LOAD_USER_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case `${LOAD_USER_ARTICLES}_FULFILLED`:
      return {
        ...state,
        articles: payload.data.article.results,
        loading: false,
        success: true,
      };
    case `${LOAD_USER_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false,
        errors: payload.response.data.errors,
        success: false,
      };
    default:
      return state;
  }
};

export default userArticlesReducer;
