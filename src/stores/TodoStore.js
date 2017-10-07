import { extendObservable } from 'mobx';
// models can be default exports or separate export functions if returning more than
// one kind of model
import TodoModels from '../models/TodoModels';
// actions should be imported as anonymous functions
import { TodoActions } from '../actions/TodoActions';

/*
 * models => can take an object as an argument with extra information
 * this could be another model for instance
 */

/*
 * actions => passing "this" into actions allows reference to the calling
 * store in TodoActions
 *
 * all actions and computed values have reference to all models referenced
 * in the TodoStore
 */

class TodoStore {
  constructor() {
    extendObservable(this, {
      ...TodoModels(),
      ...TodoActions(this)
    });
  }
}

// always export a new store instance
export default new TodoStore();
