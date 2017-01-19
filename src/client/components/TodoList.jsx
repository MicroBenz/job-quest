import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { todos, onToggleTodo, onDeleteTodo } = this.props;
    console.log(todos);
    return (
      <ul>
        { todos.map(todo => <TodoItem key={todo._id} title={todo.title} isDone={todo.done} id={todo._id} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />) }
      </ul>
    );
  }
}
