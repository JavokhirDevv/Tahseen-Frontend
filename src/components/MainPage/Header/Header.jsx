import React from "react";
import "./Header.css";
import { Link, NavLink, Outlet } from "react-router-dom";

import logoTahseen from "../../../assets/imgs/header/logo.JPG"; // Use '.JPG' for the file extension
import logo from '../../../assets/imgs/header/Tahseen logo png quality high.png'
import Footer from "../../GeneralComponents/Footer/Footer";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="tahseen_logo">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <div className="navbar">
          <ul>
            <li>
              <NavLink to={"/bosh-sahifa"}>Bosh sahifa</NavLink>
            </li>
            <li>
              <NavLink to={"/kitoblar"}>Kitoblar</NavLink>
            </li>
            <li>
              <NavLink to={"/kutubxonalar"}>Kutubxonalar</NavLink>
            </li>
            <li>
              <NavLink to={"/audio-kitoblar"}>Audio Kitoblar</NavLink>
            </li>
            <li>
              <NavLink to={"/mualliflar"}>Mualliflar</NavLink>
            </li>
          </ul>
        </div>

        <div className="Login">
          <Link to={"/login"}><button>Kirish</button></Link>
        </div>
      </div>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Header;
