import React from "react";
import LibrarianDashboardNavbar from "../LibrarianDashboardNavbar/LibrarianDashboardNavbar";
import LibrarianDashboardSideBar from "../LibrarianDashboardSideBar/LibrarianDashboardSideBar";
import { useState } from "react";
import { useEffect } from "react";
import "./LibrarianDashboard.css";
import LibrarianDashboardLibraryPage from "../LibrarianDashboardLibraryPage/LibrarianDashboardLibraryPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LibrarianDashboardReadersPage from "../LibrarianDashboardReadersPage/LibrarianDashboardReadersPage";
import LibrarianDashboardAddReader from "../LibrarianDashboardAddReader/LibrarianDashboardAddReader";
const LibrarianDashboard = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      const monthNamesUzbek = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr",
      ];

      const weekdayNamesUzbek = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
      ];

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "Asia/Tashkent",
      };

      const formattedDate = `${
        monthNamesUzbek[now.getMonth()]
      } ${now.getDate()}, ${now.getFullYear()}, ${
        weekdayNamesUzbek[now.getDay()]
      }, ${now.getHours()}:${now.getMinutes()}`;

      setCurrentDate(formattedDate);
    };

    updateDate(); // Initial update

    // Update every minute
    const interval = setInterval(updateDate, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="librarian_dashboard">
      <LibrarianDashboardNavbar />
      <div className="librarian_dashboard_sidebar_datalist_container">
        <LibrarianDashboardSideBar />
        <div className="librarian_dashboard_main_side">
          <h1>Assalomu alekum John</h1>
          <h5>{currentDate}</h5>
         
          <div className="library_dashboard_libray_page_change">
            <Routes>
              <Route path="/" element={<Navigate to={"/kutubxonachi/kutubxona"} />} />

              <Route
                path="/kutubxona" // This path will match /kutubxonachi/kutubxona
                element={<LibrarianDashboardLibraryPage />}
              />
              <Route
                path="/kitobxonlar" // This path will match /kutubxonachi/kutubxona
                element={<LibrarianDashboardReadersPage/>}
              />
              <Route
                path="/yangi-kitobxon" // This path will match /kutubxonachi/kutubxona
                element={<LibrarianDashboardAddReader/>}
              />
              {/* Add more nested routes for LibrarianDashboard as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
