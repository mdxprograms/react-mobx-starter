import { action, computed } from 'mobx';

export const TodoActions = todos => ({
  // actions
  addTodo: action(todo => {
    todos.collection.unshift(todo);
  }),
  updateCurrent: action(currentTodo => {
    todos.currentTodo = currentTodo;
  }),
  save: action(() => {
    todos.addTodo({ title: todos.currentTodo, completed: false });
    todos.currentTodo = '';
  }),
  delTodo: action(todo => {
    todos.collection = todos.collection.filter(t => {
      return t.title !== todo.title;
    });
  }),

  // computed
  total: computed(() => {
    return todos.collection.length;
  })
});
