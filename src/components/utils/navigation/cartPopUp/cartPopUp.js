import React from 'react';

import './cartPopUp.sass';

import CartPopUpItem from './cartPopUpItem/cartPopUpItem';

const CartPopUp = ({ cartPopUpStatus, cartItems }) => {
  const cartPopUpClass = cartPopUpStatus ? 'visible' : '';
  const emptyCartText = (
    <p>No products in the cart</p>
  );

  const cartPopUpItems = cartItems.map(
    item => (
      <CartPopUpItem key={item.id} title={item.title} price={item.price} image={item.image} />
    ),
  );
  const cartVisibleItem = cartItems.length === 0 ? emptyCartText : cartPopUpItems;
  return (
    <div className="container popup-container">
      <div className={`cart-popup ${cartPopUpClass}`}>
        <h2 className="cart-popup__title">My Cart</h2>
        <ul className="">
          {cartVisibleItem}
        </ul>
      </div>
    </div>
  );
};

export default CartPopUp;
