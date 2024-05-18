import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Contact, About, Profile,Gallery, Team, Testimonial, Homes} from './pages'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homes/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/testimonial' element={<Testimonial/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App