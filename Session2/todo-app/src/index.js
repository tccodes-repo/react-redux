import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';

const initialState = {
    todos: {},
    stats: {
        added: 0,
        deleted: 0,
        completed: 0,
        uncompleted: 0,
    }
};

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
