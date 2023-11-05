import React from "react";
import "./BookPage.css";
import BookPageHeader from "../BookPageHeader/BookPageHeader";
import BookPageDetails from "../BookPageDetails/BookPageDetails";
import RelatedBookCard from "../RelatedBookCard/RelatedBookCard";
import TopBooks from "../../MainPage/TopBooks/TopBooks";
const BookPage = () => {
  return (
    <div className="bookpage">
      <BookPageHeader />
      <div className="details_and_related_books_cover">
        <BookPageDetails />
        <div className="related_books">
          <h1>Muallifga tegishli kitoblar ro`yhati</h1>
          <div className="relatedbookcards">
          <RelatedBookCard/>
          <RelatedBookCard/>
          <RelatedBookCard/>
          <RelatedBookCard/>
          <RelatedBookCard/>
          <RelatedBookCard/>
          </div>
        </div>
      </div>
      <TopBooks />
    </div>
  );
};

export default BookPage;
