import React from "react";
import "./BookCard.css";
import img1 from "../../../assets/imgs/BookCard/1.jpg";
const BookCard = () => {
  return (
    <div className="bookcard">
      <div className="book_image_cover">
        <img src={img1} alt="" />
      </div>
      <h4>Diqqat</h4>
      <h3>
        <font>Muallif:</font> Kell Nyuport
      </h3>
      <h3>
        <font>Kutubxona</font> Alisher Navoiy
      </h3>
      <h3>
        <font>Janr:</font> Badiiy
      </h3>
      <h3>
        <font>Mavjud nusxalar:</font> 50
      </h3>
      <div className="book_card_icons">
        <span>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </span>
        <i class="fa-regular fa-bookmark"></i>
      </div>
      <div className="bookcard_button">
        <button>Ko`proq</button>
      </div>
    </div>
  );
};

export default BookCard;
