import React from 'react'

import { Link } from 'react-router-dom'

import './postersMain.sass'

const PostersMain = () => {
  return (
    <section className="posters-section">
      <div className="posters__col posters__col1">
        <Link to="/">
          <h2>Cozy Modern Furniture</h2>
          <p>Eco-friendly, made of natural materials, furniture perfectly suiting any design and purposes.</p>
        </Link>
      </div>
      <div className="posters__col posters__col2">
        <Link to="/">
          <h2>Wooden Room Sets</h2>
          <p>Stunning wooden furniture will greatly fit Loft style premises and classical interiors.</p>
        </Link>
      </div>
      <div className="posters__col posters__col3">
        <Link to="/">
          <h2>Living Room Furniture</h2>
          <p>New collection of Living room Furniture made of natural materials comes in various colors.</p>
        </Link>
      </div>
      <div className="posters__col posters__col4">
        <Link to="/">
          <h2>Living Room Furniture</h2>
          <p>New collection of Living room Furniture made of natural materials comes in various colors.</p>
        </Link>
      </div>
    </section>
  )
}

export default PostersMain
