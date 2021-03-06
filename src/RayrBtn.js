import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrBtn extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning']),
        size: PropTypes.oneOf(['md', 'xs', 'sm']),
        icon: PropTypes.oneOf(['plus', 'refresh', 'search', 'check', 'close', 'download'])
    };

    static defaultProps = {
        type: 'default',
        size: 'md',
        className: ''
    };

    iconInit() {
        const {icon} = this.props;
        return icon ? <i className={`fa fa-${icon}`}></i> : null
    }

    render() {

        var btnClass = classnames({
            'rayr-btn': true,
            'rayr-btn-primary': this.props.type === 'primary',
            'rayr-btn-warning': this.props.type === 'warning',
            'rayr-btn-sm': this.props.size === 'sm',
            'rayr-btn-xs': this.props.size === 'xs',
            'rayr-btn-inverse': this.props.inverse
        });

        return (
            <button {...this.props} className={btnClass}>{this.iconInit()}{this.props.children}</button>
        );
    }
}

export default RayrBtn;
