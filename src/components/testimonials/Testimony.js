import React from 'react'
import './Testimony.css'
import lady7 from '../../assets/lady7.jpg'

const Testimony = () => {
  return (
    <div className='testimony'>
      <div className='testimony__container'>

        <div className='testimony__column'>
           <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            </p>
           <p>
              It is a long established fact that a reader will
            </p>
          <div className='testimony__img'>
            <img src={lady7} alt='' />
          </div>
        </div>
        <div className='testimony__column'>
           <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            </p>
           <p>
              It is a long established fact that a reader will
            </p>
          <div className='testimony__img'>
            <img src={lady7} alt='' />
          </div>
        </div>
        <div className='testimony__column'>
           <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            </p>
           <p>
              It is a long established fact that a reader will
            </p>
          <div className='testimony__img'>
            <img src={lady7} alt='' />
          </div>
        </div>
        <div className='testimony__column'>
           <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            </p>
           <p>
              It is a long established fact that a reader will
            </p>
          <div className='testimony__img'>
            <img src={lady7} alt='' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimony