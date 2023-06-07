import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  display: inline-block;

  &.active {
    color: blue;
  }
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
`;

export const NavItem = styled.li`
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
