import React, { useEffect, useState } from 'react';
import axios from 'axios'; //
import { StyledLink, MovieTitle } from './MoviesList.styled';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = `ca0bc941de48c2ff206be5206128b701`;
    const getMovieService = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });

    const getTrendingMovies = async () => {
      const { data } = await getMovieService.get(
        `/trending/movie/day?api_key=${API_KEY}`
      );
      return data;
    };

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
