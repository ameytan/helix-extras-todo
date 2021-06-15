import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('helix-extras-todo', () => {
  let page: E2EPage;

  const createPage = async () => {
    page = await newE2EPage({
      html: `<helix-extras-todo button_text="testbutton" placeholder="Test Placeholder">
        <div class="todo">
          <form>
            <input class="todo_new" type="text" name="todotext" placeholder="Test Placeholder">
            <input class="todo_add" type="submit" value="testbutton">
          </form>
          <ul class="todo_list">
            <li>todo 1<button class="todo_remove">-</button></li>
          </ul>
        </div>
        Test text
      </helix-extras-todo>`,
    });
  };

  beforeEach(async () => {
    await createPage();
  });

  it('should render', async () => {
    const todoContent = await page.find('helix-extras-todo');
    expect(todoContent).toBeTruthy();
  });

  it('should render a textbox with default class', async () => {
    const todoContent = await page.find('helix-extras-todo >>> .todo_new');
    expect(todoContent).toBeTruthy();
  });

  it('should render a todo items', async () => {
    const todoContent = await page.find('helix-extras-todo >>> li');
    expect(todoContent).toBeTruthy();
  });

  it('should render a remove todo button with default class', async () => {
    const todoContent = await page.find('helix-extras-todo >>> .todo_remove');
    expect(todoContent).toBeTruthy();
  });

});
