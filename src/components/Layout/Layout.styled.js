import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  padding-bottom: 20px;
  display: flex;
  background-color: aquamarine;
  border-bottom: 2px solid grey;
`;
export const Button = styled.button`
  background-color: lightgrey; /* Green */
  border: none;
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

export const Main = styled.main`
  height: 100vh;
  padding: 20px;
  background-color: lightgrey;
`;
