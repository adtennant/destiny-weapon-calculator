import React, { PropTypes } from 'react';

export const NavbarCollapse = ({ id, children }) => (
    <div className="collapse navbar-collapse" id={ id }>
        { children }
    </div>
);

NavbarCollapse.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node
};

NavbarCollapse.defaultProps = {
    children: null
};

export default NavbarCollapse;

