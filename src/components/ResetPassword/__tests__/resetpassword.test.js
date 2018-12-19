import React from 'react';
import { shallow } from 'enzyme';
import { ResetPasswordComponent } from '../ResetPassword';

function setup() {
  const props = {
    resetPass: jest.fn(),
    sendEmail: jest.fn(),
  };
  const enzymeWrapper = shallow(<ResetPasswordComponent {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
describe('Reset Password components', () => {
  describe('reset', () => {
    it('should render elements for reset password', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#button').length).toBe(1);
      expect(enzymeWrapper.find('#email').length).toBe(1);
      expect(enzymeWrapper.find('#label').length).toBe(1);
    });
  });
});

describe('components', () => {
  describe('container outer', () => {
    it('It should find if the email textbox is present', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').length).toBe(4);
      expect(enzymeWrapper.find('Col').length).toBe(2);
    });
  });
});
