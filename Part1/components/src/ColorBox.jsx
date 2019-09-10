import React from 'react';
import PropTypes from 'prop-types';

class ColorBox extends React.Component {

    static propTypes = {
        color: PropTypes.string
    }

    render() {

        const {
            color
        } = this.props;

        return (
            <div style={{ 
                backgroundColor: color || 'green', 
                display: 'inline-block', 
                padding: '25px' 
            }}>
                Color Box
            </div>
        )
    }
}

export default ColorBox;