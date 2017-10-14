import React from 'react';
import { inject, observer } from 'mobx-react';

const Todo = ({ stores, todo }) => {
  const { delTodo, toggleCompleted } = stores.todoStore;

  return (
    <div className="todo">
      <input
        type="checkbox"
        name="completed"
        onClick={() => toggleCompleted(todo)}
      />
      <span>{todo.title}</span>
      <button onClick={() => delTodo(todo)}>&times;</button>
      <hr />
    </div>
  );
};

export default inject('stores')(observer(Todo));
