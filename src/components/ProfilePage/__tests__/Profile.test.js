import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../Profile';

function setup() {
  const props = {
    resetPass: jest.fn(),
    match: { params: { username: 'john' } },
  };

  localStorage.setItem('user', '{"email": "john@jake.jake", "username": "john", "token": "token"}');
  const enzymeWrapper = shallow(<Profile {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('profile component', () => {
  describe('profile container', () => {
    it('render elements in Profile without crashing', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').length).toBe(6);
      expect(enzymeWrapper.find('button').length).toBe(1);
    });
  });
});
