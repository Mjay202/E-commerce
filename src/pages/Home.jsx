import React from 'react'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Advert/>
        <NavBar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
    </div>
  )
}

export default Home