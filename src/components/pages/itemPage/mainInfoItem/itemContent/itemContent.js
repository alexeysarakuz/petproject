import React from 'react';
import Rating from 'react-rating';

import './itemContent.sass';


const ItemContent = ({
  title, price, categories, tags, rate, descr,
}) => {
  const categoriesString = categories.join(', ');
  const tagsString = tags.join(', ');
  return (
    <div className="itemMain__content">
      <h2>{title}</h2>
      <h3>{`$${price}`}</h3>
      <div className="itemMain__categories">
        <b>Categories: </b>
        {categoriesString}
      </div>
      <div className="itemMain__tags">
        <b>Tags: </b>
        {tagsString}
      </div>
      <Rating
        initialRating={rate}
        fullSymbol={<div className="rate rate-full">★</div>}
        emptySymbol={<div className="rate rate-empty">★</div>}
      />
      <p>{descr}</p>
    </div>
  );
};

export default ItemContent;
