import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/todoActions';
import PropTypes from 'prop-types';
import { forEach, keys } from 'lodash';

import Todo from '../../components/Todo';

export class ToDoList extends React.Component {

    static propTypes = {
        todos: PropTypes.array,
        completed: PropTypes.number,
    }

    constructor(props) {
        super(props) 
        this.state = { 
            todoValue: '' 
        };
    }

    handleAddInputChange(e) {
        this.setState({
            todoValue: e.target.value,
        });
    }

    handleCheckboxChange(evt, todo) {
        const {
            completeTodo,
            uncompleteTodo,
        } = this.props;

        if (evt.target.checked) {
            completeTodo(todo.id);
        } else {
            uncompleteTodo(todo.id);
        }
    }

    render(){
        const {
            todos,
            addTodo,
            deleteTodo,
            completed,
        } = this.props;

        const {
            todoValue
        } = this.state;

        const encouragment = (completed > 0) ? 
            <div>Congratulations you have completed {completed} todos today! And people really like you.</div> :
            undefined;

        return (
            <div>
                <div>
                    <div>My Todo List</div>
                    <input type="text" onChange={(e) => this.handleAddInputChange(e)} /> 
                    <button onClick={() => addTodo(todoValue)}>Add Todo</button>
                </div>
                <div>
                    <ul style={{ listStyle: 'none' }}>
                        {todos.map((t) => (
                            <Todo 
                                key={t.id}
                                item={t}
                                onDelete={() => deleteTodo(t.id)}
                                onCheckChanged={(e) => this.handleCheckboxChange(e, t)}
                            />
                        ))}
                    </ul>
                </div>
                {encouragment}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // It is easier to work with the todos as an 
    // array for display purposes, so we convert it
    // here.
    const todos = [];
    forEach(keys(state.todos), (id) => {
        todos.push(state.todos[id]);
    })

    return {
        todos,
        completed: state.stats.completed,
    };
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
    deleteTodo: (todoId) => dispatch(actions.deleteTodo(todoId)),
    completeTodo: (todoId) => dispatch(actions.completeTodo(todoId)),
    uncompleteTodo: (todoId) => dispatch(actions.uncompleteTodo(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);