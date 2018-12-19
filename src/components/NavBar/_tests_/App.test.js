import React from 'react';
import ReactDOM from 'react-dom';
import { NavBarComponent } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<NavBarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
