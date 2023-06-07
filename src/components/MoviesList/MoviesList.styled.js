import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  display: inline-block;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    color: blue;
  }
`;

export const MovieTitle = styled.p`
  margin: 5px 0px;
`;
