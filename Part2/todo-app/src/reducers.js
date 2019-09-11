import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import todoReducer from './reducers/todoReducer';

const createRootReduer = (history) => combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
});

export default createRootReduer;
