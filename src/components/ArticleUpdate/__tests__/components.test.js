import React from 'react';
import { shallow } from 'enzyme';
import UpdateForm from '../UpdateForm';
import { store } from '../../../store';

function setup() {
  const props = {
    login: jest.fn(),
    resolved: false,
    social: {},
  };
  const enzymeWrapper = shallow(<UpdateForm store={store} {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Update form', () => {
  describe('update', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.container').length).toBe(0);
    });
  });
});
