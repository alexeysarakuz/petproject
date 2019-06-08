import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Rating from 'react-rating';

const ItemContent = ({ data }) => {
  const {
    title, price, rate, image, id,
  } = data;
  const imgPath = `/images/main/products/${image}`;
  return (
    <>
      <Link to={`/item/${id}`}>
        <img src={imgPath} alt={title} />
      </Link>
      <h2>{title}</h2>
      <h3>{`$${price}`}</h3>
      <Rating
        initialRating={rate}
        fullSymbol={<div className="rate rate-full">★</div>}
        emptySymbol={<div className="rate rate-empty">★</div>}
      />
    </>
  );
};


export default memo(ItemContent);
