import React from "react"

import ProductsItem from "../../productsItem/productsItem"

const NewProducts = () => {
  return (
    <div className="products__col">
      <h2 className="products__col-title">New Arrival</h2>
      <div className="products__categorie products__new">
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img3.jpg" price={12} rate={5} />
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img4.jpg" price={11} rate={4} />
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img5.jpg" price={4} rate={3} />
      </div>
    </div>
  )
}

export default NewProducts
