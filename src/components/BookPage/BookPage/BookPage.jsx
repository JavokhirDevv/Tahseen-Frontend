import React, { useEffect, useState } from "react";
import "./BookPage.css";
import BookPageHeader from "../BookPageHeader/BookPageHeader";
import BookPageDetails from "../BookPageDetails/BookPageDetails";
import RelatedBookCard from "../RelatedBookCard/RelatedBookCard";
import TopBooks from "../../MainPage/TopBooks/TopBooks";
import { useParams } from "react-router-dom";
import { booksMockData } from "../../../MockData/FakeData";
import axios from "axios";

const BookPage = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]); // Initialize books as an empty array

  const GetAllBooks = async () => {
    await axios.get("https://localhost:7020/api/Books")
    .then(response => {
      const foundBook = response.data.data.find((book) => book.id == id);
      if (foundBook) {
        setBooks(foundBook); // Wrap the found book in an array
      } else {
        console.log(`Book with ID ${id} not found`);
      }
    })
    .catch((error) => {
      console.log(error);
    })
}
useEffect(() => {
  GetAllBooks()
}, [id])
  return (
    <div className="bookpage">
      <BookPageHeader bookHeader={books} />
      <div className="details_and_related_books_cover">
        {<BookPageDetails bookDetails={books} />} 
        <div className="related_books">
          <h1>Muallifga tegishli kitoblar ro`yhati</h1>
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
