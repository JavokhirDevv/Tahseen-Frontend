import React, { useEffect, useState } from "react";
import "./AudioBooksBar.css";
import axios from "axios";
import api_base_url from "../../../configurations/Config";
const AudioBooksBar = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios.get(`${api_base_url}api/authors`)
      .then(a => setAuthors(a.data.data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="audiobooksbar">
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

      <div className="audiobooksbar_filter">
        <select className="audiobooksbar_filter-select">
          <option value="" disabled selected hidden>
            Til
          </option>
          <option value="non-fiction">O`zbek</option>
          <option value="non-fiction">Rus</option>
          <option value="non-fiction">Ingliz</option>
        </select>

        <select className="audiobooksbar_filter-select">
          <option value="" disabled selected hidden>
            Mualliflar
          </option>
          {
            authors.map((value) => {
              return (
                <option value={`${value.firstName + " " + value.lastName}`} key={value.id}>{value.firstName + " " + value.lastName}</option>
              )
            })
          }
        </select>

        <select className="audiobooksbar_filter-select">
          <option value="" disabled selected hidden>
            Suxandonlar
          </option>
          {/* Map */}
          {/* <option value="non-fiction">Arab Tili</option> */}
        </select>
      </div>
    </div>
  );
};

export default AudioBooksBar;
