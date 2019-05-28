import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    border-bottom: solid 1px rgba(244,244,244,.1);
    display: flex;
    height: 100px;
    padding: 24px;
`;

const LogoContainer = styled.div`
    width: 250px;
`;

const Nav = styled.nav`
    align-items: flex-end;
    display: flex;
    margin-left: 24px;
`;

const activeClassName = 'active';
const StyledLink = styled(NavLink).attrs({
    activeClassName
})`
    color: #00ff84;
    cursor: pointer;
    margin-left: 24px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color .3s;

    &:hover {
        color: #4efdfe;
    }

    &.${activeClassName} {
        color: #fe6f4e;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <NavLink to="/">
                    <img src="https://via.placeholder.com/250x50.png?text=Logo" alt="Primary Logo" />
                </NavLink>
            </LogoContainer>
            <Nav>
                <StyledLink 
                    exact 
                    to="/" 
                    activeClassName="active"
                >
                    Getting Started
                </StyledLink>
                <StyledLink exact to="/components" activeClassName="active">Component Explorer</StyledLink>
                <StyledLink exact to="/icons" activeClassName="active">Icon Explorer</StyledLink>
            </Nav>
        </StyledHeader>
    )
}

export default Header;