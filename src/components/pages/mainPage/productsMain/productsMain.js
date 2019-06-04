import React from 'react'

import NewProducts from './productsCategories/newProducts/newProducts'
import BestProducts from './productsCategories/bestProducts/bestProducts'
import PopularProducts from './productsCategories/popularProducts/popularProducts'

const ProductsMain = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="products__new">
          <NewProducts />
        </div>
        <div className="products__best">
          <BestProducts />
        </div>
        <div className="products__popular">
          <PopularProducts />
        </div>
      </div>
    </section>
  )
}

export default ProductsMain
