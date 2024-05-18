import React from 'react'
import './About.css'
import { user } from '../../DummyData'

const Abouts = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__items'>
          <h1>Web Designers & Web Developers</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          </span>
        </div>
        <div className='about__column'>
          {user.map((user) => (
            <div className='about-box' key={user.id}>
              <img src={user.imgUrl} alt='' />
              <h1>{user.name}</h1>
              <p>{user.title}</p>
              <p>{user.desc}</p>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Abouts