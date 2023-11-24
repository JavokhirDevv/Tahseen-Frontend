import React from "react";
import "./LibrarianDashboardNavbar.css";
import Tahseenlogo from "../../../assets/imgs/TahseenLogo/logo.JPG";
import LibrarianImage from "../../../assets/imgs/AuthorImg/mYusuf.jpg";
const LibrarianDashboardNavbar = () => {
  return (
    <div className="librarian_dashboard_navbar">
      <img src={Tahseenlogo} alt="" />

      <form>
        <input type="search" placeholder="Qidirish" />
      </form>

      <div className="librarian_navbar_text_cover">
        <i class="fa-regular fa-bell"></i>
        <div className="librarian_fullname">
          <h5>Abdukarim Mirzayev</h5>
          <p>Kutubxonachi</p>
        </div>
        <div>
          <img src={LibrarianImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboardNavbar;
