import { GET_ARTICLES, VIEW_ARTICLE, DELETE_ARTICLE, DELETE_ARTICLE_REQUEST, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE, UPDATE_ARTICLE } from '../constants/articles';

const initialState = [];
const articleState = {};

const initialDeleteState = {
  isDeleting: false,
  deleted: false,
  error: '',
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};

export const viewarticle = (state = articleState, action) => {
  switch (action.type) {
    case VIEW_ARTICLE:
      return action.payload;
    default:
      return state;
  }
};

export const deleteArticle = (state = initialDeleteState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        isDeleting: false,
        deleted: false,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        isDeleting: true,
        deleted: false,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        deleted: true,
      };
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        deleted: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const updateArticle = (state = articleState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE:
      return action.type;
    default:
      return state;
  }
};
