import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  display: inline-block;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const DetailsNav = styled.nav`
  background-color: aquamarine;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
`;
export const BoxMovie = styled.div`
  display: flex;
`;
export const BoxDetails = styled.div`
  margin-left: 10px;
`;
export const Button = styled.button`
  background-color: lightgrey; /* Green */
  border: none;
  margin-bottom:20px;
  color: black;
  padding: 5px 15px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-weight: 900;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  border-radius: 5px;
  cursor: pointer;
`;
