
import {
  deleteArticle, deleteArticleSuccess, deleteArticleFailure,
} from '../articles.action';

import { DELETE_ARTICLE, DELETE_ARTICLE_FAILURE, DELETE_ARTICLE_SUCCESS } from '../../constants/articles';

describe('Articles action creators', () => {
  it('Should dispatch DELETE_ARTICLE_SUCCESS type', () => {
    expect(deleteArticleSuccess({}).type).toEqual(DELETE_ARTICLE_SUCCESS);
  });
  it('Should dispatch DELETE_ARTICLE_FAILURE type', () => {
    expect(deleteArticleFailure({}).type).toEqual(DELETE_ARTICLE_FAILURE);
  });
  it('Should dispatch DELETE_ARTICLE type', () => {
    expect(deleteArticle({}).type).toEqual(DELETE_ARTICLE);
  });
});

describe('Article actions', () => {
  it('should create deleteArticleFailure action', () => {
    const payload = 'create deleteArticleFailure';
    const expectedAction = {
      type: DELETE_ARTICLE_FAILURE,
      payload,
    };
    expect(deleteArticleFailure(payload)).toEqual(expectedAction);
  });

  it('should create deleteArticleSuccess action', () => {
    const payload = 'create deleteArticleSuccess';
    const expectedAction = {
      type: DELETE_ARTICLE_SUCCESS,
      payload,
    };
    expect(deleteArticleSuccess(payload)).toEqual(expectedAction);
  });
});
