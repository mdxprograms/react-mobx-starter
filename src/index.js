import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Todos from './components/Todos';
import todoStore from './stores/TodoStore';

const stores = {
  todoStore
};

const App = () => (
  <Provider stores={stores}>
    <Todos />
  </Provider>
)

render(<App />, document.getElementById('root'));
