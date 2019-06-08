import React, { memo } from 'react';

import './cartPopUp.sass';

import CartPopUpItem from './cartPopUpItem/cartPopUpItem';

import CartContent from './cartContent/cartContent';

const CartPopUp = ({ cartPopUpStatus, cartItems, totalPrice }) => {
  const cartPopUpClass = cartPopUpStatus ? 'visible' : '';

  const cartPopUpItems = cartItems.map(
    item => (
      <CartPopUpItem
        key={item.id}
        {...item}
      />
    ),
  );

  const showPopupContent = cartItems.length === 0 ? (
    <p>No products in the cart</p>
  ) : (
    <CartContent
      cartPopUpItems={cartPopUpItems}
      totalPrice={totalPrice}
    />
  );

  return (
    <div className={`cart-popup ${cartPopUpClass}`}>
      <h2 className="cart-popup__title">My Cart</h2>
      {showPopupContent}
    </div>
  );
};

export default memo(CartPopUp);
