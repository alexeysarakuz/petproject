import React, { memo } from 'react';

import './itemImage.sass';

const ItemImage = ({ image, title }) => (
  <div className="itemMain__image">
    <img src={`/images/main/products/${image}`} alt={title} />
  </div>
);

export default memo(ItemImage);
