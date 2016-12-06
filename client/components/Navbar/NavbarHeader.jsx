import React, { PropTypes } from 'react';

export const NavbarHeader = ({ children }) => (
    <div className="navbar-header">
        { children }
    </div>
);

NavbarHeader.propTypes = {
    children: PropTypes.node
};

NavbarHeader.defaultProps = {
    children: null
};

export default NavbarHeader;

