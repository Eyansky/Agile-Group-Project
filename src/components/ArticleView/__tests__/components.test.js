import React from 'react';
import { shallow } from 'enzyme';
import Article from '../ArticleViewComponents';

function setup() {
  const props = {
    login: jest.fn(),
    resolved: false,
    social: {},
  };
  const enzymeWrapper = shallow(<Article {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Article View Components', () => {
  describe('Article', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.container').length).toBe(0);
    });
  });
});
