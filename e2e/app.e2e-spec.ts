import { TpFinalPage } from './app.po';

describe('tp-final App', function() {
  let page: TpFinalPage;

  beforeEach(() => {
    page = new TpFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
