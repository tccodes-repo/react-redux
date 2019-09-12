import * as actions from '../actions/todoActions';
import { keys } from 'lodash';

const handleAddTodo = (state, action) => {
   // Add the new todo the todos array
   const nextId = keys(state).length + 1;
   return {
     ...state,
     [nextId]: {
       id: nextId,
       text: action.payload,
       completed: false,
     }
   }
}

const handleDeleteTodo = (state, action) => {
   const nextState = {...state};
   delete nextState[action.payload];
   return nextState;
}

const handleCompleteTodo = (state, action) => {
    const todo = state[action.payload];
    return {
      ...state,
      [action.payload]: {
        ...todo,
        completed: true,
      }
    };
}

const handleUncompleteTodo = (state, action) => {
  const todo = state[action.payload];
  return {
    ...state,
    [action.payload]: {
      ...todo,
      completed: false,
    }
  };
}


export default (state = {}, action) => {
    switch (action.type) {
     case actions.ADD_TODO:
       return handleAddTodo(state, action);
     case actions.DELETE_TODO:
       return handleDeleteTodo(state, action);
     case actions.COMPLETE_TODO:
       return handleCompleteTodo(state, action);
     case actions.UNCOMPLETE_TODO:
       return handleUncompleteTodo(state, action);
     default:
      return state
    }
}