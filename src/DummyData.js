import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'
import {  AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import {FcAbout, FcContacts, FcGallery } from 'react-icons/fc'
import {FaUserGraduate } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import man1 from './assets/man1.jpg'
import man2 from './assets/man2.jpg'
import lady3 from './assets/lady3.jpg'
import lady6 from './assets/lady6.jpg'


export const data = [
    {
        id: 1,
        icon: <Tippy content='home'><Link to='/'><AiOutlineHome /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello am home click me'><li><Link to='/'>Home</Link></li></Tippy>,
    },

    {
         id: 2,
        icon: <Tippy content='about'><Link to='/about'><FcAbout /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello am about click me'><li><Link to='/about'>About</Link></li></Tippy>,
    },
    {
         id: 3,
        icon: <Tippy content='contact'><Link to='/contact'><FcContacts /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello contact us on email address'><li><Link to='/contact'>Contact</Link></li></Tippy>,
    },
    {
         id: 4,
        icon: <Tippy content='gallery'><Link to='/gallery'><FcGallery /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello am gallery click me'><li><Link to='/gallery'>Gallery</Link></li></Tippy>,
    },
    {
         id: 5,
        icon: <Tippy content='profile'><Link to='/profile'><CgProfile /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello click me to check out my profile'><li><Link to='/profile'>Profile</Link></li></Tippy>,
    },
    {
         id: 6,
        icon: <Tippy content='team'><Link to='/team'><AiOutlineTeam /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello please click me to meet our team'><li><Link to='/team'>Team</Link></li></Tippy>,
    },
    {
         id: 7,
        icon: <Tippy content='testimonial'><Link to='/testimonial'><FaUserGraduate /></Link></Tippy>,
        text: <Tippy className='nav-tippy' content='hello am testimonial click me and check me out'><li><Link to='/testimonial'>Testimonial</Link></li></Tippy>,
    },
]

export const user = [
    {
        id: 1,
        imgUrl: man1,
        name: 'Lee jensen',
        title: 'Technical Director',
        desc: 'Bountiful, UT',
    },
    {
        id: 2,
        imgUrl: lady3,
        name: 'Rachel Gollay',
        title: 'Operation Director',
        desc: 'fort worth, TX',
    },
    {
        id: 3,
        imgUrl: lady6,
        name: 'Lucie Bodie',
        title: 'Support Director',
        desc: 'New Orleans, LA',
    },
    {
        id: 4,
        imgUrl: man2,
        name: 'Vivek Venkatraman',
        title: 'Design Director',
        desc: 'Houston, TX',
    },

]

