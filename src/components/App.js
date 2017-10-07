import React from 'react';
import { observer } from 'mobx-react';
import Todos from './Todos';

/*
 * App or the main component used can then pass any store
 * it wants to it's children
 */
class App extends React.Component {
  render() {
    return <Todos todos={this.props.stores.todos} />;
  }
}

export default observer(App);
