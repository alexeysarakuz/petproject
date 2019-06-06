import React, { Component } from 'react';

import { connect } from 'react-redux';

import NavBar from './navbar/navbar';

import './navigation.sass';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrollOffset: 0,
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

  render() {
    const { cartItems } = this.props;
    const { scrollOffset } = this.state;

    const navStickyClass = scrollOffset < 95 ? 'nav' : 'nav active';
    const helperClass = scrollOffset < 95 ? 'helper' : 'helper active';
    return (
      <NavBar
        navStickyClass={navStickyClass}
        helperClass={helperClass}
        cartItems={cartItems}
      />
    );
  }
}

const mapStateToProps = state => ({ cartItems: state.CartReducer.cartItems });
export default connect(mapStateToProps, null)(Navigation);
