import React from "react"

import ProductsItem from "../../productsItem/productsItem"

const PopularProducts = () => {
  return (
    <div className="products__col">
      <h2 className="products__col-title">Popular Products</h2>
      <div className="products__categorie products__popular">
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img6.jpg" price={12} rate={3.5} />
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img7.jpg" price={11} rate={4} />
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img1.jpg" price={4} rate={3} />
      </div>
    </div>
  )
}

export default PopularProducts
