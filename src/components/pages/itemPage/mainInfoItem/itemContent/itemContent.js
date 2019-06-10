import React from 'react';
import Rating from 'react-rating';

import './itemContent.sass';


const ItemContent = ({
  title, price, id, image, categories, tags,
  rate, descr, addToCartNum, changeCartNum, addToCartItemPage,
}) => {
  const categoriesString = categories.join(', ');
  const tagsString = tags.join(', ');
  const itemForCart = {
    title, price, rate, id, image,
  };
  return (
    <div className="itemMain__content">
      <h2>{title}</h2>
      <h3>{`$${price}`}</h3>
      <div className="itemMain__categories">
        <b>Categories: </b>
        {categoriesString}
      </div>
      <div className="itemMain__tags">
        <b>Tags: </b>
        {tagsString}
      </div>
      <Rating
        initialRating={rate}
        fullSymbol={<div className="rate rate-full">★</div>}
        emptySymbol={<div className="rate rate-empty">★</div>}
      />
      <p>{descr}</p>
      <h4>Quantity</h4>
      <input type="text" value={addToCartNum} onChange={changeCartNum} />
      <button
        onClick={() => {
          addToCartItemPage(itemForCart);
        }}
      >
        <span className="icon-shopping-cart" />
        Add to cart
      </button>
    </div>
  );
};

export default ItemContent;
