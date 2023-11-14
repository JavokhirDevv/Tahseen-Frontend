import React, { useState } from 'react'
import BookCard from '../../GeneralComponents/BookCard/BookCard'
import './BooksList.css'
import { booksMockData } from '../../../MockData/FakeData'

const BooksList = () => {
const [book, setBook] = useState(booksMockData);
  return (
    <div className='bookslist'>
        {
          book.map((e) => {
            return(
              <BookCard value={e} className = "booklist_card"/>
            )
          })
        }
    </div>
  )
}

export default BooksList