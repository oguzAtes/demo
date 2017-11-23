import { AngularIOPage } from './app.po';

describe('angular-io App', () => {
  let page: AngularIOPage;

  beforeEach(() => {
    page = new AngularIOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
