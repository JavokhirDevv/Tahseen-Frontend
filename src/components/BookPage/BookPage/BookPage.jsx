import React, { useEffect, useState } from "react";
import "./BookPage.css";
import BookPageHeader from "../BookPageHeader/BookPageHeader";
import BookPageDetails from "../BookPageDetails/BookPageDetails";
import RelatedBookCard from "../RelatedBookCard/RelatedBookCard";
import TopBooks from "../../MainPage/TopBooks/TopBooks";
import { useParams } from "react-router-dom";
import { booksMockData } from "../../../MockData/FakeData";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null); // Initialize with null to handle loading state

  useEffect(() => {
    const fetchBook = async () => {
      // Simulate an asynchronous data fetch
      const result = booksMockData.find((e) => e.id == id);
      setBook(result);
    };

    fetchBook();
  }, [id]);

  console.log(book);
  console.log(id);

  return (
    <div className="bookpage">
      <BookPageHeader bookHeader={book} />
      <div className="details_and_related_books_cover">
        {book && <BookPageDetails bookDetails={book} />} {/* Only render if book is available */}
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
