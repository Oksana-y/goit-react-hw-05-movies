import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';
import { getReviews } from '../../services/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(id);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
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
