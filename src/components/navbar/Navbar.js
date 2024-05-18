import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import './Navbar.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {SiSteamdb } from 'react-icons/si'
import lady8 from '../../assets/lady8.jpg'

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
      <div className='navbar__container'>

        <div className='navbar__logo'>
          <h1 className='nav-h1'>STRIPE</h1>
          <SiSteamdb className='nav-log-icon' />
        </div>

        <ul className={click ? 'nav-list active' : 'nav-list'}>

            <li><Tippy className='nav-tippy' content='hello am home click me'><Link to='/'>Home</Link></Tippy></li>


            <li><Tippy className='nav-tippy' content='hello am about click me'><Link to='/about'>About</Link></Tippy></li>


           <li><Tippy className='nav-tippy' content='hello am contact click me'><Link to='/contact'>Contact</Link></Tippy></li>


            <li><Tippy className='nav-tippy' content='hello am gallery click me'><Link to='/gallery'>Gallery</Link></Tippy></li>


            <li><Tippy className='nav-tippy' content='hello am profile click me'><Link to='/profile'>Profile</Link></Tippy></li>


            <li><Tippy className='nav-tippy' content='hello click me to out our teams'><Link to='/team'>Team</Link></Tippy></li>


            <li><Tippy className='nav-tippy' content='click here to see my testimonials'><Link to='/testimonial'>Testimonial</Link></Tippy></li>

          <Link to='/profile' className='navbar__button' >
            <Tippy content='my proflie'>
              <img src={lady8} alt='' className='nav-img' />
            </Tippy>
        </Link>
        </ul>
        <button className='navbar__hamburger' onClick={handleClick} >
          {click ? (<AiOutlineClose className='nav-icons'/>) : (<AiOutlineMenu className='nav-icons' />)}
        </button>
      </div>
    </div>
  )
}

export default Navbar