import React, { PropTypes } from 'react';

export const PanelBody = ({ children }) => (
    <div className="panel-body">{ children }</div>
);

PanelBody.propTypes = {
    children: PropTypes.node
};

PanelBody.defaultProps = {
    children: null
};

export default PanelBody;