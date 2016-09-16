import { TSTCliPage } from './app.po';

describe('tst-cli App', function() {
  let page: TSTCliPage;

  beforeEach(() => {
    page = new TSTCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
