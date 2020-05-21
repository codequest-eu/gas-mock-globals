const Image = require('../../../src/script-services/card/classes/Image');

describe('Image', () => {
  it('Should set image url', () => {
    const image = new Image().setImageUrl('url');

    expect(image.getData()).toMatchObject({ url: 'url' });
  });
});
