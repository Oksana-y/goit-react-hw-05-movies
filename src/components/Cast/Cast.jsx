import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Name, Actor, Character, ActorsList } from './Cast.styled';
import { getCredits } from '../../services/Api';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const credits = await getCredits(id);
        setCredits(credits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCredits();
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
