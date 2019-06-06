import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ cartItems }) => {
  const itemsInCart = cartItems.length;
  return (
    <div>
      <span className="icon-basket" />
      <span className="basket-num">{itemsInCart}</span>
    </div>
  );
};

CartItem.propTypes = {
  cartItems: PropTypes.instanceOf(Array).isRequired,
};

export default memo(CartItem);
