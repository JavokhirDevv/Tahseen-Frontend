import React, { useContext } from "react";
import "./LibrarianDashboardNavbar.css";
import Tahseenlogo from "../../../assets/imgs/TahseenLogo/logo.png";
import LibrarianImage from "../../../assets/imgs/AuthorImg/mYusuf.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import api_base_url from "../../../configurations/Config";
import axios from "axios";
import { useEffect } from "react";
import { TahseenApiControl } from "../../../utils/Context";
const LibrarianDashboardNavbar = () => {
  const [librarianData, setLibrarianData] = useContext(TahseenApiControl);
  // const getToken = localStorage.getItem("token");
  
  // const GetLibrarianData = async () =>{
  //   await axios.get(api_base_url + "api/Librarian/me", {
  //     headers: {
  //       'Authorization': `Bearer ${getToken}`
  //     }
  //   })
  //     .then(response => {
  //       setLibrarianData(response.data.data);
  //     })
  //     .catch(error => {
  //       // Handle error, e.g., set an error state
  //       console.error('Error fetching librarian data:', error);
  //     });
  // } 
  // useEffect(() => {
  //   GetLibrarianData()
  // },[])

  return (
    <div className="librarian_dashboard_navbar">
      <Link to={"/bosh-sahifa"}>
        <img src={Tahseenlogo} alt="" />
      </Link>

      
      <form>
        <input type="search" placeholder="Qidirish" />
      </form>
      <button class="btn btn-outline-success" type="submit">Qidirish</button>
      

      <div className="librarian_navbar_text_cover">
        <i class="fa-regular fa-bell"></i>
        <div className="librarian_fullname">
          <h5>{librarianData.firstName + " " + librarianData.lastName}</h5>
          <p>Kutubxonachi</p>
        </div>
        <div>
          <img src={api_base_url+librarianData.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboardNavbar;
