import React, { memo } from 'react';

import './cartPopUp.sass';

import CartPopUpItem from './cartPopUpItem/cartPopUpItem';

const CartPopUp = ({ cartPopUpStatus, cartItems, totalPrice }) => {
  const cartPopUpClass = cartPopUpStatus ? 'visible' : '';
  const emptyCartText = (
    <p>No products in the cart</p>
  );

  const cartPopUpItems = cartItems.map(
    item => (
      <CartPopUpItem
        key={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        quantity={item.quantity}
      />
    ),
  );

  const cartVisibleItem = cartItems.length === 0 ? emptyCartText : cartPopUpItems;
  const totalVisible = cartItems.length === 0 ? '' : (
    <h3 className="cart-popup__total">{`Total: $${totalPrice.toFixed(2)}`}</h3>
  );
  return (
    <div className={`cart-popup ${cartPopUpClass}`}>
      <h2 className="cart-popup__title">My Cart</h2>
      <ul className="cart-popup__list">
        {cartVisibleItem}
      </ul>
      {totalVisible}
    </div>
  );
};

export default memo(CartPopUp);
