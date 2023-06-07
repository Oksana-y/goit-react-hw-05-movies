import React from 'react';
import { StyledMessage, StyledLink, Picture } from './NotFound.styled';

export const NotFound = () => {
  return (
    <>
      <StyledMessage>
        Page not found...
        <StyledLink to="/">Go Home</StyledLink>
        <Picture
          src="https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg"
          alt="NotFound"
        ></Picture>
      </StyledMessage>
    </>
  );
};
