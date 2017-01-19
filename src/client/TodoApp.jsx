import React, { Component } from 'react';
import 'whatwg-fetch';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.apiEndpoint = 'http://localhost:3001';
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setTodoState = this.setTodoState.bind(this);
  }

  componentDidMount() {
    fetch(this.apiEndpoint)
      .then(response => response.json())
      .then(this.setTodoState);
  }

  setTodoState(todos) {
    this.setState({ todos });
  }

  addTodo(title) {
    return fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
      }),
    })
    .then(() => fetch(this.apiEndpoint))
    .then(response => response.json())
    .then(this.setTodoState);
  }

  toggleTodo(id) {
    fetch(`${this.apiEndpoint}/${id}/toggle`, { method: 'POST' })
      .then(() => fetch(this.apiEndpoint))
      .then(response => response.json())
      .then(this.setTodoState);
  }

  deleteTodo(id) {
    fetch(`${this.apiEndpoint}/${id}`, { method: 'DELETE' })
      .then(() => fetch(this.apiEndpoint))
      .then(response => response.json())
      .then(this.setTodoState);
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <AddTodo onAddTodo={this.addTodo} />
        <TodoList todos={todos} onToggleTodo={this.toggleTodo} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
