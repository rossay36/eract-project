import React from 'react'
import './Profiles.css'
import { BsArrowLeft } from 'react-icons/bs'
import lady3 from '../../assets/lady3.jpg'


const Profiles = () => {
  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__img'>
          <div className='profile__image'>
            <div className='pro-name'>
              <BsArrowLeft />
              <h2>Jane Doe's Profile</h2>
            </div>
            <div className='pro-my-img'>
              <picture>
                <img src={lady3} alt='' className='pro-img' />
              </picture>
              <h1>Jane Doe</h1>
              <p>Florist Base in Chicago</p>
            </div>
            <div className='pro-follower'>
              <div className='pro-follow'>
                <h1>264</h1>
                <p>posts</p>
              </div>
              <div className='pro-follow'>
                <h1>3,865</h1>
                <p>followers</p>
              </div>
              <div className='pro-follow'>
                <h1>456</h1>
                <p>following</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profiles