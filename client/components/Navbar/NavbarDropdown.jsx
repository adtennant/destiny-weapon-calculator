import React, { PropTypes } from 'react';
import { routerShape } from 'react-router';
import classNames from 'classnames';

export const NavbarDropdown = ({ label, children }, context) => (
    <li className={ classNames('dropdown', { active: children.some(child => context.router.isActive(child.props.to)) }) }>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ label } <span className="caret"/></a>
        <ul className="dropdown-menu">
            { children }
        </ul>
    </li>
);

NavbarDropdown.contextTypes = {
    router: routerShape
};

NavbarDropdown.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node
};

NavbarDropdown.defaultProps = {
    label: '',
    children: null
};

export default NavbarDropdown;

