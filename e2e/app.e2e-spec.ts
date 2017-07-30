import { TodoClientPage } from './app.po';

describe('todo-client App', () => {
  let page: TodoClientPage;

  beforeEach(() => {
    page = new TodoClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
