import feed from '../src/Components/feed.js';

describe('feed', () => {
  it('debería realizar el envío del post correctamente', () => {
    const navigateTo = () => {};
    const feedContent = feed(navigateTo);
    const textarea = feedContent.querySelector('.inputFeed');
    const button = feedContent.querySelector('.bttonSubmit');
    textarea.value = 'Receta de empanadas';
    expect(textarea).toBeTruthy();
    expect(button).toBeTruthy();
    expect(textarea.value).toBe('Receta de empanadas');
  });
});
