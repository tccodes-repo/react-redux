import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import todoReducer from './reducers/todoReducer';
import statsReducer from './reducers/statsReducer';

const createRootReduer = (history) => combineReducers({
    router: connectRouter(history),
    todos: todoReducer,
    stats: statsReducer,
});

export default createRootReduer;
