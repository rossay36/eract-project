import React from 'react'
// import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import './Hero.css'
// import video from '../../assets/video.mp4'
import {Sidebar} from '../../components'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <video autoPlay loop muted className='hero__video'>
          {/* <source src={video} /> */}
        </video>
        <div className='hero__sidebar' >
          <Sidebar/>
        </div>
        <div className='hero__section'>
          <h1 className='hero__h1-1'>DIGITAL MARKETING AGENCY</h1>
          <h1 className='hero__h1-2'>DEVELOPING & MARKETING</h1>
          <div className='hero__p'>
           <p className='hero-p'>we help businesses of all sizes increasing revenue by making smarter<br />decisions about how they promote their businesses online.</p>
          </div>

          <div className='hero__button'>
            <p>let's work together</p>
            <BsArrowRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero