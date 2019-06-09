import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/item/itemActions';

import HeaderItem from './headerItem/headerItem';
import MainInfoItem from './mainInfoItem/mainInfoItem';

class ItemPage extends Component {
  componentDidMount() {
    const { getItemInfo } = this.props;
    getItemInfo(2);
  }

  render() {
    const { itemInfo } = this.props;
    return (
      <div>
        <HeaderItem />
        <MainInfoItem itemInfo={itemInfo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ itemInfo: state.ItemInfoReducer.itemInfo });

export default connect(mapStateToProps, actions)(ItemPage);
