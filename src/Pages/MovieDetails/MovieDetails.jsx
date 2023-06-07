import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import {
  StyledLink,
  DetailsNav,
  BoxMovie,
  BoxDetails,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const API_KEY = `ca0bc941de48c2ff206be5206128b701`;
    const getMovieService = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });

    const getMovie = async () => {
      const { data } = await getMovieService.get(
        `/movie/${id}?api_key=${API_KEY}`
      );
      return data;
    };

    const fetchMovie = async () => {
      try {
        const movie = await getMovie();
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return null;
  const { title, genres, overview, poster_path } = movie;

  return (
    <>
      <BoxMovie>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        ></img>
        <BoxDetails>
          <h1>{movie.original_title}</h1>
          <b>User vote: {movie.vote_average.toFixed(2)}</b>
          <h2>Overview</h2>
          <p>{overview}</p>
          <p>
            <b>Genre: </b>
            {movie && genres.map(item => item.name).join(' ')}
          </p>
        </BoxDetails>
      </BoxMovie>

      <h2>Additional information</h2>

      <DetailsNav>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </DetailsNav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
