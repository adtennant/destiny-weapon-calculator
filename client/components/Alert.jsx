import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const Alert = ({ children, info }) => {
    const classes = classNames('alert', {
        'alert-info': info
    });
    
    return <div className={ classes }>{ children }</div>;
};

Alert.propTypes = {
    children: PropTypes.node,
    info: PropTypes.bool
};

Alert.defaultProps = {
    children: null,
    info: false
};

export default Alert;
