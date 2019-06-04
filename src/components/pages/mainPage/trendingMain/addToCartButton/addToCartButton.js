import React from "react"

import { connect } from "react-redux"
import * as actions from "../../../../../redux/actions/trending/trendingActions.js"

class AddToCartButton extends React.Component{
  state = {
    inCart: false,
  }

  addingToCart = (data) => {
    this.props.addToCart(data);
    this.setState({ inCart: true })
  }

  render(){
    const {data} = this.props;
    const iconClass = this.state.inCart ? "icon-checkmark" : "icon-shopping-cart";
    const buttonText = this.state.inCart ? "Add one more" : "Add To Cart";
    return (
      <button onClick={() => this.addingToCart(data)}>
        <span className={iconClass}></span>{buttonText}
      </button>
    )
  }
}

export default connect(null, actions)(AddToCartButton)
