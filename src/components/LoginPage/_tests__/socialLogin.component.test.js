import React from 'react';
import { shallow } from 'enzyme';
import Buttons from '../socialButton';

function setup() {
  const props = {
    login: jest.fn(),
    resolved: false,
    social: {},
  };
  const enzymeWrapper = shallow(<Buttons {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('social login components', () => {
  describe('login', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.btn-google').length).toBe(1);
      expect(enzymeWrapper.find('.btn-facebook').length).toBe(1);
    });
  });
});
