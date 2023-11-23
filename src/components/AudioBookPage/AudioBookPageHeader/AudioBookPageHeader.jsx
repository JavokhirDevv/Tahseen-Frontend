// AudioBookPageHeader.js

import React from "react";
import "./AudioBookPageHeader.css";
import api_base_url from "../../../configurations/Config";

const AudioBookPageHeader = ({ audioBook }) => {
  const { author, narrator } = audioBook;
  return (
    <div className="audio_book_header">
      <div className="audio_book_header_img">
        <img src={api_base_url+audioBook.image} alt={audioBook.title} />
      </div>

      <div className="audio_book_header_content">
        <h1 className="audio_book_header_name">{audioBook.title}</h1>
        <div className="audio_book_header_icons_cover">
          <span>
            {[...Array(5)].map((_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}
            <strong>Rating: </strong>
            {audioBook.rating}
          </span>

          <h5>
            <i className="fa-regular fa-comment"></i>{" "}
            <strong>{audioBook.reviews} Reviews</strong>
          </h5>
        </div>

        <p className="content">{audioBook.content}</p>

        <hr className="audio_book_header_hr" />

        <div className="audio_book_header_bottom_side">
          <div className="audio_book_header_title_img_name">
            <img
              src={author && api_base_url + author.authorImage}
              alt={author && author.firstName}
            />
            <div className="audio_book_header_title">
              <h6>Muallif</h6>
              <h4>{author && `${author.firstName} ${author.lastName}`}</h4>
            </div>
          </div>

          <div className="audio_book_header_title_img_name">
            <img
              src={narrator && api_base_url + narrator.image}
              alt={narrator && narrator.firstName}
            />
            <div className="audio_book_header_title">
              <h6>Suxandon</h6>
              <h4>
                {narrator && `${narrator.firstName} ${narrator.lastName}`}
              </h4>
            </div>
          </div>

          <button className="audio_book_save">Saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default AudioBookPageHeader;
