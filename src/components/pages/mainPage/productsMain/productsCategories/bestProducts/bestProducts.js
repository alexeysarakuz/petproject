import React from 'react';

import ProductsItem from '../../productsItem/productsItem';

const BestProducts = () => (
  <div className="products__col">
    <h2 className="products__col-title">Best Sales</h2>
    <div className="products__categorie products__best">
      <ProductsItem title="LumiSource Gianna Mid-Century Modern Dining Chair" image="img0.jpg" price={12} rate={5} />
      <ProductsItem title="LumiSource Gianna Mid-Century Modern Dining Chair" image="img1.jpg" price={11} rate={4} />
      <ProductsItem title="LumiSource Gianna Mid-Century Modern Dining Chair" image="img2.jpg" price={4} rate={3} />
    </div>
  </div>
);

export default BestProducts;
