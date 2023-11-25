import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";
import api_base_url from "../../../configurations/Config";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import img1 from "../../../assets/imgs/BookCard/1.jpg";
const BookCard = ({ value }) => {
  return (
    <div className="bookcard">
      <div className="book_image_cover">
        <img src={api_base_url + value.bookImage} alt="" />
      </div>
      <h4>{value.title}</h4>
      <h3>
        <font>Muallif:</font> {value.author.firstName}
      </h3>
      <h3>
        <font>Kutubxona</font> {value.libraryBranch.name}
      </h3>
      <h3>
        <font>Janr:</font> {value.genre.name}
      </h3>
      <h3>
        <font>Mavjud nusxalar:</font> {value.availableCopies}
      </h3>
      <div className="book_card_icons">
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        
        </Stack>

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
