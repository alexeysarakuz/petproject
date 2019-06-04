import React from "react"

import {connect} from "react-redux"

const CartItem = (cartItems) => {
  const itemsInCart = cartItems.cartItems.length;
  return (
    <div>
      <span className="icon-basket"></span>
      <span className="basket-num">{itemsInCart}</span>
    </div>
  )
}

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems })

export default connect(mapStateToProps, null)(CartItem)
