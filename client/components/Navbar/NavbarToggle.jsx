import React, { PropTypes } from 'react';

export const NavbarToggle = ({ target }) => (
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={ `#${target}` } aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
    </button>
);

NavbarToggle.propTypes = {
    target: PropTypes.string.isRequired
};

export default NavbarToggle;

