import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrBtn extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'danger']),
        disabled: PropTypes.oneOf([true, false]),
        size: PropTypes.oneOf(['md', 'lg', 'sm'])
    };

    static defaultProps = {
        type: 'default',
        disabled: false,
        size: 'md',
        className: ''
    };

    render() {

        let _classType = this.props.type !== 'default' ? `rayr-btn-${this.props.type}` : '',
            _classSize = this.props.type !== 'md' ? `rayr-btn-${this.props.size}` : '';

        let _class = `rayr-btn ${_classType} ${_classSize} ${this.props.className}`;

        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                className={_class}>{this.props.children}
            </button>
        );
    }
}

export default RayrBtn;
