import React, { useEffect, useState } from "react";
import "./TopBooks.css";
import BookCard from "../../GeneralComponents/BookCard/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import api_base_url from "../../../configurations/Config";
// Remove the import for booksMockData, as it's not needed

const TopBooks = () => {
  const [books, setBooks] = useState([]); // Initialize books as an empty array

  useEffect(() => {
    axios.get(`${api_base_url}api/Books`)
    .then(res => setBooks(res.data.data))
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div className="topbooks">
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
