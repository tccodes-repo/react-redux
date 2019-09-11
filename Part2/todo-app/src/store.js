
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
    const store = createStore(
        createRootReducer(history),
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    );

    return store;
}