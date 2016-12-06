import React, { PropTypes } from 'react';
import { Link, routerShape } from 'react-router';

export const NavbarLink = ({ showActive, ...props }, context) => (
    <li className={ showActive && context.router.isActive(props.to) ? 'active' : '' }>
        <Link { ...props }/>
    </li>
);

NavbarLink.contextTypes = {
    router: routerShape
};

NavbarLink.propTypes = {
    to: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.func ]),
    showActive: PropTypes.bool
};

NavbarLink.defaultProps = {
    to: null,
    showActive: false
};

export default NavbarLink;