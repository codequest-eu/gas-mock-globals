const ButtonSet = require('../../../src/script-services/card/classes/ButtonSet');
const Button = require('../../../src/script-services/card/classes/Button');

describe('ButtonSet', () => {
  it('Should add the button', () => {
    const data = new ButtonSet()
      .addButton(new Button())
      .addButton(new Button())
      .getData();

    expect(data).toEqual({ buttons: [{}, {}] });
  });
});
