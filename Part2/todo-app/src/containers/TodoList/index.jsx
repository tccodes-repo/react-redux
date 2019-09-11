import React from 'react';
import { connect } from 'react-redux';

export class ToDoList extends React.Component {
    render(){
        return (
            <div>
                <div>Todo!</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps)(ToDoList);