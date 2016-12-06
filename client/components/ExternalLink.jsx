import React, { PropTypes } from 'react';

export const ExternalLink = ({ to, children }) => (
    <a href={ to } target="_blank" rel="noopener noreferrer">{ children }</a>
);

ExternalLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string
};

ExternalLink.defaultProps = {
    children: null,
    to: '#'
};

export default ExternalLink;