import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Name, Actor, Character,ActorsList } from './Cast.styled';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=ca0bc941de48c2ff206be5206128b701`
      )
      .then(res => setCredits(res.data.cast));
  }, [id]);

  return (
    <ActorsList>
      {credits?.map(credit => (
        <Actor key={credit.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${credit.profile_path}`}
            alt="poster"
            width="100"
          />

          <Name>{credit.name}</Name>
          <Character>{credit.character}</Character>
        </Actor>
      ))}
    </ActorsList>
  );
};
