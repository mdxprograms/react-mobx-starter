import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import todos from './stores/TodoStore';

// add main stores and pass them to the parent component or "container"
const stores = {
  todos
};

render(<App stores={stores} />, document.getElementById('root'));
