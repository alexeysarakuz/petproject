import React from 'react';

import './trendingMain.sass';

import TrendingList from './trendingList/trendingList';

const TrendingMain = () => (
  <section className="trending-section">
    <div className="container">
      <h2 className="main-title">TRENDING PRODUCTS</h2>
      <h2 className="main-descr">We Believe It’s Well Worth Paying That Extra For Quality And Service.</h2>
      <div className="main-line" />
      <TrendingList />
    </div>
  </section>
);

export default TrendingMain;
