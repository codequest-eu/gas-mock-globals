const CardSection = require('../../../src/script-services/card/classes/CardSection');
const Widget = require('../../../src/script-services/card/classes/Widget');
const Button = require('../../../src/script-services/card/classes/Button');

describe('CardSection', () => {
  it('Should add widget', () => {
    const cardSection = new CardSection().addWidget(new Widget());

    expect(cardSection.getData().widgets).toHaveLength(1);
  });

  it('Should add button widget', () => {
    const cardSection = new CardSection().addWidget(new Button());

    expect(cardSection.getData()).toMatchObject({
      widgets: [{ type: 'Button' }],
    });
  });

  it('Should throw an exception on add widget', () => {
    expect(new CardSection().addWidget).toThrowError(
      'Invalid value passed for "addWidget"'
    );
  });

  it('Should set collapsible', () => {
    const cardSection = new CardSection().setCollapsible(true);

    expect(cardSection.getData()).toMatchObject({
      type: 'CardSection',
      collapsible: true,
      widgets: [],
    });
  });

  it('Should set header', () => {
    const cardSection = new CardSection().setHeader('header');

    expect(cardSection.getData()).toMatchObject({
      header: 'header',
      widgets: [],
    });
  });

  it('Should set numUncollapsibleWidgets', () => {
    const cardSection = new CardSection().setNumUncollapsibleWidgets(5);

    expect(cardSection.getData()).toMatchObject({
      numUncollapsibleWidgets: 5,
      widgets: [],
    });
  });
});
