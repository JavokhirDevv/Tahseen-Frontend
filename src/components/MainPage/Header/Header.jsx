import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

import logoTahseen from '../../../assets/imgs/header/logo.JPG'; // Use '.JPG' for the file extension
const Header = () => {
  return (
    <div className='header'>
            <div className="tahseen_logo">
                <Link to={"/"}><img src={logoTahseen} alt="" /></Link>
            </div>

            <div className="navbar">
                <ul>
                    <li><Link to={"/"}>Tahseen</Link></li>
                    <li><Link to={"/kitoblar"}>Kitoblar</Link></li>
                    <li><Link to={"/kutubxonalar"}>Kutubxonalar</Link></li>
                    <li><Link to={"/audio-kitoblar"}>Audio Kitoblar</Link></li>
                    <li><Link to={"/mualliflar"}>Mualliflar</Link></li>
                </ul>
            </div>

            <div className="Login">
                <button>Kirish</button>
            </div>
    </div>
  )
}

export default Header