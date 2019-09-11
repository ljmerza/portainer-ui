import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Navigation from './navigation';

class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;