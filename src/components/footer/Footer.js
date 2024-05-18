import React from 'react'
import './Footer.css'
import { BsSearch } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaYoutubeSquare,  } from 'react-icons/fa'
import {  BsWifi } from 'react-icons/bs'


const youtube = 'https://www.youtube.com/channel/UCTFuNYrqAcsmSjgqYMvxOqw'
const facebook = 'https://web.facebook.com/?_rdc=1&_rdr'
const twitter = 'https://twitter.com/free?lang=en'
const hotspot = 'https://www.free-hotspot.com/'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__second'>
          <form className='footer__form'>
            <div className='footer__input'>
              <input type='name' placeholder='Search for blog...' />
              <BsSearch className='form-icon' />
            </div>

            <h2>Pick a Language</h2>

            <select className='footer-select' name='year'style={{color:'#fff', background:'#000'}}>
              <option value='language' >Language</option>
              <option value='English'>English</option>
              <option value='Spain'>Spain</option>
            </select>

            <h2>Follow Us</h2>
            <ul className='footer__icon'>
              <li><a rel="nofollow" target='_blank' href={facebook} className='footer-icon' ><FaFacebookF /></a></li>
              <li><a rel="nofollow" href={twitter} target='_blank' className='footer-icon'><FaTwitter /></a></li>
              <li><a rel="nofollow" href={youtube} target='_blank' className='footer-icon'><FaYoutubeSquare /></a></li>
              <li><a rel="nofollow" href={hotspot} target='_blank' className='footer-icon'><BsWifi /></a></li>
            </ul>
          </form>
        </div>
        <div className='footer__second'>
          <h1>Main Tools</h1>
          <p>Site Explorer</p>
          <p> Keyword Explorer</p>
          <p>Content Explorer</p>
          <p>Site Audit</p>
          <p>Rank Tracker</p>
        </div>
        <div className='footer__second'>
          <h1>Other Tools</h1>
          <p>BlackLink Checker</p>
          <p>Website Authority Checker</p>
          <p>Keyword Rank Checker</p>
          <p>Broken Link Checker</p>
          <p>SERP Checker</p>
        </div>
        <div className='footer__second'>
          <h1>Best of the Ahrefs blog</h1>
          <p>SEO Basics (5 Steps)</p>
          <p>Keyword research Guide</p>
          <p>Complete Link Building Guide</p>
          <p>On-Page SEO (Actionable Guide)</p>
          <p>Long-Tail Keyword Guide</p>
          <p>75 Actionable SEO tips</p>
          <p>blogger Outreach Guide</p>
        </div>
      </div>
    </div>
  )
}

export default Footer