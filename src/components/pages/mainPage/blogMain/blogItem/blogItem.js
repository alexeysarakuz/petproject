import React from 'react'
import PropTypes from 'prop-types'

import './blogItem.sass'

const BlogItem = ({title, date, content, image}) => {
  const imageSource = '/images/main/blog/' + image;
  return (
    <div className="blog__item">
      <div className="blog__image">
        <img src={imageSource} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
      <a href="">Read More</a>
    </div>
  )
}

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default BlogItem
