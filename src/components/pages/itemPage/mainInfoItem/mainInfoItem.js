import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../../../redux/actions/item/itemActions';

import ItemImage from './itemImage/itemImage';
import ItemContent from './itemContent/itemContent';

import './mainInfoItem.sass';

class MainInfoItem extends Component {
  componentDidMount() {
    const { getItemInfo } = this.props;
    getItemInfo(2);
  }

  render() {
    const { itemInfo } = this.props;
    return (
      <div className="itemMain-section">
        <div className="container">
          <ItemImage image={itemInfo.image} title={itemInfo.title} />
          <ItemContent {...itemInfo} />
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ itemInfo: state.ItemInfoReducer.itemInfo });

export default connect(mapStateToProps, actions)(MainInfoItem);
