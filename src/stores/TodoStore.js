import { extendObservable } from 'mobx';
// models can be default or separate functions if returning more than
// one kind of model
import TodoModels from '../models/TodoModels';
// actions should be imported as anonymous functions
import { TodoActions } from '../actions/TodoActions';

class TodoStore {
  constructor() {
    extendObservable(this, {
      // models => can take an object as an argument with extra information
      // this could be another model for instance
      ...TodoModels(),
      // actions => passing this to use todos as reference in TodoActions
      // all actions and computed values have reference to all models referenced
      // in the TodoStore
      ...TodoActions(this)
    });
  }
}

// always export a new store instance
export default new TodoStore();
