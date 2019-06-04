import React from "react"

import NewProducts from "./productsCategories/newProducts/newProducts"
import BestProducts from "./productsCategories/bestProducts/bestProducts"
import PopularProducts from "./productsCategories/popularProducts/popularProducts"

import "./productsMain.sass"

const ProductsMain = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="products__row">
          <NewProducts />
          <BestProducts />
          <PopularProducts />
        </div>
      </div>
    </section>
  )
}

export default ProductsMain
