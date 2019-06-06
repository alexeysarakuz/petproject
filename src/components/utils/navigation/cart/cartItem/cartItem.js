import React from 'react';

const CartItem = ({ cartItems }) => {
  const itemsInCart = cartItems.length;
  return (
    <div>
      <span className="icon-basket" />
      <span className="basket-num">{itemsInCart}</span>
    </div>
  );
};

export default CartItem;
