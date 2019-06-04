import React from "react"

import {Link, NavLink} from "react-router-dom"

import CartItem from "./cart/cartItem/cartItem"

import "./navigation.sass"
import "./menu.sass"

class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      scrollOffset: 0
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({scrollOffset: window.pageYOffset});
    }, 100)
    window.onscroll = () => {
      this.setState({scrollOffset: window.pageYOffset});
    }
  }

  render(){
    const navStickyClass = this.state.scrollOffset < 95 ? "nav" : "nav active";
    const helperClass = this.state.scrollOffset < 95 ? "helper" : "helper active";
    return (
      <>
        <nav className={navStickyClass}>
          <div className="container">
            <div className="nav__call">
              <a href="tel:+380990000000">
                <span className="icon-phone"></span>
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
                <CartItem />
              </div>
              <div className="nav__additional-search">
                <span className="icon-search"></span>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </nav>

        <section className={helperClass}></section>

        <section className="menu-section">
          <div className="container">
            <ul>
              <li className="menu__item">
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/bedroom" activeClassName="active">Bedroom</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/livingroom" activeClassName="active">Living room</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/shop" activeClassName="active">Shop</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
              </li>
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default Navigation
