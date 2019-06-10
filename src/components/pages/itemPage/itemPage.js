import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/item/itemActions';

import HeaderItem from './headerItem/headerItem';
import MainInfoItem from './mainInfoItem/mainInfoItem';

class ItemPage extends Component {
  constructor() {
    super();
    this.state = {
      addToCartNum: 1,
    };
  }

  componentDidMount() {
    const { getItemInfo } = this.props;
    getItemInfo(2);
  }

  changeCartNum = ({ target }) => {
    this.setState({ addToCartNum: target.value });
  }

  addToCartItemPage = (item) => {
    const { addToCart } = this.props;
    const { addToCartNum } = this.state;
    addToCart(item, addToCartNum);
  }

  render() {
    const { itemInfo } = this.props;
    const { addToCartNum } = this.state;
    return (
      <div>
        <HeaderItem />
        <MainInfoItem
          itemInfo={itemInfo}
          addToCartNum={addToCartNum}
          changeCartNum={this.changeCartNum}
          addToCartItemPage={this.addToCartItemPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ itemInfo: state.ItemInfoReducer.itemInfo });

export default connect(mapStateToProps, actions)(ItemPage);
