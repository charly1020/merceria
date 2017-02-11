import { MerceriaPage } from './app.po';

describe('merceria App', function() {
  let page: MerceriaPage;

  beforeEach(() => {
    page = new MerceriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
