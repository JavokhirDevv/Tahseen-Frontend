import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";
// import img1 from "../../../assets/imgs/BookCard/1.jpg";
const BookCard = ({ value }) => {
  return (
    <div className="bookcard">
      <div className="book_image_cover">
        <img src={value.BookImage} alt="" />
      </div>
      <h4>{value.Title}</h4>
      <h3>
        <font>Muallif:</font> {value.AuthorId}
      </h3>
      <h3>
        <font>Kutubxona</font> {value.LibraryId}
      </h3>
      <h3>
        <font>Janr:</font> {value.GenreId}
      </h3>
      <h3>
        <font>Mavjud nusxalar:</font> {value.AvailableCopies}
      </h3>
      <div className="book_card_icons">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
        <i className="fa-regular fa-bookmark"></i>
      </div>
      <div className="bookcard_button">
        <Link to={`/kitob/${value.id}`} className="bookcard_button_cover">
          <button>Ko`proq</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
