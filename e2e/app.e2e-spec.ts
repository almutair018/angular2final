import { A2FRPage } from './app.po';

describe('a2-fr App', function() {
  let page: A2FRPage;

  beforeEach(() => {
    page = new A2FRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
