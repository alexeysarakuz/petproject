import React from "react"
import PropTypes from "prop-types"

import "./productsItem.sass"

const ProductsItem = ({title, price, rate, image}) => {
  const imageSrc = "/images/main/products/" + image;
  return (
    <div className="products__item">
      <div className="products__image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="products__content">
        <h2>{title}</h2>
        <h3>${price}.00</h3>
        <div>{rate}</div>
      </div>
      <div className="clearfix"></div>
    </div>
  )
}

ProductsItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default ProductsItem
