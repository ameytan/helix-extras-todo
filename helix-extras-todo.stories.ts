import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

storiesOf('Todo', module)
  .addDecorator(withKnobs)
  .add('Todo', () => {
    const button_text = text('Button Text', 'Add');
    const placeholder = text('Placeholder', 'Click to Add Todo');
    const content = text('Displayed content', 'No Todos');

    const markup = `
      <helix-extras-todo 
      button_text="${button_text}"
      placeholder="${placeholder}">
          ${content}
      </helix-extras-todo>
    `;

    const wrapper = document.createElement('div');
    wrapper.style.setProperty('padding', '1rem');
    wrapper.innerHTML = markup;

    return wrapper;
  });
