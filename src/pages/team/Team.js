import React from 'react'
import Teams from '../../components/teams/Teams'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Team = () => {
  return (
    <div className='team'>
      <Navbar />
      <Teams />
      <Footer />
    </div>
  )
}

export default Team