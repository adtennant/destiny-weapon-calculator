import React, { PropTypes } from 'react';
import PanelBody from './PanelBody';

export const Panel = ({ children }) => (
    <div className="panel panel-default">{ children }</div>
);

Panel.propTypes = {
    children: PropTypes.node
};

Panel.defaultProps = {
    children: null
};

Panel.Body = PanelBody;

export default Panel;

