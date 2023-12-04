import React, { useState } from "react";
import "./Authors.css";
import axios from "axios";
import { useEffect } from "react";
import AuthorCard from "../GeneralComponents/AuthorCard/AuthorCard";
import api_base_url from "../../configurations/Config";
const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const GetAllAuthors = async () => {
    axios
      .get(`${api_base_url}api/authors`)
      .then((a) => setAuthors(a.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllAuthors();
  }, []);

  console.log(authors);
  return (
    <div className="authors">
      <h1>Mualliflar</h1>
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

      <div className="author_card_cover">
        {authors.map((authorData) => (
          <AuthorCard key={authorData.id} authorData={authorData} />
        ))}
      </div>
    </div>
  );
};

export default Authors;