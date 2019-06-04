import React from "react"

import {connect} from "react-redux"

import TrendingItem from "../trendingItem/trendingItem"

import * as actions from "../../../../../redux/actions/trending/trendingActions.js"

class TrendingList extends React.PureComponent{
  componentDidMount(){
    this.props.getTrendingItems();
  }

  render(){
    const { trendingData } = this.props;
    return (
      <div className="trending__row">
        {
          trendingData.map((item) => {
            return(<TrendingItem key={item.id} data={item} />)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({ trendingData: state.trending.trendingData })
export default connect(mapStateToProps , actions)(TrendingList)
