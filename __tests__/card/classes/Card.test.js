const Card = require('../../../src/script-services/card/classes/Card');
const CardHeader = require('../../../src/script-services/card/classes/CardHeader');
const CardSection = require('../../../src/script-services/card/classes/CardSection');
const CardAction = require('../../../src/script-services/card/classes/CardAction');

describe('Card', () => {
  it('Should set the name', () => {
    const card = new Card().setName('card-name');

    expect(card.printJson()).toMatchObject({
      cardActions: [],
      sections: [],
      name: 'card-name',
    });
  });

  it('Should set the header', () => {
    const card = new Card().setHeader(new CardHeader());

    expect(card.printJson()).toMatchObject({
      cardActions: [],
      sections: [],
      header: {},
    });
  });


  it('Should set the section', () => {
    const card = new Card()
      .addSection(new CardSection())
      .addSection(new CardSection());

    expect(card.printJson()).toMatchObject({
      cardActions: [],
      sections: [
        { widgets: [] },
        { widgets: [] },
      ]
    });
  });

  it('Should set the card action', () => {
    const card = new Card()
      .addCardAction(new CardAction())
      .addCardAction(new CardAction());

    expect(card.printJson()).toMatchObject({
      cardActions: [{}, {}],
      sections: [],
    });
  });
});
