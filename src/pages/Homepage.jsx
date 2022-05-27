import React from 'react'
import Categories from '../components/Categories'
import EmailBox from '../components/EmailBox'
import NavBar from '../components/NavBar'
import Product from '../components/Product'
import {Slider} from '../components/Slider'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
        <div>
        <NavBar/>
        <Slider/>
        <Categories/>
        <Product/>
        <EmailBox/>
        <Footer/>
        </div>
  )
}

export default Homepage