import React from 'react';

import ItemImage from './itemImage/itemImage';
import ItemContent from './itemContent/itemContent';

import './mainInfoItem.sass';

const MainInfoItem = ({
  itemInfo, addToCartNum, changeCartNum, addToCartItemPage,
}) => (
  <div className="itemMain-section">
    <div className="container">
      <ItemImage image={itemInfo.image} title={itemInfo.title} />
      <ItemContent
        {...itemInfo}
        addToCartNum={addToCartNum}
        changeCartNum={changeCartNum}
        addToCartItemPage={addToCartItemPage}
      />
      <div className="clearfix" />
    </div>
  </div>
);

export default MainInfoItem;
