import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/:city' component={City} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
