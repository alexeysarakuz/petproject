import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Menu = () => {
  return (
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
  )
}

export default Menu
