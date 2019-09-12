import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

export class Navigation extends React.Component {

    static propTypes = {
        navigate: PropTypes.func
    }

    render(){
        const {
            navigate
        } = this.props;

        return (
            <div>
                <button onClick={() => navigate("/")}>To Do List</button> |
                <button onClick={() => navigate("/test")}>Test</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (route) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(Navigation);