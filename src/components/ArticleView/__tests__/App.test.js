import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../../store';
import ArticleView from '../App';

function setup() {
  const props = {
    login: jest.fn(),
  };
  const enzymeWrapper = shallow(<ArticleView {...props} store={store} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Articlc View', () => {
  describe('Article', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.container').length).toBe(0);
    });
  });
});
