import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMessage = styled.h2`
  display: flex;
  /* display: inline-block; */
  flex-direction: column;
  font-size: 35px;
  font-weight: 900;
  color: blue;
`;

export const StyledLink = styled(Link)`
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
  padding: 0;
  text-decoration: none;
  color: black;
  display: inline-block;
  &:hover {
    color: blue;
  }
`;
export const Picture = styled.img`
  width: 1000px;
`;
