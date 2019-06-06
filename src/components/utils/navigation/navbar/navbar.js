import React from 'react';

import CartItem from '../cart/cartItem/cartItem';
import Menu from '../menu/menu';
import NavLogo from '../navlogo/navlogo';

const NavBar = ({ navStickyClass, cartItems, helperClass }) => (
  <React.Fragment>
    <nav className={navStickyClass}>
      <div className="container">
        <div className="nav__call">
          <a href="tel:+380990000000">
            <span className="icon-phone" />
            <span>
              <span className="nav__call-text">CALL US NOW</span>
              <span className="nav__call-number">: +380 99 000 0000</span>
            </span>
          </a>
        </div>
        <div className="nav__logo">
          <NavLogo />
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

export default NavBar;
