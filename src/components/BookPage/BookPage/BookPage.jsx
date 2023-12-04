import React, { useEffect, useState } from "react";
import "./BookPage.css";
import BookPageHeader from "../BookPageHeader/BookPageHeader";
import BookPageDetails from "../BookPageDetails/BookPageDetails";
import RelatedBookCard from "../RelatedBookCard/RelatedBookCard";
import TopBooks from "../../MainPage/TopBooks/TopBooks";
import { useParams } from "react-router-dom";
import axios from "axios";
import api_base_url from "../../../configurations/Config";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({}); // Initialize book as null

  const getBookDetails = async () => {
    try {
      const response = await axios.get(`${api_base_url}api/Books`);
      const foundBook = response.data.data.find((book) => book.id == id);
      if (foundBook) {
        setBook(foundBook);
      } else {
        console.log(`Book with ID ${id} not found`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetails();
  }, [id]);

  console.log(book);
  return (
    <div className="bookpage">
      <BookPageHeader bookHeader={book} />
      <div className="details_and_related_books_cover">
        {<BookPageDetails bookDetails={book} />} 
        <div className="related_books">
          <h1>Muallifga tegishli kitoblar:</h1>
          <div className="relatedbookcards">
            <RelatedBookCard />
            <RelatedBookCard />
            <RelatedBookCard />
            <RelatedBookCard />
            <RelatedBookCard />
            <RelatedBookCard />
          </div>
        </div>
      </div>
      <TopBooks />
    </div>
  );
};

export default BookPage;
