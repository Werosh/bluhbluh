import React from 'react'
import Home from './Home'
import Background from './Background'
import Description from './Description'
import Members from './Members'
import Techs from './Techs'
import Project from './Project'
import ContactUs from './ContactUs'
import Testimonial from './Testimonial'
import ScrollBar from './ScrollBar'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <div> <Navbar/>
        <ScrollBar/>
       
        <Background/>
        <Home/>
        <Description/>
        <Members/>
        <Techs/>
        <Project/>
        <Testimonial/>
        <ContactUs/>
        <Footer/>
      </div>

      
    </div>
  )
}

export default App
