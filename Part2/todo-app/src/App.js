import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import './App.css';

import Navigation from './containers/Navigation';
import ToDoList from './containers/TodoList';


function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ToDoList} />
            <Route render={() => (<div>Oops! There was no page with that path</div>)} />
          </Switch>
        </div>  
      </ConnectedRouter>
    </div>
  );
}

export default App;
