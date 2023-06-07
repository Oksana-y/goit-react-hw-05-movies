import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Header, Button, Main } from './Layout.styled';
import Navigation from './Navigation';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header>
        {location.pathname !== '/' && (
          <Button type="button" onClick={() => navigate(-1)}>
            Go back
          </Button>
        )}

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
