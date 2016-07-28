import { TestWebPackTestPage } from './app.po';

describe('test-web-pack-test App', function() {
  let page: TestWebPackTestPage;

  beforeEach(() => {
    page = new TestWebPackTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
