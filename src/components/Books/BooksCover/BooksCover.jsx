import React from "react";
import BookBar from "../BooksBar/BookBar";
import BookFilter from "../BooksFilter/BookFilter";
import "./BooksCover.css";
import BooksList from "../BooksList/BooksList";
const BooksCover = () => {
 

  return (
    <div className="BooksCover">
      <BookBar />
      <div className="book_filter_list_cover">
        <BookFilter />
        <BooksList />
      </div>
      <div className="pagination_cover">
        <div className="pagination">
          <button className="prev-btn">&laquo; Oldingisi</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="next-btn">Keyingisi &raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default BooksCover;
