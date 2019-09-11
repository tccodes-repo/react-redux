import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import './App.css';

import ToDoList from './containers/TodoList';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" component={ToDoList} />
            <Route render={() => (<div>Oops! There was no page with that path</div>)} />
          </Switch>
        </>
      </ConnectedRouter>
    </div>
  );
}

export default App;
