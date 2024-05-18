import React, { useRef } from 'react'
import './Galleries.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import lady8 from '../../assets/lady8.jpg'

const Galleries = () => {

  const scrollRef = useRef(null)
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }

  }

  return (
    <div className='gall'>
      <div className='gall__container'>
        <div className='gall__title'>
          <h1>Developers</h1>
          <h1>&</h1>
          <h1>Designers</h1>
          <p>making it look like readable English. Many desktop publishing</p>
          <button className='gall__buttun'>View more</button>
        </div>

        <div className='gall__img'>
          <div className='gall__img-content' ref={scrollRef} >
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />
            <img src={lady8} alt='' />

          </div>

          <div className='gall__button' >
            <BsArrowLeftShort className='gall-btn' onClick={() => scroll('left')} />
            <BsArrowRightShort className='gall-btn' onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galleries