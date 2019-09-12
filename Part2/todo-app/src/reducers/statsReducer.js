import * as actions from '../actions/todoActions';

const handleTodoCreated = (state) => {
    const nextState = {...state};
    nextState.added += 1;
    return nextState;
}

const handleTodoDeleted = (state) => {
    const nextState = {...state};
    nextState.deleted += 1;
    return nextState;
}

const handleTodoCompleted = (state) => {
    const nextState = {...state};
    nextState.completed += 1;
    return nextState;
}

const handleTodoUnCompleted = (state) => {
    const nextState = {...state};
    nextState.uncompleted += 1;
    nextState.completed -= 1;
    return nextState;
}


export default (state = {}, action) => {
    switch (action.type) {
     case actions.ADD_TODO:
       return handleTodoCreated(state);
     case actions.DELETE_TODO:
       return handleTodoDeleted(state);
     case actions.COMPLETE_TODO:
       return handleTodoCompleted(state);
     case actions.UNCOMPLETE_TODO:
       return handleTodoUnCompleted(state);
     default:
      return state
    }
}