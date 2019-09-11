import React from 'react';
import PropTypes from 'prop-types';

import ColorBox from './ColorBox';

class ColorViewer extends React.Component {

    static propTypes = {
        color: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            color: props.color || 'green'
        };
    }

    handleColorChange(e) {
        e.preventDefault();

        alert(e.target.value);
        this.setState({
            nextColor: e.target.value
        });
    }

    handleApplyColor(e) {
        e.preventDefault();

        this.setState({
            color: this.state.nextColor,
            nextColor: null,
        });
    }

    render() {
        const {
            color
        } = this.state;

        return (
            <div>
                <div>
                    <input type="textbox" 
                        defaultValue={color}
                        onChange={(e) => this.handleColorChange(e)}
                    /> 
                    <button onClick={(e) => this.handleApplyColor(e)}>Apply</button>
                </div>
                <ColorBox color={color} />
            </div>
        );
    }
}

export default ColorViewer;