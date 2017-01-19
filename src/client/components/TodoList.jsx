/* eslint-disable no-underscore-dangle */
import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => (
  <ul>
    { todos.map(todo =>
      <TodoItem
        key={todo._id}
        title={todo.title}
        isDone={todo.done}
        id={todo._id}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />) }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
export default TodoList;
