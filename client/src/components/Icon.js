import React, { Component } from 'react';
import * as icons from '../icons/icons';

class Icon extends Component {
    _renderIcon(which) {
        const splitArray = which.split(':');

        try {
            const f = icons[splitArray[0]];
            const func = f[splitArray[1]];

            return func.call(null, this.props.primaryFill, this.props.secondaryFill);
        } catch (err) {
            console.error('Could Not get render Icon');
        }
    }

    render() {
        return (
            <svg
                style={{ width: `${this.props.size}px`, height: `${this.props.size}px`}}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                { this._renderIcon(this.props.icon) }
            </svg>
        );
    }
}

export default Icon;