import React, { memo } from 'react';

import './cartPopUp.sass';

import CartPopUpItem from './cartPopUpItem/cartPopUpItem';

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
    <>
      <ul className="cart-popup__list">
        {cartPopUpItems}
      </ul>
      <h3 className="cart-popup__total">
        {`Total: $${totalPrice.toFixed(2)}`}
      </h3>
    </>
  );

  return (
    <div className={`cart-popup ${cartPopUpClass}`}>
      <h2 className="cart-popup__title">My Cart</h2>
      {showPopupContent}
    </div>
  );
};

export default memo(CartPopUp);
