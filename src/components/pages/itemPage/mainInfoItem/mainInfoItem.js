import React from 'react';

import ItemImage from './itemImage/itemImage';
import ItemContent from './itemContent/itemContent';

import './mainInfoItem.sass';

const MainInfoItem = ({ itemInfo }) => (
  <div className="itemMain-section">
    <div className="container">
      <ItemImage image={itemInfo.image} title={itemInfo.title} />
      <ItemContent {...itemInfo} />
      <div className="clearfix" />
    </div>
  </div>
);

export default MainInfoItem;
