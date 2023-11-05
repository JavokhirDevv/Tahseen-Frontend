import React from 'react'
import './TopBooks.css'
import BookCard from '../BookCard/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const TopBooks = () => {
  return (
    <div className='topbooks'>
        <h1>Eng ko`p o`qilgan kitoblar</h1>
        <div className="Slider">
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            >
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
                <SwiperSlide><BookCard/></SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default TopBooks