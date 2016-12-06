import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const NavbarBrand = ({ children }) => (
    <Link className="navbar-brand" to="/">{ children }</Link>
);

NavbarBrand.propTypes = {
    children: PropTypes.node
};

NavbarBrand.defaultProps = {
    children: null
};

export default NavbarBrand;

