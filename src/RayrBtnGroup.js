import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrBtnGroup extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="rayr-btngroup">{this.props.children}</div>
        );
    }
}

export default RayrBtnGroup;
