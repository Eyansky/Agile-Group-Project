import alertConstants from '../../constants/alert.constants';
import alertActions from '../alert.actions';


const Action = {
  type: alertConstants.ERROR,
};
const Action2 = {
  type: alertConstants.SUCCESS,
};


describe('actions', () => {
  it('it should test actions', () => {
    const expectAction = {
      type: alertConstants.CLEAR,
    };
    expect(alertActions.clear()).toEqual(expectAction);
    expect(alertActions.error()).toEqual(Action);
    expect(alertActions.success()).toEqual(Action2);
  });
});
