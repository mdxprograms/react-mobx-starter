import React from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';

// stateless function with todos from the app component
// any iterable items that require any kind of markup should be
// treated as a separate component @note: mapping the todos collection over a Todo component
const Todos = ({ todos }) => (
  <div className="todos">
    <input
      value={todos.currentTodo}
      type="text"
      onChange={e => todos.updateCurrent(e.currentTarget.value)}
    />
    <button onClick={todos.save}>Add Todo</button>
    <p>
      <strong>Total</strong>: <em>{todos.total}</em>
    </p>
    {todos.collection.map(t => (
      <Todo
        key={Math.random(t.title.length * 1000)}
        todo={t}
        delTodo={todos.delTodo}
      />
    ))}
  </div>
);

export default observer(Todos);
