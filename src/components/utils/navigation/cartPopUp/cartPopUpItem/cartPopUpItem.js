import React, { memo } from 'react';

const CartPopUpItem = ({
  title, image, price, quantity,
}) => (
  <div className="products__item cart-popup__item">
    <div className="products__image">
      <img src={`/images/main/products/${image}`} alt={title} />
    </div>
    <div className="products__content">
      <h2>{title}</h2>
      <h3>{`${quantity} x $${price}`}</h3>
    </div>
    <div className="clearfix" />
  </div>
);

export default memo(CartPopUpItem);
