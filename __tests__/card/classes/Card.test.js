const Card = require('../../../src/script-services/card/classes/Card');
const CardHeader = require('../../../src/script-services/card/classes/CardHeader');
const CardSection = require('../../../src/script-services/card/classes/CardSection');
const CardAction = require('../../../src/script-services/card/classes/CardAction');

describe('Card', () => {
  it('Should set the name', () => {
    const card = new Card().setName('card-name');

    expect(card.printJson()).toEqual({
      cardActions: [],
      sections: [],
      name: 'card-name',
    });
  });

  it('Should set the header', () => {
    const card = new Card().setHeader(new CardHeader());

    expect(card.printJson()).toEqual({
      cardActions: [],
      sections: [],
      header: {},
    });
  });

  it('Should throw an exception on set the header', () => {
    expect(new Card().setHeader)
      .toThrowError('Invalid value passed for "setHeader"');
  });

  it('Should set the section', () => {
    const card = new Card()
      .addSection(new CardSection())
      .addSection(new CardSection());

    expect(card.printJson()).toEqual({
      cardActions: [],
      sections: [
        { widgets: [] },
        { widgets: [] },
      ]
    });
  });

  it('Should throw an exception on set the section', () => {
    expect(new Card().addSection)
      .toThrowError('Invalid value passed for "addSection"');
  });

  it('Should set the card action', () => {
    const card = new Card()
      .addCardAction(new CardAction())
      .addCardAction(new CardAction());

    expect(card.printJson()).toEqual({
      cardActions: [{}, {}],
      sections: [],
    });
  });
});
