import React from 'react';
import { Container, ExternalLink, Navbar } from 'components';

export const Header = () => (
    <Navbar>
        <Container>
            <Navbar.Header>
                <Navbar.Toggle target="navbar-collapse"/>
                <Navbar.Brand>DWC</Navbar.Brand>
            </Navbar.Header>

            <Navbar.Collapse id="navbar-collapse">
                <Navbar.Nav left>
                    <Navbar.Link to="calculator" showActive>Calculator</Navbar.Link>
                    <Navbar.Dropdown label="Raw Data">
                        <Navbar.Link to="multipliers">Multipliers</Navbar.Link>
                        <Navbar.Link to="perks">Perks</Navbar.Link>
                        <Navbar.Link to="weapons">Weapons</Navbar.Link>
                    </Navbar.Dropdown>
                </Navbar.Nav>
                <Navbar.Nav right>
                    <Navbar.Link to="changelog" showActive>Changelog</Navbar.Link>
                    <Navbar.NavItem>
                        <ExternalLink to="https://github.com/adtennant/destiny-weapon-calculator">View on GitHub</ExternalLink>
                    </Navbar.NavItem>
                </Navbar.Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
