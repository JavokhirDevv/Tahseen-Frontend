import React from 'react'
import "./Header.css"
import logoTahseen from '../../../assets/imgs/header/logo.JPG'; // Use '.JPG' for the file extension
const Header = () => {
  return (
    <div className='header'>
            <div className="tahseen_logo">
                <img src={logoTahseen} alt="" />
            </div>

            <div className="navbar">
                <ul>
                    <li><a href="/">Tahseen</a></li>
                    <li><a href="/">Kitoblar</a></li>
                    <li><a href="/">Kutubxonalar</a></li>
                    <li><a href="/">Audio Kitoblar</a></li>
                    <li><a href="/">Mualliflar</a></li>
                </ul>
            </div>

            <div className="Login">
                <button>Kirish</button>
            </div>
    </div>
  )
}

export default Header