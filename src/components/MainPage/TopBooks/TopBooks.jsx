import React, { useState } from 'react';
import './TopBooks.css';
import BookCard from '../../GeneralComponents/BookCard/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { booksMockData } from '../../../MockData/FakeData';

const TopBooks = () => {
  const [books, setBooks] = useState(booksMockData);
  
  return (
    <div className='topbooks'>
      <h1>Eng ko`p o`qilgan kitoblar</h1>
      <div className="Slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {books.map((value) => (
            <SwiperSlide key={value.id}>
              <BookCard value={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopBooks;
