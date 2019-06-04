import React from 'react'

import './trendingItem.sass'
import AddToCartButton from '../addToCartButton/addToCartButton'

const TrendingItem = (props) => {
  const {data} = props;
  const {title, price, image, rate} = data;
  const imgPath = "/images/main/trending/" + image;

  return (
    <div className="trending__item">
      <img src={imgPath} alt={title}/>
      <h2>{title}</h2>
      <h3>${price}</h3>
      <div>
        <span>★★★</span>★★
      </div>
      <AddToCartButton data={data}/>
    </div>
  )
}

export default TrendingItem
