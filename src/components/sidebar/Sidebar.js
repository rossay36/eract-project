import React,{useState} from 'react'
import './Sidebar.css'
import { data } from '../../DummyData'

const Sidebar = () => {

  const [toggel, setToggel] = useState(false);
  const handleToggle = () => setToggel(!toggel)
  return (
    <div className={toggel ? 'sidebar sidebar' : 'sidebar sidebar-NX'}>
      <div className='sidebar__container'>
        <div className='sidebar__header'>
          <div className='sidebar__logo'>
              <h1 className={toggel ? 'stripe stripe-in' : 'stripe stripe-out'}>STRIPE</h1>
          </div>
          <button className={toggel ? 'hamburger hamburger-in' : 'hamburger hamburger-out'} onClick={handleToggle}>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
          </button>
        </div>
        {data.map((data) => (
          <div  className='sidebar-list' key={data.id} >
            <span className={toggel ? 'sidebar-icon sidebar-icon ' : 'sidebar-icon sidebar-icon-NX'}>{data.icon }</span>
            {toggel && <span className='sidebar-text'>{ data.text}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar