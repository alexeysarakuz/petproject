import React, { Component } from 'react';

import { connect } from 'react-redux';

import NavBar from './navbar/navbar';

import './navigation.sass';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrollOffset: 0,
      cartPopUpStatus: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ scrollOffset: window.pageYOffset });
    }, 100);
    window.onscroll = () => {
      this.setState({ scrollOffset: window.pageYOffset });
    };
  }

  toggleCartPopup = () => {
    this.setState(prevState => ({ cartPopUpStatus: !prevState.cartPopUpStatus }));
  }

  render() {
    const { cartItems, totalPrice, totalQuantity } = this.props;
    const { scrollOffset, cartPopUpStatus } = this.state;
    const navStickyClass = scrollOffset < 95 ? 'nav' : 'nav active';
    const helperClass = scrollOffset < 95 ? 'helper' : 'helper active';
    return (
      <NavBar
        navStickyClass={navStickyClass}
        helperClass={helperClass}
        cartItems={cartItems}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
        cartPopUpStatus={cartPopUpStatus}
        toggleCartPopup={this.toggleCartPopup}
      />
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.CartReducer.cartItems,
  totalPrice: state.CartReducer.totalPrice,
  totalQuantity: state.CartReducer.totalQuantity,
});

export default connect(mapStateToProps, null)(Navigation);
