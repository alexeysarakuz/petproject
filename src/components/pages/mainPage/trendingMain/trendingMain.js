import React, { Component } from 'react';

import './trendingMain.sass';

import { connect } from 'react-redux';

import TrendingItem from './trendingItem/trendingItem';
import * as actions from '../../../../redux/actions/trending/trendingActions';

class TrendingMain extends Component {
  componentDidMount() {
    const { getTrendingItems } = this.props;
    getTrendingItems();
  }

  render() {
    const { trendingData, addToCart } = this.props;
    const TrendingItems = trendingData.map(item => (
      <TrendingItem key={item.id} data={item} addToCart={addToCart} />
    ));
    return (
      <section className="trending-section">
        <div className="container">
          <h2 className="main-title">TRENDING PRODUCTS</h2>
          <h2 className="main-descr">We Believe It’s Well Worth Paying That Extra For Quality And Service.</h2>
          <div className="main-line" />
          <div className="trending__row">
            { TrendingItems }
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ trendingData: state.TrendingReducer.trendingData });
export default connect(mapStateToProps, actions)(TrendingMain);
