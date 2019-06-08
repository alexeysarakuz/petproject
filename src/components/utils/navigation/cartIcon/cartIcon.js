import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CartIcon = ({ totalQuantity }) => (
  <div>
    <span className="icon-basket" />
    <span className="basket-num">{totalQuantity}</span>
  </div>
);

CartIcon.propTypes = {
  totalQuantity: PropTypes.number.isRequired,
};

export default memo(CartIcon);
