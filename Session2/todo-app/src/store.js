
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import { loggingMiddleware } from './middlewares';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore(initialState = {}) {
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                loggingMiddleware,
                routerMiddleware(history),
            ),
        ),
    );

    return store;
}