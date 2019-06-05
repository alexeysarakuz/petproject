import React from "react"

import {Link} from "react-router-dom"

import {connect} from "react-redux"

import CartItem from "./cart/cartItem/cartItem"
import Menu from './menu.js'

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
    const {cartItems} = this.props;
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
                <CartItem cartItems={cartItems}/>
              </div>
              <div className="nav__additional-search">
                <span className="icon-search"></span>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </nav>


        <section className={helperClass}></section>


        <Menu />
      </>
    )
  }
}

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems })
export default connect(mapStateToProps, null)(Navigation)
