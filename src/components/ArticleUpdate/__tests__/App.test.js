import React from 'react';
import { shallow, mount } from 'enzyme';
import { store } from '../../../store';
import ArticleUpdate from '../App';

function setup() {
  const props = {
    login: jest.fn(),
  };
  const Update = mount(<div className="form-input">ArticleUpdate</div>);
  const enzymeWrapper = shallow(<ArticleUpdate store={store} {...props} />);
  return {
    props,
    enzymeWrapper,
    Update,
  };
}

describe('Update form components', () => {
  describe('update', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.container').length).toBe(0);
    });
  });
});

describe('update form', () => {
  it('should render without crushing', () => {
    const { Update } = setup();
    expect(Update.exists('.form-input')).toBe(true);
  });
});
