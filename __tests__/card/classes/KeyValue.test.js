const KeyValue = require('../../../src/script-services/card/classes/KeyValue');
const Button = require('../../../src/script-services/card/classes/Button');
const Action = require('../../../src/script-services/card/classes/Action');
const OpenLink = require('../../../src/script-services/card/classes/OpenLink');

describe('KeyValue', () => {
  it('Should set button label', () => {
    const keyValue = new KeyValue().setBottomLabel('label');

    expect(keyValue.getData()).toMatchObject({
      bottomLabel: 'label',
    });
  });

  it('Should set button', () => {
    const keyValue = new KeyValue().setButton(new Button());

    expect(keyValue.getData()).toMatchObject({
      button: {},
    });
  });

  it('Should set content', () => {
    const keyValue = new KeyValue().setContent('content');

    expect(keyValue.getData()).toMatchObject({
      content: 'content',
    });
  });

  it('Should set icon url', () => {
    const keyValue = new KeyValue().setIconUrl('url');

    expect(keyValue.getData()).toMatchObject({
      iconUrl: 'url',
    });
  });

  it('Should set multiline', () => {
    const keyValue = new KeyValue().setMultiline(true);

    expect(keyValue.getData()).toMatchObject({
      multiline: true,
    });
  });

  it('Should set onClickAction', () => {
    const keyValue = new KeyValue().setOnClickAction(new Action());

    expect(keyValue.getData()).toMatchObject({
      onClickAction: {},
    });
  });

  it('Should set openLink', () => {
    const keyValue = new KeyValue().setOpenLink(new OpenLink());

    expect(keyValue.getData()).toMatchObject({
      openLink: {},
    });
  });

  it('Should set top label', () => {
    const keyValue = new KeyValue().setTopLabel('label');

    expect(keyValue.getData()).toMatchObject({
      topLabel: 'label',
    });
  });
});
