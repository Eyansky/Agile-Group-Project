import React from 'react';
import { shallow } from 'enzyme';
import { HomePageView, LoginPage, Register } from '../HomePage';

it('renders HomePage component without crashing', () => {
  shallow(<HomePageView />);
});

it('renders LoginPage component without crashing', () => {
  shallow(<LoginPage />);
});
it('renders RegisterPage component without crashing', () => {
  shallow(<Register />);
});
