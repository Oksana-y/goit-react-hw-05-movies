import { MoviesList } from 'components/MoviesList/MoviesList';
import React from 'react';
import { Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <Title>Trending today</Title>
      <MoviesList />
    </>
  );
};

export default HomePage;
