import React from 'react';
import { inject, observer } from 'mobx-react';
import Todo from './Todo';

const Todos = ({ stores }) => {
  const todos = stores.todoStore;

  return (
    <div className="todos">
      <input
        value={todos.currentTodo}
        type="text"
        onChange={e => todos.updateCurrent(e.currentTarget.value)}
      />
      <button onClick={todos.saveTodo}>Add Todo</button>
      <p>
        <strong>Total</strong>: <em>{todos.total}</em>
        <br />
        <strong>Completed</strong>: <em>{todos.completedCount}</em>
      </p>
      {todos.currentTodos.map(t =>
        <Todo
          key={Math.random(t.title.length * 1000)}
          delTodo={todos.delTodo}
          todo={t}
          toggleCompleted={todos.toggleCompleted}
        />
      )}
    </div>
  );
};

export default inject('stores')(observer(Todos));
