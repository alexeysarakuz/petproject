import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

import './productsItem.sass';
import { Link } from 'react-router-dom';

const ProductsItem = ({
  title, price, rate, image,
}) => (
  <div className="products__item">
    <div className="products__image">
      <img src={`/images/main/products/${image}`} alt={title} />
    </div>
    <div className="products__content">
      <Link to="/">
        <h2>{title}</h2>
      </Link>
      <h3>{`$${price}.00`}</h3>
      <Rating
        initialRating={rate}
        fullSymbol={<div className="rate rate-full">★</div>}
        emptySymbol={<div className="rate rate-empty">★</div>}
      />
    </div>
    <div className="clearfix" />
  </div>
);

ProductsItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductsItem;
