import React, { PropTypes } from 'react';

export const NavbarNavItem = ({ children }) => {
    return <li>{ children }</li>;
};

NavbarNavItem.propTypes = {
    children: PropTypes.node
};

NavbarNavItem.defaultProps = {
    children: null
};

export default NavbarNavItem;

