import React, { PropTypes } from 'react';

export const Row = ({ children }) => (
    <div className="row">{ children }</div>
);

Row.propTypes = {
    children: PropTypes.node
};

Row.defaultProps = {
    children: null
};

export default Row;

