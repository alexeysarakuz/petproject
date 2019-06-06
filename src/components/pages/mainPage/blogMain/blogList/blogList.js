import React from 'react';
import { connect } from 'react-redux';

import BlogItem from '../blogItem/blogItem';

import * as actions from '../../../../../redux/actions/blog/blogActions';

import './blogList.sass';

class BlogList extends React.Component {
  componentDidMount() {
    const { getBlogPosts } = this.props;
    getBlogPosts();
  }

  render() {
    const { blogPosts } = this.props;
    return (
      <div className="blog__list">
        {blogPosts.map(item => (
          <BlogItem
            title={item.title}
            date={item.date}
            content={item.content}
            key={item.id}
            image={item.image}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ blogPosts: state.BlogReducer.blogPosts });

export default connect(mapStateToProps, actions)(BlogList);
