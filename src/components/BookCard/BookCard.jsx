import React from 'react'
import './BookCard.css'
import img1 from '../../assets/imgs/BookCard/1.jpg'
const BookCard = () => {
  return (
    <div className='bookcard'>
        <div className="book_image_cover">
            <img src={img1} alt="" />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-book-open-reader"></i>
        </div>
        <h4>Diqqat</h4>
        <h3><font>Muallif:</font> Kell Nyuport</h3>
        <h3><font>Kutubxona Manzili:</font> Alisher Navoiy</h3>
        <h3><font>Kitob turi:</font> Qattiq Muqova</h3>
        <span>
            <i class="fa-solid fa-star"></i>    
            <i class="fa-solid fa-star"></i>    
            <i class="fa-solid fa-star"></i>    
            <i class="fa-solid fa-star"></i>    
            <i class="fa-solid fa-star"></i>    
        </span>
    </div>
  )
}

export default BookCard