import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CartIcon = ({ totalQuantity, toggleCartPopup }) => (
  <div>
    <span className="icon-basket" onClick={toggleCartPopup} />
    <span className="basket-num" onClick={toggleCartPopup}>{totalQuantity}</span>
  </div>
);

CartIcon.propTypes = {
  totalQuantity: PropTypes.number.isRequired,
};

export default memo(CartIcon);
