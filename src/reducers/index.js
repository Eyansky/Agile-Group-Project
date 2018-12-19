import { combineReducers } from 'redux';
import registration from './signup.reducer';
import alert from './alert.reducer';
import SocialAuthReducer from './socialauthreducer';
import { articles, viewarticle, deleteArticle, updateArticle } from './articlesReducer';
import loginReducer from './loginReducer';
import profileReducer from './profile.reducer';
import userArticlesReducer from './userArticles.reducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  viewarticle,
  articles,
  social: SocialAuthReducer,
  login: loginReducer,
  registration,
  alert,
  profile: profileReducer,
  profileArticles: userArticlesReducer,
  deleteReducer: deleteArticle,
  updateArticle,
});

export default allReducers;
