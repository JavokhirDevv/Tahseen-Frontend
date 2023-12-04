import React from "react";
import "./BookBar.css";
const BookBar = () => {
  return (
    <div className="bookbar">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          id=""
        />
        <button
          type="button"
          className="search-button"
        >
          Search
        </button>
      </div>


      <div className="bookbar_filter">
        <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Viloyat
          </option>
          <option value="non-fiction">Andijon</option>
          <option value="non-fiction">Buxoro</option>
          <option value="non-fiction">Toshkent</option>
          <option value="non-fiction">Samarqand</option>
          <option value="non-fiction">Qashqadaryo</option>
          <option value="non-fiction">Farg`ona</option>
          <option value="non-fiction">Namangan</option>
          <option value="non-fiction">Xorazm</option>
          <option value="non-fiction">Jizzax</option>
        </select>

        <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Kutubxonalar
          </option>
          <option value="non-fiction">Alisher Navoiy</option>
          <option value="non-fiction">Milliy kutubxona</option>
          <option value="non-fiction">
            Zahiriddin Muhammad Bobur kutubxona
          </option>
        </select>

        <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Til
          </option>
          <option value="non-fiction">Arab Tili</option>
          <option value="fiction">O`zbek tili</option>
          <option value="mystery">Ingliz tili</option>
          <option value="sci-fi">Rus tili</option>
        </select>
      </div>
    </div>
  );
};

export default BookBar;