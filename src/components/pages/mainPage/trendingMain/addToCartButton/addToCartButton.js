import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/trending/trendingActions';

import './addToCartButton.sass';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      inCart: false,
    };
  }

  addingToCart = (data) => {
    const { addToCart } = this.props;
    addToCart(data);
    this.setState({ inCart: true });
  }

  render() {
    const { data } = this.props;
    const { inCart } = this.state;
    const iconClass = inCart ? 'icon-checkmark' : 'icon-shopping-cart';
    const buttonText = inCart ? 'Add one more' : 'Add To Cart';
    return (
      <button type="submit" onClick={() => this.addingToCart(data)}>
        <span className={iconClass} />
        {buttonText}
      </button>
    );
  }
}

export default connect(null, actions)(AddToCartButton);
