import React, { PropTypes } from 'react';

export const Container = ({ children }) => (
    <div className="container">{ children }</div>
);

Container.propTypes = {
    children: PropTypes.node
};

Container.defaultProps = {
    children: null
};

export default Container;
