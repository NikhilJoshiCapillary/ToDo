import React from 'react'
import './App.css';
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Todos from './Todos';


function Navbar() {
  return (
    <>
    <h2 className='head-1'><center>Zen-Task Management App</center></h2>
    
    <div className="nav">
        <ul className='navigation-bar'>
        <li><NavLink to = "/"><button data-testid="home-btn" className='nav-btn'>Home</button></NavLink></li>
            <li><NavLink to = "/about"><button data-testid="about-btn" className='nav-btn'>About</button></NavLink></li>
            <li><NavLink to = "/contact"><button data-testid="contact-btn" className='nav-btn'>Contact</button></NavLink></li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar