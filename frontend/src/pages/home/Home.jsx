import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import Reviews from './Reviews'

import News from './News'
const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recommended />
      <Reviews />
      <News />
    </div>
  )
}

export default Home
