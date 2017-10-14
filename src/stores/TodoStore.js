import { extendObservable } from 'mobx';
import TodoModel from '../models/TodoModel';
import { TodoActions } from '../actions/TodoActions';

class TodoStore {
  constructor() {
    extendObservable(this, {
      ...TodoModel,
      ...TodoActions(this)
    });
  }
}

// always export a new store instance
export default new TodoStore();
