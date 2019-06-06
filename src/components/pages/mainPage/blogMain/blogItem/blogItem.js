import React from 'react';
import PropTypes from 'prop-types';

import './blogItem.sass';

import { Link } from 'react-router-dom';

const BlogItem = ({
  title, date, content, image,
}) => {
  const imageSource = `/images/main/blog/${image}`;
  return (
    <div className="blog__item">
      <div className="blog__image">
        <img src={imageSource} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
      <Link to="/">Read More</Link>
    </div>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BlogItem;
