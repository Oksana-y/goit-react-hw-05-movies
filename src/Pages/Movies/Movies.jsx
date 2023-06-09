import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button, Input, StyledLink, MovieTitle } from './Movies.styled';
import { getQuery } from '../../services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    if (e.currentTarget.query.value === '') {
      return;
    }
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    const fetchQuery = async () => {
      try {
        const movies = await getQuery(query);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuery();
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query"></Input>
        <Button type="text">Search</Button>
      </form>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title}</MovieTitle>
            </StyledLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
