import React from "react";
import "./LibrarianDashboardLibraryPage.css";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../../../assets/imgs/LibraryCard/1.png";
const LibrarianDashboardLibraryPage = () => {
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
    <div className="librarian_dashboard_library_page">
      <div className="librarian_dashboard_library_page_statistics_cards_cover">
        <div className="librarian_dashboard_library_page_statistics_card">
          <div>
            <h2>1222</h2>
            <h4>Total students</h4>
          </div>
          <i class="fa-solid fa-users"></i>
        </div>

        <div className="librarian_dashboard_library_page_statistics_card">
          <div>
            <h2>740</h2>
            <h4>Borrowed books</h4>
          </div>
          <i class="fa-solid fa-users"></i>
        </div>

        <div className="librarian_dashboard_library_page_statistics_card">
          <div>
            <h2>1222</h2>
            <h4>Total students</h4>
          </div>
          <i class="fa-solid fa-users"></i>
        </div>

        <div className="librarian_dashboard_library_page_statistics_card">
          <div>
            <h2>1222</h2>
            <h4>Total students</h4>
          </div>
          <i class="fa-solid fa-users"></i>
        </div>
      </div>
      <div className="library_dashboard_libray_image_cover">
        <img className="library_dashboard_libray_image" src={img1} alt="" />
      </div>
    </div>
  );
};

export default LibrarianDashboardLibraryPage;
