import React, { useEffect, useState } from "react";
import "./Libraries.css";
import LibraryCard from "../GeneralComponents/LibraryCard/LibraryCard";
import axios from "axios";
import api_base_url from "../../configurations/Config";
const Libraries = () => {
  const [libraries, setLibraries] = useState([])
  var GetAllLibraries = async () => {
    await axios.get(`${api_base_url}api/LibraryBranch`)
      .then(l => setLibraries(l.data.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    GetAllLibraries();
  }, [])
  console.log(libraries);
  return (
    <div className="library">
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


      <div className="library_filter">
        <h1>O`zbekistondagi ommaviy kutubxonalar</h1>
        <select className="library_filter-select">
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
      </div>

      <div className="library_cards_cover">
        {
          libraries.map(LibraryData => {
            return (
              <LibraryCard LibraryData={LibraryData} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Libraries;