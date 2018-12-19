import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../../store';
import HomePage from '../App';

function setup() {
  const props = {
    login: jest.fn(),
  };
  const enzymeWrapper = shallow(<HomePage {...props} store={store} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('login components', () => {
  describe('login', () => {
    it('shou ld render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').length).toBe(0);
    });
  });
});
