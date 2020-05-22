const ImageButton = require('../../../src/script-services/card/classes/ImageButton');
const OpenLink = require('../../../src/script-services/card/classes/OpenLink');

describe('ImageButton', () => {
  it('Should set icon url', () => {
    const imageButton = new ImageButton().setIconUrl('url');

    expect(imageButton.getData()).toMatchObject({ iconUrl: 'url' });
  });

  it('Should set open link', () => {
    const imageButton = new ImageButton().setOpenLink(new OpenLink());

    expect(imageButton.getData()).toMatchObject({
      openLink: {},
    });
  });
});
