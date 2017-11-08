import { MyFirstGhPage } from './app.po';

describe('my-first-gh App', () => {
  let page: MyFirstGhPage;

  beforeEach(() => {
    page = new MyFirstGhPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ck!!');
  });
});
