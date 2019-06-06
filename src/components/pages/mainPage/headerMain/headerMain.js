import React from 'react';

import { Link } from 'react-router-dom';

import './main-section.sass';

const HeaderMain = () => (
  <section className="header-section">
    <div className="container">
      <div className="header__row">
        <Link to="/" className="header__categorie header__categorie-livingroom">
          <h2>Living Room Furniture</h2>
          <p>
            Make your living room stylish and comfortable with high
            quality living room furniture from Crate and Barrel.
          </p>
          <div>
            <b className="header__categorie-link">SHOP NOW</b>
          </div>
        </Link>
        <div className="header__col header__col2">
          <Link to="/" className="header__categorie header__categorie-bedroom">
            <h3>Big Saving Season</h3>
            <h2>
              <b>Bedroom</b>
              <br />
              Furniture
            </h2>
          </Link>
          <Link to="/" className="header__categorie header__categorie-kitchen">
            <h3>Big Saving Season</h3>
            <h2>
              <b>KITCHEN</b>
              <br />
              FURNITURE
            </h2>
          </Link>
          <Link to="/" className="header__categorie header__categorie-creativity">
            <h3>Discover Now</h3>
            <h2>
              <b>CREATIVE</b>
              <br />
              FURNITURE
            </h2>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeaderMain;
