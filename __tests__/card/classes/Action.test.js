const Action = require('../../../src/script-services/card/classes/Action');

describe('Action', () => {
  it('Should set the function name', () => {
    const data = new Action()
      .setFunctionName('test-fn-name')
      .getData();

    expect(data).toMatchObject({ actionMethodName: 'test-fn-name' });
  });

  it('Should set the parameters', () => {
    const data = new Action()
      .setParameters('test-parameters')
      .getData();

    expect(data).toMatchObject({ parameters: 'test-parameters' });
  });
});
