import React from 'react';

const Todo = ({ item, onCheckChanged, onDelete }) => {

    const textStyle = (item.completed) ? { textDecoration: 'line-through' } : {};

    return (
        <li key={item.id}>
            <input type="checkbox" defaultChecked={item.completed} onChange={onCheckChanged} />
            <span style={textStyle}>{item.text}</span>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
};

export default Todo;