import React from 'react'
import './Contact.css'

const Contacts = () => {
  return (
    <div className='contact'>
      <form className='contact__form'>

        <h1>Contact Us</h1>

        <div className='contact__form-input-1'>

          <input type='name' placeholder='First Name *' />

          <input type='name' placeholder='Last Name *' />

          </div>
          <br/>
        <div className='contact__form-input-1'>
          <input type='email' placeholder='Email Address *' />
          <input type='name' placeholder='Phone Number *' />
          </div>

        <div className='contact__select'>
          <p>what's the property is being sold? *</p>
          <select name='name'>
            <option value='Please from the option'>please from the option</option>
            <option value='Private Building'>Private Building</option>
            <option value='Public Building'>Public Building</option>
          </select>
        </div>
        <div className='contact__select'>
          <p>in Contact *</p>
          <p>Have you sign an agreement with the buyer? *</p>
          <select name='text'>
            <option value='please select yes / no'>please select yes / no</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
        <div className='contact__select'>
          <p>How do you identify your self *</p>
          <select name='text'>
            <option value='please choose from the option'>please choose from the option</option>
            <option value='International Real Estate Investor'>International Real Estate Investor</option>
            <option value='Local Real Estate Investor'>Local Real Estate Investor</option>
          </select>
        </div>
        <div className='contact__select'>
          <textarea className='textarea' type='text' placeholder='how may we help u' />
        </div>
      </form>
    </div>
  )
}

export default Contacts