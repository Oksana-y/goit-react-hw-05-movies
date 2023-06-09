import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Header, Main } from './Layout.styled';
import Navigation from './Navigation';

export const Layout = () => {
  return (
    <>
      <Header>
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
