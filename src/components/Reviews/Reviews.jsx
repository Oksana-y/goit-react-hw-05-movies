import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=ca0bc941de48c2ff206be5206128b701`
      )
      .then(res => setReviews(res.data.results));
  }, [id]);

  return (
    <ReviewsList>
      {reviews.length > 0
        ? reviews.map(review => (
            <li key={review.id}>
              <b>{review.author_details.name}</b>
              <p>{review.content}</p>
              <hr />
            </li>
          ))
        : 'We do not have any reviews for this movie '}
    </ReviewsList>
  );
};
