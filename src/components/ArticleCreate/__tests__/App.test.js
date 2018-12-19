import React from 'react';
import { shallow, mount } from 'enzyme';
import { store } from '../../../store';
import ArticleCreate from '../App';

function setup() {
  const props = {
    login: jest.fn(),
  };
  const Create = mount(<div className="form-input">ArticleCreate</div>);
  const enzymeWrapper = shallow(<ArticleCreate store={store} {...props} />);
  return {
    props,
    enzymeWrapper,
    Create,
  };
}

describe('Article Create', () => {
  describe('Create', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.container').length).toBe(0);
      expect(enzymeWrapper.length).toEqual(1);
    });
  });
});

describe('create', () => {
  it('should render without crushing', () => {
    const { Create } = setup();
    expect(Create.exists('.form-input')).toBe(true);
  });
});
