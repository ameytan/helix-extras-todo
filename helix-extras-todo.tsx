/* eslint-disable max-len */
import { Component, h, Prop, State } from '@stencil/core';


/**
 * @slot default The slot for the content of the button.
 */
@Component({
  tag: 'helix-extras-todo',
  styleUrl: 'helix-extras-todo.scss',
  shadow: true
})

export class HelixExtrasTodo {


  public todotext: HTMLInputElement;

  @State() todolist = [
    { id: 0, text: 'todo 1' }
  ];

  @Prop() button_text: string;
  @Prop() placeholder: string;

  addTodo(e) {
    e.preventDefault();
    if(!e.target.todotext.value) {
      return;
    }
    const newEntry = { id: this.createId(), text: e.target.todotext.value };
    this.todolist = [...this.todolist, newEntry];
    e.target.todotext.value = '';
  }

  removeTodo(id) {
    const newlist = this.todolist.filter(todo => todo.id !== id);
    this.todolist = [...newlist];
  }

  createId() {
    if(!this.todolist.length) {
      return 0;
    }
    const highest = this.todolist.reduce((prev, current) => (prev.id > current.id) ? prev : current);
    return highest.id + 1;
  }

  render() {
    return (
      <div class="todo">
        <form onSubmit={e => this.addTodo(e)} class="newForm">
          <input class="todo_new" type="text" name="todotext" placeholder={this.placeholder} value=""/>
          <input class="todo_add" type="submit" value={this.button_text} />
        </form>
        <ul class="todo_list">
          {this.todolist.map(todo => (
            <li>
              {todo.text} 
              <button class="todo_remove" onClick={() => this.removeTodo(todo.id)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
