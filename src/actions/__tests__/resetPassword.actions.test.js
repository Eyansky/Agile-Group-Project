import { resetPassword, RESET_PASSWORD } from '../resetPassword';


describe('reset password action creators', () => {
  it('Should dispatch type RESET_PASSWORD', () => {
    expect(resetPassword({}).type).toEqual(RESET_PASSWORD);
  });
});

it('should dispatch the reset password action', () => {
  const input = 'reset password';
  const success = RESET_PASSWORD;
  const expectedActionSuccess = {
    input,
    type: success,
  };
  expect(resetPassword(input)).toEqual(expectedActionSuccess);
});
