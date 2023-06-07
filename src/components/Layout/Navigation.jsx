import React from 'react';
import { StyledNavLink, NavList, NavItem } from './Navigation.styled.js';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
