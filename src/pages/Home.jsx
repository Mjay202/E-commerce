import React from 'react'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Advert/>
        <NavBar/>
        <Slider/>
    </div>
  )
}

export default Home