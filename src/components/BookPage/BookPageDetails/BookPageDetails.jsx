import React from "react";
import "./BookPageDetails.css";
const BookPageDetails = ({ bookDetails }) => {
  if (!bookDetails) {
    return null; // or some loading indicator
  }

  const { bookImage, Title, rating, author, publisher, genre, libraryBranch } = bookDetails;
  return (
    <div className="bookpagedetails">
      <h1>Kitob haqida Malumot</h1>
      <table className="bookpagedetails_book_table">
        <tr className="book_table_tr">
          <td>Nomi</td>
          <td>{bookDetails.title}</td>
        </tr>

        <tr className="book_table_tr">
          <td>Muallif</td>
          <td>{author&& (author.firstName + " " + author.lastName)}</td>
        </tr>

        <tr className="book_table_tr">
          <td>Kitob turi</td>
          <td>{bookDetails.condition}</td>
        </tr>

        <tr className="book_table_tr">
          <td>Umumiy Nusxalar</td>
          <td>{bookDetails.totalCopies}</td>
        </tr>

        <tr className="book_table_tr">
          <td>Mavjud Nusxalar</td>
          <td>{bookDetails.availableCopies}</td>
        </tr>
        
        <tr className="book_table_tr">
          <td>Til</td>
          <td>{bookDetails.language}</td>
        </tr>
        
        <tr className="book_table_tr">
          <td>Janr</td>
          <td>{genre && (genre.name)}</td>
        </tr>
        
        <tr className="book_table_tr">
          <td>Kutubxona</td>
          <td>{libraryBranch && (libraryBranch.name)}</td>
        </tr>

        <tr className="book_table_tr">
          <td>Kutubxona ochilish vaqtlari</td>
          <td>{libraryBranch && (libraryBranch.openingHours)}</td>
        </tr>
        
        <tr className="book_table_tr">
          <td>Nashriyot</td>
          <td>{publisher && (publisher.name)}</td>
        </tr>
        
        
        <tr className="book_table_tr">
          <td>Kitob sahifasi</td>
          <td>{bookDetails.totalPages}</td>
        </tr>
        
      </table>
    </div>
  );
};

export default BookPageDetails;
