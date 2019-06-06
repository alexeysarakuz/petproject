import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import CartItem from './cart/cartItem/cartItem';
import Menu from './menu';

import './navigation.sass';
import './menu.sass';

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
      <React.Fragment>
        <nav className={navStickyClass}>
          <div className="container">
            <div className="nav__call">
              <a href="tel:+380990000000">
                <span className="icon-phone" />
                <span>CALL US NOW: +380 99 000 0000</span>
              </a>
            </div>
            <div className="nav__logo">
              <h1>
                <Link to="/">Loftroom</Link>
              </h1>
            </div>
            <div className="nav__additional">
              <div className="nav__additional-cart">
                <CartItem cartItems={cartItems} />
              </div>
              <div className="nav__additional-search">
                <span className="icon-search" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </nav>

        <section className={helperClass} />

        <Menu />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ cartItems: state.CartReducer.cartItems });
export default connect(mapStateToProps, null)(Navigation);
