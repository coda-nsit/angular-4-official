import { Angular2OfficialPage } from './app.po';

describe('angular2-official App', () => {
  let page: Angular2OfficialPage;

  beforeEach(() => {
    page = new Angular2OfficialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
