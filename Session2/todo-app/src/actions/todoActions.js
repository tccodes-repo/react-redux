export const ADD_TODO = 'Adding a Todo';
export const DELETE_TODO = 'Deleting a Todo';
export const COMPLETE_TODO = 'Completing a Todo';
export const UNCOMPLETE_TODO = 'Uncompleting a Todo';


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    };
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        payload: id,
    }
}

export const uncompleteTodo = (id) => {
    return {
        type: UNCOMPLETE_TODO,
        payload: id,
    }
}