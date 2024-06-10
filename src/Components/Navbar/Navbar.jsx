/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import darkmode_icon from '../../assets/dark_mode.png'
import { Link } from 'react-router-dom'
import { darkmode } from '../../data'

const Navbar = ({setSideBar}) => {

    // const [darkmode, setdarkMode] = useState(false)
    return (
        <nav className={darkmode ? 'nav-dark flex-div':'flex-div'}>
            <div className='nav-left flex-div'>
                <img className='menu-icon'src={menu_icon} alt="" />
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>
            <div className='nav-middle flex-div'>
                <div className="search-box flex div border-[1px] border-solid border-[#ccc] mr-[15px] px-2 py-3 rounded-3xl">
                    <input className='w-[400px] border-0 outline-0 bg-transparent' type="text" placeholder='Search' />
                    <img className='w-[20px] h-[20px]' src={search_icon} alt="" />
                </div>
            </div>
            <div className='nav-right flex-div'>
                <button><img src={darkmode_icon} alt="" /></button>
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className='user-icon w-[35px] rounded-[50%]' alt="" />
            </div>
        </nav>
    )
}

export default Navbar