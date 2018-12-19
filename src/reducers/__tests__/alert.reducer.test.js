import reducer from '../alert.reducer';

const initialState = {};

describe('alert reducer', () => {
  it('it should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle dispatch of alert-success action', () => {
    const payload = 'some success message';
    expect(reducer(initialState, {
      type: 'ALERT_SUCCESS',
      message: payload,
    })).toEqual({
      type: 'alert-success',
      message: payload,
    });
  });
  it('it should handle dispatch of alert failed action', () => {
    const payload = 'some error message'
    expect(reducer(initialState, { type: 'ALERT_ERROR', message: payload })).toEqual({
      type: 'alert-danger',
      message: payload,
    });
  });
  it('it should handle dispatch of LOGIN_FAILED action', () => {
    expect(reducer(initialState, { type: 'ALERT_CLEAR' })).toEqual({
    });
  });
});
