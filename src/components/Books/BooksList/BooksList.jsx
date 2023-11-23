import React, { useEffect, useState } from 'react'
import BookCard from '../../GeneralComponents/BookCard/BookCard'
import './BooksList.css'
import { booksMockData } from '../../../MockData/FakeData'
import axios from 'axios'
import api_base_url from '../../../configurations/Config'

const BooksList = () => {
  const [books, setBooks] = useState([]); // Initialize books as an empty array

  const GetAllBooks = async () => {
      await axios.get(`${api_base_url}api/Books`)
      .then(res => setBooks(res.data.data))
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    GetAllBooks()
  }, [])
  console.log("11");
  console.log(books);
  return (
    <div className='bookslist'>
        {
          books.map((e) => {
            return(
              <BookCard value={e} className = "booklist_card"/>
            )
          })
        }
    </div>
  )
}

export default BooksList