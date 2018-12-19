import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginConnected, { Login, SocialLoginUl, FormGroup } from '../App';

const initialState = {};

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState);
  shallow(<LoginConnected store={store} />);
});


function setup(Component) {
  const props = {
    handleSubmit: jest.fn(),
  };
  const enzymeWrapper = shallow(<Component {...props} onClick={props.handleSubmit} />);

  return {
    props,
    enzymeWrapper,
  };
}


describe('login components', () => {
  describe('login', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup(Login);
      expect(enzymeWrapper.find('#login-form').length).toBe(1);
      expect(enzymeWrapper.find('.signin-content').length).toBe(1);
      expect(enzymeWrapper.find('.signin-form').length).toBe(1);
      expect(enzymeWrapper.find('.form-title').length).toBe(1);
    });

    it('should render form', () => {
      store = mockStore(initialState);
      const wrapper = shallow(<Login store={store} />);
      expect(wrapper.find('.register-form').length).toEqual(1);
    });

    it('renders social login', () => {
      const wrapper = shallow(<SocialLoginUl />);
      expect(wrapper.find('.social-login').length).toEqual(1);
    });

    it('renders form group', () => {
      const prop = {
        handleSubmit: jest.fn(),
      };
      const wrapper = shallow(<FormGroup {...prop} />);
      expect(wrapper.find('.form-group').length).toEqual(1);
      expect(wrapper.find('#signin').length).toEqual(1);
    });
  });
});
