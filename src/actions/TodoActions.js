import { action, computed } from 'mobx';

// todos argument is a reference to "this" in TodoStore
export const TodoActions = todos => ({
  // actions
  addTodo: action(todo => {
    todos.collection.unshift(todo);
  }),

  delTodo: action(todo => {
    todos.collection = todos.collection.filter(t => {
      return t.title !== todo.title;
    });
  }),

  saveTodo: action(() => {
    todos.addTodo({ title: todos.currentTodo, completed: false });
    todos.currentTodo = '';
  }),

  toggleCompleted: action(todo => {
    todos.collection.find(
      t => t.title === todo.title
    ).completed = !todo.completed;
  }),

  updateCurrent: action(currentTodo => {
    todos.currentTodo = currentTodo;
  }),

  // computed
  completedCount: computed(() => {
    return todos.collection.filter(t => t.completed === true).length;
  }),
  currentTodos: computed(() => {
    return todos.collection.filter(t => t.completed === false);
  }),
  total: computed(() => {
    return todos.collection.length;
  })
});
