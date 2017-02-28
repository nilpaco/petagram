import { PetagramPage } from './app.po';

describe('petagram App', function() {
  let page: PetagramPage;

  beforeEach(() => {
    page = new PetagramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
