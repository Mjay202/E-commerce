import React from 'react'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Advert/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home