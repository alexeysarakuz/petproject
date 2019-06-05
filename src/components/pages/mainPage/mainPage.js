import React from "react"

import HeaderMain from "./headerMain/headerMain.js"
import TrendingMain from "./trendingMain/trendingMain.js"
import PostersMain from "./postersMain/postersMain.js"
import ProductsMain from "./productsMain/productsMain.js"
import BlogMain from "./blogMain/blogMain.js"
import PartnersMain from "./partnersMain/partnersMain.js"

const MainPage = () => {
  return (
    <>
      <HeaderMain />
      <TrendingMain />
      <PostersMain />
      <ProductsMain />
      <BlogMain />
    </>
  )
}

export default MainPage
