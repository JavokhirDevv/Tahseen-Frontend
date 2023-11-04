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
        <div class="pagination">
          <button class="prev-btn">&laquo; Previous</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="next-btn">Next &raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default BooksCover;
