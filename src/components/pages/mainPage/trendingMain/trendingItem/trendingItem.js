import React from 'react';
import './trendingItem.sass';

import AddToCartButton from './addToCartButton/addToCartButton';
import ItemContent from './itemContent/itemContent';

const TrendingItem = ({ data, addToCart }) => (
  <div className="trending__item">
    <ItemContent data={data} />
    <AddToCartButton data={data} addToCart={addToCart} />
  </div>
);

export default TrendingItem;
