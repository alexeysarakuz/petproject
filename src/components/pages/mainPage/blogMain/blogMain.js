import React from "react"

import './blogMain.sass'

import BlogList from './blogList/blogList.js'

const BlogMain = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="main-title light">Our blog</h2>
        <p className="main-descr light">We Believe It’s Well Worth Paying That Extra For Quality And Service</p>
        <hr className="main-line light" />
        <BlogList />
      </div>
    </section>
  )
}

export default BlogMain
