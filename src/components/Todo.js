import React from 'react';
import { observer } from 'mobx-react';

// Props are passed to stateless functions wrapped in an observer
const Todo = ({ todo, delTodo }) => (
  <div className="todo">
    <span>{todo.title}</span>
    <button onClick={() => delTodo(todo)}>&times;</button>
    <hr />
  </div>
);

export default observer(Todo);
