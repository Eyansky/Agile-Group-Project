import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../registerComponent';
import { store } from '../../../store';

const email = 'email@example.com';

it('renders register component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Register />
      </Router>
    </Provider>,
  );
  const node = wrapper.find('#email').at(1);
  node.simulate(
    'change',
    {
      target:
       { name: 'email', value: email },
    },
  );
  expect(node.instance().value).toBe(email);
  wrapper.find('#signup-form').simulate(
    'submit',
    { preventDefault() {} },
  );
});
