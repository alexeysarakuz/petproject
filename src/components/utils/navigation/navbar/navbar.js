import React from 'react';

import CartIcon from '../cartIcon/cartIcon';
import Menu from '../menu/menu';
import NavLogo from '../navlogo/navlogo';
import CartPopUp from '../cartPopUp/cartPopUp';

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
            <CartIcon cartItems={cartItems} />
          </div>
          <div className="nav__additional-search">
            <span className="icon-search" />
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </nav>

    <CartPopUp cartPopUpStatus cartItems={cartItems} />

    <section className={helperClass} />

    <Menu />
  </React.Fragment>
);

export default NavBar;
