// import { SingleMovie } from 'Pages/MovieDetails/MovieDetails';
import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button, Input, StyledLink, MovieTitle } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=ca0bc941de48c2ff206be5206128b701`
      )
      .then(res => setMovies(res.data.results));
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
