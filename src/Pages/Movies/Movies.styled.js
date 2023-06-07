import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Button = styled.button`
  background-color: aquamarine;
  border: none; /* Green */
  border-radius: 5px;
  color: black;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-weight: 900;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  padding: 5px;
  margin-right: 20px;
  cursor: pointer;
  background-color: aquamarine;
  border-radius: 5px;
  outline: 2px solid lightgrey;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  &:checked {
    background-color: white;
  }
`;

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
