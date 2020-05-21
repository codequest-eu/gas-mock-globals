const ImageButton = require('../../../src/script-services/card/classes/ImageButton');
const OpenLink = require('../../../src/script-services/card/classes/OpenLink');

describe('ImageButton', () => {
  it('Should set icon url', () => {
    const imageButton = new ImageButton().setIconUrl('url');

    expect(imageButton.getData()).toMatchObject({ url: 'url' });
  });

  it('Should set open link', () => {
    const imageButton = new ImageButton().setOpenLink(new OpenLink());

    expect(imageButton.getData()).toMatchObject({
      onClick: {
        openLink: {},
      }
    });
  });

  it('Should throw an exception on set open link', () => {
    expect(new ImageButton().setOpenLink)
      .toThrowError('Invalid value passed for "setOpenLink"');
  });
});
