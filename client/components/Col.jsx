import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const Col = ({ xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, className, children }) => {
    const classes = classNames({
        [className]: className,
        [`col-xs-${xs}`]: xs,
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`col-xs-offset-${xsOffset}`]: xsOffset,
        [`col-sm-offset-${smOffset}`]: smOffset,
        [`col-md-offset-${mdOffset}`]: mdOffset,
        [`col-lg-offset-${lgOffset}`]: lgOffset
    });

    return <div className={ classes }>{ children }</div>;
};

Col.propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    className: PropTypes.string,
    children: React.PropTypes.node
};

Col.defaultProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xsOffset: null,
    smOffset: null,
    mdOffset: null,
    lgOffset: null,
    className: null,
    children: null
};

export default Col;

