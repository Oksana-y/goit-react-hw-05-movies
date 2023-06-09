import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import {
  Button,
  StyledLink,
  DetailsNav,
  BoxMovie,
  BoxDetails,
} from './MovieDetails.styled';
import { getMovie } from '../../services/Api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const goBackButtonHandler = () => {
    navigate(location.state?.from, { replace: true } ?? '/');
  };
  

  useEffect(() => {
        const fetchMovie = async () => {
      try {
        const movie = await getMovie(id);
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
      <Button type="button" onClick={goBackButtonHandler}>
        Go back
      </Button>
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
            <StyledLink to="cast" state={location.state}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={location.state}>
              Reviews
            </StyledLink>
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
