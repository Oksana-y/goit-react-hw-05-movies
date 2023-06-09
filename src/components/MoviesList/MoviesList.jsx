import React, { useEffect, useState } from 'react';
import { StyledLink, MovieTitle } from './MoviesList.styled';
import { getTrendingMovies } from '../../services/Api';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`movies/${movie.id}`}>
            <MovieTitle>{movie.title}</MovieTitle>
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};
