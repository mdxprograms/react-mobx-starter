import React from 'react';
import { observer } from 'mobx-react';
import Todos from './Todos';

// App can then pass any store it wants to it's children
class App extends React.Component {
  render() {
    return <Todos todos={this.props.stores.todos} />;
  }
}

// observer must wrap the components with observable data
export default observer(App);
