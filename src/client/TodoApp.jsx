import React from 'react';
import 'whatwg-fetch';
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
    this.apiEndPoint = 'http://localhost:3001';
    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.newTodoChange = this.newTodoChange.bind(this);
    this.transformJSON = this.transformJSON.bind(this);
    this.setTodoState = this.setTodoState.bind(this);
  }
  componentDidMount() {
    fetch(this.apiEndPoint)
      .then(this.transformJSON)
      .then(this.setTodoState)
  }
  toggle(id) {
    fetch(`${this.apiEndPoint}/${id}/toggle`, { method: 'POST' })
      .then(() => fetch(this.apiEndPoint))
      .then(this.transformJSON)
      .then(this.setTodoState)
  }
  delete(id,e) {
    fetch(`${this.apiEndPoint}/${id}`, { method: 'DELETE' })
      .then(() => fetch(this.apiEndPoint))
      .then(this.transformJSON)
      .then(this.setTodoState)
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  add(title) {
    fetch(this.apiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title
      })
    })
    .then(() => fetch(this.apiEndPoint))
    .then(this.transformJSON)
    .then((data) => {this.setState({ todos: data, newTodo: '' })})
  }
  newTodoChange(e) {
    this.setState({ newTodo: e.target.value })
  }
  setTodoState(data) {
    this.setState({
      todos: data
    })
  }
  transformJSON(data) {
    return data.json();
  }
  render() {
    return <div>
      <div>
        <input type="text" onChange={this.newTodoChange} value={this.state.newTodo} />
        <button onClick={this.add.bind(this, this.state.newTodo)}>Add</button>
      </div>
      <ul>
        {
          this.state.todos && this.state.todos.map((todo) => (
            <li style={{textDecoration: todo.done ? 'line-through' : 'initial'}} key={todo._id} onClick={this.toggle.bind(this,todo._id)}>{todo.title} <button onClick={this.delete.bind(this,todo._id)}>Delete</button></li>
          ))
        }
      </ul>
    </div>;
  }
}
