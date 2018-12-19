import { deleteArticle } from '../articlesReducer';

const initialDeleteState = {
  isDeleting: false,
  deleted: false,
  error: '',
};

describe('reducers', () => {
  it('it should return the initial state', () => {
    expect(deleteArticle(undefined, {})).toEqual(initialDeleteState);
  });
  it('it should return new state on dispatching DELETE_ARTICLE_REQUEST action', () => {
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE_REQUEST' }).isDeleting).toEqual(false);
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE_REQUEST' }).deleted).toEqual(false);
  });
  it('it should return new state on dispatching DELETE_ARTICLE action', () => {
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE' }).deleted).toEqual(false);
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE' }).isDeleting).toEqual(true);
  });
  it('it should return new state on dispatching DELETE_ARTICLE_SUCCESS action', () => {
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE_SUCCESS' }).isDeleting).toEqual(false);
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE_SUCCESS' }).deleted).toEqual(true);
  });
  it('it should return new state on dispatching DELETE_ARTICLE_FAILURE action', () => {
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE_FAILURE' }).isDeleting).toEqual(false);
    expect(deleteArticle(initialDeleteState, { type: 'DELETE_ARTICLE_FAILURE' }).deleted).toEqual(false);
  });
});
