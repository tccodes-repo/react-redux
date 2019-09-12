import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Reports extends React.Component {

    static propTypes = {
        stats: PropTypes.object
    }

    render(){
        const {
            stats
        } = this.props;

        return (
            <div>
                <ul>
                    <li>Todos Added: {stats.added}</li>
                    <li>Todos Deleted: {stats.deleted}</li>
                    <li>Todos Completed: {stats.completed}</li>
                    <li>Todos UnCompleted: {stats.uncompleted}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    stats: state.stats,
});


export default connect(mapStateToProps)(Reports);