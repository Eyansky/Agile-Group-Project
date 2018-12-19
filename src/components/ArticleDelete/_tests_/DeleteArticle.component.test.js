import React from 'react'; import { shallow } from 'enzyme';
import DeleteArticle from '../DeleteArticle';
import { store } from '../../../store/index';

function setup() {
  const props = {
    handleDelete: () => {},
  };
  const enzymeWrapper = shallow(<DeleteArticle {...props} store={store} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('delete article components', () => {
  describe('delete', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.length).toEqual(1);
    });
  });
});
