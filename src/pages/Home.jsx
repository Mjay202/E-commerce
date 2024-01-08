import React from 'react'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
        <Advert/>
        <NavBar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Home