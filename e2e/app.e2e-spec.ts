import { TstCliPage } from './app.po';

describe('tst-cli App', function() {
  let page: TstCliPage;

  beforeEach(() => {
    page = new TstCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
