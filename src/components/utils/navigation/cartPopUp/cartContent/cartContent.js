import React from 'react';

const CartContent = ({ cartPopUpItems, totalPrice }) => (
  <React.Fragment>
    <ul className="cart-popup__list">
      {cartPopUpItems}
    </ul>
    <h3 className="cart-popup__total">
      {`Total: $${totalPrice.toFixed(2)}`}
    </h3>
  </React.Fragment>
);

export default CartContent;
