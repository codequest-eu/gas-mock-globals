const CardHeader = require('../../../src/script-services/card/classes/CardHeader');

describe('CardHeader', () => {
  it('Should set the title', () => {
    expect((new CardHeader()).setTitle('test-title').getData())
      .toMatchObject({ title: 'test-title' });
  });

  it('Should set the image style', () => {
    expect((new CardHeader()).setImageStyle('test-image-style').getData())
      .toMatchObject({ imageStyle: 'test-image-style' });
  });

  it('Should set the image url', () => {
    expect((new CardHeader()).setImageUrl('test-image-url').getData())
      .toMatchObject({ imageUrl: 'test-image-url' });
  });

  it('Should set subtitle', () => {
    expect((new CardHeader()).setSubtitle('test-subtitle').getData())
      .toMatchObject({ subtitle: 'test-subtitle' });
  });
});
