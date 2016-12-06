import React, { PropTypes } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarDropdown from './NavbarDropdown';
import NavbarHeader from './NavbarHeader';
import NavbarLink from './NavbarLink';
import NavbarNav from './NavbarNav';
import NavbarNavItem from './NavbarNavItem';
import NavbarToggle from './NavbarToggle';

export const Navbar = ({ children }) => (
    <nav className="navbar navbar-inverse navbar-fixed-top">          
        { children }
    </nav>
);

Navbar.propTypes = {
    children: PropTypes.node
};

Navbar.defaultProps = {
    children: null
};

Navbar.Brand = NavbarBrand;
Navbar.Collapse = NavbarCollapse;
Navbar.Dropdown = NavbarDropdown;
Navbar.Header = NavbarHeader;
Navbar.Link = NavbarLink;
Navbar.Nav = NavbarNav;
Navbar.NavItem = NavbarNavItem;
Navbar.Toggle = NavbarToggle;

export default Navbar;

