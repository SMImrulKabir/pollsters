import { VoteCastTemplatePage } from './app.po';

describe('VoteCast App', function() {
  let page: VoteCastTemplatePage;

  beforeEach(() => {
    page = new VoteCastTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
