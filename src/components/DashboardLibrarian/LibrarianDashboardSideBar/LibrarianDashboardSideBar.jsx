import React from "react";
import "./LibrarianDashboardSideBar.css";
import { Link, NavLink } from "react-router-dom";
const LibrarianDashboardSideBar = () => {
  return (
    <div className="librarian_dashboard_sidebar">
      <ul>
        <li>
          <NavLink to={'/kutubxonachi/kutubxona'} className="sidebar_link"><i class="fa-solid fa-landmark"></i> Kutubxona</NavLink>
        </li>
        <li>
          <NavLink to={'/kutubxonachi/kitobxonlar'} className="sidebar_link"><i class="fa-solid fa-book-open-reader"></i> Kitobxonlar</NavLink>
        </li>
        <li>
          <NavLink to={'/kutubxonachi/kitoblar'} className="sidebar_link"><i class="fa-solid fa-book"></i> Kitoblar</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LibrarianDashboardSideBar;
