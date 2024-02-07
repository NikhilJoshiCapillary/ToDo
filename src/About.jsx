import React from 'react'
import Navbar from './Navbar'


function About() {
  return (
    <>
    <Navbar/>
    <div  data-testid="about-text">
    This is About Page, Mate!
    </div>
    </>
  )
}

export default About