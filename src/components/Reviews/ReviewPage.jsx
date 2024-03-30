import React from 'react';
import { useParams } from 'react-router-dom';
import reviewsData from './reviewsData';

function ReviewPage() {
  const { slug } = useParams();
  const review = reviewsData.find((r) => r.slug === slug);

  if (!review) {
    return <div>Рецензия не найдена.</div>;
  }

  return (
    <div className="xContent p-box py-6">
      <h1 className="title is-font-title-regular has-text-centered has-text-var-blue">{review.title}</h1>
      <div className="content wysiwyg">
      <p className='has-text-centered p-style p-1'>{review.subtitle}</p>
      <p>{review.content1}</p>
      <p>{review.content2}</p>
      <p>{review.content3}</p>
      <p>{review.content4}</p>
      <p>{review.content5}</p>
      <p>{review.content6}</p>
      <p>{review.content7}</p>
      <p>{review.content8}</p>
      <p>{review.content9}</p>
      <p>{review.content10}</p>
      <p>{review.content11}</p>
      <p>{review.content12}</p>
      <p>{review.content13}</p>
      </div>
    </div>
  );
}

export default ReviewPage;
