import React from "react"

import ProductsItem from "../../productsItem/productsItem"

const NewProducts = () => {
  return (
      <div className="products__categorie products__new">
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img3.jpg" price={12} rate={5} />
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img4.jpg" price={11} rate={4} />
        <ProductsItem title={"LumiSource Gianna Mid-Century Modern Dining Chair"} image="img5.jpg" price={4} rate={3} />
      </div>
  )
}

export default NewProducts
