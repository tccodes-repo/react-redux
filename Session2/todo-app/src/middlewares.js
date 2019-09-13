

export const loggingMiddleware = store => next => action => {
    console.log('Dispatching Action:', action);
    return next(action);
}