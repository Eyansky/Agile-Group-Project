import { likeacticle, dislikeacticle, LIKE_ARTICLE, DISLIKE_ARTICLE, likesArticleActions, dislikesArticleActions } from '../likesDislikesactions';


describe('reset password action creators', () => {
  it('Should dispatch type like article', () => {
    expect(likeacticle({}).type).toEqual(LIKE_ARTICLE);
  });
  it('Should dispatch type dislike article', () => {
    expect(dislikeacticle({}).type).toEqual(DISLIKE_ARTICLE);
  });
});

it('should dispatch the like article action', () => {
  const input = 'like article';
  const success = LIKE_ARTICLE;
  const expectedActionSuccess = {
    input,
    type: success,
  };
  expect(likeacticle(input)).toEqual(expectedActionSuccess);
});

it('should dispatch the dislike article action', () => {
  const input = 'dislike article';
  const success = DISLIKE_ARTICLE;
  const expectedActionSuccess = {
    input,
    type: success,
  };
  expect(dislikeacticle(input)).toEqual(expectedActionSuccess);
});

describe('actions for like and dislike', () => {
  it('check if it returns a promise', () => {
    const slug = 'this-is-an-article';
    // eslint-disable-next-line no-unused-expressions
    expect(likesArticleActions(slug)).toBeUndefined;
  });
  it('check if it returns a promise', () => {
    const slug = 'this-is-an-article';
    // eslint-disable-next-line no-unused-expressions
    expect(dislikesArticleActions(slug)).toBeUndefined;
  });
});
