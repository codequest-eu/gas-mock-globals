const CardAction = require('../../../src/script-services/card/classes/CardAction');
const OpenLink = require('../../../src/script-services/card/classes/OpenLink');

describe('CardAction', () => {
  it('Should set the text', () => {
    const cardAction = new CardAction().setText('text');

    expect(cardAction.getData()).toMatchObject({
      actionLabel: 'text',
    });
  });

  it('Should set open link', () => {
    const cardAction = new CardAction().setOpenLink(new OpenLink());

    expect(cardAction.getData()).toMatchObject({
      onClick: {
        openLink: {},
      },
    });
  });

  it('Should throw an exception on set openLink', () => {
    expect(new CardAction().setOpenLink)
      .toThrowError('Invalid value passed for "setOpenLink"');
  });
});
