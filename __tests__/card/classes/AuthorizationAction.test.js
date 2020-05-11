const AuthorizationAction = require('../../../src/script-services/card/classes/AuthorizationAction');

describe('AuthorizationAction', () => {
  it('Should set the function name', () => {
    const data = new AuthorizationAction()
      .setAuthorizationUrl('test-auth-url')
      .getData();

    expect(data).toEqual({ url: 'test-auth-url' });
  });
});
