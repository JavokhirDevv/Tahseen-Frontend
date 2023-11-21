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
        <img src={`${bookHeader.bookImage}`} alt="" />
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          consectetur. Nesciunt, impedit corporis? Iste autem temporibus
          aliquam, non saepe corporis voluptatibus eos, perspiciatis dicta dolor
          incidunt esse cum, accusamus placeat? Ex corrupti eos rem, minima
          assumenda eius. Cupiditate eveniet necessitatibus quaerat, dolorem
          corporis assumenda excepturi deleniti animi voluptatem nisi omnis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero
          adipisci expedita natus voluptate ipsum autem provident, rem hic
          deleniti amet quasi enim ipsam, tempore at atque nam quo qui cumque
          odio praesentium facilis nulla esse ducimus! Doloribus, exercitationem
          cumque rem mollitia labore quas eaque! Eligendi nihil dolores dolor
          doloremque pariatur soluta earum, beatae sed quibusdam quas?
          Aspernatur, rem corporis.
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
                src={`${api_base_url}/${author.authorImage}`}
                alt={`Author ${author.firstName} ${author.lastName}`}
              />
            )}

            <div className="book_header_title">
              <h6>Muallif</h6>
              <h4>MuhammadYusuf</h4>
            </div>
          </div>

          <div className="book_header_title_img_name">
            {publisher && (<img
              src={`${api_base_url}/${publisher.image}`}
              alt=""
            />)}
            <div className="book_header_title">
              <h6>Nashiriyot</h6>
              <h4>Hilol kitob do`koni</h4>
            </div>
          </div>

          <button className="bookpage_save">Saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default BookPageHeader;
