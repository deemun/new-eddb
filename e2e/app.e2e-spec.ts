import { EddbNewPage } from './app.po';

describe('eddb-new App', function() {
  let page: EddbNewPage;

  beforeEach(() => {
    page = new EddbNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
