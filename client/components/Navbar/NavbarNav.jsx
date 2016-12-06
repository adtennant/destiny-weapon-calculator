import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const NavbarNav = ({ left, right, children }) => (
    <ul className={ classNames('nav', 'navbar-nav', { 'navbar-left': left, 'navbar-right': right }) }>{ children }</ul>
);

NavbarNav.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    children: PropTypes.node
};

NavbarNav.defaultProps = {
    left: false,
    right: false,
    children: null
};

export default NavbarNav;

