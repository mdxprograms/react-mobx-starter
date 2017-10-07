import React from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';

/*
 * stateless function with todos from the app component
 * any iterable items that require markup should be
 * treated as a separate components
 * @note: mapping the todos collection over a Todo component
 */

const Todos = ({ todos }) => (
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
    {todos.currentTodos.map(t => (
      <Todo
        key={Math.random(t.title.length * 1000)}
        delTodo={todos.delTodo}
        todo={t}
        toggleCompleted={todos.toggleCompleted}
      />
    ))}
  </div>
);

export default observer(Todos);
