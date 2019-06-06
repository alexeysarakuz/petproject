import React from 'react';
import Rating from 'react-rating';

import './trendingItem.sass';

import AddToCartButton from '../addToCartButton/addToCartButton';

const TrendingItem = (props) => {
  const { data } = props;
  const {
    title, price, image, rate,
  } = data;
  const imgPath = `/images/main/products/${image}`;

  return (
    <div className="trending__item">
      <img src={imgPath} alt={title} />
      <h2>{title}</h2>
      <h3>{`$${price}`}</h3>
      <Rating
        initialRating={rate}
        fullSymbol={<div className="rate rate-full">★</div>}
        emptySymbol={<div className="rate rate-empty">★</div>}
      />
      <AddToCartButton data={data} />
    </div>
  );
};

export default TrendingItem;
