import React from 'react'
import Header from '../Header.jsx'
import HeroSlider from '../HeroSlider.jsx'
import WhySec from '../WhySec.jsx'
import Arrival from '../Arrival.jsx'
import Products from '../Products.jsx'
import Subscribe from '../Subscribe.jsx'
import TestimonialSlider from '../TestimonialSlider.jsx'
import Footer from '../Footer.jsx'
import About from './About.jsx'
import Testimonial from './Testimonial.jsx'

import Bloglist from './Bloglist.jsx'
import Contact from './Contact.jsx'



import { Outlet, useLocation } from 'react-router-dom';
import columns from '../Context/Context.js'
import SignIn from './SignIn.jsx'
import Signup from './Signup.jsx'


const HomePage = () => {
  const location = useLocation();
  const col = { home: "lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2", products: "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2",loc:location.pathname }

  return (
    <columns.Provider value={col}>
      <>
        <Header />

        {(location.pathname == '/') ? <HeroSlider /> : ""}

        {(location.pathname == '/about') ? <About /> : ""}

        {(location.pathname == '/blogs') ? <Bloglist /> : ""}

        {(location.pathname == '/contact') ? <Contact /> : ""}

        {(location.pathname == '/') || (location.pathname == '/about') || (location.pathname == '/blogs') ? <WhySec /> : ""}

        {(location.pathname == '/') || (location.pathname == '/about') || (location.pathname == '/contact') ? <Arrival /> : ""}

        {(location.pathname == '/') ? <Products /> : ""}
        {(location.pathname == '/products') ? <Products /> : ""}

        {(location.pathname == '/') ? <Subscribe /> : ""}

        {(location.pathname == '/testimonials') ? <Testimonial /> : ""}

        {(location.pathname == '/testimonials') || (location.pathname == '/') ? <TestimonialSlider /> : ""}

        {(location.pathname == '/signup') ? <Signup /> : ""}
        {(location.pathname == '/signin') ? <SignIn/> : ""}
        
       <Outlet/>

        <Footer />

      </>
    </columns.Provider>
  )
}

export default HomePage