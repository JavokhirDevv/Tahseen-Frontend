import React from "react";
import "./BookPageDetails.css";
const BookPageDetails = ({bookDetails}) => {
  console.log(bookDetails);
  return (
    <div className="bookpagedetails">
      <h1>Kitob haqida Malumot</h1>
      <table className="bookpagedetails_book_table">
        
        <tr className="book_table_tr">
          <td>
            Author
          </td>
          <td>{bookDetails.AuthorId}</td>
        </tr>
  
        
        <tr className="book_table_tr">
          <td>
            Author
          </td>
          <td>Sherlock Holmes</td>
        </tr>
        <tr className="book_table_tr">
          <td>
            Author
          </td>
          <td>Sherlock Holmes</td>
        </tr>
        <tr className="book_table_tr">
          <td>
            Author
          </td>
          <td>Sherlock Holmes</td>
        </tr>
        <tr className="book_table_tr">
          <td>
            Author
          </td>
          <td>Sherlock Holmes</td>
        </tr>
        <tr className="book_table_tr">
          <td>
            Author
          </td>
          <td>Sherlock Holmes</td>
        </tr>
  
      </table>
    </div>
  );
};

export default BookPageDetails;
