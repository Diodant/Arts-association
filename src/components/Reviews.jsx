import React from 'react';
import ReviewsImg from '../images/reviews.webp';
import { Link } from 'react-router-dom';
import reviewsData from './Reviews/reviewsData';
import { Helmet } from 'react-helmet-async';

function Reviews() {
  return (
    <div className="xContent p-0">
              <Helmet>
        <title>Рецензии</title>
        <meta
        name="description"
        content='Рецензии Международной Ассоциации маркетологов СНГ'
        />
        <link rel="canonical" href="https://marketing-association.com/reviews" />
      </Helmet>
      <div className="articlesContainer">
        <div className="articlesImage">
          <img src={ReviewsImg} alt="Рецензии" />
        </div>
        <div className="articlesText">
          <h1>Публикации</h1>
          <h2>Рецензии</h2>
          <p>Рецензии членов Ассоциации</p>
        </div>
      </div>
      <div className="block p-box py-6">
        {reviewsData.map(review => (
          <div key={review.slug} className="review-summary block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to={`/reviews/${review.slug}`}>{review.title}</Link>
            <div className="tags mt-3">
            <span className="articlesMember">{review.author}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
