import React, { useEffect, useState } from "react";
import "./BookPageHeader.css";
import api_base_url from "../../../configurations/Config";
const BookPageHeader = ({ bookHeader }) => {
  if (!bookHeader) {
    return null; // or some loading indicator
  }

  const { bookImage, Title, rating, author, publisher } = bookHeader;
  return (
    <div className="bookpage_header">
      <div className="bookpage_header_img">
        <img src={`${api_base_url + bookHeader.bookImage}`} alt="" />
      </div>

      <div className="book_header_content">
        <h1 className="book_header_name">{bookHeader.Title}</h1>
        <div className="book_header_icons_cover">
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

            <strong>{bookHeader.rating}</strong>
          </span>

          <h5>
            <i className="fa-regular fa-comment"></i>{" "}
            <strong>{bookHeader.rating}</strong>
          </h5>
        </div>

        <p>
          {bookHeader.content}
        </p>
        <br />
        <h4 className="book_header_available">
          {/* Do Logic here for available or not */}
          <i className="fa-regular fa-circle-check"></i> Mavjud
        </h4>
        <hr className="book_header_hr" />

        <div className="book_header_bottom_side">
          <div className="book_header_title_img_name">
            {author && (
              <img
                src={`${api_base_url}${author.authorImage}`}
              />
            )}

            <div className="book_header_title">
              <h6>Muallif</h6>
              <h4>MuhammadYusuf</h4>
            </div>
          </div>

          <div className="book_header_title_img_name">
            {publisher && <img src={`${api_base_url}${publisher.image}`} />}
            <div className="book_header_title">
              <h6>Nashriyot</h6>
              <h4>{publisher && publisher.name}</h4>
            </div>
          </div>

          <button className="bookpage_save">Saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default BookPageHeader;
