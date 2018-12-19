import React, { createRef } from 'react';
import { shallow } from 'enzyme';
import { LikesDislikes } from '../likedislike';

function setup() {
  const props = {
    dislikesArticleActions: jest.fn(),
    likesArticleActions: jest.fn(),
  };
  const enzymeWrapper = shallow(<LikesDislikes {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
describe('like dislike components', () => {
  describe('like dislike', () => {
    it('should check for the components rendered', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#likebutton').length).toBe(2);
      expect(enzymeWrapper.find('div').length).toBe(1);
      expect(enzymeWrapper.find('#thumbsdown').length).toBe(1);
      expect(enzymeWrapper.find('#thumbsup').length).toBe(1);
    });
    it('should measure and position items after mounting', () => {
      const innerRef = createRef();
      const onRender = jest.fn(() => {
        switch (onRender.mock.calls.length) {
          case 1:
            expect(innerRef.current.style.height).toBe('500px');

            break;

          default:
            throw Error('Unexpected render');
        }
      });
    });
  });
});
const props = {
  dislikesArticleActions: jest.fn(),
  likesArticleActions: jest.fn(),
};
const wrapper = shallow(<LikesDislikes {...props} />);
describe('componentDidMount', () => {
  it('calls componentDidMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
    expect(wrapper.find('div').length).toBe(1);
  });
});
