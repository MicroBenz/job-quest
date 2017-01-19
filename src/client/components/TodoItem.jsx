import React, { Component, PropTypes } from 'react';
import 'whatwg-fetch';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.apiEndPoint = 'http://localhost:3001';
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
  }
  handleToggleClick() {
    const { id, onToggleTodo } = this.props;
    onToggleTodo(id);
  }
  handleOnClickDelete(e) {
    const { id, onDeleteTodo } = this.props;
    onDeleteTodo(id);
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  render() {
    const { title, isDone } = this.props;
    return (
      <li>
        <span onClick={this.handleToggleClick} style={{ textDecoration: isDone ? 'line-through' : 'initial' }}>{title} </span>
        <button onClick={this.handleOnClickDelete}>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
};
export default TodoItem;
