import React from 'react';
import PropTypes from 'prop-types';

const CartIcon = ({ cartItems }) => {
  let itemsInCart = 0;
  for (let i = 0; i < cartItems.length; i += 1) {
    itemsInCart += cartItems[i].quantity;
  }
  return (
    <div>
      <span className="icon-basket" />
      <span className="basket-num">{itemsInCart}</span>
    </div>
  );
};

CartIcon.propTypes = {
  cartItems: PropTypes.instanceOf(Array).isRequired,
};

export default CartIcon;
