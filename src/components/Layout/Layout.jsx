import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Header, Button, Main } from './Layout.styled';
import Navigation from './Navigation';

export const Layout = () => {
  return (
    <>
      <Header>
        {/* {location.pathname !== '/' && (
          <Button
            type="button"
            onClick={goBackButtonHandler}
          >
            Go back
          </Button>
        )} */}

        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
