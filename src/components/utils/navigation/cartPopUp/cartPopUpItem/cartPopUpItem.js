import React from 'react';

const CartPopUpItem = ({ title, image, price }) => (
  <div className="products__item cart-popup__item">
    <div className="products__image">
      <img src={`/images/main/products/${image}`} alt={title} />
    </div>
    <div className="products__content">
      <h2>{title}</h2>
      <h3>{`$${price}`}</h3>
    </div>
    <div className="clearfix" />
  </div>
);

export default CartPopUpItem;
